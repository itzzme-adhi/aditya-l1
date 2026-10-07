const NS='http://www.w3.org/2000/svg';
const el=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const svg=(tag,attrs={})=>{const e=document.createElementNS(NS,tag);for(const [k,v]of Object.entries(attrs))e.setAttribute(k,v);return e;};
export function createOrbitalUI(content, state) {
  let language='en',deep=false,selected='L1';
  const ui=()=>content.ui[language];
  const journey=el('div','journey-visual');
  const routeSvg=svg('svg',{viewBox:'0 0 800 320',role:'img'});
  const routePath='M 95 210 C 170 110 230 260 95 255 C -5 230 100 65 225 145 C 355 275 110 335 60 200 C 45 80 300 50 360 175 S 560 250 710 90';
  routeSvg.append(svg('path',{d:routePath,fill:'none',stroke:'#ffc77a','stroke-width':2,opacity:.18}));
  const drawing=svg('path',{d:routePath,fill:'none',stroke:'#ffc77a','stroke-width':3,pathLength:1,'stroke-dasharray':1,'stroke-dashoffset':1});routeSvg.append(drawing);
  routeSvg.append(svg('circle',{cx:115,cy:205,r:20,fill:'#4ca4c7'}),svg('circle',{cx:710,cy:90,r:6,fill:'#ffc77a'}));
  const earthText=svg('text',{x:115,y:250,'text-anchor':'middle',fill:'#b4e8f4'}),l1Text=svg('text',{x:710,y:67,'text-anchor':'middle',fill:'#ffc77a'});
  routeSvg.append(earthText,l1Text);
  const routeCaption=el('p','visual-note');const stageList=el('ol','journey-stages');journey.append(routeSvg,routeCaption,stageList);
  const lagrange=el('div','lagrange-interactive glass-card');
  const map=svg('svg',{viewBox:'0 0 1000 660',role:'img'});
  map.append(svg('circle',{cx:450,cy:330,r:300,fill:'none',stroke:'#ffffff24','stroke-width':2,'stroke-dasharray':'6 10'}));
  map.append(svg('path',{d:'M150 330 H840 M450 330 L600 70 L750 330 L600 590 Z',fill:'none',stroke:'#ffffff22','stroke-width':2}));
  map.append(svg('circle',{cx:450,cy:330,r:32,fill:'#ffc16d'}),svg('circle',{cx:750,cy:330,r:16,fill:'#89dbea'}));
  const sunLabel=svg('text',{x:450,y:394,'text-anchor':'middle',fill:'#ffd699'}),earthLabel=svg('text',{x:750,y:390,'text-anchor':'middle',fill:'#b8f2ff'});map.append(sunLabel,earthLabel);
  const coords={L1:[690,330],L2:[840,330],L3:[150,330],L4:[600,70],L5:[600,590]};
  const circles={};
  for(const point of content.lagrangePoints){
    const [x,y]=coords[point.id];const circle=svg('circle',{cx:x,cy:y,r:13,fill:'#23344c',stroke:'#ffc77a','stroke-width':3});
    circle.style.cursor='pointer';circle.addEventListener('click',()=>choose(point.id));circles[point.id]=circle;
    const label=svg('text',{x,y:y-27,'text-anchor':'middle',fill:'#f4eee2'});label.textContent=point.id;map.append(circle,label);
  }
  const buttons=el('div','point-buttons');buttons.setAttribute('role','group');
  const pointButtons={};
  for(const p of content.lagrangePoints){const b=el('button','',p.id);b.type='button';b.addEventListener('click',()=>choose(p.id));buttons.append(b);pointButtons[p.id]=b;}
  const panel=el('div','point-description');panel.setAttribute('aria-live','polite');panel.setAttribute('aria-atomic','true');
  const pointTitle=el('h3'),pointQuick=el('p'),pointDeep=el('p');panel.append(pointTitle,pointQuick,pointDeep);
  const note=el('p','visual-note');lagrange.append(map,buttons,panel,note);
  const halo=el('div','halo-visual');
  const views=el('div','orbit-views');views.setAttribute('role','group');
  const viewButtons=[];
  for(const [id,angle]of [['front',0],['tilted',.7],['side',1.4]]){
    const b=el('button');b.type='button';b.addEventListener('click',()=>{state.angle=angle;renderViews();drawHalo();});views.append(b);viewButtons.push({id,angle,b});
  }
  const haloSvg=svg('svg',{viewBox:'0 0 700 390',role:'img'});
  const orbitPath=svg('path',{fill:'none',stroke:'#8de3ed','stroke-width':3});
  const cross=svg('path',{d:'M340 195 H360 M350 185 V205',stroke:'#ffc77a','stroke-width':2});
  const craft=svg('rect',{width:14,height:14,rx:2,fill:'#ffc77a'});
  haloSvg.append(orbitPath,cross,craft);
  const orbitLabel=el('p','orbit-label'),haloNote=el('p','visual-note');halo.append(views,haloSvg,orbitLabel,haloNote);
  function choose(id){selected=id;renderPoint();}
  function renderPoint(){
    const p=content.lagrangePoints.find(p=>p.id===selected)[language];
    pointTitle.textContent=`${selected} · ${p.title}`;pointQuick.textContent=p.quick;pointDeep.textContent=p.deep;pointDeep.hidden=!deep;
    for(const id of Object.keys(pointButtons)){pointButtons[id].setAttribute('aria-pressed',String(id===selected));circles[id].setAttribute('fill',id===selected?'#ffc77a':'#23344c');}
  }
  function renderViews(){for(const {id,angle,b}of viewButtons){b.textContent=ui()[id];b.setAttribute('aria-pressed',String(angle===state.angle));}}
  function haloPoint(t){return [350+Math.cos(t)*240*Math.cos(state.angle)-Math.sin(2*t)*35*Math.sin(state.angle),195+Math.sin(t)*125];}
  let drawnAngle;
  function drawHalo(){if(drawnAngle!==state.angle){const pts=[];for(let i=0;i<=100;i++)pts.push(haloPoint(i/100*Math.PI*2));orbitPath.setAttribute('d',pts.map((p,i)=>`${i?'L':'M'}${p[0]} ${p[1]}`).join(' '));drawnAngle=state.angle;}const p=haloPoint((state.loop+.08)*Math.PI*2);craft.setAttribute('x',p[0]-7);craft.setAttribute('y',p[1]-7);}
  return {journey,lagrange,halo,
    render(lang,isDeep){language=lang;deep=isDeep;
      routeSvg.setAttribute('aria-label',ui().journeyDiagram);map.setAttribute('aria-label',ui().diagram);haloSvg.setAttribute('aria-label',ui().haloDiagram);
      earthText.textContent=ui().earth;l1Text.textContent=content.lagrangePoints[0].id;sunLabel.textContent=ui().sun;earthLabel.textContent=ui().earth;
      buttons.setAttribute('aria-label',ui().pointSelector);views.setAttribute('aria-label',ui().haloView);
      routeCaption.textContent=ui().routeNote;note.textContent=ui().diagramNote;haloNote.textContent=ui().haloNote;orbitLabel.textContent=ui().orbitLabel;
      stageList.setAttribute('aria-label',ui().journeyStages);
      stageList.replaceChildren(...content.journeyStages.map(s=>{const item=el('li');item.append(el('h3','',s[lang].title),el('p','',s[lang].body));return item;}));renderPoint();renderViews();drawHalo();
    },
    update(reduced){drawing.setAttribute('stroke-dashoffset',String(reduced?0:1-state.path));if(!reduced)drawHalo();}
  };
}
