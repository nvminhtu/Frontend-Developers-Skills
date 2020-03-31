;(function($){
  "use strict";
  var parallaxScroll,
  	  resizeSP;

  	
	parallaxScroll = function(){
		var scrolled = $(window).scrollTop();
		/*$('#parallax-bg4').css('top',(0-(scrolled*.02))+'px');
		$('#parallax-bg3').css('top',(0-(scrolled*.05))+'px');
		$('#parallax-bg2').css('top',(0-(scrolled*.10))+'px');
		$('#parallax-bg1').css('top',(0-(scrolled*.15))+'px'); */

		$('#parallax-bg4').css('marginTop',(0-(scrolled*.1))+'px');
		$('#parallax-bg3').css('marginTop',(0-(scrolled*.2))+'px');
		$('#parallax-bg2').css('marginTop',(0-(scrolled*.5))+'px');
	}


	$(function(){
		/* Scroll event handler */
	    // $(window).bind('scroll',function(e){
	    // 	parallaxScroll();
	    // });
	    
	    $(window).bind('scroll mousewheel',function(e){
	    	parallaxScroll();
	    });


	});

})(jQuery);