;(function($) {
  
  "use strict";
    
  $(function(){
    // $('.thumb_video').css({
    //   display: 'none'
    // });
    // console.log($("body").height());

    // $('.introVid a').off().click(function(){
    //   event.preventDefault();
    //   autoPlayVideo('o6NstKZMr94','450','283');
    //   $(this).find('.thumb_video').fadeOut('400');
    //   $(this).find('#videoContainer').fadeIn('400');
    // });
    $( window ).resize(function() {

      var container_width = $('#pageContainer').width();
      $('#pageContainer').html('<div class="fb-page" data-href="https://www.facebook.com/MUFANCLUB/" data-width="' + container_width + '" data-height="250" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>');
      FB.XFBML.parse();  
      var FBwidth =  $('.fb-page').width();
      var $winWidth = $(window).width();
      if($winWidth > 500 ){
        console.log(FBwidth);
        $('.fb-page').css("width","500");
      }
    });
  });
  // function autoPlayVideo(vcode, width, height){
  //   $("#videoContainer").html('<iframe width="'+width+'" height="'+height+'" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');
  // }

})(jQuery);