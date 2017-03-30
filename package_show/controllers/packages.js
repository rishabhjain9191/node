var express = require('express');
var router = express.Router();
var request = require('request');

var http = require('http');
router.get('/:base_url', function(req, res) {
  var options = {
    host: '127.0.0.1',
    post: '3000',
    path: '/api/v3/tour_packages/' + req.params.base_url + '?id=' + req.query.id,
    headers: {
      accept: 'application/json'
    }
  };
  // call the backend api
  http.get(options, function(response) {
    var chunk = '';
    response.on('data', function(data){
      chunk += data;
    })
    response.on('end', function() {
      var apiResponse = JSON.parse(chunk);
      apiResponse.viewHelper = require('../helpers/viewHelper');
      res.render("packages_show", apiResponse);
    });
  })
});

router.get('/package_info/:base_url/:id', function(req, res) {
  console.log(req.url);
  request("http://localhost/api/v3/tour_packages/" + req.params.base_url + "?id=" + req.params.id).pipe(res);
})

module.exports = router;
