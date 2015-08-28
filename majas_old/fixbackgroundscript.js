function fixBackground() {
	console.log("Method runs.");
	if ($(document).width() > $(document).height()) {
			$('img#background').css("width", "100%");
			$('img#background').css("height", "auto");
			console.log("Expanding with.");
		}
	else {
		$('img#background').css("height", "100%");
		$('img#background').css("width", "auto");
		
		console.log("Expanding height.");
	}
}