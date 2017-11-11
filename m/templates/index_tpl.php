<div class="sub_main">
    <div class="title_main"><span><?=_sanphammoi?></span></div>
          <div class="content_main">
            <div class="row_p">
              <?=get_product_items_m($product_index)?>
            </div><!--end row san pham-->
          <?=$paging?>
          </div><!--content main-->
          <div class="clear"></div>
</div><!--end sub main-->


<!--=====================Danh mục index=======================-->
<?php
  for ($i=0; $i <count($list) ; $i++) { ?>
   <div class="sub_main">
    <div class="title_main"><span><?=$list[$i]['ten_'.$lang]?></span></div>
          <div class="content_main">
            <div class="contain_owl_index">
              <div class="next_index next_index<?=$list[$i]['id']?>"></div>
              <div class="prev_index prev_index<?=$list[$i]['id']?>"></div>
            <div class="owl_index owl-theme owl-carousel" data-id="<?=$list[$i]['id']?>">
             
              <?=get_product_items_m($product_index,'w100')?>
   
            </div><!--owl index-->
          </div><!--end contain owl index-->
          </div><!--content main-->
          <div class="clear"></div>
</div><!--end sub main-->
<?php } ?>

