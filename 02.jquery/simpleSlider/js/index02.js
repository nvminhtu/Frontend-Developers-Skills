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
    plusFirst = $slider.children(':first').clone();
    plusLast = $slider.children(':last').clone();

    $slider
      .append(plusFirst)
      .prepend(plusLast);

    $slider.stop().css({
      'margin-left' : - imgWidth + "px" 
    })
  };
  
  moveSlide = function(next){
    var nextPosition = checkPosition(next);
    $slider.stop().animate({
      marginLeft: nextPosition + "px"
    }, 'fast');
    current = next;
  };

  checkPosition = function(next){
    var nextPosition = -(imgWidth * next + imgWidth);
    if( current === numItems - 1 && next === 0 ){
      $slider.stop().css({
        "marginLeft": 0
      });
    } else if( current === 0 && next === numItems - 1 ){
      $slider.stop().css({
        "marginLeft": -(numItems * imgWidth + imgWidth) + "px"
      });
    };
    return nextPosition;
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