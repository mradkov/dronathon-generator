const config = require('./misc').warehouse;
const uuid = require('node-uuid-generator')

class Warehouse {
    constructor(id, location) {
        this.uuid = uuid.generate();
        this.id = id;
        this.type = type;
        this.location = location;
    }
}

module.exports = Warehouse;