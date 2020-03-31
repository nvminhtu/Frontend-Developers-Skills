;(function($) {
  
  "use strict";
  var UA = navigator.userAgent,
      itemLen,
      rows = 2,

      $clothesList,
      $productList,
      $item;
  
  $(function(){
    setTwoListEqual();
  });
  

  function setTwoListEqual() {
    var itemArrHeight = [];
    $productList = $('.product li');
    $clothesList = $('.clothes li');
    
    $productList.each(function(index, el) {
      itemArrHeight.push($(this).height());
    });

    if($productList.length == $clothesList.length) {
      $clothesList.each(function(index, el) {
        var currentHeight = $(this).height();
        if(currentHeight <= itemArrHeight[index]) {
          $(this).height(itemArrHeight[index]);
        } else {
          $productList.eq(index).height(currentHeight);
        }
      });
    } else {
      console.log('not equal - different number of items');
    }
  }

  function setProductEqual() {
    $('.product_box ul').each(function(index, el) {
      $item = $(this).find('li');
      itemLen = $item.length;
      for( var i = -1, len = Math.ceil( itemLen / rows); ++ i < len; ){
        var itemArray = [];
        for(var j = -1; ++ j < rows;){
          itemArray.push( i * rows + j );
        }
        setItemColumn(itemArray);
      }
    });
  }

  function setItemColumn( itemNum ){
    var MaxHeight = 0;
    for( var i = 0; i < itemNum.length; i++){
      MaxHeight = $item.eq(itemNum[i]).height() > MaxHeight ? $item.eq(itemNum[i]).height() : MaxHeight;
    }
    for(i = 0; i < itemNum.length; i++){
      $item.eq(itemNum[i]).height(MaxHeight);
    }
  }
    
    

})(jQuery);