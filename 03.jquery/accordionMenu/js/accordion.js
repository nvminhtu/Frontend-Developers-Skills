;(function($){
  "use strict";
  var accordionMenu;

  $(function(){
       
  })

  accordionMenu = function(){
    $('.ac-menu dt').on('click', function() {
      var $dd = $(this).next(),
          $ddInner = $dd.children('.dd-inner');
      if ($ddInner.is(':animated')) {
        return false;
      }
      $dd.children('.ac-btn').toggleClass('is-opened');
    });
  }
})(jQuery)