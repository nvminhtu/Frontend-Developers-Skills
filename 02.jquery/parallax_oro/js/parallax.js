;(function($){
  "use strict";
  var parallaxScroll,
  	  redrawDotNav,
  	  resizeSP;

  	
	parallaxScroll = function(){
		var scrolled = $(window).scrollTop();
		$('#parallax-bg3').css('top',(0-(scrolled*.02))+'px');
		$('#parallax-bg2').css('top',(0-(scrolled*.25))+'px');
		$('#parallax-bg1').css('top',(0-(scrolled*.75))+'px');
	}

	
	redrawDotNav = function(){
		var section1Top =  0;
		// The top of each section is offset by half the distance to the previous section.
		var section2Top =  $('#oro_02').offset().top - (($('#oro_03').offset().top - $('#oro_02').offset().top) / 2);
		var section3Top =  $('#oro_03').offset().top - (($(document).height() - $('#oro_03').offset().top) / 2);
		
		$('nav#primary a').removeClass('active');
		if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
			$('#primary a.oro_01').addClass('active');
		} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
			$('#primary a.oro_02').addClass('active');
		} else if ($(document).scrollTop() >= section3Top){
			$('#primary a.oro_03').addClass('active');
		}
		
	}

	resizeSP = function(){
		$(window).resize(function(event) {
			if($(this).width()>640) {
				$(".inner article").css('margin-left', '0');
			} else {
				var $alignLeft = $(window).width()*0.5;

				$(".inner article").css('margin-left', $alignLeft);
			}
			
		});
  	}

  $(function(){

    redrawDotNav();
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	
	$('a.oro_01').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); //Callback for iOS
		});
    	return false;
	});
    $('a.oro_02').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#oro_02').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
	$('a.oro_03').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#oro_03').offset().top
    	}, 1000, function() {
	    	parallaxScroll();
		});
    	return false;
    });
    
    
    $('#primary a').hover(
    	function () {
			$(this).prev('h3').show();
		},
		function () {
			$(this).prev('h3').hide();
		}
    );

  });

})(jQuery);