if("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/sw.js");
} else {
	document.getElementById("js-no-service-worker").removeAttribute("hidden");
}
