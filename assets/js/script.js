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

//recent work image galery function
let thumbnails = document.getElementsByClassName('thumbnail')

		let activeImages = document.getElementsByClassName('active')

		for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}
				

				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}


		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');

		buttonLeft.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft -= 180
		})

		buttonRight.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft += 180
		})

// //getting all required elements
// const gallery  = document.querySelectorAll(".image"),
// previewBox = document.querySelector(".preview-box"),
// previewImg = previewBox.querySelector("img"),
// closeIcon = previewBox.querySelector(".icon"),
// currentImg = previewBox.querySelector(".current-img"),
// totalImg = previewBox.querySelector(".total-img"),
// shadow = document.querySelector(".shadow");
// window.onload = ()=>{
//     for (let i = 0; i < gallery.length; i++) {
//         totalImg.textContent = gallery.length; //passing total img length to totalImg variable
//         let newIndex = i; //passing i value to newIndex variable
//         let clickedImgIndex; //creating new variable
        
//         gallery[i].onclick = () =>{
//             clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
//             function preview(){
//                 currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
//                 let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
//                 previewImg.src = imageURL; //passing user clicked img url in previewImg src
//             }
//             preview(); //calling above function
    
//             const prevBtn = document.querySelector(".prev");
//             const nextBtn = document.querySelector(".next");
//             if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
//                 prevBtn.style.display = "none"; 
//             }
//             if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
//                 nextBtn.style.display = "none"; 
//             }
//             prevBtn.onclick = ()=>{ 
//                 newIndex--; //decrement index
//                 if(newIndex == 0){
//                     preview(); 
//                     prevBtn.style.display = "none"; 
//                 }else{
//                     preview();
//                     nextBtn.style.display = "block";
//                 } 
//             }
//             nextBtn.onclick = ()=>{ 
//                 newIndex++; //increment index
//                 if(newIndex >= gallery.length - 1){
//                     preview(); 
//                     nextBtn.style.display = "none";
//                 }else{
//                     preview(); 
//                     prevBtn.style.display = "block";
//                 }
//             }
//             document.querySelector("body").style.overflow = "hidden";
//             previewBox.classList.add("show"); 
//             shadow.style.display = "block"; 
//             closeIcon.onclick = ()=>{
//                 newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
//                 prevBtn.style.display = "block"; 
//                 nextBtn.style.display = "block";
//                 previewBox.classList.remove("show");
//                 shadow.style.display = "none";
//                 document.querySelector("body").style.overflow = "scroll";
//             }
//         }
        
//     } 
// }