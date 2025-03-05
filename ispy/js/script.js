// Create array for images and arrays for items of those images
const images = [
  {
    src: "https://i.postimg.cc/P5BSg3wc/spring-i-spy-image.png",
    items: [
      { name: "playground", left: "80.16%", top: "22.36%", width: "13.52%", height: "13.11%" },
      { name: "bird", left: "62.11%", top: "80.77%", width: "10.31%", height: "12.39%" },
      { name: "blue-book", left: "53.83%", top: "25.64%", width: "8.28%", height: "4.13%" },
      { name: "water", left: "21.09%", top: "45.87%", width: "3.28%", height: "16.95%" }
    ]
  },
  {
    src: "https://i.postimg.cc/wT7fwfxC/ispy.jpg",
    items: [
      { name: "gold-key", left: "3.65%", top: "12.64%", width: "3.02%", height: "11.49%" },
      { name: "lion", left: "40.83%", top: "27.26%", width: "5.52%", height: "6.4%" },
      { name: "camera", left: "52.5%", top: "50.57%", width: "6.04%", height: "7.22%" },
      { name: "feather", left: "66.25%", top: "29.89%", width: "10%", height: "4.43%" }
    ]
  },
  {
    src: "https://i.postimg.cc/dQdm3b1t/5862194692-f6a4f87feb-b.jpg",
    items: [
      { name: "chicken", left: "35.94%", top: "5.16%", width: "4%", height: "5.01%" },
      { name: "yellow-button", left: "17.38%", top: "90.41%", width: "2.93%", height: "5.16%" },
      { name: "t", left: "62.11%", top: "68.58%", width: "4.3%", height: "6.64%" },
      { name: "45", left: "65.52%", top: "15.48%", width: "2.54%", height: "3.83%" }
    ]
  },
  {
    src: "https://i.postimg.cc/DZ7Fskhk/z7qcb5a8az071.webp",
    items: [
      { name: "helicopter", left: "8.61%", top: "11.38%", width: "4.07%", height: "3.23%" },
      { name: "white-jeep", left: "7.69%", top: "62.15%", width: "4.07%", height: "5.23%" },
      { name: "yellow-motocycle", left: "82.04%", top: "96.31%", width: "3.33%", height: "3.08%" },
      { name: "cat", left: "66.48%", top: "57.07%", width: "1.85%", height: "3.08%" }
    ]
  }
];

// Current Picture
let currentImage = {};

// Function to load a random image
function loadRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  currentImage = images[randomIndex];

  // Update the image
  document.querySelector("#game-container img").src = currentImage.src;

  // Update the object list
  const objectList = document.querySelector("#object-list");
  objectList.innerHTML = "";
  currentImage.items.forEach(item => {
    const li = document.createElement("li");
    li.id = item.name;
    li.textContent = item.name.replace("-", " ");
    objectList.appendChild(li);
  });

  // Get the position of the items accordingly to the current image
  const gameContainer = document.querySelector("#game-container");
  
  // Remove the old items
  document.querySelectorAll(".clickable").forEach(e => e.remove()); 

  // Get the new items' position
  currentImage.items.forEach(item => {
    const clickable = document.createElement("a");
    clickable.href = "#";
    clickable.title = item.name;
    clickable.className = "clickable";
    clickable.style.left = item.left;
    clickable.style.top = item.top;
    clickable.style.width = item.width;
    clickable.style.height = item.height;
    gameContainer.appendChild(clickable);
  });

  // Add event listeners
  addEventListeners();
}

// Function to cross the item after found
function foundItem(itemName) {
  var item = document.getElementById(itemName);
  if (item) {
    item.style.textDecoration = "line-through";
    checkWin();
  }
}

// Function to check if all items are found
function checkWin() {
  var items = document.querySelectorAll("#object-list li");
  var allFound = Array.from(items).every(item => item.style.textDecoration === "line-through");

  if (allFound) {
    setTimeout(() => {
      if (confirm("You found all objects! Play again?")) {
        loadRandomImage(); // Load a new image
      }
    }, 500);
  }
}

// Function to add event listeners to items
function addEventListeners() {
  document.querySelectorAll(".clickable").forEach(clickable => {
    clickable.addEventListener("click", function(event) {
      event.preventDefault();
      let itemName = this.getAttribute("title").toLowerCase().replace(" ", "-");
      foundItem(itemName);
    });
  });
}

// Function to replay the game
function replay() {
  loadRandomImage();
}

// Load a random image when the page loads
window.onload = loadRandomImage;

// Add event listener to the replay button
document.getElementById("replay-button").addEventListener("click", replay);
