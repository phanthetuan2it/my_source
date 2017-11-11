<?php
	$d->reset();
	$sql="select * from #_baiviet where hienthi=1 and noibat=1 and type='tintuc' order by stt asc,id desc limit 0,20";
	$d->query($sql);
	$news_main_sub=$d->result_array();
	$show_news_main_sub=true;
?>
<div id="news_main_sub">
	<div class="main_news">
		<div id="slider_main_news">
		<?php
		if($news_main_sub){
		foreach ($news_main_sub as $key => $value) { ?>
			<div class="item_news_main">
				<div class="img_main_news">
					 <img src="<?=thumb($value['photo'],_upload_baiviet_l,$value['tenkhongdau'],300,230)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/>
				</div>
				<div class="right_main_news">
					<h3 class="name_main_news"><a href="tin-tuc/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html"><?=$value['ten_'.$lang]?></a></h3>
					<div class="des_main_news"><?=_substr($value['mota_'.$lang],180)?></div>
				</div>
			</div>
		<?php }
		} ?>
		</div>
		
	</div><!--main news-->
	<div class="sub_news">
		<div class="box_re">
			<div class="next_v_cm next_sub_news"></div>
			<div class="prev_v_cm prev_sub_news"></div>
			<div id="slider_sub_news">
					<?php
					if($news_main_sub){
						foreach ($news_main_sub as $key => $value) { ?>
							<div class="item_sub_news">
								<div class="img_sub_news">
									<img src="<?=thumb($value['photo'],_upload_baiviet_l,$value['tenkhongdau'],300,230)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/>
								</div>
								<div class="right_sub_news">
									<h3 class="name_sub_news"><a href="tin-tuc/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html"><?=$value['ten_'.$lang]?></a></h3>
									<div class="des_sub_news">
										<?=_substr($value['mota_'.$lang],180)?>
									</div>
								</div>
								<div class="clear"></div>
							</div><!--end item sub news-->
						
						<?php }
					}
					?>
			</div>
		</div><!--box relative-->
	</div>
</div>