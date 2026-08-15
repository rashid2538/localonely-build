// LocalForge service worker — offline-first but always prefers fresh HTML.
// Uses relative paths so it works at a domain root or a GitHub Pages subpath
// (the SW scope resolves them against the directory containing sw.js).
const CACHE = 'localforge-v2'
const PRECACHE = ['./', './index.html', './manifest.webmanifest', './favicon.svg', './icon-192.png', './icon-512.png']

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
})

self.addEventListener('fetch', (e) => {
  const { request } = e
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) return

  // Navigations: network-first so new deploys (new hashed assets) are picked up.
  // The fetched page is also cached so offline navigations have a shell; the
  // catch below prefers a same-URL hit (cached tool pages) before falling back
  // to the generic index.html shell.
  if (request.mode === 'navigate') {
    e.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone()
          caches.open(CACHE).then((c) => c.put(request, copy))
          return res
        })
        .catch(async () => (await caches.match(request)) || caches.match('./index.html'))
    )
    return
  }

  // Everything else: cache-first with runtime caching (hashed assets are immutable).
  e.respondWith(
    caches.match(request).then(
      (hit) =>
        hit ||
        fetch(request).then((res) => {
          if (res.ok) {
            const copy = res.clone()
            caches.open(CACHE).then((c) => c.put(request, copy))
          }
          return res
        })
    )
  )
})
