$(function($) {
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
	//   	$(String(id + String(count))).click(function(){
	//   	    $(String(modalid + String(count))).fadeIn();
	//   	});
	// 	count++;
	// 	console.log(String(modalid + count));
  //   console.log(String(id + count));
	// } while (count < 10);

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
  $('#openModal9').click(function(){
      $('#modalArea9').fadeIn();
  	});
  $('#openModal10').click(function(){
      $('#modalArea10').fadeIn();
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

//マウスのカーソルのクライアント座標を取得する
// $(function(){
//   //マウス移動時のイベントをBODYタグに登録する
//   document.body.addEventListener("mousemove", function(e){

//     //座標を取得する
//     var mX = e.pageX;  //X座標
//     var mY = e.pageY;  //Y座標



//     //座標を表示する
//     document.getElementById("txtX").value = mX;
//     document.getElementById("txtY").value = mY;
//   });
// });


// エロギミック用のjs
$(function () {
    $('button').click(function () {
        $('#ero').fadeToggle();
    });
});

//サイドメニュー用ページ内遷移
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^="#"]').click(function() {
      // スクロールの速度
      var speed = 100; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      console.log(position);
      // スムーススクロール
      $('body,html').animate({scrollTop:position - 50}, speed, 'swing');
      return false;
   });
});
