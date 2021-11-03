const Port = require("../src/port.js");
const Ship = require("../src/Ship.js");

describe("cruise ship constructor", () => {
  it("Should create an instance of an object", () => {
    const ship = new Ship();
    expect(ship).toBeInstanceOf(Object);
  });
  it("Should have a starting port", () => {
    const port = new Port("Blackpool");
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });
});

describe("Cruise ship methods", () => {
  it("Should be able to set sail when setSail method called", () => {
    const port = new Port("Dover");
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
  it("Should be able to dock at a different port", () => {
    const dover = new Port("Dover");
    const ship = new Ship(dover);
    const portsmouth = new Port("Portsmouth");
    ship.dock(portsmouth);
    expect(ship.currentPort).toBe(portsmouth);
  });
});
