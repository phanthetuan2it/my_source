<?php
	$d->reset();
	$sql="select thumb_$lang,photo_$lang,ten_$lang,link from #_photo where hienthi=1 and type='doitac' order by stt asc,id desc";
	$d->query($sql);
	$doitac=$d->result_array();
	$show_doitac=true;
?>

<div class="clear"></div>
<div id="doitac">
	<div class="contain_owl_doitac inner">
		<a href="javascript:" class="prev_doitac prev_cm"><i class="fa fa-arrow-left"></i></a>
		<a href="javascript:" class="next_doitac next_cm"><i class="fa fa-arrow-right"></i></a>
		<div id="owl_doitac" class="owl-carousel">
			<?php
			foreach ($doitac as $key => $value) { ?>
				<div class="item_doitac">
					<a href="<?=$value['link']?>" target="_blank"><img src="<?=thumb($value['photo_'.$lang],_upload_hinhanh_l,$value['tenkhongdau'],140,90)?>" alt="<?=$value['ten_vi']?>" class="w100" /></a>
				</div>
			<? }
			?>
		</div>
	</div>
</div><!--end doitac-->
