<?php
	$d->reset();
	$d->query("select photo_vi from #_photo where type='popup'");
	$popup=$d->fetch_array();
?>
<style>
	.overflow_my_body_popup{
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
</style>
<div id="my_popup">
	<div class="my_box_popup">
		<div class="content_popup">
			<div class="inner_content_popup">
				<img src="<?=_upload_hinhanh_l.$popup['photo_vi']?>"/>
			</div>
		</div>
	</div>
</div>
<div class="clear"></div>

<script type="text/javascript">
	
	$(window).load(function(){
		init_my_popup();
	});
	$(window).resize(function(){
		init_my_popup();
	});
	function init_my_popup(){
		$('#my_popup').fadeIn(1000);
		check_content_popup();
		margin_top_popup();
		add_element_my_popup();
		$('body,html').addClass('overflow_my_body_popup');
	}

	function reset_all_init(){
		$('body,html').removeClass('overflow_my_body_popup');
	}

	function add_element_my_popup(){
		$('.content_popup').append('<span class="close_my_popup"></span>');
	}

	function margin_top_popup(){
		var margin_my_box_popup=$('.my_box_popup').css('margin-top');
		var height_content=$('.inner_content_popup').outerHeight();
		var half_height_content=height_content/2+parseInt(margin_my_box_popup)/2;
		$('.content_popup').css({'margin-top':-half_height_content});
	}

	function check_content_popup(){
		var height_content=$('.content_popup').outerHeight();
		var height_box_popup=$('.inner_content_popup').outerHeight();
		if(height_content<height_box_popup){
			$('.inner_content_popup').css({'overflow-y':'scroll','height':height_content});
		}
	}

	$(document).delegate(".close_my_popup","click",function(e){
		reset_all_init();
		$my_popup=$('#my_popup');
	 	$('#my_popup').fadeOut(1000);
	 	setTimeout(function(){
	 		$my_popup.remove();
	 		
	 	},1000);
	});

</script>