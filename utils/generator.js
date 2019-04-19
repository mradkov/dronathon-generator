const math = require('mathjs')
const classifyPoint = require("robust-point-in-polygon")
const Drone = require('../primitives/drone')
const Parcel = require('../primitives/parcel')
const Station = require('../primitives/station')
const config = require('../primitives/misc')
const sofiaPoly = require('../geo/sofia-poly')
const helpers = require('./helpers')

const area = Array(
    require('../geo/polys/area1'),
    require('../geo/polys/area2'),
    require('../geo/polys/area3'),
    require('../geo/polys/area4'),
    require('../geo/polys/area5'),
    require('../geo/polys/area6'),
    require('../geo/polys/area7')
);


//import regions

module.exports = {
    drones(count) {
        let drones = [];
        while(drones.length < count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let drone = new Drone(
                    Math.floor(Math.random()),
                    100,
                    [newPoint[0], newPoint[1]]
                );
                drones.push(drone);
            }
        }
        return drones;
    },

    parcels(count) {
        let parcels = [];
        while(parcels.length < count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {

                let warehouse = Math.floor(helpers.randomWithRange(1,5)); 

                // check region
                area.forEach(function(areaPolygon, index) {
                    if (classifyPoint(areaPolygon, newPoint) == -1) {
                        warehouse = index;
                    }
                });
                
                let type = Math.round(Math.random());
                let parcel = new Parcel(
                    // type
                    config.parcel.types[type].name,
                    // warehouse
                    warehouse,
                    // weight
                    Math.floor(
                        helpers.randomWithRange(
                            config.parcel.types[type].weights.min,
                            config.parcel.types[type].weights.max
                        )
                    ),
                    //location
                    [newPoint[0], newPoint[1]]
                );
                parcels.push(parcel);
            }
        }
        return parcels;
    },
    
    stations(count) {
        let stations = [];
        while(stations.length < count) {
            let newPoint = [helpers.randomWithRange(23.1, 23.5), helpers.randomWithRange(42.6, 42.8)];
            if (classifyPoint(sofiaPoly, newPoint) == -1) {
                let type = Math.random() < 0.5 ? 0 : 1;
                let station = new Station(type, [newPoint[0], newPoint[1]]);
                stations.push(station);
            }
        }
        return stations;
    }

}