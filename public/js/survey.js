var Surveys = []


function Survey(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.name = params.name;
}


Survey.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/surveys.json",
    data : params,
    success: function(data){
      var obj = new Survey(data)
      Surveys.push(obj)
      console.log('hi')
    },
    error: function(){console.log("something went wrong");}
  })
}
