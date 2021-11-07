const Itinerary = require("./src/itinerary");
const Port = require("./src/port");
const Ship = require("./src/Ship");

const port = new Port("Devonport");
const port2 = new Port("Portsmouth");
const itinerary = new Itinerary([port, port2]);
const ship = new Ship(itinerary);

console.log(ship);
console.log(ship.currentPort.ships);
