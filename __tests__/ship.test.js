const Itinerary = require("../src/itinerary.js");
const Port = require("../src/port.js");
const Ship = require("../src/Ship.js");

describe("cruise ship", () => {
  describe("with ports and an itinerary", () => {
    let port;
    let port2;
    let itinerary;
    let ship;
    beforeEach(() => {
      port = new Port("Blackpool");
      port2 = new Port("Dover");
      itinerary = new Itinerary([port, port2]);
      ship = new Ship(itinerary);
    });
    it("Should create an instance of an object", () => {
      expect(ship).toBeInstanceOf(Object);
    });
    it("Should have a starting port", () => {
      expect(ship.currentPort).toBe(port);
    });
    it("Should get added to port on instantiation", () => {
      expect(port.ships).toContain(ship);
    });
    it("Should be able to set sail when setSail method called", () => {
      ship.setSail();
      expect(ship.currentPort).toBeFalsy();
      expect(ship.previousPort).toBe(port);
      expect(ship.previousPort.ships).not.toContain(ship);
    });
    it("Should be able to dock at a different port", () => {
      ship.setSail();
      ship.dock();
      expect(ship.currentPort).toBe(port2);
      expect(port2.ships).toContain(ship);
    });
  });
});

describe("Cruise ship methods", () => {
  it("Should not be able to sail further than its itinerary", () => {
    const port = new Port("Blackpool");
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(() => {
      return ship.setSail();
    }).toThrowError("End of itinerery reached");
  });
});
