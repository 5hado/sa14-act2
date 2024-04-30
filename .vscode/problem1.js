document.getElementById('weatherform').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    fetchWeather(city);
});

function fetchWeather(city) {
    const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=668cbe02c6af485db4e04909240604&q=${city}&days=5`;

    Promise.all([
        fetch(forecastUrl)
    ])
    .then(responses => {
        return Promise.all(responses.map(response => response.json()));
    })
    .then(data => {
        displayForecast(data[0]);
    })
}


function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');

    data.forecast.forecastday.forEach(day => {
        forecastDiv.innerHTML += `
            <div>
                <h3>${day.date}</h3>
                <p>Condition: ${day.day.condition.text}</p>
                <img src="${day.day.condition.icon}">
                <p>High: ${day.day.maxtemp_c}°C</p>
                <p>Low: ${day.day.mintemp_c}°C</p>
                <p>Humidity: ${day.day.avghumidity}%</p>
            </div>
        `;
    });
}
