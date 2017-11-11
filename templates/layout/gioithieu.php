<?php
	$d->reset();
	$d->query("select ten_$lang,background,mota_$lang,thumb from #_info where type='gioithieu'");
	$about=$d->fetch_array();
?>
<div id="index_about" style="background:url(<?=_upload_hinhanh_l.$about['background']?>) top center no-repeat">
	<div class="inner">
		<div class="left_about">
			<img src="<?=_upload_hinhanh_l.$about['thumb']?>" alt="<?=$about['ten_'.$lang]?>" class="w100" />
		</div><!--left-->
		<div class="right_about">
			<div class="title_index_about"><h2><?=$about['ten_'.$lang]?></h2></div>
			<div class="content_index_about"><?=stripslashes($about['mota_'.$lang])?></div>
		</div><!--right-->
	</div><!--inner-->
	<div class="clear"></div>
</div><!--index about-->