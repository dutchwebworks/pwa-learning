/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "5fa0468bfad03c4f19b8ff2560117287"
  },
  {
    "url": "img/apple-touch-icon.png",
    "revision": "03534d6277de4c8236e8645e9339e4d1"
  },
  {
    "url": "img/delorean.jpg",
    "revision": "6c8b47c08c398922a247cb99b67c7f03"
  },
  {
    "url": "img/doc.jpg",
    "revision": "a8f93ac767b81dad64920fa73124f1bb"
  },
  {
    "url": "img/icon-128x128.png",
    "revision": "42e323b0b69f959e357e47606fc7dbdb"
  },
  {
    "url": "img/icon-144x144.png",
    "revision": "c1a4785146a14d80ab404c2f75205b39"
  },
  {
    "url": "img/icon-152x152.png",
    "revision": "58481cbcf17914a3037a11fd947f5b0a"
  },
  {
    "url": "img/icon-192x192.png",
    "revision": "1a90e7f21e73c3e7ce6b1b127d3d195e"
  },
  {
    "url": "img/icon-384x384.png",
    "revision": "1a90e7f21e73c3e7ce6b1b127d3d195e"
  },
  {
    "url": "img/icon-512x512.png",
    "revision": "1a90e7f21e73c3e7ce6b1b127d3d195e"
  },
  {
    "url": "img/icon-72x72.png",
    "revision": "ad3b7f4274e9299c3b0a3ef6699c7129"
  },
  {
    "url": "img/icon-96x96.png",
    "revision": "d423f440c720ba1792927130235d3121"
  },
  {
    "url": "img/ipad_splash.png",
    "revision": "c2b96785be089506b158b5a3fbbd143e"
  },
  {
    "url": "img/ipadpro1_splash.png",
    "revision": "2ad8b78bc2d24fdfbd72fe7253cccb92"
  },
  {
    "url": "img/ipadpro2_splash.png",
    "revision": "90e46220115b71aa2fce331d29a0326d"
  },
  {
    "url": "img/iphone5_splash.png",
    "revision": "07b6b55c9bee6fa267d93c31b4d41127"
  },
  {
    "url": "img/iphone6_splash.png",
    "revision": "858614ceb08c1544424aaef55f601f73"
  },
  {
    "url": "img/iphoneplus_splash.png",
    "revision": "fb58fff2bc8c1560796e5e8473e1558b"
  },
  {
    "url": "img/iphonex_splash.png",
    "revision": "28ec0f3e2bd334e5d5a1cb2b1fb282e5"
  },
  {
    "url": "img/pwa-brand.jpg",
    "revision": "1e53acfc5630ff50408847291811df21"
  },
  {
    "url": "img/pwa-logo.png",
    "revision": "4967929ffde74bccc25a0e9536ecdce6"
  },
  {
    "url": "index.html",
    "revision": "890d62e3ca2e719650b530701a12ce49"
  },
  {
    "url": "js/app.js",
    "revision": "f95e8ab4a03229d818cd6018c9aea834"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(html)/, workbox.strategies.cacheFirst({ "cacheName":"pages", plugins: [] }), 'GET');
workbox.routing.registerRoute(/(png|gif|jpg|jpeg|webp|svg)/, workbox.strategies.cacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":2592000,"maxEntries":60,"purgeOnQuotaError":false})] }), 'GET');
workbox.routing.registerRoute(/(js|css)/, workbox.strategies.staleWhileRevalidate({ "cacheName":"static-resources", plugins: [] }), 'GET');
workbox.routing.registerRoute(/(ttf|eot|woff|woff2|otf)/, workbox.strategies.cacheFirst({ "cacheName":"font-resources", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"maxEntries":30,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fontsgoogleapis\.com.*/, workbox.strategies.staleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fontsgstatic\.com.*/, workbox.strategies.cacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.expiration.Plugin({"maxAgeSeconds":31536000,"maxEntries":30,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
