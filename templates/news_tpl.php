<div class="sub_main">
    <div class="title_main"><span><?=$title_detail?></span></div>
    <div class="content_main">
          <?php if($tintuc){?>
    <?php foreach ($tintuc as $key => $value) { ?>
        <div class="box_news">
            <div class="box_news_img col-md-3 col-sm-4 col-smx-4 col-xs-12">
                <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>" class="my_glass">
                    <img alt="<?=stripcslashes($value['alt_img'])?>" src="timthumb.php?src=<?=_upload_baiviet_l.$value['photo']?>&w=300&h=220&zc=1&q=80" onError="noImage(this)" class="w100 trans03"/>
                </a>
            </div><!--end box news img-->
            <div class="right_news col-md-9 col-sm-8 col-smx-8 col-xs-12 pdm mgt10-xs pd0-xs">
                <div class="box_news_name">
                <h3>
                    <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                        <?=stripcslashes($value['ten_'.$lang])?>
                    </a>
                </h3>
            </div><!--end box news name-->
            <div class="box_news_date"><i class="fa fa-calendar"></i> <?=date('d-m-Y')?> - <i class="fa fa-eye"></i> <?=$value['luotxem']?></div>
            <div class="box_news_mota"><?=_substr(stripcslashes($value['mota_'.$lang]),380)?></div>
            <?php /* ?><div class="box_news_readmore">
                <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                    Xem chi tiết
                </a>
            </div>
            <?php */ ?>
            </div><!--end right news-->
            
            <div class="clear"></div>
        </div><!-- .box-news -->
        
    <?php } ?>
   <div class="paging"><?=$paging?></div>
    <?php }else{?><div class="text" style="text-align:center"><b style="color:#F00; font-size: 17px;">Nội dung chưa cập nhật. Xin vui lòng xem chuyên mục khác.</b></div><?php }?>
     </div><!--content main-->
</div><!--end sub main-->