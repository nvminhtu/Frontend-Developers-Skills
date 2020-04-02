
(function($) {
  var Sample = $.sample = (function() {
    zoomMode = 1;
    
    function init() {
      $("a").on({
        "mouseover": function(){
          var $btn = $(this).find("img");
          $btn.attr("src", $btn.attr("src").replace("_off","_on"));
        },
        "mouseout": function(){
          var $btn = $(this).find("img");
          $btn.attr("src",$btn.attr("src").replace("_off","_on"));
        }
      });
      
      //scrollSnoopy();
      //zoomSnoopy();
      //moveWoodstockX();
      moveWoodstockY();
      
      moveCloudY($(".cloud_1").attr("data-top", parseInt($(".cloud_1").css("top"))));
      moveCloudY($(".cloud_2").attr("data-top", parseInt($(".cloud_2").css("top"))));
      moveCloudY($(".cloud_3").attr("data-top", parseInt($(".cloud_3").css("top"))));
      moveCloudY($(".cloud_4").attr("data-top", parseInt($(".cloud_4").css("top"))));
      moveSnoopyY();
      moveSnoopyX();
      
      $("#global_nav a").on({
        "click" :function() {
          $("#contents ul").animate({top: -$("#contents").height()}, 800, "easeInBack", function() { setTimeout(function() {location.href = "pattern_b.html";}, 500); });
          return false;
        }
      });
    }
    
    function moveWoodstockX() {
      
      var
        $woodstock = $(".woodstock"),
        setX = Math.random() * ($(window).width() - 156);
      
      $woodstock.animate({left: setX}, {duration: Math.random() * 4000 + 3000, easing: "easeInOutCubic", complete: moveWoodstockX, queue: false});
    }
    
    function moveWoodstockY() {
      
      var
        $woodstock = $(".woodstock"),
        setY = Math.random() * 100 + 150;
      
      $woodstock.animate({top: setY}, {duration: Math.random() * 4000 + 3000, easing: "easeInOutCubic", complete: moveWoodstockY, queue: false});
    }
    
    function moveCloudY($cloud) {
      
      var
        setY = Math.random() * 120 + parseInt($cloud.attr("data-top")) - 30;
      
      $cloud.animate({top: setY}, {duration: Math.random() * 3000 + 3000, easing: "easeInOutSine", complete: function() { moveCloudY($cloud); }, queue: false});
    }
    
    function moveSnoopyX() {
      
      var
        $snoopy = $(".snoopy"),
        setY = Math.random() * 100 + 810 - 50;
      
      $snoopy.animate({left: setY}, {duration: Math.random() * 4000 + 4000, easing: "easeInOutSine", complete: function() { moveSnoopyX(); }, queue: false});
    }
    
    function moveSnoopyY() {
      
      var
        $snoopy = $(".snoopy"),
        setY = Math.random() * 400;
      
      $snoopy.animate({top: setY}, {duration: Math.random() * 4000 + 4000, easing: "easeInOutBack", complete: function() { moveSnoopyY(); }, queue: false});
    }
    
    return {
      init : init
    }
  
  })();
  $(Sample.init);
})(jQuery);
