const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
export function createSatelliteUI(content,state) {
  let language='en',deep=false,drag;
  const element=el('div','satellite-experience');
  const layout=el('div','satellite-layout');
  const stage=el('div','satellite-stage');stage.tabIndex=0;stage.setAttribute('role','group');
  const hint=el('p','satellite-hint');hint.id='satellite-help';stage.setAttribute('aria-describedby',hint.id);
  const sketch=el('div','satellite-sketch');sketch.setAttribute('aria-hidden','true');
  sketch.append(el('i','sketch-core'),el('i','sketch-panel panel-left'),el('i','sketch-panel panel-right'),el('i','sketch-boom'));stage.append(sketch);
  const positions=[[39,39],[57,39],[39,57],[57,57],[28,31],[68,65],[69,16]];
  const markers=content.instruments.map((p,i)=>{
    const b=el('button','instrument-marker',String(i+1));b.type='button';b.addEventListener('click',()=>select(i));stage.append(b);return b;
  });
  const details=el('div','instrument-details glass-card');details.id='instrument-details';details.setAttribute('aria-live','polite');details.setAttribute('aria-atomic','true');
  const name=el('p','eyebrow'),title=el('h3'),quick=el('p'),analogyLabel=el('p','card-label'),analogy=el('p'),extra=el('div','instrument-deep'),extraTitle=el('h4'),extraBody=el('p');extra.append(extraTitle,extraBody);details.append(name,title,quick,analogyLabel,analogy,extra);
  layout.append(stage,details);
  const rotation=el('div','rotation-controls');
  const left=el('button'),right=el('button'),reset=el('button');for(const b of [left,right,reset])b.type='button';rotation.append(left,right,reset);
  left.addEventListener('click',()=>{state.yaw-=.25;});right.addEventListener('click',()=>{state.yaw+=.25;});reset.addEventListener('click',()=>{state.yaw=.28;state.pitch=-.12;});
  const list=el('div','instrument-list');list.setAttribute('role','group');
  const buttons=content.instruments.map((p,i)=>{const b=el('button','',p.id);b.type='button';b.setAttribute('aria-controls',details.id);b.addEventListener('click',()=>select(i));list.append(b);return b;});
  markers.forEach(b=>b.setAttribute('aria-controls',details.id));
  const note=el('p','visual-note'),memory=el('p','memory-banner'),memoryNote=el('p','visual-note'),credit=el('p','payload-credit');
  element.append(hint,layout,rotation,list,note,memory,memoryNote,credit);
  function select(index){state.selected=index;renderDetails();}
  function renderDetails(){const p=content.instruments[state.selected],s=p[language],u=content.ui[language];name.textContent=p.id;title.textContent=s.title;quick.textContent=s.quick;analogyLabel.textContent=u.payloadAnalogy;analogy.textContent=s.analogy;extraTitle.textContent=u.payloadDeep;extraBody.textContent=s.deep;extra.hidden=!deep;buttons.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.selected)));markers.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===state.selected)));}
  function interactive(){return document.documentElement.dataset.scene==='webgl';}
  stage.addEventListener('pointerdown',e=>{
    if(!interactive()||e.target.closest('button')||e.button!==0)return;
    drag={id:e.pointerId,x:e.clientX,y:e.clientY};stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');
  });
  stage.addEventListener('pointermove',e=>{if(!drag||drag.id!==e.pointerId)return;state.yaw+=(e.clientX-drag.x)*.009;state.pitch=Math.max(-1,Math.min(1,state.pitch+(e.clientY-drag.y)*.006));drag.x=e.clientX;drag.y=e.clientY;});
  function release(){drag=undefined;stage.classList.remove('dragging');}
  stage.addEventListener('pointerup',release);stage.addEventListener('pointercancel',release);stage.addEventListener('lostpointercapture',release);
  stage.addEventListener('keydown',e=>{
    if(e.target!==stage||!interactive())return;
    if(e.key==='ArrowLeft')state.yaw-=.2;else if(e.key==='ArrowRight')state.yaw+=.2;else if(e.key==='ArrowUp')state.pitch=Math.max(-1,state.pitch-.15);else if(e.key==='ArrowDown')state.pitch=Math.min(1,state.pitch+.15);else return;e.preventDefault();
  });
  function setFallback(){markers.forEach((b,i)=>{b.style.left=positions[i][0]+'%';b.style.top=positions[i][1]+'%';b.hidden=false;});}
  return {element,
    render(lang,isDeep){language=lang;deep=isDeep;const u=content.ui[lang];stage.setAttribute('aria-label',u.viewer);list.setAttribute('aria-label',u.instrumentList);left.textContent=u.rotateLeft;right.textContent=u.rotateRight;reset.textContent=u.resetView;note.textContent=u.modelNote;memory.textContent=u.memory;memoryNote.textContent=u.memoryNote;credit.textContent=u.madeIndia;markers.forEach((b,i)=>b.setAttribute('aria-label',`${u.openInstrument} ${content.instruments[i].id}`));renderDetails();this.mode();},
    mode(){const live=interactive();hint.textContent=content.ui[language][live?'dragHint':'staticHint'];rotation.hidden=!live;stage.classList.toggle('is-static',!live);if(!live)setFallback();},
    measure(){state.rect=stage.getBoundingClientRect();},
    project(points){if(!interactive())return;
      const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
      const positions=points.map(p=>({...p,x:clamp(p.x,24,state.rect.width-24),y:clamp(p.y,24,state.rect.height-24)}));
      for(let pass=0;pass<8;pass++)for(let i=0;i<positions.length;i++)for(let j=i+1;j<positions.length;j++){
        const a=positions[i],b=positions[j],dx=b.x-a.x,dy=b.y-a.y,length=Math.hypot(dx,dy);
        if(length<48){const nx=length>1?dx/length:1,ny=length>1?dy/length:0,push=(48-length)/2;a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push;}
      }
      positions.forEach((p,i)=>{const b=markers[i];b.style.left=clamp(p.x,24,state.rect.width-24)+'px';b.style.top=clamp(p.y,24,state.rect.height-24)+'px';b.hidden=!p.visible;});
    }
  };
}
