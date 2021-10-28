$(function() {	
//main slider
	$('.slider-mn').slick({
	  dots: true,
	  infinite: true,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  fade: true
	});
	
//switch lang
	$('.head-lang').click(function(){
		$(this).next().toggle();
	});	
	
	$(document).click(function(event) {
	    if ($(event.target).closest('.lang-f').length) return;
	    $('.drop-lang').hide();
	    event.stopPropagation();
	});	
	
//search
	$('.search-head a').click(function(){
		$('.wr-search').fadeIn(500)
		return false;
	})
	
	$('.close-search').click(function(){
		$('.wr-search').fadeOut(500)
	})
	
//tabs
	$('.tabs-tb').each(function(){
		$(this).find('.tab-tb').hide();
		$(this).find('.tab-tb:eq(0)').show();
		$(this).find('.nav-tb div:eq(0), .nav-tb li:eq(0)').addClass('active');
		$(this).find('.nav-tb div, .nav-tb li').click(function () {
			var ind = $(this).index();
			$(this).parents('.tabs-tb').find('.cont-tb').find('.tab-tb:eq(' + ind + ')').show().siblings('.tab-tb:visible').hide();
			$(this).addClass('active');
			$(this).siblings('.nav-tb div, .nav-tb li').removeClass('active')
			return false;
		});
	});
	
//panel action
	$('.close-p').click(function(){
		$(this).parents('.wr-panel-action').hide()
	});
	
/*select*/
	$('.rat-serv select, .sel-serv select, .select-avail select').selectbox();
	
//checkbox filter
	$('.head-check span').click(function(){
		$(this).parent().next().toggle();
	});	
	
//table choice
	function table(){
		setTimeout(function(){
		$('.block-choice table tr').each(function(){
			var tr = $(this).height();
			$(this).find('.headcol').css({height:tr})
		})
		}, 100);
	}	
	table();
	
//gallery card
	$('.main-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.thumb-img'
	});
	
	$('.thumb-img').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.main-img',
		dots: false,
		arrows: false,
		focusOnSelect: true
	});
	
	function galCard(){
		if($('.thumb-img').length){
			var slideActive = $('.thumb-img .slick-active').length;
			var numGal = $('.thumb-img .item-mn-slide:not(".slick-cloned")').length;
			if(numGal<=slideActive){
				$('.thumb-img').addClass('no-transform')
			} else {
				$('.thumb-img').removeClass('no-transform')
			}
		}
	};
	
	function text(){
		$('.benef-text').each(function(){
			var h_text = $(this).height();
			if(h_text>75){
				$(this).addClass('hide-text')
			}
		})
	}
	text();
	
	$('.more-text a').click(function(){
		$(this).parent().hide().prev().removeClass('hide-text')
		return false;
	});	
	
	$(window).on('resize', function(){
		galCard();	
		table();
		text();
	});
	
	galCard();
	
//slider service
	$('.slider-int').slick({
		infinite: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		arrows:true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 6
      }
    },
    {
      breakpoint: 999,
      settings: "unslick"
    }
  ]
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
	
//rating
	$(".rating_simple1").webwidget_rating_simple({
		rating_star_length: '5',
		rating_initial_value: '0',
		rating_function_name: '',
		directory: 'images'
	});

//accord	
	$('.head-accord').click(function(){
		$(this).toggleClass('active').next().toggle();
	});	
	
	$('.head-accord-pl').click(function(){
		$(this).toggleClass('active').next().toggle();
	});

//menu mobile
	$('.close-menu').click(function(){
		$(this).parents('.panel-menu-mobile').fadeOut();
	});
	$('.but-menu-mobile').click(function(){
		$('.panel-menu-mobile').fadeIn();
	});		
	
//rubric mobile
	$('.favorite-cetegory .more-mobile').click(function(){
		$(this).hide().parents('.favorite-cetegory').find('ul li').show();
	});		
	
	$('.main-news .more-mobile').click(function(){
		$(this).hide().parents('.main-news').find('.item-news').show();
	});
	
//scroll
	$('.scroll').click(function(event){
		$('#filters').toggle();
		event.preventDefault();
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 15;
		$('html, body').animate({scrollTop:target_top}, 1000);
		
	});
	
//favorite
	$('.but-fav-serv a').click(function(){
		$(this).toggleClass('active')
		return false;
	});	

});