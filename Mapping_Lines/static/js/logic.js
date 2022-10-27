// Add console.log to check to see if our code is working.
console.log("working");

// Get data from cities.js
let cityData = cities;

// Create the map object with a center and zoom level.
// use coordinates of [40.7, -94.5] with a zoom of 4 for a good view of US
// this is using coordinates for LA
// 13.4.2 back to full US map

let map = L.map('mapid').setView([40.7, -94.5], 4);

// An alternative to using the setView() method is to 
// modify each attribute in the map object using the curly braces notation as follows
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// This method is useful when we need to add multiple tile layers, or a background image of our map(s)

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//  change the marker on our map to a point or dot
// let circle = L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'yellow'
//  }).addTo(map);

// 13.4.1 skill drill
// create a light-yellow circle with black lines indicating 
// a 300-meter radius of Central Los Angeles on a dark map.
// changed color to black, fillColor to yellow, increased radius to 300, and changed the tileLater link to include dark-v10

// create a circle using the circleMarker() function
// let circleMarker = L.circleMarker([34.0522, -118.2437],  {
//         radius: 300,
//         color: 'black',
//         fillColor: '#ffffa1'
//      }).addTo(map);

// 13.4.2
// replace the marker variable (which we used to map one location) 
// with the cities variable that references the five most populous 
// cities array in the following code block
// let cities = L.marker([34.0522, -118.2437]).addTo(map);

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000 // divide by 100000 to account for large radii
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});

// FOR ABOVE
// format the population with a thousands separator by using the toLocaleString() method 
// on the city.population in the bindPopup() method,

// change the marker for each city to a circle that has a radius equivalent to the city's population.
// In the logic.jsfile, we'll replace the marker() function with the circleMarker() function in the 
//forEach() function. Then we'll assign the "radius" key to the population by using city.population.

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

