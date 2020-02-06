// const helper = new OpenWeatherMapHelper(
//   {
//     APPID: 'YOUR_OPENWEATHERMAP_API_KEY_GOES_HERE',
//     units: "imperial"
//   }
// );
// helper.getCurrentWeatherByCityName("Accra", (err, currentWeather) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(currentWeather);
//   }
// });
// helper.getCurrentWeatherByZipCode("90003", (err, currentWeather) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(currentWeather);
//   }
// });
// helper.getThreeHourForecastByCityName("Pretoria", (err, threeHourForecast) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(threeHourForecast);
//   }
// });
// helper.getThreeHourForecastByZipCode("94040", (err, threeHourForecast) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(threeHourForecast);
//   }
// });
// fetch("https://api.tomtom.com/search/2/autocomplete/jim.json?key=AQhUhNJvXskM0WNAGN9RrVQoG0EyY4ag&language=en-GB&limit=10")
// fetch("http://api.openweathermap.org/data/2.5/weather?q=London&     47248f7e328a6aad1cf1ab2954fa7422")

version: let city = 'San Diego'
let urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=47248f7e328a6aad1cf1ab2954fa7422`
fetch(urlWeather)
  .then(r => r.json())
  .then(response => {
    console.log(response)
  })
  .catch(e => console.error(e))
  .then(r => r.json())
  .then(weather => {
    console.log(weather)
  })