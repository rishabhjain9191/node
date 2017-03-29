var React = require('react');
var ReactDom = require('react-dom');
var Component = require('./Component.jsx');

ReactDom.render(
  React.createElement(Component, {message: 'client'}), document.body
);
