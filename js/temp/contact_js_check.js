
function js_submit(id_form){
	var dem=0;
	$('#'+id_form+' .input_form[required]').each(function(){
		if(!show_hide_notify($(this))) dem++;
	});

	if(dem>0)
			return false;
	document.getElementById(id_form).submit();
}

$(document).ready(function(){
	$('.input_form[required]').mousedown(function(){
		if($(this).val()==''){
			$(this).removeClass('box_not_valid');
		}
	});
	
	// $('.input_form[required]').blur(function(){
	// 	show_hide_notify($(this));
	// });
	
	// $('.box_input_form.has_notify').each(function(){
	// 	var text_input=$(this).find('input').attr('placeholder');
	// 	$notify_input=$('<div class="notify_input"><div class="content_notify_input">'+text_input+'</div></div>');
	// 	$(this).append($notify_input);
	// });
});

function show_hide_notify(input_check){
	var this_notify=$(input_check).attr('placeholder');
		if($(input_check).val()==''){

			//$('.'+this_notify).fadeIn();
			if($(input_check).parent().find('.notify_form').length==0){
				$(input_check).parent().append('<div class="notify_form"><i class="fa fa-info-circle"></i> <span>Bạn chưa nhập '+this_notify+'</span></div>');
			}
				// $(input_check).parent().addClass('box_not_valid');
			return false;
		}else{
			//alert('222');
			$(input_check).parent().find('.notify_form').remove();
				// $(input_check).parent().removeClass('box_not_valid');
			//$('.'+this_notify).fadeOut();
			return true;
		}
}


