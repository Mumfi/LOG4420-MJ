var express = require('express');
var router = express.Router();






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



module.exports = router;
