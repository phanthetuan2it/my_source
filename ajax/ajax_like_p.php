<?php
	session_start();
	error_reporting(E_ALL & ~E_NOTICE & ~8192);
	
	@define ( '_lib' , '../libraries/');
    
	include_once _lib."config.php";
	include_once _lib."constant.php";;
	include_once _lib."functions_giohang.php";
	include_once _lib."class.database.php";
	$d = new database($config['database']);

	$id_p=$_GET['data_id'];
	$action=$_GET['action'];
	$id_tv=$_SESSION[$name_log]['id'];

	if($action=='add'){
		if($_SESSION[$name_log]==null){
		exit('<div  class="my_alert alert alert-warning"><strong>Bạn cần phải đăng nhập để thực hiện chức năng này</strong><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
		}

		$d = new database($config['database']);
		$d->reset();
		$d->query("select * from table_product_like where id_p=".$id_p." and id_tv=".$id_tv);
		$row=$d->fetch_array();
		if($row){ 
			exit('<div  class="my_alert alert alert-danger"><strong>Sản phẩm đã nằm trong danh sách yêu thích</strong><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
		 } else{ 
		 	$d->reset();
		 	$data['id_p']=$id_p;
		 	$data['id_tv']=$id_tv;
		 	$d->setTable('product_like');
		 	$d->insert($data);
			exit('<div  class="my_alert alert alert-success"><strong>Sản phẩm đã được thêm vào danh sách yêu thích</strong><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
		 }
	}else{
		$d->reset();
		$sql="delete from table_product_like where id_p=$id_p and id_tv=$id_tv";
		if($d->query($sql)){
			exit('1');
		}else{
			exit('2');
		}
	}
	
	
	
?>