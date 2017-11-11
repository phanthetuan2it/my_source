<?php
	error_reporting(E_ALL & ~E_NOTICE);
	session_start();
	include_once "./m/lib/Mobile_Detect.php";
	$detect = new Mobile_Detect;
	$deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');
	if($deviceType == 'computer'){
		include_once 'desktop.php';
	}else{
		include_once 'mobile.php';
	}
?>