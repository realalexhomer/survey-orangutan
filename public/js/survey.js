function Survey(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.name = params.name;
}

// Survey.protoype.toJson = function() {
//   return JSON.stringify( { id: this.id, user_id: this.user_id, name: this.name} );
// }

Survey.prototype.create = function(params) {
  $.ajax({
    type : 'post',
    url  : "/surveys/create",
    data : params,
    success: function(){console.log("survey created") },
    error: function(){console.log("something went wrong");}
  })
}
