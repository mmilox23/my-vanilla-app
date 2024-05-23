function updateWeather(response){
    let temperatureElement = document.querySelector(".current-temperature-value");
     let temperature = response.data.temperature.current;
     let cityElement = document.querySelector(".current-city");
     let descriptionElement = document.querySelector("#description");
     let humidityElement = document.querySelector("#humidity");
     let windSpeedElement = document.querySelector("#wind-speed");
     let timeElement = document.querySelector("#time");
     let date = new Date(response.data.time * 1000);
     let iconElement = document.querySelector("#icon");
     
     iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="temperature-icon"/>`;
     cityElement.innerHTML = response.data.city;
     descriptionElement.innerHTML = response.data.condition.description;
     humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
     windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
     timeElement.innerHTML = formatDate(date);
     temperatureElement.innerHTML = Math.round(temperature);

}
function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[date.getDay()];

       if (minutes < 10) {
      minutes = `0${minutes}`;
       }
     
    return `${day} ${hours}:${minutes}`;
  
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

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", searchCity);

search("Pretoria")


let forecast = document.querySelector("#forecast");

forecast.innerHTML = `
    <div class="weather-forecast-day">
         <div class="weather-forecast-date">Tue</div>
         div class="weather-forecast-icon">🌤</div>
         div class="weather-forecast-temperatures">
           <div class="weather-forecast-temperature">
             <strong>15°</strong>
           </div>
         <div class="weather-forecast-temperature">9°</div>
        </div>
    </div>
    `;