var userInput = prompt("Enter a number:");
  
if (userInput === null || userInput.trim() === "" || isNaN(userInput)) 
{
  userInput = 0;
} 
else 
{
  userInput = parseInt(userInput);
}

var table = userInput;         // Unit of table

// operator = GetValueFromUser("operator");
// table = GetValueFromUser("table")

var msg = '<h2>Multiplication Table</h2>';

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg + GetTableContent(table);

/* function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter table";
  }
  return prompt(greetingMessage);
} */

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '';              // Message  
  // Do multiplication
  while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
  }
  return msg;
}
