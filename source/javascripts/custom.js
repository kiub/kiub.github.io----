$(document).ready(function($) {

	function aniAvatar(){
		$(this).addClass('animated pulse rotateOut');
	}
	function resetAniAvatar(){
		$(this).removeClass('animated pulse rotateOut');
	}

	$('.profilepic img').on('mouseenter', aniAvatar).on('mouseout', resetAniAvatar);
	$('.profilepic img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', resetAniAvatar);

});
