;(function($, window){
  "use strict";

  // for requestAnimationFrame
  window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame       ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame    ||
           window.oRequestAnimationFrame      ||
           window.msRequestAnimationFrame     ||
           function(callback, element){
             window.setTimeout(callback, 1000 / 30);
           };
  })();

  // -----------------------------
  // variables
  // 
  var UA = navigator.userAgent,
      noAnimation = /iPad/i.test(UA) || /MSIE\s8/i.test(UA),
      $circleFlower = [],
      $fallFlower = [],
      $blurFlower = [],
      $shineStar = [],
      $bgFlower,
      $frontFlower,
      $butterfly,
      $sakuraStar,
      circleFlowerFlg = false,
      blurFlowerFlg = false,
      winWidth = 0,
      $window,
      areaHeight = 670,
      startAnimPosition = 200,
      centerX = 0,
      centerY = 0,
      document = window.document,
      $doc,
      $sakuraArea,
      eventTimer;

  // -----------------------------
  // functions
  // 
  var init = function(){

    var random = Math.random,
        $this;

    // $(window)
    $window = $(window);
    $window.on({
      "resize": onResize,
      "scroll": onScroll
    }).trigger("resize");

    // $(document)
    $doc = $(document);
    $doc.on({
      "mousemove": onMouseMove
    });

    // $sakuraArea
    $sakuraArea = $("#sakura_area");

    $bgFlower = {
      "ele": $sakuraArea.find(".flower"),
      "cMTop": 0,
      "cMLeft": 0,
      "toMTop": 0,
      "toMLeft": 0
    };

    $frontFlower = {
      "ele": $sakuraArea.find(".front_flower"),
      "cMTop": 0,
      "cMLeft": 0,
      "toMTop": 0,
      "toMLeft": 0
    };


    // $circleFlower
    $sakuraArea.find(".flower img").each(function(index){
      $this = $(this);
      $circleFlower[index] = {
        "ele": $this,
        "cOpacity": -(index * 0.3),
        "toMTop": parseInt($this.css("marginTop"), 10),
        "toMLeft": parseInt($this.css("marginLeft"), 10),
        "cMTop": areaHeight / 2,
        "cMLeft": 0,
        "toWidth": $this.width(),
        "toHeight": $this.height(),
        "cWidth": $this.width() / 2,
        "cHeight": $this.height() / 2,
        "dTop": random() * 2 - 1,
        "dLeft": random() + 1,
        "ease": random() * 10 + 10
      }
      $circleFlower[index].ele
        .css({
          "opacity": $circleFlower[index].cOpacity
          // "opacity": $circleFlower[index].cOpacity,
          // "width": 0,
          // "height": 0,
          // "marginTop": $circleFlower[index].cMTop + "px",
          // "marginLeft": $circleFlower[index].cMLeft + "px"
        });
    });// each

    // $fallFlower
    $sakuraArea.find(".fall_flower img").each(function(index){
      $this = $(this);
      $fallFlower[index] = {
        "ele": $this,
        "cMTop": 0,
        "cMLeft": 0,
        "offset": random() * 100,
        "cOpacity": 1,
        "dTop": random() * 2 + 1,
        "dLeft": -(random() * 3 + 1),
        "height": parseInt($this.height(), 10)
      };

      $fallFlower[index].cMTop = -( areaHeight / 2 + $fallFlower[index].height + random() * 400);
      $fallFlower[index].cMLeft = random() * (winWidth / 2);

      $fallFlower[index].ele.css({
        "marginTop": $fallFlower[index].cMTop + "px",
        "marginLeft": $fallFlower[index].cMLeft + "px"
      });
    });// each

    // $blurFlower
    $sakuraArea.find(".front_flower img").each(function(index){
      $this = $(this);
      $blurFlower[index] = {
        "ele": $this,
        "toMTop": parseInt($this.css("marginTop"), 10),
        "toMLeft": parseInt($this.css("marginLeft"), 10),
        "cMTop": areaHeight / 2,
        "cMLeft": 0,
        "cOpacity": 0,
        "toWidth": $this.width(),
        "toHeight": $this.height(),
        "cWidth": $this.width() / 2,
        "cHeight": $this.height() / 2,
        "dTop": random() * 2 - 1,
        "dLeft": random() + 1,
        "ease": random() * 10 + 20
      };

      $blurFlower[index].ele
        .css({
          "width": $blurFlower[index].cWidth + "px",
          "height": $blurFlower[index].cHeight + "px",
          "marginTop": $blurFlower[index].cMTop + "px",
          "marginLeft": $blurFlower[index].cMLeft + "px",
          "opacity": $blurFlower[index].cOpacity
        });
    });// each

    $(".sakura_star img").each(function(index){
      $shineStar[index] = {
        "ele": $(this),
        "cOpacity": random(),
        "endPoint": -(random() + 1)
      };
    });

    // butterfly
    $butterfly = {
      "ele": $(".butterfly"),
      "dMTop": 0
    };

    $butterfly.cMTop = parseInt($butterfly.ele.css("marginTop"), 10);
    
    // start animation
    requestAnimationFrame(draw);

  }, //init

  // -----------------------------
  // EVENT | $window
  // 
  onResize = function(event){
    winWidth = $window.width();
    centerX = winWidth / 2;
    centerY = (areaHeight / 2) + $("#sakura_area").offset().top;
  },

  onScroll = function(event){
    if( $window.scrollTop() > startAnimPosition ){
      $window.off({
        "scroll": onScroll
      });
      circleFlowerFlg = true;
    }
  },

  // -----------------------------
  // EVENT | $document
  // 
  onMouseMove = function(event){
    $bgFlower.toMLeft = (event.pageX - centerX) / 35;
    $bgFlower.toMTop = (event.pageY - centerY) / 35;

    $frontFlower.toMLeft = (event.pageX - centerX) / 15;
    $frontFlower.toMTop = (event.pageY - centerY) / 15;
  },

  butterflyAnimate = function(){
    $butterfly.dMTop += 1;
    $butterfly.ele.css({
      "marginTop": $butterfly.cMTop + 10 * Math.sin($butterfly.dMTop / 20) + "px"
    });
  },

  drawPallarax = function(){

    $bgFlower.cMLeft += ( $bgFlower.toMLeft - $bgFlower.cMLeft ) / 20;
    $bgFlower.cMTop += ( $bgFlower.toMTop - $bgFlower.cMTop ) / 20;

    $bgFlower.ele.css({
      "marginLeft": $bgFlower.cMLeft + "px",
      "marginTop": $bgFlower.cMTop + "px"
    });

    $frontFlower.cMLeft += ( $frontFlower.toMLeft - $frontFlower.cMLeft ) / 10;
    $frontFlower.cMTop += ( $frontFlower.toMTop - $frontFlower.cMTop ) / 10;

    $frontFlower.ele.css({
      "marginLeft": $frontFlower.cMLeft + "px",
      "marginTop": $frontFlower.cMTop + "px"
    });

  },

  // -----------------------------
  // for circle flower animation
  // 
  drawCircleFlower = function(){
    var i = 0,
        len = $circleFlower.length;

    for( ; i < len; i ++ ){
      $circleFlower[i].cOpacity += 0.05;

      if($circleFlower[i].cOpacity < 1){
        $circleFlower[i].ele.css({
          "opacity": $circleFlower[i].cOpacity
        });
      }
    }

    if( $circleFlower[i - 3].cOpacity >= 1 ){
      blurFlowerFlg = true;
    }

    if( $circleFlower[i - 1].cOpacity >= 1 ){
      circleFlowerFlg = false;
    }
  },

  // -----------------------------
  // for blur flower animation
  // 
  drawBlurFlower = function(){
    var i = 0,
        len = $blurFlower.length,
        diffX = 0,
        diffY = 0,
        diffW = 0,
        diffH = 0,
        finishFlg = true,
        abs = Math.abs;

    for(; i < len; i ++){
      // position
      diffY = $blurFlower[i].toMTop - $blurFlower[i].cMTop;
      diffX = $blurFlower[i].toMLeft - $blurFlower[i].cMLeft;

      $blurFlower[i].cMTop = abs(diffY) < 3? $blurFlower[i].toMTop : $blurFlower[i].cMTop + diffY / $blurFlower[i].ease;
      $blurFlower[i].cMLeft = abs(diffX) < 3? $blurFlower[i].toMLeft : $blurFlower[i].cMLeft + diffX / $blurFlower[i].ease;

      // opacity
      $blurFlower[i].cOpacity = $blurFlower[i].cOpacity + 0.03 > 1 ? 1 : $blurFlower[i].cOpacity + 0.03;

      // width, height
      diffW = $blurFlower[i].toWidth - $blurFlower[i].cWidth;
      diffH = $blurFlower[i].toHeight - $blurFlower[i].cHeight;

      $blurFlower[i].cWidth = abs(diffW) < 3 ? $blurFlower[i].toWidth : $blurFlower[i].cWidth + diffW / $blurFlower[i].ease;
      $blurFlower[i].cHeight = abs(diffH) < 3 ? $blurFlower[i].toHeight : $blurFlower[i].cHeight + diffH / $blurFlower[i].ease;

      $blurFlower[i].ele
        .css({
          "width": $blurFlower[i].cWidth + "px",
          "height": $blurFlower[i].cHeight + "px",
          "marginTop": $blurFlower[i].cMTop + "px",
          "marginLeft": $blurFlower[i].cMLeft + "px",
          "opacity": $blurFlower[i].cOpacity
        });

      if($blurFlower[i].cOpacity !== 1 ||
         $blurFlower[i].cMTop !== $blurFlower[i].toMTop ||
         $blurFlower[i].cMLeft !== $blurFlower[i].toMLeft ||
         $blurFlower[i].cWidth !== $blurFlower[i].toWidth ||
         $blurFlower[i].cHeight !== $blurFlower[i].toHeight) {
        finishFlg = false;
      }
    }

    if( finishFlg ){
      blurFlowerFlg = false;
    }
  },

  // -----------------------------
  // for star animation
  // 
  drawShineStar = function(){
    var i = 0,
        len = $shineStar.length,
        dOpacity = 0.02,
        random = Math.random,
        tempOpacity;

    for(; i < len; i ++){
      tempOpacity = $shineStar[i].cOpacity - dOpacity;
      if ( tempOpacity < $shineStar[i].endPoint ) {
        tempOpacity = 1.5;
        $shineStar[i].endPoint = -(random() * 2 + 1);
      }
      $shineStar[i].cOpacity = tempOpacity;
      $shineStar[i].ele
        .css({
          "opacity": $shineStar[i].cOpacity
        });
    }
  },

  // -----------------------------
  // for Fall flower animation
  // 
  drawFallFlower = function(){
    var i = 0,
        len = $fallFlower.length,
        random = Math.random;

    for(; i < len; i ++){
      $fallFlower[i].cMTop += $fallFlower[i].dTop;
      $fallFlower[i].cMLeft += $fallFlower[i].dLeft;

      if( $fallFlower[i].cMTop > (areaHeight / 5) + $fallFlower[i].offset ){
        $fallFlower[i].dTop *= 0.9;
        $fallFlower[i].dLeft *= 0.9;
        $fallFlower[i].cOpacity -= 0.01;
      }

      if( $fallFlower[i].cOpacity < 0 ){
        $fallFlower[i].cMTop = -( areaHeight / 2 + $fallFlower[i].height + random() * 150);
        $fallFlower[i].cMLeft = random() * (winWidth / 2);

        $fallFlower[i].dTop = random() * 2 + 1;
        $fallFlower[i].dLeft = -(random() * 3 + 1);
        $fallFlower[i].cOpacity = 1;
        $fallFlower[i].offset = random() * 100;
      }

      $fallFlower[i].ele
        .css({
          "marginTop": $fallFlower[i].cMTop + "px",
          "marginLeft": $fallFlower[i].cMLeft + "px",
          "opacity": $fallFlower[i].cOpacity
        });


    }
  },

  // -----------------------------
  // for All animations
  // 
  draw = function(){

    // circle flower animation
    if( circleFlowerFlg ){
      drawCircleFlower();
    }

    // blur flower animation
    if( blurFlowerFlg ){
      drawBlurFlower();
    }

    // free fall flower animation
    drawFallFlower();

    // shining star animation
    drawShineStar();

    // butterfly animation
    // butterflyAnimate();

    // drawPallarax
    drawPallarax();

    // loop animation
    if ( winWidth > 767 ) {
      requestAnimationFrame(draw);
    };
  };

  // document.ready
  $(function(){
    if( !noAnimation ){
      init();
    } else {
      $("#video_sakura").hide();
    }
  });
  
})(jQuery, window);