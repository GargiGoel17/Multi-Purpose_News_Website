const apiKey = "ef134570b9caa853bed32c702d31b45a";

const form = document.getElementById('form');
const search = document.getElementById('search');
const weatherInfo = document.getElementById('weather-info');

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = search.value.trim();
    if (city) {
        getWeatherData(city);
    } else {
        weatherInfo.innerHTML = 'Please enter a city name.';
    }
});

async function getWeatherData(city) {
    try {
        const response = await fetch(url(city));
        if (!response.ok) {
            throw new Error('City not found.');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherInfo.innerHTML = error.message;
    }
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    const temperature = (main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
    const description = weather[0].description;
    const weatherHTML = `
        <h2>Weather in ${name}</h2>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Description:</strong> ${description}</p>
    `;
    weatherInfo.innerHTML = weatherHTML;
}