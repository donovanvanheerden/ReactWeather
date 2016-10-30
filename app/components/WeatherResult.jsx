var React = require('react');

var WeatherResult = ({temp, location}) => {
  return (
    <h3>It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherResult;
