$(function() {
//slider news
	$('.slider-news').slick({
	  dots: false,
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  adaptiveHeight: false,
	  fade: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
//slider factory
	$('.slider-factory').slick({
	  dots: false,
	  infinite: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  adaptiveHeight: false,
	  fade: false,
  responsive: [
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
	  }
      },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
		infinite: true,
        slidesToScroll: 1
      }
    }
  ]
});

//slider gallery
	$('.slider-gal').slick({
	  dots: false,
	  infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  adaptiveHeight: true,
	  fade: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
		infinite: true,
        slidesToScroll: 1
      }
    }
  ]
});	
	
//panel search
	$('.but-search a').click(function(){
		$('.panel-search').fadeIn()
		return false;
	});
	
	$('.close-search').click(function(){
		$('.panel-search').fadeOut()
	});
	
//fields form
	$('.field input, .field textarea').focus(function() {
	  $(this).prev('label').hide();       
	});
	
	$('.field input, .field textarea').blur(function(){
		if( !$(this).val() ) {
			$(this).prev('label').show();
		}
		if($(this).val() ) {
			$(this).addClass('active').next('.clear-field').show();
		}
	});
	
	$('.field input, .field textarea').each(function(){
		if($(this).val() ) {
			$(this).addClass('active').next('.clear-field').show();
			$(this).prev('label').hide();
		}
	});
	
	$('.clear-field').click(function(){
        $(this).hide().prev('input').val('').removeClass('active').prev('label').show();
    });
	
//ask-answer
	$('.head-ask').click(function(){
		$(this).toggleClass('active').next().toggle();
	});
	
//comments
	$('.comments-view a').click(function(){
		$(this).parent().toggleClass('active').parent().next('.block-com-view').toggle()
		return false;
	});

//select
	$('.select-f select, .select-type select').selectbox();
	
//contacts
	$('.contacts-company ul li span').click(function(){
		$(this).toggleClass('active');
	});
	
//nav card
	$('#nav').onePageNav();
	
	if($('.floating').length){
		var topPos = $('.floating').offset().top;
		$(window).scroll(function() {
			var top = $(document).scrollTop();
			if (top > topPos) $('.floating').addClass('fixed');
			else $('.floating').removeClass('fixed');
		});
	};	
	
//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.tab-tb').hide();
		$(this).find('.tab-tb:eq(0)').show();
		$(this).find('.nav-tabs-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tabs-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tabs-tb').find('.tab-tb:eq(' + ind + ')').show().siblings('.tab-tb:visible').hide();
			$(this).addClass('active');
			$(this).siblings('.nav-tabs-tb li').removeClass('active')
			return false;
		});
	});
	
//menu
	$('.but-menu').click(function(){
		$(this).toggleClass('active');
		$('.menu-top').toggle()
		return false;
	});
	
	$(document).click(function(event) {
	    if ($(event.target).closest('header').length) return;
	    $('.menu-top').hide();
		$('.but-menu').removeClass('active');
	    event.stopPropagation();
	});	
	
//arrow slider
	function arrow(){
		setTimeout(function(){
			var img_h = $('.slider-news .img-news').height();
			$('.slider-news .slick-next, .slider-news .slick-prev').css({top:img_h/2});
			var img_h2 = $('.slider-factory .img-fc').height();
			$('.slider-factory .slick-next, .slider-factory .slick-prev').css({top:img_h2/2});
		}, 500);	
	}
	$(window).resize(function() {
		arrow();
	});
	arrow();
	
//more folders
	$('.more-foleders').click(function(){
		$(this).toggleClass('active').prev().find('ul:not(:nth-child(1))').toggle();
	});
	
//choice param
	$('.choice-param').click(function(){
		$(this).next('.block-choice').toggle();
	});
});

