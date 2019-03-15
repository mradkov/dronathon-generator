const math = require('mathjs')


class LocationPoint {
  constructor(lat, long) {
    this.lat = lat;
    this.long = long;
  }

  static distance(LocationPointA, LocationPointB) {
    const dLat = LocationPointA.lat - LocationPointB.lat;
    const dLong = LocationPointA.long - LocationPointB.long;
    return Math.hypot(dLat, dLong);
  }
}

class Drone {
    constructor(id, battery, location) {
        this.id = id;
        this.battery = battery;
        this.loaded = false;

        // Initial location
        this.location = location;

        // CONSTANTS 
        this.speed = 20;
        this.batteryDrownRateEmpty = 1;
        this.batteryDrownRateLoaded = 1;

        // log
        console.log(`Initiated drone with the following settings:`);
        console.log(`${JSON.stringify(this)}`);
    }

    setNewLocation(location) {
      this.location = location;
    }

    // Start drowning the battery when the drone is flying
    fly(goToLocation) {

        let distance = LocationPoint.distance(this.location, goToLocation);
        console.log(`The distance is calculated: ${distance}`);

        // replace loop with for every point
        while (distance != 0) {
          console.log(`Distance remaining: ${distance}`);
          if (this.battery == 0) {
            console.log('Drone battery is dead!');
            return;
          }

          if (this.loaded == true) {this.battery -= this.batteryDrownRateLoaded;}
          
          this.battery -= this.batteryDrownRateEmpty;

          // TODO: work more over this
          let newLocation = this.location;
          let angle = Math.atan2(goToLocation.y-this.location.y, goToLocation.x-this.location.x);
          newLocation.x += Math.cos(angle); //*distance
          newLocation.y += Math.sin(angle); //*distance
          this.setNewLocation(newLocation);

          distance -= 1;

          // log
          console.log('Drone is flying towards the destination!');
          console.log(`Battery level: ${this.battery}`);
          console.log(`Location: ${JSON.stringify(this.location)}`);
        }
    }

    // Recharge the drone battery when its on a charging station
    charge() {
        this.battery += 1;
    }

    // 
    carryPackage() {
      this.loaded = true;
    }

    dropPackage() {
      this.loaded = false;
      this.batteryDrownRate = 1;
    }
}

let drone = new Drone(1, 100, new LocationPoint(20, -120));
drone.fly(new LocationPoint(301, 123));


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
  new LocationPoint(42.671381,23.213280), // bottomLeft
  new LocationPoint(42.742021,23.266815), // topLeft
  new LocationPoint(42.689048,23.466542), // topRight
  new LocationPoint(42.610768,23.404771) // bottomRight
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
  inside(new LocationPoint(42.688039,23.294956),range)
);

console.log(
  inside(new LocationPoint(42.666332,23.208476),range)
);