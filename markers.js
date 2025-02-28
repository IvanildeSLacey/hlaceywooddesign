// Function to add a marker with a link and tooltip
function addMarker(lat, lng, popupContent, tooltipContent) {
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
}

// Add markers for the given addresses with links and tooltips
addMarker(52.6680, -8.6305, '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', 'First Location');
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Second Location');