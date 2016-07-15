var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
          <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink></li>
          <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink></li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = Nav;
