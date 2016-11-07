var express = require('express');
var router = express.Router();

require('../lib/db');

var mongoose = require( 'mongoose' );
var Question = mongoose.model( 'Question' );
var Examen = mongoose.model( 'Examen' );
var Rapide = mongoose.model( 'Rapide' );

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

router.post('/statistique/examen',function(req,res,next){
        var examen = new Examen({
            domaine : req.body.theme,
            bonne_reponse : req.body.nb_bonne_rep,
            totale_reponse : req.body.nb_reponse
        });
    Examen.count({}, function(err , count){
            examen._id = count;
            examen.save( function(err){
                if (err)
                return next(err);
            });
        });
});

router.get('/statistique/examen',function(req,res,next){
         Examen.find(function(err, examens) {
            if (err) {
                res.send(err);
            }
            res.json(examens);
        });
});

router.delete('/statistique/examen',function(req,res,next){
         Examen.remove({},function(err) {
            if (err) 
                console.log(err);
        });
});


router.post('/statistique/rapide',function(req,res,next){
        var rapide = new Rapide({
            _id : 1,
            nb_reussi : req.body.nb_question_rapide_reussie,
            nb_totale : req.body.nb_question_rapide
        });
        Rapide.update({_id:1}, rapide, {upsert:true}, function(err, result) {
            if (err)
                return next(err);
        });
});


router.delete('/questions',function(req,res,next){
    Question.remove({},function(err) {
            if (err) {
                console.log(err);
            } else {
                res('success');
            }
    });
});



module.exports = router;