<?php if(!defined('_lib')) die("Error");

function get_product_items($product,$class_add="",$com="san-pham"){
	$string="";
	$lang=$_SESSION['lang'];
	if($product){
		foreach ($product as $key => $value) { ?>
		 <div class="col_p col-md-4 col-sm-4 col-smx-4 col-xs-6 <?=$class_add?>" >
                 <div class="box_p wow animated fadeIn " data-wow-delay="0.<?=$key%3?>s">
                      <div class="img_p zoom_img">
                          <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                             <img src="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],280,200)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/>
                          </a>
                      </div><!--end img sanpham-->
                      <div class="name_p">
                          <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <h2><?=$value['ten_'.$lang]?></h2>
                          </a>
                      </div><!--end ten sanpham-->
                      <div class="gia_p">
                          <?=_gia?> : <span><?=$value['giaban']==0?_lienhe:number_format($value['giaban'],0,',',',').' VNĐ'?></span>
                      </div><!--end gia sanpham-->
                      <div class="more_p">
                          <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <?=_xemthem?>
                          </a>
                      </div><!--end more san pham-->
                      <div class="dathang_p">
                          <a href="javascript:" class="add_to_basket btn_dathang" onclick="addtocart(<?=$value['id']?>,1)">
                              <?=_dathang?>
                          </a>
                      </div><!--end dat hang san pham-->
                      <div class="btn_like_p" data-id="<?=$value['id']?>"><i class="fa fa-heart fa-4x"></i></div>
                      <div class="rate_p" data-score="<?=$value['rate']?>" data-id="<?=$value['id']?>"></div>
                  </div><!--end box san pham-->
        </div><!--end col san pham-->
		<?php }
	}
}


function get_product_items_m($product,$class_add="",$com="san-pham"){
	$string="";
	$lang=$_SESSION['lang'];
	if($product){
		foreach ($product as $key => $value) { ?>
		 <div class="col_p col-md-4 col-sm-4 col-smx-4 col-xs-6 <?=$class_add?>" >
                 <div class="box_p wow animated fadeIn " data-wow-delay="0.<?=$key%3?>s">
                      <div class="img_p">
                          <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                             <img src="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],280,200)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/>
                         <!-- <img src="image.php?src=<?=_upload_product_l.$value['photo']?>&w=280&h=200&zc=1&q=100" class="w100" /> -->
                          </a>
                      </div><!--end img sanpham-->
                      <div class="name_p">
                          <a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <h2><?=$value['ten_'.$lang]?></h2>
                          </a>
                      </div><!--end ten sanpham-->
                      <div class="gia_p">
                          <?=_gia?> : <span><?=$value['giaban']==0?_lienhe:number_format($value['giaban'],0,',',',').' VNĐ'?></span>
                      </div><!--end gia sanpham-->
                      <div class="more_p">
                          <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <?=_xemthem?>
                          </a>
                      </div><!--end more san pham-->
                      <div class="dathang_p">
                          <a href="javascript:" class="add_to_basket btn_dathang" onclick="addtocart(<?=$value['id']?>,1)">
                              <?=_dathang?>
                          </a>
                      </div><!--end dat hang san pham-->
                      
                  </div><!--end box san pham-->
        </div><!--end col san pham-->
		<?php }
	}
}


function thumb($file,$path,$new='',$w=0,$h=0,$zc=1,$q=90){
	global $config_url;
	$xfile = explode(".",$file);
	$name = $xfile[0];
	$ext = $xfile[1];
	if(!$new){
		$new = $name;
	}
	if(!$new){
		$new = "photo";
	}
	return "http://".$config_url."/thumb/$w"."x"."$h/$zc/$q/$path$name.$ext";
}

/*my function*/
function get_precent_number($origin,$later){
	$percen=100-(($later*100)/$origin);
	return round($percen);
}
function update_col_count($id,$table,$col){
	$sql="select $col from $table where id=$id";
	$result=mysql_query($sql);
	$row=mysql_fetch_array($result);
	$num=$row[$col]+1;
	$sql="update $table set $col='".$num."' where id=$id";
	mysql_query($sql);
}
function format_giaban($giaban,$dinhdang,$duoi){
	$string="";
	if($giaban==0)
		return _lienhe;
	else
		return number_format($giaban,0,0,$dinhdang).$duoi;
}
function check_clear($number,$limit){
	if($number%$limit==0)
		echo '<div class="clear"></div>';
}
function process_quote($data,$flag=1){
	foreach ($data as $key => $value) {
		$data[$key]=magic_quote($data[$key]);
	}
	return $data;
}
function update_count($id,$table,$filed){
	global $d;
	$d->reset();
	$sql="select ";
	$sqlUPDATE_ORDER = "UPDATE table_$table SET banchay =0  WHERE  id = ".$id_up."";
	$resultUPDATE_ORDER = mysql_query($sqlUPDATE_ORDER) or die("Not query sqlUPDATE_ORDER");
}

function get_name_by_field($id,$table,$field){
	global $d;
	$d->reset();
	$sql="select $field from table_".$table." where id=".$id;
	$d->query($sql);
	$item=$d->fetch_array();
	return $item[$field];
	
}

function get_all_info($id,$table){
	global $d;
	$d->reset();
	$sql="select * from table_".$table." where id=".$id;
	$d->query($sql);
	$item=$d->fetch_array();
	return $item;
	
}

function get_name_month($index,$lang='en'){
	$index=intval($index);
	if($lang=='en'){
		$arr_m=array(1=>'January',2=>'February',3=>'March',4=>'April',5=>'May',6=>'June',7=>'July',8=>'August',9=>'September',10=>'October',11=>'November',12=>'December');
	}else if($lang=='vi'){
		$arr_m=array(1=>'Tháng 1',2=>'Tháng 2',3=>'Tháng 3',4=>'Tháng 4',5=>'Tháng 5',6=>'Tháng 6',7=>'Tháng 7',8=>'Tháng 8',9=>'Tháng 9',10=>'Tháng 10',11=>'Tháng 11',12=>'Tháng 12');
	}
	return $arr_m[$index];
}

function get_com_by_type($type){
	$string_com="";
	switch ($type) {
		case 'tintuc':
			$string_com="tin-tuc";
			break;
		case 'dichvu':
			$string_com="dich-vu";
			break;
		case 'product':
			$string_com="san-pham";
			break;
		
		default:
			$string_com="tin-tuc";
			break;
	}
	return $string_com;
}



