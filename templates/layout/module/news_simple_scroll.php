<?php
	$d->reset();
	$d->query("select id,ten_$lang,thumb,photo,mota_$lang,tenkhongdau from #_baiviet where hienthi=1 and type='tintuc' and noibat=1 order by stt asc,id desc");
	$news_scroll=$d->result_array();
    $show_simple_scroll=true;
?>

<div class="contain_news_scroll">
	<ul class="list_news_scroll">
		<?php
		if($news_scroll){
			foreach ($news_scroll as $key => $value) { ?>
			<li>
				<div class="item_news_scroll">
					<div class="img_news_scroll">
                        <a href="tin-tuc/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html">
                            <img src="<?=thumb($value['photo'],_upload_baiviet_l,$value['tenkhongdau'],135,95)?>" class="w100" alt="<?=$value['ten_'.$lang]?>" />
                        </a>
                    </div>
                    <div class="right_news_scroll">
                        <h3 class="name_news_scroll">
                            <a href="tin-tuc/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html"><?=$value['ten_'.$lang]?></a>
                        </h3>
                        <div class="date_news_scroll"><?=date('d//m/Y')?></div>
                        <div class="des_news_scroll">
                            <?=_substr($value['mota_'.$lang],280)?>
                        </div>
                    </div>
                    <div class="clear"></div>
				</div>
			</li>
			<? }
		}
		?>
	</ul>
</div>
