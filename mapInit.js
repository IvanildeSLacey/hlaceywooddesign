// Initialize the map and set its view to a default location
var map = L.map('map').setView([52.6680, -8.6305], 10);

// Add a tile layer to the map (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);
