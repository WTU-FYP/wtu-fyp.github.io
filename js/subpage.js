$(document).ready(function() {
	//Showpage Vertical Scroll Slide
	var showSlides = new Swiper('#showSlides', {
		slidesPerView: 'auto',
		direction: 'vertical',
		slidesPerView: 'auto',
		freeMode: false,
		spaceBetween: 0,
		mousewheel: true,
		preloadImages:true,
		updateOnImagesReady : true,
		
		scrollbar: {
			el: '.swiper-scrollbar',
			draggable: true,
		},
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
				var getSlide2Active = $('.showSlide2').hasClass('swiper-slide-active');
				if(getSlide2Active === true) {
					showSlides.params.freeMode = true;
				}

				//				alert(showSlides.realIndex);
				//				if (showSlides.realIndex == 1) {
				//								
				//				showSlides.params.freeMode=true;
				//				};

				//				showSlides.params.freeMode=true;
			},
		},
	});
	//Interview Vertical Scroll Slide
	var interview = new Swiper('#interviewSlides', {
		slidesPerView: 'auto',
		direction: 'vertical',
		spaceBetween: 0,
		mousewheel: true,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {
				$(".interviewNav .active").removeClass('active');
				$(".interviewNav li").eq(this.activeIndex).addClass('active');
			},
			slideChangeTransitionEnd: function() {
				$(".interviewNav").css("transform", "translateX(0px) translateY(0px)");
				$(".interviewNav li").css("padding-bottom", "30px");
				interview1.slideTo(0, 0);
				interview2.slideTo(0, 0);
				interview3.slideTo(0, 0);
				interview4.slideTo(0, 0);
				interview5.slideTo(0, 0);
				interview6.slideTo(0, 0);
			},
		}
	});

	$(".interviewNav li").on('click', function(e) {
		e.preventDefault()
		$(".interviewNav .active").removeClass('active')
		$(this).addClass('active');
		interview.slideTo($(this).index());
		$(".interviewNav").css("transform", "translateX(0px) translateY(0px)");
		$(".interviewNav li").css("padding-bottom", "30px");
	});

	$(".interviewNav").hover(function() {
		$(".interviewNav .active a").addClass("mouseenter");
	}, function() {
		$(".mouseenter").removeClass("mouseenter");
	});

	//	Detail1
	var interview1 = new Swiper('#interview1', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});

	$(".detail1").on('click', function(e) {
		e.preventDefault();
		interview1.slideTo(1, 2000);
		$(".nav1").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(190px)");

	});
	$(".nav1").on('click', function(e) {
		e.preventDefault()
		interview1.slideTo(0, 0);
		interview.slideTo(0);
	});

	//	Detail1
	var interview2 = new Swiper('#interview2', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});
	$(".detail2").on('click', function(e) {
		e.preventDefault();
		interview2.slideTo(1, 2000);
		$(".nav2").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(108px)");

	});
	$(".nav2").on('click', function(e) {
		e.preventDefault()
		interview2.slideTo(0, 0);
		interview.slideTo(1);
	});
	//	Detail3
	var interview3 = new Swiper('#interview3', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});
	$(".detail3").on('click', function(e) {
		e.preventDefault();
		interview3.slideTo(1, 2000);
		$(".nav3").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(26px)");

	});
	$(".nav3").on('click', function(e) {
		e.preventDefault()
		interview3.slideTo(0, 0);
		interview.slideTo(2);
	});

	//	Detail4
	var interview4 = new Swiper('#interview4', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});
	$(".detail4").on('click', function(e) {
		e.preventDefault();
		interview4.slideTo(1, 2000);
		$(".nav4").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(-56px)");

	});
	$(".nav4").on('click', function(e) {
		e.preventDefault()
		interview4.slideTo(0, 0);
		interview.slideTo(3);
	});

	//	Detail5
	var interview5 = new Swiper('#interview5', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});
	$(".detail5").on('click', function(e) {
		e.preventDefault();
		interview5.slideTo(1, 2000);
		$(".nav5").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(-138px)");

	});
	$(".nav5").on('click', function(e) {
		e.preventDefault()
		interview5.slideTo(0, 0);
		interview.slideTo(4);
	});

	//	Detail6
	var interview6 = new Swiper('#interview6', {
		slidesPerView: 'auto',
		spaceBetween: 0,
		mousewheel: false,
		allowTouchMove: false,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionStart: function() {},
		}
	});
	$(".detail6").on('click', function(e) {
		e.preventDefault();
		interview6.slideTo(1, 2000);
		$(".nav6").css("padding-bottom", "380px");
		$(".interviewNav").css("transform", "translateX(0px) translateY(-220px)");

	});
	$(".nav6").on('click', function(e) {
		e.preventDefault()
		interview6.slideTo(0, 0);
		interview.slideTo(5);
	});

});