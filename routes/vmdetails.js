var express = require('express');
var router  = express.Router();
var VMDetail =require('../models/vmdetails');


//Get all the messages
router.get('/', function (req, res, next) {
  VMDetail.find()        
         .exec(function(err,vms){
           if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });           
        }
         res.status(200).json({
            message: 'Success',
            obj:vms
        });
    });    
});


//St up the route in the back end   
router.post('/', function (req, res, next) {
     var vm = new VMDetail({
       hostName:req.body.hostName,
       osDesc:req.body.osDesc,   
       applications:req.body.applications       
     });
     
     vm.save(function(err,result){
       if(err){
           return res.status(500).json({
              title:'An error occurred',
              error:err
           });
       }
        res.status(201).json({
            message:'Saved VM Details',
            obj:result
        });
     });
});

module.exports = router;
