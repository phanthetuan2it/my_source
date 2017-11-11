<?php	if(!defined('_source')) die("Error");

$act = (isset($_REQUEST['act'])) ? addslashes($_REQUEST['act']) : "";

switch($act){
	case "man":
		get_items();
		$template = "lang/items";
		break;
	case "add":
		$template = "lang/item_add";
		break;
	case "edit":
		get_item();
		$template = "lang/item_add";
		break;
	case "save":
		save_item();
		break;

	case "capnhat":
		capnhat_lang();
		break;
	case "delete":
		delete_item();
		break;
		
	default:
		$template = "index";
}


function get_items(){
	global $d, $items, $paging,$page;
	
	if(!empty($_POST)){
		$multi=$_REQUEST['multi'];
		$id_array=$_POST['iddel'];
		$count=count($id_array);
		if($multi=='show'){
			for($i=0;$i<$count;$i++){
				$sql = "UPDATE table_lang SET hienthi =1 WHERE  id = ".$id_array[$i]."";
				mysql_query($sql) or die("Not query sqlUPDATE_ORDER");				
			}
			redirect("index.php?com=lang&act=man");			
		}
		
		if($multi=='hide'){
			for($i=0;$i<$count;$i++){
				$sql = "UPDATE table_lang SET hienthi =0 WHERE  id = ".$id_array[$i]."";
				mysql_query($sql) or die("Not query sqlUPDATE_ORDER");				
			}
			redirect("index.php?com=lang&act=man");			
		}
		
		if($multi=='del'){
			for($i=0;$i<$count;$i++){							
				$sql = "delete from table_lang where id = ".$id_array[$i]." or id_parent=".$id_array[$i];
				mysql_query($sql) or die("Not query sqlUPDATE_ORDER");			
							
			}
			rewrite_lang();
			redirect("index.php?com=lang&act=man&type=".$_GET['type']);			
		}				
	}
	
	if(@$_REQUEST['hienthi']!='')
	{
	$id_up = @$_REQUEST['hienthi'];
	$sql_sp = "SELECT id,hienthi FROM table_lang where id='".$id_up."' ";
	$d->query($sql_sp);
	$cats= $d->result_array();
	$hienthi=$cats[0]['hienthi'];
	//echo "id:". $spdc1;
	if($hienthi==0)
	{
	$sqlUPDATE_ORDER = "UPDATE table_lang SET hienthi =1 WHERE  id = ".$id_up."";
	$resultUPDATE_ORDER = mysql_query($sqlUPDATE_ORDER) or die("Not query sqlUPDATE_ORDER");
	}
	else
	{
	$sqlUPDATE_ORDER = "UPDATE table_lang SET hienthi =0  WHERE  id = ".$id_up."";
	$resultUPDATE_ORDER = mysql_query($sqlUPDATE_ORDER) or die("Not query sqlUPDATE_ORDER");

	}	
	}
	
	
	

	$per_page = 1000; // Set how many records do you want to display per page.
	$startpoint = ($page * $per_page) - $per_page;
	$limit = ' limit '.$startpoint.','.$per_page;
	
	$where = " #_lang ";
	$where .= " where lang='vi' ";

	$where .=" order by define_text asc";

	$sql = "select * from $where $limit";
	$d->query($sql);
	$items = $d->result_array();

	$url = getCurrentPageURL();
	$paging = pagination($where,$per_page,$page,$url);	
}

function get_item(){
	global $d, $item;
	$id = isset($_GET['id']) ? themdau($_GET['id']) : "";
	if(!$id)
		transfer("Không nhận được dữ liệu", "index.php?com=lang&act=man&");
	
	$sql = "select * from #_lang where id='".$id."'";
	$d->query($sql);
	if($d->num_rows()==0) transfer("Dữ liệu không có thực", "index.php?com=lang&act=man&");
	$item = $d->fetch_array();
}


function capnhat_lang(){
	global $d, $config;
	$d->reset();
	$d->query("select * from #_lang where lang='vi' order by define_text asc");
	$lang_vi=$d->result_array();
	foreach ($config['lang'] as $key => $value) {
		if($key=='vi') continue;
		foreach ($lang_vi as $key2 => $value2) { 
			mysql_query("UPDATE table_lang set define_text='".$_POST[$key.'_'.$value2['id']]."' where id_parent=".$value2['id']." and lang='$key'");
		}	
	}
	rewrite_lang();
	
}

function save_item(){
	global $d,$config;
	$file_name=images_name($_FILES['file']['name']);
	if(empty($_POST)) transfer("Không nhận được dữ liệu", "index.php?com=lang&act=man");
	$id = isset($_POST['id']) ? themdau($_POST['id']) : "";
	$data=$_POST['data'];
	if($id){ // cap nhat
		foreach ($config['lang'] as $key => $value) {
			if($key=='vi') continue;
			$define_text=str_replace("'","&#39;",$_POST['define_text_'.$key]);
			mysql_query("update table_lang set define_text='$define_text' where id_parent=".$id." and lang='$key'");
		}

		//exit($data['define_text']);
		$d->reset();
		$d->setTable('lang');
		$d->setWhere('id', $id);
		if($d->update($data)){
			rewrite_lang();
			header("Location:index.php?com=lang&act=man");
		}
		else
			transfer("Cập nhật dữ liệu bị lỗi", "index.php?com=lang&act=man");
	}else{ // them moi

		$d->reset();
		$d->query("select * from #_lang where define='".$data['define']."'");
		$check=$d->num_rows();
		if($check)
			transfer("Chuỗi define <b>".$data['define']."</b> đã tồn tại", "index.php?com=lang&act=man");
		$d->reset();
		$data['lang']='vi';
		$d->setTable('lang');
		if($d->insert($data)){
			$id=mysql_insert_id();
			foreach ($config['lang'] as $key => $value) {
				if($key=='vi') continue;
				$d->reset();
				$data_temp['lang']=$key;
				$data_temp['id_parent']=$id;
				$data_temp['define']=$data['define'];
				$data_temp['define_text']=str_replace("'","&#39;",$_POST['define_text_'.$key]);
				$d->setTable('lang');
				$d->insert($data_temp);
					
			}
			rewrite_lang();
			header("Location:index.php?com=lang&act=man&type=".$_GET['type']);
		}
		else
			transfer("Lưu dữ liệu bị lỗi", "index.php?com=lang&act=man&type=".$_GET['type']);
	}
}

function delete_item(){
	global $d;
	
	if(isset($_GET['id'])){
		$id =  themdau($_GET['id']);
		
		
		// xoa item
		$sql = "delete from #_lang where id='".$id."' or id_parent=".$id;
		if($d->query($sql)){
			rewrite_lang();
			header("Location:index.php?com=lang&act=man&type=".$_GET['type']);
		}
		else
			transfer("Xóa dữ liệu bị lỗi", "index.php?com=lang&act=man");
	}else transfer("Không nhận được dữ liệu", "index.php?com=lang&act=man");
}
#--------------------------------------------------------------------------------------------- photo
?>