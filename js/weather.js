function getSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
    fetch(weatherURL).then((response) => response.json()).then((data) => {
        const country = data.sys['country'];
        const temps = [data.main['temp'], data.main['temp_min'], data.main['temp_max']];
        const city = data.name;
        const weathers = [data.weather[0]['main'], data.weather[0]['description']];

        const pLocation = document.querySelector("#location");
        const pSky = document.querySelector("#sky");
        const pTemp = document.querySelector("#temp");

        pLocation.innerHTML = `${country} ${city}`;
        pSky.innerHTML = `${weathers[0]}: ${weathers[1]}`;
        pTemp.innerHTML = `| now: ${temps[0]} | min: ${temps[1]} | max: ${temps[2]} |`;
    });
}
function getFail() {

}

navigator.geolocation.getCurrentPosition(getSuccess, getFail);
