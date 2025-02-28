// Function to add a marker with a link and tooltip
function addMarker(lat, lng, popupContent, tooltipContent) {
    var marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(popupContent);
    marker.bindTooltip(tooltipContent, {permanent: false, direction: 'top'});
}

// Add markers for the given addresses with links and tooltips
addMarker(52.6680, -8.6305, '<a href="https://example.com/E41T886" target="_blank">E41T886</a>', 'Test');
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Roadvacs IRL Ltd');
addMarker(51.939103, 0.811446, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'AA Turner Tankers');
addMarker(54.9382, -3.0008, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'AD Andidrain Ltd');
addMarker(53.990003, -1.537033, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', 'Adler & Allan');
addMarker(51.9014, -8.3726, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Ambipar Group');
addMarker(51.9014, -8.3726, '<a href="https://example.com/basementpumps" target="_blank">basement pumps</a>', 'Basement Pumps');
addMarker(55.5980, -4.5150, '<a href="https://example.com/BillyBowie" target="_blank">Billy Bowie Special Projects Ltd</a>', 'Billy Bowie');
addMarker(54.4690, -1.1890, '<a href="https://example.com/RoseberryCourt" target="_blank">Roseberry Court</a>', 'Bull Tankers');
addMarker(50.8570, 0.5400, '<a href="https://example.com/BexhillRoad" target="_blank">Bexhill Road</a>', 'Cappagh Browne');
addMarker(52.2250, 0.8000, '<a href="https://example.com/LowerGorse" target="_blank">Lower Gorse</a>', 'Cargate Engineering');
addMarker(52.8430, -8.9860, '<a href="https://example.com/TracklandsBusinessPark" target="_blank">Tracklands Business Park</a>', 'CES Environmental');
addMarker(52.8430, -8.9860, '<a href="https://example.com/QuinRoadBusinessPark" target="_blank">Quin Road Business Park</a>', 'Clare Drains');
addMarker(55.8459, -4.2156, '<a href="https://example.com/GlasgowG403PX" target="_blank">Glasgow G40 3PX</a>', 'Clearwater');
addMarker(53.7749, -0.3394, '<a href="https://example.com/HU70XW" target="_blank">HU7 0XW</a>', 'Clearway');
addMarker(51.7590, -0.1100, '<a href="https://example.com/EdwardsGreenFarm" target="_blank">Edwards Green Farm</a>', 'Convert Water');
addMarker(53.3331, -6.2489, '<a href="https://example.com/Location" target="_blank">Location</a>', 'CPJ Environmental');
addMarker(54.6410, -8.1090, '<a href="https://example.com/Ardlenagh" target="_blank">Ardlenagh</a>', 'Donegal Waste');
addMarker(51.6700, -1.2820, '<a href="https://example.com/NuffieldWay" target="_blank">Nuffield Way</a>', 'Drain Technology');
addMarker(53.3331, -6.2489, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Drainforce');
addMarker(55.0308, -7.7503, '<a href="https://example.com/LeiterKilmacrennan" target="_blank">Leiter Kilmacrennan</a>', 'DS Environmental');
addMarker(53.7183, -1.4961, '<a href="https://example.com/WF33HA" target="_blank">WF3 3HA</a>', 'Duffy');
addMarker(53.3331, -6.2489, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Elliot Environmental');
addMarker(55.8396, -4.4911, '<a href="https://example.com/PA33BD" target="_blank">PA3 3BD</a>', 'Enva');
