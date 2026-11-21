import fs from 'node:fs';
const mime={html:'text/html;charset=utf-8',js:'application/javascript',css:'text/css',svg:'image/svg+xml',png:'image/png',ttf:'font/ttf',webmanifest:'application/manifest+json'};
const assets={};for(const name of fs.readdirSync('public')){const ext=name.split('.').pop();if(!mime[ext]||name==='orbit.png'||name==='icon.png'||name==='icon-v2.png')continue;assets['/'+name]=[mime[ext],fs.readFileSync('public/'+name).toString('base64')]}
fs.rmSync('dist',{recursive:true,force:true});
fs.mkdirSync('dist/server',{recursive:true});fs.mkdirSync('dist/.openai',{recursive:true});
const api=fs.readFileSync('worker/api.mjs','utf8').replace('export async function api','async function api');
const code=api+'\nconst assets='+JSON.stringify(assets)+`;\nexport default {async fetch(request,env){const path=new URL(request.url).pathname;if(path==='/api/state')return api(request,env);const a=assets[path==='/'?'/index.html':path];if(!a)return new Response('Not found',{status:404});if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});return new Response(request.method==='HEAD'?null:Uint8Array.from(atob(a[1]),c=>c.charCodeAt(0)),{headers:{'Content-Type':a[0],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff',...(path==='/sw.js'?{'Service-Worker-Allowed':'/'}:{})}})}};`;
fs.writeFileSync('dist/server/index.js',code);fs.copyFileSync('.openai/hosting.json','dist/.openai/hosting.json');console.log('Built Worker with '+Object.keys(assets).length+' assets');
