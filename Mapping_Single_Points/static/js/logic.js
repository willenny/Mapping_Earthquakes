// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// use coordinates of [40.7, -94.5] with a zoom of 4 for a good view of US
// this is using coordinates for LA

let map = L.map('mapid').setView([34.0522, -118.2437], 14);

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
let circleMarker = L.circleMarker([34.0522, -118.2437],  {
        radius: 300,
        color: 'black',
        fillColor: '#ffffa1'
     }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

