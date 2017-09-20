var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    appName:{type:String,required:true,unique:true},
    releaseRef:{type:String,required:true},
    estimation:{type:String,required:true},
    startDate:{type:String,required:true},
    plannedReleaseDate:{type:String},
    actualReleaseDate:{type:String},
    plannedWorkDays:{type:String},  
    actualWorkDays:{type:String} 
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('AppRelease',schema);
//The collection name will be automatically 'users'