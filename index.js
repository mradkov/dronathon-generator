const generator = require('./utils/generator');
const argv = require('yargs').argv
const fs = require('fs')
const offices = require('./geo/polys/warehouses')

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

fs.writeFile('./dist/drones/drones.json', JSON.stringify(dronesObject), (err) => {
  if (err) throw err;
  console.log('Drones generated succesfully!');
});

// PARCELS
let parcels = generator.parcels(argv.p);
let parcelsObject = [[],[],[],[],[],[],[]];
parcels.forEach(parcel => {
    let p = Array(JSON.stringify(parcel), parcel.location[1], parcel.location[0]);
    parcelsObject[parcel.warehouse].push(p);
});

for (let i = 0; i < parcelsObject.length; i++) {
  fs.writeFile(`./dist/parcels/parcel${i}.json`, JSON.stringify(parcelsObject[i]), (err) => {
    if (err) throw err;
    console.log('Parcels generated succesfully!');
  });
}

// STATIONS
let chargingStations = generator.stations(argv.s);
let stationsObject = [];
chargingStations.forEach(station => {
  let s = Array(JSON.stringify(station), station.location[1], station.location[0]);
  stationsObject.push(s);
});

fs.writeFile('./dist/stations/station.json', JSON.stringify(stationsObject), (err) => {
  if (err) throw err;
  console.log('Stations generated succesfully!');
});


// parcel ID to warehouse
setTimeout(() => {
  generateHTML(
    dronesObject,
    parcelsObject,
    stationsObject,
    offices
  )
}, 500);


function generateHTML(_drones, _parcels, _stations, _offices) {

    let drones = JSON.stringify(_drones);
    let parcels = JSON.stringify(_parcels[0]);
    let parcels1 = JSON.stringify(_parcels[1]);
    let parcels2 = JSON.stringify(_parcels[2]);
    let parcels3 = JSON.stringify(_parcels[3]);
    let parcels4 = JSON.stringify(_parcels[4]);
    let parcels5 = JSON.stringify(_parcels[5]);
    let parcels6 = JSON.stringify(_parcels[6]);
    let stations = JSON.stringify(_stations);
    let offices = JSON.stringify(_offices);

  let html = `
    var drones = ${drones};
    var parcels = ${parcels};
    var parcels1 = ${parcels1};
    var parcels2 = ${parcels2};
    var parcels3 = ${parcels3};
    var parcels4 = ${parcels4};
    var parcels5 = ${parcels5};
    var parcels6 = ${parcels6};
    var stations = ${stations};
    var offices = ${offices};
  `;

  fs.writeFile('./dist/generated.js', html, (err) => {
    if (err) throw err;
    console.log('View generated!');
  });
}