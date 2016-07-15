var React = require('react');

var WeatherResult = ({message}) => {
  return (
      <h4>It's {message.temp} in {message.location}</h4>
  );
}

module.exports = WeatherResult;
