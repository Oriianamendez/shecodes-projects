let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

let today = new Date();
function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[today.getDay()];
  let hour = today.getHours();
  //let minute = today.getMinutes();
  let minutes = String(today.getMinutes()).padStart(2, "0");
  let currentDate = `${day} ${hour}:${minutes}`;
  return currentDate;
}
let currentDateToday = document.querySelector("#today");
currentDateToday.innerHTML = formatDate();
//

function changeCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#enter-a-city");
  let caracas = document.querySelector("#caracas");
  caracas.innerHTML = cityName.value;
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", changeCity);

//
function celsiusNumber(event) {
  event.preventDefault();
  let celsiusGrade = document.querySelector("#grade");
  celsiusGrade.innerHTML = "24";
}

let linkCelsius = document.querySelector("#celsius");
linkCelsius.addEventListener("click", celsiusNumber);

function fahrenheitNumber(event) {
  event.preventDefault();
  let fahrenheitGrade = document.querySelector("#grade");
  fahrenheitGrade.innerHTML = "75";
}

let linkFahrenheit = document.querySelector("#fahrenheit");
linkFahrenheit.addEventListener("click", fahrenheitNumber);
