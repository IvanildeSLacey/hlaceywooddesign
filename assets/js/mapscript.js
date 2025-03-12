// Initialize the map
var map = L.map('map').setView([52.6680, -8.6305], 13);

// Add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Custom marker icons
var redIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var greenIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var blueIcon = L.icon({
    iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@1.0/img/marker-icon-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Function to add a marker with a custom icon, link, and tooltip
function addMarker(lat, lng, popupContent, tooltipContent, icon) {
    var marker = L.marker([lat, lng], { icon: icon }).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, { permanent: false, direction: 'top' });
    // Extend the bounds to include this marker
    bounds.extend(marker.getLatLng());
}

// Create a bounds object to store all the marker coordinates
var bounds = L.latLngBounds();

// Add markers with different colors
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Roadvacs IRL Ltd', redIcon);
addMarker(51.938095132372545, 0.8156100675818344, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'AA Turner Tankers', greenIcon);
addMarker(54.937771352904385, -2.992587402552944, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'AD Andidrain Ltd', blueIcon);
