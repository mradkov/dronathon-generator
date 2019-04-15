const generator = require('./utils/generator');
const argv = require('yargs').argv
const fs = require('fs')

console.log("Initialing Dronathon Challenge:");
console.log("...");

if(!argv.d || !argv.p || !argv.s) {
  console.log('Error: Missing arguments -d [drones<count>] -p [parcels<count>] -s [stations<count>]');
  return false;
}

// DRONES
let drones = generator.drones(argv.d);
let dronesObject = [];
drones.forEach(drone => {
  let d = Array(JSON.stringify(drone), drone.location[1], drone.location[0]);
  dronesObject.push(d);
});

fs.writeFile('./dist/drones.json', JSON.stringify(dronesObject), (err) => {
  if (err) throw err;
  console.log('Drones generated succesfully!');
});

// PARCELS
let parcels = generator.parcels(argv.p);
let parcelsObject = [];
parcels.forEach(parcel => {
  let p = Array(JSON.stringify(parcel), parcel.location[1], parcel.location[0]);
  parcelsObject.push(p);
});

fs.writeFile('./dist/parcel.json', JSON.stringify(parcelsObject), (err) => {
  if (err) throw err;
  console.log('Parcels generated succesfully!');
});

// STATIONS
let chargingStations = generator.stations(argv.s);
let stationsObject = [];
chargingStations.forEach(station => {
  let s = Array(JSON.stringify(station), station.location[1], station.location[0]);
  stationsObject.push(s);
});

fs.writeFile('./dist/station.json', JSON.stringify(stationsObject), (err) => {
  if (err) throw err;
  console.log('Stations generated succesfully!');
});

var offices = [
  ["Networking Coworking [Dronathon]",42.70571,23.32878],
  ["Airport Sofia", 42.6932,23.4112]
];

// parcel ID to warehouse

setTimeout(() => {
  generateHTML(
    JSON.stringify(dronesObject),
    JSON.stringify(parcelsObject),
    JSON.stringify(stationsObject),
    JSON.stringify(offices)
  )
}, 500);


function generateHTML(drones, parcels, stations, offices) {

  let html = `
    var drones = ${drones};
    var parcels = ${parcels};
    var stations = ${stations};
    var offices = ${offices};
  `;

  fs.writeFile('./dist/generated.js', html, (err) => {
    if (err) throw err;
    console.log('View generated!');
  });
}