const Port = require("../src/port");

describe("Port constructor", () => {
  it("Should create an instance of an object", () => {
    const port = new Port();
    expect(port).toBeInstanceOf(Object);
  });
  it("Should have a name", () => {
    const port = new Port("Blackpool");
    expect(port.name).toBe("Blackpool");
  });
});

describe("Port methods", () => {
  it("Should add a ship to ships property when addShip is called", () => {
    const port = new Port("Dover");
    const ship = {};
    expect(port.ships).toEqual([]);
    port.addShip(ship);
    expect(port.ships.length).toBe(1);
    expect(port.ships).toContain(ship);
  });
  it("Should remove a ship from ships property when removeShip is called", () => {
    const port = new Port("Dover");
    const ship = {};
    const anotherShip = {};

    port.addShip(ship);
    port.addShip(anotherShip);
    port.removeShip(ship);
    console.log(port.ships);
    expect(port.ships).toEqual([anotherShip]);
  });
});
