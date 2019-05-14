const request = require('request');

const DARK_SKY_KEY = '8372be081b052a6889e4460b12ee0e08';
const LOCATIONIQ_KEY = '2f89795fc196fc';
const OPEN_UV_KEY = 'aebf1c71b5cf32233f9339d21cbeae27';

const DARK_SKY_URL = `https://api.darksky.net/forecast/${DARK_SKY_KEY}/`;
const LOCATIONIQ_URL = `https://us1.locationiq.com/v1/search.php?key=${LOCATIONIQ_KEY}&format=json`;
const OPEN_UV_URL = `https://api.openuv.io/api/v1/uv`;

const MY_HOME = {
  street: 'Av. 25 de Julio #945, Colima, Col.',
  CP: 28040
};

request(
  `${LOCATIONIQ_URL}&postalcode=${MY_HOME.CP}&countrycodes=mx&q=${MY_HOME.street}`, 
  function (errorLocation, responseLocation, bodyLocation) {
    if(errorLocation) {
      console.error(errorLocation);
      return;
    }

    let addresses = JSON.parse(bodyLocation);
    let myHomeInfo;
    try {
      myHomeInfo = getColimaAddress(addresses);
      console.log(myHomeInfo);
    } catch(error) {
      console.error(error.message);
      return;
    }

    request(
      `${DARK_SKY_URL}${myHomeInfo.lat},${myHomeInfo.lon}`,
      function(errorSky, responseSky, bodySky) {
        if(errorSky) {
          console.error(errorSky);
          return;
        }
        let weatherInfo = JSON.parse(bodySky);
        let temperatureInFahrenheit = weatherInfo.currently.temperature;

        console.log(`Fahrenheit: ${temperatureInFahrenheit}`);
        console.log(`Celsius: ${fahrenheitToCelsius(temperatureInFahrenheit)}`);

        let openUVOptions = {
          url: `${OPEN_UV_URL}?lat=${myHomeInfo.lat}&lng=${myHomeInfo.lon}`,
          headers: {
            'x-access-token': OPEN_UV_KEY
          }
        };

        request(
          openUVOptions,
          function(errorUV, response, bodyUV) {
            if(errorUV) {
              console.error(errorUV);
              return;
            }

            let openUv = JSON.parse(bodyUV);
            console.log(`Radiación uv: ${openUv.result.uv}`);
          }
        );
      }
    );
  }
);

function getColimaAddress(addresses) {
  for (var i = addresses.length - 1; i >= 0; i--) {
    if(addresses[i].display_name.toLowerCase().indexOf('colima') !== -1) {
      return addresses[i];
    }
  }

  throw new Error('Not found');
}

function fahrenheitToCelsius(farenheit) {
  return round((farenheit - 32) * (5 / 9));
}

function round(num, decimals = 2) {
  return parseFloat( parseFloat(num).toFixed(decimals) ) || 0;
}