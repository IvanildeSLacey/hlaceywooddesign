// Define red and green icons
var redIcon = L.icon({
    iconUrl: 'assets/images/redlocation.webp', // Path to your red icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
});

var greenIcon = L.icon({
    iconUrl: 'assets/images/greenlocation.webp', // Path to your green icon
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
});

// Function to add a marker with a link and tooltip
function addMarker(lat, lng, popupContent, tooltipContent, icon) {
    if (map) {
        var marker = L.marker([lat, lng], {icon: icon}).addTo(map);
        marker.bindPopup(popupContent);
        marker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
    } else {
        console.error('Map instance not found.');
    }
}

// List of addresses with red markers
var redAddresses = [
    {lat: 52.6680, lng: -8.6305, popup: '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', tooltip: 'First Location'},
    {lat: 54.9382, lng: -3.0008, popup: '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', tooltip: 'Andidrain Ltd, Caron House, Rockcliffe Estate'},
    // Add more red addresses here
];

// List of addresses with green markers
var greenAddresses = [
    {lat: 52.6730, lng: -8.6189, popup: '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', tooltip: 'Second Location'},
    {lat: 51.939103, lng: 0.811446, popup: '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', tooltip: 'Greenacres, Packards Lane, Wormingford'},
    {lat: 53.990003, lng: -1.537033, popup: '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', tooltip: '80 Station Parade, Harrogate'},
    {lat: 51.9014, lng: -8.3726, popup: '<a href="https://example.com/IslandCorporate" target="_blank">Island Corporate Park</a>', tooltip: 'Island Corporate Park, Cork'},
    // Add more green addresses here
];

// Add red markers
redAddresses.forEach(function(address) {
    addMarker(address.lat, address.lng, address.popup, address.tooltip, redIcon);
});

// Add green markers
greenAddresses.forEach(function(address) {
    addMarker(address.lat, address.lng, address.popup, address.tooltip, greenIcon);
});
