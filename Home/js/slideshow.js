
jQuery(function ($) {
	var now_id = 1;
	var next_id = 2;
	var max_image = $("#autorun ul li img").size();
	function changeImage() {
		if (now_id >= max_image) {
			next_id = 1;
		} else {
			next_id = now_id + 1;
		}
		var point = $('#autorun ul li img[id="pickup'+ next_id +'"]').parent();
		$('#autorun ul li img[id="pickup'+ now_id +'"]').parent().fadeOut(1000, function() {
			$(this).removeClass('now');
		});
		$('#autorun ul li img[id="pickup'+ next_id +'"]').parent().fadeIn(1000, function() {
			$(this).addClass("now");
			$("#autorun ul li").removeClass("now");
			point.addClass("now");
			now_id = next_id;
		});
	}
	if (max_image > 1) {
		setInterval(changeImage, 4000);
	}
});
