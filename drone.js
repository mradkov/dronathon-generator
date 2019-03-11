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
    constructor(id, battery, location) {
        this.id = id;
        this.battery = battery;
        this.loaded = false;

        // Initial location
        this.location = location;

        // CONSTANTS 
        this.speed = 20;
        this.batteryDrownRateEmpty = 1;
        this.batteryDrownRateLoaded = 1;

        // log
        console.log(`Initiated drone with the following settings:`);
        console.log(`${JSON.stringify(this)}`);
    }

    setNewLocation(location) {
      this.location = location;
    }

    // Start drowning the battery when the drone is flying
    fly(goToLocation) {

        let distance = Point.distance(this.location, goToLocation);
        console.log(`The distance is calculated: ${distance}`);

        // replace loop with for every point
        while (distance != 0) {
          console.log(`Distance remaining: ${distance}`);
          if (this.battery == 0) {
            console.log('Drone battery is dead!');
            return;
          }

          if (this.loaded == true) {this.battery -= this.batteryDrownRateLoaded;}
          
          this.battery -= this.batteryDrownRateEmpty;

          // TODO: work more over this
          let newLocation = this.location;
          let angle = Math.atan2(goToLocation.y-this.location.y, goToLocation.x-this.location.x);
          newLocation.x += Math.cos(angle); //*distance
          newLocation.y += Math.sin(angle); //*distance
          this.setNewLocation(newLocation);

          distance -= 1;

          // log
          console.log('Drone is flying towards the destination!');
          console.log(`Battery level: ${this.battery}`);
          console.log(`Location: ${JSON.stringify(this.location)}`);
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

let drone = new Drone(1, 100, new Point(20, -120));
drone.fly(new Point(301, 123));