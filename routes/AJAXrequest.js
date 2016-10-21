var express = require('express');
var router = express.Router();

var questions = require('../public/data/BD.js');


var numero = Math.random() * questions.length+1;



router.post('./test_rapide', function(req, res, next) {
  res.json(questions[numero]);
});



//var i = Math.floor(Math.random()*11);


module.exports = router;