const CACHE_NAME = 'dhikr-v3';
const ASSETS = [
  './',
  './index.html',
  './data.js',
  './logo.png',
  './icon-192.png',
  './icon-512.png',
  './cheikh-khaled.jpg',
  './manifest.json'
];

// Installation : mise en cache des fichiers
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation : nettoyage des anciens caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch : cache-first, puis reseau
self.addEventListener('fetch', function(event) {
  // Ignorer les requetes non-GET et les requetes Google Analytics/Fonts
  if (event.request.method !== 'GET') return;
  var url = event.request.url;
  if (url.includes('googletagmanager') || url.includes('google-analytics')) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        // Mettre en cache les Google Fonts pour usage offline
        if (response.ok && (url.includes('fonts.googleapis') || url.includes('fonts.gstatic'))) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function() {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
