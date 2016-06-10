var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Index = require('components/Index');
var Container = require('./Container');

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render((
        <Router history={hashHistory} onUpdate={function(){window.scrollTo(0, 0)}}>
            <Route path="/" component={Container}>
                <IndexRoute component={Index}/>
            </Route>
        </Router>
    ), document.getElementById('wrap'));
});
