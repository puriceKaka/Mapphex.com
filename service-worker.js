const CACHE_NAME = 'mapphex-v1';
const ASSETS_TO_CACHE = [
  '.',
  '/index.html',
  '/admin.html',
  '/staff.html',
  '/customer.html',
  '/iupac.html',
  '/iupac.css',
  '/mapphex.css',
  '/mapphex.js',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        if (event.request.method === 'GET' && response && response.status === 200) {
          cache.put(event.request, response.clone());
        }
        return response;
      });
    })).catch(() => caches.match('/index.html'))
  );
});
