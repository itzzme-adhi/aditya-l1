import * as THREE from 'three';
import { createRocket } from './rocket.js';
import { createOrbitalScenes } from './orbits.js';
import { createSatellite } from './satellite.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const vertex = `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vView;
void main(){
  vPosition=position;
  vec4 mv=modelViewMatrix*vec4(position,1.0);
  vNormal=normalize(normalMatrix*normal);
  vView=normalize(-mv.xyz);
  gl_Position=projectionMatrix*mv;
}`;
const noise = `
float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.0;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise3(vec3 p){
  vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
  return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
    mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
}
float fbm(vec3 p){float a=.5,s=0.0;for(int i=0;i<4;i++){s+=a*noise3(p);p=p*2.03+vec3(11.7,5.9,3.1);a*=.5;}return s;}
`;
const surface = `
uniform float uTime;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vView;
${noise}
void main(){
 vec3 p=normalize(vPosition);
 float t=uTime*.022;
 float flow=fbm(p*4.0+vec3(t,-t*.4,t*.3));
 float cells=fbm(p*25.0+flow*2.2+vec3(0,t,0));
 float fine=noise3(p*115.0+flow);
 float hot=smoothstep(.27,.72,cells*.8+fine*.2);
 vec3 color=mix(vec3(.48,.035,.003),vec3(1.6,.55,.065),hot);
 float rim=pow(1.0-max(dot(normalize(vNormal),normalize(vView)),0.0),3.0);
 color+=vec3(.7,.17,.012)*rim;
 gl_FragColor=vec4(color,1.0);
}`;
const halo = `
varying vec3 vNormal;
varying vec3 vView;
void main(){
 float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),3.6);
 gl_FragColor=vec4(vec3(1.5,.32,.035),rim*.48);
}`;
const glowVertex = `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const glowFragment = `
varying vec2 vUv;uniform float uTime;
void main(){
 vec2 p=(vUv-.5)*2.0;float r=length(p);float a=atan(p.y,p.x);
 float rays=.89+.06*sin(a*17.0+uTime*.04)+.05*sin(a*31.0-uTime*.03);
 float glow=exp(-r*r*7.0)*(1.0-smoothstep(.35,1.0,r))*rays;
 gl_FragColor=vec4(vec3(1.0,.22,.018),glow*.65);
}`;

