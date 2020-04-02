(function($, win) {


  var $win,
      offsetTop,
      num = "",
      title = "",
      srcImg = "",
      $this;

    $(function(){
      loadPopup();
      closePopup();
    });

    function loadPopup(){
      $('body').append("<div class='overlay'></div>");
 

      $win = $(win);
      offsetTop = $(".popupWrapper").outerHeight() / 2;

      $(".quick_view a")
      .off()
      .on("tap click", function(event){
        event.preventDefault();
         
        $this = $(this);

        $this.parents('.quick_view').next(".popupWrapper")
        .css({
          'marginTop': $win.scrollTop() - offsetTop + 'px'
        })
        .fadeIn();
        $('.overlay')
        .fadeTo(500, 0.6);
      });
    }

    function closePopup(){
      $(".overlay, .closePopup")
      .off()
      .on("tap click", function(event){
        event.preventDefault();
        $(".overlay, .popupWrapper")
        .fadeOut();
      });
    }
    
})(jQuery,window);