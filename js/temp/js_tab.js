$('.item_tab_cm').click(function(){
	$(this).parent().find('.item_tab_cm').removeClass('active');
    var id_tab=$(this).attr('href');
    $(this).addClass('active');
    $(this).parents('.my_box_tab').find('.content_tab_cm').css({'display':'none'});
    $(id_tab).fadeIn();
    return false;
});