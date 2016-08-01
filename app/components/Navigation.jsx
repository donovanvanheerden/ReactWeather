var React = require('react');
var {Link, IndexLink} = require('react-router');

var navStyle = {
  color: 'rgba(255,255,255,0.7)'
}

var activeStyle = {
  color: 'white'
}

var Nav = (props) => {
  return (
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active" style={navStyle} activeStyle={activeStyle}>Home</IndexLink></li>
          <li><IndexLink to="/about" activeClassName="active" style={navStyle} activeStyle={activeStyle}>About</IndexLink></li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = Nav;
