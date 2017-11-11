<div class="hotrotructuyen_popup">
	<div class="title_hotrotructuyen_popup">title</div>
	<div class="body_hotrotructuyen_popup">
		<div class="box_hotrotructuyen_popup">
			asdasd
		</div>
	</div>
</div>
<script type="text/javascript">
	$('.hotrotructuyen_popup').hover(function(){
		var height_box=$('.box_hotrotructuyen_popup').outerHeight();
		$('.body_hotrotructuyen_popup').css({'height':height_box});
	},function(){
		$('.body_hotrotructuyen_popup').css({'height':0});
	});
</script>