$(document).ready(function() {	

	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation;
		$('[name=city]').val(geolocation.city);
	}

	$("nav").on("click", 'a', function(event) {
		event.preventDefault();
		var scrollAnchor = $(this).attr("href");
		var scrollVal = $(scrollAnchor).offset().top - 135;
		$('html, body').animate({scrollTop: scrollVal}, 400);
		return false;
	});

	//маска
	$("input[name=phone]").mask("+7 (999) 999-99-99");

	$(".fancybox").fancybox({});

	//sticky
	if ( document.body.clientWidth > 1000 ) {
		$("#header .top").sticky({topSpacing:0});
		$("#header .bottom").sticky({topSpacing:88});
	}

	$(".open-modal").on('click', function(e) {

		var target = $(e.target);
		var href   = target.attr('href');

		var title  = $(target).data("title");
		var btn    = $(target).data("btn");

		$.fancybox.open({
			href: href,
			beforeShow: function() {
				$('#modal-1 h2').html(title);
				$('#modal-1 .btn').val(btn);
			}
		});
	});


	/**/

	var range_val_1 = 8;
	var range_val_2 = 350000;

	calc();

	$('#range-1').slider({
		range: "min",
		min: 1,
		max: 25,
		step: 1,
		value: range_val_1,
		slide: function(event, ui) {
			range_val_1 = ui.value;
			calc();
		}
	});

	$('#range-2').slider({
		range: "min",
		min: 150000,
		max: 1500000,
		step: 10000,
		value: range_val_2,
		slide: function(event, ui) {
			range_val_2 = ui.value;
			calc();
		}
	});

	
	function calc() {
		$("#range-result-1").text(range_val_1);
		$("#range-result-2").text(range_val_2.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' рублей');

		
		var dohod  = 0;
		dohod = Math.round( range_val_1 * ( range_val_2 * 0.085 ) );

		$("#dohod-result").text(  dohod.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')  + ' рублей' );
		
	}


});