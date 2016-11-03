var express = require('express');
var router = express.Router();

require('../lib/db');

var mongoose = require( 'mongoose' );
var Question = mongoose.model( 'Question' );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accueil des quiz', Accueil:'Accueil', Bord:'', Instructions:'', Question:'' });
});

router.get('/tableau_de_bord', function(req, res, next) {
  res.render('tableau_de_bord', { title: 'Tableau de bord', Accueil:'', Bord:'Bord', Instructions:'', Question:'' });
});

router.get('/instructions', function(req, res, next) {
  res.render('instructions', { title: 'Instructions des quiz', Accueil:'', Bord:'', Instructions:'Instructions', Question:'' });
});

router.get('/examen', function(req, res, next) {
  res.render('examen', { title: 'Examen' });
});

router.get('/resultats', function(req, res, next) {
  res.render('resultats', { title: 'Résultats de l\'examen' });
});

router.get('/test_rapide', function(req, res, next) {
  res.render('test_rapide', { title: 'Test Rapide' });
});

router.get('/ajouter_question', function(req,res,next){
   res.render('ajouter_question', { title: 'Ajouter des questions', Accueil:'', Bord:'', Instructions:'', Question:'Question' }) ;
});

router.post('/questions',function(req,res,next){
    if (req.body.bonne_reponse <= 0 || req.body.bonne_reponse > req.body.reponses.length || req.body.reponses.length < 2 || req.body.question==""){
        res.status(400).send("Saisie de la nouvelle question invalide");
    }else{
        var question = new Question({
            domaine : req.body.domaine,
            question : req.body.question,
            reponses : req.body.reponses,
            bonne_reponse : req.body.bonne_reponse
        });
        Question.count({}, function(err , count){
            question.id = count;
            question.save( function( err, question, count ){
                 res.send(question); 
            });
        });
        
        
    }
});

/*
router.get('/questions',function(req,res,next){
    
});

router.get('/questions/:id',function(req,res,next){
    var id_question = req.params.id;
    
});

router.delete('/questions/:id',function(req,res,next){
    var id_question = req.params.id;
});

*/

router.delete('/questions',function(req,res,next){
    Question.remove({},function(err) {
            if (err) {
                console.log(err);
            } else {
                res.('success');
            }
    });
});





module.exports = router;
