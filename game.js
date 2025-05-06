// game.js
const { vehicles,copiedCities } = require('./data');

// Simulate fugitive's location randomly

// Function to determine if any cop successfully captured the fugitive
exports.captureFugitive = (copSelections) => {
  for (const cop of copSelections) {
    const selectedCity = copiedCities.find(city => city.name === cop.selectedcity);
    const selectedVehicle = vehicles.find(vehicle => vehicle.type === cop.selectedvehicle);
    
    // Calculate total distance needed to travel
    const totalDistance = selectedCity.distance * 2;
    
    // Check if selected vehicle has enough range
    if (selectedVehicle.range >= totalDistance) {
      // Check if cop is in the same city as the fugitive
        return cop; // Return the cop if they successfully captured the fugitive
    
    }
  }
  return null; // Fugitive not captured
};
