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
  var hotel = new Hotel("Sunset", 86, 10);
  var available_room = hotel.checkAvailability();
  document.getElementById("result").innerHTML = hotel.name + " rooms: " + available_room;
}

Display();
