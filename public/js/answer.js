
var Answers = []

$(document).ready(function() {

function Answer(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.survey_id = params.survey_id;
  this.question_id = params.question_id;
  this.option_id = params.option_id
}

$('.take-survey').submit(function(event) {
  event.preventDefault();
  var formContent = $(this).serialize()
  Answer.create(formContent)
})


Answer.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/answers.json",
    data : params,
  }).done(function(data){
    RecentAnswer = new Answer(data)
    Answers.push(RecentAnswer)
    var div_to_kill = '#' + data.question_id
    console.log(div_to_kill)
    $(div_to_kill).remove();
    if ($('.take-survey').length < 1) {
      window.location.href = "/"
    }
  })
}


});
