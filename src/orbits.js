import * as THREE from 'three';

export function createOrbitalScenes() {
  const root=new THREE.Group();
  const journey=new THREE.Group();root.add(journey);
  const halo=new THREE.Group();root.add(halo);
  const earth=new THREE.Group();earth.position.set(-1.1,-.8,0);journey.add(earth);
  const surface=new THREE.ShaderMaterial({
    vertexShader:`varying vec3 p;varying vec3 n;void main(){p=position;n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 p;varying vec3 n;void main(){vec3 q=normalize(p);float land=sin(q.x*9.+sin(q.y*5.))*cos(q.y*8.+q.z*5.)+sin(q.z*13.+q.x*4.)*.4;vec3 c=mix(vec3(.025,.16,.32),vec3(.11,.35,.27),smoothstep(.23,.48,land));float cloud=smoothstep(.68,.88,sin(q.x*21.+q.y*8.)*cos(q.z*18.-q.y*11.));c=mix(c,vec3(.6,.8,.85),cloud*.55);float light=.5+.5*max(dot(normalize(n),normalize(vec3(-1.,.5,1.))),0.);gl_FragColor=vec4(c*light,1.);}`
  });
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(.7,48,32),surface));
  const atmosphere=new THREE.ShaderMaterial({transparent:true,blending:THREE.AdditiveBlending,depthWrite:false,
    vertexShader:`varying vec3 n;varying vec3 v;void main(){vec4 p=modelViewMatrix*vec4(position,1.);n=normalMatrix*normal;v=-p.xyz;gl_Position=projectionMatrix*p;}`,
    fragmentShader:`varying vec3 n;varying vec3 v;void main(){float a=pow(1.-abs(dot(normalize(n),normalize(v))),3.);gl_FragColor=vec4(.1,.65,1.,a*.55);}`});
  earth.add(new THREE.Mesh(new THREE.SphereGeometry(.75,40,28),atmosphere));
  const route=[];
  for(let i=0;i<=180;i++) {
    const t=i/180;
    if(t<.57){const u=t/.57,a=u*Math.PI*5,r=.82+u*.42;route.push(new THREE.Vector3(-1.1+Math.cos(a)*r,-.8+Math.sin(a)*r*.65,Math.sin(a)*.35));}
    else {const u=(t-.57)/.43;route.push(new THREE.Vector3(-2.34+u*3.85,-.8+u*2.2,Math.sin(u*Math.PI)*.7));}
  }
  const routeGeometry=new THREE.BufferGeometry().setFromPoints(route);
  const routeLine=new THREE.Line(routeGeometry,new THREE.LineBasicMaterial({color:0xffc77a,transparent:true,opacity:.95}));journey.add(routeLine);
  const destination=new THREE.Mesh(new THREE.SphereGeometry(.05,12,8),new THREE.MeshBasicMaterial({color:0xffd48c}));destination.position.copy(route.at(-1));journey.add(destination);
  const craft=()=>{
    const group=new THREE.Group();
    group.add(new THREE.Mesh(new THREE.BoxGeometry(.17,.2,.15),new THREE.MeshStandardMaterial({color:0xd4a348,metalness:.65,roughness:.45})));
    const panelMaterial=new THREE.MeshStandardMaterial({color:0x237ab0,metalness:.4,roughness:.5,side:THREE.DoubleSide});
    for(const sign of [-1,1]){const panel=new THREE.Mesh(new THREE.BoxGeometry(.29,.14,.02),panelMaterial);panel.position.x=sign*.24;group.add(panel);}
    return group;
  };
  const traveler=craft();journey.add(traveler);
  const haloGroup=new THREE.Group();halo.add(haloGroup);
  const orbit=[];
  const point=t=>new THREE.Vector3(1.75*Math.cos(t),1.25*Math.sin(t),.35*Math.sin(2*t));
  for(let i=0;i<=160;i++)orbit.push(point(i/160*Math.PI*2));
  haloGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(orbit),new THREE.LineBasicMaterial({color:0x85e5ef})));
  // Crosshair marks a mathematical location, not a central gravitating object.
  const axes=[new THREE.Vector3(-.12,0,0),new THREE.Vector3(.12,0,0),new THREE.Vector3(0,-.12,0),new THREE.Vector3(0,.12,0)];
  haloGroup.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(axes),new THREE.LineBasicMaterial({color:0xffc77a})));
  const orbiter=craft();orbiter.scale.setScalar(1.35);haloGroup.add(orbiter);
  let viewAngle=.7;
  return {root,update(state,time,dt,camera){
    const chapter=document.documentElement.dataset.chapter;
    root.visible=state.blend>.001&&(chapter==='journey'||chapter==='halo');
    const depth=-(1-state.blend)*10;
    const worldHeight=2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*(camera.position.z-depth);
    const worldWidth=worldHeight*camera.aspect;
    // Reserve the right 36% of the viewport; match the CSS reading column.
    const scale=worldWidth*.36/4.7;
    root.position.set(worldWidth*.24,-.05,depth);
    root.scale.setScalar(scale);
    journey.visible=chapter==='journey';
    journey.scale.setScalar(1);
    journey.position.x=.45;
    earth.rotation.y=time*.045;
    const count=Math.max(2,Math.floor(1+state.path*(route.length-1)));
    routeGeometry.setDrawRange(0,count);
    traveler.position.copy(route[Math.min(count-1,route.length-1)]);
    traveler.rotation.y=time*.1;
    halo.visible=chapter==='halo';halo.scale.setScalar(1);
    viewAngle=THREE.MathUtils.lerp(viewAngle,state.angle,1-Math.exp(-dt*5));
    haloGroup.rotation.set(.16,viewAngle,-.2);
    const a=(state.loop+.08)*Math.PI*2;
    orbiter.position.copy(point(a));orbiter.rotation.y=a;
  }};
}
