
    <div class="sub_main">
        <div class="title_main"><span><?=$title_detail?></span></div>
        <div class="content_main">
            
            <h1 class="tieude"> <?=$row_detail['ten_'.$lang]?></h1>
            <div class="text">
                <?=$row_detail['noidung_'.$lang]?>
                <?=get_social('','share');?>
                <?=get_social('','comment');?>
            </div>
      
        <div class="box_news_other">
            <div class="title_news_other"><?=$title_other?></div>
            <div class="list_news_other">
                <?php
                if($tintuc){
                    foreach ($tintuc as $key => $value) { ?>
                        <div class="box_news">
                            <div class="box_news_img">
                                <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>" class="my_glass">
                                   
                                    <img alt="<?=stripcslashes($value['alt_img'])?>" src="timthumb.php?src=<?=_upload_baiviet_l.$value['photo']?>&w=300&h=250&zc=1&q=80" onError="noImage(this)" class="w100 trans03"/>
                                </a>
                            </div><!--end box news img-->
                           
                            <div class="box_news_name">
                                <h3>
                                    <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                                        <?=stripcslashes($value['ten_'.$lang])?>
                                    </a>
                                </h3>
                            </div><!--end box news name-->
                            <div class="box_news_mota"><?=_substr(stripcslashes($value['mota_'.$lang]),100)?></div>
                            <div class="clear"></div>
                        </div><!-- .box-news -->
                    <?php } 
                } ?>
            </div><!--list news other-->
        </div> 
         </div><!--content main-->
    </div><!--end sub main-->