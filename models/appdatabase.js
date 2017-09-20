var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    appName:{type:String,required:true,unique:true},
    appEnvironment:{type:String,required:true},
    serverName:{type:String,required:true},
    port:{type:String,required:true},
    sid:{type:String,required:true},
    userName:{type:String,required:true},
    password:{type:String,required:true}   
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('AppDB',schema);
//The collection name will be automatically 'users'