const math = require('mathjs')
const uuid = require('node-uuid-generator')
const classifyPoint = require("robust-point-in-polygon")
const Location = require('../primitives/location')
const Drone = require('../primitives/drone')
const config = require('../primitives/misc')
const sofiaPoly = require('../geo/sofia-poly')
const helpers = require('./helpers')

module.exports = {
    drones(count) {
        let drones = [];
        while(drones.length <= count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let drone = new Drone(uuid.generate(), 100, new Location(newPoint[0], newPoint[1]));
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
                // id, type, weight, location
                let type = Math.round(Math.random());
                let parcel = new Parcel(
                    uuid.generate(),
                    type == 0 ? config.parcel.types.box : config.parcel.types.letter,
                    type == 0 ? 
                        Math.floor(
                            helpers.randomWithRange(
                                config.parcel.weights.box.min,
                                config.parcel.weights.box.max
                            )
                        ) :
                        Math.floor(
                            helpers.randomWithRange(
                                config.parcel.weights.letter.min,
                                config.parcel.weights.letter.max
                            )
                        ),
                    new Location(newPoint[0], newPoint[1])
                );
                parcels.push(drone);
            }
        }
        return parcels;
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