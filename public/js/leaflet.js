/* eslint-disable */

export const displayMap = (locations) => {
  // Create the map and attach it to the #map
  const map = L.map('map', { zoomControl: false, scrollWheelZoom: false });

  // Add a tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Create icon using image provided by Jonas
  const greenIcon = L.icon({
    iconUrl: '/img/pin.png', // the script runs from tour.pug
    iconSize: [32, 40], // size of the icon
    iconAnchor: [16, 45], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -50], // point from which popup should open in relative to the iconAnchor
  });

  // Add locations to the map

  const points = []; // for creating the bounds later in the code

  locations.forEach((loc) => {
    // Create points
    points.push([loc.coordinates[1], loc.coordinates[0]]);

    // Add markers
    L.marker([loc.coordinates[1], loc.coordinates[0]], { icon: greenIcon })
      .addTo(map)
      // Add popup
      .bindPopup(`<p>Day ${loc.day}: ${loc.description}</p>`, {
        autoClose: false, // prevents closing this popup when another opens
        closeOnClick: false, // prevents closing the popup when the map is clicked
        className: 'mapPopup',
      })
      .openPopup();
  });

  // Set map bounds to include current location
  const bounds = L.latLngBounds(points).pad(0.5);
  map.fitBounds(bounds);
};
