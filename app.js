const request = require('request');

const DARK_SKY_KEY = '8372be081b052a6889e4460b12ee0e08';
const DARK_SKY_URL = 'https://api.darksky.net/forecast/';

const COORDINATES = {
  lattitude: 19.249250, 
  longitude: -103.697243
};

const options = {
  url: `${DARK_SKY_URL}${DARK_SKY_KEY}/${COORDINATES.lattitude},${COORDINATES.longitude}`
}

request(options, function (error, response, body) {
  if(error) {
    console.error(error);
    return;
  }

  let data = JSON.parse(body);
  let temperatureInFahrenheit = data.currently.temperature;

  console.log(`Fahrenheit: ${temperatureInFahrenheit}`);
  console.log(`Celsius: ${fahrenheitToCelsius(temperatureInFahrenheit)}`);
});

function fahrenheitToCelsius(farenheit) {
  return round((farenheit - 32) * (5 / 9));
}

function round(num, decimals = 2) {
  return parseFloat( parseFloat(num).toFixed(decimals) ) || 0;
}