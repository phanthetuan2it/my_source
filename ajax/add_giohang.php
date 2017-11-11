<?php
	session_start();
	error_reporting(E_ALL & ~E_NOTICE & ~8192);
	
	@define ( '_lib' , '../libraries/');
    
	include_once _lib."config.php";
	include_once _lib."constant.php";;
	include_once _lib."functions_giohang.php";
	include_once _lib."class.database.php";
    
	$d = new database($config['database']);
		
	@$pid = $_POST['pid'];
	@$songay = $_POST['songay'];
	@$thongtin = $_POST['thongtin'];
	if($_POST['soluong']>0){
		@$soluong = $_POST['soluong'];
	}else {
		@$soluong = 1;
	}
     
    if ($songay==0) {
    	$result_giohang = addtocart($pid,$soluong);
    }else{
    	$result_giohang = addtocart($pid,$soluong,$songay);
    }    

    $count = count($_SESSION['cart']);
	
	$result = array('result_giohang' => $result_giohang,'count' => $count);

	echo json_encode($result);
?>