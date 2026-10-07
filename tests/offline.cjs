// Run with PLAYWRIGHT_MODULE pointing to an installed Playwright module and
// CHROMIUM_EXECUTABLE pointing to a browser binary. No test dependency is shipped.
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const assert=require('node:assert/strict');const {spawn}=require('node:child_process');const path=require('node:path');
(async()=>{
 const root=path.resolve(__dirname,'..');
 const servers=[['4173',''],['4174','/aditya-l1']].map(([PORT,BASE_PATH])=>spawn(process.execPath,['scripts/serve.mjs'],{cwd:root,env:{...process.env,PORT,BASE_PATH},stdio:'ignore'}));
 let browser;try{
 await new Promise(r=>setTimeout(r,600));
 const args=process.env.CHROMIUM_ARGS?JSON.parse(process.env.CHROMIUM_ARGS):[];
 browser=await chromium.launch({executablePath:process.env.CHROMIUM_EXECUTABLE||undefined,args,headless:true});
 const results=[];const errors=[];const external=[];
 for(const base of ['http://127.0.0.1:4173/','http://127.0.0.1:4174/aditya-l1/']){
  const context=await browser.newContext({reducedMotion:'reduce',viewport:{width:1280,height:900}});
  await context.route('**/*',route=>{if(new URL(route.request().url()).hostname!=='127.0.0.1'){external.push(route.request().url());return route.abort();}return route.continue();});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto(base);await page.waitForSelector('.loader',{state:'detached'});
  await page.waitForFunction(()=>document.querySelector('.offline-status')?.textContent.includes('Ready for offline'));
  await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
  const cacheCount=await page.evaluate(async()=>{const keys=await caches.keys();const c=await caches.open(keys.find(k=>k.startsWith('aditya-l1:')));return(await c.keys()).length;});assert.equal(cacheCount,55);
  // Disable every network connection, then perform a navigation with a query string.
  await context.setOffline(true);await page.goto(base+'?view=2d');await page.waitForSelector('.loader',{state:'detached'});
  assert.equal(await page.locator('.chapter').count(),13);
  await page.getByRole('button',{name:'தமிழ்',exact:true}).click();await page.getByRole('button',{name:'விரிவாக',exact:true}).click();
  assert.equal(await page.locator('.faq-deep').count(),6);
  assert(await page.evaluate(()=>document.fonts.check('400 16px "Noto Sans Tamil"','தமிழ்')));
  for(let i=0;i<7;i++){await page.locator('.instrument-list button').nth(i).click();assert.equal(await page.locator('.instrument-marker[aria-pressed=true]').count(),1);}
  await page.getByRole('button',{name:'EN',exact:true}).click();
  for(const a of [0,1,1,2,0,1]){await page.locator('.quiz-option').nth(a).click();await page.locator('.quiz-panel .action-button').first().click();}
  assert((await page.locator('.score-title').textContent()).includes('6 / 6'));
  await page.setViewportSize({width:390,height:844});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  results.push({base,cachedFiles:cacheCount,offlineQuiz:'6/6',TamilFonts:true,mobileOverflow:false});
 }
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);console.log(JSON.stringify({results,errors,externalRequests:external.length},null,2));
 }finally{await browser?.close();servers.forEach(s=>s.kill());}
})().catch(error=>{console.error(error);process.exitCode=1;});
