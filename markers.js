// Define red and green icons with the correct path
var redIcon = L.icon({
    iconUrl: 'path/to/redIcon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
});

var greenIcon = L.icon({
    iconUrl: 'path/to/greenIcon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28]
});

// Function to add a marker with a link and tooltip
function addDualColorMarker(lat, lng, popupContent, tooltipContent) {
    var redMarker = L.marker([lat, lng], {icon: redIcon}).addTo(map);
    var greenMarker = L.marker([lat + 0.0001, lng], {icon: greenIcon}).addTo(map); // Slight offset to show dual color

    redMarker.bindPopup(popupContent);
    redMarker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
    greenMarker.bindPopup(popupContent);
    greenMarker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
}

// Add markers for the given addresses with links and tooltips
addDualColorMarker(52.6680, -8.6305, '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', 'First Location');
addDualColorMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Second Location');
addDualColorMarker(51.939103, 0.811446, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'Greenacres, Packards Lane, Wormingford');
addDualColorMarker(54.9382, -3.0008, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'Andidrain Ltd, Caron House, Rockcliffe Estate');
addDualColorMarker(53.990003, -1.537033, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', '80 Station Parade, Harrogate');
addDualColorMarker(51.9014, -8.3726, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Island Corporate Park, Wallingstown, Little Island');
