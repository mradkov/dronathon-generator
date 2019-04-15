class Location {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }
  
    get () {
        return [this.lat, this.long];
    }

    static distance(a, b) {
        const dLat = a.lat - b.lat;
        const dLong = a.long - b.long;
        return Math.hypot(dLat, dLong);
    }
}
  
module.exports = Location;