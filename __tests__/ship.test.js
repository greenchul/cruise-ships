const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");
const Ship = require("../src/Ship.js");

describe("cruise ship constructor", () => {
  it("Should create an instance of an object", () => {
    const itinerary = new Itinerary([jest.fn(), jest.fn()]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  it("Should have a starting port", () => {
    const port = jest.fn();
    const port2 = jest.fn();
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port);
  });
});

describe("Cruise ship methods", () => {
  it("Should be able to set sail when setSail method called", () => {
    const itinerary = new Itinerary([jest.fn(), jest.fn()]);
    const ship = new Ship(itinerary);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it("Should be able to dock at a different port", () => {
    const port = jest.fn();
    const port2 = jest.fn();
    const itinerary = new Itinerary([port, port2]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(port2);
  });
});