function get_rate_vnd(){
		$price_vnd=simplexml_load_file('http://www.vietcombank.com.vn/ExchangeRates/ExrateXML.aspx');
		$item= array();
		foreach ($price_vnd as $key => $value) {
			if($value['Buy']){
				$string_money=(string)$value['CurrencyCode'];
				$item[$string_money]['buy']=(float)$value['Buy'];
				$item[$string_money]['transfer']=(float)$value['Transfer'];
				$item[$string_money]['sell']=(float)$value['Sell'];
			}
			
		}
		return $item;
	}


function rewrite_lang(){
	global $d,$config;
	$arr_check_utf8=array('th');
	$arr_txt=array();
	$d->reset();
	$d->query("select * from #_lang where lang='vi' order by define_text asc");
	$lang_vi=$d->result_array();
	
	foreach ($config['lang'] as $key => $value) {
		$txt="<?php\r\n";
			if($key=='vi'){
				foreach ($lang_vi as $key2 => $value2) { 
					$txt.="@define('".$value2['define']."','".($value2['define_text'])."'); \r\n";
				}
			}else{

				foreach ($lang_vi as $key2 => $value2) { 
					$d->reset();
					$d->query("select * from #_lang where id_parent=".$value2['id']." and lang='$key'");
					$row_lang=$d->fetch_array();
					$txt.="@define('".$row_lang['define']."','".($row_lang['define_text'])."'); \r\n";
				}
			}
		$txt.="?>";


		$myfile = fopen("../sources/lang_".$key.".php", "w") or die("Unable to open file!");
		if(in_array($key,$arr_check_utf8))
		{
			fwrite($myfile, pack("CCC",0xef,0xbb,0xbf)); 
		}
		fwrite($myfile, $txt);
		fclose($myfile);
	}
	
}

function get_day_by_time($time){
	$weekday = date("l",$time);
	$weekday = strtolower($weekday);
	switch($weekday) {
	    case 'monday':
	        $weekday = _thuhai;
	        break;
	    case 'tuesday':
	        $weekday = _thuba;
	        break;
	    case 'wednesday':
	        $weekday = _thutu;
	        break;
	    case 'thursday':
	        $weekday = _thunam;
	        break;
	    case 'friday':
	        $weekday = _thusau;
	        break;
	    case 'saturday':
	        $weekday = _thubay;
	        break;
	    default:
	        $weekday = _chunhat;
	        break;
	}
	return $weekday;
}


function ampify($html='') {
    # Replace img, audio, and video elements with amp custom elements
    $html = str_ireplace(array('<img','<video','/video>','<audio','/audio>'),array('<amp-img','<amp-video','/amp-video>','<amp-audio','/amp-audio>'),$html);
    # Add closing tags to amp-img custom element
    $html = preg_replace('/<amp-img(.*?)\/?>/','<amp-img$1 layout="responsive" width="700" height="500"></amp-img>',$html);
	$html = preg_replace('/<span(.*?)\/?>/','<span>',$html);
	$html = preg_replace('/<table(.*?)\/?>/','<table>',$html);
	$html = preg_replace('/<strong(.*?)\/?>/','<strong>',$html);
	$html = preg_replace('/<amp-img(.*?)\/?>/','</amp-img>',$html);
    # Whitelist of HTML tags allowed by AMP
    $html = strip_tags($html,'<h1><h2><h3><h4><h5><h6><a><p><ul><ol><li><blockquote><q><cite><ins><del><strong><em><code><pre><svg><table><thead><tbody><tfoot><th><tr><td><dl><dt><dd><article><section><header><footer><aside><figure><time><abbr><div><span><hr><small><br><amp-img><amp-audio><amp-video><amp-ad><amp-anim><amp-carousel><amp-fit-rext><amp-image-lightbox><amp-instagram><amp-lightbox><amp-twitter><amp-youtube><amp-img>');
    # replace style to w,h
    $html = preg_replace('/(<[^>]+) style=".*?"/i', '$1', $html);
    return $html;
}
function seo_entities($str) {
	$res_2 = htmlentities($str, ENT_QUOTES, "UTF-8");
	$res_2 = str_replace("'","&#039;",$str);
	$res_2 = str_replace('"','&quot;',$str);
	return $res_2;
}
function getCurrentPageURL() { //Hàm có s?n - b? sung thêm dòng d? d? lo?i b? /amp/ trong du?ng link hi?n t?i
    $pageURL = 'http';
    if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
    }
    $pageURL = str_replace("amp/", "", $pageURL);
	$pageURL = explode("&page=", $pageURL);
    return $pageURL[0];
}
function getCurrentPageURL_AMP() { //Hàm thêm m?i - d? thêm m?i /amp/ vào du?ng link trong du?ng link hi?n t?i
    $pageURL = 'http';
    if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"]."/amp".$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"]."/amp".$_SERVER["REQUEST_URI"];
    }
	$pageURL = explode("/page=", $pageURL);
    return $pageURL[0];
}


// function get_table_cart($show_action){

// }


/*end my function*/

function magic_quote($str, $id_connect=false)	
{	
	if (is_array($str))
	{
		foreach($str as $key => $val)
		{
			$str[$key] = escape_str($val);
		}
		return $str;
	}
	if (is_numeric($str)) {
		return $str;
	}
	if(get_magic_quotes_gpc()){
		$str = stripslashes($str);
	}
	if (function_exists('mysql_real_escape_string') AND is_resource($id_connect))
	{
		return mysql_real_escape_string($str, $id_connect);
	}
	elseif (function_exists('mysql_escape_string'))
	{
		return mysql_escape_string($str);
	}
	else
	{
		return addslashes($str);
	}
}

function show_tags($tags,$lass = "tags"){
	if($tags=="") return "";
	global $d;
	$arr = explode(",", $tags);
	for ($i=0,$count=count($arr); $i < $count; $i++) { 
		$sql = "select ten_vi,tenkhongdau from #_tags where id=".$arr[$i];
		$d->query($sql);
		$row = $d->fetch_array();
		echo '<a href="tags/'.$row["tenkhongdau"].'" class="'.$lass.'"><span></span>'.$row["ten_vi"].'</a>';
	}
}

