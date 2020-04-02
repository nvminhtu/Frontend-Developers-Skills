$(function() {
	$('a[href^=#]').each (function(){
		var hash = this.hash;
		if(hash.length > 1 && !this['rel']){
			$(this).click(function() {
				smoothScroll(hash);
				return false;
			})
		}
	});
});

function smoothScroll(hash) {
	var target = $(hash).offset().top;

	$(($.browser.safari) ? 'body' : 'html')
		.animate({scrollTop: target >= 15 ? target - 15 : target}, 600, 'swing', function(){$(this).unbind("mousewheel DOMMouseScroll");})
		.bind("mousewheel DOMMouseScroll",function(){
			$(this).queue([]).stop();
			$(this).unbind("mousewheel DOMMouseScroll");
		})
}
