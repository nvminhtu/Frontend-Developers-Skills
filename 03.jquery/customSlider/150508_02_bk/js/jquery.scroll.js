(function($){
	$(function(){
		$('a[href^="#"]').click(function(){
			if ( $( $(this).attr('href') ).length ) {
				var p = $( $(this).attr('href') ).offset();
				$('html,body').animate({ scrollTop: p.top }, 200);
			}
			return false;
		});
	});
})(jQuery);

//totop
$(document).ready(function(e) {
     $("#toTop").hide();
	$(window).scroll(function () {
	 if ($(this).scrollTop() > 600) {
	 $("#toTop").fadeIn();
	 } else {
	 $("#toTop").fadeOut();
	 }
	});
});