// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', e => {
  if (e.data) {
    if (e.data === 'skipWaiting') {
      self.skipWaiting()
    }
  }
})

/* eslint-disable no-undef */
workbox.core.setCacheNameDetails({
  prefix: 'vue-pwa',
  suffix: 'v1.0.0'
})
workbox.core.clientsClaim()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])
