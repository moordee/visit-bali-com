'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "25ed46ff549463671aeb56a62fd697df",
"assets/AssetManifest.bin.json": "e0b48ca3055b199554663c6b9d22f668",
"assets/AssetManifest.json": "3083e42699f10b1c3af83b6a531ada3b",
"assets/assets/img/Aloft%2520Bali%2520Kuta%2520at%2520Beachwalk.jpeg": "43076e64e851cdcf573bf7af0fbf680c",
"assets/assets/img/Amnaya.jpg": "738bd2b41883e3c20b3e7a0158de4e19",
"assets/assets/img/ATV.jpeg": "6bcbe8d6dfc2b07f9706d25b124a67dd",
"assets/assets/img/Avanza.jpeg": "e589392cd4546605e34968fff49e0c13",
"assets/assets/img/Ayam%2520Betutu.jpeg": "f77e9ece8e4ef342ff8e949f9833de71",
"assets/assets/img/ayana%2520resort%2520bali.jpeg": "bfef3f22f9efb730db2dc5a1498de390",
"assets/assets/img/Babi%2520Guling.jpeg": "aeb1cfbc2989ee33343360729643e3ea",
"assets/assets/img/Banana%2520Boat.jpeg": "8a520b8bdf78eb3e477722fb6976d2cb",
"assets/assets/img/Coconut%2520Galaxy%2520Villas%2520Bali.jpeg": "a9b5c9ce640053b784b877640741ec0e",
"assets/assets/img/Danoya%2520Villa%2520Seminyak.jpeg": "4dc49480896fbdcfa6099772ed86cc31",
"assets/assets/img/Four%2520Seasons%2520Resort%2520Bali%2520at%2520Sayan.jpeg": "92fd7ee9aadd837464e893bf3b6e00c4",
"assets/assets/img/Garuda%2520Wisnu%2520Kencana.jpeg": "b88f8ebf5f4c0058c09c6c876c11944a",
"assets/assets/img/Gunung%2520Batur%2520Danau%2520Batur.jpeg": "4ee85117af472391737aa51bfb131c6a",
"assets/assets/img/Hiace.jpeg": "08e2552c5158fc3e48f799af3a685a09",
"assets/assets/img/i%2520Thantha%2520Ubud%2520Villa.jpeg": "5d8bdef404872bb57e86aaa777056234",
"assets/assets/img/Innova.jpeg": "68839174e8504fa79553e8dffc62d965",
"assets/assets/img/Jet%2520Ski.jpeg": "db9277a0c27dc40bb576a94263b6c7ae",
"assets/assets/img/Laklak.jpeg": "5604238603776af3a60693bdcad6319b",
"assets/assets/img/Lawar.jpeg": "61fe0fe39c818ecdf6a667777ad4338f",
"assets/assets/img/Maya%2520Sanur%2520Resort%2520&%2520Spa.jpeg": "b90982798940d5062b9f7440d95a466f",
"assets/assets/img/Motor.jpeg": "b19d5c4d657e9512570cda933a85bfdd",
"assets/assets/img/Nasi%2520Jinggo.jpeg": "5742e01a9b5afe7c7b32dd7410ffa76c",
"assets/assets/img/Nasi%2520Tepeng.jpeg": "f2b365ccfb2875fe44fd3db4691cc8b6",
"assets/assets/img/Nusa%2520Dua%2520Beach%2520Hotel%2520&%2520Spa.jpeg": "5f39d9a2640f6ffa8111988a848f3f96",
"assets/assets/img/Nusa%2520Penida.jpeg": "05f0a12e264dd6ae76de56f12f7737c2",
"assets/assets/img/Pantai%2520Kuta.jpeg": "eac9e0c2c46eed4a58b16d11a0037959",
"assets/assets/img/Pantai%2520Pandawa.jpeg": "d11bc503fc34cfcb0a54b1789c148857",
"assets/assets/img/Pura%2520Bekasih.jpeg": "08238183675ba8dbf9b51d4d3d5e193f",
"assets/assets/img/Pura%2520Ulun%2520Danu%2520Beratan%2520(Bedugul).jpeg": "b31160e3fb1571120744ca4a79893e92",
"assets/assets/img/Regis%2520Bali%2520Resort.jpeg": "bec6effd04dd673259553ed1b45a72e1",
"assets/assets/img/Rujak%2520Buleleng.jpeg": "fe19a6e5a3b5bef0ba7274ec1f7d3859",
"assets/assets/img/Sate%2520Lilit.jpeg": "06bbde115c705c670c5121d3b96f2054",
"assets/assets/img/Sepeda.jpeg": "22edb7ccab04aa312142b36574053d7c",
"assets/assets/img/Serombotan.jpeg": "5b3c8ba4f6fd7cb50be2255c67beef89",
"assets/assets/img/Speed%2520Boat.jpeg": "07c44d8886a7d73a5ec615b5a3d58409",
"assets/assets/img/Tanah%2520Lot.jpeg": "a7c73d00c37cef9828cb812ac6c25987",
"assets/assets/img/Tegalllalang%2520Rice%2520Terrace.jpeg": "91855c41bc0a613e366010d8337e4d77",
"assets/assets/img/Tum.jpeg": "a417b7db1cdcb8b23564b61baf8ce73a",
"assets/assets/img/Ubud%2520Monkey%2520Forest.jpeg": "26908d2c17db3a62221372e6512bb307",
"assets/assets/img/Villa%2520Kayu%2520Raja.jpeg": "1c0ed94d0f32eb2ee131b809edba4a91",
"assets/assets/img/VW.jpeg": "32ca8762de5fb8576794979ac0cd2fce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "183373a8da8d9a3eed339099c374311b",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6d53ea01aa6c71f711746ca7724d6812",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "61ad2db7aa89783f1bdc459500260d82",
"/": "61ad2db7aa89783f1bdc459500260d82",
"main.dart.js": "226b6df0d48e286a5bf6202e228f5022",
"manifest.json": "469aeb2470f993b164ee7ebf45148f85",
"version.json": "3084b600db7a21b9184fb9024fca4716"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
