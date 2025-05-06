// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { getCities, getVehicles, captureResult,getCops,updateVehicles,updateCityList, resetDefault } = require('./controller');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 7777;

// Define CORS options
const corsOptions = {
  origin: '*', // Allow requests from any origin, // Allow requests only from this origin
};
app.use(cors(corsOptions));
// Middleware
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.get('/cities', getCities);
app.get('/allCops',getCops)
app.get('/vehicles', getVehicles);
app.put('/updateCityList', updateCityList)
app.put('/updateVehicles',updateVehicles)
app.get('/reset', resetDefault)
app.get('/capture', captureResult); // Route for capturing the fugitive

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
