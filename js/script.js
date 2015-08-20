$(function(){
	$('.fa-search').on('click', function(){
		if ($(window).width() < 768) {
			$('.user-area-bg').toggleClass('new-height');
		}
		$('.user-area input').animate({width:'toggle'},100).focus();
	});

	$('a')	
	.not('.flickr_badge_wrapper a')
	.not('.copy > div a')
	.on('click', function(e){
		e.preventDefault();
	});
});