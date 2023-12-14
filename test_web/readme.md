## useful resources

#### Registering a service worker
```
<script>
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
    }
</script>
```

#### Manifest JSON configuration
```
{
    "name": "Test",
    "short_name": "Test",
    "start_url": "/?home=true",
    "display": "fullscreen",
    "orientation": "potrait",
    "theme_color": "#000000",
    "background_color": "#fff",
    "icons": []
  }
  
```

#### Icons generation for manifest
```
npx pwa-asset-generator logo.png icons
```

#### using workbox
```
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.CacheFirst() // for static
    // new workbox.strategies.NetworkFirst() // for changes over network
)
```

#### Running the app
```
npx serve
```