var express = require('express');
var router = express.Router();
var AppRelease = require('../models/appreleases');
var AppLink = require('../models/applinks');
var jwt  = require('jsonwebtoken');

//Set up the route in the back end   
//Get all the db details
router.get('/', function (req, res, next) {
  AppRelease.find()        
         .exec(function(err,appReleaseDetails){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:appReleaseDetails
        });
    });    
});

router.get('/appLink', function (req, res, next) {
  AppLink.find()        
         .exec(function(err,appLinkDetails){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:appLinkDetails
        });
    });    
});
 
//Add a new link
router.post('/appLink', function (req, res, next) {
     var db = new AppLink({       
        location:req.body.location,
        appName:req.body.appName,
        envName:req.body.envName,
        description:req.body.description,
        url:req.body.url
     });        
     
     db.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(201).json({
            message:'Saved Application Links',
            obj:result
        });
     });
});


//Add a new db
router.post('/', function (req, res, next) {
     var db = new AppRelease({       
        appName:req.body.appName,
        releaseRef:req.body.releaseRef,
        estimation:req.body.estimation,
        startDate:req.body.startDate,
        plannedReleaseDate:req.body.plannedReleaseDate,
        actualReleaseDate:req.body.actualReleaseDate,
        plannedWorkDays:req.body.plannedWorkDays,
        actualWorkDays:req.body.actualWorkDays
     });        
     
     db.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(201).json({
            message:'Saved Release',
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