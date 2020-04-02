$(document).ready(function(){
    $('.scroll_to').click(function(){
        var jump = $(this).attr('href');
        var new_pos = $(jump).offset();
        $('html, body').stop().animate({ scrollTop: new_pos.top },800);
    });
});