export function createSolarScene(canvas, { onMode }) {
  let renderer, composer, bloom, output, renderPass, scene, sun, stars, camera;
  let disposed = false, failed = false, suspended = false, quality = 1;
  let launchProgress = 0, launchBlend = 0, rocket, orbital;
  let orbitState = {blend:0,path:0,halo:0,loop:0,angle:.7};
  let satellite, satelliteState={blend:0,rect:null};
  let progress = 0, elapsed = 0, last = 0, samples = 0, totalMs = 0;
  let reduced = false;
  const pointer = new THREE.Vector2();
  const smoothed = new THREE.Vector2();
  const coarse = matchMedia('(pointer: coarse)');
  const weak = (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  const uniforms = { uTime: { value: 0 } };
  function release() {
    if (!renderer) return;
    scene?.traverse(object => {
      object.geometry?.dispose();
      if (object.material) for (const material of [object.material].flat()) material.dispose();
      if (object.isInstancedMesh) object.dispose();
    });
    bloom?.dispose(); output?.dispose(); renderPass?.dispose(); composer?.dispose();
    renderer.dispose();
    renderer = undefined;
  }
  function fallback() {
    failed = true;
    onMode('fallback');
    release();
  }
  function resize() {
    if (!renderer || disposed) return;
    const width = innerWidth, height = innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, quality === 1 ? (width < 760 ? 1.35 : 1.75) : 1));
    renderer.setSize(width, height, false);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);
    last = 0;
  }
  function move(event) {
    if (coarse.matches || reduced) return;
    pointer.set((event.clientX / innerWidth - .5) * 2, (event.clientY / innerHeight - .5) * 2);
  }
  function lost(event) { event.preventDefault(); fallback(); }
  if (weak || new URLSearchParams(location.search).get('view')==='2d' || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    onMode('fallback');
    return { draw() {}, setProgress() {}, setLaunch() {}, setOrbital() {}, setSatellite() {}, setMotion() {}, dispose() {} };
  }
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
    renderer.setClearColor(0x070b14, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = .85;
    renderer.debug.onShaderError = () => { failed = true; };
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(42, 1, .1, 100);
    camera.position.set(0, 0, 9);
    sun = new THREE.Group();
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(1.65, 64, 40), new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: surface }));
    sun.add(sphere);
    const corona = new THREE.Mesh(new THREE.SphereGeometry(1.71, 48, 32), new THREE.ShaderMaterial({vertexShader: vertex, fragmentShader: halo, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false}));
    sun.add(corona);
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(8.7, 8.7), new THREE.ShaderMaterial({uniforms, vertexShader: glowVertex, fragmentShader: glowFragment, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false}));
    glow.position.z = -.3;
    sun.add(glow);
    scene.add(sun);
    // One instanced draw call for every star; no per-star objects or textures.
    const count = innerWidth < 760 ? 420 : 800;
    stars = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 4, 3), new THREE.MeshBasicMaterial({color: 0xb1cfe1, transparent: true, opacity: .65}), count);
    const matrix = new THREE.Object3D();
    let seed = 42;
    const random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
    for (let i = 0; i < count; i++) {
      matrix.position.set((random()-.5)*45, (random()-.5)*30, -4-random()*32);
      matrix.scale.setScalar(.009+random()*.021);
      matrix.updateMatrix();
      stars.setMatrixAt(i,matrix.matrix);
    }
    stars.instanceMatrix.needsUpdate = true;
    scene.add(stars);
    rocket = createRocket();
    scene.add(rocket.root);
    orbital=createOrbitalScenes();scene.add(orbital.root);
    satellite=createSatellite();scene.add(satellite.root);
    scene.add(new THREE.HemisphereLight(0xc1e4ff,0x313144,2.2));
    const key = new THREE.DirectionalLight(0xffe3b1,3.5);key.position.set(-3,4,6);scene.add(key);
    const rim = new THREE.DirectionalLight(0x69c9ff,2);rim.position.set(4,2,-2);scene.add(rim);
    composer = new EffectComposer(renderer);
    renderPass = new RenderPass(scene, camera);
    bloom = new UnrealBloomPass(new THREE.Vector2(1,1), .4, .65, .85);
    output = new OutputPass();
    composer.addPass(renderPass); composer.addPass(bloom); composer.addPass(output);
    resize();
    renderer.compile(scene, camera);
    if (failed) throw new Error();
    onMode('webgl');
  } catch {
    fallback();
  }
  window.addEventListener('resize',resize);
  window.addEventListener('pointermove',move,{passive:true});
  canvas.addEventListener('webglcontextlost',lost);
  return {
    setProgress(value) { progress = value; },
    setLaunch(value,blend) { launchProgress=value;launchBlend=blend; },
    setOrbital(value) { orbitState=value; },
    setSatellite(value) {satelliteState=value;},
    setMotion(value) {
      reduced = value; last = 0;
      onMode(failed ? 'fallback' : reduced ? 'static' : 'webgl');
    },
    draw(time) {
      if (disposed || failed || !renderer) return;
      if (['facts','quiz','faq'].includes(document.documentElement.dataset.chapter)) {last=0;return;}
      if ((innerWidth < 900 || innerHeight < 700) && launchBlend > .99 && orbitState.blend < .01) { last=0; return; }
      if (document.hidden || reduced) { last=0; suspended=true; return; }
      if (suspended) { last=0; suspended=false; }
      const dt = last ? Math.min(time-last,.1) : 1/60;
      last=time; elapsed+=dt;
      uniforms.uTime.value=elapsed;
      smoothed.lerp(pointer, 1-Math.exp(-dt*3));
      const mobile=innerWidth<760;
      sun.scale.setScalar(mobile ? .65 : 1);
      sun.position.set(mobile ? .04 : 2.45-progress*.65, mobile ? .9-progress*.4 : .25+progress*.15, -progress*2.5);
      sun.position.x += launchBlend*13;
      sun.visible=launchBlend<.99;
      rocket.update(launchProgress,launchBlend,elapsed);
      rocket.root.scale.multiplyScalar(1-orbitState.blend);
      rocket.root.visible=rocket.root.visible&&orbitState.blend<.99;
      orbital.update(orbitState,elapsed,dt,camera);
      sun.children[0].rotation.y=elapsed*.018;
      camera.position.set(smoothed.x*.1, -smoothed.y*.065, 9+progress*1.3);
      camera.lookAt(0,0,0);
      camera.updateMatrixWorld();
      orbital.root.scale.multiplyScalar(1-satelliteState.blend);
      orbital.root.visible=orbital.root.visible&&satelliteState.blend<.99;
      satellite.update(satelliteState,camera);
      if(satellite.root.visible){satellite.root.updateMatrixWorld(true);satelliteState.onProject?.(satellite.project(camera,satelliteState.rect));}
      stars.rotation.y=progress*.06+smoothed.x*.009;
      stars.rotation.x=smoothed.y*.006;
      try { composer.render(dt); } catch { fallback(); return; }
      if (failed) { fallback(); return; }
      if (elapsed>2 && samples<100) { samples++; totalMs+=dt*1000; }
      if (samples===100) {
        const average=totalMs/samples;
        if (average>65) { fallback(); return; }
        if (average>34 && quality===1) { quality=0; bloom.enabled=false; resize(); }
        samples++;
      }
    },
    dispose() {
      disposed=true;
      window.removeEventListener('resize',resize);
      window.removeEventListener('pointermove',move);
      canvas.removeEventListener('webglcontextlost',lost);
      release();
    }
  };
}
