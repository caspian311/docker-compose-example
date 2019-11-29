(function() {

  $.get('/api/messages').done(function(data) {
    $('#message').html(data[0]['message']);
  });

})();
