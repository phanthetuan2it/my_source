<?php 
	/**
	 * NINA Framework
	 * Vertion 1.0
	 * Author NINA Co.,Ltd. (nina@nina.vn)
	 * Copyright (C) 2015 NINA Co.,Ltd. All rights reserved
	*/
	 
	if(!defined('_lib')) die("Error");
	function nettuts_error_handler($number, $message, $file, $line, $vars)
	{
		if ( ($number !== E_NOTICE) && ($number < 2048) ) {
			include 'templates/error_tpl.php';
			die();
		}
	}
	//set_error_handler('nettuts_error_handler');
	//error_reporting(0);

	date_default_timezone_set('Asia/Ho_Chi_Minh');

	$config_url=$_SERVER["SERVER_NAME"]."/source_tuan";
	//$config['debug']=1;    #Bật chế độ debug dành cho developer
	$_SESSION['ck_folder']='http://'.$config_url.'/upload/';
	$config_email="info@demo42.ninavietnam.com.vn";
	$config_pass="Aa9343951";
	$config_ip="127.0.0.1";
	$config['lang']= array('vi'=>'Tiếng việt');
	$config['lang_active']= 'vi';

	$config['database']['servername'] = 'localhost';
	$config['database']['username'] = 'root';
	$config['database']['password'] = '';
	$config['database']['database'] = 'source_tuan';
	$config['database']['refix'] = 'table_';
	$name_log ="name_log"; //name session login
?>