function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

response.data.condition.description
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = response.data.condition.description;

let humidityElement = document.querySelector("#humidity");
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

let windSpeedElement = document.querySelector("#wind-speed");
windSpeedElement.innerHTML = `${response.data.wind.speed} km/h`

let timeElement = document.querySelector("#time");
let date = new Date(response.data.time * 1000);
timeElement.innerHTML = formatDate(date);



  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;

}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
  if (minutes <10) {
    minutes = `0${minutes}`;
  }
}

function searchCity(city) {
let apiKey = "35te54ac48ff3dd030f2e92oaf3b5d78";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
  
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Brisbane");