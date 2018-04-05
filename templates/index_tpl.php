<?php /* ?>
<div class="sub_main">
  <div class="title_main"><span><?=_sanphammoi?></span></div>
  <div class="content_main">
    <div class="row_p">
      <?=get_product_items($product_index)?>
    </div><!--end row san pham-->
  <?=$paging?>
  </div><!--content main-->
  <div class="clear"></div>
</div><!--end sub main-->

<?php
// danh muc theo tab
for ($i=0; $i <count($listnb) ; $i++) {
  $d->reset();
  $d->query("select * from #_product_cat where hienthi=1 and id_list=".$listnb[$i]['id']." order by ten_$lang");
  $catnb=$d->result_array();
?> 
<div class="sub_main my_box_tab">
  <div class="title_main"><span><?=$listnb[$i]['ten_'.$lang]?></span>
    <div class="box_cat_title">
      <?php
      foreach ($catnb as $key => $value) { ?>
        <a href="#cat<?=$value['id']?>" class="item_tab_cm"><?=$value['ten_vi']?></a>
      <?php }  ?>
    </div>
  </div>
  <div class="content_main">
    <?php for ($j=0;$j<count($catnb);$j++) { ?>
    <div id="cat<?=$catnb[$j]['id']?>" class="content_tab_cm box_re box_hid">
      <div class="prev_cm prev<?=$catnb[$j]['id']?>"></div>
      <div class="next_cm next<?=$catnb[$j]['id']?>"></div>
      <div class="row_p">
        <div class="" data-owl-carousel data-id="<?=$catnb[$j]['id']?>">
          <?=get_product_items($product_index,'w100')?>
        </div><!--end row san pham-->
      </div>
    </div>
    <?php } ?>
  <?=$paging?>
  </div><!--content main-->
  <div class="clear"></div>
</div><!--end sub main-->
<?php }  ?>
<?php */ ?>

<?php 
//danh muc chay slider
for ($i=0; $i <count($listnb) ; $i++) { ?>
  <div class="sub_main">
    <div class="title_main"><span><?=$listnb[$i]['ten_'.$lang]?></span></div>
    <div class="content_main">
      <div class="box_re box_hid">
        <div class="prev_cm" data-owl-prev><i class="fa fa-chevron-left"></i></div>
        <div class="next_cm" data-owl-next><i class="fa fa-chevron-right"></i></div>
        <div class="row_p">
         <div class="owl-carousel owl-theme" data-owl-carousel-custom>
            <?=get_product_items($product_index,'w100')?>
          </div><!--end row san pham-->
        </div>
      </div>
    <?=$paging?>
    </div><!--content main-->
    <div class="clear"></div>
  </div><!--end sub main-->
<?php } ?>

<?php
//danh muc có hình chung
for ($i=0; $i <count($listnb) ; $i++) { ?> 
  <div class="sub_main">
    <div class="title_main"><span><?=$listnb[$i]['ten_'.$lang]?></span></div>
    <div class="content_main">
        <div class="left_index">
          <img src="<?=_upload_product_l.$listnb[$i]['thumb']?>" alt="<?=$listnb[$i]['ten_'.$lang]?>" />
        </div>
        <div class="right_index box_hid">
          <div class="row_p">
            <div class="owl_sing_index owl-carousel">
              <?php 
                foreach ($product_index as $key => $value) { 
                if(($key) % 6 === 0) echo '<div>';
              ?> 
              <div class="col_sanpham col-md-4 col-sm-4 col-smx-4 col-xs-6 <?=$class_add?>" >
                  <div class="box_p wow animated fadeIn " data-wow-delay="0.<?=$key%3?>s">
                    <div class="img_p">
                      <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>"><img src="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],280,200)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/></a>
                    </div><!--end img p-->
                    <div class="name_p">
                      <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>"><h2><?=$value['ten_'.$lang]?></h2></a>
                    </div><!--end ten p-->
                    <div class="gia_p">
                        <?=_gia?> : <span><?=$value['giaban']==0?_lienhe:number_format($value['giaban'],0,',',',').' VNĐ'?></span>
                    </div><!--end gia p-->
                    <div class="more_p">
                      <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>"><?=_xemthem?></a>
                    </div><!--end more san pham-->
                    <div class="dathang_p">
                      <a href="javascript:" class="add_to_basket btn_dathang" onclick="addtocart(<?=$value['id']?>,1)"><?=_dathang?></a>
                    </div><!--end dat hang san pham-->
                    <div class="btn_like_p" data-id="<?=$value['id']?>"><i class="fa fa-heart fa-4x"></i></div>
                    <div class="rate_p" data-score="<?=$value['rate']?>" data-id="<?=$value['id']?>"></div>
                  </div><!--end box san pham-->
                </div><!--end col san pham-->
              <?php if(($key + 1) % 6 === 0 || $key + 1 >= count($product_index)) echo '</div>'; } ?>
          </div><!--end owl sing index-->
        </div><!--row p-->
      </div><!--right index-->
    </div><!--content main-->
    <div class="clear"></div>
  </div><!--end sub main-->
<?php } ?>