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

setTimeout(() => {
  generateHTML(JSON.stringify(dronesObject),JSON.stringify(parcelsObject),JSON.stringify(stationsObject))
}, 500);

function generateHTML(drones, parcels, stations) {

  let html = `
  <!DOCTYPE html>
<html>
<head>
    <title>HACK - Dronathon generator - Map</title>
    <meta charset="utf-8" />
    <link 
        rel="stylesheet" 
        href="http://cdn.leafletjs.com/leaflet-0.7/leaflet.css"
    />
</head>
<body>

    <div id="map" style="width: 800px; height: 600px"></div>

    <script
        src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js">
    </script>

    <script
    src="icons.js">
    </script>
    <script>

// SETUP

    var drones = ${drones};
    var parcels = ${parcels};
    var stations = ${stations};
    var offices = [["Networking Coworking [Dronathon]",42.70571,23.32878]];

//


        var map = L.map('map').setView([42.697434,23.321422], 12);
        mapLink = 
            '<a href="http://hack.bg/">hack.bg</a>';
        L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' - Dronathon generator',
            maxZoom: 18,
            }).addTo(map);

        // draw drones
		for (var i = 0; i < drones.length; i++) {
			marker = new L.marker([drones[i][1],drones[i][2]], {icon: droneIcon})
				.bindPopup(drones[i][0])
				.addTo(map);
        }
        
        // draw parcels
        for (var i = 0; i < parcels.length; i++) {
			marker = new L.marker([parcels[i][1],parcels[i][2]], {icon: parcelIcon})
				.bindPopup(parcels[i][0])
				.addTo(map);
        }
        
        // draw stations
        for (var i = 0; i < stations.length; i++) {
			marker = new L.marker([stations[i][1],stations[i][2]], {icon: chargerIcon})
				.bindPopup(stations[i][0])
				.addTo(map);
        }

        //draw offices
        for (var i = 0; i < offices.length; i++) {
			marker = new L.marker([offices[i][1],offices[i][2]], {icon: officeIcon})
				.bindPopup(offices[i][0])
				.addTo(map);
		}
               
    </script>
</body>
</html>
  `;

  fs.writeFile('./dist/index.html', html, (err) => {
    if (err) throw err;
    console.log('View generated!');
  });
}