var express = require('express');
var router = express.Router();

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

router.get('/examen1', function(req, res, next) {
  res.render('examen1', { title: 'Examen' });
});

router.get('/examen2', function(req, res, next) {
  res.render('examen2', { title: 'Examen' });
});

router.get('/resultats', function(req, res, next) {
  res.render('resultats', { title: 'Résultats de l\'examen' });
});

router.get('/test_rapide1', function(req, res, next) {
  res.render('test_rapide1', { title: 'Test Rapide' });
});

router.get('/test_rapide2', function(req, res, next) {
  res.render('test_rapide2', { title: 'Test Rapide' });
});

/*router.get('/bord', function(req, res, next) {
  res.render('bord', { title: 'Tableau de bord', Accueil:'', Bord:'Bord', Instructions:'' });
});
router.get('/resultats', function(req, res, next) {
  res.render('resultats', { title: 'Résultats' });
});

router.get('/instructions', function(req, res, next) {
  res.render('instructions', { title: 'Instructions', Accueil:'', Bord:'', Instructions:'Instructions' });
});*/

module.exports = router;
