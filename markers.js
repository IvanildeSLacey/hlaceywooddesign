// Function to add a marker with a link and tooltip
function addMarker(lat, lng, popupContent, tooltipContent) {
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
}

// Add markers for the given addresses with links and tooltips
addMarker(52.6680, -8.6305, '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', 'First Location');
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Second Location');
addMarker(51.939103, 0.811446, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'Greenacres, Packards Lane, Wormingford');
addMarker(54.9382, -3.0008, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'Andidrain Ltd, Caron House, Rockcliffe Estate');
addMarker(53.990003, -1.537033, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', '80 Station Parade, Harrogate');
addMarker(51.9014, -8.3726, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Island Corporate Park, Wallingstown, Little Island');
