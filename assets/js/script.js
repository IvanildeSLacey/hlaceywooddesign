//nav hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

//Form focus to information input area
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Carousel slide script 
const carouselSlide = document.querySelectorAll(".img-container img");

const timeDelay = 6000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// carouselSlide[currentImageCounter].style.display = "block";
carouselSlide[currentImageCounter].style.opacity = 1;

setInterval(nextImage, timeDelay);

function nextImage() {
  // carouselSlide[currentImageCounter].style.display = "none";
  carouselSlide[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % carouselSlide.length;

  // carouselSlide[currentImageCounter].style.display = "block";
  carouselSlide[currentImageCounter].style.opacity = 1;
}