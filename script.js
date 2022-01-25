const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector("header");

btnNavEl.addEventListener("click", function(){
	
	navbarEl.classList.toggle("nav-open");
});

const products = [{
	id: 1,
	img: "images/desktop-image-hero-1.jpg",
	heading: "Discover innovative ways to decorate",
	text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.",
},
{
	id: 2,
	img: "images/desktop-image-hero-2.jpg",
	heading: "We are available all across the globe",
	text: "With stores all over the world, it's easy for you to find furniture for your home or place of business.   Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
},
{
	id: 3,
	img: "images/desktop-image-hero-3.jpg",
	heading: "Manufactured with the best materials",
	text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology   to ensure that every product is made as perfect and as consistent as possible. With three decades of   experience in this industry, we understand what customers want for their home and office.", 
},
];

const img = document.getElementById("hero-img");
const heading = document.getElementById("heading");
const text = document.getElementById("text");
const leftAngle = document.querySelector(".icon-angle-left");
const rightAngle = document.querySelector(".icon-angle-right");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
	showNext();
});

function showNext() {
	const item = products[currentItem];
	img.src = item.img;
	heading.textContent = item.heading;
	text.textContent = item.text;
}
leftAngle.addEventListener("click", function(){
	currentItem--;
	if(currentItem < 0){
		currentItem = products.length - 1;
	}
	showNext();
});

rightAngle.addEventListener("click", function(){
	currentItem++;
	if(currentItem > products.length -1){
		currentItem = 0;
	}
	showNext();
});