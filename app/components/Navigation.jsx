var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" style={navStyle} activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" style={navStyle} activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
        <Link to="/examples" activeClassName="active" style={navStyle} activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>
      </ul>
    </div>
  );
}

module.exports = Nav;
