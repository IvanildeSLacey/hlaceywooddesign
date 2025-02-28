// Function to add a marker with a specified color
function addMarker(lat, lng, info, title, color) {
    let marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title,
        label: { color: color, text: title }, // Add color to label
    });

    // Attach the information window to the marker
    let infoWindow = new google.maps.InfoWindow({
        content: info
    });

    // Add an event listener for marker click
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}

// Add markers for the given addresses with links and tooltips
addMarker(52.6680, -8.6305, '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', 'First Location');
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Second Location');
addMarker(51.939103, 0.811446, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'Greenacres, Packards Lane, Wormingford');
addMarker(54.9382, -3.0008, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'Andidrain Ltd, Caron House, Rockcliffe Estate');
addMarker(53.990003, -1.537033, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', '80 Station Parade, Harrogate');
addMarker(51.9014, -8.3726, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Island Corporate Park, Wallingstown, Little Island');


// Add green marker
addMarker(51.9014, -8.3726, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Island Corporate Park, Wallingstown, Little Island', 'green');

// Add red marker (example address)
addMarker(51.8974, -8.4705, '<a href="https://example.com/exampleAddress" target="_blank">Example Address</a>', 'Example Address, Cork', 'red');