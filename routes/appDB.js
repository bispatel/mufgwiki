var express = require('express');
var router = express.Router();
var AppDB = require('../models/appdatabase');
var jwt  = require('jsonwebtoken');

//Set up the route in the back end   
//Get all the db details
router.get('/', function (req, res, next) {
  AppDB.find()        
         .exec(function(err,appDBDetails){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:appDBDetails
        });
    });    
});

 


//Add a new db
router.post('/', function (req, res, next) {
     var db = new AppDB({
       appName:req.body.appName,
       appEnvironment:req.body.appEnvironment,
       serverName:req.body.serverName,
       port:req.body.port,       
       sid:req.body.sid,
       userName:req.body.userName,
       password:req.body.password   
     });     
     
     db.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(201).json({
            message:'Saved message',
            obj:result
        });
     });
});
/*
//Update a Message
router.patch('/:id',function(req,res,next){
    //Decode the token
    var decoded = jwt.decode(req.query.token);
   Message.findById(req.params.id,function(err,message){
     if (err){
         return res.status(500).json({
            title: 'An error occurred',
            error:err
         });
     }
     if(!message){
         return res.status(500).json({
           title: 'No Message Found!',
                error: {message: 'Message not found'}
         });
     }
     // If the logged in user id is not same with the user id of messages then edit should not be performed.
     if(message.user!= decoded.user._id){
         return res.status(401).json({
            title:'Not Authorized',
            error:err
          });
     }
     message.content =req.body.content;
     message.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(200).json({
        message: 'Updated message',
        obj:result
        });
    });
   });
});

//Delete a Message
router.delete('/:id',function(req,res,next){
    //Decode the token
    var decoded = jwt.decode(req.query.token);
   Message.findById(req.params.id,function(err,message){
     if (err){
         return res.status(500).json({
            title: 'An error occurred',
            error:err
         });
     }     
     if(!message){
         return res.status(500).json({
           title: 'No Message Found!',
           error: {message: 'Message not found'}
         });
     }    
    // If the logged in user id is not same with the user id of messages then delete should not be performed.
     if(message.user!= decoded.user._id){
         return res.status(401).json({
            title:'Not Authorized',
            error: {message: 'Users do not match'}
          });
     }
     message.remove(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(200).json({
            message:'Deleted message',
            obj:result
        });
    });
   });
});
*/
module.exports = router;