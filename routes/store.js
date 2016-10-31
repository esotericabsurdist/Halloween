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
  //Find the right costume document and return it as doc

  // TODO Get random costume.

  costume.findOne({ 'title': 'Queen of Hearts' }, function (err, doc){
    if (err) return handleError(err);
    res.json(doc);
  });
});


router.post('/updatecostume', function(req, res){

    //query is made to make the update function easier
    var jsonObject, userMessage, userRating, costumeTitle;

    // JSON.parse not working. Can't pass JSON.stringify for some reason from costumes.js.
    userMessage = req.body.message;
    userRating = req.body.rating;
    costumeTitle = req.body.title;

    // If there was a comment
    if (userMessage != null) {
      //Use query to find the right costume document and update the comments section
      //db.costumes.update({'title':costumeTitle},{$push: {'comments':{"message":userMessage}}});
      //console.log("Db is updated maybe");
      // return the appropriate costume for updated comments.


      costume.findOne({ 'title': costumeTitle }, function (err, doc){
        if (err) return handleError(err);

        // get array current comments.
        var comments = new Array();
        comments = doc.comments;
        console.log(comments);
        // add new comment to array of comments.
        comments.push({'user':'anonymous', 'message': userMessage}); // this line adds _id: documentID to the new comment for some reason.

        // trying this mongoose function because mongDB functions don't save.
        //costume.findOneAndUpdate({'title': costumeTitle}, {'comments': comments}); // this doesn't save either. 
        console.log(comments);
        // update the old comments array with the new comments array.
        costume.update({ 'title': costumeTitle}, {$set: {'comments': comments}});


        // verify the new comment data is set. Ths prints new data, but it is lost.
        console.log(doc);

        res.end(JSON.stringify(doc));
      });
    }

    //If there was a rating
    if (userRating != null) {/*
      costume.findOne({ 'title': costumeTitle }, function (err, doc){
        if (err) return handleError(err);

        //totalRating: Number,
        //numberRatings: Number,

        // create updated values.
        var totalRatings = doc.totalRating + userRating;
        var numberRatings = doc.numberRatings + 1;

        // update DB with new vales.
        costume.update({ 'title': costumeTitle}, {$set: {'totalRating': totalRating}});
        costume.update({ 'title': costumeTitle}, {$set: {'numberRatings': numberRatings}});

        // verify the new rating data is set.
        console.log(doc);

        res.json(doc);
      });*/
    }
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
