var express = require('express');
var router = express.Router();

require('../public/data/BD.js');



router.get('nouvelle_question', function(req, res, next) {
    var numero = Math.trunc(Math.random() * questions.length);
    console.log(questions[numero]);
    res.json(questions[numero]);
});


module.exports = router;