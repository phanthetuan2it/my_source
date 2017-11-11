<div id="footer">
	<div class="inner">
		<div class="item_footer">
			<div class="content_footer">
				<?=$footer['noidung']?>
			</div>
		</div><!--left footer-->

		<div class="item_footer">
			<?php include _template."layout/addon/nhantin.php";?>
			<div class="social-footer">
				<?php for ($i=0; $i < count($mxh) ; $i++) { ?>
	            <a href="<?=$mxh[$i]['url']?>" target="blank"><img src="<?=_upload_hinhanh_l.$mxh[$i]['photo']?>" alt="<?=$mxh[$i]['ten']?>"></a>
	            <?php } ?>
			</div>	
		</div><!--mid footer-->

		<div class="item_footer">
			<div class="title_footer">Thống kê truy cập</div>
			<div class="content_footer">
				<?php include_once _template.'layout/module/thongke.php'; ?>
			</div>
		</div><!--right foooter-->
	</div><!--inner footer-->
	<div class="clear"></div>
</div><!--footer-->
