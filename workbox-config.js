module.exports = {
	// Pre-cache
	globDirectory: './dist',
	globPatterns: [
		'**/*.{js,html,css}',
		'img/{delorean.webp,doc.jpg,pwa-brand.webp,pwa-logo.webp}',
		'fonts/*.woff2'
	],

	globIgnores: [
	    'workbox-config.js',
		'node_modules/**/*',
		'sw.js'
  	],
	swDest: './dist/sw.js',
	swSrc: './dist/sw.js'
};