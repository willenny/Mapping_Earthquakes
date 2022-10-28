// Add console.log to check to see if our code is working.
console.log("working");

// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Light" : light,
  // does not matter if variable is in quotes or not
  Dark: dark
};

// Create the map object with a center and zoom level.
// An alternative to using the setView()method is to modify 
// each attribute in the map object using the curly braces notation
let map = L.map("mapid", {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [dark]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
// Having the tileLayer() method before accessing large datasets 
// ensures that the map gets loaded before the data is added to it
let torontoData = "https://raw.githubusercontent.com/willenny/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
L.geoJSON(data, {
    // using myStyle object instead
    // color: "#ffffa1",
    // weight: 2,
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3>");
    }
  })
// Creating a GeoJSON layer with the retrieved data.
.addTo(map);
});

// To make the code above easier to read, now we'll create an object 
// with the style parameters for the lines and assign it to a variable, myStyle
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

