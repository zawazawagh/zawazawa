$(function() {
	$('.carousel').slick({
  		infinite: true,
  		slidesToShow: 2,
  		centerMode:true,
  		centerPadding: '40px',
  		dots:true,
  		variableWidth: true,
  		adaptiveHeight: true,
  		responsive: [
  		  {
  		    breakpoint: 768,
  		    settings: {
  		      arrows: false,
  		      centerMode: true,
  		      centerPadding: '40px',
  		      slidesToShow: 3
  		    }
  		  },
  		  {
  		    breakpoint: 480,
  		    settings: {
  		      arrows: false,
  		      centerMode: true,
  		      centerPadding: '40px',
  		      slidesToShow: 1
  		    }
  		  }
  		]
	});
});