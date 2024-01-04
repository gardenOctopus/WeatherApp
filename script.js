function weather() {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const feelsLike = document.getElementById('feels-like');
    const wind = document.getElementById('wind');
    const pressure = document.getElementById('pressure');
    const humidity = document.getElementById('humidity');
    const cloud = document.getElementById('cloud');
    const uv = document.getElementById('uv');
    const icon = document.getElementById('icon');
    const amount = document.getElementById('amount');
    const precipitation = document.getElementById('precipitation');
    fetch('https://api.weatherapi.com/v1/forecast.json?key=875b6fdf98744187b74112956232411&q=London&days=1&aqi=no&alerts=no', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    location.innerText = response.location.name;
    temperature.innerText = response.current.temp_c + '°C';
    description.innerText = response.current.condition.text;
    feelsLike.innerText = 'Feels like ' + response.current.feelslike_c + '°C';
    wind.innerText = response.current.wind_kph + 'km/h';
    pressure.innerText = response.current.pressure_mb + 'mb';
    humidity.innerText = response.current.humidity + '%';
    cloud.innerText = response.current.cloud + '%';
    uv.innerText = response.current.uv;
    icon.src = 'https:' + response.current.condition.icon;
    amount.innerText = response.current.precip_mm + 'mm';
    precipitation.innerText = response.forecast.forecastday[0].day.daily_chance_of_rain + '%';
    });
}

weather();

function sun() {
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    fetch('https://api.weatherapi.com/v1/astronomy.json?key=875b6fdf98744187b74112956232411&q=London&days=1&aqi=no&alerts=no', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        sunrise.innerText = response.astronomy.astro.sunrise;
        sunset.innerText = response.astronomy.astro.sunset;
    });
}

sun();