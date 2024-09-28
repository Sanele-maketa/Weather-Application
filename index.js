function refreshWeather (response) {
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#description");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let humidityElement = document.querySelector("#humidity");

    console.log(response.data.condition.description);

    temperatureElement.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    humidityElement.innerHTML = response.data.temperature.humidity;
    descriptionElement.innerHTML = response.data.conditon.description;

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