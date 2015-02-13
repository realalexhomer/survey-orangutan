$(document).ready(function() {

  // var addSurvey = function( params)
var createSurveyHtml = "" +
 "<form class= 'create_surveys' action='/surveys.json' method='post'>" +
    "<label> Name </label> " +
    "<input type='text' name='survey[name]' />" +
    "<input type='submit' value='create your survey'/>" +
  "</form>";

 var createQuestionHtml = "<div class='question'> This is a fucking question</div>";

 var createOptionHtml = "<div class='option'> This is a fucking option </div>";




  $('.form_container').append(createSurveyHtml);

  $('.create_surveys').submit(function(event) {
    event.preventDefault();
    var formContent = $(this).serialize()
    Survey.create(formContent)
      })

  // .done (function (data) {
  //     $('.form_container').append(createQuestionHtml) })







});

