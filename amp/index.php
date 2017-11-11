<?php

	error_reporting(E_ALL & ~E_NOTICE);
	
	session_start();
	@define ( '_template' , './templates/');
	@define ( '_source' , '../sources/');
	@define ( '_lib' , '../libraries/');
	
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

?>
<!DOCTYPE html>
<html ⚡ lang="<?=$lang?>">
<head itemscope itemtype="http://schema.org/WebSite">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php include _template."layout/base_meta.php";?>
<?php include _template."layout/base_css.php";?>
<?php include _template."layout/base_js_amp.php";?>
</head>

<body <?php if($_GET['com']=='lien-he'){?> onLoad="initialize()"<?php }?>>
<?php include _template."layout/base_analytics.php";?>

<?php include _template."layout/nav_mobile.php";?>
<div id="full_content" class="clearfix">
	<?php include _template."layout/header.php";?>
	<?php include _template."layout/slider.php";?>
	<?php include _template.$template."_tpl.php";?>
	<?php include _template."layout/footer.php";?>
</div>

<?php //include _template."layout/base_schema.php";?>
</body>
</html>