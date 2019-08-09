$(document).ready(function(){
    
    
    // call function
    //tabSlide();
    //tabtoggleSlide();
    //tabParagraph();

    // slideDown
    function tabSlide() {
        $('.tab-title').click(function(){
            $('.tab-content').slideDown("slow");
        });
    }
    function tabtoggleSlide() {
        $('.tab-title').click(function(){
            $('.tab-content').slideToggle("slow");
        });
    }

    function tabParagraph() {
        $("p").click(function(){
            $(this).hide();
        });
        $(".first-call").click(function(){
            console.log('test here');
        });
        $(".btn-list").find(".btn-on").click(function(){
            $(".box").show();
        });
        $(".btn-list").find(".btn-off").click(function(){
            $(".box").hide();
        });
        $(".btn-list").find(".btn-fade").click(function(){
            $(".box").fadeIn();
        });
    }

    // call action Animation
    animateBox();
    animateBack();

    function animateBox() {
        $('#chair-main').animate({
            left: '250px',
            opacity: '0.7',
            height: '150px',
            width: '150px'
        });

        $('#chair-01').animate({
            left: '0',
            opacity: '0.7',
            height: '300px',
            width: '700px'
        });
    }

    function animateBack() {
        $('#chair-01').click(function(){
            $('#chair-01').animate({
                left: '250px',
                opacity: '0.7',
                height: '150px',
                width: '150px'
            });
        });
    }
});

