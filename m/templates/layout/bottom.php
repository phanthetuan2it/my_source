<div class="bottom">
	<center>
		<?php for ($i=0; $i < count($chinhsach); $i++) { ?>
		<div class="items-bottom">
			<a href="chinh-sach/<?=$chinhsach[$i]['tenkhongdau']?>.html"><img src="<?=_upload_baiviet_l.$chinhsach[$i]['thumb']?>" alt="<?=$chinhsach[$i]['ten']?>"></a>
			<h3><a href="chinh-sach/<?=$chinhsach[$i]['tenkhongdau']?>.html"><?=$chinhsach[$i]['ten']?></a></h3>
			<p><?=catchuoi($chinhsach[$i]['mota'],150)?></p>
			<div class="clear"></div>
		</div>
		<?php } ?>
		<div class="clear"></div>
	</center>	
</div>
<div class="doitac">
	<div class="title-doitac"><h2><span>Đối tác</span></h2></div>
	<div class="owl-carousel doitac-slider">
		<?php for ($i=0; $i < count($doitac); $i++) { ?>
		<div class="item"><a href="<?=$doitac[$i]['link']?>"><img src="<?=_upload_hinhanh_l.$doitac[$i]['thumb_vi']?>"></a></div>
		<?php } ?>
	</div>
</div>