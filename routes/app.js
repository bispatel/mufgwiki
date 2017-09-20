var express = require('express');
var router = express.Router();

//St up the route in the back end   
router.get('/', function (req, res, next) {
     res.render('index');    
});

module.exports = router;
