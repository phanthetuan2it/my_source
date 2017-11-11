<link href="reCaptcha/style.css" rel="stylesheet" type="text/css">
<div id="header_register">
  <div class="inner">
    <div class="logo_register">
      <a href="http://<?=$config_url?>/index.html"><img src="<?=_upload_hinhanh_l.$logo['photo_'.$lang]?>" alt="<?=$row_setting['ten_'.$lang]?>" class="mw100" /></a>
    </div><!--logo register-->
  </div>
</div>
<div class="contain_box_register">
  <div class="sub_main">
    <?php include_once _template.'layout/module/breadcrumb.php'; ?>
  <div class="title_register"><h2>Đăng nhập thành viên</h2></div>
  <div class="content_main">

    <div class="box_dangky">
        <?php include _template.'form/form_login.php'; ?>
    </div>
  </div><!--content main-->
</div><!--sub main-->
</div><!--end contain box register-->

