;(function($){
  "use strict";
  var $slider,
      imgWidth,  // width of slide item
      numItems,  // number of slide item
      plusFirst, // add/clone item to first
      plusLast,  // add/clone item to last
      timer,  
      interval = 2000, //time for moving slide
      current = 0, //flag for checking the current slide item
      $this;

  var init,
      autoPlay,
      checkPosition,
      moveSlide;

  init = function(){
    $slider = $('.main_slider');
    imgWidth = $slider.children('li').width();
    numItems = $slider.children().length;
  };
  
  moveSlide = function(next){
    var nextPosition = -(imgWidth * next);
    $slider.stop().animate({
      marginLeft: nextPosition + "px"
    },"slow");
    current = next;
  };

  autoPlay = function(event){
    clearTimeout(timer);
    var next = current + 1 > numItems - 1 ? 0 : current + 1;
    moveSlide(next);
    timer = setTimeout(autoPlay, interval);
  };

  $(function(){
    init();
    timer = setTimeout(autoPlay, interval);
  });

})(jQuery);