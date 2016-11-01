var mongoose = require( 'mongoose' );
var random = require('mongoose-simple-random');



var Schema = mongoose.Schema;
var Question = new Schema({
    domaine : String,
    id : Number,
    question : String,
    reponses : [String],
    bonne_reponse : Number
});

Question.plugin(random);
mongoose.model('Question',Question);
mongoose.connect( 'mongodb://user:user@ds061506.mlab.com:61506/log4420' );