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
    fetch('https://api.openweathermap.org/data/2.5/weather?q=london&APPID=938bf3384ff97e56df0147b5e47a2b02', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    location.innerText = response.name;
/*     temperature.innerText = response.current.temp_c + '°C';
    description.innerText = response.current.condition.text;
    feelsLike.innerText = 'Feels like ' + response.current.feelslike_c + '°C';
    wind.innerText = response.current.wind_kph + 'km/h';
    pressure.innerText = response.current.pressure_mb + 'mb';
    humidity.innerText = response.current.humidity + '%';
    cloud.innerText = response.current.cloud + '%';
    uv.innerText = response.current.uv;
    icon.src = 'https:' + response.current.condition.icon;
    amount.innerText = response.current.precip_mm + 'mm';
    precipitation.innerText = response.forecast.forecastday[0].day.chance_of_rain; */
    });
}

weather();