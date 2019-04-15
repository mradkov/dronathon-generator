const Location = require('./location')
const misc = require('./misc')
const config = misc.parcel;

class Parcel {
    constructor(id, type, weight, location) {
        this.id = id;
        this.type = type;
        this.weight = weight;

        // Initial location
        this.location = location;

        // log
        console.log(`Initiated parcel the following settings:`);
        console.log(`${JSON.stringify(this)}`);

        this.status = config.statuses.waiting;
    }

    setNewLocation(location) {
        this.location = location;
    }

    isAvailable() {
        return this.status == config.statuses.waiting || this.status == config.statuses.dropped;
    }
  
    pick() {
        if (isAvailable()){
            this.status = config.statuses.picked;
        }
        else {
            return false;
        }
    }
  
    drop() {
        this.status = config.statuses.dropped;
    }

    deliver() {
        this.status = config.statuses.delivered;
    }
}

module.exports = Drone;