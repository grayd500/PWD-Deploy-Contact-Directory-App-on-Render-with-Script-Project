// client/src-sw.js:
// 🚧: Create a service worker that caches static assets:
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          // List of static assets to cache
          '/index.html',
          '/main.bundle.js',
          '/cards.bundle.js',
          '/install.bundle.js',
          '/icon-192x192.png',
          '/icon-512x512.png',
          '/manifest.json',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Cache hit - return the response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

  
  