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
