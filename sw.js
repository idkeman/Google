// Google-themed deployment: use the same Scramjet service worker as Proxy.
importScripts('https://idkeman.github.io/Proxy/scramjet-engine/scramjet-all.js');
const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
async function handleRequest(event) {
  await scramjet.loadConfig();
  if (!scramjet.route(event)) return fetch(event.request);
  return scramjet.fetch(event);
}
self.addEventListener('fetch', event => {
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(handleRequest(event));
});
