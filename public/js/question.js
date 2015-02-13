function Question(params){
  this.id = params.id;
  this.survey_id = params.survey_id;
  this.title = params.title;
}

// Question.prototype.toJson() {
//   return JSON.stringify( {title: this.title, id: this.id, survey_id: this.survey_id} );
// }

Question.prototype.create = function(params){
  $.ajax({
    type : 'post',
    url  : "/surveys/" + this.survey_id + "/questions/create",
    data : params,
    success: function(){console.log("question created") },
    error: function(){console.log("something went wrong");}
  })
}
