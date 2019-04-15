const generator = require('./utils/generator');
const argv = require('yargs').argv

console.log("Initialing Dronathon Challenge:");
console.log("...");

if(!argv.d || !argv.p || !argv.s) {
  console.log('Error: Missing arguments -d [drones<count>] -p [parcels<count>] -s [stations<count>]');
  return false;
}

let drones = generator.drones(argv.d);
let parcels = generator.parcels(argv.p);
let chargingStations = generator.stations(argv.s);

