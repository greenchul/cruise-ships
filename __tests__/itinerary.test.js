const Itinerary = require("../src/itinerary");

describe("itinerary object", () => {
  it("Should create an instance of an object", () => {
    const itinerary = new Itinerary();
    expect(itinerary).toBeInstanceOf(Object);
  });
  it("Should contain a ports property", () => {
    const ports = [jest.fn(), jest.fn()];
    const itinerary = new Itinerary(ports);
    expect(itinerary.ports).toEqual(ports);
  });
});
