var express = require('express');
var router = express.Router();

var mongoose = require( 'mongoose' );
require('../lib/db');
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


/*require('../public/data/BD.js');

var questionHTML=[];
var questionCSS=[];
var questionJS=[];

    for(i=0;i<questions.length;i++){
        if (questions[i].domaine=="HTML"){
            questionHTML.push(questions[i]);
        }
        if (questions[i].domaine=="CSS"){
            questionCSS.push(questions[i]);
        }
        if (questions[i].domaine=="JavaScript"){
            questionJS.push(questions[i]);
        }
    }


router.get('/nouvelle_question_test', function(req, res, next) {
    var numero = Math.trunc(Math.random() * questions.length);
    res.json(questions[numero]);
});


router.get('/nouvelle_question_exam_HTML',function(req, res, next) {
    var numero = Math.trunc(Math.random() * questionHTML.length);
    res.json(questionHTML[numero]);
});

router.get('/nouvelle_question_exam_CSS',function(req, res, next) {
    var numero = Math.trunc(Math.random() * questionCSS.length);
    res.json(questionCSS[numero]);
});

router.get('/nouvelle_question_exam_JS',function(req, res, next) {
    var numero = Math.trunc(Math.random() * questionJS.length);
    res.json(questionJS[numero]);
});
*/


module.exports = router;