const math = require('mathjs')

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

class Drone {
    constructor(id, battery) {
        this.id = id;
        this.battery = battery;
        this.loaded = false;
        this.batteryDrownRateEmpty = 1;
        this.batteryDrownRateLoaded = 1;
        this.location = new Point(12, -123);

        // log
        console.log(`Initiated drone with the following settings:`);
        console.log(`${JSON.stringify(this)}`);
    }

    set setNewLocation(location) {
      this.location = location;
    }

    // Start drowning the battery when the drone is flying
    fly(newLocation) {

        let distance = Point.distance(this.location, newLocation);

        console.log(`The distance is calculated: ${distance}`);

        // replace loop with for every point
        for(let i = 0; i <= distance; i++) {
          if (this.battery == 0) {
            console.log('Drone battery is dead!');
            return;
          }

          if (this.loaded == true) {this.battery -= this.batteryDrownRateLoaded;}
          
          this.battery -= this.batteryDrownRateEmpty;
          this.location = 

          // log
          console.log('Drone is flying towards the destination!');
          console.log(`Battery level: ${this.battery}`);
          console.log(`Location: ${this.location}`);
        }
    }

    // Recharge the drone battery when its on a charging station
    charge() {
        this.battery += 1;
    }

    // 
    carryPackage() {
      this.loaded = true;
    }

    dropPackage() {
      this.loaded = false;
      this.batteryDrownRate = 1;
    }
}

let drone = new Drone(1, 100);
drone.fly(new Point(301, 123));