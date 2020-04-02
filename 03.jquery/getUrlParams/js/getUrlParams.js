;(function($) {
  
  "use strict";
  /* 
  //Functional call
  $(function(){
    var arrVars = getUrlVar();
    //name of split params
    var first = getUrlVar()["name"];
  })
  //get page's URL and parse it to associative array.
  var getUrlVar = function () {
    var vars = [], hash;
    var hashes  = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  };
  */
  //Extend to functions for plugins
  $.extend ({
    getUrlVars: function() {
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
      for(var i = 0; i < hashes.length; i++)
      {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]]= hash[1];
      }
      return vars;
    },
    getUrlVar: function(name) {
      return $.getUrlVars()[name];
    }
  });
  
})(jQuery);