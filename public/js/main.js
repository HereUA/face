$(function(){

    /*http://v4-alpha.getbootstrap.com/getting-started/browsers-devices/#select-menu*/
    var nua = navigator.userAgent;
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }

    /*menu*/
    var $document = $(document);
    var $nav = $('#main-nav');
    var $home = $('#home');
    $document.on('scroll', function(e){
        if($(this).scrollTop() > $home.height() - 80){
            $nav.slideDown();
        } else {
            $nav.slideUp();
        }
    });
    $document.trigger('scroll');

    /*scroll nav*/
    $('a[data-scroll="true"]').click(function(e){

        var scroll_target = $(this).data('id');
        var scroll_trigger = $(this).data('scroll');

        if(scroll_trigger == true && scroll_target !== undefined){
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $(scroll_target).offset().top
            }, 1000);
        }

    });

});