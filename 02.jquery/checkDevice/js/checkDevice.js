;(function($) {
  
  "use strict";
  var UA = navigator.userAgent,
      $information;
  
  $(function(){
    $information = $('.information');
    if(isMobile()){
      $information.html('Mobile Device');
    } else {
      $information.html('Desktop');
    }
  })
  var isMobile = function(){
    var useragents = [
      "iPhone",         //  Apple iPhone
      "iPod",           //  Apple iPod touch
      "Android",        //  1.5+ Android
      "dream",          //  Pre 1.5 Android
      "CUPCAKE",        //  1.5+ Android
      "blackberry9500", //  Storm
      "blackberry9530", //  Storm
      "blackberry9520", //  Storm v2
      "blackberry9550", //  Storm v2
      "blackberry9800", //  Torch
      "webOS",          //  Palm Pre Experimental
      "incognito",      //  Other iPhone browser
      "webmate",        //  Other iPhone browser
      "iPad"            //  Other iPad browser
    ],
    i = -1,
    len = arguments.length;
      
    for( ; ++ i < len; ){
      useragents.push(arguments[i]);
    }

    var
      pattern = new RegExp(useragents.join("|"), "i"),
      matchStr = UA.match(pattern);

    return matchStr? matchStr[0] : false;
  };

})(jQuery);