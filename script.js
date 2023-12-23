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
    fetch('https://api.weatherapi.com/v1/current.json?key=875b6fdf98744187b74112956232411&q=london', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    location.innerText = response.location.name;
    temperature.innerText = response.current.temp_c;
    description.innerText = response.current.condition.text;
    feelsLike.innerText = response.current.feelslike_c;
    wind.innerText = response.current.wind_kph;
    pressure.innerText = response.current.pressure_mb;
    humidity.innerText = response.current.humidity;
    cloud.innerText = response.current.cloud;
    uv.innerText = response.current.uv;
    });
}

weather();