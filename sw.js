const CACHE = 'xorai-v1';
const ASSETS = [
  '/xorai/',
  '/xorai/index.html',
  '/xorai/style.css',
  '/xorai/app.js',
  '/xorai/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
