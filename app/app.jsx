var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('components/Index');

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
        <Index />,
        document.getElementById('wrap')
    );
});