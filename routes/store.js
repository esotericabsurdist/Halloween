var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to Database");
});
/*
 *    This file is our store.
 *    It contains logic to handle all data access,
 *    all GET and POST requests, all routing.
 *
 *
 */
//==============================================================================

var express = require('express');
var router = express.Router();
var costume = require('../models/costumeschema.js');
//==============================================================================
//==============================================================================
/*
 *
 *          VIEWs :
 *
 */

router.get('/', function(req, res, next) {
  // load costumes.hjs





  res.render('costumes', { title: 'Halloween R8' });
});

router.get('/costumes', function(req, res, next) {
  // load costumes.hjs
  res.render('costumes', { title: 'Halloween R8' });
});

router.get('/signup', function(req, res, next) {
  // load signup
  res.render('signup', { title: 'Halloween R8'});
});

router.get('/user', function(req, res, next) {
  // load user page only if logged in.

  /* TODO validate user */

  var validUser = true;

  if(validUser){
    // if the user is valid, send them to the user page.
    res.render('user', { title: 'Halloween R8'});
  }
  else{
    // if the user isn't valid, not logged in, send them to /costumes.
    res.render('costumes', { title: 'Halloween R8'});
  }

});


//==============================================================================
//==============================================================================
/*
 *
 *          API
 *
 */

router.get('/retreivecostume', function(req, res, next){
  /*
    TODO
    1. Grab a random costume from the data base.
    2. Convert the costume's data to a Javascript Object, such as

        var costume = {
          imgPath = ...
          name = ...
          userName = ...
          ...
        }
    3. send the response with JSON containing the costume data, that is:
       res.json(costume);
  */
  costume.findOne({ 'title': 'Queen of Hearts' }, function (err, doc){
    if (err) return handleError(err);
    res.json(doc);
  });
});

router.post('/updatecostume', function(req, res, next){
    /*TODO*/
    // update costume data in DB via costume id
});

router.post('/insertuser', function(req, res, next){
  /* TODO */
  // validate user data and insert user data into DB, then log user in.
  // else something else.
});

router.get('/retreiveuser', function(req, res, next){
  /* TODO */
  // return all user data associated with account
});

router.post('/login', function(req, res, next){
  /* TODO */
  // validate user data and login.
});

router.post('/logout', function(req, res, next){
  /* TODO */
  // log the user out.
});

//==============================================================================
module.exports = router;
//==============================================================================









/*    Old code, don't delete.
//Get random image
//===========================
var filesystem = require("fs");

// folder with our images.
dir = './public/images';

// JSON data to return
//var images = new Array();
var images = {
    imagesJSON: []
};

// loop through all the images, building an array of image objects containing file path and name.
filesystem.readdirSync(dir).forEach(function(file) {

  // get full path.
  var path = 'images/'+file;

  // built object.
  var image = {
    imgPath: path,
    imgFile: file
  }
  images.imagesJSON.push(image);
});
// send the json as a response.
res.json(images);
*/
