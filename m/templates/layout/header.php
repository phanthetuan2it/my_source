<?php
  $d->reset();
  $sql= "select photo_$lang from #_photo where type='logo'";
  $d->query($sql);
  $logo = $d->fetch_array();
?>
<div id="header">
  <div id="banner">
    <div class="inner">
      <?php if(!$_GET['id']){ ?>
      <h1 class="vcard"><?=$row_setting['ten_'.$lang]?></h1>
      <?php } ?>
        <div class="logo">
          <a href=""><img src="<?=_upload_hinhanh_l.$logo['photo_'.$lang]?>" alt="<?=$row_setting['ten_'.$lang]?>" class="mw100"/></a>
        </div><!--end logo-->
        <div class="hotline_top">Hotline <span><?=$row_setting['hotline']?></span></div>
        <div id="languages">
           <a href="http://<?=$config_url?>/ngon-ngu/vi.htm" target="_self"><img src="images/icon_vi.png" alt="vi" /></a>
          <a href="http://<?=$config_url?>/ngon-ngu/en.htm" target="_self"><img src="images/icon_en.png" alt="en" /></a>
        </div>
  </div>
     </div><!-- #banner-->
  <div class="clear"></div>
</div>
<!-- #header -->