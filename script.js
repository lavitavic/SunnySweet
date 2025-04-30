// JavaScript for Slideshow
const images = ["donut orange.png", "donut purple.png", "donut TDL.png", "green donut.png", "victim donut.png", "button donut.png"];
let currentIndex = 0;

const slideshowImage = document.querySelector(".slideshow-image");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    slideshowImage.src = images[currentIndex];
}

// Change image every 2 seconds
setInterval(changeImage, 1500);

