const math = require('mathjs')

class Drone {
    constructor(id, battery) {
        this.id = id;
        this.battery = battery;
        this.loaded = false;
        this.batteryDrownRateEmpty = 1;
        this.batteryDrownRateLoaded = 1;

        // log
        console.log(`Initiated drone with the following settings:`);
        console.log(`${JSON.stringify(this)}`);
    }

    // Start drowning the battery when the drone is flying
    fly(distance) {
        for(let i = 0; i <= distance; i++) {
          if (this.battery == 0) {
            console.log('Drone battery is dead!');
            return;
          }

          if (this.loaded == true) {this.battery -= this.batteryDrownRateLoaded;}
          
          this.battery -= this.batteryDrownRateEmpty;

          // log
          console.log('Drone is flying towards the destination!');
          console.log(`Battery level: ${this.battery}`);
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
drone.fly(12);