const { } = require("express");

let cities = [
  {
    name: "Yapkashnagar",
    distance: 60,
    imageUrl: "https://freepngimg.com/thumb/city/86758-building-city-2d-game-computer-video-graphics.png"
  },
  {
    name: "Lihaspur",
    distance: 50,
    imageUrl: "https://www.pngkit.com/png/full/71-716950_the-night-sky-of-the-city-night-city.png"
  },
  {
    name: "Narmis City",
    distance: 40,
    imageUrl: "https://www.freepngimg.com/thumb/road/72953-tower-lights-street-2017-cartoon-road.png"
  },
  {
    name: "Shekharvati",
    distance: 30,
    imageUrl: "https://zeevector.com/wp-content/uploads/2020/05/Modern-City-Vector-Clipart.png"
  },
  {
    name: "Nuravgram",
    distance: 20,
    imageUrl: "https://webstockreview.net/images/city-clipart-cartoon-3.png"
  }
];
let copiedCities= JSON.parse(JSON.stringify(cities));


  const vehicles = [
    { type: 'EV Bike', range: 60, count: 2, imageURL: "https://cdn.motor1.com/images/mgl/1Zp4pw/s1/the-weel-ev-b-is-a-self-driving-ev-cosplaying-as-an-e-bike.jpg" },
    { type: 'EV Car', range: 100, count: 1, imageURL: "https://creazilla-store.fra1.digitaloceanspaces.com/vectors/19357/tesla-model-s-vector-sm.jpeg" },
    { type: 'EV SUV', range: 120, count: 1, imageURL: "https://cdn.dribbble.com/users/1399545/screenshots/14102200/media/c5f0cb5c299ef69d5a8ebbdf7213a613.jpg" }
  ];

  let copiedVehicles = JSON.parse(JSON.stringify(vehicles));
  global.allVehicles = copiedVehicles;
  
  const cops =[
    {
      "copid": 101,
      "name": "Aniket Sharma",
      "profile": "Detective",
      "post": "Senior Investigator",
      "selectedcity": "",
      "selectedvehicle": "",
      "image": "https://www.pngall.com/wp-content/uploads/12/Sherlock-Benedict-Cumberbatch-PNG-Clipart.png"
    },
    {
      "copid": 102,
      "name": "Pragya Rai",
      "profile": "Traffic Officer",
      "post": "Patrol Officer",
      "selectedcity": "",
      "selectedvehicle": "",
      "image": "https://i.pinimg.com/736x/6b/fe/23/6bfe2377a1b140f2fff432c5b2caa463.jpg"
    },
    {
      "copid": 103,
      "name": "Ashutosh Tripathi",
      "profile": "SWAT Team",
      "post": "Team Leader",
      "selectedcity": "",
      "selectedvehicle": "",
      "image": "https://p7.hiclipart.com/preview/261/696/994/police-officer-clip-art-cartoon-police.jpg"
    },];
  let copiedCops = JSON.parse(JSON.stringify(cops));
  global.cops = copiedCops
  module.exports = { cities, vehicles, cops, copiedCities };
  