export function createOfflineStatus(content){
 const element=document.createElement('p');element.className='offline-status';element.setAttribute('role','status');
 let language=content.defaultLanguage,key='offlinePreparing';
 function render(lang=language){language=lang;element.textContent=content.finale[language].ui[key];}
 function set(value){key=value;render();}
 async function start(){
  if(!import.meta.env.PROD){set('offlineDev');return;}
  if(!('serviceWorker' in navigator)||!window.isSecureContext){set('offlineUnavailable');return;}
  try{
   const registration=await navigator.serviceWorker.register(new URL('./sw.js',document.baseURI),{scope:'./',updateViaCache:'none'});
   function watch(){const worker=registration.installing;if(worker)worker.addEventListener('statechange',()=>{if(worker.state==='installed'&&registration.waiting)set('offlineUpdate');if(worker.state==='redundant')set('offlineUnavailable');});}
   registration.addEventListener('updatefound',watch);watch();
   await navigator.serviceWorker.ready;set(registration.waiting?'offlineUpdate':'offlineReady');
  }catch{set('offlineUnavailable');}
 }
 return{element,render,start};
}
