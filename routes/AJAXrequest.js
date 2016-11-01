var express = require('express');
var router = express.Router();

require('../lib/db');

var mongoose = require( 'mongoose' );
var Question = mongoose.model( 'Question' );



router.post('/submit_question',function(req,res,next){
    if (req.body.bonne_reponse <= 0 || req.body.bonne_reponse > req.body.reponses.length || req.body.reponses.length < 2 || req.body.reponses==""){
        res.status(400).send("Saisie de la nouvelle question invalide");
    }else{
        new Question({
            domaine : req.body.domaine,
            question : req.body.question,
            reponses : req.body.reponses,
            bonne_reponse : req.body.bonne_reponse
        }).save( function( err, question, count ){
            res.send( 'L\'ajout de la question a fonctionné' ); // a modifier
            });
    }
});


router.get('/nouvelle_question_test', function(req, res, next) {
    var question;
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