const C='souvenirs-v3';
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.json']))));
self.addEventListener('fetch',e=>{if(e.request.url.includes('/api/'))return;e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)))});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(_){}e.waitUntil(self.registration.showNotification(d.title||'Souvenirs',{body:d.body||'',icon:'icon-180.png'}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow('./'))});
