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
function updateWeather(response){
    let temperatureElement = document.querySelector(".current-temperature-value");
    //# for class . for id//
    let temperature = response.data.temperature.current;
     let cityElement = document.querySelector(".current-city");
     let descriptionElement = document.querySelector(".description");
     let humidityElement = document.querySelector(".humidity");
     let windSpeedElement = document.querySelector(".wind-speed");
     let timeElement = document.querySelector(".time");
     let date = new Date(response.data.time * 1000);
     let iconElement = document.querySelector(".icon");
     console.log(response.data);

     iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon" />`;
     cityElement.innerHTML = response.data.city;
     timeElement.innerHTML = formatDate(date);
     descriptionElement.innerHTML = response.data.condition.description;
     humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
     windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
     temperatureElement.innerHTML = Math.round(temperature);
console.log(responsedata.time);
}


function search(city){
  let apiKey = "c5fo45504b77t2a0d3178aceb4685e4f";//personal api key from shecodes//
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(updateWeather);
  //axios is data library//
}

function searchCity(event){
    event.preventDefault();
    //to prevent default loading//
    let searchInputElement = document.querySelector(".search-input");
   
    search(searchInputElement.value);
}
//call function//
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
//this is city will load intially//
search("Pretoria")