function dongdauanh($newname,$folder)	
{

	  $uploadimage=$folder.$newname;

	  $actual = $folder.$newname;

	  // Load the mian image
	  $source = imagecreatefromjpeg($uploadimage);

	  // load the image you want to you want to be watermarked
	  $watermark = imagecreatefrompng('../upload/watermark.png');
	  $size = getimagesize($uploadimage);  

	  // get the width and height of the watermark image
	  $water_width = imagesx($watermark);
	  $water_height = imagesy($watermark);

	  // get the width and height of the main image image
	  $main_width = imagesx($source);
	  $main_height = imagesy($source);

	  // Set the dimension of the area you want to place your watermark we use 0
	  // from x-axis and 0 from y-axis 
	  $dime_x = ($size[0] - $water_width)/2;  
	  $dime_y = ($size[1] - $water_height)/2;

	  // copy both the images
	  imagecopy($source, $watermark, $dime_x, $dime_y, 0, 0, $water_width, $water_height);

	  // Final processing Creating The Image
	  imagejpeg($source, $actual, 100);
	  
}

function phanquyen_tv($com,$quyen,$act,$type){
	global $d;


	$text_act = explode('_',$act);
	$text_act = $text_act[1];
	
	$d->reset();
	$sql = "select * from #_phanquyen where id='".$quyen."' ";
	$d->query($sql);
	$phanquyen = $d->fetch_array();

	$d->reset();
	$sql = "select * from #_com where ten_com='".$com."' and act ='".$text_act."' and type ='".$type."' ";
	$d->query($sql);
	$com_manager = $d->fetch_array();

	$xem_s = json_decode($phanquyen['xem']);
	$them_s = json_decode($phanquyen['them']);
	$xoa_s = json_decode($phanquyen['xoa']);
	$sua_s = json_decode($phanquyen['sua']);

	$xem_arr = explode('|',"capnhat|man|man_list|man_cat|man_item|man_sub");
	$them_arr = explode('|',"add|add_cat|add_list|add_item|add_sub|save|save_list|save_cat|save_item|save_sub");
	$xoa_arr = explode('|',"delete|delete_list|delete_cat|delete_item,delete_sub");
	$sua_arr = explode('|',"edit|edit_list|edit_cat|edit_item|edit_sub|save|save_list|save_cat|save_item|save_sub");

	if(in_array($act,$xem_arr)){
		if(in_array($com_manager['id'].'|1',$xem_s)){
			return 1;
		} else {
			return 0;
		}
	} elseif(in_array($act,$them_arr)) {
		if(in_array($com_manager['id'].'|1',$them_s)){
			return 1;
		} else {
			return 0;
		}
	} elseif(in_array($act,$xoa_arr)){
		if(in_array($com_manager['id'].'|1',$xoa_s)){
			return 1;
		} else {
			return 0;
		}
	} elseif(in_array($act,$sua_arr)){
		if(in_array($com_manager['id'].'|1',$sua_s)){
			return 1;
		} else {
			return 0;
		}
	} else {
		return 0;
	}

			
}
function phivanchuyen($tinhthanh){
	global $d;
	$phivanchuyen = 0;
	$max=count($_SESSION['cart']);
	for($i=0;$i<$max;$i++){
		$pid=$_SESSION['cart'][$i]['productid'];

		$d->reset();
		$sql = "select phi_hcm,phi_khac from #_product where id='".$pid."' ";
		$d->query($sql);
		$product_phi = $d->fetch_array();

		if($tinhthanh=='24'){
			if($product_phi['phi_hcm'] > $phivanchuyen ){
				$phivanchuyen = $product_phi['phi_hcm'];
			}
		} else {
			if($product_phi['phi_khac'] > $phivanchuyen){
				$phivanchuyen = $product_phi['phi_khac'];
			}
		}
	}
	
	return $phivanchuyen;
}	

function phanquyen_edit($quyen,$role,$vitri){
	global $d,$kiemtra;
	
	$d->reset();
	$sql = "select * from #_phanquyen where id='".$quyen."' ";
	$d->query($sql);
	$phanquyen = $d->fetch_array();
	
	$com_s = json_decode($phanquyen['com']);
	$vitri_s = json_decode($phanquyen['table_vitri']);
	$sua_s = json_decode($phanquyen['sua']);
	
	if($role==3){
		$kiemtra = 1;	
	} else {
		for($i=0;$i<count($vitri_s);$i++){
			if($vitri_s[$i] == $vitri ){
				if(in_array($i.'|1',$sua_s)){
					$kiemtra = 1;
				}
			} 
		}
	}
	return $kiemtra;
			
}
function fns_Rand_digit($min,$max,$num)
{
	$result='';
	for($i=0;$i<$num;$i++){
		$result.=rand($min,$max);
	}
	return $result;	
}
function get_tong_tien($id=0){
		global $d;
		if($id>0){
			$d->reset();
			$sql="select gia,soluong from #_order_detail where id_order='".$id."'";
			$d->query($sql);
			$result=$d->result_array();
			$tongtien=0;
			for($i=0,$count=count($result);$i<$count;$i++) { 
			
			$tongtien+=	$result[$i]['gia']*$result[$i]['soluong'];	
			
			}
			return $tongtien;
		}else return 0;
	}

function daxem($pid){
		if($pid<1) return;
		
		if(is_array($_SESSION['daxem'])){
			if(daxem_exists($pid)) return;
			$max=count($_SESSION['daxem']);
			$_SESSION['daxem'][$max]['productid']=$pid;
		}
		else{
			$_SESSION['daxem']=array();
			$_SESSION['daxem'][0]['productid']=$pid;
		}
	}
	function daxem_exists($pid){
		$pid=intval($pid);
		$max=count($_SESSION['daxem']);
		$flag=0;
		for($i=0;$i<$max;$i++){
			if($pid==$_SESSION['daxem'][$i]['productid']){
				$flag=1;
				break;
			}
		}
		return $flag;
	}
