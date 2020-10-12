jQuery(function($){
	"use script";

	if($('.home_slider').length){
		$('.home_slider').slick({
			vertical: true,
			arrows: false,
			dots: true,
		});
	}

	if($('.testimonials_carousel').length){
		$('.testimonials_carousel').slick({
			infinite: true,
			slidesToShow: 3,
  			slidesToScroll: 1,
  			asNavFor: '.testimonial_tab_box',
  			appendArrows: $('.testimonial_slider_box'),
  			prevArrow: "<div class=\"left_arrows\"><div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div></div>",
  			nextArrow: "<div class=\"right_arrows\"><div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div></div>",
  			responsive: [
			    {
			      breakpoint: 415,
			      settings: {
			      	slidesToShow: 1,
			        slidesToShow: 1
			      }
			    }
			]
		});
	}
	if($('.testimonial_tab_box').length){
		$('.testimonial_tab_box').slick({
			slidesToShow: 1,
  			slidesToScroll: 1,
  			asNavFor: '.testimonials_carousel',
  			arrows: false
		});
	}

		/*$('.testimonials_carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		  
		  var tabs_container = $('testimonial_tab_box');
		  tabs_container.find($('tab_item')).hide();
		  tabs_container.find($('tab_' + nextSlide)).show();
		});
*/
	
	if($('.tweet_slider .content_slider_twitter').length){
		$('.tweet_slider .content_slider_twitter').slick({
			vertical: true,
			appendArrows: $('.arrow'),
  			prevArrow: "<span class=\"up\"><i class=\"fas fa-arrow-up\"></i></span>",
  			nextArrow: "<span class=\"down\"><i class=\"fas fa-arrow-down\"></i></span>"
		});
	}
	
	if($('.list_products').length){
		$('.list_products').slick({
			infinite: true,
 	 		slidesToShow: 4,
  			slidesToScroll: 1,
  			appendArrows: $('.arrows'),
  			prevArrow: "<div class=\"left\"><i class=\"fas fa-arrow-left\"></i></div>",
  			nextArrow: "<div class=\"right\"><i class=\"fas fa-arrow-right\"></i></div>",
  			responsive: [
			    {
			      breakpoint: 415,
			      settings: {
			      	slidesToShow: 1,
			        slidesToShow: 1
			      }
			    },
			    {
			      breakpoint: 635,
			      settings: {
			      	slidesToShow: 1,
			        slidesToShow: 2
			      }
			    }
			  ]
		});
	}

	if($('.open_video').length){
	  	$('.open_video').magnificPopup({
	  		disableOn: 700,
	          type: 'iframe',
	          mainClass: 'mfp-fade',
	          removalDelay: 160,
	          preloader: false,
	          fixedContentPos: false
	  	});
	}

	if($('.testy_gallery').length){
	  	$('.testy_gallery').magnificPopup({
	  		 type: 'image',
	          closeOnContentClick: true,
	          mainClass: 'mfp-img-mobile',
	          image: {
	            verticalFit: true
	          }
       	});
	}

		if($('.fa-bars').length){
			$('.fa-bars').on('click', function(){
				$('.header_top .inner_header nav').show();
				$(this).hide();
				document.querySelector('.fa-times').style.display = 'block';
			});

			$('.fa-times').on('click', function(){
				$('.header_top .inner_header nav').hide();
				$(this).hide();
				$('.fa-bars').show();
			});
		}
});
