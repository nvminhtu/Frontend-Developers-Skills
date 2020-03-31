(function($){
  var Index = $.index = (function(){
    /* field
    ----------------------------------------*/
    var
      // user defined
      count = 3,
      delayTime = 5000,
      changeTime = 3000,
      mainDelay = 600,
      mainCange = changeTime - mainDelay,
      
      // selector
      selWrap = '#keyvisual',
      // other

      intervalSlider,
      countIndex = count - 1,
      indexCurrent = 0, indexCurrentNext = 1,
      $ul = new Object(), $li = new Object();

    /* constructor
    ----------------------------------------*/
    function init(){
      // ul
      $ul = $(selWrap).children('ul');

      // li
      $li = $ul.children('li');
      $li.first().addClass('current').nextAll().css({
        'opacity': 0
      });

      // start
      setTimeoutSlider();
    }

    /* animetion
    ----------------------------------------*/
    function changeAnimetion(){
      // set next
      if(indexCurrent < countIndex){
        indexCurrentNext = indexCurrent + 1;
      }else{
        indexCurrentNext = 0;
      }

      // prev list
      $li.eq(indexCurrent).removeClass('current')
      .animate({
        'opacity': 0
      }, 1300);

      // next list
      $li.eq(indexCurrentNext).addClass('current')
      .animate({
        'opacity': 1
      }, 2300, 'easeInQuad')

        // main
        .children().first().css({
          'bottom': -40
        }).delay(mainDelay).animate({
          'bottom': 0
        }, mainCange, 'easeInOutSine', function(){
          changeFinish();
        })
        .next().children()
        
        // sub_01
        .first().css({
          'bottom': 0
        }).delay(700).animate({
          'bottom': 175
        }, 1800, 'easeInOutQuad')
        
        // sub_02
        .next().css({
          'right': 0
        }).delay(700).animate({
          'right': 177
        }, 1800, 'easeInOutQuad');

    }

    /* finish
    ----------------------------------------*/
    function changeFinish(){
      indexCurrent = indexCurrentNext;
      setTimeoutSlider();
    }

    /* slider setTimeout
    ----------------------------------------*/
    function setTimeoutSlider(){
      intervalSlider = setTimeout(changeAnimetion, delayTime);
    }

    /* access control
    ----------------------------------------*/
    return {
      init : init
    }
  })();
  // document.ready
  $(Index.init);

})(jQuery);