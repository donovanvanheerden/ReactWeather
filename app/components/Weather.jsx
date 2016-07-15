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
        temp: data.main.temp,
        main: data.weather[0].main,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        isLoading: false
      });

    }, function (err) {
      that.setState({
        isLoading: false
      });
      alert(err);
    });
  },
  render: function () {
    var message = this.state;

    function renderMessage () {
      if (message.isLoading) {
        return (
          <div className="container">
            <br/>
              <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-blue">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>

                <div className="spinner-layer spinner-red">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>

                <div className="spinner-layer spinner-yellow">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>

                <div className="spinner-layer spinner-green">
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
              </div>
          </div>);
      } else if (message.temp && message.location) {
        return <WeatherResult message={message} />;
      }
    }

    return (
      <div className="container">
        <div className="row center">
          <br/>
          <h3>Get Weather</h3>
          <br/><br/>
          <WeatherForm onSearch={this.handleSearch}/>
          <br/>
          {renderMessage()}
        </div>
      </div>
    );
  }
});

module.exports = Weather;
