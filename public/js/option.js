function Option(params) {
  this.id = params.id;
  this.question_id = params.question_id;
  this.answer_text = params.answer_text;
}

Survey.protoype.toJson = function() {
  return JSON.stringify( {  id: this.id, question_id: this.question_id,
                            answer_text: this.answer_text} );
}

Survey.prototype.create = function() {
  $.ajax({
    type : 'post',
    url  : "/questions/" + this.question_id + "/options/create",
    data : { id: this.id,
             user_id: this.user_id,
             answer_text: this.answer_text,
             question_id: this.question_id,
            };
    success: function(){console.log("option created"); };
    error: function(){console.log("something went wrong");}
  })
}
