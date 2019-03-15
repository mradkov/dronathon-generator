const math = require('mathjs')
const Location = require('./primitives/location')
const Drone = require('./primitives/drone')

let drone = new Drone(1, 100, new Location(20, -120));
drone.fly(new Location(301, 123));


function latLonDistanceInKM(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function kmToM(d){
  return d*1000;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


// Sofia Range poly
let range = [
  new Location(42.671381,23.213280), // bottomLeft
  new Location(42.742021,23.266815), // topLeft
  new Location(42.689048,23.466542), // topRight
  new Location(42.610768,23.404771) // bottomRight
];

function inside(point, range) {

  let x = point.lat, y = point.long;

  let inside = false;
  for (let i = 0, j = range.length - 1; i < range.length; j = i++) {
      let xi = range[i].lat, yi = range[i].long;
      let xj = range[j].lat, yj = range[j].long;

      let intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }

  return inside;
};

console.log(
  kmToM(
    latLonDistanceInKM(59.3293371,13.4877472,59.3225525,13.4619422)
    .toFixed(1)
  )
);

console.log(
  inside(new Location(42.688039,23.294956),range)
);

console.log(
  inside(new Location(42.666332,23.208476),range)
);