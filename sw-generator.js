const workbox = require("workbox-build");

workbox.generateSW({
  swDest: "./dist/sw.js",
  cacheId: "pwa-learning",
  globDirectory: "./dist",
  globIgnores: ["**/sw-generator.js", "**/sw.js", "node_modules/**/*"],

  // Pre-caching
  globPatterns: [
    "**/*.{html,css,js}",
    "**/*.{jpg,png,ico}"
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
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|gif)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "images",
        expiration: {
          maxEntries: 1000,
        },
      },
    },
    {
      urlPattern: /\.(?:css|js)$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "assets",
        expiration: {
          maxEntries: 1000,
        },
      },
    },
  ],
});
