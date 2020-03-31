
$(function() {
	$("#main01_01").delay(800).animate({opacity:'1'},800,'swing');
	$("#main01_02").delay(1500).animate({opacity:'1'},800,'swing');
	$("#main01_03").delay(2000).animate({opacity:'1',left:'765px'},300,'swing');
	$("#main01_04").delay(2200).animate({opacity:'1',left:'765px'},300,'swing');
	$("#main01_05").delay(2800).animate({opacity:'1',left:'1135px',top:'305px'},100,'easeOutBack');
	$("#main01_06").delay(2900).animate({opacity:'1',left:'956px',top:'455px'},100,'easeOutBack');

});



function slideSwitch() {


	$("#slideshow li span").css("opacity",0);
$("#main01_03,#main01_04").css({"left": "735px"}); 

$("#main01_05").css({"left": "1115px", "top": "325px"}); 
$("#main01_06").css({"left": "936px", "top": "475px"}); 


$("#main02_01").css({"left": "490px", "top": "365px"}); 
$("#main02_02").css({"left": "490px", "top": "475px"}); 

$("#main03_01").css({"left": "490px", "top": "330px"}); 
$("#main03_02").css({"left": "490px", "top": "390px"}); 

    var $active = $('#slideshow li.active');
    if ( $active.length == 0 ) $active = $('#slideshow li:last');
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow li:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 800, function() {
            $active.removeClass('active last-active');
        });

	$("#main01_01").delay(800).animate({opacity:'1'},800,'swing');
	$("#main01_02").delay(1500).animate({opacity:'1'},800,'swing');
	$("#main01_03").delay(2000).animate({opacity:'1',left:'765px'},300,'swing');
	$("#main01_04").delay(2200).animate({opacity:'1',left:'765px'},300,'swing');
	$("#main01_05").delay(2800).animate({opacity:'1',left:'1135px',top:'305px'},100,'easeOutBack');
	$("#main01_06").delay(2900).animate({opacity:'1',left:'956px',top:'455px'},100,'easeOutBack');

	$("#main02_01").delay(800).animate({opacity:'1',left:'520px'},300,'swing');
	$("#main02_02").delay(1100).animate({opacity:'1',left:'520px'},300,'swing');

	$("#main03_01").delay(800).animate({opacity:'1',left:'520px'},300,'swing');
	$("#main03_02").delay(1100).animate({opacity:'1',left:'520px'},300,'swing');
	
}

$(function() {
   setInterval( "slideSwitch()", 6000 );
});
