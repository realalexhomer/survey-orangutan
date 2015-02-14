Options = []

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
    var obj = new Option(data)
    Options.push(obj)
    $('.create_options').replaceWith(
      "<p class='option-answer-text'>" + obj.answer_text + "</p>"
      )
  })
}
