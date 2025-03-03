// Defines arrays and variables
var myImages = [
  "https://i.postimg.cc/Nf0QCrJ2/afp-en-03ffd8eb60cf0fbcb17b750cf396df0eda514af0.jpg",
  "https://i.postimg.cc/W3nPX207/messi-world-cup.jpg",
  "https://i.postimg.cc/K844TT75/2153851721.jpg",
  "https://i.postimg.cc/sDx3HrBj/SVM5-WSEPWBJHROSQWK4-TEHLDJU.jpg",
  "https://i.postimg.cc/HW6gMkYY/haaland-ucl.jpg"
];

var captionImages = [
  "Cristiano Ronaldo",
  "Lionel Messi",
  "Kevin De Bruyne",
  "Kylian Mbappe",
  "Erling Haaland"
];

var index = 0;
var timer = 4;
var interval;
var autoSlide = false; // Default state: no auto-slide

// Function to update the image and caption
function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

// Function to go to next picture
function next() {
  index = (index + 1) % myImages.length;
  updateImage();
  resetTimer();
}

// Function to go to previous picture
function back() {
  index = (index - 1 + myImages.length) % myImages.length;
  updateImage();
  resetTimer();
}

// Function to reset the timer after a new picture
function resetTimer() {
  clearInterval(interval);
  timer = 4;
  document.getElementById("timer").textContent = timer;

  // If auto-slide is on, start the timer
  if (autoSlide) {
    interval = setInterval(autoSlideFunction, 1000);
  }
}

// Function to auto slide
function autoSlideFunction() {
  timer--;
  document.getElementById("timer").textContent = timer;
    
  if (timer === 0) {
    next();
    timer = 4;
  }
}

// Function to turn on and off auto-slide
function OnOffAutoSlide() {
  autoSlide = document.getElementById("autoSlideCheckbox").checked; // Fixed variable name
  if (autoSlide) {
    resetTimer();
  } else {
    clearInterval(interval);
    document.getElementById("timer").textContent = "—";
  }
}

// Event Listeners for the buttons
document.getElementById("previous").addEventListener("click", back);
document.getElementById("next").addEventListener("click", next);
document.getElementById("autoSlideCheckbox").addEventListener("change", OnOffAutoSlide);
