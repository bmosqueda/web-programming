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

function requestPromise(url) {
  return new Promise((resolve, reject) => {
    request(url, function(error, response, body) {
      if(error) {
        reject(error);
        return;
      }

      resolve(body);
    });
  });
}

requestPromise(`${LOCATIONIQ_URL}&postalcode=${MY_HOME.CP}&countrycodes=mx&q=${MY_HOME.street}`)
  .then((bodyLocation) => {
    let addresses = JSON.parse(bodyLocation);
    let myHomeInfo;
    try {
      myHomeInfo = getColimaAddress(addresses);
      console.log(myHomeInfo);
    } catch(error) {
      console.error(error.message);
      return;
    }

    requestPromise(`${DARK_SKY_URL}${myHomeInfo.lat},${myHomeInfo.lon}`)
      .then((bodySky) => {
        let weatherInfo = JSON.parse(bodySky);
        let temperatureInFahrenheit = weatherInfo.currently.temperature;

        console.log(`Fahrenheit: ${temperatureInFahrenheit}`);
        console.log(`Celsius: ${fahrenheitToCelsius(temperatureInFahrenheit)}`);
      })
      .catch(errorSky => {
        console.log('Error con API de DarkSky');
        console.error(errorSky);
      });

    let openUVOptions = {
      url: `${OPEN_UV_URL}?lat=${myHomeInfo.lat}&lng=${myHomeInfo.lon}`,
      headers: {
        'x-access-token': OPEN_UV_KEY
      }
    };

    requestPromise(openUVOptions)
      .then((bodyUV) => {
        let openUv = JSON.parse(bodyUV);
        console.log(`Radiación uv: ${openUv.result.uv}`);
      })
      .catch(error => {
        console.log('Error con API de UV');
        console.error(errorUV);
      });
  })
  .catch(errorLocation => {
    console.log('Error con API de Location');
    console.error(errorLocation);
  })

function getColimaAddress(addresses) {
  for (var i = addresses.length - 1; i >= 0; i--) {
    if(addresses[i].display_name.toLowerCase().indexOf('colima') !== -1) {
      return addresses[i];
    }
  }

  throw new Error('Colima address not found');
}

function fahrenheitToCelsius(farenheit) {
  return round((farenheit - 32) * (5 / 9));
}

function round(num, decimals = 2) {
  return parseFloat( parseFloat(num).toFixed(decimals) ) || 0;
}