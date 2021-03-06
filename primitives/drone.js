const config = require('./misc').drone
const uuid = require('node-uuid-generator')

class Drone {
    constructor(type, battery, location) {
        this.id = uuid.generate();
        this.type = type;
        this.battery = battery;
        this.loaded = false;

        this.speed = config.types[type].speed;
        this.carryingCapacity = config.types[type].storage.capacity;

        // Initial location
        this.location = location;

        // CONSTANTS 
        this.batteryDrownRateEmpty = config.types[type].battery.drown.empty;
        this.batteryDrownRateLoaded = config.types[type].battery.drown.loaded;
    }

    setNewLocation(location) {
        this.location = location;
    }
  
    // Start drowning the battery when the drone is flying
    fly(goToLocation) {
  
        let distance = Location.distance(this.location, goToLocation);
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

module.exports = Drone;