/* global $ Firebase */
$(function () {
  var ref = new Firebase("https://sweltering-fire-1794.firebaseio.com/");
  var chatRef = ref.child('chat');
  chatRef.on('child_added', function (snapshot) {
    var $message = $('<div>');
    var obj = snapshot.val();
    $message.html(obj.timestamp + ': ' + obj.message);
    $('.chat-container').append($message);
  });
  $('.chat-button').on('click', function () {
    chatRef.push({
      timestamp: (new Date()).toString(),
      message: $('.chat-box').val()
    });
  });
});
