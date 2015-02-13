var Surveys = []


function Survey(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.name = params.name;
}

// Survey.protoype.toJson = function() {
//   return JSON.stringify( { id: this.id, user_id: this.user_id, name: this.name} );
// }

Survey.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/surveys.json",
    data : params,
    success: function(data){
      var obj = new Survey(data)
      Surveys.push(obj)
    },
    error: function(){console.log("something went wrong");}
  })
}
