<div class="sub_main">
  <div class="title_main"><span><?=$title_detail?></span></div>
  <div class="content_main">
    <div class="row_p">
    <?php
    if($product){
      foreach ($product as $key => $value) { ?>
    <div class="col_p">
      <div class="box_p">
        <div class="img_p">
          <a href="http://<?=$config_url?>/san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html"><amp-img srcset="../timthumb.php?src=<?=_upload_product.$value['photo']?>&w=280&h=200&zc=1&q=100" width="280" height="200" layout="responsive"></amp-img></a>
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