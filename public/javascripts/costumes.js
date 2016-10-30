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
      var costumePath = costumeData.costumePath;
      var costumeTitle = costumeData.costumeTitle;
      var costumeDescription = costumeData.costumeDescription;

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
    var comment = document.getElementById('commentText').innerHTML;

    var postData = {
      rating: null,
      message: commentText,
      costumeTitle: title
    }


    $.ajax({
      type: "POST",
      url: "/updateCostume",
      data: JSON.stringify(postData),
      success: function(costumeData) {
        // Now that we have returned, add the comment to the view.

        console.log("here is the response data: "+costumeData.title);
        /*TODO read the array of comments and rewrite all of them as newest to oldest.
    });


    }, false);
  //============================================================================

});
