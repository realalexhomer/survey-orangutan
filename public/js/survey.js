function Survey(params) {
  this.id = params.id;
  this.user_id = params.user_id;
  this.name = params.name;
}

Survey.protoype.toJson = function() {
  return JSON.stringify( { id: this.id, user_id: this.user_id, name: this.name} );
}

Survey.prototype.create = function() {
  $.ajax({
    type : 'post',
    url  : "/surveys/create",
    data : { name: this.name,
             user_id: this.user_name };
    success: function(){console.log("survey created"); };
    error: function(){console.log("something went wrong");}
  })
}
