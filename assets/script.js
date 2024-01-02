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

let currentslide = 0; /*currentslide initialisé à 0*/


const arrow_left = document.querySelector(".arrow_left"); /*const non modifiable dans le code, focus le document arrow_left*/
const arrow_right = document.querySelector(".arrow_right"); /*const non modifiable dans le code, focus le document arrow_left*/

arrow_left.addEventListener("click", () => { /*ajout d'un événement "click" à arrow_left grace à addEventListener + changeSlide(fonction) -1*/
  changeSlide(-1);
});

arrow_right.addEventListener("click", () => { /*ajout d'un événement "click" à arrow_right grace à addEventListener + changeSlide(fonction) +1*/
	changeSlide(+1);
  });

for(let i = 0; i < slides.length; i++) { /*création d'une boucle avec un let i initialisé à 0. Puis nous expliquons si i inférieur à slides.length, nous ajoutons 1(i++)*/
	let dot = document.createElement("div"); /*création d'une div dot*/
	dot.classList.add("dot"); /*ajout de la class dot à l'intérieur de la div dot*/
	if(i=== currentslide) { /*si i = currentslide, add claslist dot_selected*/
		dot.classList.add("dot_selected");
	}
	document.querySelector(".dots").appendChild(dot); /*focus div dots & ajout de l'enfant dot à la div dots*/
}

const dots = document.querySelectorAll(".dot"); /*création de la const dots et ajout de TOUT les class dot*/

function changeSlide(direction) { /*création de la fonction principale changeSlide*/
	dots[currentslide].classList.remove("dot_selected");/*remove de dot_selected lors d'un slide*/
	currentslide = currentslide + direction;/*modification de let currentslide pour currentslide + direction(paramètre function)*/
	if (currentslide > slides.length-1) { /*vérifie si currentslide dépasse les nombres d'éléments dans [slides] grace à length, si c'est le cas elle retourne à 0*/
		currentslide = 0; 
	}
	if (currentslide < 0) { /*vérifie si l'user tente d'aller à une valeur inférieur à zéro, si c'est le cas elle passe à la dernière valeur disponible dans slides grace à length*/
		currentslide = slides.length-1; 
	}
	dots[currentslide].classList.add("dot_selected");/*active la class dot_selected, à l'endroit ou currentSlide est actif*/
	document.querySelector(".banner-img").src="./assets/images/slideshow/" + slides[currentslide].image;
	/*selectionne .banner-img, sa source + slides tableau + activation de currentSlide + image toujours dans le tableau slides*/
	document.querySelector("#banner p").innerHTML=slides[currentslide].tagLine;
	/*selectionne banner p, mets à jour les éléments html grace à "innerhtml" + utilisation de slides + activation de currentSlide + modifie le texte en prenant tagline de slides*/
}



  	


