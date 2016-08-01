var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Main = require('Main');
var Index = require('Index');
var About = require('About')


// Load Materialize
require('style!css!materialize-css/dist/css/materialize.min.css');

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main} >
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
      </Route>
    </Router>,
    document.getElementById('app')
);
