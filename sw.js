// ===== SERVICE WORKER =====
const CACHE_NAME = 'nabz-tech-v1';
const urlsToCache = [
  '/nabztech.github.io/',
  '/nabztech.github.io/index.html',
  '/nabztech.github.io/about.html',
  '/nabztech.github.io/services.html',
  '/nabztech.github.io/contact.html',
  '/nabztech.github.io/style.css',
  '/nabztech.github.io/nabz.png'
];

// Install the service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});