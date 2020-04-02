;(function($) {
  
  var changeBackground;
  "use strict";

  $(function(){
    changeBackground();
  })

  changeBackground = function() {
    var i = 1;
    
    var images = [
     "img-slide_01.png",
     "img-slide_02.png",
     "img-slide_03.png",
     "img-slide_04.png",
     "img-slide_05.png"
    ];

    var captions = [
     "Slide caption 01",
     "Slide caption 02",
     "Slide caption 03",
     "Slide caption 04",
     "Slide caption 05"
    ];

    var image = $(".main_visual"),
        caption = $(".caption");

    //Initial background image setup
    image.css("background-image","url(img/img-slide_01.png)");
    caption.text("Slide caption 01");

    setInterval(function(){
      image.fadeOut(1000,function(){
        image.css("background-image","url(img/"+ images[i] +")");
        caption.text(captions[i]);
        i++;
        image.fadeIn(1000);
      });
      if(i== images.length)
        i = 0;
    },5000);
  }


})(jQuery);