const config = require('./misc').station;
const uuid = require('node-uuid-generator')

class Station {
    constructor(type, location) {
        this.id = uuid.generate();
        this.type = type;

        // Initial location
        this.location = location;

        this.status = true;
    }

    charge() {
        this.status = false;
    }
}

module.exports = Station;