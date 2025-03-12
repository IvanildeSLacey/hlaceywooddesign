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
//addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Roadvacs IRL Ltd', redIcon);
// Add markers for the given addresses with links and tooltips
addMarker(52.6730, -8.6189, '<a href="https://example.com/E41PF60" target="_blank">E41PF60</a>', 'Roadvacs IRL Ltd', blueIcon);
addMarker(51.938095132372545, 0.8156100675818344, '<a href="https://example.com/Greenacres" target="_blank">Greenacres</a>', 'AA Turner Tankers', greenIcon);
addMarker(54.937771352904385, -2.992587402552944, '<a href="https://example.com/Andidrain" target="_blank">Andidrain Ltd</a>', 'AD Andidrain Ltd', greenIcon);
addMarker(54.11692439470301, -1.5766532418992028, '<a href="https://example.com/StationParade" target="_blank">80 Station Parade</a>', 'Adler & Allan', greenIcon);
addMarker(51.89413682803283, -8.367585175804356, '<a href="https://example.com/IslandCorporatePark" target="_blank">Island Corporate Park</a>', 'Ambipar Group', greenIcon);
addMarker(50.971710679695455, -0.08897536233268646, '<a href="https://example.com/basementpumps" target="_blank">basement pumps</a>', 'Basement Pumps', greenIcon);
addMarker(55.60086918326677, -4.537056273673114, '<a href="https://example.com/BillyBowie" target="_blank">Billy Bowie Special Projects Ltd</a>', 'Billy Bowie', greenIcon);
addMarker(54.46089507118379, -1.1785178467657709, '<a href="https://example.com/RoseberryCourt" target="_blank">Roseberry Court</a>', 'Bull Tankers', greenIcon);
addMarker(50.85156510011319, 0.5218811088235353, '<a href="https://example.com/BexhillRoad" target="_blank">Bexhill Road</a>', 'Cappagh Browne', greenIcon);
addMarker(52.23504758241398, 0.7671950560719424, '<a href="https://example.com/LowerGorse" target="_blank">Lower Gorse</a>', 'Cargate Engineering', greenIcon);
addMarker(52.83780784426494, -8.974724989197378, '<a href="https://example.com/TracklandsBusinessPark" target="_blank">Tracklands Business Park</a>', 'CES Environmental', greenIcon);
addMarker(52.8363243093971, -8.968344460361125, '<a href="https://example.com/QuinRoadBusinessPark" target="_blank">Quin Road Business Park</a>', 'Clare Drains', greenIcon);
addMarker(55.84778878147871, -4.214581015984119, '<a href="https://example.com/GlasgowG403PX" target="_blank">Glasgow G40 3PX</a>', 'Clearwater', greenIcon);
addMarker(53.774638327623016, -0.34055934697286144, '<a href="https://example.com/HU70XW" target="_blank">HU7 0XW</a>', 'Clearway', greenIcon);
addMarker(51.76585349051085, -0.07648918926503993, '<a href="https://example.com/EdwardsGreenFarm" target="_blank">Edwards Green Farm</a>', 'Convert Water', greenIcon);
addMarker(53.008594060145604, -1.7126753180228336, '<a href="https://example.com/Location" target="_blank">Location</a>', 'CPJ Environmental', greenIcon);
addMarker(54.6352549654862, -8.113718346754446, '<a href="https://example.com/Ardlenagh" target="_blank">Ardlenagh</a>', 'Donegal Waste', greenIcon);
addMarker(51.67461298494568, -1.3052765767117345, '<a href="https://example.com/NuffieldWay" target="_blank">Nuffield Way</a>', 'Drain Technology', greenIcon);
addMarker(51.51603223694044, -3.5575853469533714, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Drainforce', greenIcon);
addMarker(55.02881921073546, -7.760440472110964, '<a href="https://example.com/LeiterKilmacrennan" target="_blank">Leiter Kilmacrennan</a>', 'DS Environmental', greenIcon);
addMarker(53.7183, -1.4961, '<a href="https://example.com/WF33HA" target="_blank">WF3 3HA</a>', 'Duffy', greenIcon);
addMarker(50.95083336201689, -2.6819404028067697, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Elliot Environmental', greenIcon);
addMarker(55.93033731330674, -3.417308105548114, '<a href="https://example.com/PA33BD" target="_blank">PA3 3BD</a>', 'Enva', greenIcon);
addMarker(56.03523503354138, -3.7646649294732075, '<a href="https://example.com/G745HA" target="_blank">G74 5HA</a>', 'Enviro-Clean', greenIcon);
addMarker(50.89546010958609, -1.4299090451375, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Eurotank', greenIcon);
addMarker(51.30388380875228, 0.4622665107061013, '<a href="https://example.com/ME207JZ" target="_blank">ME20 7JZ</a>', 'GC Pumps', greenIcon);
addMarker(53.71265426946947, -7.8288535179777705, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Glancy Environmental', greenIcon);
addMarker(50.386923947242174, -3.9611825970233485, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Glanville Environmental', greenIcon);
addMarker(54.0651, -1.0924, '<a href="https://example.com/YO611EY" target="_blank">YO61 1EY</a>', 'Harpers Environmental', greenIcon);
addMarker(53.61507766085801, -0.6555795623877786, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Intech Environmental', greenIcon);
addMarker(53.43680439548052, -2.4257439186088483, '<a href="https://example.com/M445EG" target="_blank">M44 5EG</a>', 'IWJS', greenIcon);
addMarker(53.48755929340492, -2.3527243342952446, '<a href="https://example.com/M309PJ" target="_blank">M30 9PJ</a>', 'Lanes Group', greenIcon);
addMarker(53.525221796043745, -2.505899660317118, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Mantank', greenIcon);
addMarker(54.01951629557752, -7.322615931448899, '<a href="https://example.com/Location" target="_blank">Location</a>', 'McBreen', greenIcon);
addMarker(55.858238682440394, -4.316711151501831, '<a href="https://example.com/G513HZ" target="_blank">G51 3HZ</a>', 'Merkland', greenIcon);
addMarker(52.555394178511634, -1.3735993656640682, '<a href="https://example.com/Location" target="_blank">Location</a>', 'PRB Drainage', greenIcon);
addMarker(50.80838111575855, -1.917235630618402, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Pro Drainage', greenIcon);
addMarker(51.645376424165974, 0.6852619619882994, '<a href="https://example.com/Location" target="_blank">Location</a>', 'ROE Environmental', greenIcon);
addMarker(53.72446366917978, -2.6709095321705836, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Sapphire Utility Solutions', greenIcon);
addMarker(52.33939528431693, -2.2724574654373644, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Slicker', greenIcon);
addMarker(53.24185038124966, -9.508786643767106, '<a href="https://example.com/Location" target="_blank">Location</a>', 'SOS Liquid Waste', greenIcon);
addMarker(50.9730791469618, -0.19619458029157244, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Sweeptech', greenIcon);
addMarker(51.34155056080233, 0.5580595739819524, '<a href="https://example.com/Location" target="_blank">Location</a>', 'SW Drainage', greenIcon);
addMarker(53.493546435012924, -6.193358963213006, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Tank & Drain Services', greenIcon);
addMarker(52.013488974272725, -0.345711572701091, '<a href="https://example.com/Location" target="_blank">Location</a>', 'TapThat Plumbers', greenIcon);
addMarker(57.11264332655676, -2.0771283590749023, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Taylors Industrial Services', greenIcon);
addMarker(54.58359309329067, -1.1171870023019557, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Telcoss', greenIcon);
addMarker(53.30195412362036, -2.3707079273847267, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Totus Environmental', greenIcon);
addMarker(53.201969106012974, -3.004520820773555, '<a href="https://example.com/Location" target="_blank">Location</a>', 'Trade Effluent Services', greenIcon);
addMarker(53.351905346126195, -2.5327937341551094, '<a href="https://example.com/Location" target="_blank">Location</a>', 'WB Drainage', greenIcon);
addMarker(52.00279982846905, -2.0562475243113942, '<a href="https://example.com/Location" target="_blank">Location</a>', 'William Gilder', greenIcon);

// Set the map view to the bounds
map.fitBounds(bounds);