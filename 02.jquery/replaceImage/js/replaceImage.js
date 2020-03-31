;(function($) {
  "use strict";
  var hoverImgOf,
      normalImgOf,
      hoverImage;
  $(function(){
    hoverImage();
  });
  /* Hover Image */
  hoverImage = function(){
    $(".wrap_btn").hover( function(){
      var hoverImg = hoverImgOf($(this).find("img").attr("src"));
      $(this).find("img").attr("src", hoverImg);
    },function() {
      var normalImg = normalImgOf($(this).find("img").attr("src"));
      $(this).find("img").attr("src", normalImg);
    });
  }
  hoverImgOf = function(filename){
   var re = new RegExp("(.+)_off\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_on.$2");
  }
  normalImgOf = function(filename){
   var re = new RegExp("(.+)_on\\.(gif|png|jpg)", "g");
   return filename.replace(re, "$1_off.$2");
  }
})(jQuery);