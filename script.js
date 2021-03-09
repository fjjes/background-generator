//select h3 (from html) so we can enter some text there
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient(); 

function selectRandomColor(){

	return "#" + Math.random().toString(16).substring(2,8);
}

function getRandomColors(){
	color1.value = selectRandomColor();
	color2.value = selectRandomColor();

	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomBtn.addEventListener("click", getRandomColors);


