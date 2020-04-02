;(function($){
  "use strict";
  var shakeCup;

  $(function(){
    shakeCup();
  })

  shakeCup = function(){
    var interval = 300;
    var distance = 10;
    var times = 1000;
    var rotate = 0;
    var cupTea = $(".cup_tea");
    cupTea.css('position','relative');

    for(var cpart=0;cpart<(times+1);cpart++){

      var moveLeft = cpart%2==0 ? distance : distance*-1;
      //var rotate = cpart%2==0 ? rotate : rotate+1;
      cupTea.animate({ 
        left: moveLeft
      },interval);
    }

    var rotation = 0;
    cupTea.click(function(event) {
      rotation= rotation+5;
      $(this).rotateCup(rotation);
    });
    

    // for(var rotation=0; rotation < 180; rotation++){
    //   setInterval(cupTea.rotateCup(rotation++),9000);  
    // }

  //cupTea.animate({ left: 0},interval);
  }

  //rotate cup

  jQuery.fn.rotateCup =  function(degrees){
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                     '-moz-transform' : 'rotate('+ degrees +'deg)',
                     '-ms-transform' : 'rotate('+ degrees +'deg)',
                     'transform' : 'rotate('+ degrees +'deg)'});
  };
  //var rotation = 0;



  // $('.rotate').click(function() {
  //     rotation += 5;
  //     $(this).rotate(rotation);
  // });

})(jQuery)