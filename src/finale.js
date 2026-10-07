import { gsap } from 'gsap';
const node=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;return e;};
const format=(s,values)=>s.replace(/\{(\w+)\}/g,(_,k)=>values[k]??'');
export function createFinale(content,{motion,onLayout}){
 let language='en',deep=false,index=0,answers=[],result=false,counterObserver;
 const tweens=new Set();
 const facts=node('div','facts-grid'),quiz=node('div','quiz-panel'),faq=node('div','faq-list'),footer=node('div','expo-footer');
 const confetti=node('div','confetti');confetti.setAttribute('aria-hidden','true');
 document.body.append(confetti);
 const local=()=>content.finale[language];
 const score=()=>answers.reduce((sum,a,i)=>sum+Number(a===local().questions[i].answer),0);
 function button(text,handler,cls='action-button'){const b=node('button',cls,text);b.type='button';b.addEventListener('click',handler);return b;}
 function focusQuestion(){(quiz.querySelector('h3'))?.focus({preventScroll:true});onLayout();}
 function celebrate(){
  if(motion.matches)return;
  confetti.replaceChildren();
  for(let i=0;i<48;i++){const p=node('i');p.style.left=`${Math.random()*100}%`;p.style.setProperty('--drift',`${(Math.random()-.5)*260}px`);p.style.background=['#ffc77a','#97e4ed','#fff3cf'][i%3];p.style.animationDelay=`${Math.random()*.4}s`;p.addEventListener('animationend',()=>p.remove(),{once:true});confetti.append(p);}
 }
 function renderQuiz(){
  const c=local(),u=c.ui;quiz.replaceChildren();
  if(result){
   const title=node('h3','score-title',format(u.score,{score:score(),total:c.questions.length}));title.tabIndex=-1;
   const shareText=format(u.shareText,{score:score(),total:c.questions.length});
   const text=node('textarea','share-text');text.readOnly=true;text.value=shareText;text.setAttribute('aria-label',u.shareLabel);
   const feedback=node('p','share-status');feedback.setAttribute('role','status');
   const actions=node('div','quiz-actions');
   actions.append(button(u.share,async()=>{
    if(navigator.share){try{await navigator.share({text:shareText});return;}catch(e){if(e.name==='AbortError')return;}}
    feedback.textContent=u.shareFailed;text.focus();text.select();
   }),button(u.copy,async()=>{try{await navigator.clipboard.writeText(shareText);feedback.textContent=u.copied;}catch{feedback.textContent=u.shareFailed;text.focus();text.select();}}),button(u.download,()=>{
    const url=URL.createObjectURL(new Blob([u.footer+'\n\n'+shareText+'\n'],{type:'text/plain;charset=utf-8'}));const a=node('a');a.href=url;a.download=u.downloadName;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
   }),button(u.restart,()=>{reset();focusQuestion();}));
   quiz.append(title,node('p','',score()===c.questions.length?u.perfect:u.encourage),text,actions,feedback);return;
  }
  const q=c.questions[index],answered=answers[index]!==undefined;
  quiz.append(node('p','eyebrow',format(u.question,{n:index+1,total:c.questions.length})));
  const field=node('fieldset'),legend=node('legend','quiz-question',q.question);field.append(legend);
  const options=node('div','quiz-options');
  q.options.forEach((option,i)=>{
   const b=button(option,()=>{answers[index]=i;renderQuiz();quiz.querySelector('.quiz-feedback').focus({preventScroll:true});onLayout();},'quiz-option');
   b.disabled=answered;
   if(answered){b.classList.toggle('is-correct',i===q.answer);b.classList.toggle('is-wrong',i===answers[index]&&i!==q.answer);b.setAttribute('aria-pressed',String(i===answers[index]));}
   options.append(b);
  });
  field.append(options);quiz.append(field);
  if(answered){
   const feedback=node('p','quiz-feedback',`${answers[index]===q.answer?u.correct:u.incorrect} ${q.explanation}`);feedback.tabIndex=-1;feedback.setAttribute('role','status');quiz.append(feedback);
   quiz.append(button(index===c.questions.length-1?u.finish:u.next,()=>{if(index===c.questions.length-1){result=true;renderQuiz();if(score()===c.questions.length)celebrate();}else{index++;renderQuiz();}const target=quiz.querySelector('legend,h3');target.tabIndex=-1;target.focus({preventScroll:true});onLayout();}));
  }
  if(answers.length)quiz.append(button(u.restart,()=>{reset();const target=quiz.querySelector('legend');target.tabIndex=-1;target.focus({preventScroll:true});onLayout();},'action-button secondary'));
 }
 function renderFacts(){
  counterObserver?.disconnect();tweens.forEach(t=>t.kill());tweens.clear();facts.replaceChildren();
  const c=local();
  counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(!entry.isIntersecting)return;counterObserver.unobserve(entry.target);
   const i=Number(entry.target.dataset.index),item=c.facts[i];if(item.count===undefined||motion.matches)return;
   const value=entry.target.querySelector('.fact-value'),animated={value:0};
   value.setAttribute('aria-hidden','true');entry.target.append(node('span','sr-only',item.value));
   const t=gsap.to(animated,{value:item.count,duration:1.1,ease:'power2.out',onUpdate:()=>{value.textContent=(item.prefix||'')+animated.value.toLocaleString(language==='ta'?'en-IN':'en-US',{minimumFractionDigits:item.decimals||0,maximumFractionDigits:item.decimals||0})+(item.suffix||'');},onComplete:()=>{value.textContent=item.value;tweens.delete(t);}});tweens.add(t);
  }),{threshold:.2});
  c.facts.forEach((f,i)=>{const card=node('article','fact-card');card.dataset.index=i;card.append(node('p','fact-value',f.value),node('h3','',f.label),node('p','',f.detail));facts.append(card);counterObserver.observe(card);});
 }
 function renderFAQ(){
  const open=[...faq.querySelectorAll('details')].map(d=>d.open);faq.replaceChildren();
  local().faq.forEach((q,i)=>{const detail=node('details','faq-item');detail.open=!!open[i];const summary=node('summary','',q.question);detail.append(summary,node('p','',q.quick),node('p','faq-analogy',q.analogy));if(deep)detail.append(node('p','faq-deep',q.deep));if(i===5){const a=node('a','source',local().ui.images);a.href=content.sources.find(s=>s.id==='isro-images').url;a.target='_blank';a.rel='noopener noreferrer';detail.append(a);}detail.addEventListener('toggle',onLayout);faq.append(detail);});
 }
 function renderFooter(){
  const u=local().ui;footer.replaceChildren();const logos=node('div','logo-placeholders');for(const key of ['collegeLogo','isroLogo']){
   const slot=node('div','logo-slot',u[key]);const path=content.branding?.[key];
   if(path){const image=node('img');image.alt=u[key+'Alt'];image.src=new URL(path,document.baseURI).href;image.addEventListener('load',()=>{slot.replaceChildren(image);});}
   logos.append(slot);
  }
  const sources=node('div','footer-links');
  for(const [i,id] of ['isro-overview','isro-flight','isro-images'].entries()){const a=node('a','source',u.sourceLabels[i]);a.href=content.sources.find(s=>s.id===id).url;a.target='_blank';a.rel='noopener noreferrer';sources.append(a);}
  const home=node('a','cta',u.home);home.href='#hero';
  footer.append(node('h2','',u.footer),logos,node('p','',u.logoNote),node('p','',u.credit),node('h3','',u.sources),sources,home);
 }
 function render(lang,isDeep){language=lang;deep=isDeep;renderFacts();renderQuiz();renderFAQ();renderFooter();}
 function reset(){index=0;answers=[];result=false;confetti.replaceChildren();renderQuiz();}
 function stopMotion(){tweens.forEach(t=>t.progress(1));confetti.replaceChildren();}
 motion.addEventListener('change',stopMotion);
 return{facts,quiz,faq,footer,render,reset,dispose(){counterObserver?.disconnect();tweens.forEach(t=>t.kill());confetti.remove();motion.removeEventListener('change',stopMotion);}};
}