function _substr($str,$n)
{
	if(strlen($str)<$n) return $str;
	$html = substr($str,0,$n);
	$html = substr($html,0,strrpos($html,' '));
	return $html.'..';
}
function giamgia($gia,$giam)
{
	$ketqua = ($gia - $giam)/($gia);
	$phantram = round($ketqua*100).'%';
	return $phantram;	
}
function alert($s){
	echo '<script language="javascript"> alert("'.$s.'") </script>';
}
function uploadUrl($url,$savePath,$imageRestrict,$imageSizeRestrcit)
{
	$type_upload = explode(',',$imageRestrict);
	$ext = substr(basename($url),strrpos(basename($url),".")+1);
	$tmp = explode('?',$ext);
	$ext = $tmp[0];
	$name = ChuoiNgauNhien(6);
	$result = "ERROR 1";
	if(!in_array($ext,$type_upload)){
	   return 'ERROR 2';
	}
	else{
	for($i=0;$i<5;$i++){
	   $rd.=rand(0,9);
	}
	$fn = $savePath.$rd.$name.'.'.$ext;
	$fp = fopen($fn,"w");
	$noidung = file_get_contents($url);
	fwrite($fp,$noidung,strlen($noidung));
	fclose($fp);
	$result = $rd.$name.'.'.$ext;
	}
	return $result;
}   


function upload_photos($file, $extension, $folder, $newname=''){
	if(isset($file) && !$file['error']){
		
		$ext = end(explode('.',$file['name']));
		$name = basename($file['name'], '.'.$ext);
		//alert('Chỉ hỗ trợ upload file dạng '.$ext);
		if(strpos($extension, $ext)===false){
			alert('Chỉ hỗ trợ upload file dạng '.$ext.'-////-'.$extension);
			return false; // không hỗ trợ
		}
		
		if($newname=='' && file_exists($folder.$file['name']))
			for($i=0; $i<100; $i++){
				if(!file_exists($folder.$name.$i.'.'.$ext)){
					$file['name'] = $name.$i.'.'.$ext;
					break;
				}
			}
		else{
			$file['name'] = $newname.'.'.$ext;
		}
		
		if (!copy($file["tmp_name"], $folder.$file['name']))	{
			if ( !move_uploaded_file($file["tmp_name"], $folder.$file['name']))	{
				return false;
			}
		}
		return $file['name'];
	}
	return false;
}
function escape_str($str, $id_connect=false)	
{	
	if (is_array($str))
	{
		foreach($str as $key => $val)
		{
			$str[$key] = escape_str($val);
		}
		
		return $str;
	}
	
	if (is_numeric($str)) {
		return $str;
	}
	
	if(get_magic_quotes_gpc()){
		$str = stripslashes($str);
	}

	if (function_exists('mysql_real_escape_string') AND is_resource($id_connect))
	{
		return "'".mysql_real_escape_string($str, $id_connect)."'";
	}
	elseif (function_exists('mysql_escape_string'))
	{
		return "'".mysql_escape_string($str)."'";
	}
	else
	{
		return "'".addslashes($str)."'";
	}
}

function make_date($time,$dot='.',$lang='vi',$f=false){
	
	$str = ($lang == 'vi') ? date("d{$dot}m{$dot}Y",$time) : date("m{$dot}d{$dot}Y",$time);
	if($f){
		$thu['vi'] = array('Chủ nhật','Thứ hai','Thứ ba','Thứ tư','Thứ năm','Thứ sáu','Thứ bảy');
		$thu['en'] = array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
		$str = $thu[$lang][date('w',$time)].', '.$str;
	}
	return $str;
}
function count_online(){
/*
CREATE TABLE `camranh_online` (
  `id` int(10) unsigned NOT NULL auto_increment,
  `session_id` varchar(255) NOT NULL,
  `time` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 ;
*/
	global $d;
	$time = 600; // 10 phut
	$ssid = session_id();

	// xoa het han
	$sql = "delete from #_online where time<".(time()-$time);
	$d->query($sql);
	//
	$sql = "select id,session_id from #_online order by id desc";
	$d->query($sql);
	$result['dangxem'] = $d->num_rows();
	$rows = $d->result_array();
	$i = 0;
	while(($rows[$i]['session_id'] != $ssid) && $i++<$result['dangxem']);
	
	if($i<$result['dangxem']){
		$sql = "update #_online set time='".time()."' where session_id='".$ssid."'";
		$d->query($sql);
		$result['daxem'] = $rows[0]['id'];
	}
	else{
		$sql = "insert into #_online (session_id, time) values ('".$ssid."', '".time()."')";
		$d->query($sql);
		$result['daxem'] = mysql_insert_id();
		$result['dangxem']++;
	}
	
	return $result; // array('dangxem'=>'', 'daxem'=>'')
}

function delete_file($file){
	return @unlink($file);
}


function upload_image($file, $extension, $folder, $newname=''){
	
	if(isset($_FILES[$file]) && !$_FILES[$file]['error']){


		
		$ext = end(explode('.',$_FILES[$file]['name']));
		$name = basename($_FILES[$file]['name'], '.'.$ext);
		
		if(strpos($extension, $ext)===false){
			alert('Chỉ hỗ trợ upload file dạng '.$extension);
			return false; // không hỗ trợ
		}
		
		if($newname=='' && file_exists($folder.$_FILES[$file]['name']))
			for($i=0; $i<100; $i++){
				if(!file_exists($folder.$name.$i.'.'.$ext)){
					$_FILES[$file]['name'] = $name.$i.'.'.$ext;
					break;
				}
			}
		else{
			$_FILES[$file]['name'] = $newname.'.'.$ext;
		}
		
		if (!copy($_FILES[$file]["tmp_name"], $folder.$_FILES[$file]['name']))	{
			if ( !move_uploaded_file($_FILES[$file]["tmp_name"], $folder.$_FILES[$file]['name']))	{
				return false;
			}
		}
		return $_FILES[$file]['name'];

	}
	return false;
}

function chuanhoa($s){
	$s = str_replace("'", '&#039;', $s);
	$s = str_replace('"', '&quot;', $s);
	$s = str_replace('<', '&lt;', $s);
	$s = str_replace('>', '&gt;', $s);
	return $s;
}

function themdau($s){
	$s = addslashes($s);
	return $s;
}

function bodau($s){
	$s = stripslashes($s);
	return $s;
}


function transfer($msg,$page="index.php",$stt=true)
{
	 $showtext = $msg;
	 $page_transfer = $page;
	 include("./templates/transfer_tpl.php");
	 exit();
}

function redirect($url=''){
	echo '<script language="javascript">window.location = "'.$url.'" </script>';
	exit();
}

function back($n=1){
	echo '<script language="javascript">history.go = "'.-intval($n).'" </script>';
	exit();
}

