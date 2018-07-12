var goToContent = function(){
    $('html, body').animate({
        scrollTop: $(".page-wrapper").offset().top
    }, 1000);
}

$(document).ready(function(){
    $('.hero button.scroll').on('click',function(){
        goToContent();
    });
    
})
