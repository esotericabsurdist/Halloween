var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



//==============================================================================
var store = require('./routes/store');
//==============================================================================




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());  // URL body
app.use(bodyParser.urlencoded({ extended: false })); // JSON body
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




//==============================================================================

// VIEWs,
// these are what the users get to see.
app.use('/', store);         // directs to costumes, which is the home page.
app.use('/costumes', store); // homepage.
app.use('/signup', store);   // signup page
app.use('/user', store);     // the user's console for viewing



// API,
// these are what the user's browsers call upon to request resources from our web server.
// GETs or POSTS are made to these paths when their browser requests resources.
// See store.js for their functionality.
app.use('/retreivecostume', store); // GET here upon viewing a random costume on /costume
app.use('/updatecostume', store);   // POST here upon rating or commenting a costume
app.use('/insertuser', store);      // POST here with user data upon signing up.
app.use('/retreiveuser', store);    // GET here to retreive data for user.
app.use('/login', store);           // POST here with user data upon logging in.
app.use('/logout', store);          // POST here upon logging.
//==============================================================================







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
