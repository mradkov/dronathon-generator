const math = require('mathjs')
const classifyPoint = require("robust-point-in-polygon")
const Location = require('../primitives/location')
const Drone = require('../primitives/drone')
const sofiaPoly = require('../geo/sofia-poly')
const helpers = require('./helpers')

module.exports = {
    drones(count) {
        let drones = [];
        while(drones.length <= count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let drone = new Drone(1, 100, new Location(newPoint[0], newPoint[1]));
                drones.push(drone);
            }
        }
        return drones;
    },

    parcels(count) {
        let parcels = [];
        while(parcels.length <= count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let parcel = new Parcel(1, 100, new Location(newPoint[0], newPoint[1]));
                parcels.push(drone);
            }
        }
        return packages;
    },
    
    stations(count) {
        let stations = [];
        while(chargingStations.length <= count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let station = new ChargingStation(1, 100, new Location(newPoint[0], newPoint[1]));
                chargingStations.push(drone);
            }
        }
        return stations;
    }

}