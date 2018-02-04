if("serviceWorker" in navigator) {
	navigator.serviceWorker
		.register("/sw.js")
		.then(function(){
			console.log("Service worker registered");
		});
} else {
	document.getElementById("js-no-service-worker").removeAttribute("hidden");
}
