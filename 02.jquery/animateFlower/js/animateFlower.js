;(function($, window){
  "use strict";
  
  //variables
  var UA = navigator.userAgent,
      $window = $(window),
      makeNewPosition,
      calcSpeed,
      animateIMG;
  
   // document.ready
  $(function(){
    //var newQ = makeNewPosition();
    animateIMG();
  });
  //create position
  makeNewPosition = function() {
    var h = $window.height() - 118; //minus the height of image
    var w = $window.width() - 139;

    var nh = Math.floor(Math.random() * h );
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
  }
  //caculate the speed
  calcSpeed = function(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;// control the speed here 

    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  }

  //animate Image
  animateIMG = function() {
    var newq = makeNewPosition();
    var oldq = $('img').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('img').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateIMG();        
    });
  }
  
})(jQuery, window);