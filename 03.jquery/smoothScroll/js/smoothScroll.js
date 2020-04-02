;(function($) {
  
  "use strict";
  
  $(function(){
    smoothScroll();
  });
  var smoothScroll = function() {
    $('#backtop a').on("click",function(event) {
      event.preventDefault();
      var h = $(this).attr("href");
      var t = $(h == "#" || h == ""? 'body' : h);
      var p = t.offset().top;
      $('html, body').animate({
        scrollTop: p
      }, 700);
      return false;
    });
  };

})(jQuery);