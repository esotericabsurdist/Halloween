/*
 *
 *    costume.js
 *
 */
//==============================================================================
$(document).ready(function() // wait for DOM to be ready
{


  /* TODO */

  $.get('/retreivecostume', function(costumeData){
      // set costume data into html elements.

      

  });


  /* TODO */
  /*
     implement logic to handle comments and rating,
  */

});














  /* This is old test code. Do not delete.
  //============================================================================
  // GET JSON type image metadata from api to reference and load a costume image on page load.

  $.get( "/images", function( data ) {

    // get a random index.
    var randomIndex = Math.floor(Math.random() * (data.imagesJSON.length));

    // get the path.
    var imgPath = data.imagesJSON[randomIndex].imgPath;

    // get the file name.
    var imgName = data.imagesJSON[randomIndex].imgName;

    // Set image src using file name.
    document.getElementById('costume_image').src = imgPath;
    //document.getElementById('costume_description').innerHTML = imgName;
  });
  //============================================================================


  //============================================================================
  // Define like button behavior
  var likeButton = document.getElementById('like_button')
  likeButton.addEventListener('click', function() {

    // Get another random image for now.
    $.get( "/images", function( data ) {

      // get a random index.
      var randomIndex = Math.floor(Math.random() * (data.imagesJSON.length));

      // get the path.
      var imgPath = data.imagesJSON[randomIndex].imgPath;

      // get the file name.
      var imgName = data.imagesJSON[randomIndex].imgName;

      // Set image src using file name.
      document.getElementById('costume_image').src = imgPath;
      //document.getElementById('costume_description').innerHTML = imgName;
    });


  }, false);
  //============================================================================



  // Define dislikeButton behavior
  var dislikeButton = document.getElementById('dislike_button')
  dislikeButton.addEventListener('click', function() {


    // Get another random image for now.
    $.get( "/images", function( data ) {

      // get a random index.
      var randomIndex = Math.floor(Math.random() * (data.imagesJSON.length));

      // get the path.
      var imgPath = data.imagesJSON[randomIndex].imgPath;

      // get the file name.
      var imgName = data.imagesJSON[randomIndex].imgName;

      // Set image src using file name.
      document.getElementById('costume_image').src = imgPath;
      //document.getElementById('costume_description').innerHTML = imgName;
    });
  }, false);
  //============================================================================
  */
