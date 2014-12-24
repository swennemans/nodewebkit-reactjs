global.document = window.document;
global.navigator = window.navigator;

var React = require('react');
var TodoApp = require('./components/TodoApp.react')

/* Create React app*/
React.render(React.createElement(TodoApp, null), document.body);