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
      const portsDivWidth = portsDiv.clientWidth;
      console.log(portsDivWidth);

      ports.forEach((port, index) => {
        const portElement = document.createElement("div");
        portsDiv.appendChild(portElement);
        portElement.dataset.portIndex = index;
        portElement.className = "port";

        if (portsDivWidth < 400 || index >= 5) {
          console.log("small screen", index);
          portsDiv.style.width = `${portsDivWidth + 256}px`;
        }
      });
    }

    renderShip() {
      const shipTrack = document.getElementById("ship-track");
      const shipElement = document.createElement("div");
      shipElement.className = "ship";

      shipTrack.appendChild(shipElement);
      const firstPort = document.querySelectorAll(".port")[0];

      shipElement.style.left = `${firstPort.offsetLeft}px`;
      this.renderPortMessage();
    }
    sail() {
      this.renderSailingMessage();
      const shipElement = document.querySelector(".ship");
      const portDivs = document.querySelectorAll(".port");
      const currentPortIndex = this.ship.itinerary.ports.indexOf(
        this.ship.currentPort
      );
      const currentLeft = shipElement.offsetLeft;
      const currentPort = this.ship.currentPort;

      const nextPortIndex = currentPortIndex + 1;
      const nextPortElement = portDivs[nextPortIndex];
      const nextPortLeft = nextPortElement.offsetLeft;

      const sailInterval = setInterval(() => {
        const shipLeft = shipElement.offsetLeft;

        if (shipLeft === nextPortLeft) {
          this.ship.setSail();

          this.ship.dock();

          this.renderPortMessage();

          clearInterval(sailInterval);
        }
        shipElement.style.left = `${shipLeft + 1}px`;
      }, 40);
    }
    renderPortMessage() {
      const messageDiv = document.getElementById("message");
      const index = this.ship.itinerary.ports.indexOf(this.ship.currentPort);
      const nextPort = this.ship.itinerary.ports[index + 1];
      if (!nextPort) {
        messageDiv.innerHTML = `At ${ship.currentPort.name} - final destination`;
        const sailButton = document.getElementById("sail-button");
        sailButton.disabled = true;
      } else {
        messageDiv.innerHTML = `At ${ship.currentPort.name}, next stop is ${nextPort.name}`;
      }
    }
    renderSailingMessage() {
      const messageDiv = document.getElementById("message");
      messageDiv.innerHTML = `Sailing!`;
    }
  }
  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();
