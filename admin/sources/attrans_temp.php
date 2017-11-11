<?php	
header('Content-Type: text/html; charset=utf-8');
mb_internal_encoding('UTF-8');
if(!defined('_source')) die("Error");
error_reporting(E_ALL&~E_NOTICE);
@define ( '_lib_at' , '../libraries/');
@define ( '_source_at' , '../sources/');
ini_set('display_errors', 0);
ini_set('display_errors', 4096);
ini_set('max_execution_time', 100);
include(_lib_at.'my_lib/GoogleTranslate.class.php');
$file = fopen(_source_at."lang_vi.php","r");
require_once(_lib_at.'config.php');
include_once _lib_at."class.database.php";
$d = new database($config['database']);


$source = 'vi';
$target = 'en';
$arr_check=array('cn');
$arr_check_utf8=array('th','en');

/*reset table*/
$d->reset();
$d->query("delete from #_lang");

if ($file) {
	foreach($config['lang'] as $key => $value){
	if($key=='vi') continue;
	$txt="<?php\r";
		$target = $key;
		if(in_array($key,$arr_check))
			$target=get_code_lang($key); //if ky tu minh dat khac voi code language
			 while (!feof($file)) {
			 $buffer = fgets($file);
			 $pos = strpos($buffer, '(');
			 //echo $buffer.'<br />';
			 $get_string=substr($buffer,$pos);
			 $arr_string=explode("','",$get_string);
			 if($arr_string[1]!=''){
				$string_replace=str_replace("');","",trim($arr_string[1]));
				//$arr_string[0]);
				$translation = GoogleTranslate::translate($source, $target, $string_replace);
				$translation = str_replace("'","\'",$translation);
				$txt.="define".$arr_string[0]."','".$translation."');\r";
			
			 }
		  }
	//exit();
	$txt.="?>";
		$myfile = fopen(_source_at."lang_".$key.".php", "w") or die("Unable to open file!");
		//fwrite($myfile, utf8_encode($txt));
		if(in_array($key,$arr_check_utf8))
			fwrite($myfile, pack("CCC",0xef,0xbb,0xbf)); 
		fwrite($myfile, $txt);
		fclose($myfile);
		 fclose($file);
		 $file = fopen(_source_at."lang_vi.php","r");
	}
	fclose($file);
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