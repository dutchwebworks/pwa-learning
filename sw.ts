import { precacheAndRoute } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";

declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

// https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#setting-an-expiry-for-cache-entries
const imageRoute = new Route(({ request, sameOrigin }) => {
    return sameOrigin && request.destination === "image";
    }, new CacheFirst({
        cacheName: 'images',
        plugins: [
        new ExpirationPlugin({
            maxAgeSeconds: 60 * 60 * 24 * 2,
            maxEntries: 50,
        })
    ]
}));

registerRoute(imageRoute);