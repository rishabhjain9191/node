require('dotenv').config();
require('babel-register')({
  presets: ['react']
})
var express = require('express');
var app = express();
var logger = require('./utils/logger');

var expressConfiguration = require("./config/express_configuration");

logger.info("configuring express....");
expressConfiguration.init(app, express);
logger.info("Express configured");

//controllers
app.use(require('./controllers'));

// React specific items
var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Component = require('./Component.jsx');

app.get('/react', function(req, res) {
  var html = ReactDOMServer.renderToString(
     React.createElement(Component, {message: "From Server"})
  );
  res.send(html);
});

app.listen(process.env.PORT || 5000);
