var Questions = []
var QuestionHTML = function(obj) { return "<h1 class='survey-name'>" + obj.name + "</h1>"}

var QuestionForm = function (obj) { return "<form class='create_questions' action='/questions.json' method='post'>" +
        "<input type='hidden' name= 'question[survey_id]' value='" + obj.id +"'>" +
        "<label>Name Your Question</label>" +
        "<input type='text' name='question[title]' />" +
        "<input type='submit' value='create your question' />" +
      "</form>"
}

function Question(params){
  this.id = params.id;
  this.survey_id = params.survey_id;
  this.title = params.title;
}

Question.create = function(params){
  $.ajax({
    type : 'post',
    url  : "/questions.json",
    data : params,
  }).done(function(data){
    Recent_question = new Question(data)
    Questions.push(Recent_question)
    $('.create_questions').replaceWith(
      OptionHTML(Recent_question) +
      OptionForm(Recent_question)
      )
      $('.create_options').submit(function(event) {
        event.preventDefault();
        var formContent = $(this).serialize()
        Option.create(formContent) //Thread goes to option.js
      });
    })
}
