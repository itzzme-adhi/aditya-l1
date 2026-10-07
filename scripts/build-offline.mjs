import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';
const root=resolve('dist');
async function walk(dir){const all=[];for(const entry of await readdir(dir,{withFileTypes:true})){const file=resolve(dir,entry.name);if(entry.isDirectory())all.push(...await walk(file));else if(entry.name!=='sw.js')all.push(file);}return all;}
const files=(await walk(root)).sort();
const hash=createHash('sha256');for(const file of files){hash.update(relative(root,file));hash.update(await readFile(file));}
const version=hash.digest('hex').slice(0,16);
const assets=files.map(file=>'./'+relative(root,file).split('\\').join('/'));
const worker=`// Generated from the entire production bundle. Do not edit dist files.
const PREFIX='aditya-l1:'+self.registration.scope+':';
const CACHE=PREFIX+${JSON.stringify(version)};
const ASSETS=${JSON.stringify(assets)};
self.addEventListener('install',event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
// Wait for old tabs to close before activating a new build; keep each visit coherent.
self.addEventListener('activate',event=>{
 event.waitUntil((async()=>{for(const name of await caches.keys())if(name.startsWith(PREFIX)&&name!==CACHE)await caches.delete(name);await self.clients.claim();})());
});
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);
 if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;
 const home=new URL('./',self.registration.scope);
 if(event.request.mode==='navigate'&&(url.pathname===home.pathname||url.pathname===home.pathname+'index.html')){
  event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(new URL('index.html',home).href))||fetch(event.request)));return;
 }
 if(ASSETS.some(path=>new URL(path,self.registration.scope).href===url.href))event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
`;
await writeFile(resolve(root,'sw.js'),worker);
console.log(`Offline cache ${version}: ${assets.length} local files.`);
