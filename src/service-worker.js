self.addEventListener('message', (event) => {
  if (!event.data) {
    return
  }

  switch (event.data) {
    case 'skipWaiting':
      self.skipWaiting()
      break
    default:
      // NOOP
      break
  }
})

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */
workbox.core.setCacheNameDetails({ prefix: 'app-pwa' })

workbox.core.clientsClaim()

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

/*
// Using Strategie
// workbox.routing.registerNavigationRoute(URL, strategies);
workbox.routing.registerRoute(
  ({ url }) => url.pathname == '/my-url-test/1',
  new workbox.strategies.StaleWhileRevalidate()
)

// Using Custom Strategie
// workbox.routing.registerNavigationRoute(URL, strategies);
workbox.routing.registerRoute(
  ({ url }) => url.pathname == '/my-url-test/2',
  ({ event }) => fetch(event.request).then((response) => response.text())
)
*/
// workbox.routing.registerNavigationRoute('/');
workbox.routing.registerRoute(
  '/',
  workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache'
  })
)
workbox.routing.registerRoute(
  'https://connect.facebook.net',
  workbox.strategies.cacheFirst({
    cacheName: 'placeholder-cache'
  })
)

// Falha de cache
/*
const placeholderHandler = workbox.strategies.cacheFirst({
  cacheName: 'placeholder-cache',
})
workbox.routing.registerRoute(
  URL,
  args => {
    return placeholderHandler.handle(args)
      .then(response => {
        console.log('Online: Fetch was called successful')
        return response
      })
      .catch(err => {
        console.log('no cache data')
      })
  }
)
*/
