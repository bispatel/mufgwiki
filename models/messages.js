var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');
var schema = new Schema({
   content:{type:String,required:true},
   user : {type:Schema.Types.ObjectId,ref:'User'}
});

//Do it after a certain action 
schema.post('remove',function(message){
    //Whenever a message is deleted then it will be deleted from the users message array
    User.findById(message.user,function(err,user){
        user.messages.pull(message);
        user.save();
    });
});


module.exports = mongoose.model('Message',schema);
//The collection name will be automatically 'messages'