;(function($){
  "use strict";
  var accordionMenu;

  $(function(){
    accordionMenu();
  });

  accordionMenu = function(){
    //console.log('tesst');
    
    var heightIframe = $('.wrap').height();
    
    //var containerHeight = $('.container').height();
    //$('.overlay').height(containerHeight);

    $("#w3c").on('load', function() {
      var mydiv = $(this).contents().find("div");
      var h     = mydiv.height();
      alert(h);
    });
    //var height = $('iframe').contents().height();
    // var iframeContent = $('iframe').contents().contents().find("html").html();
    // console.log(iframeContent);

    // var iFrameHTML= $('#w3c').contents().find('body').html();
    // console.log(iFrameHTML);
    // alert(iFrameHTML);
    //var height = $('iframe').contents().contents().find( "a" ).css( "background-color", "#BADA55" );
    //console.log(height);
    // $('w3c').load(function () {
      
    // });
    // $('iframe').load(function () {
    //  $('iframe').height($('iframe').contents().height());
    // });
  };

})(jQuery);