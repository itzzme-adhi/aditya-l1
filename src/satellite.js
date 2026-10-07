import * as THREE from 'three';

export function createSatellite() {
  const root=new THREE.Group();
  const gold=new THREE.MeshStandardMaterial({color:0xb88632,metalness:.65,roughness:.42});
  const silver=new THREE.MeshStandardMaterial({color:0xc9d4de,metalness:.65,roughness:.3});
  const dark=new THREE.MeshStandardMaterial({color:0x142335,metalness:.4,roughness:.4});
  const solar=new THREE.MeshStandardMaterial({color:0x174c80,metalness:.45,roughness:.35});
  const lens=new THREE.MeshStandardMaterial({color:0x64bcdb,metalness:.55,roughness:.15});
  function box(x,y,z,mat,px=0,py=0,pz=0){const m=new THREE.Mesh(new THREE.BoxGeometry(x,y,z),mat);m.position.set(px,py,pz);root.add(m);return m;}
  box(1.5,1.4,1.1,gold);
  box(1.57,.08,1.17,silver,0,.72);box(1.57,.08,1.17,silver,0,-.72);
  for(const side of [-1,1]) {
    box(.5,.07,.07,silver,side*1.0);
    box(1.5,1.28,.06,solar,side*1.95,0,0);
    for(let j=0;j<7;j++)box(.015,1.28,.065,silver,side*1.95-.75+j*.25,0,.005);
    for(let j=0;j<5;j++)box(1.5,.012,.065,silver,side*1.95,-.64+j*.32,.005);
  }
  const anchors=[[-.45,.46,.78],[.45,.44,.77],[-.5,-.36,.73],[.48,-.36,.74],[-.83,.58,0],[.84,-.58,0],[1.12,1.86,.03]];
  for(let i=0;i<4;i++){
    const [x,y,z]=anchors[i];
    const tube=new THREE.Mesh(new THREE.CylinderGeometry(i<2?.2:.11,i<2?.2:.11,.32,24),dark);tube.rotation.x=Math.PI/2;tube.position.set(x,y,z-.15);root.add(tube);
    const aperture=new THREE.Mesh(new THREE.CircleGeometry(i<2?.15:.075,24),lens);aperture.position.set(x,y,z+.018);root.add(aperture);
  }
  box(.23,.27,.28,silver,-.85,.45);box(.23,.27,.28,silver,.85,-.45);
  const boom=new THREE.Mesh(new THREE.CylinderGeometry(.022,.022,1.3,10),silver);boom.position.set(.91,1.22,0);boom.rotation.z=-.34;root.add(boom);
  box(.17,.14,.17,dark,1.12,1.86,.03);
  const dots=anchors.map(p=>{const m=new THREE.Mesh(new THREE.SphereGeometry(.057,12,8),new THREE.MeshBasicMaterial({color:0xffcf79}));m.position.fromArray(p).add(new THREE.Vector3(0,0,.07));root.add(m);return m;});
  const vector=new THREE.Vector3();
  return {root,
    update(state,camera){
      const r=state.rect;
      root.visible=state.blend>.01&&r&&r.bottom>100&&r.top<innerHeight;
      if(!root.visible)return;
      const h=2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.position.z;
      const w=h*camera.aspect;
      root.position.set((r.left+r.width/2)/innerWidth*w-w/2,h/2-(r.top+r.height/2)/innerHeight*h,0);
      root.rotation.set(state.pitch,state.yaw,0);
      root.scale.setScalar(Math.min(r.width/6.3,r.height/4)*h/innerHeight*.88*state.blend);
      dots.forEach((d,i)=>{d.material.color.setHex(i===state.selected?0xffffff:0xffcf79);d.scale.setScalar(i===state.selected?1.4:1);});
    },
    project(camera,rect){
      return dots.map(dot=>{dot.getWorldPosition(vector);vector.project(camera);return {x:(vector.x*.5+.5)*innerWidth-rect.left,y:(-.5*vector.y+.5)*innerHeight-rect.top,visible:Math.abs(vector.z)<1};});
    }
  };
}
