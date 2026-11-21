const CACHE='goal-trackr-v4.0';
const CORE=['/','/index.html','/app.js','/model.js','/i18n.js','/style.css','/trackrr-icon.png','/public-sans.ttf','/manifest.webmanifest'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('goal-trackr-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin||!CORE.includes(u.pathname))return;e.respondWith(fetch(e.request).then(async r=>{if(r.ok&&!r.redirected){const c=await caches.open(CACHE);await c.put(e.request,r.clone())}return r}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||Response.error())))});
