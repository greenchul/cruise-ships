const Port = require("../src/port");

describe("Ports", () => {
  describe("with created port", () => {
    let port;
    let ship;
    beforeEach(() => {
      port = new Port("Blackpool");
      ship = {};
    });
    it("Should create an instance of an object", () => {
      expect(port).toBeInstanceOf(Object);
    });
    it("Should have a name", () => {
      expect(port.name).toBe("Blackpool");
    });
    it("Should add a ship to ships property when addShip is called", () => {
      expect(port.ships).toEqual([]);
      port.addShip(ship);
      expect(port.ships.length).toBe(1);
      expect(port.ships).toContain(ship);
    });
    it("Should remove a ship from ships property when removeShip is called", () => {
      const anotherShip = {};
      port.addShip(ship);
      port.addShip(anotherShip);
      port.removeShip(ship);
      expect(port.ships).toEqual([anotherShip]);
    });
  });
});
