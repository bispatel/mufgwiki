var express = require('express');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes = require('./routes/user');
var dbDetailsRoutes = require('./routes/appDB');
var aboutRoutes     = require('./routes/about');
var projectRoutes = require('./routes/projects');
var appReleaseRoutes = require('./routes/appReleases');
var vmRoutes = require('./routes/vmdetails');
var app = express();

var DIR = './uploads/';
var upload = multer({dest: DIR}).any();
//local connection
mongoose.connect('localhost:27017/node-angular');
//Prod
//mongoose.connect('test:test@ds127034.mlab.com:27034/myauthentication');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/db', dbDetailsRoutes);
app.use('/application', appReleaseRoutes);
app.use('/project', projectRoutes);
app.use('/vmDetails', vmRoutes);
app.use('/about', aboutRoutes);



app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}).any());
 

app.get('/fileUpload', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/fileUpload', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.end(err.toString());
    }
 
    res.end('File is uploaded');
  });
});


app.use('/', appRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    return res.render('index');
});


module.exports = app;
