const lat = 30.3422;
const lon = -97.7970;

// Update this to point to your backend endpoint
const backendEndPoint = `/weather?lat=${lat}&lon=${lon}`;

fetch(backendEndPoint)
    .then(response => response.json())
    .then(data => {
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp}°F`;
        document.getElementById('description').innerText = `Condition: ${data.current.weather[0].description}`;
    })
    .catch(error => {
        console.error("Error fetching the weather data:", error);
    });

// Initialize the map
const map = L.map('weatherMap').setView([30.3422, -97.7970], 10); // Zoomed into Austin

// Add a base map layer (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Update these to use your backend server as a proxy if needed
const temperatureLayer = L.tileLayer('https://maps.openweathermap.org/maps/2.0/weather/1h/TA2/{z}/{x}/{y}');
const precipitationLayer = L.tileLayer('https://maps.openweathermap.org/maps/2.0/weather/1h/PR0/{z}/{x}/{y}');

// Layer control
const baseLayers = {
    "Temperature": temperatureLayer,
    "Precipitation": precipitationLayer
};

L.control.layers(baseLayers).addTo(map);

// Default layer
temperatureLayer.addTo(map);
