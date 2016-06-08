var React = require('react');
var Reflux = require('reflux');

var SampleStore = require('stores/SampleStore');
var SampleAction = require('actions/SampleAction');


module.exports = React.createClass({
    mixins: [
        Reflux.connect(SampleStore, 'sample')
    ],
    componentDidMount: function () {
        SampleAction.init();
    },
    render: function () {
        return (<div>{this.state.sample}</div>);
    }
});
