function Answer(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.survey_id = params.survey_id;
  this.question_id = params.question_id;
  this.option_id = params.option_id
}

Survey.protoype.toJson = function() {
  return JSON.stringify( {  id: this.id, user_id: this.user_id, survey_id: this.survey_id,
                            question_id: this.question_id, option_id: this.option_id} );
}

Survey.prototype.create = function() {
  $.ajax({
    type : 'post',
    url  : "surveys/" + this.survey_id + "/questions/" + this.question_id + "/answers/create",
    data : { id: this.id,
             user_id: this.user_id,
             survey_id: this.survey_id,
             question_id: this.question_id,
             option_id: this.option_id};
    success: function(){console.log("answer created"); };
    error: function(){console.log("something went wrong");}
  })
}
