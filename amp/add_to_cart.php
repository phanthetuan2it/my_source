<?php 
	session_start();
	//@define ( '_template' , './templates/');
	@define ( '_source' , '../sources/');
	@define ( '_lib' , '../libraries/');
	//lấy ngôn ngữ
	if(!isset($_SESSION['lang']))
	{
		$_SESSION['lang']='vi';
	}
	$lang=$_SESSION['lang'];
	
	include_once _lib."config.php";
	include_once _lib."constant.php";
	include_once _lib."class.database.php";
	$d = new database($config['database']);
	include_once _lib."functions.php";
	//gọi lang
	$lang_arr = get_lang_data($lang);
	include_once _lib."file_requick.php";
	//include_once "smsapi.php";
	#======================addtocar
	if(!empty($_GET) && $_GET["id_product"]!='' && $_GET["soluong"]!='' ){
		include_once _lib."functions_giohang.php"; 	
		if(addtocart(intval($_GET["id_product"]),intval($_GET["soluong"]),intval(@$_GET["color"]),intval(@$_GET["size"]))){
			if($_GET["add-to-pay"]!=''){
				redirect("http://".$config_url."/thanh-toan.html");
			}else if($_GET["add-to-cart"]!=''){
				redirect("http://".$config_url."/gio-hang.html");
			}
		}	
	}
?>