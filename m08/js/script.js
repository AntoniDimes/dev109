// Add the add function (Duy)
function add() {
  // Add the variable to store the user input (Duy)
  var new_item = document.getElementById('item').value;
  
  // Make sure there is something in the input (Duy)
  if (new_item.trim() === "") {
    alert("Please enter an item.");
    return;
  } 

  // Create a new element and store it in a variable.
  var newEl = document.createElement('li');

  // Create a text node and store it in a variable.
  var newText = document.createTextNode(new_item);// Change the 'quinoa' to the variable the user type in (Duy)

  // Attach the new text node to the new element.
  newEl.appendChild(newText);

  // Find the position where the new element should be added.
  var position = document.getElementsByTagName('ul')[0];

  // Insert the new element into its position.
  position.appendChild(newEl);
  
  // Clear after adding the item (Duy)
  document.getElementById('item').value = '';
}

// Add the listener for when user type 'Enter' (Duy)
document.getElementById('item').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    add(); 
  }
});
