const config = require('./misc').parcel;
const uuid = require('node-uuid-generator')

class Parcel {
    constructor(type, warehouse, weight, location) {
        this.id = uuid.generate();
        this.warehouse = warehouse;
        this.type = type;
        this.weight = weight;

        // Initial location
        this.location = location;

        this.status = config.status.waiting;
    }

    setNewLocation(location) {
        this.location = location;
    }

    isAvailable() {
        return this.status == config.status.waiting || this.status == config.status.dropped;
    }
  
    pick() {
        if (isAvailable()){
            this.status = config.status.picked;
        }
        else {
            return false;
        }
    }
  
    drop() {
        this.status = config.status.dropped;
    }

    deliver() {
        this.status = config.status.delivered;
    }
}

module.exports = Parcel;