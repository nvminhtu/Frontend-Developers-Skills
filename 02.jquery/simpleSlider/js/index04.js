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
      $this,
      $pager;

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
    });

    //Previous & Next Button
    $('.controller .btn_next, .controller .btn_prev').off().on('click', function(event){

      event.preventDefault();
      if($slider.is(':animated')){
        return;
      }
      //find the next slide item
      var next;
      clearTimeout(timer);
      
      $this = $(this);
      if($this.hasClass('btn_next')){
        next = (current + 1) > numItems - 1 ? 0 : current + 1;
      }else{
        next = (current - 1) < 0 ? numItems - 1 : current - 1; 
      }

      moveSlide(next);
      timer = setTimeout(autoPlay, interval);

    });

    //Pagination
    $pager = $('.pagination li');
    $pager.off().on('click', function(event){
      event.preventDefault();
       $this = $(this);

      if($slider.is(':animated')){
        return;
      }
      var next;
      clearTimeout(timer);
      next = $pager.index($this);
      moveSlide(next);
      timer = setTimeout(autoPlay, interval);

    });
  };
  
  moveSlide = function(next){
    var nextPosition = checkPosition(next);
    $slider.stop().animate({
      marginLeft: nextPosition + "px"
    });
    current = next;
    //pagination
    $pager.removeClass('active');
    $pager.eq(current).addClass('active');
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