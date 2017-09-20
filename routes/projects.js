var express = require('express');
var router  = express.Router();
var Project =require('../models/projects');


//Get all the messages
router.get('/', function (req, res, next) {
  Project.find()        
         .exec(function(err,projects){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:projects
        });
    });    
});


//St up the route in the back end   
router.post('/', function (req, res, next) {
     var project = new Project({
       projectName:req.body.projectName,
       projectDescription:req.body.projectDescription,   
       longDescription:req.body.longDescription,
       technology:req.body.technology
     });
     
     project.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(201).json({
            message:'Saved project',
            obj:result
        });
     });
});

module.exports = router;
