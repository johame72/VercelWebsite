const apiKey = '5ad4601afb2e22f1d595b000914778bb';
const lat = 30.3422;
const lon = -97.7970;
const endPoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&units=imperial&appid=${apiKey}`;

fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        document.getElementById('temperature').innerText = `Temperature: ${data.current.temp}°F`;
        document.getElementById('description').innerText = `Condition: ${data.current.weather[0].description}`;
    })
    .catch(error => {
        console.error("Error fetching the weather data:", error);
    });

// ... [previous code] ...

// Initialize the map
const map = L.map('weatherMap').setView([30.3422, -97.7970], 5); // Austin, TX coordinates and zoom level

// Add a base map layer (for example, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add the temperature layer
const temperatureLayer = `https://maps.openweathermap.org/maps/2.0/weather/1h/TA2/{z}/{x}/{y}?appid=5ad4601afb2e22f1d595b000914778bb`;
L.tileLayer(temperatureLayer, {
    opacity: 0.5,
    zIndex: 1
}).addTo(map);

// Add the precipitation layer
const precipitationLayer = `https://maps.openweathermap.org/maps/2.0/weather/1h/PR0/{z}/{x}/{y}?appid=5ad4601afb2e22f1d595b000914778bb`;
L.tileLayer(precipitationLayer, {
    opacity: 0.5,
    zIndex: 2
}).addTo(map);

