var viewHelpers = {
  renderReactComponent: function(component, options) {
    var component = require('../components/' + component + '.jsx');
    var React = require('react');
    var ReactDOMServer = require('react-dom/server');
    var html = ReactDOMServer.renderToString(
       React.createElement(component, options)
    );
    return html;
  }
}
module.exports = viewHelpers;