function dump($arr, $exit=1){
	echo "<pre>";	
		var_dump($arr);
	echo "<pre>";	
	if($exit)	exit();
}
function paging_home($r, $url='', $curPg=1, $mxR=5, $mxP=5, $class_paging='')
	{
		if($curPg<1) $curPg=1;
		if($mxR<1) $mxR=5;
		if($mxP<1) $mxP=5;
		$totalRows=count($r);
		if($totalRows==0)	
			return array('source'=>NULL, 'paging'=>NULL);
		$totalPages=ceil($totalRows/$mxR);
				
		
		
		
		if($curPg > $totalPages) $curPg=$totalPages;
		
		$_SESSION['maxRow']=$mxR;
		$_SESSION['curPage']=$curPg;

		$r2=array();
		$paging="";
		
		//-------------tao array------------------
		$start=($curPg-1)*$mxR;		
		$end=($start+$mxR)<$totalRows?($start+$mxR):$totalRows;
		#echo $start;
		#echo $end;
		
		$j=0;
		for($i=$start;$i<$end;$i++)
			$r2[$j++]=$r[$i];
			
		//-------------tao chuoi------------------
		$curRow = ($curPg-1)*$mxR+1;	
		if($totalRows>$mxR)
		{
			
			$from = $curPg - $mxP;	
			$to = $curPg + $mxP;
			if ($from <=0) { $from = 1;   $to = $mxP*2; }
			if ($to > $totalPages) { $to = $totalPages; }
			for($j = $from; $j <= $to; $j++) {
			   if ($j == $curPg) $links = $links . "<a class=\"paginate_active\" href=\"#\">{$j}</a>";		
			   else{				
				$qt = $url. "&p={$j}";
				$links= $links . "<a class=\"paginate_button\" href = '{$qt}'>{$j}</a>";
			   } 	   
			} //for
									
			//$paging.= "Go to page :&nbsp;&nbsp;" ;
			if($curPg>$mxP)
			{
				$paging .=" <a href='".$url."' class=\"first paginate_button\" >&laquo;</a> "; //ve dau				
				$paging .=" <a href='".$url."&p=".($curPg-1)."' class=\"previous paginate_button\" >&#8249;</a> "; //ve truoc
			}else{
				$paging .=" <a href='".$url."' class=\"first paginate_button paginate_button_disabled\" >&laquo;</a> "; //ve dau				
				$paging .=" <a href='".$url."&p=".($curPg-1)."' class=\"previous paginate_button paginate_button_disabled\" >&#8249;</a> "; //ve truoc
			}
			$paging.=$links; 
			if(((int)(($curPg-1)/$mxP+1)*$mxP) < $totalPages)  
			{
				$paging .=" <a href='".$url."&p=".($curPg+1)."' class=\"next paginate_button\" >&#8250;</a> "; //ke				
				$paging .=" <a href='".$url."&p=".($totalPages)."' class=\"last paginate_button\" >&raquo;</a> "; //ve cuoi
			}else{
				$paging .=" <a href='".$url."&p=".($curPg+1)."' class=\"next paginate_button paginate_button_disabled\" >&#8250;</a> "; //ke				
				$paging .=" <a href='".$url."&p=".($totalPages)."' class=\"last paginate_button paginate_button_disabled\" >&raquo;</a> "; //ve cuoi
			}
		}		
		$r3['curPage']=$curPg;
		$r3['source']=$r2;
		$r3['paging']=$paging;			
		$r3['totalRows']=$totalRows;		
		#echo '<pre>';var_dump($r3);echo '</pre>';
		return $r3;
	}
function catchuoi($chuoi,$gioihan){
// nếu độ dài chuỗi nhỏ hơn hay bằng vị trí cắt
// thì không thay đổi chuỗi ban đầu
if(strlen($chuoi)<=$gioihan)
{
return $chuoi;
}
else{
/*
so sánh vị trí cắt
với kí tự khoảng trắng đầu tiên trong chuỗi ban đầu tính từ vị trí cắt
nếu vị trí khoảng trắng lớn hơn
thì cắt chuỗi tại vị trí khoảng trắng đó
*/
if(strpos($chuoi," ",$gioihan) > $gioihan){
$new_gioihan=strpos($chuoi," ",$gioihan);
$new_chuoi = substr($chuoi,0,$new_gioihan)."...";
return $new_chuoi;
}
// trường hợp còn lại không ảnh hưởng tới kết quả
$new_chuoi = substr($chuoi,0,$gioihan)."...";
return $new_chuoi;
}
}

function stripUnicode($str){
  if(!$str) return false;
   $unicode = array(
     'a'=>'á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ',
     'A'=>'Á|À|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
     'd'=>'đ',
     'D'=>'Đ',
     'e'=>'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ',
   	  'E'=>'É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
   	  'i'=>'í|ì|ỉ|ĩ|ị',	  
   	  'I'=>'Í|Ì|Ỉ|Ĩ|Ị',
     'o'=>'ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ',
   	  'O'=>'Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ',
     'u'=>'ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự',
   	  'U'=>'Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự',
     'y'=>'ý|ỳ|ỷ|ỹ|ỵ',
     'Y'=>'Ý|Ỳ|Ỷ|Ỹ|Ỵ'
   );
   foreach($unicode as $khongdau=>$codau) {
     	$arr=explode("|",$codau);
   	  $str = str_replace($arr,$khongdau,$str);
   }
return $str;
}// Doi tu co dau => khong dau

