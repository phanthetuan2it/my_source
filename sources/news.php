<?php  if(!defined('_source')) die("Error");

		$id =  $_GET['id'];
		$id_cur =  $_GET['id_cur'];
		$string =  addslashes($_GET['idc']);

		
		$title_detail = $title_detail;
		$title_bar =$title_detail;
		$keywords_bar = $row_setting['keywords'];
		$description_bar = $row_setting['description'];
		$arr_parent=array('id_list'=>'baiviet_list','id_cat'=>'baiviet_cat','id_item'=>'baiviet_item','id_sub'=>'baiviet_sub');


	


		if($id!=''){
			#title san pham khac
			switch ($type_bar) {
				case 'product':
					$title_other=_baivietkhac;
					break;
				
				default:
					$title_other=_baivietkhac;
					break;
			}

			$sql = "select * from #_baiviet where hienthi=1 and tenkhongdau='".$id."'";
			if($id_cur)
				$sql.=" and id=".$id_cur;
			$d->query($sql);
			$row_detail = $d->fetch_array();

			foreach ($arr_parent as $key => $value) { 
				if($row_detail[$key]){
					$id_list=get_all_info($row_detail[$key],$value);
					$breadcrumb_temp.='<a href="'.$com.'/'.$id_list['tenkhongdau'].'-'.$id_list['id'].'/">'.$id_list['ten_'.$lang].'</a>';
				}
			}
			$breadcrumb_temp.='<a href="'.$com.'/'.$row_detail['tenkhongdau'].'-'.$row_detail['id'].'.html">'.$row_detail['ten_'.$lang].'</a>';

			$share_facebook = '<meta property="og:url" content="'.getCurrentPageURL().'" />';
			$share_facebook .= '<meta property="og:type" content="website" />';
			$share_facebook .= '<meta property="og:title" content="'.$row_detail['ten_'.$lang].'" />';
			$share_facebook .= '<meta property="og:description" content="'.strip_tags($row_detail['mota_'.$lang]).'" />';
			$share_facebook .= '<meta property="og:locale" content="vi" />';
			$share_facebook .= '<meta property="og:image" content="http://'.$config_url.'/'._upload_baiviet_l.$row_detail['photo'].'" />';

			$title_bar = $row_detail['title'];
			$keywords_bar = $row_detail['keywords'];
			$description_bar = $row_detail['description'];

			#update lượt xem
			update_col_count($row_detail['id'],'table_baiviet','luotxem');
			
			#các tin khác
			$sql_khac = "select ten_$lang,ngaytao,id,tenkhongdau,photo,mota_$lang from #_baiviet where hienthi=1 and id !='".$row_detail['id']."' and type='$type_bar' order by stt,ngaytao desc limit 0,6";
			$d->query($sql_khac);
			$tintuc = $d->result_array();

		}else if($string){ #check danh muc san pham
		
			$d->reset();
			$sql_cat="select * from #_baiviet_list where tenkhongdau='$string' and type='$type_bar'";
			if($id_cur)
				$sql_cat.=" and id=".$id_cur;

			$d->query($sql_cat);
			$row_detail=$d->fetch_array();
			$idl=$row_detail['id'];
			$sql="select * from";
			if($idl){
				$where = " #_baiviet where hienthi=1 and type='$type_bar' and id_list=$idl";
			}
			if(!$idl){
				$d->reset();
				$sql_cat="select * from #_baiviet_cat where tenkhongdau='$string' and type='$type_bar'";
				if($id_cur)
					$sql_cat.=" and id=".$id_cur;
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$idc=$row_detail['id'];
				
				$where = " #_baiviet where hienthi=1 and type='$type_bar' and id_cat=$idc";
			}

			if(!$idl&&!$idc){
				$d->reset();
				$sql_cat="select * from #_baiviet_item where tenkhongdau='$string' and type='$type_bar'";
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$idi=$row_detail['id'];
				if($id_cur)
					$sql_cat.=" and id=".$id_cur;
				$where = " #_baiviet where hienthi=1 and type='$type_bar' and id_item=$idi";
			}
			if(!$idl&&!$idc&&!$idi){
				$d->reset();
				$sql_cat="select * from #_baiviet_sub where tenkhongdau='$string' and type='$type_bar'";
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$ids=$row_detail['id'];
				if($id_cur)
					$sql_cat.=" and id=".$id_cur;
				$where = " #_baiviet where hienthi=1 and type='$type_bar' and id_sub=$ids";
			}
			//exit($where);

			$per_page = 4; // Set how many records do you want to display per page.
			$startpoint = ($page * $per_page) - $per_page;
			$limit = ' limit '.$startpoint.','.$per_page;
			$sql.=$where." order by stt,ngaytao desc $limit";
			
			$d->query($sql);
			$tintuc = $d->result_array();
			
			$url = getCurrentPageURL();
			$paging = pagination_home($where,$per_page,$page,$url);

			foreach ($arr_parent as $key => $value) { 
				if($row_detail[$key]){
					$id_list=get_all_info($row_detail[$key],$value);
					$breadcrumb_temp.='<a href="'.$com.'/'.$id_list['tenkhongdau'].'-'.$id_list['id'].'/">'.$id_list['ten_'.$lang].'</a>';
				}
			}
			$breadcrumb_temp.='<a href="'.$com.'/'.$row_detail['tenkhongdau'].'-'.$row_detail['id'].'/">'.$row_detail['ten_'.$lang].'</a>';

			$title_detail = $row_detail['ten_'.$lang];
			$title_bar = $row_detail['title'];
			$keywords_bar = $row_detail['keywords'];
			$description_bar = $row_detail['description'];
			// exit($title_detail."-".$title_bar."-".$keyword_bar."-".$description_bar);

		}else{
			$sql="select * from";
			$per_page = 4; // Set how many records do you want to display per page.
			$startpoint = ($page * $per_page) - $per_page;
			$limit = ' limit '.$startpoint.','.$per_page;
			$where = " #_baiviet where hienthi=1 and type='$type_bar'";
			$sql.=$where." order by stt,ngaytao desc $limit";
			$d->query($sql);
			$tintuc = $d->result_array();
			$url = getCurrentPageURL();
			$paging = pagination_home($where,$per_page,$page,$url);

			
		}
	
?>