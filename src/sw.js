if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let r={};const o=e=>i(e,a),t={module:{uri:a},exports:r,require:o};s[a]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-ceee0b03"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-learning"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/style.css",revision:"0e48ad86ea9a8178a4465d419f2c7367"},{url:"js/registerSW.js",revision:"d77487e6b8c86ac6953e3e842c0f08dc"},{url:"assets/img/apple-touch-icon.png",revision:"03534d6277de4c8236e8645e9339e4d1"},{url:"assets/img/icon-128x128.png",revision:"42e323b0b69f959e357e47606fc7dbdb"},{url:"assets/img/icon-144x144.png",revision:"c1a4785146a14d80ab404c2f75205b39"},{url:"assets/img/icon-152x152.png",revision:"58481cbcf17914a3037a11fd947f5b0a"},{url:"assets/img/icon-192x192.png",revision:"1a90e7f21e73c3e7ce6b1b127d3d195e"},{url:"assets/img/icon-384x384.png",revision:"1a90e7f21e73c3e7ce6b1b127d3d195e"},{url:"assets/img/icon-512x512.png",revision:"1a90e7f21e73c3e7ce6b1b127d3d195e"},{url:"assets/img/icon-72x72.png",revision:"ad3b7f4274e9299c3b0a3ef6699c7129"},{url:"assets/img/icon-96x96.png",revision:"d423f440c720ba1792927130235d3121"},{url:"assets/img/ipad_splash.png",revision:"c2b96785be089506b158b5a3fbbd143e"},{url:"assets/img/ipadpro1_splash.png",revision:"2ad8b78bc2d24fdfbd72fe7253cccb92"},{url:"assets/img/ipadpro2_splash.png",revision:"90e46220115b71aa2fce331d29a0326d"},{url:"assets/img/iphone5_splash.png",revision:"07b6b55c9bee6fa267d93c31b4d41127"},{url:"assets/img/iphone6_splash.png",revision:"858614ceb08c1544424aaef55f601f73"},{url:"assets/img/iphoneplus_splash.png",revision:"fb58fff2bc8c1560796e5e8473e1558b"},{url:"assets/img/iphonex_splash.png",revision:"28ec0f3e2bd334e5d5a1cb2b1fb282e5"},{url:"favicon.ico",revision:"1025c45b9c621133a5a84d8e26cc506d"}],{}),e.registerRoute(/\.(?:html|htm|xml)$/,new e.StaleWhileRevalidate({cacheName:"markup",plugins:[new e.ExpirationPlugin({maxEntries:1e3})]}),"GET"),e.registerRoute(/\.(?:png|jpg|gif)$/,new e.StaleWhileRevalidate({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:1e3})]}),"GET"),e.registerRoute(/\.(?:css|js)$/,new e.StaleWhileRevalidate({cacheName:"assets",plugins:[new e.ExpirationPlugin({maxEntries:1e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
