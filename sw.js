var cacheName = 'it202-big-project-cache'; 
var cacheAssets = [ 
    'index.html'
  
]; 
  
// Call install Event 
self.addEventListener('install', e => { 
    // Wait until promise is finished  
    e.waitUntil( 
        caches.open(cacheName) 
        .then(cache => { 
            console.log(`Service Worker: Caching Files: ${cache}`); 
            cache.addAll(cacheAssets) 
                // When everything is set 
                .then(() => self.skipWaiting()) 
        }) 
    ); 
});

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});