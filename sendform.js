$(document).ready(function() {

	$("#feedback").submit(function(event) {
		event.preventDefault();

		var formData = new FormData($(this)[0]); //get data

		$(this).find("input[type=submit]").hide(); //hide submit button
		$('.form-notif').html("<span class='notification-load'>Send...</span>"); //show send message

		// ajax body
		$.ajax({
			type: "POST",
			url: "feedback.php", //handler
			data: formData,
			contentType: false,
			processData: false,
			success: function(msg) {

				if(msg == 'OK') {
					// if send success then show message
					result = '<span class="notification-success">Mail send success!</span>'; //success message
					$(".notification-load").hide(); //hide load message
					$('.form-notif').html(result); //show success message
					$(this).find("input[type=submit]"); //show submit button
				} else {
					// if send error then show error message
					result = msg;
					$(this).find("input[type=submit]"); //show submit button
					$('.form-notif').html(result); //show error message
				}
			}
		});
		return false;
	});

});