<div id="header" >
  <div id="banner">
    <div class="inner">
      <?php if(!$_GET['id']){ ?>
      <h1 class="vcard"><?=$row_setting['ten_'.$lang]?></h1>
      <?php } ?>
        <div class="logo">
         <a href=""><amp-img src="http://<?=$config_url?>/<?=_upload_hinhanh_l.$logo["photo_".$lang]?>" width="140" height="70"></amp-img></a>
        </div><!--end logo-->
          
  </div>
     </div><!-- #banner-->
  <div class="clear"></div>
</div>
<!-- #header -->

<div class="box_search clearfix">
    <div class="btn_show_menu">
        <button class="navmenu_link" title="Thanh điều hướng website" on='tap:sidebar.toggle'><i class="fa fa-bars"></i></button> 
    </div>
    <div class="contain_search_box">
        <?php include_once _template.'layout/module/timkiem.php'; ?>
    </div>
</div>
