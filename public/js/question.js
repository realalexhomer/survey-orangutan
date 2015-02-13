function Question(params){
  this.id = params.id
  this.survey_id = params.survey_id;
  this.title = params.title;
}

Question.prototype.toJson() {
  return JSON.stringify( {title: this.title, id: this.id, survey_id: this.survey_id} );
}

Question.prototype.create() {
  $.ajax({
    type : 'put',
    url  : "/surveys/" + this.survey_id + "/questions/create",
    data : { survey_id: this.survey_id,
             title: this.title };
    success: function(){console.log("question created"); };
    error: function(){console.log("something went wrong");}
  })
}
