// SW Version
const version = "0.1.0";

// Static Cache - App Shell
const appAssets = [
	// Pages
	"/",
	"/about.html",
	"/index.html",

	// CSS
	"/css/style.css",

	// Scripts
	"/js/app.js",

	// Images
	"/favicon.ico",
	"/img/delorean.jpg",
	"/img/pwa-brand.jpg",
	"/img/pwa-logo.png"
];

// SW Install
self.addEventListener("install", e => {
	e.waitUntil(
		caches.open(`static-${version}`)
			.then(cache => cache.addAll(appAssets))
	);
});

// SW Activate
self.addEventListener("activate", e => {

	// Clean static cache
	let cleaned = caches.keys().then(keys => {
		keys.forEach(key => {
			if (key !== `static-${version}` && key.match("static-")) {
				return caches.delete(key);
			}
		});
	});
	e.waitUntil(cleaned);
});

// Static cache strategy - Cache with Network Fallback
const staticCache = (req) => {
	return caches.match(req).then(cachedRes => {
		
		// Return cached response if found
		if(cachedRes) return cachedRes;

		// Fall back to network
		return fetch(req).then(networkRes => {
			
			// Update cache with network request
			caches.open(`static-${version}`)
				.then(cache => cache.put(req, networkRes));

			// Return clone of Network Response
			return networkRes.clone();
		});
	})
}

// SW Fetch
self.addEventListener("fetch", e => {
	
	// App shell
	if(e.request.url.match(location.origin)) {
		e.respondWith(staticCache(e.request));
	}
});