var printOut = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("body");
var button = document.getElementById("ranButton")

body.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	printOut.textContent = body.style.background;


function colorPicker() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";
	printOut.textContent = body.style.background;
}

function getRandomColor() {
	var letters = "0123456789ABCDEF" ;
	var colorFirst = "#" ;
	var colorSecond = "#" ;

	for (var i = 0; i < 6; i++) {
		colorFirst += letters[Math.floor(Math.random() * 16)];
		colorSecond += letters[Math.floor(Math.random() * 16)];
		}
	color1.value = colorFirst;
	color2.value = colorSecond;

	colorPicker();

}


color1.addEventListener("input", colorPicker);

color2.addEventListener("input", colorPicker);

button.addEventListener("click", getRandomColor)


