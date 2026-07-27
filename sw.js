const CACHE_NAME = 'blogger-pwa-v1';
const urlsToCache = [
  '/',
  'https://www.blogger.com/static/v1/widgets/css/blog_style_bundle.css' // Contoh asset dasar
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});