var React = require('react');

module.exports = TodoList = React.createClass({
    render: function () {
        var createItem = function (itemText) {
            return <li>{itemText}</li>;
        };
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});