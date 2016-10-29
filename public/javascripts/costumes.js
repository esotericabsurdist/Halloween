/*
 *
 *    costumes.js
 *
 */
//==============================================================================
$(document).ready(function() // wait for DOM to be ready
{

    //============================================================================
    $.get('/retreivecostume', function(costumeData){
      // dummy data
      console.log("Made it here");
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
    // Submit comment:
  var submitCommmentButton = document.getElementById('submitCommmentButton')
    submitCommmentButton.addEventListener('click', function() { /*TODO*/}, false);
  //============================================================================

});
