import { readFile,stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const root=resolve('dist');const sw=await readFile(resolve(root,'sw.js'),'utf8');
const assets=JSON.parse(sw.match(/const ASSETS=(\[[^\n]+\]);/)[1]);
assert(assets.includes('./index.html'));assert(assets.some(a=>a.endsWith('.woff2')));
for(const asset of assets){assert(!/^https?:/.test(asset));assert((await stat(resolve(root,asset))).size>0);}
const html=await readFile(resolve(root,'index.html'),'utf8');
assert(!/(?:src|href)=["']https?:/i.test(html));
for(const asset of assets.filter(a=>a.endsWith('.css'))){const css=await readFile(resolve(root,asset),'utf8');assert(!/url\(\s*["']?https?:/i.test(css));}
const c=JSON.parse(await readFile('src/content.json','utf8'));
for(const s of c.sections)for(const lang of ['en','ta'])assert(s[lang].quick.body&&s[lang].deep.paragraphs.length);
assert.equal(c.instruments.length,7);assert.equal(c.sections.length,13);
assert.equal(c.verification.filter(v=>v.status==='VERIFY').length,0);
console.log(`PASS: ${assets.length} local cache entries, bundled fonts, no external HTML/CSS assets, bilingual layers, 7 instruments, 13 chapters, no unresolved VERIFY items.`);
