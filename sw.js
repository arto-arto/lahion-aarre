const CACHE='lahion-aarre-v3';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./assets/app-1.txt','./assets/app-2.txt','./assets/app-3.txt','./assets/app-4.txt','./assets/board-1.txt','./assets/board-2.txt','./assets/board-3.txt','./assets/board-4.txt','./assets/board-5.txt','./assets/board-6.txt','./assets/board-7.txt','./assets/board-8.txt','./assets/board-9.txt','./assets/board-10.txt','./assets/board-11.txt'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{if(e.request.method==='GET'&&resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return resp}))));
