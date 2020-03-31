// JavaScript Document

(function($) {
  var Sample = $.sample = (function() {
    zoomMode = 1;
    
    function init() {
      $("#header a").on({
        "mouseover": function() {
          var $btn = $(this).find("img");
          $btn.attr("src", $btn.attr("src").replace("_off", "_on"));
        },
        "mouseout": function() {
          var $btn = $(this).find("img");
          $btn.attr("src", $btn.attr("src").replace("_on", "_off"));
        }
      });
      
      scrollSnoopy();
      zoomSnoopy();
      moveWoodstockX();
      moveWoodstockY();
    }
    
    function moveWoodstockX() {
      
      var
        $woodstock = $(".woodstock"),
        setX = Math.random() * ($(window).width() - 156);
        
      if (setX < parseInt($woodstock.css("left"))) $woodstock.find("img").attr("src", "img/pattern_a/dum-woodstock_left.gif");
      else $woodstock.find("img").attr("src", "img/pattern_a/dum-woodstock_right.gif");
      
      $woodstock.animate({left: setX}, {duration: Math.random() * 4000 + 3000, easing: "easeInOutCubic", complete: moveWoodstockX, queue: false});
    }
    
    function moveWoodstockY() {
      
      var
        $woodstock = $(".woodstock"),
        setY = Math.random() * (350 - 104);
      
      $woodstock.animate({top: setY}, {duration: Math.random() * 4000 + 3000, easing: "easeInOutBack", complete: moveWoodstockY, queue: false});
    }
    
    function scrollSnoopy() {
      $(".visual_inner").css({backgroundPosition: "0 -0px"}).animate({backgroundPosition: "340px -0px"}, {duration:3400, easing:"linear", complete:scrollSnoopy, queue: false});
    }
    
    function zoomSnoopy() {
      //$(".visual_inner").css({zoom: Math.random() * 0.7 + 0.3});
      
      zoomMode++;
      if (zoomMode > 4) zoomMode = 1;
      
      var param = 1;
      
      switch (zoomMode) {
        case 1:
          param = 0.27;
          break;
        case 2:
          param = 0.4;
          break;
        case 3:
          param = 0.8;
          break;
        case 4:
          param = 1.35;
          break;
      }
      
      $(".visual_inner").css({zoom: param});
      
      
      setTimeout(zoomSnoopy, 3000);
    }
    
    return {
      init : init
    }
  
  })();
  $(Sample.init);
})(jQuery);