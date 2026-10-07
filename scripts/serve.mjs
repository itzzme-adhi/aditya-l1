import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const port=Number(process.env.PORT||4173),host=process.env.HOST||'127.0.0.1';
const base='/'+(process.env.BASE_PATH||'').replace(/^\/+|\/+$/g,'');
const prefix=base==='/'?'/':base+'/';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.woff2':'font/woff2','.woff':'font/woff','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.glb':'model/gltf-binary'};
await stat(resolve(root,'index.html'));
createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(pathname===base&&base!=='/'){res.writeHead(302,{Location:prefix});res.end();return;}
  if(!pathname.startsWith(prefix)){res.writeHead(404);res.end();return;}
  const file=resolve(root,pathname.slice(prefix.length)||'index.html');
  if(!file.startsWith(resolve(root)+sep)){res.writeHead(403);res.end();return;}
  const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream','Cache-Control':'no-cache'});res.end(req.method==='HEAD'?undefined:data);
 }catch{res.writeHead(404);res.end();}
}).listen(port,host,()=>console.log(`Aditya-L1: http://${host}:${port}${prefix}\nExpo: http://${host}:${port}${prefix}?kiosk=1\nPress Ctrl+C to stop.`)).on('error',error=>{console.error(error.message);process.exitCode=1;});
