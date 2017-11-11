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
?>
<!DOCTYPE html PUBLIC>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
<link rel="stylesheet" href="../css/bootstrap/bootstrap.css">
<script type="text/javascript" src="../js/bootstrap/bootstrap.min.js"></script>
</head>

<body>
	<?php
	$d->reset();
	$d->query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' AND TABLE_SCHEMA='source_tuan'");
	$tables=$d->result_array();
	var_dump($tables[0]);
		echo '<br />=========================================================================================================================<br />';
	echo $tables[0]['TABLE_SCHEMA'];
	//$tables=mysql_query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' ");
	// var_dump($tables);
	// while ($row=mysql_fetch_array($tables)) {
	// 	var_dump($row);
	// 	echo '<br />=========================================================================================================================<br /><br /><br /><br />';
	// }
	?>
	<div class="container">
		 <div class="panel panel-default">
	    	<div class="panel-heading">asdas</div>
	    	<div class="panel-body">
	    		asdasd
	    	</div>
	    </div>
	</div>
   
</body>
</html>