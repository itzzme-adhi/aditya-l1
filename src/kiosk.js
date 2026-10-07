export function createKiosk(content,{motion,goTo,reset}){
 if(new URLSearchParams(location.search).get('kiosk')!=='1')return{render(){},start(){},dispose(){}};
 document.documentElement.dataset.kiosk='true';
 let language='en',playing=false,idleTimer,frame,last=0,holdUntil=0;
 const panel=document.createElement('aside');panel.className='kiosk-panel';
 const caption=document.createElement('p');caption.className='kiosk-caption';
 const status=document.createElement('p');const button=document.createElement('button');button.type='button';
 panel.append(caption,status,button);document.body.append(panel);
 const copy=()=>content.finale[language].ui;
 function render(lang=language){language=lang;const u=copy();status.textContent=motion.matches?u.kioskReduced:playing?u.kioskPlaying:u.kioskPaused;button.textContent=playing?u.pause:u.resume;document.documentElement.dataset.kioskPlaying=String(playing);updateCaption();}
 let previousCaption='';
 function updateCaption(){const section=content.sections.find(s=>s.id===document.documentElement.dataset.chapter)||content.sections[0];const text=copy().kioskCaption.replace('{chapter}',String(content.sections.indexOf(section)+1).padStart(2,'0')).replace('{title}',section[language].title);if(text!==previousCaption){caption.textContent=text;previousCaption=text;}}
 function pause(){playing=false;last=0;clearTimeout(idleTimer);render();if(!document.hidden)idleTimer=setTimeout(restart,60000);}
 function restart(){clearTimeout(idleTimer);reset();goTo(0);playing=!motion.matches;holdUntil=Date.now()+3500;last=0;render();}
 function step(now){
  if(!document.hidden&&playing){
   const dt=last?Math.min((now-last)/1000,.05):0;last=now;
   if(Date.now()>holdUntil){const end=document.documentElement.scrollHeight-innerHeight;
    if(scrollY>=end-2){playing=false;render();idleTimer=setTimeout(restart,4500);}
    else goTo(Math.min(end,scrollY+dt*65));
   }
  }else last=0;
  if(!document.hidden)updateCaption();
  frame=requestAnimationFrame(step);
 }
 function interact(e){if(e.target===button)return;pause();}
 const events=['pointerdown','touchstart','keydown','wheel'];events.forEach(type=>window.addEventListener(type,interact,{passive:true}));
 button.addEventListener('click',()=>playing?pause():restart());
 function visibility(){if(document.hidden){clearTimeout(idleTimer);last=0;}else if(!playing){pause();}}
 function reduced(){pause();}
 document.addEventListener('visibilitychange',visibility);motion.addEventListener('change',reduced);
 return{render,start(){restart();frame=requestAnimationFrame(step);},dispose(){clearTimeout(idleTimer);cancelAnimationFrame(frame);events.forEach(type=>window.removeEventListener(type,interact));document.removeEventListener('visibilitychange',visibility);motion.removeEventListener('change',reduced);panel.remove();}};
}
