jQuery(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 10;
        var height = screen.height;
        var pos = height - offset;
        $('.bg_scroll').css( 'background-position', '0px ' + pos + 'px' );
    });
});

