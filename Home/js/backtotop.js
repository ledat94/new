
jQuery(function($){ 	
	if($("#pagetop").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 300) {
				$("#pagetop").show()
			} else {
				$("#pagetop").hide()
			}
		});
		$("#pagetop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});