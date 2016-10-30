var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherResult = require('WeatherResult');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function (data) {
      that.setState({
        location: location,
        temp: data,
        isLoading: false
      });
    }, function (err) {
      that.setState({ isLoading: false });
      alert(err);
    });
  },
  render: function () {
    var {location, temp, isLoading} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherResult temp={temp} location={location} />;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
