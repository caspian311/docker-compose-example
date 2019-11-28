(function() {

  $.get('/api').done(function(data) {
    $('#message').html(data['message']);
  });

})();
