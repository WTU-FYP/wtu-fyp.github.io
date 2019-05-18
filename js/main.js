$(document).ready(function() {
	var musicPlayer = document.getElementById("bgMusic");
	var slideSound = document.getElementById("slideSound");
	var leaveSound = document.getElementById("leaveSound");
	var clickSound = document.getElementById("clickSound");
	//TOP NAV
	$(".navlist").hover(function() {
		$(".active a").addClass("mouseenter");
	}, function() {
		$(".mouseenter").removeClass("mouseenter");
	});
	//Unorder/Order Option
	var UnorderOrUnder = new Swiper('#UnorderOrUnder', {
		direction: 'vertical',
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: false, //可选选项，自动滑动
		spaceBetween: 0,
		allowTouchMove: false,
		keyboard: true,
		on: {
			init: function() {
				swiperAnimateCache(this); //隐藏动画元素 
				swiperAnimate(this); //初始化完成开始动画
			},
			slideChangeTransitionEnd: function() {
				swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
			},
		},
	});
	//Animation Play/Stop
	$(document).on("click", '.animationPlay', function() {
		$(".animationBtn").attr("src", "img/animationPlay.png");
		$(".animationPlay").addClass("animationStop");
		$(".animationPlay").removeClass("animationPlay");
		$(".dot").css("animation", "none");
		if(musicPlayer.played) { // if music is paused
			musicPlayer.pause(); //play background music
		} else { // if music is paused
			musicPlayer.play(); //pause background music
		};
	});

	$(document).on("click", '.animationStop', function() {
		$(".animationBtn").attr("src", "img/animationStop.png");
		$(".animationStop").addClass("animationPlay");
		$(".animationStop").removeClass("animationStop");
		$(".dot").css("animation", "topDown 2s linear infinite alternate");
		$(".downTop").css("animation", "downTop 2s linear infinite alternate");
		if(musicPlayer.paused) { // if music is paused
			musicPlayer.play(); //play background music
		} else { // if music is paused
			musicPlayer.pause(); //pause background music
		};
	});
	//Background Music Play/Stop
	$(document).on("click", '.musicBtn', function() {
		if(slideSound.muted === true) {
			slideSound.muted = false;
			slideSound.volume = 0.4;
			leaveSound.muted = false;
			leaveSound.volume = 0.4;
			clickSound.muted = false;
			clickSound.volume = 0.4;
			$(".musicBtn").attr("src", "img/musicPlay.png");
			
		} else if(slideSound.muted === false){
			slideSound.muted=true;
			leaveSound.muted=true;
			clickSound.muted=true;
			$(".musicBtn").attr("src", "img/musicStop.png");
		}

	});

	$('.dot').mouseenter(function() {
		slideSound.play();
	}).mouseleave(function() {
		leaveSound.play();
	});
	$('.orderContentSection').mouseenter(function() {
		slideSound.play();
	});
	$('.dot a').click(function() {
		clickSound.play();
	});
	$('.contentRow a').click(function() {
		clickSound.play();
	});
	$('.majorBtn').click(function() {
		clickSound.play();
	});

	//	Order Option Subpages Slide
	var OrderSlide = new Swiper('#orderSlide', {
		mousewheel: true,
		pagination: {
			el: '#orderSlidePagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//Unorder/Order Option Btn
	$(document).on("click", '.orderBtnUnActive', function() {
		UnorderOrUnder.slideTo(1, 1000, true);
		OrderSlide.slideTo(0, 1000, true);

		$(".homeBgLeftdown").fadeOut(1000);
		$(".unorderBtnActive").attr("src", "img/unorder.png");
		$(".unorderBtnActive").addClass("unorderBtnUnActive");

		$(".unorderBtnActive").removeClass("unorderBtnActive");
		$(".orderBtnUnActive").attr("src", "img/orderActive.png");
		$(".orderBtnUnActive").addClass("orderBtnActive");

		$(".orderBtnUnActive").removeClass("orderBtnUnActive");

		$('.visual').css('display', 'block');
		$('.Video').css('display', 'block');
		$('.UI').css('display', 'block');

		$(".visualBtn img").attr("src", "img/3D.png");
		$(".VideoBtn img").attr("src", "img/digtal.png");
		$(".UIbtn img").attr("src", "img/UIUX.png");

		$('.visualBtn').removeClass('active');
		$('.VideoBtn').removeClass('active');
		$('.UIbtn').removeClass('active');
	});

	$(document).on("click", '.unorderBtnUnActive', function() {
		UnorderOrUnder.slideTo(0, 1000, true);
		$(".homeBgLeftdown").fadeIn(1000);
		$(".orderBtnActive").attr("src", "img/order.png");
		$(".orderBtnActive").addClass("orderBtnUnActive");

		$(".orderBtnActive").removeClass("orderBtnActive");
		$(".unorderBtnUnActive").attr("src", "img/unorderAcitve.png");
		$(".unorderBtnUnActive").addClass("unorderBtnActive");

		$(".unorderBtnUnActive").removeClass("unorderBtnUnActive");
	});

	//Major Option Btn
	$(document).on("click", '.visualBtn', function() {
		$('.visual').css('display', 'block');
		$('.Video').css('display', 'none');
		$('.UI').css('display', 'none');

		$(".visualBtn img").attr("src", "img/3DActive.png");
		$(".VideoBtn img").attr("src", "img/digtal.png");
		$(".UIbtn img").attr("src", "img/UIUX.png");

		$('.visualBtn').addClass('active');
		$('.VideoBtn').removeClass('active');
		$('.UIbtn').removeClass('active');
	});

	$(document).on("click", '.VideoBtn', function() {
		$('.visual').css('display', 'none');
		$('.Video').css('display', 'block');
		$('.UI').css('display', 'none');

		$(".visualBtn img").attr("src", "img/3D.png");
		$(".VideoBtn img").attr("src", "img/digtalActive.png");
		$(".UIbtn img").attr("src", "img/UIUX.png");

		$('.visualBtn').removeClass('active');
		$('.VideoBtn').addClass('active');
		$('.UIbtn').removeClass('active');
	});

	$(document).on("click", '.UIbtn', function() {
		$('.visual').css('display', 'none');
		$('.Video').css('display', 'none');
		$('.UI').css('display', 'block');

		$(".visualBtn img").attr("src", "img/3D.png");
		$(".VideoBtn img").attr("src", "img/digtal.png");
		$(".UIbtn img").attr("src", "img/UIUXActive.png");

		$('.visualBtn').removeClass('active');
		$('.VideoBtn').removeClass('active');
		$('.UIbtn').addClass('active');
	});

	$(document).on("click", '.majorBtnDiv .active', function() {
		$('.visual').css('display', 'block');
		$('.Video').css('display', 'block');
		$('.UI').css('display', 'block');

		$(".visualBtn img").attr("src", "img/3D.png");
		$(".VideoBtn img").attr("src", "img/digtal.png");
		$(".UIbtn img").attr("src", "img/UIUX.png");

		$('.visualBtn').removeClass('active');
		$('.VideoBtn').removeClass('active');
		$('.UIbtn').removeClass('active');
	});

});