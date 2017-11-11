<?php
	session_start();
	@define ( '_lib' , '../libraries/');

	include_once _lib."config.php";
	include_once _lib."functions.php";
	include_once _lib."library.php";
	include_once _lib."class.database.php";	

	$d = new database($config['database']);	

	$d->reset();
	$d->query("SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE' AND TABLE_SCHEMA='source_tuan'");
	$tables=$d->result_array();

	foreach ($tables as $key => $value) {
		$d->reset();
		$d->query("select *  from information_schema.columns  where table_schema = 'source_tuan'  and table_name = '".$value['TABLE_NAME']."'");
		$columns=$d->result_array();
		for ($i=0; $i <count($columns) ; $i++) { 

			//echo ($columns[$i]['DATA_TYPE']);
			$default=set_default_value_col($columns[$i]['DATA_TYPE']);
			//echo $columns[$i]['DATA_TYPE'].'===='.$default.'<br />';
			$d->reset();
			if(!$default){
				$sql="ALTER TABLE `".$value['TABLE_NAME']."` ALTER COLUMN `".$columns[$i]['COLUMN_NAME']."` SET DEFAULT $default";
				$d->query($sql);
			}else{
				if($columns[$i]['DATA_TYPE']=='varchar'){
					$sql="ALTER TABLE `".$value['TABLE_NAME']."` CHANGE `".$columns[$i]['COLUMN_NAME']."` `".$columns[$i]['COLUMN_NAME']."` VARCHAR(225) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL";
				}else{
					$sql="ALTER TABLE `".$value['TABLE_NAME']."` CHANGE `".$columns[$i]['COLUMN_NAME']."` `".$columns[$i]['COLUMN_NAME']."` ".$columns[$i]['DATA_TYPE']." CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL";
				}
				$d->query($sql);
			}
			
		}
	}
	echo 'ok';



	function set_default_value_col($data_type){
	
		switch ($data_type) {
			case 'int':
			case 'float':
			case 'double':
			case 'tinyint':
				$default=0;
			break;
			
			case 'varchar':
			case 'text':
				$default='NULL';
				break;
			
			default:
				$default='NULL';
				break;
		}
		return $default;
	}

 ?>