$(document).ready(function(){
	$('#btn_menu_bootstrap').click(function(){
		$('#menu_bootstrap').stop().slideToggle();
		if($('#menu_bootstrap').hasClass('menu_bootstrap_active')){
			$('#menu_bootstrap').addClass('menu_bootstrap_active');
		}
		
		
	});
	
	$('.sub_btn').click(function(){
		
		if($(this).hasClass('cur_rotate')){
			$(this).css({'-webkit-transform':'rotate(0deg)'});
			$(this).removeClass('cur_rotate');
		}else{
			$(this).css({'-webkit-transform':'rotate(90deg)'});
			$(this).addClass('cur_rotate');
		}
		
		$(this).parent().children('ul').stop().slideToggle();
		
	});
	/*
	$('*').click(function(){
		
		if($('#menu_bootstrap').hasClass('menu_bootstrap_active')){
			$('#menu_bootstrap').stop().slideUp();
			$('#menu_bootstrap').removeClass('menu_bootstrap_active');
		}
		
	});*/
	
	$('#btn_menu_bootstrap2').click(function(){
		$('#menu_bootstrap2').stop().slideToggle();
		if($('#menu_bootstrap2').hasClass('menu_bootstrap_active2')){
			$('#menu_bootstrap2').addClass('menu_bootstrap_active2');
		}
		
		
	});
});