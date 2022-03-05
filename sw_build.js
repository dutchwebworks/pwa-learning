// Require Workbox build
const {generateSW} =  require('workbox-build');

generateSW({
    // Destination directory of build service-worker file
    swDest: "dist/sw.js",
    globDirectory: "dist",

    // Precache
    globPatterns: [
        "**/*.{html,jpg,png}",
        "js/**/*.js"
    ],

    // Allow new SW to take over
    skipWaiting: true,
    clientsClaim: true,

    // Runtime cache (see caching strategies and documentation on url's below)
    // https://developers.google.com/web/tools/workbox/guides/common-recipes
    // https://developers.google.com/web/tools/workbox/modules/workbox-strategies
    // https://gist.github.com/addyosmani/0e1cfeeccad94edc2f0985a15adefe54
    runtimeCaching: [
        {
            urlPattern: /(html)/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'pages',
            }
        },
        {
            urlPattern: /(png|gif|jpg|jpeg|webp|svg)/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'images',
                expiration: {
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    maxEntries: 60
                }
            }
        },
        {
            urlPattern: /(js|css)/,
            handler: 'staleWhileRevalidate',
            options: {
                cacheName: 'static-resources',
            }
        },
        {
            urlPattern: /(ttf|eot|woff|woff2|otf)/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'font-resources',
                expiration: {
                    maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                    maxEntries: 30
                },
                cacheableResponse: { statuses: [0, 200] }
            }
        },
        {
            urlPattern: /^https:\/\/fontsgoogleapis\.com.*/,
            handler: 'staleWhileRevalidate',
            options: {
                cacheName: 'google-fonts-stylesheets'
            }
        },
        {
            urlPattern: /^https:\/\/fontsgstatic\.com.*/,
            handler: 'cacheFirst',
            options: {
                cacheName: 'google-fonts-webfonts',
                expiration: {
                    maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                    maxEntries: 30
                },
                cacheableResponse: { statuses: [0, 200] }
            }
        }
    ]

}).then(({count, size}) => {
    console.log(`Generated new service worker with ${count} precached files, totaling ${size} bytes.`);
}).catch(console.error);