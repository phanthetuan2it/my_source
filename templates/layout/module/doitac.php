<?php
  $d->reset();
  $sql="select thumb_$lang,photo_$lang,ten_$lang,link from #_photo where hienthi=1 and type='doitac' order by stt asc,id desc";
  $d->query($sql);
  $doitac=$d->result_array();
  $show_doitac=true;
?>
<div class="clear"></div>
<div id="doitac">
  <div class="contain_owl_doitac inner">
    <a href="javascript:" class="prev_cm" data-owl-prev><i class="fa fa-chevron-left"></i></a>
    <a href="javascript:" class="next_cm" data-owl-next><i class="fa fa-chevron-right"></i></a>
    <div class="owl-carousel" data-owl-carousel-custom data-owl-options='{"items": 8,"margin": 10, "dots": false,
    "responsive": {"1000": {"items": 8}, "800": {"items": 4}, "600": {"items": 3},"0": {"items": 2}}}'>
      <?php
      foreach ($doitac as $key => $value) { ?>
        <div class="item_doitac">
          <a href="<?=$value['link']?>" target="_blank"><img src="<?=thumb($value['photo_'.$lang],_upload_hinhanh_l,$value['tenkhongdau'],140,90)?>" alt="<?=$value['ten_vi']?>" class="w100" /></a>
        </div>
      <?php } ?>
    </div>
  </div>
</div><!--end doitac-->

