function Option(params) {
  this.id = params.id;
  this.question_id = params.question_id;
  this.answer_text = params.answer_text;
}

// Survey.protoype.toJson = function() {
//   return JSON.stringify( {  id: this.id, question_id: this.question_id,
//                             answer_text: this.answer_text} );
// }

Survey.prototype.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/questions/" + this.question_id + "/options/create",
    data : params
  })
}
