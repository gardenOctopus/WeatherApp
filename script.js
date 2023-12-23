function weather() {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    fetch('https://api.weatherapi.com/v1/current.json?key=875b6fdf98744187b74112956232411&q=london', {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    location.innerText = response.location.name;
    temperature.innerText = response.current.temp_c;
    description.innerText = response.condition.text;
    });
}

weather();