;(function($){


listOption = function() {

  var $box = $(".boxshow");
  var $hideBox = $(".show_ebook .boxhide").hide();

  $("#list_option").on("change", function(){
    var optionshow = $(this).val();
    

    var selectedVal = $(this).find("option:selected").val();
    var selectedID = "box_" + selectedVal;
        selectedID = "#" + selectedID;

    var $selectedBox = $(selectedID);

    //reset all setup
    $box.hide().removeClass("active");
    
    //open selected box
    $selectedBox.show().addClass('active');
    
  });
};

slider = function(){
    var $n = $(".active li").size();
    if( $n > 1 ){
      $(".active li:gt(0)").hide();
        setInterval(function(){
          $(".active  li:first-child").fadeOut()
          .next("li").fadeIn()
          .end().appendTo(".active ul");
      },1800);
    };
};

$(function(){
   listOption();
   slider();
});

})(jQuery);