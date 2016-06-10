var React = require('react');

var Container = React.createClass({
    componentDidMount: function() {
    },
    render: function() {
        return <div>{this.props.children}</div>
    }
});


module.exports = Container;