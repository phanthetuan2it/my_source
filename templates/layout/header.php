
<div id="header" style="background-image:url(<?=_upload_hinhanh_l.$banner_top['photo_vi']?>)">
  <div id="banner">
    <div class="inner">
      <?php if(!$_GET['id']){ ?>
      <h1 class="vcard"><?=$row_setting['ten_'.$lang]?></h1>
      <?php } ?>
        <div class="logo">
          <a href=""><img src="<?=_upload_hinhanh_l.$logo['photo_'.$lang]?>" alt="<?=$row_setting['ten_'.$lang]?>" class="mw100"/></a>
        </div><!--end logo-->
        <div id="languages">
           <a href="http://<?=$config_url?>/ngon-ngu/vi.htm" target="_self"><img src="images/icon_vi.png" alt="vi" /></a>
          <a href="http://<?=$config_url?>/ngon-ngu/en.htm" target="_self"><img src="images/icon_en.png" alt="en" /></a>
        </div>
         <?php include_once _template.'layout/module/dkdn.php'; ?>
         <a href="san-pham-yeu-thich.html">Sản phẩm yêu thích</a>
  </div>
     </div><!-- #banner-->
  <div class="clear"></div>
</div>
<!-- #header -->