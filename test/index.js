var argv = require('minimist')(process.argv.slice(2), opts={alias: true});
const math = require('mathjs')
const Location = require('../primitives/location')
const Drone = require('../primitives/drone')
const classifyPoint = require("robust-point-in-polygon")
const sofiaPoly = require('../primitives/sofia-poly')
const helpers = require('../utils/helpers')

console.log("Tests here:");

let drone = new Drone(1, 100, new Location(20, -120));
drone.fly(new Location(301, 123));

console.log(
  helpers.kmToM(
    helpers.latLonDistanceInKM(59.3293371,13.4877472,59.3225525,13.4619422)
    .toFixed(1)
  )
);