function pagination($query,$per_page=10,$page=1,$url='?'){   
    global $d; 

    $sql = "SELECT COUNT(*) as `num` FROM {$query}";
    $d->query($sql);
    $row = $d->fetch_array();
    $total = $row['num'];
    $adjacents = "2"; 
      
    $prevlabel = "&lsaquo; Trang sau";
    $nextlabel = "Trang tiếp &rsaquo;";
    $lastlabel = "Trang cuối &rsaquo;&rsaquo;";
      
    $page = ($page == 0 ? 1 : $page);  
    $start = ($page - 1) * $per_page;                               
      
    $prev = $page - 1;                          
    $next = $page + 1;
      
    $lastpage = ceil($total/$per_page);
      
    $lpm1 = $lastpage - 1; // //last page minus 1
      
    $pagination = "";
    if($lastpage > 1){   
        $pagination .= "<ul class='pagination'>";
        $pagination .= "<li class='page_info'>Trang {$page} of {$lastpage}</li>";
              
            if ($page > 1) $pagination.= "<li><a href='{$url}&page={$prev}'>{$prevlabel}</a></li>";
              
        if ($lastpage < 7 + ($adjacents * 2)){   
            for ($counter = 1; $counter <= $lastpage; $counter++){
                if ($counter == $page)
                    $pagination.= "<li><a class='current'>{$counter}</a></li>";
                else
                    $pagination.= "<li><a href='{$url}&page={$counter}'>{$counter}</a></li>";                    
            }
          
        } elseif($lastpage > 5 + ($adjacents * 2)){
              
            if($page < 1 + ($adjacents * 2)) {
                  
                for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++){
                    if ($counter == $page)
                        $pagination.= "<li><a class='current'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}'>{$counter}</a></li>";                    
                }
                $pagination.= "<li class='dot'>...</li>";
                $pagination.= "<li><a href='{$url}&page={$lpm1}'>{$lpm1}</a></li>";
                $pagination.= "<li><a href='{$url}&page={$lastpage}'>{$lastpage}</a></li>";  
                      
            } elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2)) {
                  
                $pagination.= "<li><a href='{$url}&page=1'>1</a></li>";
                $pagination.= "<li><a href='{$url}&page=2'>2</a></li>";
                $pagination.= "<li class='dot'>...</li>";
                for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++) {
                    if ($counter == $page)
                        $pagination.= "<li><a class='current'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}'>{$counter}</a></li>";                    
                }
                $pagination.= "<li class='dot'>..</li>";
                $pagination.= "<li><a href='{$url}&page={$lpm1}'>{$lpm1}</a></li>";
                $pagination.= "<li><a href='{$url}&page={$lastpage}'>{$lastpage}</a></li>";      
                  
            } else {
                  
                $pagination.= "<li><a href='{$url}&page=1'>1</a></li>";
                $pagination.= "<li><a href='{$url}&page=2'>2</a></li>";
                $pagination.= "<li class='dot'>..</li>";
                for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++) {
                    if ($counter == $page)
                        $pagination.= "<li><a class='current'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}'>{$counter}</a></li>";                    
                }
            }
        }
          
            if ($page < $counter - 1) {
                $pagination.= "<li><a href='{$url}&page={$next}'>{$nextlabel}</a></li>";
                $pagination.= "<li><a href='{$url}&page=$lastpage'>{$lastlabel}</a></li>";
            }
          
        $pagination.= "</ul>";        
    }
      
    return $pagination;
}



function pagination_home($query,$per_page=10,$page=1,$url='?'){   
    global $d; 
    $sql = "SELECT COUNT(*) as `num` FROM {$query}";
    $d->query($sql);
    $row = $d->fetch_array();
    $total = $row['num'];
    $adjacents = "2"; 
      
    $prevlabel = "<span>&lsaquo;</span>";
    $firstlabel = "<span>&laquo</span>";//trang dau
    $nextlabel = "<span>&rsaquo;</span>";
    $lastlabel = "<span>&raquo</span>";//trang cuoi
      
    $page = ($page == 0 ? 1 : $page);  
    $start = ($page - 1) * $per_page;                               
      
    $prev = $page - 1;                          
    $next = $page + 1;
      
    $lastpage = ceil($total/$per_page);
    $firstpage = 1;
      
    $lpm1 = $lastpage - 1; // //last page minus 1
      
    $pagination = "";
    if($lastpage > 1){   
        $pagination .= "<ul class='my_pagination'>";
        // $pagination .= "<li class='page_info'>Trang {$page} of {$lastpage}</li>";
               if ($page > 1) $pagination.= "<li class='page_button'><a href='{$url}&page={$firstpage}' data-page='1'>{$firstlabel}</a></li>";
            if ($page > 1) $pagination.= "<li class='page_button'><a href='{$url}&page={$prev}' data-page='".($page>1?$page-1:1)."'>{$prevlabel}</a></li>";
              
        if ($lastpage < 7 + ($adjacents * 2)){   
            for ($counter = 1; $counter <= $lastpage; $counter++){
                if ($counter == $page)
                    $pagination.= "<li><a class='current'>{$counter}</a></li>";
                else
                    $pagination.= "<li><a href='{$url}&page={$counter}'>{$counter}</a></li>";                    
            }
          
        } elseif($lastpage > 5 + ($adjacents * 2)){
            if($page < 1 + ($adjacents * 2)) {
                for ($counter = 1; $counter < 4 + ($adjacents * 2); $counter++){
                    if ($counter == $page)
                        $pagination.= "<li><a class='current' data-page='{$counter}'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}' data-page='{$counter}'>{$counter}</a></li>";                    
                }
                $pagination.= "<li class='dot'><span>...</span></li>";
                $pagination.= "<li  class='after_dot'><a href='{$url}&page={$lpm1}' data-page='{$lpm1}'>{$lpm1}</a></li>";
                //$pagination.= "<li  class='page_button'><a href='{$url}&page={$lastpage}'>{$lastpage}</a></li>";  
                      
            } elseif($lastpage - ($adjacents * 2) > $page && $page > ($adjacents * 2)) {
                  
                $pagination.= "<li><a href='{$url}&page=1' data-page='1'>1</a></li>";
                $pagination.= "<li><a href='{$url}&page=2' data-page='2'>2</a></li>";
                $pagination.= "<li class='dot'><span>...</span></li>";
                for ($counter = $page - $adjacents; $counter <= $page + $adjacents; $counter++) {
                    if ($counter == $page)
                        $pagination.= "<li><a class='current' data-page='{$counter}'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}' data-page='{$counter}'>{$counter}</a></li>";                    
                }
                $pagination.= "<li class='dot'><span>...</span></li>";
                $pagination.= "<li class='page_button page_button_next'><a href='{$url}&page={$lpm1}' data-page={$lpm1}>{$lpm1}</a></li>";
                $pagination.= "<li class='page_button'><a href='{$url}&page={$lastpage}' data-page={$lastpage}>{$lastpage}</a></li>";      
                  
            } else {
                  
                $pagination.= "<li><a href='{$url}&page=1' data-page='1'>1</a></li>";
                $pagination.= "<li><a href='{$url}&page=2' data-page='2'>2</a></li>";
                $pagination.= "<li class='dot'><span>..</span></li>";
                for ($counter = $lastpage - (2 + ($adjacents * 2)); $counter <= $lastpage; $counter++) {
                    if ($counter == $page)
                        $pagination.= "<li><a class='current' data-page='{$counter}'>{$counter}</a></li>";
                    else
                        $pagination.= "<li><a href='{$url}&page={$counter}' data-page='{$counter}'>{$counter}</a></li>";                    
                }
            }
        }
          
            if ($page < $counter - 1) {
                $pagination.= "<li class='page_button page_button_next' data-page='{$next}'><a href='{$url}&page={$next}'>{$nextlabel}</a></li>";
                $pagination.= "<li class='page_button'><a href='{$url}&page=$lastpage' data-page='{$lastpage}'>{$lastlabel}</a></li>";
            }
          
        $pagination.= "</ul>";        
    }
      
    return $pagination;
}

