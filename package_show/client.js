var React = require('react');
var ReactDom = require('react-dom');
var Component = require('./components/package.jsx');
var $ = require('jquery');
window.jQuery = $;
window.$ = $;

ReactDom.render(
  React.createElement(Component, window.packageInformation), document.getElementById('package-box')
);

$("#best-packages li").click(function(elem) {
  var $elem = $(this);
  $.ajax({
    url: "/packages/package_info/" + $elem.data('base_url') + '/' + $elem.data('id'),
    success: function(res) {
      console.log(res);
      document.dispatchEvent(new CustomEvent('package-updated', {detail: { destinationName: res.destinations[0].name, days: res.days, nights: res.nights ,price: res.price_total, imageUrl: res.image_url}}));
    }
  })
});
