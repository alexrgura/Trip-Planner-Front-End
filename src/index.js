const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWJhcnppbGFpIiwiYSI6ImNqcjluaDdncDBpeWY0M21tcDhkYXZlaXcifQ.7hPmGmZ9tK29wEHw2-zCTA';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.6354, 41.8885],
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});
