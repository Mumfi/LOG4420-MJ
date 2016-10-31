var express = require('express');
var router = express.Router();


var mongoose = require( 'mongoose' );
require('../lib/db');
var Question = mongoose.model( 'Question' );



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Accueil des quiz', Accueil:'Accueil', Bord:'', Instructions:'' });
});

router.get('/tableau_de_bord', function(req, res, next) {
  res.render('tableau_de_bord', { title: 'Tableau de bord', Accueil:'', Bord:'Bord', Instructions:'' });
});

router.get('/instructions', function(req, res, next) {
  res.render('instructions', { title: 'Instructions des quiz', Accueil:'', Bord:'', Instructions:'Instructions' });
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
   res.render('ajouter_question', {title : 'Ajouter une question'}) ;
});

router.post('/submit_question',function(req,res,next){
    new Question({
        domaine : req.body.domaine,
        question : req.body.question,
        reponses : req.body.reponses,
        bonne_reponse : req.body.bonne_reponse
    }).save( function( err, todo, count ){
        res.redirect( '/' );
        });
});

module.exports = router;
