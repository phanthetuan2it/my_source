<?php
	$d->reset();
	$d->query("select photo_vi from #_photo where type='popup'");
	$popup=$d->fetch_array();
	$show_popup=true;
?>
<style>
	.overflow_my_body_popup{position: relative;}
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
