import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function createLaunch(content, { goTo, travel }) {
  const make=(tag,cls)=>{const e=document.createElement(tag);if(cls)e.className=cls;return e;};
  const element=make('div','launch-experience');
  const panel=make('div','launch-panel');
  const caption=make('div','launch-caption glass-card');
  const counter=make('p','eyebrow');
  const title=make('h3');
  const body=make('p');
  const time=make('p','flight-time');
  const hint=make('p','flight-hint');
  const buttons=make('div','flight-buttons');
  const previous=make('button');previous.type='button';
  const next=make('button');next.type='button';
  buttons.append(previous,next);
  const skip=make('button','skip-flight');skip.type='button';
  const continueButton=make('button','continue-earth');continueButton.type='button';
  caption.append(counter,title,body,time,buttons,hint,continueButton,skip);
  const space=make('div','launch-space');space.setAttribute('aria-hidden','true');
  const illustration=make('div','static-rocket');
  illustration.append(make('i','rocket-body'),make('i','rocket-booster left'),make('i','rocket-booster right'));
  space.append(illustration);
  panel.append(caption,space);
  const disclaimer=make('p','flight-disclaimer');
  const details=make('details','flight-details');
  const summary=make('summary');
  const list=make('ol');
  details.append(summary,list);
  const end=make('div');end.id='launch-end';end.tabIndex=-1;
  element.append(panel,disclaimer,details,end);
  let index=0,language='en',deep=false,trigger;
  const clamp=n=>Math.max(0,Math.min(content.launchEvents.length-1,n));
  function display() {
    const ui=content.ui[language];const event=content.launchEvents[index];
    counter.textContent=`${ui.event} ${String(index+1).padStart(2,'0')} / ${content.launchEvents.length}`;
    title.textContent=event[language].title;body.textContent=event[language].body;
    time.textContent=`${ui.plannedTime}: ${event.plannedSeconds} ${ui.seconds}`;time.hidden=!deep;
    previous.textContent=ui.previous;next.textContent=ui.next;
    previous.disabled=index===0;next.disabled=index===content.launchEvents.length-1;
    continueButton.textContent=ui.continueEarth;continueButton.hidden=index!==content.launchEvents.length-1;
    hint.textContent=ui.flightHint;skip.textContent=ui.skipFlight;
    disclaimer.textContent=ui.flightArt;summary.textContent=ui.allEvents;
    panel.setAttribute('aria-label',ui.flight);
    panel.dataset.event=event.id;
  }
  function select(n,manual=false) {
    index=clamp(n);display();
    if(manual) {
      if(trigger)goTo(trigger.start+((index+.85)/(content.launchEvents.length+1))*(trigger.end-trigger.start));
      else travel.progress=(index+.85)/(content.launchEvents.length+1);
    }
  }
  previous.addEventListener('click',()=>select(index-1,true));
  next.addEventListener('click',()=>select(index+1,true));
  continueButton.addEventListener('click',()=>{travel.progress=1;const target=document.getElementById('journey');goTo(target);target.tabIndex=-1;target.focus({preventScroll:true});});
  skip.addEventListener('click',()=>{goTo(end);end.focus({preventScroll:true});});
  // Full sequence gives screen-reader users an uninterrupted reading route.
  details.addEventListener('toggle',()=>ScrollTrigger.refresh());
  return { element,
    render(lang,isDeep) {
      language=lang;deep=isDeep;display();
      list.replaceChildren(...content.launchEvents.map(event=>{
        const item=make('li');const h=make('h4');h.textContent=event[lang].title;
        const p=make('p');p.textContent=event[lang].body;
        const timing=make('p','flight-time');timing.hidden=!deep;
        timing.textContent=`${content.ui[lang].plannedTime}: ${event.plannedSeconds} ${content.ui[lang].seconds}`;
        item.append(h,p,timing);return item;
      }));
    },
    wire(canPin) {
      trigger=undefined;
      if(!canPin){details.open=true;return;}
      details.open=false;
      const tween=gsap.to(travel,{progress:1,ease:'none',onUpdate:()=>select(Math.min(14,Math.floor(travel.progress*16))),scrollTrigger:{
        trigger:panel,start:'top 115px',end:()=>`+=${(content.launchEvents.length+1)*350}`,
        pin:true,scrub:.25,invalidateOnRefresh:true,refreshPriority:10
      }});
      trigger=tween.scrollTrigger;
    }
  };
}
