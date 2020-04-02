;(function($) {
  var 
    browserDetection,
    UA = navigator.userAgent,
    isIE;
  
  "use strict";
  $(function(){
    //browserDetection();
    
  })

  browserDetection = function() {
  //Check if browser is IE or not
    if (navigator.userAgent.search("MSIE") >= 0) {
        alert("Browser is InternetExplorer");
    }
    //Check if browser is Chrome or not
    else if (navigator.userAgent.search("Chrome") >= 0) {
        alert("Browser is Chrome");
    }
    //Check if browser is Firefox or not
    else if (navigator.userAgent.search("Firefox") >= 0) {
        alert("Browser is FireFox");
    }
    //Check if browser is Safari or not
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        alert("Browser is Safari");
    }
    //Check if browser is Opera or not
    else if (navigator.userAgent.search("Opera") >= 0) {
        alert("Browser is Opera");
    }
  },

  isIE = function(){
    var pattern;
    if(arguments.length) {
      for(var i = -1, len = arguments.length; ++ i < len;){
        pattern = new RegExp("MSIE\s" + arguments[i], "i");
        if(pattern.test(UA)) return true;
      }
      return false;
    }
    pattern = new RegExp("MSIE\s[0-9]+\.[0-9]+", "i");
    var matchVersion = UA.match(pattern);
    return matchVersion? matchVersion[0] : false;
  }

})(jQuery);