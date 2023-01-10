const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Karachi");

const options1 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
  options1
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctLondon.innerHTML = response.cloud_pct;
    feels_likeLondon.innerHTML = response.feels_like;
    humidityLondon.innerHTML = response.humidity;
    max_tempLondon.innerHTML = response.max_temp;
    min_tempLondon.innerHTML = response.min_temp;
    sunriseLondon.innerHTML = response.sunrise;
    sunsetLondon.innerHTML = response.sunset;
    tempLondon.innerHTML = response.temp;
    wind_degreesLondon.innerHTML = response.wind_degrees;
    wind_speedLondon.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok",
  options2
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    cloud_pctBangkok.innerHTML = response.cloud_pct;
    feels_likeBangkok.innerHTML = response.feels_like;
    humidityBangkok.innerHTML = response.humidity;
    max_tempBangkok.innerHTML = response.max_temp;
    min_tempBangkok.innerHTML = response.min_temp;
    sunriseBangkok.innerHTML = response.sunrise;
    sunsetBangkok.innerHTML = response.sunset;
    tempBangkok.innerHTML = response.temp;
    wind_degreesBangkok.innerHTML = response.wind_degrees;
    wind_speedBangkok.innerHTML = response.wind_speed;
  })

  .catch((err) => console.error(err));

const options3 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai",
  options3
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctDubai.innerHTML = response.cloud_pct;
    feels_likeDubai.innerHTML = response.feels_like;
    humidityDubai.innerHTML = response.humidity;
    max_tempDubai.innerHTML = response.max_temp;
    min_tempDubai.innerHTML = response.min_temp;
    sunriseDubai.innerHTML = response.sunrise;
    sunsetDubai.innerHTML = response.sunset;
    tempDubai.innerHTML = response.temp;
    wind_degreesDubai.innerHTML = response.wind_degrees;
    wind_speedDubai.innerHTML = response.wind_speed;
  })

  .catch((err) => console.error(err));

const options4 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo",
  options4
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    cloud_pctTokyo.innerHTML = response.cloud_pct;
    feels_likeTokyo.innerHTML = response.feels_like;
    humidityTokyo.innerHTML = response.humidity;
    max_tempTokyo.innerHTML = response.max_temp;
    min_tempTokyo.innerHTML = response.min_temp;
    sunriseTokyo.innerHTML = response.sunrise;
    sunsetTokyo.innerHTML = response.sunset;
    tempTokyo.innerHTML = response.temp;
    wind_degreesTokyo.innerHTML = response.wind_degrees;
    wind_speedTokyo.innerHTML = response.wind_speed;
  })

  .catch((err) => console.error(err));