function changeTitle($str)
{
	$str = stripUnicode($str);
	$str = strtolower($str);
	//$str = mb_convert_case($str,MB_CASE_LOWER,'utf-8');
	$str = trim($str);
	$str=preg_replace('/[^a-zA-Z0-9\ ]/','',$str); 
	$str = str_replace("  "," ",$str);
	$str = str_replace(" ","-",$str);
	return $str;
}
function images_name($tenhinh)
	{
		$rand=rand(10,9999);
		$ten_anh=explode(".",$tenhinh);
		$result = changeTitle($ten_anh[0])."-".$rand;
		return $result; 
	}
function getCurrentPageURL1() {
    $pageURL = 'http';
    if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
    }
	$pageURL = explode("&page=", $pageURL);
    return $pageURL[0];
}
function getCurrentPage() {
    $pageURL = 'http';
    if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
    $pageURL .= "://";
    if ($_SERVER["SERVER_PORT"] != "80") {
        $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
    }
    return $pageURL;
}
function create_thumb($file, $width, $height, $folder,$file_name,$zoom_crop='1'){

// ACQUIRE THE ARGUMENTS - MAY NEED SOME SANITY TESTS?

$new_width   = $width;
$new_height   = $height;

 if ($new_width && !$new_height) {
        $new_height = floor ($height * ($new_width / $width));
    } else if ($new_height && !$new_width) {
        $new_width = floor ($width * ($new_height / $height));
    }
	
$image_url = $folder.$file;
$origin_x = 0;
$origin_y = 0;
// GET ORIGINAL IMAGE DIMENSIONS
$array = getimagesize($image_url);
if ($array)
{
    list($image_w, $image_h) = $array;
}
else
{
     die("NO IMAGE $image_url");
}
$width=$image_w;
$height=$image_h;

// ACQUIRE THE ORIGINAL IMAGE
$image_ext = trim(strtolower(end(explode('.', $image_url))));
switch(strtoupper($image_ext))
{
     case 'JPG' :
     case 'JPEG' :
         $image = imagecreatefromjpeg($image_url);
		 $func='imagejpeg';
         break;
     case 'PNG' :
         $image = imagecreatefrompng($image_url);
		 $func='imagepng';
         break;
	 case 'GIF' :
	 	 $image = imagecreatefromgif($image_url);
		 $func='imagegif';
		 break;

     default : die("UNKNOWN IMAGE TYPE: $image_url");
}

// scale down and add borders
	if ($zoom_crop == 3) {

		$final_height = $height * ($new_width / $width);

		if ($final_height > $new_height) {
			$new_width = $width * ($new_height / $height);
		} else {
			$new_height = $final_height;
		}

	}

	// create a new true color image
	$canvas = imagecreatetruecolor ($new_width, $new_height);
	imagealphablending ($canvas, false);

	// Create a new transparent color for image
	$color = imagecolorallocatealpha ($canvas, 255, 255, 255, 127);

	// Completely fill the background of the new image with allocated color.
	imagefill ($canvas, 0, 0, $color);

	// scale down and add borders
	if ($zoom_crop == 2) {

		$final_height = $height * ($new_width / $width);
		
		if ($final_height > $new_height) {
			
			$origin_x = $new_width / 2;
			$new_width = $width * ($new_height / $height);
			$origin_x = round ($origin_x - ($new_width / 2));

		} else {

			$origin_y = $new_height / 2;
			$new_height = $final_height;
			$origin_y = round ($origin_y - ($new_height / 2));

		}

	}

	// Restore transparency blending
	imagesavealpha ($canvas, true);

	if ($zoom_crop > 0) {

		$src_x = $src_y = 0;
		$src_w = $width;
		$src_h = $height;

		$cmp_x = $width / $new_width;
		$cmp_y = $height / $new_height;

		// calculate x or y coordinate and width or height of source
		if ($cmp_x > $cmp_y) {

			$src_w = round ($width / $cmp_x * $cmp_y);
			$src_x = round (($width - ($width / $cmp_x * $cmp_y)) / 2);

		} else if ($cmp_y > $cmp_x) {

			$src_h = round ($height / $cmp_y * $cmp_x);
			$src_y = round (($height - ($height / $cmp_y * $cmp_x)) / 2);

		}

		// positional cropping!
		if ($align) {
			if (strpos ($align, 't') !== false) {
				$src_y = 0;
			}
			if (strpos ($align, 'b') !== false) {
				$src_y = $height - $src_h;
			}
			if (strpos ($align, 'l') !== false) {
				$src_x = 0;
			}
			if (strpos ($align, 'r') !== false) {
				$src_x = $width - $src_w;
			}
		}

		imagecopyresampled ($canvas, $image, $origin_x, $origin_y, $src_x, $src_y, $new_width, $new_height, $src_w, $src_h);

    } else {

        // copy and resize part of an image with resampling
        imagecopyresampled ($canvas, $image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);

    }
	


$new_file=$file_name.'_'.$new_width.'x'.$new_height.'.'.$image_ext;
// SHOW THE NEW THUMB IMAGE
if($func=='imagejpeg') $func($canvas, $folder.$new_file,75);
else $func($canvas, $folder.$new_file,floor ($quality * 0.075));

return $new_file;

}
function ChuoiNgauNhien($sokytu){
$chuoi="ABCDEFGHIJKLMNOPQRSTUVWXYZWabcdefghijklmnopqrstuvwxyzw0123456789";
for ($i=0; $i < $sokytu; $i++){
	$vitri = mt_rand( 0 ,strlen($chuoi) );
	$giatri= $giatri . substr($chuoi,$vitri,1 );
}
return $giatri;
} 

