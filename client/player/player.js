$(function(){

	$('.btn-close').click(function(){
		$('.player').removeClass('open');
		$('body').removeClass('video-open');
		$('.player .play').html('');
	});

});
