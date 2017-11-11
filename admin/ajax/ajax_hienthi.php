<?php 
session_start();
	@define ( '_lib' , '../../libraries/');
	include_once _lib."config.php";
	include_once _lib."class.database.php";
	$d = new database($config['database']);
	if(isset($_POST["id"])){
		$sql = "update ".$_POST["bang"]." SET ".$_POST["type"]."=".$_POST["value"]." WHERE  id = ".$_POST["id"]."";
		$data = mysql_query($sql);
		if(!$data){
			$table  = $_POST["bang"];
			 $column = $_POST["type"];
			 $sql_add="ALTER TABLE $table ADD $column INT( 1 ) NOT NULL";
			 //echo $sql_add;
			 $add = mysql_query($sql_add);
			 mysql_query($sql);
		}
	}
?>