function check_yahoo($nick_yahoo='nthaih'){
	$file = @fopen("http://opi.yahoo.com/online?u=".$nick_yahoo."&m=t&t=1","r");
	$read = @fread($file,200);
	
	if($read==false || strstr($read,"00"))
		$img = '<img src="images/yahoo_offline.png" border="0" align="absmiddle" />';
	else
		$img = '<img src="images/yahoo_online.png" border="0" align="absmiddle"/>';
	return '<a href="ymsgr:sendIM?'.$nick_yahoo.'">'.$img.'</a>';
}
function limitWord($string, $maxOut){

$string2Array = explode(' ', $string, ($maxOut + 1));

if( count($string2Array) > $maxOut ){
array_pop($string2Array);
$output = implode(' ', $string2Array)."...";
}else{
$output = $string;
}
return $output;
}

function pagesListLimitadmin($url , $totalRows , $pageSize = 5, $offset = 5){
	if ($totalRows<=0) return "";
	$totalPages = ceil($totalRows/$pageSize);
	if ($totalPages<=1) return "";		
	if( isset($_GET["p"]) == true)  $currentPage = $_GET["p"];
	else $currentPage = 1;
	settype($currentPage,"int");	
	if ($currentPage <=0) $currentPage = 1;	
	$firstLink = "<li><a href=\"{$url}\" class=\"left\">First</a><li>";
	$lastLink="<li><a href=\"{$url}&p={$totalPages}\" class=\"right\">End</a></li>";
	$from = $currentPage - $offset;	
	$to = $currentPage + $offset;
	if ($from <=0) { $from = 1;   $to = $offset*2; }
if ($to > $totalPages) { $to = $totalPages; }
	for($j = $from; $j <= $to; $j++) {
	   if ($j == $currentPage) $links = $links . "<li><a href='#' class='active'>{$j}</a></li>";		
	   else{				
		$qt = $url. "&p={$j}";
		$links= $links . "<li><a href = '{$qt}'>{$j}</a></li>";
	   } 	   
	} //for
	return '<ul class="pages">'.$firstLink.$links.$lastLink.'</ul>';
} // function pagesListLimit
function format_size ($rawSize)
  {
    if ($rawSize / 1048576 > 1) return round($rawSize / 1048576, 1) . ' MB';
    else 
      if ($rawSize / 1024 > 1) return round($rawSize / 1024, 1) . ' KB';
      else
        return round($rawSize, 1) . ' Bytes';
  }
function id_youtube($link)
{
	parse_str( parse_url( $link, PHP_URL_QUERY ), $my_array_of_vars );
	return $my_array_of_vars['v'];
}
 function youtobe($rong,$cao) {
 	global $d, $row;

 	$d->query("select * from #_video where hienthi = 1 and type='video' order by stt desc");
    $row  =$d->result_array();
    $list = array();
    foreach($row as $k=>$v){
        if($k){
            $list[] = youtobi($v['links']);
        }
    }
    return '<iframe width="'.$rong.'" height="'.$cao.'" src="https://www.youtube.com/embed/'.youtobi($row[0]['links']).'?playlist='.implode(",",$list).'" frameborder="0" allowfullscreen></iframe>';

    return false;
}

function convert_number_to_words($number) {
		$hyphen      = ' ';
		$conjunction = '  ';
		$separator   = ' ';
		$negative    = 'âm ';
		$decimal     = ' phẩy ';
		$dictionary  = array(
		0                   => 'Không',
		1                   => 'Một',
		2                   => 'Hai',
		3                   => 'Ba',
		4                   => 'Bốn',
		5                   => 'Năm',
		6                   => 'Sáu',
		7                   => 'Bảy',
		8                   => 'Tám',
		9                   => 'Chín',
		10                  => 'Mười',
		11                  => 'Mười Một',
		12                  => 'Mười Hai',
		13                  => 'Mười Ba',
		14                  => 'Mười Bốn',
		15                  => 'Mười Lăm',
		16                  => 'Mười Sáu',
		17                  => 'Mười Bảy',
		18                  => 'Mười Tám',
		19                  => 'Mười Chín',
		20                  => 'Hai Mươi',
		30                  => 'Ba Mươi',
		40                  => 'Bốn Mươi',
		50                  => 'Năm Mươi',
		60                  => 'Sáu Mươi',
		70                  => 'Bảy Mươi',
		80                  => 'Tám Mươi',
		90                  => 'Chín Mươi',
		100                 => 'Trăm',
		1000                => 'Ngàn',
		1000000             => 'Triệu',
		1000000000          => 'Tỷ',
		1000000000000       => 'Nghìn Tỷ',
		1000000000000000    => 'Ngàn Triệu Triệu',
		1000000000000000000 => 'Tỷ Tỷ'
		);
		 
		if (!is_numeric($number)) {
		return false;
		}
		 
		if (($number >= 0 && (int) $number < 0) || (int) $number < 0 - PHP_INT_MAX) {
		// overflow
		trigger_error(
		'convert_number_to_words only accepts numbers between -' . PHP_INT_MAX . ' and ' . PHP_INT_MAX,
		E_USER_WARNING
		);
		return false;
		}
		 
		if ($number < 0) {
		return $negative . convert_number_to_words(abs($number));
		}
		 
		$string = $fraction = null;
		 
		if (strpos($number, '.') !== false) {
		list($number, $fraction) = explode('.', $number);
		}
		 
		switch (true) {
		case $number < 21:
		$string = $dictionary[$number];
		break;
		case $number < 100:
		$tens   = ((int) ($number / 10)) * 10;
		$units  = $number % 10;
		$string = $dictionary[$tens];
		if ($units) {
		$string .= $hyphen . $dictionary[$units];
		}
		break;
		case $number < 1000:
		$hundreds  = $number / 100;
		$remainder = $number % 100;
		$string = $dictionary[$hundreds] . ' ' . $dictionary[100];
		if ($remainder) {
		$string .= $conjunction . convert_number_to_words($remainder);
		}
		break;
		default:
		$baseUnit = pow(1000, floor(log($number, 1000)));
		$numBaseUnits = (int) ($number / $baseUnit);
		$remainder = $number % $baseUnit;
		$string = convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
		if ($remainder) {
		$string .= $remainder < 100 ? $conjunction : $separator;
		$string .= convert_number_to_words($remainder);
		}
		break;
		}
		 
		if (null !== $fraction && is_numeric($fraction)) {
		$string .= $decimal;
		$words = array();
		foreach (str_split((string) $fraction) as $number) {
		$words[] = $dictionary[$number];
		}
		$string .= implode(' ', $words);
		}
		 
		return $string;
}




?>
