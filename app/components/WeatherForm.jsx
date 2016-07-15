var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location" placeholder="Enter City Name"/>
          <button className="btn waves-effect waves-light" type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
