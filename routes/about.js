var express = require('express');
var router = express.Router();
var About = require('../models/about');
var jwt  = require('jsonwebtoken');

//Set up the route in the back end   
//Get all the db details
router.get('/', function (req, res, next) {
  About.find()        
         .exec(function(err,aboutDetails){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:aboutDetails
        });
    });    
});

 


//Add a new db
router.post('/', function (req, res, next) {
     var abt = new About({
       header:req.body.header,
       content:req.body.content       
     });     
     
     abt.save(function(err,result){
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

module.exports = router;