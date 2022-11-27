module.exports = {
	globDirectory: './dist',
	globPatterns: [
		'**/*.{js,html,css}',
		'img/delorean.jpg',
		'img/pwa-logo.png',
	],
	globIgnores: [
	    'workbox-config.js',
		'node_modules/**/*',
		'sw.js'
  	],
	swDest: './dist/sw.js',
	swSrc: './dist/sw.js'
};