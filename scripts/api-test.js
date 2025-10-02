const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const imgDesc = document.querySelector("figcaption");

const lat = 49.75; 
const lon = 6.63;
const APIkey = "da1cf4da2ea3223e6d41daeea6cf2122";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIkey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json()
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error);
  }
};

apiFetch()

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;

  weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  weatherIcon.setAttribute("alt", `weather icon`);

  imgDesc.textContent = `${data.weather[0].description}`
}