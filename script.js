const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d3efa25eemsha920ddcdfe45aa6p1b9ac6jsnfc0d7a31ea6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
