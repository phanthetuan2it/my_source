<?php  if(!defined('_source')) die("Error");
$breadcrumb.='<a href="'.$com.'.html">'._thongtinthanhvien.'</a>';
if($_POST){
	$id_user=$_SESSION[$name_log]['id'];
	if($_POST['password_new']){
		$data['password']=$_POST['password_new'];
	}
	$data['dienthoai']=$_POST['dienthoai'];
	$data['ten']=$_POST['hoten'];
	$data['diachi']=$_POST['diachi'];
	$file_name=images_name($_FILES['file']['name']);
	if($photo = upload_image("file", 'jpg|png|gif|JPG|jpeg|JPEG', _upload_thanhvien_l,$file_name)){

			$data['photo'] = $photo;
			$data['thumb'] = create_thumb($data['photo'], 100, 100, _upload_thanhvien_l,$file_name,1);	
			$d->setTable('product');
			$d->setWhere('id', $id);
			$d->select();
			if($d->num_rows()>0){
				$row = $d->fetch_array();
				delete_file(_upload_thanhvien_l.$row['photo']);	
				delete_file(_upload_thanhvien_l.$row['thumb']);				
		}
	}

	$d->reset();
	$d->setTable("thanhvien");
	$d->setWhere("id",$id_user);
	if($d->update($data)){
		$d->reset();
		$d->query("select * from #_thanhvien where id=".$id_user);
		$_SESSION[$name_log]=$d->fetch_array();
	}


}