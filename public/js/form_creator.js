$(document).ready(function() {

  // var addSurvey = function( params)

  $('.create_surveys').submit(function(event) {
    event.preventDefault();
    // survey = new Survey()
    var formContent = $(this).serialize()
    // debugger
    Survey.create(formContent)
    // var data = JSON.parse(formContent)
    // console.log(data);
  });



});

