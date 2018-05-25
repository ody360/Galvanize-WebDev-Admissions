var aboutButton = document.querySelectorAll(".about");


init();

function init() {

	for(var i in aboutButton) {

		aboutButton[i].addEventListener("click", function() {
			alert("This is a simple page created for admissions purposes to Galvanize-Seattle.");
		});
	}
}