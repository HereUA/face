$(function(){

    var $document = $(document);
    var $nav = $('header');
    var $main = $('.main');
    $document.on('scroll', function(e){
        if($(this).scrollTop() > $main.height() - 99){
            $nav.slideDown();
        } else {
            $nav.slideUp();
        }
    });
    $document.trigger('scroll');

});