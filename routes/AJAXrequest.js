var express = require('express');
var router = express.Router();

require('../lib/db');

var mongoose = require( 'mongoose' );
var Question = mongoose.model( 'Question' );

router.post('/demande_nb_question',function(req,res,next){
    var theme = req.body.theme;
    var nb_question;
    Question.count({domaine : theme}, function(err , count){
      res.send(String(count));
    });
});

router.get('/nouvelle_question_test', function(req, res, next) {
    Question.findOneRandom(function(err, element){
        res.json(element);
    });
    
});

router.get('/nouvelle_question_exam_HTML',function(req, res, next) {
    var filtre = { domaine: { $eq: ['html'] } };
    Question.findRandom(filtre, {}, {count: 1},function(err, element){
        res.json(element[0]);
    });
});

router.get('/nouvelle_question_exam_CSS',function(req, res, next) {
    var filtre = { domaine: { $eq: ['css'] } };
    Question.findRandom(filtre, {}, {count: 1},function(err, element){
        res.json(element[0]);
    });
});

router.get('/nouvelle_question_exam_JS',function(req, res, next) {
    var filtre = { domaine: { $eq: ['javascript'] } };
    Question.findRandom(filtre, {}, {count: 1},function(err, element){
        res.json(element[0]);
    });
});



module.exports = router;