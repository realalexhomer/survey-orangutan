$(document).ready(function() {

  $('.create_surveys').submit(function(event) {
    event.preventDefault();
    var formContent = $(this).serialize()
    Survey.create(formContent)
  });

});

