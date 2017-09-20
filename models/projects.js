var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    projectName:{type:String,required:true},
    projectDescription:{type:String,required:true},
    longDescription:{type:String,required:true},
    technology:{type:String,required:true}
   // resources:[{type:Schema.Types.ObjectId,ref:'User'}]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Project',schema);
//The collection name will be automatically 'users'