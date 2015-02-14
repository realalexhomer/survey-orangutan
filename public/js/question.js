var Questions = []

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
    var obj = new Question(data)
    Questions.push(obj)
    $('.create_questions').replaceWith(
      "<h3 class='question-name'>" + obj.title + "</h3>" +
      "<form class='create_options' action='/options.json' method='post'>" +
        "<input type='hidden' name= 'option[question_id]' value='" + obj.id +"'>" +
        "<label>Name Your Option</label>" +
        "<input type='text' name='option[answer_text]' />" +
        "<input type='submit' value='create your option' />" +
      "</form>"
      )
      $('.create_options').submit(function(event) {
        event.preventDefault();
        var formContent = $(this).serialize()
        Option.create(formContent) //Thread goes to option.js
      });
    })
}
