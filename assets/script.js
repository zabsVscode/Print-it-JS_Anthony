const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

let currentslide = 0;


const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right"); 

arrow_left.addEventListener("click", () => {
  changeSlide(-1);
});

arrow_right.addEventListener("click", () => {
	changeSlide(+1);
  });

for(let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div");
	dot.classList.add("dot");
	if(i=== currentslide) {
		dot.classList.add("dot_selected");
	}
	document.querySelector(".dots").appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function changeSlide(direction) {
	dots[currentslide].classList.remove("dot_selected");
	currentslide = currentslide + direction;
	if (currentslide > slides.length-1) { 
		currentslide = 0; 
	}
	if (currentslide < 0) { 
		currentslide = slides.length-1; 
	}
	dots[currentslide].classList.add("dot_selected");
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[currentslide].image;
	
	document.querySelector("#banner p").innerHTML=slides[currentslide].tagLine;
	
}



  	


