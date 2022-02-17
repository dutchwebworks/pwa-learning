const workbox = require("workbox-build");

workbox.generateSW({
    swDest: "./src/sw.js",
    cacheId: "pwa-learning",
    globDirectory: "./src",
    globIgnores: [
        "**/sw-generator.js",
        "**/sw.js",
        "node_modules/**/*"
    ],

    // Pre-caching
    globPatterns: [
        "**/*.{css,js}",
        "assets/img/**/*.{jpg,png}",
        "img/{pwa-brand,doc}.jpg",
        "**/*.ico"
    ],  

    // Runtime-caching
    runtimeCaching: [
        {
            urlPattern: /\.(?:html|htm|xml)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "markup",
                expiration: {
                    maxEntries: 1000,
                    maxAgeSeconds: 1800,
                },
            },
        },
        {
            urlPattern: /\.(?:png|jpg|gif)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "images",
                expiration: {
                    maxEntries: 1000,
                    maxAgeSeconds: 1800,
                },
            },
        },
        {
            urlPattern: /\.(?:css|js)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "assets",
                expiration: {
                    maxEntries: 1000,
                    maxAgeSeconds: 1800,
                },
            },
        },
    ],
});
