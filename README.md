# Dronathon - Blockchain Supply Chain Hackathon with Drones



## Challenge Rules:
1. Get 100 Packages delivered by 33 Drones to their Final Destinations
2. There are 7 Distribution Stations and 7 Districts in the Virtual city of Sofia, Bulgaria
3. All drones start with a full battery
4. 50 Charging roofs around the city,there are fast and slow charging spots. 
5. There are heavy and light packages with different power/battery drainage rates
6. There are 2 types of Drones: Fast and Slow

### Constraints & Info:
- Drone:
  - can only carry 1 package at a time
  - should complete the delivery of a taken package
  - can be charged with and without a package	
  - can be charged in warehouse
  - can fly for 1 hour with full battery
  - battery cannot fall below 30%
  - a full 100% battery == 60 min flight
- Chargers:
  - Fast charger - can charge 60% battery per hour
  - Slow charger - can charge 30% battery per hour

### Genreator:

Generate challange:

1. Clone the repo
2. `npm install`
3. `node index.js -d 10 -p 20 -s 5`

- `-d`  - Number of drones
- `-p`  - Number of parcels
- `-s`  - Number of charging stations

### Additional Resources:

Generated challange preview: https://hack.bg/dronathon/dist
Google maps areas boundaries: https://drive.google.com/open?id=1sjpeQCsJk9DvtC24mMqbjcULksRPl9WG&usp=sharing



