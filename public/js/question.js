var Questions = []

function Question(params){
  this.id = params.id;
  this.survey_id = params.survey_id;
  this.title = params.title;
}


Question.prototype.create = function(params){
  $.ajax({
    type : 'post',
    url  : "/surveys/" + this.survey_id + "/questions.json",
    data : params,
    success: function(data){
      var obj = new Question(data);
      Questions.push(obj)
    },
    error: function(){console.log("something went wrong");}
  })
}
