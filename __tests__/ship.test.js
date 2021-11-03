const Ship = require("../src/Ship.js");

describe("cruise ship constructor", () => {
  it("Should create an instance of an object", () => {
    const ship = new Ship();
    expect(ship).toBeInstanceOf(Object);
  });
  it("Should have a starting port", () => {
    const ship = new Ship("Blackpool");
    expect(ship.startingPort).toBe("Blackpool");
  });
});
