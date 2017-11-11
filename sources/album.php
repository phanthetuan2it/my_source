<?php  if(!defined('_source')) die("Error");

	
	$id =  addslashes($_GET['id']);
	if ($id!='') {
		$sql = "select * from #_album where hienthi=1 and tenkhongdau='".$id."'";
	$d->query($sql);
	$album_detail = $d->fetch_array();

	$title_detail = $album_detail['ten_'.$lang];

	$title_bar .= $album_detail['title'];
	$keyword_bar .= $album_detail['keywords'];
	$description_bar .= $album_detail['description'];

	$share_facebook = '<meta property="og:url" content="'.getCurrentPageURL().'" />';
	$share_facebook .= '<meta property="og:type" content="website" />';
	$share_facebook .= '<meta property="og:title" content="'.$album_detail['ten_'.$lang].'" />';
	$share_facebook .= '<meta property="og:description" content="'.$album_detail['mota_'.$lang].'" />';
	$share_facebook .= '<meta property="og:image" content="http://'.$config_url.'/'._upload_album_l.$album_detail['photo'].'" />';

	
	#các tin cu hon
	$sql_khac = "select * from #_album_photo where hienthi=1 and id_album ='".$album_detail['id']."' order by id desc";
	$d->query($sql_khac);
	$album_images = $d->result_array();

	} else {
		
		
			$sql="select * from";
			$per_page = 6; // Set how many records do you want to display per page.
			$startpoint = ($page * $per_page) - $per_page;
			$limit = ' limit '.$startpoint.','.$per_page;
			$where = " #_album where hienthi=1 and type='$type_bar'";
			$sql.=$where." order by id desc $limit";
			$d->query($sql);
			$album = $d->result_array();
			$url = getCurrentPageURL();
			$paging = pagination_home($where,$per_page,$page,$url);
		
		
		
		$title_bar .= $row_meta['title'];
		$keyword_bar .= $row_meta['keywords'];
		$description_bar .= $row_meta['description'];
	}
?>