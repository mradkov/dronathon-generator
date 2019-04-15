var argv = require('minimist')(process.argv.slice(2), opts={alias: true});
const math = require('mathjs')
const Location = require('./primitives/location')
const Drone = require('./primitives/drone')
const classifyPoint = require("robust-point-in-polygon")
const sofiaPoly = require('./geo/sofia-poly')
const helpers = require('./utils/helpers')
const generator = require('./utils/generator');

let drones = generator.drones(10);
let parcels = generator.parcels(10);
let chargingStations = [];



// console.log(drones);
console.log(parcels);