<?php
	error_reporting(E_ALL & ~E_NOTICE);
	session_start();
	@define ( '_template' , './m/templates/');
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
<body>

<?php if($com!='gio-hang'){ ?>
<form name="form1" action="index.php">
    <input type="hidden" name="productid" />
    <input type="hidden" name="quality" />
    <input type="hidden" name="psize" />
    <input type="hidden" name="pmau" />
    <input type="hidden" name="command" />
</form>

<script language="javascript" type="text/javascript">
    function addtocart(pid,q){
        document.form1.productid.value=pid;
        document.form1.quality.value=q;
        // document.form1.quality.value=document.getElementById('quality').value;
        document.form1.command.value='add';
        document.form1.submit();
    }
</script>
<?php  } ?>


<div id="full" class="mm-page">
    <div id="wrapper">
    	<?php 
			include_once _template.'layout/header.php'; 
			include_once _template.'layout/menu.php';
			include_once _template.'layout/slider.php'; 
		?>
    	<div id="container" class="inner">
    		<?php include_once _template.$template."_tpl.php"; ?>
    	</div><!--end container-->
    	<?php include_once _template.'layout/module/doitac.php';  ?>
    	<?php include_once _template.'layout/footer.php';  ?>
	</div>
</div><!-- #full --> 
<!-- <div id="out_mm_page" class="mm-slideout"><a href="#menu_bootstrap" id="btn_menu_bootstrap2" ><span class="transAll03"></span></a></div> -->


<?=$row_setting['vchat']?>
<?=$row_setting['script_bottom']?>
<?php include_once _template.'layout/files_js.php'; ?>
</body>
</html>
