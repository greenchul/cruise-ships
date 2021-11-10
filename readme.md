# Cruise Ships

## About

Cruise ship project as part of the Manchester Codes curriculum which implements OOP, user stories and domain models, dependency injection & TDD with Jest (inc test doubles).

## Installation

- Clone this repo
- Change in to repo directory
- Run NPM install

## Creating ships, ports & itineries

All ships need itineraries and all itineraries need ports.

### Creating a new port

Create an instance of the Port class and pass in the port name as an argument

```js
const dover = new Port("Dover");
```

### Creating a new itinerary

Create an instance of the Itinerary class and pass in an array of Ports as an argument

```js
const itinerary = new Itinerary([dover, plymouth]);
```

### Creating a new ship

Create an instance of the Ship class and pass in an Itinerary as an argument

```js
const ship = new Ship(itinerary);
```

All ships can sail, providing they are not at the last port in the itinerary

```js
ship.setSail();
```

All ships can come alongside

```js
ship.dock();
```

When alongside, the ship will be added to that ports "ships" array.
