jQuery(document).ready(function($){
	"use strict";
	
	/*================================================
			Progress Bar bootstrap
	=================================================*/
	$('.causes_slider-nav li a').click(function(event) {
		event.preventDefault();
	});
	
	if($(".dropdown").length){
		$(".dropdown").chosen()
	}
	/* ---------------------------------------------------------------------- */
	/*	Slide Menu
	/* ---------------------------------------------------------------------- */
	if($('#c-button--slide-left').length){
		var slideLeft = new Menu({
			wrapper: '.body-wrapper',
			type: 'slide-left',
			menuOpenerClass: '.c-button',
			maskId: '#c-mask'
		});
		var slideLeftBtn = document.querySelector('#c-button--slide-left');
			slideLeftBtn.addEventListener('click', function(e) {
			e.preventDefault;
			slideLeft.open();
		});
	}
	
	/*==================================================
					Side Bar right
	===================================================*/

	// function side_close() {
	  // document.getElementById("side-margin").style.marginRight = "0";
	  // document.getElementById("mySidenav").style.width = "0";
	  // document.getElementById("mySidenav").style.visibility = "hidden";
	// }
	
	// function side_open() {
	  // document.getElementById("side-margin").style.marginRight = "420px";
	  // document.getElementById("mySidenav").style.width = "420px";
	  // document.getElementById("mySidenav").style.visibility = "visible";
	// }
	
	$('#right-sidebar-close').on('click',function(){
		$("#side-margin").css("margin-right", "0");
		$("#mySidenav").css("width", "0");
		$("#mySidenav").css("visibility", "hidden");
	});
	
	$('#right-sidenav').on('click',function(){
		$("#side-margin").css("margin-right", "420px");
		$("#mySidenav").css("width", "420px");
		$("#mySidenav").css("visibility", "visible");
	});

	/*==============================================================
		slick  Script Start
	==============================================================
	*/
	if($(".slider-for").length){
		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav',
			 responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
	}
	if($(".slider-nav").length){	
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  loop:true,
		  dots:true,
		  arrows: false,
		  asNavFor: '.slider-for',
		  centerMode: true,
		  focusOnSelect: true,
		   responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 3
			  }
			}
		  ]
		});
	}
	
	/* ---------------------------------------------------------------------- */
	/*	Range Slider
	/* ---------------------------------------------------------------------- */
	if($(".range").length){
		$(".range").slider();
		$(".range").on("slide", function(slideEvt) {
			$(".range-slider").text(slideEvt.value);
		});
	}

	/* ---------------------------------------------------------------------- */
	/*	Range Slider
	/* ---------------------------------------------------------------------- */
	if($(".range2").length){
		$(".range2").slider();
		$(".range2").on("slide", function(slideEvt) {
			$(".range-slider2").text(slideEvt.value);
		});
	}
	
	if($('.chosen-select').length){
		$('.chosen-select').chosen();
	}
	
	// runs nivo slider function
	$.fn.disaster_relief_slickslider_campaign_single = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					centerMode: true,
					fade: true,
					dots: true,
					asNavFor: '.causes_slider-nav'
				};
				$(this).slick(slick_attr);	
			});	
		}
	}	
	$.fn.disaster_relief_slickslider_campaign_single_nav = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: 5,
					slidesToScroll: 1,
					asNavFor: '.causes_slider-full',
					dots: false,
					vertical: false,
					centerMode: true,
					focusOnSelect: true,
					arrows: false,
					autoplay: false
				};
				$(this).slick(slick_attr);	
			});	
		}
	}		
	
		// runs nivo slider function
	$.fn.disaster_relief_slickslider_campaign = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					dots: true,
					asNavFor: '.slider-nav2'
				};
				$(this).slick(slick_attr);	
			});	
		}
	}
	
			// runs nivo slider function
	$.fn.disaster_relief_slickslider_latest_campaign = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					fade: true,
				};
				$(this).slick(slick_attr);	
			});	
		}
	}
	
	// runs nivo slider function
	$.fn.disaster_relief_slickslider_clients = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000,
					slidesToShow: 4,
					arrows: true,
					slidesToScroll: 1,
					responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false
						  }
						}
					]
				};
				$(this).slick(slick_attr);	
			});	
		}
	}	

	// runs nivo slider function
	$.fn.disaster_relief_slickslider_campaign_thumbs = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: '.slider-for2',
					dots: false,
					vertical: false,
					centerMode: true,
					focusOnSelect: true,
					arrows: false,
					autoplay: false,
					responsive: [
					{
					  breakpoint: 1024,
					  settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
						infinite: true,
						dots: true
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					  }
					},
					{
					  breakpoint: 480,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					  }
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
				};
				$(this).slick(slick_attr);	
			});	
		}
	}
	
	// runs nivo slider function
	$.fn.disaster_relief_slickslider_testimonial_grid = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){			
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: option,
					slidesToScroll: 1,
					arrows: false,
					dots: false,
					infinite: true,
					responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							infinite: true,
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
					]
				};
				$(this).slick(slick_attr);	
			});	
		}
	}	
	// runs nivo slider function
	$.fn.disaster_relief_slickslider_sponsers = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				var option;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}				
				var slick_attr = {
					slidesToShow: 5,
					slidesToScroll: 5,
					dots: true,
					arrows: false,
					responsive: [
						{
						  breakpoint: 1024,
						  settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
							infinite: true,
							dots: true
						  }
						},
						{
						  breakpoint: 600,
						  settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						  }
						},
						{
						  breakpoint: 480,
						  settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						  }
						}
						// You can unslick at a given breakpoint now by adding:
						// settings: "unslick"
						// instead of a settings object
					]
				};
				$(this).slick(slick_attr);	
			});	
		}
	}	
	
	// runs countdown function
	$.fn.disaster_relief_slickslider = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				
				
				
				$(this).not('.slick-initialized').slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					fade: true,
					asNavFor: '.slider-nav'
				});		
				
			});	
		}
	}	
	
	// runs countdown function
	$.fn.disaster_relief_slickslider_pager = function(){
		if(typeof($.fn.slick) == 'function'){
			$(this).each(function(){
				
				
				$(this).not('.slick-initialized').slick({
					slidesToShow: 6,
					slidesToScroll: 6,
					asNavFor: '.slick_slider',
					dots: false,
					centerMode: true,
					focusOnSelect: true,
					autoplay: false,
				});		
				
			});	
		}
	}	
	
	// runs countdown function
	$.fn.disaster_relief_countdown = function(){
		if(typeof($.fn.countdown) == 'function'){
			$(this).each(function(){
				var austDay = new Date();
				var data_year;
				var data_month;
				var data_day;
				var data_time;
				var current_day;
				
				// data-year duration
				if( $(this).attr('data-year') ){
					data_year = parseInt($(this).attr('data-year'));
				}
				//Month
				if( $(this).attr('data-month') ){
					data_month = parseInt($(this).attr('data-month'));
				}
				//day
				if( $(this).attr('data-day') ){
					data_day = parseInt($(this).attr('data-day'));
				}
				//time
				if( $(this).attr('data-time') ){
					data_time = parseInt($(this).attr('data-time'));
				}
						
				current_day = new Date(data_year, data_month-1, data_day,data_time);
				$(this).countdown({until: current_day});	
				jQuery('#year').text(current_day.getFullYear());
			});	
		}
	}	
	
	// runs countdown function
	$.fn.disaster_relief_countdown_timmer = function(){
		if(typeof($.fn.downCount) == 'function'){
			$(this).each(function(){
				var austDay = new Date();
				var data_year;
				var data_month;
				var data_day;
				var data_time;
				var current_day;
				
				// data-year duration
				if( $(this).attr('data-year') ){
					data_year = parseInt($(this).attr('data-year'));
				}
				//Month
				if( $(this).attr('data-month') ){
					data_month = parseInt($(this).attr('data-month'));
				}
				//day
				if( $(this).attr('data-day') ){
					data_day = parseInt($(this).attr('data-day'));
				}
				//time
				if( $(this).attr('data-time') ){
					data_time = parseInt($(this).attr('data-time'));
				}
				
				var current_day = new Date(data_year, data_month-1, data_day,data_time);
				
				$(this).downCount({ date: current_day, offset: +1 });
				
			});	
		}
	}
	
	/* ---------------------------------------------------------------------- */
	/*	Bx Slider 
	/* ---------------------------------------------------------------------- */
	if($(".bxslider2").length){
		$('.bxslider2').bxSlider({
			auto:true
			
		});
	}
	
	/* ---------------------------------------------------------------------- */
	/*	Bx Slider Thumbnail
	/* ---------------------------------------------------------------------- */
	if($(".bxslider-thums").length){
		$('.bxslider-thums').bxSlider({
		  auto:true,
		  pagerCustom: '#bx-pager'
		});
	}

	// runs bx slider function
	$.fn.disaster_relief_bxslider = function(){
		if(typeof($.fn.bxSlider) == 'function'){
			$(this).each(function(){
				var bx_attr = {
					mode: 'slide',
					auto: true,
					speed: 500,
					slideMargin:20,
					infiniteLoop: true,
					pager: false,
					controls: true,
					
				};
				
				// slide duration
				if( $(this).attr('data-pausetime') ){
					bx_attr.pause = parseInt($(this).attr('data-pausetime'));
				}
				if( $(this).attr('data-slidespeed') ){
					bx_attr.speed = parseInt($(this).attr('data-slidespeed'));
				}
				if( $(this).attr('data-mode') ){
					bx_attr.mode = $(this).attr('data-mode');
				}
				if( $(this).attr('data-min') ){
					bx_attr.minSlides = $(this).attr('data-min');
				}
				if( $(this).attr('data-width') ){
					bx_attr.slideWidth = $(this).attr('data-width');
				}
				if( $(this).attr('data-max') ){
					bx_attr.maxSlides = $(this).attr('data-max');
				}
				if( $(this).attr('data-margin') ){
					bx_attr.slideMargin = $(this).attr('data-margin');
				}
				if( $(this).attr('data-move') ){
					bx_attr.moveSlides = $(this).attr('data-move');
				}
				if( $(this).attr('data-auto') ){
					bx_attr.auto = $(this).attr('data-auto');
				}
				if( $(this).attr('data-ticker') ){
					bx_attr.ticker = false;
				}
				if( $(this).attr('data-tickerHover') ){
					bx_attr.tickerHover = $(this).attr('data-tickerHover');
				}
				$(this).bxSlider(bx_attr);	
			});				
			
			$(".bx-controls-direction .bx-prev").empty();
			$(".bx-controls-direction .bx-next").empty();
			$(".bx-controls-direction .bx-next").append('<i class="fa fa-angle-right"></i>');
			$(".bx-controls-direction .bx-prev").append('<i class="fa fa-angle-left"></i>');
			
		}
	}
	
	// runs bx slider function
	$.fn.disaster_relief_bxslider_pager = function(){
		if(typeof($.fn.bxSlider) == 'function'){
			$(this).each(function(){
				var bx_attr = {
					mode: 'slide',
					auto: true,
					speed: 500,
					slideMargin:20,
					infiniteLoop: true,
					pager: true,
					controls: true,
					
					 pagerCustom: '#kode-bxslider-nav',
				};
				
				$(this).bxSlider({pagerCustom: '#kode-bxslider-nav'});	
			});				
		}
	}
	
	if($(".d-relf-gallary-slider").length){
		$('.d-relf-gallary-slider').slick({
		   dots: true,
		  autoplay: true,
		  arrows: false,
		  autoplaySpeed: 2000,
		  slidesToShow: 4,
		  slidesToScroll: 1,
			 responsive: [
			{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
		});
	}
	
	// Testimonial Slider
	
	if($(".testimonial-slider").length){
		$('.testimonial-slider').slick({
			slidesToShow: 3,
			dots: true,
			arrows: false,
			responsive: [
				{
					breakpoint: 1680,
					settings: {
						arrows: false,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						arrows: false,
						slidesToShow: 1
					}
				}
			]	
		});
	}
	
	// runs bx slider function
	$.fn.disaster_relief_bxslider_no_awesome = function(){
		if(typeof($.fn.bxSlider) == 'function'){
			$(this).each(function(){
				var bx_attr = {
					mode: 'slide',
					auto: true,
					speed: 500,
					slideMargin:20,
					infiniteLoop: true,
					pager: false,
					controls: true,
					
				};
				
				// slide duration
				if( $(this).attr('data-pausetime') ){
					bx_attr.pause = parseInt($(this).attr('data-pausetime'));
				}
				if( $(this).attr('data-slidespeed') ){
					bx_attr.speed = parseInt($(this).attr('data-slidespeed'));
				}
				if( $(this).attr('data-mode') ){
					bx_attr.mode = $(this).attr('data-mode');
				}
				if( $(this).attr('data-min') ){
					bx_attr.minSlides = $(this).attr('data-min');
				}
				if( $(this).attr('data-width') ){
					bx_attr.slideWidth = $(this).attr('data-width');
				}
				if( $(this).attr('data-max') ){
					bx_attr.maxSlides = $(this).attr('data-max');
				}
				if( $(this).attr('data-margin') ){
					bx_attr.slideMargin = $(this).attr('data-margin');
				}
				if( $(this).attr('data-move') ){
					bx_attr.moveSlides = $(this).attr('data-move');
				}
				if( $(this).attr('data-auto') ){
					bx_attr.auto = $(this).attr('data-auto');
				}
				if( $(this).attr('data-ticker') ){
					bx_attr.ticker = false;
				}
				if( $(this).attr('data-tickerHover') ){
					bx_attr.tickerHover = $(this).attr('data-tickerHover');
				}
				$(this).bxSlider(bx_attr);	
			});				
			
			$(".bx-controls-direction .bx-prev").empty();
			$(".bx-controls-direction .bx-next").empty();
			
		}
	}	
	if($(".event_for").length){
		$('.event_for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.event_nav',
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
	}
	if($(".event_nav").length){
		$('.event_nav').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  arrows: false,
		  asNavFor: '.event_for',
		  focusOnSelect: true,
			responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
		});
	}	

	/*
	  =======================================================================
				Navigation
	  =======================================================================
	*/
	
	if($('.kode-navigation-sticky').length){
		// grab the initial top offset of the navigation 		
		var stickyNavTop = $('.kode-navigation-sticky').offset().top;
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scrollTop > stickyNavTop) { 
				$('.kode-navigation-sticky').addClass('kf_sticky');
			} else {
				$('.kode-navigation-sticky').removeClass('kf_sticky'); 
			}
		};
		stickyNav();
		// and run it again every time you scroll
		$(window).scroll(function() {
			stickyNav();
		});
	
	}
	
	if($('.d-relf-header-1').length){
		// grab the initial top offset of the navigation 		
		var stickyNavTop = $('.d-relf-header-1').offset().top;
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var stickyNav = function(){
			var scrollTop = $(window).scrollTop(); // our current vertical position from the top
			// if we've scrolled more than the navigation, change its position to fixed to stick to top,
			// otherwise change it back to relative
			if (scrollTop > stickyNavTop) { 
				$('.donatenow-sidebtn').addClass('kode-btn-visible');
			} else {
				$('.donatenow-sidebtn').removeClass('kode-btn-visible'); 
			}
		};
		stickyNav();
		// and run it again every time you scroll
		$(window).scroll(function() {
			stickyNav();
		});
	
	}
	
	
	
	
	if($('.nav_one_page').length){
		$('.navigation .menu').singlePageNav({
			offset: 60,
			filter: ':not(li.external a)',
			updateHash: true,
			beforeStart: function() {
				console.log('begin scrolling');
			},
			onComplete: function() {
				console.log('done scrolling');
			}
		});
	}
	
	
	//Click event to scroll to top
	$('.kode-back-top').on('click',function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
	// script for parallax background
	$('.kode-parallax-wrapper').each(function(){
		if( $(this).hasClass('kode-background-image') ){
			var parallax_section = $(this);
			var parallax_speed = parseFloat(parallax_section.attr('data-bgspeed'));
			if( parallax_speed == 0 || disaster_relief_touch_device ) return;
			if( parallax_speed == -1 ){
				parallax_section.css('background-attachment', 'fixed');
				parallax_section.css('background-position', 'center center');
				return;
			}
				
			$(window).scroll(function(){
				// if in area of interest
				if( ( $(window).scrollTop() + $(window).height() > parallax_section.offset().top ) &&
					( $(window).scrollTop() < parallax_section.offset().top + parallax_section.outerHeight() ) ){
					
					var scroll_pos = 0;
					if( $(window).height() > parallax_section.offset().top ){
						scroll_pos = $(window).scrollTop();
					}else{
						scroll_pos = $(window).scrollTop() + $(window).height() - parallax_section.offset().top;
					}
					parallax_section.css('background-position', 'center ' + (-scroll_pos * parallax_speed) + 'px');
				}
			});			
		}else if( $(this).hasClass('kode-background-video') ){
			if(typeof($.fn.mb_YTPlayer) == 'function'){
				$(this).children('.kode-bg-player').mb_YTPlayer();
			}
		}else{
			return;
		}
	});
	
	// responsive menu
	if(typeof($.fn.dlmenu) == 'function'){
		$('#kode-responsive-navigation').each(function(){
			$(this).find('.dl-submenu').each(function(){
				if( $(this).siblings('a').attr('href') && $(this).siblings('a').attr('href') != '#' ){
					var parent_nav = $('<li class="menu-item kode-parent-menu"></li>');
					parent_nav.append($(this).siblings('a').clone());
					
					$(this).prepend(parent_nav);
				}
			});
			$(this).dlmenu();
		});
	}	
	
	// gallery thumbnail type
	$('.kode-gallery-thumbnail').each(function(){
		var thumbnail_container = $(this).children('.kode-gallery-thumbnail-container');
	
		$(this).find('.gallery-item').on('click',function(){
			var selected_slide = thumbnail_container.children('[data-id="' + $(this).attr('data-id') + '"]');
			if(selected_slide.css('display') == 'block') return false;
		
			// check the gallery height
			var image_width = selected_slide.children('img').attr('width');
			var image_ratio = selected_slide.children('img').attr('height') / image_width;
			var temp_height = image_ratio * Math.min(thumbnail_container.width(), image_width);
			
			thumbnail_container.animate({'height': temp_height});
			selected_slide.fadeIn().siblings().hide();
			return false;
		});		

		$(window).resize(function(){ thumbnail_container.css('height', 'auto') });
	});	

	/* ---------------------------------------------------------------------- */
	/*	Carousel
	/* ---------------------------------------------------------------------- */
	
	$.fn.disaster_relief_owl_carousel = function(){
		if(typeof($.fn.owlCarousel) == 'function'){
			$(this).each(function(){
				var option,
				data_small,
				data_margin,
				data_medium;
				
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}
				if($(this).attr('data-small-slide')){
					data_small = $(this).attr('data-small-slide');
				}
				if($(this).attr('data-medium-slide')){
					data_medium = $(this).attr('data-medium-slide');
				}
				if($(this).attr('data-margin')){
					data_margin = $(this).attr('data-margin');
				}
				var owl_attr = {
					autoPlay: 3000, //Set AutoPlay to 3 seconds
					margin:30,
					
					responsive:{
						0:{
							items:data_small
						},
						600:{
							items:data_small
						},
						1000:{
							items:data_medium
						},
						1500:{
							items:option
						}
						
					}
				};
				$(this).owlCarousel(owl_attr);	
			});	
		}
	}
	
	/* ---------------------------------------------------------------------- */
	/*	Carousel
	/* ---------------------------------------------------------------------- */
	$.fn.disaster_relief_owl_carousel_no_space = function(){
		if(typeof($.fn.owlCarousel) == 'function'){
			$(this).each(function(){
				var option;
				var data_small;
				var data_margin;
				if($(this).attr('data-slide')){
					option = $(this).attr('data-slide');
				}
				if($(this).attr('data-small-slide')){
					data_small = $(this).attr('data-small-slide');
				}
				if($(this).attr('data-margin')){
					data_margin = $(this).attr('data-margin');
				}
				var nice_attr = {
					autoPlay: 3000, //Set AutoPlay to 3 seconds
					responsive:{
						0:{
							items:1
						},
						600:{
							items:data_small
						},
						1000:{
							items:option
						}
					}
				};				
				$(this).owlCarousel(nice_attr);	
			});	
		}
	}
	
	// runs flex slider function
	$.fn.disaster_relief_flexslider = function(){
		if(typeof($.fn.flexslider) == 'function'){
			$(this).each(function(){
				var flex_attr = {
					animation: 'fade',
					animationLoop: true,
					prevText: '<i class="fa fa-angle-left" ></i>', 
					nextText: '<i class="fa fa-angle-right" ></i>',
					useCSS: false
				};
				
				// slide duration
				if( $(this).attr('data-pausetime') ){
					flex_attr.slideshowSpeed = parseInt($(this).attr('data-pausetime'));
				}
				if( $(this).attr('data-slidespeed') ){
					flex_attr.animationSpeed = parseInt($(this).attr('data-slidespeed'));
				}

				// set the attribute for carousel type
				if( $(this).attr('data-type') == 'carousel' ){
					flex_attr.move = 1;
					flex_attr.animation = 'slide';
					
					if( $(this).closest('.kode-item-no-space').length > 0 ){
						flex_attr.itemWidth = $(this).width() / parseInt($(this).attr('data-columns'));
						flex_attr.itemMargin = 0;							
					}else{
						flex_attr.itemWidth = (($(this).width() + 30) / parseInt($(this).attr('data-columns'))) - 30;
						flex_attr.itemMargin = 30;	
					}		
					
					// if( $(this).attr('data-columns') == "1" ){ flex_attr.smoothHeight = true; }
				}else{
					if( $(this).attr('data-effect') ){
						flex_attr.animation = $(this).attr('data-effect');
					}
				}
				if( $(this).attr('data-columns') ){
					flex_attr.minItems = parseInt($(this).attr('data-columns'));
					flex_attr.maxItems = parseInt($(this).attr('data-columns'));	
				}				
				
				// set the navigation to different area
				if( $(this).attr('data-nav-container') ){
					var flex_parent = $(this).parents('.' + $(this).attr('data-nav-container')).prev('.kode-nav-container');
					
					if( flex_parent.find('.kode-flex-prev').length > 0 || flex_parent.find('.kode-flex-next').length > 0 ){
						flex_attr.controlNav = false;
						flex_attr.directionNav = false;
						flex_attr.start = function(slider){
							flex_parent.find('.kode-flex-next').on('click',function(){
								slider.flexAnimate(slider.getTarget("next"), true);
							});
							flex_parent.find('.kode-flex-prev').on('click',function(){
								slider.flexAnimate(slider.getTarget("prev"), true);
							});
							
							disaster_relief_set_item_outer_nav();
							$(window).resize(function(){ disaster_relief_set_item_outer_nav(); });
						}
					}else{
						flex_attr.controlNav = false;
						flex_attr.controlsContainer = flex_parent.find('.nav-container');	
					}
					
				}

				$(this).flexslider(flex_attr);	
			});	
		}
	}
	
	// runs nivo slider function
	$.fn.disaster_relief_nivoslider = function(){
		if(typeof($.fn.nivoSlider) == 'function'){
			$(this).each(function(){
				var nivo_attr = {};
				
				if( $(this).attr('data-pausetime') ){
					nivo_attr.pauseTime = parseInt($(this).attr('data-pausetime'));
				}
				if( $(this).attr('data-slidespeed') ){
					nivo_attr.animSpeed = parseInt($(this).attr('data-slidespeed'));
				}
				if( $(this).attr('data-effect') ){
					nivo_attr.effect = $(this).attr('data-effect');
				}

				$(this).nivoSlider(nivo_attr);	
			});	
		}
	}
	
	$('.nivoSlider').disaster_relief_nivoslider();		
	$('.flexslider').disaster_relief_flexslider();
	$('.bxslider').disaster_relief_bxslider();
	$('.bxslider_no').disaster_relief_bxslider_no_awesome();
	$('.owl-carousel').disaster_relief_owl_carousel();
	$('.owl-no-space').disaster_relief_owl_carousel_no_space();
	$('.slider-for2').disaster_relief_slickslider_campaign();
	$('.slider-nav2').disaster_relief_slickslider_campaign_thumbs();
	$('.causes_slider-full').disaster_relief_slickslider_campaign_single();
	$('.causes_slider-nav').disaster_relief_slickslider_campaign_single_nav();
	$('.countdown').disaster_relief_countdown();
	$('.campaing-slider').disaster_relief_slickslider_latest_campaign();
	$('.downcount').disaster_relief_countdown_timmer();
	$('.event-sponsers').disaster_relief_slickslider_sponsers();	
	$('.slick_slider').disaster_relief_slickslider();
	$('.brand-slider').disaster_relief_slickslider_clients();	
	$('.slider-nav').disaster_relief_slickslider_pager();
	$('.kode-bxslider-pager').disaster_relief_bxslider_pager();
	$('.childcare_testimonial_slider').disaster_relief_slickslider_testimonial_grid();
	
	
	$(window).on('load',function() {
		$("#kode-loader-wrapper").fadeOut(500);
		$("body").removeClass('kode-loader');
	});
	
	$(".progress-bar").each(function(){
	 var each_bar_width = '';
	 each_bar_width = $(this).attr('aria-valuenow');
	  $(this).width(each_bar_width + '%');
	});
	
	$.fn.disaster_relief_show_tooltip = function(){
	  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
	}
		
	$('.progress-bar').disaster_relief_show_tooltip();
	
	/*
	==============================================================
	   Progress Bar Script Start
	============================================================== */  
  	if($(".progressbar").length){
	  	$('.progressbar').each(function(){
			var t = $(this),
				dataperc = t.attr('data-perc'),
				barperc = Math.round(dataperc*3.90);
			t.find('.bar').animate({width:barperc}, dataperc*50);
			t.find('.label').append('<div class="perc"></div>');
			
			function perc() {
				var length = t.find('.bar').css('width'),
					perc = Math.round(parseInt(length)/3.90),
					labelpos = (parseInt(length)-2);
				t.find('.label').css('left', labelpos);
				t.find('.perc').text(perc+'%');
			}
			perc();
			setInterval(perc, 0); 
		});
	}
	
	// paypal form
	jQuery('#user-payment-submit').each(function(){
		var kodehotel_form = jQuery(this);
		
		jQuery(this).find('#user-submit-form').click(function(){
		
			var valid = true; 
			var paypal_redirect = false;
			var stripe_redirect = false;
			var paymill_redirect = false;
			var auth_redirect = false;
			var current = jQuery(this);
			
			jQuery('.kode-radio-label-wrap  input[type="radio"]:checked').each(function(){
				var action = $(this).parent().find('.radio_item').attr('data-value');

				current.siblings('.action').attr('value', action);

			});

			paypal_redirect = true;
			
			
			// check require fields
			kodehotel_form.find('.kode-require').each(function(){
				if( valid && jQuery(this).val() == '' ){
					kodehotel_form.children().children('.kode-notice.require-field').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});
			
			// check email
			kodehotel_form.find('.kode-email').each(function(){
				var re = /\S+@\S+/;
				if( valid && !re.test(jQuery(this).val()) ){
					kodehotel_form.children().children('.kode-notice.email-invalid').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});	

			if( valid ){
				kodehotel_form.children().find('.kode-notice').slideUp(200);
				kodehotel_form.children().find('.kode-profile-loader').slideDown(200);
				
				var ajax_url = kodehotel_form.attr('data-ajax');
				jQuery.ajax({
					type: 'POST',
					url: ajax_url,
					data: kodehotel_form.serialize(),
					dataType: 'json',
					error: function(a, b, c){
						console.log(a, b, c);
					},
					success: function(data){
						kodehotel_form.children().find('.kode-notice.alert-message')
							.html(data.message).slideDown(200).addClass('kode-' + data.status);
						kodehotel_form.children().find('.kode-profile-loader').slideUp(200);
						
						if( data.status == 'success' && paypal_redirect ){
							
							kodehotel_form.children().children('[name="user"]').val(data.user);
							kodehotel_form[0].submit();
							
						}else{
							if( data.log ){
								console.log(data.log);
							}
						}
					}
				});					
			}
		});
	});
	
	// paypal form
	jQuery('.kode-custom-pay-form').each(function(){
		var kodehotel_form = jQuery(this);
		
		$('.kode-custom-pay-form').trigger("reset");
		jQuery(this).find('.user-custom-pay-form').click(function(){
			
			var valid = true; 
			var paypal_redirect = false;
			var stripe_redirect = false;
			var paymill_redirect = false;
			var auth_redirect = false;
			var current = jQuery(this);
			
			jQuery('.kode-radio-label-wrap input[type="radio"]:checked').each(function(){
				var action = $(this).parent().find('.radio_item').attr('data-value');
				var action_url = $(this).parent().find('.radio_item').attr('data-url');
			
				
				current.parents('form').attr('action', action_url);
				current.siblings('.action').attr('value', action);				
			});
			
			var invoice = jQuery(this).siblings('.invoice').attr('value');
			var user = jQuery(this).siblings('.user').attr('value');
			
			paypal_redirect = true;
			
			// check require fields
			kodehotel_form.find('.kode-require').each(function(){
				if( valid && jQuery(this).val() == '' ){
					kodehotel_form.children('.kode-notice.require-field').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});
			
			// check email
			kodehotel_form.find('.kode-email').each(function(){
				var re = /\S+@\S+/;
				if( valid && !re.test(jQuery(this).val()) ){
					kodehotel_form.children('.kode-notice.email-invalid').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});	

			if( valid ){
				kodehotel_form.find('.kode-notice').slideUp(200);
				kodehotel_form.find('.kode-profile-loader').slideDown(200);
				
				var ajax_url = kodehotel_form.attr('data-ajax');
				jQuery.ajax({
					type: 'POST',
					url: ajax_url,
					data: kodehotel_form.serialize(),
					dataType: 'json',
					error: function(a, b, c){
						console.log(a, b, c);
					},
					success: function(data){
						kodehotel_form.find('.kode-notice.alert-message')
							.html(data.message).slideDown(200).addClass('kode-' + data.status);
						kodehotel_form.find('.kode-profile-loader').slideUp(200);
						
						if( data.status == 'success' && paypal_redirect ){
							
							kodehotel_form[0].submit();
							
						}else{
							if( data.log ){
								console.log(data.log);
							}
						}
					}
				});					
			}
		});
	});
	
		jQuery('#agent-contact').each(function(){
		var disaster_relief_volunteer_form = jQuery(this);
		
		jQuery(this).find('#agent-contact-sub').click(function(){
		
			var valid = true; 
			
			// check require fields
			disaster_relief_volunteer_form.find('.kode-require').each(function(){
				if( valid && jQuery(this).val() == '' ){
					disaster_relief_volunteer_form.children().children('.kode-notice.require-field').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});
			
			// check email
			disaster_relief_volunteer_form.find('.kode-email').each(function(){
				var re = /\S+@\S+/;
				if( valid && !re.test(jQuery(this).val()) ){
					disaster_relief_volunteer_form.children().children('.kode-notice.email-invalid').slideDown(200)
						.siblings('.kode-notice').slideUp(200);
					valid = false;
				}
			});	

			if( valid ){				
				disaster_relief_volunteer_form.children().children('.kode-notice').slideUp(200);
				disaster_relief_volunteer_form.children().children('.kode-profile-loader').slideDown(200);
				
				var ajax_url = disaster_relief_volunteer_form.attr('data-ajax');
				jQuery.ajax({
					type: 'POST',
					url: ajax_url,
					data: disaster_relief_volunteer_form.serialize(),
					dataType: 'json',
					error: function(a, b, c){
						console.log(a, b, c);
					},
					success: function(data){
						disaster_relief_volunteer_form.children().children('.kode-notice.alert-message')
							.html(data.message).slideDown(200).addClass('kode-' + data.status);
						disaster_relief_volunteer_form.children().children('.kode-profile-loader').slideUp(200);
						
						if( data.status == 'success'){
							
							disaster_relief_volunteer_form.children('[name="user"]').val(data.user);
							
						}else{
							if( data.log ){
								console.log(data.log);
							}
						}
					}
				});					
			}
		});
	});
	
	// radio-image-script
	$('.kode-radio-label-wrap input[type="radio"]').change(function(){
		
		$(this).parent().siblings('label').children('input').attr('checked', false); 
		
		$(this).parent().addClass('active').siblings('label').removeClass('active');
		
	});
	
	$('.eco_donations_select input[type="radio"]').change(function(){
		
		$(this).parent().parent().siblings().children('label').children('input').attr('checked', false); 
		var input_val = $(this).parent().parent().children('label').children('input').attr('value');
		$('.eco_enter_ammount').children('input').attr('value',input_val);
		$(this).parent().parent().addClass('active').siblings().removeClass('active');
	});
	
	$('.choose-one input[type="radio"]').change(function(){
		$(this).parent().parent().siblings('label').children('input').attr('checked', false);		
		$(this).parent().parent().addClass('active').siblings('label').removeClass('active');
	});
	
	$(".globle-img").parent().css({"margin": "0"});

});