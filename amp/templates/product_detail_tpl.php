<div class="sub_main">
  <div class="title_main"><span><?=$title_detail?></span></div>
  <div class="content_main">
    <div class="box_img_detail">
      <amp-carousel width="280" height="200" layout="responsive" delay="3000" autoplay type="slides">
       <amp-img srcset="http://<?=$config_url?>/timthumb.php?src=<?=_upload_product_l.$row_detail['photo']?>&w=560&h=400&zc=1&q=100" width="560" height="400" ></amp-img>
      <?php if(count($product_photo)>0){
        foreach ($product_photo as $key => $value) { ?>
        <amp-img srcset="http://<?=$config_url?>/timthumb.php?src=<?=_upload_product_l.$value['photo']?>&w=560&h=400&zc=1&q=100" width="560" height="400" ></amp-img>
        <?php }
      } ?>
    </amp-carousel>
  </div><!--box img detail-->

  <div class="info_detail">
        <h1 class="item_info_detail name_detail"><?=$row_detail['ten_'.$lang]?></h1>
        <div class="item_info_detail"><?=_masanpham?> : <span><?=$row_detail['masp']?></span></div>
        <div class="item_info_detail gia_detail"><?=_giaban?> : <span><?=format_giaban($row_detail['giaban'],',',' VNĐ')?></span></div>
        <div class="item_info_detail"><?=_luotxem?> : <?=$row_detail['luotxem']?></div>
        <div class="item_info_detail"><?=_mota?> : <?=$row_detail['mota_'.$lang]?></div>
      </div><!--info_detail-->
      <div class="clear"></div>
    </div><!--end top detail-->

  </div><!--content main-->
</div><!--sub main-->



<div class="sub_main clearfix">
  <div class="title_main"><span><?=$title_detail?></span></div>
  <div class="content_main">
    <div class="row_p">
    <?php
    if($product){
      foreach ($product as $key => $value) { ?>
    <div class="col_p">
      <div class="box_p">
        <div class="img_p">
          <a href="http://<?=$config_url?>/san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html"><amp-img srcset="http://<?=$config_url?>/timthumb.php?src=<?=_upload_product.$value['photo']?>&w=280&h=200&zc=1&q=100" width="280" height="200" layout="responsive"></amp-img></a>
        </div>
        <h2 class="name_p"><?=$value['ten_'.$lang]?></h2>
        <div class="price_p">Giá <span><?=$value['giaban']?></span></div>
      </div>
    </div>
    <?php }
    } ?>
  </div><!--row p-->
  </div><!--content main-->
</div><!--sub main-->