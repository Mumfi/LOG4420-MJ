var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render();
});

router.post('/', function(req, res, next) {
  res.json();
});

//var i = Math.floor(Math.random()*11);


module.exports = router;