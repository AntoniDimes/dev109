// Define variables
var mybutton = document.querySelector("button");
var clearScreen = false;
var dotColor = "#3498db";
var dotSize = 8;

// Update the dot color
document.getElementById("colorPicker").addEventListener("input", function(event) {
  dotColor = event.target.value;  
});

// Update the dot size
document.getElementById("sizePicker").addEventListener("input", function(event) {
  dotSize = event.target.value; 
});

// Clear the dot(s)
mybutton.addEventListener("click", function(event) {
  var element = document.getElementsByClassName("dot");
  for (var index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
  }
  clearScreen = true; 
});

// Don't draw dots if the clear button was clicked
addEventListener("click", function(event) {
  if (clearScreen) {
    clearScreen = false;  
    return; 
  }
  
  //.Don't draw dots if the size or color was clicked
  if (event.target.closest('.controls')) {
      return;
  }

  // Create the dot
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.backgroundColor = dotColor;  
  dot.style.width = dot.style.height = dotSize + "px";  
  dot.style.left = (event.pageX - dotSize / 2) + "px";  
  dot.style.top = (event.pageY - dotSize / 2) + "px";   
  document.body.appendChild(dot);
});
