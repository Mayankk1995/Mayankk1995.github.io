'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/NOTICES": "8c8d7eb28e8ea85131da75e87f61cd45",
"assets/FontManifest.json": "4b91a2e1a48635cedb8b2f504d599496",
"assets/assets/images/icons/ic_stack_overflow.png": "edfc28d774a94bda8488462bcd05c3e1",
"assets/assets/images/icons/ic_twitter.png": "9170eba6a80e42ffb60d0f5afaea6d6c",
"assets/assets/images/icons/twitter_colored.png": "ad108effd25dbda00ee733c8bca9979a",
"assets/assets/images/icons/stack_overflow_colored.png": "b2fe48cfe515f6588f9025c387f41530",
"assets/assets/images/icons/ic_mail.png": "00135e75ffe0c32a71130444df2ad944",
"assets/assets/images/icons/ic_instagram.png": "6c125960ef9a9b26f52709549325db5e",
"assets/assets/images/icons/github_colored.png": "8841a1d2408256e697e9a56f40ed7661",
"assets/assets/images/icons/ic_medium.png": "deb65c9da0cf714e036c245e8ac7f554",
"assets/assets/images/icons/ic_github.png": "cbae3c1c0aec5d4de12c0acf16d6c6b2",
"assets/assets/images/icons/ic_spotify.png": "453327d270e30d2ab81742d9b7b1382c",
"assets/assets/images/icons/spotify_colored.png": "18f613342129298f40cac7182919f246",
"assets/assets/images/icons/instagram_colored.png": "7dd8e409017a26d15cfb9ea3db7f654f",
"assets/assets/images/icons/linkedin_colored.png": "44d277d5f030f3eb0ca2c38d6afcf20c",
"assets/assets/images/icons/ic_linkedin.png": "3b59918a622097da37bde2af0ede5c77",
"assets/assets/images/icons/medium_colored.png": "f2489df767c61c60808a050bc8b34098",
"assets/assets/images/logos/cloud_firestore.png": "c9e51986a6b5e3e4fff6a3968e225567",
"assets/assets/images/logos/communication.png": "415339ab097dfee43adb7691699dd1a7",
"assets/assets/images/logos/football.png": "ea750000bf869484ba26e256f8538941",
"assets/assets/images/logos/grappus.jpeg": "5a70ae2ebe086fb0e01d4001ee5e4edd",
"assets/assets/images/logos/writing.png": "59f4320819cac058dd9bbad9ec1f8fc8",
"assets/assets/images/logos/introspection.png": "d0d3c5073befb95a6c0922e7e63d0b99",
"assets/assets/images/logos/mountains.png": "7f33da7128c03d2e7a4e941efff4182e",
"assets/assets/images/logos/java.png": "a267c77718c775cf73c2c8eaec05354a",
"assets/assets/images/logos/worklife.png": "c14a8de89d8b836b096a1a7f8ca35c2c",
"assets/assets/images/logos/ms_office.png": "10bfb6cedd70d985daaf769eaaf69a31",
"assets/assets/images/logos/teamwork.png": "e352a2a6df9b5dd3a43e5930b1351ceb",
"assets/assets/images/logos/material_ui.png": "1a5520ed9ac8a262bdf194439c7987d4",
"assets/assets/images/logos/waving_hand.png": "ad3fc516de35218d4212cf926f96e687",
"assets/assets/images/logos/music.png": "ee74cb4b3e2e02e5fb6ec79f23e1fd7a",
"assets/assets/images/logos/agile.png": "0e5e1aeec2adc394392c0931aaf6a639",
"assets/assets/images/logos/grab.png": "88a476ebf18fb00d3e51706bcf513c2f",
"assets/assets/images/logos/pen.png": "709a184adce13621f145058757b58d6d",
"assets/assets/images/logos/book.png": "6684b6acd7b90c48a7dbbdadae9eacc8",
"assets/assets/images/logos/trollface.png": "ec23f66e36f770da14582d4690750d49",
"assets/assets/images/logos/global_logic.jpeg": "4d930c2b4b8721b242c405e4eae67a76",
"assets/assets/images/logos/freadom.png": "9bbe2ab412a6797cd844d5c5e533ef19",
"assets/assets/images/logos/apple.png": "fd8a41e979554752935fdbb8ca6dad6e",
"assets/assets/images/logos/work_laptop.png": "734975f5ac0d1b01bc13798f96a53681",
"assets/assets/images/logos/messenger_go.png": "7f2163635e273925d2a3e54c0b3ea085",
"assets/assets/images/logos/aspire.jpg": "85b858965dd1747ea7e5e727a197dcca",
"assets/assets/images/logos/git.png": "227b70ec186876a6a966e31f91fbe076",
"assets/assets/images/logos/thought.png": "0cf8d269789b6be3175f96bd44a9c812",
"assets/assets/images/logos/kotlin.png": "027147590fcc555c10a9c51eeccdc232",
"assets/assets/images/logos/driftpilot.jpg": "cb7a08b438f9bd54b2776e9b4a55b904",
"assets/assets/images/logos/flutter.png": "d165760a12f332e7485ef1bcced4161c",
"assets/assets/images/logos/android.png": "6c24e8be8f25f03a48ac2bda6b09ae3d",
"assets/assets/images/logos/delhivery.png": "66991b42eb8be73fdd45b7eb320b8039",
"assets/assets/images/logos/gamebills_wallet.png": "cf7e4a7dd42d0dc14000f69e12a066b5",
"assets/assets/images/logos/junglee_rummy.png": "1280e9baadaaf814e3d2163e935ff639",
"assets/assets/images/logos/dart.png": "96a744d46a8bede4bbb1bdb0dd2dc3d7",
"assets/assets/images/logos/junglee_games.png": "1f0a659054642325f9e08c4375b85b1d",
"assets/assets/images/logos/confluence.png": "ee7f438c6a551cf14f73eb9cc77a515d",
"assets/assets/images/logos/fotonicia.png": "afa7320e1b7e005ae822a1b3be80aeac",
"assets/assets/images/logos/jira.png": "908b95beb4f7347187bf4b0240c942d9",
"assets/assets/images/logos/networking.png": "b84b6eaf1887040cd5676376d3e78039",
"assets/assets/images/logos/duolingo.png": "936093f17f4e8cfea982ca05f006cf46",
"assets/assets/images/logos/astellas.jpg": "40ae87f031f551ca233dc2ae4e9f5837",
"assets/assets/images/logos/firebase.png": "871a1a35847549f71c7d6d34078a8778",
"assets/assets/images/background_image.jpg": "b0eaef5343d488da7760a05e361dff66",
"assets/assets/fonts/pt_serif/PTSerif-Bold.ttf": "1e0973a44ba414079dae48c6d8051cb3",
"assets/assets/fonts/pt_serif/PTSerif-Regular.ttf": "5f7303c0e7f09925586e218ab8fd9b19",
"assets/assets/fonts/noto_sans_jp/NotoSansJP-Medium.otf": "f7c9eac3d1ee38132ec7fafe34cb6378",
"assets/assets/fonts/noto_sans_jp/NotoSansJP-Light.otf": "78d6753b4b8aaef38ad581eb248606ef",
"assets/assets/fonts/noto_sans_jp/NotoSansJP-Regular.otf": "2bbd3068a53daa60b61f29c3ee9531e7",
"assets/assets/fonts/noto_sans_jp/NotoSansJP-Bold.otf": "0ff89c4f64cd8f24f68a3034fbfefec1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/AssetManifest.json": "4bf4f2e1e6ad940513b6281362f6bb58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"manifest.json": "5b6deb1f2deec82d4d0364c215bdff39",
"main.dart.js": "fd7240e16f1144c897cfeba4a1dc6607",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"version.json": "26135e4be13343012ada35bf6692fcf3",
"index.html": "4b8adc4f2036feedcfde283aaa9d2bfa",
"/": "4b8adc4f2036feedcfde283aaa9d2bfa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
