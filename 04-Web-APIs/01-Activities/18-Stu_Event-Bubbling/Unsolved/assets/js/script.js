// This code is selecting the carousel image
var carousel = document.querySelector(".carouselbox");
// This code is selecting the buttons on the carousel
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

//Changes the images with the buttons are selected
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// This code is running the action for the "Next" button
next.addEventListener("click", function(event) {
  // Stopping the image from taking over the site
  event.stopPropagation();

  navigate(1);
});

// This code is running the action for the "Previuos" button
prev.addEventListener("click", function(event) {
    //Stopping the image from taking over the site
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
