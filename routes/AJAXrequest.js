var express = require('express');
var router = express.Router();

require('../public/data/BD.js');


router.get('/nouvelle_question_test', function(req, res, next) {
    var numero = Math.trunc(Math.random() * questions.length);
    res.json(questions[numero]);
});


router.get('/nouvelle_question_exam_HTML',function(req, res, next) {
    var questionHTML=[];
    for(i=0;i<questions.length;i++){
        if (questions[i].domaine=="HTML"){
            questionHTML.push(questions[i]);
        }
    }
    var numero = Math.trunc(Math.random() * questionHTML.length);
    res.json(questionHTML[numero]);
    
});

router.get('/nouvelle_question_exam_CSS',function(req, res, next) {
    var questionCSS=[];
    for(i=0;i<questions.length;i++){
        if (questions[i].domaine=="CSS"){
            questionCSS.push(questions[i]);
        }
    }
    var numero = Math.trunc(Math.random() * questionCSS.length);
    res.json(questionCSS[numero]);
});

router.get('/nouvelle_question_exam_JS',function(req, res, next) {
    var questionJS=[];
    for(i=0;i<questions.length;i++){
        if (questions[i].domaine=="JavaScript"){
            questionJS.push(questions[i]);
        }
    }
    var numero = Math.trunc(Math.random() * questionJS.length);
    res.json(questionJS[numero]);
});



module.exports = router;