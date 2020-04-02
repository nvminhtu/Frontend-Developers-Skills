;(function($){
  "use strict";
  var openSubMenu,
      closeSubMenu;

  $(function(){
    var selector = $('ul.top_menu > li');
    selector.bind('mouseover', openSubMenu);
    selector.bind('mouseout', closeSubMenu);
    function openSubMenu() {
      $(this).find('ul').css('visibility', 'visible');  
    };
  
    function closeSubMenu() {
      $(this).find('ul').css('visibility', 'hidden'); 
    };
  })
})(jQuery)