var express = require('express');
var router = express.Router();

router.use('/packages', require('./packages'));

router.get('/', function(req, res) {
    res.render('index');
})

module.exports = router;
