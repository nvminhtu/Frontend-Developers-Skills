;(function($) {
  
  //traditional
  "use strict";
  // $(function(){
  //   $('.information').each(function(){
  //     $('th:first-child, thead td:first-child',this).each(function(i) {
  //       var tag = $(this).prop('tagName');
  //       $(this).before('<'+tag+'>#</'+tag+'>');
  //     });
  //     $('td:first-child',this).each(function(i) {
  //       $(this).before('<td>'+(i+1)+'</td>');
  //     });
  //   });
  // });

  //plugin customized
  $.fn.extend({
    tableAddCounter: function(options) {
      
      // set up default options 
      var defaults = { 
        title:  '#',
        start:  1,
        id:     false, 
        class:  false,
      };

      // Overwrite default options with user provided
      var options = $.extend({}, defaults, options);

      return $(this).each(function(){
        // Make sure this is a table tag
        if($(this).is('table')){

          // Add column title unless set to 'false'
          if(!options.title) options.title = '';
          $('th:first-child, thead td:first-child', this).each(function(){
            var tagName = $(this).prop('tagName');
            $(this).before('<'+tagName+' rowspan="'+$('thead tr').length+'" class="'+options.class+'" id="'+options.id+'">'+options.title+'</'+tagName+'>');
          });
        
          // Add counter starting counter from 'start'
          $('tbody td:first-child', this).each(function(i){
            $(this).before('<td>' + (options.start + i) + '</td>');
          });
        
        }
      });
    }
  });

  
})(jQuery);