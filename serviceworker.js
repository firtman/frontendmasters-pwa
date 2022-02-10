const assets = [
  "/",
  "styles.css",
  "app.js",
  "sw-register.js",
  "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2"
];

// install caching on your system.
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("assets").then(cache => {
      cache.addAll(assets);
    })
  )
});

// State while revalidate strategy
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          // Even if the response is in the cache, we fetch it
          // and update the cache for future usage
          const fetchPromise = fetch(event.request).then(
            networkResponse => {
              caches.open("assets").then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
            });
          // We use the currently cached version if it's there
          return cachedResponse || fetchPromise; // cached or a network fetch
        })
    );
  
    }); 

    // Cache first strategy
// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request)  // searching in the cache
//             .then( response => {
//                 if (response) {
//                     // The request is in the cache 
//                     return response; // cache hit
//                 } else {
//                     // We need to go to the network  
//                     return fetch(event.request);  // cache miss
//                 }
//             })
//     );
// });

// // fetching responses
// self.addEventListener("fetch", event => {
//   if (event.request.url == "http://localhost:3000/fake") {
//     const response = new Response(`Hello, I'm a response on URL ${event.request.url}`)
//     event.respondWith(response);
//   } else {

//     //we want to try and see if the request is cached
//     event.respondWith(
//       caches.open("assets").then(cache => {
//         cache.match(event.request).then(cachedResponse => {
//           if (cachedResponse) {
//             //It's a cache HIT
//             return cachedResponse
//           } else {
//             //It's a cache MISS
//             return fetch(event.request)
//           }
//         })
//       })
//     )
//   }
// });