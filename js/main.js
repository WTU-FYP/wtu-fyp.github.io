var musicPlayer = document.getElementById("bgMusic");
$(document).ready(function() {
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
		$(".dot1").css("animation", "none");
	});

	$(document).on("click", '.animationStop', function() {
		$(".animationBtn").attr("src", "img/animationStop.png");
		$(".animationStop").addClass("animationPlay");
		$(".animationStop").removeClass("animationStop");
		$(".dot1").css("animation", "topDown 1s linear infinite alternate");
	});
	//Background Music Play/Stop
	$(document).on("click", '.musicBtn', function() {
		if(musicPlayer.paused) { // if music is paused
			musicPlayer.play(); //play background music
			$(".musicBtn").attr("src", "img/musicStop.png"); //change button icon
		} else { // if music is paused
			musicPlayer.pause(); //pause background music
			$(".musicBtn").attr("src", "img/musicPlay.png"); //change button icon
		};
	});
	//Unorder/Order Option Btn
	$(document).on("click", '.orderBtnUnActive', function() {
		UnorderOrUnder.slideTo(1, 1000, true);
		$(".homeBgLeftdown").fadeOut(1000);
		$(".unorderBtnActive").attr("src", "img/unorder.png");
		$(".unorderBtnActive").addClass("unorderBtnUnActive");

		$(".unorderBtnActive").removeClass("unorderBtnActive");
		$(".orderBtnUnActive").attr("src", "img/orderActive.png");
		$(".orderBtnUnActive").addClass("orderBtnActive");

		$(".orderBtnUnActive").removeClass("orderBtnUnActive");
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

});