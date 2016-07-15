var React = require('react');

const _URL = 'http://openweathermap.org/img/w/';

var WeatherResult = ({message}) => {

  var _img = `${_URL}${message.icon}.png`

  return (
      <div>
        <h4>It's {message.temp} °C in {message.city}, {message.country}</h4>
        <br />
        <img alt={message.main} src={_img} />
        <h4> {message.description}</h4>
      </div>
  );
}

module.exports = WeatherResult;
