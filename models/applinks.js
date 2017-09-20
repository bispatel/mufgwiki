var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    location:{type:String,required:true},
    appName:{type:String,required:true},
    envName:{type:String,required:true},
    description:{type:String,required:true},
    url:{type:String}   
});

module.exports = mongoose.model('AppLink',schema);