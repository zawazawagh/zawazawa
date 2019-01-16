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
	var modalid = "#modalArea";
	var count = 0;

	// do {
	//   	$(String(id + count)).click(function(){
	//   	    $(String(modalid + count)).fadeIn();
	//   	});
	// 	count++;
	// 	console.log(modalid + count);
	// } while (count < 8);

	$('#openModal1').click(function(){
	    $('#modalArea1').fadeIn();
  	});
	$('#openModal2').click(function(){
	    $('#modalArea2').fadeIn();
  	});
	$('#openModal3').click(function(){
	    $('#modalArea3').fadeIn();
  	});
	$('#openModal4').click(function(){
	    $('#modalArea4').fadeIn();
  	});
	$('#openModal5').click(function(){
	    $('#modalArea5').fadeIn();
  	});
	$('#openModal6').click(function(){
	    $('#modalArea6').fadeIn();
  	});
	$('#openModal7').click(function(){
	    $('#modalArea7').fadeIn();
  	});
	$('#openModal8').click(function(){
	    $('#modalArea8').fadeIn();
  	});

  	$('#closeModal , #modalBg').click(function(){
  	$('.modalArea').fadeOut();
  	});
});


// 各ページの共通部分を外部化
$(function(){
	$("#header").load("layouts/header.html");
	$("#modals").load("layouts/modals.html", function() {
		$('#closeModal , #modalBg').click(function(){
  		$('.modalArea').fadeOut();
  		});
	});
});

