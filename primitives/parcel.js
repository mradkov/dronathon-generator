const Location = require('./location')
const Statuses = require('./status')

class Parcel {
    constructor(id, type, weight, location) {
        this.id = id;
        this.type = type;
        this.weight = weight;

        // Initial location
        this.location = location;

        // log
        console.log(`Initiated package the following settings:`);
        console.log(`${JSON.stringify(this)}`);

        this.status = statuses.waiting;
    }

    setNewLocation(location) {
        this.location = location;
    }
  
    pick() {
        this.loaded = true;
    }
  
    dropPackage() {
        this.loaded = false;
        this.batteryDrownRate = 1;
    }
}

module.exports = Drone;