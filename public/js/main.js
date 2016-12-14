$(function(){

    /*http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#select-menu*/
    var nua = navigator.userAgent;
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }

    /*menu*/
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