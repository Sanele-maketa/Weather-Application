function refreshWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let description = response.data.condition.description;
    let temperature = response.data.temperature.current;
    let date = new Date(response.data.time * 1000);
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");

    console.log(response.data);
    console.log(response.data.condition.description);
    timeElement.innerHTML = formatDate(date);
    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    
}
function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[date.getDay()];
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return `${day} ${hours}:${minutes}`;

}
function searchCity(city) {
    let apiKey = "84dt0b4c0feab1453f3bf06802fofb30";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&intis=metric`;
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Miami");