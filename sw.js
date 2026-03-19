const CACHE_NAME = 'fren-finder-v1';

// Shell assets to precache — the app itself
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/favicon.png',
  '/favicon.svg',
  '/apple-touch-icon.png',
  '/og-image.png'
];

// Install: precache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for navigation & API, cache-first for static assets
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and WebSocket connections
  if (request.method !== 'GET') return;
  if (url.protocol === 'wss:' || url.protocol === 'ws:') return;

  // Google Fonts — cache-first (these rarely change)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // CDN scripts (unpkg, jsdelivr, esm.sh) — cache-first
  if (['unpkg.com', 'cdn.jsdelivr.net', 'esm.sh'].some(d => url.hostname.includes(d))) {
    event.respondWith(
      caches.match(request).then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        });
      })
    );
    return;
  }

  // Same-origin requests — network-first with cache fallback
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // External images (profile pics etc.) — network-first, cache for offline
  if (request.destination === 'image') {
    event.respondWith(
      fetch(request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }
});
