$(document).ready(function() {
	$("form").submit(function() {
		
		var $form = $(this);

		if (validateForm($form)) {
			var data = $form.serialize();
			$.post(
				"./mail/mail.php",
				data,
				function(resp) {
					yaCounter45735288.reachGoal('order');
					// ga('send', 'event', 'order', 'order');
					// alert('Ваши данные переданы. Благодарим за заявку!');
					// document.location.href = 'thx.html';

					$.fancybox.close();

					$.fancybox.open({
						href: '#thx'
					});


				}
			);
		} else {
			return false;
		}
		return false;
	});

});

function validateForm($form) {
	var valid = true;
	$form.find(".required").each(function(index, element) {
		if ($(element).val() == "") {
			$(element).addClass("error");
			valid = false;
		}
		else {
			$(element).removeClass("error");
		}
	});
	return valid;
}