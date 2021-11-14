(function exportController() {
  class Controller {
    constructor(ship) {
      this.ship = ship;
    }
    renderBackground() {
      const map = document.getElementById("map");
      const backgrounds = ["/images/water0.png", "/images/water1.png"];
      let count = 0;
      window.setInterval(() => {
        if (count % 2 === 0) {
          map.style.backgroundImage = `url(${backgrounds[0]})`;
        } else {
          map.style.backgroundImage = `url(${backgrounds[1]})`;
        }
        count++;
      }, 1000);
    }
    renderPorts(ports) {
      const portsDiv = document.getElementById("ports");
      ports.forEach((port, index) => {
        const portElement = document.createElement("div");
        portsDiv.appendChild(portElement);
        portElement.dataset.portIndex = index;

        portElement.className = "port";
      });
    }
    renderShip() {
      const shipTrack = document.getElementById("ship-track");
      const shipElement = document.createElement("div");
      shipElement.className = "ship";

      shipTrack.appendChild(shipElement);
      const firstPort = document.querySelectorAll(".port")[0];

      shipElement.style.left = `${firstPort.offsetLeft}px`;
      this.renderMessage(this.ship);
    }
    sail() {
      const shipElement = document.querySelector(".ship");
      const portDivs = document.querySelectorAll(".port");
      const currentPortIndex = this.ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const currentLeft = shipElement.offsetLeft;
      const currentPort = this.ship.currentPort;

      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = portDivs[nextPortIndex];
      console.log(nextPortElement);
      const nextPortLeft = nextPortElement.offsetLeft;
      console.log(nextPortLeft);

      const sailInterval = setInterval(() => {
        const shipLeft = shipElement.offsetLeft;

        if (shipLeft === nextPortLeft) {
          this.ship.setSail();
          this.ship.dock();
          this.renderMessage(this.ship);
          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 40);
      // shipElement.style.left = `${nextPortLeft}px`;

      // this.ship.setSail();
      // this.ship.dock();
      // this.renderMessage(this.ship);
    }
    renderMessage(ship) {
      const messageDiv = document.getElementById("message");
      messageDiv.innerHTML = `At ${ship.currentPort.name}`;
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
