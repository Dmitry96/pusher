$(function() {
	$('#new_message').on('ajax:success', function(xhr, data, status) {
		//$('#messages_list tbody').append('<tr><td>'+ data.text + '</td><td>' + data.user_name + '</td></tr');
		$('#message_text').val('');
	});

	var pusher = new Pusher('9166c8bcc9ddaaf85229', {
      encrypted: true
  });

	var channel = pusher.subscribe('messages');
    channel.bind('new', function(data) {
      addMessage(data);
  });
});

function addMessage(data) {
	$('#messages_list tbody').append('<tr><td>'+ data.text + '</td><td>' + data.user_name + '</td></tr');
}