var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    hostName:{type:String,required:true},
    osDesc:{type:String,required:true},
    applications:{type:String,required:true}    
});

module.exports = mongoose.model('VMDetail',schema);