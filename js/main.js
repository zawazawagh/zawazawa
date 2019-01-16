jQuery(function($) {
    $(window).scroll(function() {
        var offset = $(this).scrollTop() / 10;
        var height = screen.height;
        var pos = height - offset;
        $('.bg_scroll').css( 'background-position', '0px ' + pos + 'px' );
    });
});


//モーダルウィンドウ
$(function () {
	var id = "#openModal";
	var count = 0;
	do {
	  	$(String(id + count)).click(function(){
	  	    $('#modalArea').fadeIn();
	  	});
	  	 $(String(id + count)).click(function(){
	  	    $('#modalArea').fadeIn();
	  	});
	count++;
	} while (count < 10);
  	$('#closeModal , #modalBg').click(function(){
  	$('#modalArea').fadeOut();
  	});
});


// 各ページの共通部分を外部化
$(function(){
	$("#header").load("layouts/header.html");
});

