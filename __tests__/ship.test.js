const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");
const Ship = require("../src/Ship.js");

describe("cruise ship constructor", () => {
  it("Should create an instance of an object", () => {
    const port = new Port();
    const port2 = new Port();
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it("Should have a starting port", () => {
    const port = new Port("Blackpool");
    const port2 = new Port("Dover");
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
  it("Should get added to port on instantiation", () => {
    const dover = new Port("Dover");
    const itinerary = new Itinerary([dover]);
    const ship = new Ship(itinerary);
    console.log(dover.ships);
    expect(dover.ships).toContain(ship);
  });
});

describe("Cruise ship methods", () => {
  it("Should be able to set sail when setSail method called", () => {
    const port = new Port("Dover");
    const port2 = new Port("Dover");
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(port);
  });
  it("Should be able to dock at a different port", () => {
    const port = new Port("Blackpool");
    const port2 = new Port("Dover");
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(port2);
  });
  it("Should not be able to sail further than its itinerary", () => {
    const port = new Port("Blackpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(() => {
      return ship.setSail();
    }).toThrowError("End of itinerery reached");
  });
});
