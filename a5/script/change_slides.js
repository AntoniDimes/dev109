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
  interval = setInterval(autoSlide, 1000);
}

// Function to auto slide
function autoSlide() {
  timer--;
  document.getElementById("timer").textContent = timer;
    
  if (timer === 0) {
    next();
    timer = 4;
  }
}

// Event Listeners for the buttons
document.getElementById("previous").addEventListener("click", back);
document.getElementById("next").addEventListener("click", next);

// Start auto slide 
interval = setInterval(autoSlide, 1000);
