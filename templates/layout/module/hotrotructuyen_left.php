<div class="hotrotructuyen_popup_left">
	<div class="title_hotrotructuyen_popup_left">title</div>
	<div class="body_hotrotructuyen_popup_left">
		<div class="box_hotrotructuyen_popup_left">
			aa
		</div>
	</div>
</div>
<script type="text/javascript">
	$('.hotrotructuyen_popup_left').hover(function(){
		var widht_box=$('.box_hotrotructuyen_popup_left').outerWidth();
		$('.body_hotrotructuyen_popup_left').css({'width':widht_box});
	},function(){
		$('.body_hotrotructuyen_popup_left').css({'width':0});
	});
</script>