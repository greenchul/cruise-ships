const Itinerary = require("./src/itinerary");
const Port = require("./src/port");
const Ship = require("./src/Ship");

const port = new Port("Devonport");
const port2 = new Port("Portsmouth");
const port3 = new Port("Blackpool");
const itinerary = new Itinerary([port, port2, port3]);
const ship = new Ship(itinerary);

console.log(ship);
console.log(ship.currentPort);

//set sail
ship.setSail();
console.log(ship);

//come alongside
ship.dock();
console.log(ship);

//set sail
ship.setSail();
console.log(ship);
