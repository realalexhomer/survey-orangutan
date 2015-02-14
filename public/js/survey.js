var Surveys = []


function Survey(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.name = params.name;
}

Survey.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/surveys.json",
    data : params,
    // success: function(data){
    //   var obj = new Survey(data)
    //   Surveys.push(obj)
    // },
    // error: function(){console.log("something went wrong");}
  }).done(function(data){
    var obj = new Survey(data)
    Surveys.push(obj)
    $('.create_surveys').replaceWith(
      "<h1 class='survey-name'>" + obj.name + "</h1>" +
      "<form class='create_questions' action='/questions.json' method='post'>" +
        "<input type='hidden' name= 'question[survey_id]' value='" + obj.id +"'>" +
        "<label>Name Your Question</label>" +
        "<input type='text' name='question[title]' />" +
        "<input type='submit' value='create your question' />" +
      "</form>"
      )
  $('.create_questions').submit(function(event) {
      event.preventDefault();
      var formContent = $(this).serialize()
      Question.create(formContent) // thread goes to question.js
    });
  })
}


