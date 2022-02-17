if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js');
	});
} else {
	document.getElementById("js-no-service-worker").removeAttribute("hidden");
}