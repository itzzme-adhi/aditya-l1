import * as THREE from 'three';

// Illustrative proportions, not an engineering reconstruction.
export function createRocket() {
  const root = new THREE.Group();
  const white = new THREE.MeshStandardMaterial({color:0xe8ecee,roughness:.4,metalness:.3});
  const dark = new THREE.MeshStandardMaterial({color:0x617185,roughness:.5,metalness:.25});
  const orange = new THREE.MeshStandardMaterial({color:0xc76635,roughness:.5,metalness:.25});
  const gold = new THREE.MeshStandardMaterial({color:0xd5a13d,roughness:.35,metalness:.65});
  const blue = new THREE.MeshStandardMaterial({color:0x153858,roughness:.35,metalness:.55});
  const fire = new THREE.MeshBasicMaterial({color:0xffad3c,transparent:true,opacity:.8,blending:THREE.AdditiveBlending,depthWrite:false});
  function mesh(geometry,material,parent,y=0) {
    const item=new THREE.Mesh(geometry,material);item.position.y=y;parent.add(item);return item;
  }
  function cylinder(radius,height,material,parent,y=0) {return mesh(new THREE.CylinderGeometry(radius,radius,height,24),material,parent,y);}
  function stage(y,height,radius,material) {
    const group=new THREE.Group();group.position.y=y;root.add(group);
    cylinder(radius,height,material,group);
    cylinder(radius*1.025,.08,dark,group,-height/2+.09);
    cylinder(radius*1.025,.08,dark,group,height/2-.09);
    mesh(new THREE.CylinderGeometry(radius*.36,radius*.62,.2,16),dark,group,-height/2-.1);
    const flame=mesh(new THREE.ConeGeometry(radius*.64,1.1,16),fire,group,-height/2-.67);
    flame.rotation.z=Math.PI;
    return {group,flame,y};
  }
  const stages=[stage(-1.5,2.5,.27,white),stage(.43,1.24,.27,white),stage(1.47,.75,.24,orange),stage(2.05,.38,.2,dark)];
  const boosters=[];
  for(let i=0;i<6;i++) {
    const angle=i*Math.PI/3;
    const part=stage(-1.8,1.85,.12,white);
    part.group.position.x=Math.cos(angle)*.43;part.group.position.z=Math.sin(angle)*.43;
    mesh(new THREE.ConeGeometry(.12,.27,16),white,part.group,1.06);
    boosters.push({...part,angle,air:i===1||i===4});
  }
  const fairings=[];
  for(let i=0;i<2;i++) {
    const half=new THREE.Group();half.position.y=2.82;root.add(half);
    mesh(new THREE.CylinderGeometry(.34,.34,1,24,1,true,i*Math.PI,Math.PI),white,half);
    mesh(new THREE.ConeGeometry(.34,.5,24,1,true,i*Math.PI,Math.PI),white,half,.75);
    fairings.push(half);
  }
  const satellite=new THREE.Group();satellite.position.y=2.65;root.add(satellite);
  mesh(new THREE.BoxGeometry(.36,.4,.32),gold,satellite);
  for(const x of [-.205,.205]) {const panel=mesh(new THREE.BoxGeometry(.04,.34,.3),blue,satellite);panel.position.x=x;}
  const clamp=THREE.MathUtils.clamp;
  const ramp=(n,start)=>THREE.MathUtils.smoothstep(n,start,start+.75);
  function detach(part,n,start,direction=1) {
    const a=ramp(n,start);
    part.group.position.y=part.y-a*3;
    part.group.position.x=a*direction*1.35;
    part.group.rotation.z=a*direction*.45;
    part.group.visible=n<start+1.2;
  }
  return { root,
    update(progress,blend,time) {
      root.visible=blend>.001;
      const n=Math.min(clamp(progress,0,1)*16,14.99999);
      const mobile=innerWidth<900;
      const focus=THREE.MathUtils.smoothstep(n,4,10);
      root.position.set(mobile ? .35 : 2.55, THREE.MathUtils.lerp(-.15,-3.7,focus), (1-blend)*-12);
      root.scale.setScalar(mobile ? .58 : THREE.MathUtils.lerp(.74,1.5,focus));
      root.rotation.z=-.025-Math.min(n,4)*.015;
      root.rotation.y=.35;
      stages.forEach((s,i)=>{s.group.position.set(0,s.y,0);s.group.rotation.z=0;s.group.visible=true;s.flame.visible=false;});
      detach(stages[0],n,4,-1);detach(stages[1],n,7,1);detach(stages[2],n,9,-1);
      stages[0].flame.visible=n<4;
      stages[1].flame.visible=n>=5&&n<7;
      stages[2].flame.visible=n>=8&&n<9;
      stages[3].flame.visible=(n>=10&&n<11)||(n>=12&&n<13);
      for(const part of boosters) {
        const start=part.air?3:2;
        const a=ramp(n,start);
        part.group.position.set(Math.cos(part.angle)*(.43+a*1.6),part.y-a*2,Math.sin(part.angle)*(.43+a*1.6));
        part.group.rotation.z=-Math.cos(part.angle)*a*.5;
        part.group.visible=n<start+1.2;
        part.flame.visible=n<start&&(!part.air||n>=1);
        part.flame.scale.y=1+.08*Math.sin(time*18+part.angle);
      }
      fairings.forEach((half,i)=>{
        const a=ramp(n,6);const side=i===0?1:-1;
        half.position.set(side*a*1.7,2.82-a*.8,0);
        half.rotation.z=-side*a*.65;half.visible=n<7.2;
      });
      satellite.position.set(ramp(n,14)*.7,2.65+ramp(n,14)*1.0,0);
      stages.forEach(s=>{s.flame.scale.y=1+.07*Math.sin(time*20);});
      // The spacecraft remains stowed; panel deployment belongs to a later phase.
    }
  };
}
