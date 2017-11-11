<?php
	$d->query("select noidung_$lang as noidung from #_company where type='footer' ");
	$footer = $d->fetch_array();
	//
	$d->query("select ten_$lang as ten,thumb as photo,link from #_photo where type='mangxh' and hienthi=1 order by stt,id desc");
	$mangxh= $d->result_array();
	$countol = count_online();
	//
	
?>
<div class="clear"></div>
<div id="footer">
	<div class="inner">
		<div class="left_footer">
			<div class="content_footer">
				<?=ampify($footer['noidung'])?>
			</div>
		</div><!--left footer-->

		<div class="mid_footer">
			<div class="social-footer">
				<?php for ($i=0; $i < count($mxh) ; $i++) { ?>
	            <a href="<?=$mxh[$i]['url']?>" class="my_rtt360l">
				<amp-img srcset="http://<?=$config_url?>/<?=_upload_hinhanh_l.$mxh[$i]['photo']?>" width="35" height="35" ></amp-img></a>
	            <?php } ?>
			</div>	
		</div><!--mid footer-->

		<div class="right_footer">
			<div class="title_footer">Thống kê truy cập</div>
			<div class="content_footer">
				<?php include_once _template.'layout/module/thongke.php'; ?>
			</div>
		</div><!--right foooter-->
	</div><!--inner footer-->
	<div class="clear"></div>
</div><!--footer-->
