// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  };
}

function Display() {
  var hotel1 = new Hotel("Quay", 45, 10);
  var hotel2 = new Hotel("Park", 53, 10);
  var hotel3 = new Hotel("Sunset", 86, 10);
  
  document.getElementById("hotel1").innerHTML = 
  hotel1.name + " rooms: " + hotel1.checkAvailability();
  
  document.getElementById("hotel2").innerHTML = 
  hotel2.name + " rooms: " + hotel2.checkAvailability();
  
  document.getElementById("result").innerHTML = 
  hotel3.name + " rooms: " + hotel3.checkAvailability();
}

window.onload = Display;
