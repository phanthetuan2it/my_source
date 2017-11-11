<div id="footer">
	<div class="inner">
		<div class="left_footer">
			<div class="content_footer">
				<?=$footer['noidung']?>
			</div>
		</div><!--left footer-->

		<div class="mid_footer">
			<?php include _template."layout/module/nhantin.php";?>
			<div class="social-footer">
				<?php for ($i=0; $i < count($mxh) ; $i++) { ?>
	            <a href="<?=$mxh[$i]['url']?>" target="blank" class="my_rtt360l"><img src="<?=_upload_hinhanh_l.$mxh[$i]['photo']?>" alt="<?=$mxh[$i]['ten']?>"></a>
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
<div id="copyright">
	<div class="inner clearfix">
		<div class="w5f">Copyright © 2017 HAN THAI VIET NAM.  All rights reserved. Design by NINA</div>
		<div class="w5f tr">
			<ul class="list_thongke2">
				<li class="tk_online mgt10"><?=_dangonline?> : <span><?php $count=count_online();echo $tong_xem=$count['dangxem'];?></span></li>
				<li class="tk_week"><?=_tuannay?> : <span><?=$week_visitors?></span></li>
				<li class="tk_all"><?=_tongtruycap?> : <span><?=$all_visitors?></span></li>
			</ul>
		</div>
	</div>
</div>