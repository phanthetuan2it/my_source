<div class="facebook_popup_left">
	<div class="title_facebook_popup_left">title</div>
	<div class="body_facebook_popup_left">
		<div class="box_facebook_popup_left">
			aaaa
		</div>
	</div>
</div>
<script type="text/javascript">
	$('.facebook_popup_left').hover(function(){
		var widht_box=$('.box_facebook_popup_left').outerWidth();
		$('.body_facebook_popup_left').css({'width':widht_box});
	},function(){
		$('.body_facebook_popup_left').css({'width':0});
	});
</script>