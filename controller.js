// controllers.js
let { cities, vehicles, cops, copiedCities} = require('./data');
const { captureFugitive } = require('./game');

// Get all cities
exports.getCities = (req, res) => {
  res.json(cities);
};

exports.resetDefault = (req,res) => {
  
  global.allVehicles = JSON.parse(JSON.stringify(vehicles));
  global.cops = JSON.parse(JSON.stringify(cops));
  cities = JSON.parse(JSON.stringify(copiedCities));
  res.json('')
}
// get all cops
exports.getCops = (req, res) => {
   
    res.json(global.cops);
  };

// Get all vehicles
exports.getVehicles = (req, res) => {
  res.json(global.allVehicles);
};

// Get all vehicles
exports.updateVehicles = (req, res) => {
  let vehicleToUpdate = global.cops.find(cop => cop.copid === req.body.copid);
  if (vehicleToUpdate) {
    vehicleToUpdate.selectedvehicle = req.body.type;
  }

  const selectedVehicle = req.body.type;
  const vehicleIndex = global.allVehicles.findIndex(vehicle => vehicle.type === selectedVehicle);

  console.log("Vehicle Index", vehicleIndex, global.allVehicles[vehicleIndex].count);
  
  if (vehicleIndex !== -1 && global.allVehicles[vehicleIndex].count > 0) {
    global.allVehicles[vehicleIndex].count--;
    if (global.allVehicles[vehicleIndex].count === 0) {
      // Remove the vehicle object if count becomes zero
      global.allVehicles.splice(vehicleIndex, 1);
    }
  }

  console.log(global.allVehicles);
  res.json({ vehicles: global.allVehicles });
};


exports.updateCityList = (req, res) => {
  let copToUpdate = global.cops.find(cop => cop.copid === req.body.copid);
    if (copToUpdate) {
        copToUpdate.selectedcity = req.body.name;
    }
    let indexToRemove = cities.findIndex(city => city.name === req.body.name);
    if (indexToRemove !== -1) {
        cities.splice(indexToRemove, 1);
    }
    res.json({cities : cities});
}
// Determine the result of the capture
exports.captureResult = (req, res) => {
  const copSelections = global.cops;
  const capturedCop = captureFugitive(copSelections);
  
  if (capturedCop) {
    res.json({ success: true, cop: capturedCop });
  } else {
    res.json({ success: false });
  }
};
