<?php	
header('Content-Type: text/html; charset=utf-8');
mb_internal_encoding('UTF-8');
if(!defined('_source')) die("Error");
error_reporting(E_ALL&~E_NOTICE);
@define ( '_lib_at' , '../libraries/');
@define ( '_source_at' , '../sources/');
ini_set('display_errors', 0);
ini_set('display_errors', 4096);
ini_set('max_execution_time', 200);
include(_lib_at.'my_lib/GoogleTranslate.class.php');
include_once (_lib_at.'functions.php');
$file = fopen(_source_at."lang_vi.php","r");
require_once(_lib_at.'config.php');
include_once _lib_at."class.database.php";
$d = new database($config['database']);


$source = 'vi';
$target = 'en';
$arr_check=array('cn');
$arr_check_utf8=array('th');

/*reset table*/
$d->reset();
$d->query("delete from #_lang");

$sql="ALTER TABLE table_lang AUTO_INCREMENT =1";
$add = mysql_query($sql);


if ($file) {
	foreach($config['lang'] as $key => $value){
	// nếu là tiếng việt
	if($key=='vi'){
		$target = $key;
		if(in_array($key,$arr_check))
			$target=get_code_lang($key); //if ky tu minh dat khac voi code language
			 while (!feof($file)) {
			 $buffer = fgets($file);
			 $pos = strpos($buffer, '(');
			 //echo $buffer.'<br />';
			 $get_string=substr($buffer,$pos);
				//exit($get_string);
			 $arr_string=explode("','",$get_string);
			 $d->reset();
			 $d->setTable('lang');
			 if($arr_string[1]!=''){
				$string_replace=str_replace("');","",trim($arr_string[1])); //chuỗi dịch

				$string_define=str_replace("('","",trim($arr_string[0]));; // chuỗi define _ten
				$data['define']=$string_define;
				$data['define_text']=str_replace("'","&#39;",$string_replace);
				$data['lang']=$key;
				$d->insert($data);
			 }
		  }
		   fclose($file);
		   $file = fopen(_source_at."lang_vi.php","r");
		  continue;
	}
	//các ngôn ngữ còn lại
	$txt="<?php\r\n";
		$target = $key;
		if(in_array($key,$arr_check))
			$target=get_code_lang($key); //if ky tu minh dat khac voi code language
			 while (!feof($file)) {
			 $buffer = fgets($file);
			 $pos = strpos($buffer, '(');
			 //echo $buffer.'<br />';
			 $get_string=substr($buffer,$pos);
			 $arr_string=explode("','",$get_string);
			 $d->reset();
			 $d->setTable('lang');
			 if($arr_string[1]!=''){
				$string_replace=str_replace("');","",trim($arr_string[1])); //chuỗi dịch
				$string_define=str_replace("('","",trim($arr_string[0]));; // chuỗi define _ten
				$translation = GoogleTranslate::translate($source, $target, $string_replace);
				$translation = str_replace("'","\'",$translation);
				$txt.="@define".$arr_string[0]."','".$translation."');\r\n";
				$d->query("select id from #_lang where define='$string_define' and lang='vi'");
				$row_parent=$d->fetch_array();
			
				$data['define']=$string_define;
				$data['define_text']=str_replace("'","&#39;",$translation);
				$data['id_parent']=$row_parent['id'];
				$data['lang']=$key;
				$d->insert($data);
			 }
		  }
	//exit();
	$txt.="?>";
		$myfile = fopen(_source_at."lang_".$key.".php", "w") or die("Unable to open file!");
		if(in_array($key,$arr_check_utf8))
		{
			//fwrite($myfile, utf8_encode($txt));
			fwrite($myfile, pack("CCC",0xef,0xbb,0xbf)); 
		}
		
		fwrite($myfile, $txt);
		fclose($myfile);
		 fclose($file);
		 $file = fopen(_source_at."lang_vi.php","r");
	}
	fclose($file);
	rewrite_lang();
}

function get_code_lang($lang){
	$code="";
	switch($lang){
		case 'cn';
		$code="zh-CN";
	}
	return $code;
}
?>