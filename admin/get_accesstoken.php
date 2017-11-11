<?php

	session_start();
	@define ( '_template' , './templates/');
	@define ( '_source' , './sources/');
	@define ( '_lib' , '../libraries/');
	
	$page = (int)(!isset($_GET["page"]) ? 1 : $_GET["page"]);
	if ($page <= 0) $page = 1;
	$lang = 'vi';

	include_once _lib."config.php";
	include_once _lib."constant.php";
	include_once _lib."type.php";
	include_once _lib."functions.php";
	include_once _lib."functions_giohang.php";
	include_once _lib."library.php";
	include_once _lib."class.database.php";	
	include_once _lib."pclzip.php";

	$com = (isset($_REQUEST['com'])) ? addslashes($_REQUEST['com']) : "";
	$act = (isset($_REQUEST['act'])) ? addslashes($_REQUEST['act']) : "";	
	$login_name = 'NINACO';	
	$d = new database($config['database']);	
	$d->reset();
	$sql="select * from #_setting";
	$d->query($sql);
	$row_setting=$d->fetch_array();

	require_once _lib.'facebook_php_sdk/facebook.php';
	$facebook = new Facebook(array(
	'appId' => $row_setting['face_appid'],
	'secret' => $row_setting['face_secret']
	));
	
	
	
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>

</head>

<body>
  <?php 
  $my_url="http://beaumore.com.vn/admin/get_accesstoken.php";
	$token_url = "https://graph.facebook.com/oauth/access_token?"."client_id=" . $row_setting['face_appid'] . "&redirect_uri=" . urlencode($my_url). "&client_secret=" . $row_setting['face_secret'] . "&code=" . $_GET['code'];
	
	$response = file_get_contents($token_url);
	//$params = null;
	//parse_str($response, $params);
	//$access_token = $params['access_token'];
	
	$response_de=json_decode($response);
	$f_contents=file_get_contents('https://graph.facebook.com/me/accounts?access_token='.$response_de->access_token);
	$f_json=json_decode($f_contents,true);
	if($f_json){
		foreach($f_json['data'] as $key => $value){
			if($value['id']==$row_setting['face_pageid'])
			$access_token_page=$value['access_token'];
		}
	}
	//$access_token_page=$f_json['data'][0]['access_token'];
	
  if($_GET['code']){ ?>
		<h2>Access token của bạn</h2>
		<textarea style="width:100%;height:150px;"><?=$access_token_page?></textarea>
	<?php }else{
		if($facebook->getUser() == 0){
			$loginUrl = $facebook->getLoginUrl(array(
				scope => 'manage_pages, publish_pages'
			 ));	
			echo "<a href = '$loginUrl'>Login with facebook</a>";
		}else{
			$pages = $facebook->api('me/accounts');
			$id_page = $pages['data'][0]['id'];
			$token = $pages['data'][0]['access_token'];
		}
	} ?>
</body>
</html>