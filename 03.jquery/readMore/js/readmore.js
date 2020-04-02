;(function($){
  "use strict";
  var getRows;

  $(function(){
    var countRow = getRows('#test');
    var $currentText = $('#test');
    console.log(countRow);

    var len = $currentText.text().length;
    var height = $currentText.height();
    var fonttxt = parseInt($currentText.css("font-size"));

    var scale = 1.5;
    var line_height = Math.floor(parseInt(fonttxt) * scale);
    var rows = height / line_height;

    var textOneRow = Math.floor(len/rows);
    var textTwoRows = textOneRow *2;
    console.log(len);
    console.log(textOneRow);
    console.log(textTwoRows);
    if(countRow>2) {
      
      $currentText.each(function(i){
        var len=$(this).text().length;
        if(len>textTwoRows){
          $(this).text($(this).text().substr(0,textTwoRows)+'...');
        }

      });
    }

  });

  getRows = function(selector){
    var height = $(selector).height();
    var font_size = $(selector).css('font-size');
    var scale = 1.15;
    var line_height = Math.floor(parseInt(font_size) * scale);
    var rows = height / line_height;
    return Math.round(rows);
  }
})(jQuery);