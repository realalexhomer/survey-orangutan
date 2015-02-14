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
  }).done(function(data){
    Recent_survey = new Survey(data)
    Surveys.push(Recent_survey)
    $('.create_surveys').replaceWith(
      QuestionHTML(Recent_survey) +
      QuestionForm(Recent_survey)
      )
  $('.create_questions').submit(function(event) {
      event.preventDefault();
      var formContent = $(this).serialize()
      Question.create(formContent) // thread goes to question.js
    });
  })
}


