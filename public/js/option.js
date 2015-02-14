Options = []
var OptionHTML = function(obj){ return "<h3 class='question-name'>" + obj.title + "</h3>" }

var OptionForm = function(obj) { return "<form class='create_options' action='/options.json' method='post'>" +
        "<input type='hidden' name= 'option[question_id]' value='" + obj.id +"'>" +
        "<label>Name Your Option</label>" +
        "<input type='text' name='option[answer_text]' />" +
        "<input type='submit' value='create your option' />" +
      "</form>" }

function Option(params) {
  this.id = params.id;
  this.question_id = params.question_id;
  this.answer_text = params.answer_text;
}

// Survey.protoype.toJson = function() {
//   return JSON.stringify( {  id: this.id, question_id: this.question_id,
//                             answer_text: this.answer_text} );
// }

Option.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/options.json",
    data : params,
  }).done(function(data){
    var recent_option = new Option(data)
    Options.push(recent_option)
    $('.create_options').replaceWith(
      "<p class='option-answer-text'>" + recent_option.answer_text + "</p>" +
      "<div id='finish_or_continue'>" +
        "<div id='add_option'>add option</div>" +
        "<div id='add_question'>add question</div>" +
        "<div id='publish_survey'>publish survey </div>" +
      "</div>"
      )
    $('#add_option').click(function() {
      // obj = Surveys[Surveys.length - 1];
      $('#finish_or_continue').replaceWith(OptionForm(Recent_question))

      $('.create_options').submit(function(event) {
        event.preventDefault();
        var formContent = $(this).serialize()
        Option.create(formContent) //Thread goes to option.js
      });

    })
    $('#add_question').click(function(){
      obj = Questions[Questions.length - 1]
      $('#finish_or_continue').replaceWith(QuestionForm(Recent_survey))

      $('.create_questions').submit(function(event) {
        event.preventDefault();
        var formContent = $(this).serialize()
        Question.create(formContent) // thread goes to question.js
      });

    })
    $('#publish_survey').click(function(){
      console.log('something should happen here')
    })

    })
}
