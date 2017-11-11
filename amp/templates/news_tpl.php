<div class="sub_main">
    <div class="title_main"><span><?=$title_detail?></span></div>
    <div class="content_main">
          <?php if($tintuc){?>
    <?php foreach ($tintuc as $key => $value) { ?>
        <div class="box_news">
            <div class="box_news_img">
                  <a href="http://<?=$config_url?>/<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                    <amp-img srcset="http://<?=$config_url?>/timthumb.php?src=<?=_upload_baiviet_l.$value['photo']?>&w=300&h=220&zc=1&q=100" width="300" height="220" layout="responsive"></amp-img>
                </a>
            </div><!--end box news img-->
            <div class="right_news">
                <div class="box_news_name">
                <h3>
                    <a href="http://<?=$config_url?>/<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                        <?=stripcslashes($value['ten_'.$lang])?>
                    </a>
                </h3>
            </div><!--end box news name-->
            <div class="box_news_date"><i class="fa fa-calendar"></i> <?=date('d-m-Y')?> - <i class="fa fa-eye"></i> <?=$value['luotxem']?></div>
            <div class="box_news_mota"><?=_substr(stripcslashes($value['mota_'.$lang]),380)?></div>
          
            </div><!--end right news-->
            
            <div class="clear"></div>
        </div><!-- .box-news -->
        
    <?php } ?>
   <div class="paging"><?=$paging?></div>
    <?php }else{?><div class="text" style="text-align:center"><b style="color:#F00; font-size: 17px;">Nội dung chưa cập nhật. Xin vui lòng xem chuyên mục khác.</b></div><?php }?>
     </div><!--content main-->
</div><!--end sub main-->