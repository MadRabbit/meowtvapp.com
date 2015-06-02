// Swapp JS Functions

var max = 4; //CHANGE THIS TO NUMBER OF PICS YOU NEED. Current setting is 5 screenshots (for both phone/tablet)

//*** SYSTEM FUNCTIONS BELOW THIS LINE ***/

//SLOWING VIDEO PLAYBACK RATE
var video = document.getElementById("video");
if (!Modernizr.touch) {
		if (video) {video.playbackRate = 1;}
	} else {
		if (video) {jQuery("#video-container,.video-overlay").remove()}
}

//INIT FLEXSLIDERS
jQuery('.testimonials-slider').flexslider({
	manualControls: '.flex-manual .switch',
	nextText: "",
	prevText: "",
	startAt: 0,
	slideshow: false,
	direction: "horizontal",
	animation: "slide"
});

//INIT SKROLLR
//DISABLE PARALLAX FOR HANDHELDS
	if (!Modernizr.touch) {
		var viewHeight = $(window).height();
		$(".wire").attr("data-_wheighte", "background-position-y: -" + viewHeight*0.4 + 'px;');
		var s = skrollr.init({
			mobileDeceleration: 1,
			constants: {
				wheight: viewHeight,
				wheighte: viewHeight * 2,
			},
			edgeStrategy: 'set',
			forceHeight: false,
			smoothScrolling: false,
				easing: {
					WTF: Math.random,
					inverted: function(p) {
						return 1-p;
					}
				}
			});
	}

jQuery(document).ready(function(){

	fixWidth();
    // Fix the height of the inner tabs
    $('.tab-content .tab-pane').css('height', $(window).height());

	$(".device-wrap").mouseover(function() {
		if ($(window).scrollTop() > 500){
			$('.device-wire-controls').css('opacity', 1).css('color', '#ddd').css('display', 'block');
		}
	}).mouseleave(function() {
			$('.device-wire-controls').css('opacity', 0).css('display', 'none');
	});


	//IMAGE SLIDER
	$('.device-wire-controls a').click(function() {
		var direction = $(this).data("dir");
		var oldPic = $('.device-wire-controls').data('current');
		newPic = changePic(direction);
		$('.device-wire-controls').data('current', newPic);
		$('.device-wrap .wire.device .screenshot').removeClass('bg1 bg2 bg3 bg4 bg5');
		$('.device-wrap .wire.device .screenshot').addClass('bg' + newPic);
		//$('.device-wrap .wire.device').css('position', 'relative').css('position','');
		return false;
	});

});

//FUNCTION FOR CYCLING THROUGH PICS
function changePic(dir){

		var max = 4; //CHANGE THIS TO NUMBER OF PICS YOU NEED
		var nextPic;
		var currentPic;
		var pic = $('.device-wire-controls').data('current');

		if (dir == "next"){nextPic = pic+1; }
		if (dir == "prev"){nextPic = pic-1;}

		if (nextPic <= 1) {currentPic = 1;}
		else if(nextPic >= max) {currentPic = max;}
		else {currentPic = nextPic;}

		return currentPic;
}

function fixWidth(){
	var width = $('.device-wrap').width();
	var height = window.innerHeight ? window.innerHeight : $(window).height();
	if (width > 560){width = 560;}
	$('.device').css('background-size', width + 'px auto');
	$('.device .screenshot').css('background-size', (width*0.80) + 'px auto');
	$('.device-wire-controls').css('width', (width*1.2) + 'px');
	$('.device-wrap').css('height', height); // for devices
}

$(window).resize(function() {
  fixWidth();
});
$(window).scroll(function() {
  var scrolledY = $(window).scrollTop();
});
