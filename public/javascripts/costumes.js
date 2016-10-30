/*
 *
 *    costumes.js
 *
 */
//==============================================================================
$(document).ready(function() // wait for DOM to be ready
{
    //============================================================================
    // GET a costme for the page:
    /* TODO Change to $.ajax... */
    $.get('/retreivecostume', function(costumeData){
      // dummy data
      var costumePath = costumeData.imgPath;
      var costumeTitle = costumeData.title;
      var costumeDescription = costumeData.description;

      document.getElementById('costumeImage').src = costumePath;
      document.getElementById('costumeDescription').innerHTML = costumeDescription;
      document.getElementById('costumeTitle').innerHTML = costumeTitle;

      // loop through comment data from costumeData and set in view
      // document.getElementById('costumeComments')
    });






  //============================================================================
    // Submit comment and update comment section.
  var submitCommmentButton = document.getElementById('submitCommmentButton')
    submitCommmentButton.addEventListener('click', function() {

    var title = document.getElementById('costumeTitle').innerHTML;
    var comment = $('#commentText').val();

    var postData = {
      rating: null,
      message: comment,
      costumeTitle: title
    }
    /*var costumeSchema = new Schema({
      imgPath: String,
      title:  String,
      description: String,
      userName: String,
      totalRating: Number,
      numberRatings: Number,
      comments: [{ user:{type: String, default: 'anonymous'}, message: String}]
    });*/
    $.ajax({
      url: '/updatecostume',
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify(postData);
      success: function(err,costumeData) {
        // Now that we have returned, add the comment to the view.
        if(err){
          console.log(err);
        }
        console.log("here is the response data: "+costumeData.title);
        //TODO read the array of comments and rewrite all of them as newest to oldest.

        // remove current comments
        var comments = document.getElementById('comments');
        comments.empty();
      }}, false);
  //============================================================================
  });
});
