;(function($){
  "use strict";
  var parallaxScroll;

  parallaxScroll = function(){
    var $win = $(window);
    $('.bg_parallax').each(function(){
      var $this = $(this),
           //get the current position of scroll 
          $speed = 0.2; //if you set by the seconds you can change the way to calculate the yPos;

      $(window).scroll(function() {
        var $scrollPos = $win.scrollTop();
        var yPos = -( $scrollPos / $this.data("speed")); 
        var coords = '100% '+ yPos + 'px';
        // Animate the background
        $this.css({ backgroundPosition: coords });
        
      });
      
    });
  }
  
  $(function(){
    parallaxScroll();
  });

})(jQuery);