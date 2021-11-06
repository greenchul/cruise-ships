class Ship {
  constructor(itinerary) {
    this.itinerary = itinerary;
    this.previousPort = null;
    this.currentPort = itinerary.ports[0];
  }
  setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }
  dock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    const nextPortIndex = previousPortIndex + 1;
    this.currentPort = itinerary.ports[nextPortIndex];
  }
}

module.exports = Ship;
