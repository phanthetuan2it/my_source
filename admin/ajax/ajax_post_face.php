<?php

	@define ( '_lib' , '../../libraries/');
	
	include_once _lib."config.php";
	include_once _lib."constant.php";
	include_once _lib."functions.php";
	include_once _lib."class.database.php";

	$d = new database($config['database']);	
	$d->reset();
	$d->query("select * from #_setting");

	$row_setting=$d->fetch_array();


	$data_id=$_REQUEST['data_id'];
	$d->reset();
	$d->query("select * from #_product where id=".$data_id);
	$data=$d->fetch_array();

	require_once _lib.'facebook_php_sdk/facebook.php';
	$facebook = new Facebook(array(
	   'appId' => $row_setting['face_appid'],
	   'secret' => $row_setting['face_secret']
	));

		$id_page=$row_setting['face_pageid'];
		$token=stripslashes($row_setting['face_accesstoken']);
	
		try{	
		
			$api = $facebook->api($id_page .'/feed', 'POST', array(
				access_token => $token,
				link => 'http://'.$config_url.'/san-pham/'.$data['tenkhongdau'].'-'.$data['id'].'.html',
				message => '',//tieu de status
			 ));
			
			echo 'post thành công';
		}catch(Exception $e){
			echo $e->getMessage();
		}
		//echo "<br><a href = 'logout.php'>Logout</a>";
	//}
?>