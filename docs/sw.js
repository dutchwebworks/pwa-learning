self.addEventListener("install", function(event){
	event.waitUntil(
		caches.open("first-app")
			.then(function(cache){
				cache.addAll([
					"/",
					"/index.html",
					"/about.html",
					"/src/css/style.css",
					"/src/js/app.js",
					"/src/img/pwa-512x512.png"
				])
			})		
	);
	return self.clients.claim();
});

self.addEventListener("fetch", function(event){
	event.respondWith(
		caches.match(event.request)
			.then(function(res){
				return res;
			})
	);
});