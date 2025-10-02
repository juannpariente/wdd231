const lat = -34.89; 
const lon = -56.06;
const APIkey = "da1cf4da2ea3223e6d41daeea6cf2122";

const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;

const temp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");

const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

async function apiFetchWeather() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
        const data = await response.json();
        displayResultsWeather(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

async function apiFetchForecast() {
  try {
    const response = await fetch(urlForecast);
    if (response.ok) {
        const data = await response.json();
        displayResultsForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetchWeather();
apiFetchForecast();

function displayResultsWeather(data) {
  weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  weatherIcon.setAttribute("alt", `weather icon`);

  temp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;

  weatherDesc.innerHTML = `${data.weather[0].description}`;
}

function displayResultsForecast(data) {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date2 = new Date(data.list[8].dt_txt);
  const date3 = new Date(data.list[16].dt_txt);

  const day02 = weekDays[date2.getDay()];
  const day03 = weekDays[date3.getDay()];

  day1.innerHTML = `<strong>Today</strong>: ${Math.round(data.list[0].main.temp)}&deg;C`;
  day2.innerHTML = `<strong>${day02}</strong>: ${Math.round(data.list[8].main.temp)}&deg;C`;
  day3.innerHTML = `<strong>${day03}</strong>: ${Math.round(data.list[16].main.temp)}&deg;C`;
}