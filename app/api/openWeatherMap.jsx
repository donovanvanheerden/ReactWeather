var axios = require('axios');

const _URL = "http://api.openweathermap.org/data/2.5/weather?appid=89fd9b4ed3bd4d646eda2c70cc0b62f8&units=metric";

// q=East%20London

module.exports = {
  getTemp: function (location) {
    // Web safe location string
    var encodedLocation = encodeURIComponent(location);

    var requestUrl = `${_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      function(res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data;
        }
      },
      function(res) {
        throw new Error(res.data.message);
      }
    );
  }
}
