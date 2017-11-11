$(document).ready(function(e) {
	
	
  	$('.menu_left ul li').hover(function(){
		$(this).children('ul').stop().slideToggle();	
	});
});