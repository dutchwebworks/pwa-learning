// Progressive-enhancement
if(navigator.serviceWorker) {
	// Register SW
	navigator.serviceWorker
		.register("/sw.js")
		.catch(console.error);
} else {
	// Display message that SW is not supported
	document.getElementById("js-no-service-worker").removeAttribute("hidden");
}