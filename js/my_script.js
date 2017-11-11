function noImage(imgage){
	alert(imgage.onerror);
	imgage.onerror="";
	imgage.src="images/commont/noimage.png";
}

$(document).ready(function(){
	$("img").error(function () {
	  $(this).unbind("error").attr("src", "images/commont/noimage.png");
	  $(this).css({'max-width':'100%'});
	});
});

$(window).ready(function(){
	$('.my_tooltip').each(function(){
		var this_width=$(this).outerWidth();

		var this_margin=(-this_width/2)+($(this).parent().outerWidth()/2);
		$(this).css({'margin-left':this_margin});
	})

	$('.item_tooltip').hover(function(){
		$('.my_tooltip').fadeToggle();
	});
});