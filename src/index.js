
function updateWeather(response){
    let temperatureElement = document.querySelector(".current-temperature-value");
    let temperature = response.data.temperature.current;
     let cityElement = document.querySelector("#current-city");

     
     cityElement.innerHTML = response.data.city;
     temperatureElement.innerHTML = Math.round(temperature);
}
function search(city){
  let apiKey = "c5fo45504b77t2a0d3178aceb4685e4f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchCity(event){
    event.preventDefault();
    let searchInputElement = document.querySelector(".search-input");
   
    search(searchInputElement.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

search("Pretoria")