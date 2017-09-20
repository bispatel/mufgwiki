var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    header:{type:String,required:true,unique:true},
    content:{type:String,required:true}    
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('about',schema);
