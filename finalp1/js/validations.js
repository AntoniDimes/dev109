function validateForm() {
  // Variables
  var validName = false;
  var validEmail = false;
  var firstErrorField = null;

  // Get the inputs
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();

  // Reset the error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";

  // Name validation
  if (!/^[A-Za-z\s]+$/.test(name) || name.length > 20) {
    document.getElementById("nameError").innerHTML = "Name must contain only letters and spaces, and be no more than 20 characters.";
    if (!firstErrorField) firstErrorField = document.getElementById("name");
  } else {
    validName = true;
  }

  // Email validation
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    document.getElementById("emailError").innerHTML = "Invalid email address.";
    if (!firstErrorField) firstErrorField = document.getElementById("email");
  } else {
    validEmail = true;
  }

  // Set focus on the first error field
  if (firstErrorField) {
    firstErrorField.focus();
    return false;
  }

  // Return
  return validName && validEmail;
}
