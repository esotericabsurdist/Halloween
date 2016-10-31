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
      // get costume data
      var costumePath = costumeData.imgPath;
      var costumeTitle = costumeData.title;
      var costumeDescription = costumeData.description;
      var costumeTotalRating = costumeData.totalRating;
      var costumeNumberRating = costumeData.numberRatings;
      var costumeComments = new Array();
      costumeComments = costumeData.comments;

      // set image, description and title.
      document.getElementById('costumeImage').src = costumePath;
      document.getElementById('costumeDescription').innerHTML = costumeDescription;
      document.getElementById('costumeTitle').innerHTML = costumeTitle;



      // loop through comment data from costumeData and set in view:
      var commentSection = document.getElementById('costumeComments');
      for(var i = 0; i < costumeComments.length; i++){
      commentSection.innerHTML = commentSection.innerHTML +
      "<div class=\"comment\">"+
          "<div class=\"content\">"+
              "<a class=\"author\">"+costumeComments[i].user+"</a>"+
              "<div class=\"text\">"+
                  "<p>"+costumeComments[i].message+"</p>"+
              "</div>"+
          "</div>"+
      "</div>";
      }


      // Set rating into view.
      var average = costumeTotalRating/costumeNumberRating;
      // TODO set average as rating.
    });

  //============================================================================
  // Submit comment and update comment section.
  var submitCommmentButton = document.getElementById('submitCommmentButton')
    submitCommmentButton.addEventListener('click', function() {

    var costumeTitle = document.getElementById('costumeTitle').innerHTML;
    var costumeComment = $('#commentText').val();

    var postData = {
      rating: null,
      message: costumeComment,
      title: costumeTitle
      }


    $.ajax({
      url: '/updatecostume',
      type: 'POST',
      dataType: 'json',
      data: postData, // data: JSON.stringify(postData), <-- this addes an extra set of braces. doesn't work.
      success: function(costumeData) {
        // Now that we have returned, add the comment to the view.
        var costumeComments = new Array();
        costumeComments = costumeData.comments;

        // loop through comment data from costumeData.comments and set in view
        var commentSection = document.getElementById('costumeComments').innerHTML = " ";
        var commentSection = document.getElementById('costumeComments');
        for(var i = 0; i < costumeComments.length; i++){
          commentSection.innerHTML = commentSection.innerHTML +
          "<div class=\"comment\">"+
              "<div class=\"content\">"+
                  "<a class=\"author\">"+costumeComments[i].user+"</a>"+
                  "<div class=\"text\">"+
                      "<p>"+costumeComments[i].message+"</p>"+
                  "</div>"+
              "</div>"+
          "</div>";
        }
      }}, false);
  });
  //============================================================================
  // update stars on star rating made by user? Is barrating an event listener that takes a call back function?
  $('#rating').barrating({
          theme: 'fontawesome-stars-o',
          showSelectedRating: false,
          initialRating: average,
          onSelect: function(value, text) {
              //destory and set the new average rating
              $('#rating').barrating('destroy');

              var postData = {
                rating: value,
                message: null,
                title: costumeTitle
              }

              // send new rating value to server.
              $.ajax({
                url: '/updatecostume',
                type: 'POST',
                dataType: 'json',
                data: postData,
                success: function(costumeData) {
                  // Now that we have returned, add the comment to the view.

                  // get the new updated data.
                  var costumeTotalRating = costumeData.totalRating;
                  var costumeNumberRating = costumeData.numberRatings;

                  // compute new number of stars
                  var average = costumeTotalRating/costumeNumberRating;

                  //show a new average rating
                  $('#rating').barrating({
                      theme: 'fontawesome-stars-o',
                      showSelectedRating: false,
                      initialRating: average
                  });

                  //disable rating after user already rated
                  $('#rating').barrating('readonly', true);

                }}, false);
        }
  });
  //============================================================================
}); // closes document ready.
//==============================================================================
