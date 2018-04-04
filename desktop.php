<?php

  error_reporting(E_ALL & ~E_NOTICE);
  session_start();
  @define ( '_template' , './templates/');
  @define ( '_source' , './sources/');
  @define ( '_lib' , './libraries/');
  include_once _lib."config.php";
  include_once _lib."constant.php";
  include_once _lib."functions.php";
  include_once _lib."functions_share.php";
  include_once _lib."class.database.php";
  $d = new database($config['database']);
  $d->reset();
  $sql_setting = "select * from #_setting limit 0,1";
  $d->query($sql_setting);
  $row_setting= $d->fetch_array();
  
  if(!isset($_SESSION['lang'])||$_SESSION['lang']==''){
    $_SESSION['lang']=$row_setting['lang'];
  }
  $lang=$_SESSION['lang'];
  include_once _source."lang_$lang.php";	
  include_once _lib."functions_giohang.php";
  include_once _lib."file_requick.php";
  include_once _lib."counter.php"; 
  include_once _source."template.php";
  
  if($_REQUEST['command']=='add' && $_REQUEST['productid']>0){
  $pid=$_REQUEST['productid'];
  $soluong=1;
  addtocart($pid,$soluong);
  redirect("gio-hang.html");}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="vi">
<head>
  <?php include_once _template.'layout/seo.php'; ?>
  <?php include_once _template.'layout/files_css.php'; ?>
  
  <?=$row_setting['script_top']?>
  <?=$row_setting['analytics']?> 
</head>
<?php
  /*$table  = 'table_product';
   $column = 'q6';
   $add = mysql_query("ALTER TABLE $table ADD $column VARCHAR( 255 ) NOT NULL");*/
?>
<?php
/*
  $d->reset();
  $d->query("select * from #_bgweb where hienthi=1 and type='bgweb'");
  $background=$d->fetch_array();
?>
<style>
body{
  background:<?=$background['mauneen']?> url(<?=_upload_hinhanh_l.$background['photo']?>) <?=$background['trai']?> <?=$background['tren']?> <?=$background['re_peat']?>;
}
</style>
<?php */ ?>
<body cz-shortcut-listen="true">
<?php
  //check source
  $arr_check_die=array('register','login','info_user','forgot_password');
  if(in_array($source,$arr_check_die)){
    include_once _template.$template."_tpl.php"; die;
  }
?>

<div class="se-pre-con"></div>
<div id="fb-root"></div>
<script>
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
js.id = id;
  js.src ="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.3";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>


<?php
/*
if (!isset($_SERVER['PHP_AUTH_USER'])) {
   header('WWW-Authenticate: Basic realm="Vui lòng nhập thông tin username và password"');
   header('HTTP/1.0 401 Unauthorized');
   echo 'Text to send if user hits Cancel button';
   exit;
} else {
   $username = $_SERVER['PHP_AUTH_USER'];
   $password = $_SERVER['PHP_AUTH_PW'];
   if($username == 'ten_xac_thuc' && $password == 'mk_xac_thuc') {
      echo 'Đăng nhập ứng dụng thành công';
   }else {
      echo 'username hoặc password không chính xác';

   }
}
*/
?>

<div id="full">
  <?php //include_once _template."form/form_login_popup.php"; ?>
    <div id="wrapper">
      <?php 
      include_once _template."layout/header.php"; 
      include_once _template."layout/menu.php"; 
      // include_once _template."layout/slider.php"; 
    ?>
      <div id="container" class="inner">
        <div id="main" class="col-md-8 col-sm-8 col-xs-12 pd10-smx">
          <?php include_once _template.$template."_tpl.php"; ?>
        </div><!--end main-->
        <div id="left" class="col-md-4 col-sm-4 col-xs-12 pd10-smx">
          <?php // include_once _template.'layout/left.php'; ?>
        </div><!--end left-->
        </div><!--#container-->
        <div class="clear"></div>
        <?php include_once _template.'layout/module/doitac.php'; ?>
        <?php include_once _template.'layout/footer.php';  ?>
    </div><!-- #wrapper -->
</div><!-- #full --> 
<?php include_once _template.'layout/files_js.php'; ?>
<?=$row_setting['vchat']?>
<?=$row_setting['script_bottom']?>
</body>
</html>
