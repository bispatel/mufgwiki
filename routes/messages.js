var express = require('express');
var router = express.Router();
var Message = require('../models/messages');
var jwt  = require('jsonwebtoken');
var User = require('../models/user');
//Set up the route in the back end   
//Get all the messages
router.get('/', function (req, res, next) {
  Message.find()
         .populate('user','firstName')
         .exec(function(err,messages){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
                message: 'Success',
            obj:messages
        });
    });    
});

//Every request will execute it first.
router.use('/',function(req,res,next){
   jwt.verify(req.query.token,'secret',function(err,decoded){
      if(err){
          return res.status(401).json({
            title:'Not Authorized',
            error:err
          });
      }
        next();
   });
});


//Add a new Message
router.post('/', function (req, res, next) {
    //Decode the token
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id,function(err,user){
        if(err){
          return res.status(500).json({
              title:'An error occurred',
              error:err
           });
        }
    var message = new Message({
        content:req.body.content,
        user:user 
     });
     message.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }

       user.messages.push(result);
       user.save();
        res.status(201).json({
            message:'Saved message',
            obj:result
        });
    });

    });
     
});

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

module.exports = router;
