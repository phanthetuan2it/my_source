<?php  if(!defined('_source')) die("Error");

		@$string =  addslashes($_GET['idc']);
		@$id_cur=addslashes($_GET['id_cur']);
		@$id=  addslashes($_GET['id']);

		$title_detail = $title_detail;
		$title_bar =$title_detail;
		$keywords_bar = $row_setting['keywords'];
		$description_bar = $row_setting['description'];
		$arr_parent=array('id_list'=>'product_list','id_cat'=>'product_cat','id_item'=>'product_item','id_sub'=>'product_sub');
		
		#chi tiet san pham======================

		if($id!=''){ //neu co id
			#title san pham khac
			switch ($type_bar) {
				case 'product':
					$title_other=_sanphamkhac;
					break;
				
				default:
					$title_other=_sanphamkhac;
					break;
			}

			$d->reset();
			$sql_detail = "select * from #_product where hienthi=1 and type='$type_bar' and tenkhongdau='".$id."'";
			if($id_cur)
				$sql_detail.="and id=".$id_cur;
			$d->query($sql_detail);
			$row_detail = $d->fetch_array();

			foreach ($arr_parent as $key => $value) { 
				if($row_detail[$key]){
					$id_list=get_all_info($row_detail[$key],$value);
					$breadcrumb_temp.='<a href="'.$com.'/'.$id_list['tenkhongdau'].'-'.$id_list['id'].'/">'.$id_list['ten_'.$lang].'</a>';
				}
			}
			$breadcrumb_temp.='<a href="'.$com.'/'.$row_detail['tenkhongdau'].'-'.$row_detail['id'].'.html">'.$row_detail['ten_'.$lang].'</a>';


			$idlist=$row_detail['id_list'];
			
			#update lượt xem
			update_col_count($row_detail['id'],'table_product','luotxem');
			
			$d->reset();
			$sql = "select id,thumb,ten_$lang,giaban,tenkhongdau,giacu from #_product where hienthi=1 and type='$type_bar' and banchay=1 order by stt,ngaytao desc";
			$d->query($sql);
			$product_banchay = $d->result_array();

			$share_facebook = '<meta property="og:url" content="'.getCurrentPageURL().'" />';
			$share_facebook .= '<meta property="og:type" content="website" />';
			$share_facebook .= '<meta property="og:title" content="'.$row_detail['ten_'.$lang].'" />';
			$share_facebook .= '<meta property="og:description" content="'.strip_tags($row_detail['mota_'.$lang]).'" />';
			$share_facebook .= '<meta property="og:locale" content="vi" />';
			$share_facebook .= '<meta property="og:image" content="http://'.$config_url.'/'._upload_product_l.$row_detail['photo'].'" />';

			$d->reset();
			$sql = "select * from #_product_photo where hienthi=1 and id_product='".$id."' and type='product' order by stt,id desc";
			$d->query($sql);
			$hinhanh = $d->result_array();

			$d->reset();
			$sql = "select * from #_product where hienthi=1 and type='$type_bar'  and id_list='".$row_detail['id_list']."' and id!='".$row_detail['id']."' order by stt,ngaytao desc limit 0,8";
			$d->query($sql);
			$product = $d->result_array();

			$title_bar = $row_detail['title'];
			$keywords_bar = $row_detail['keywords'];
			$description_bar = $row_detail['description'];


			$d->reset();
		    $sql = "select thumb,id,photo from #_product_photo where hienthi=1 and type='$type_bar' and id_product='".$row_detail['id']."' order by stt,id desc ";
		    $d->query($sql);
		    $product_photo = $d->result_array();

		} else if($string) { //new co ten danh muc
			#check danh muc san pham
		
			$d->reset();
			$sql_cat="select * from #_product_list where tenkhongdau='$string' and type='$type_bar'";
			if($id_cur)
				$sql_cat.=" and id=".$id_cur;

			$d->query($sql_cat);
			$row_detail=$d->fetch_array();
			$idl=$row_detail['id'];
			$sql="select * from";
			if($idl){
				$where = " #_product where hienthi=1 and type='$type_bar' and id_list=$idl";
			}
			if(!$idl){
				$d->reset();
				$sql_cat="select * from #_product_cat where tenkhongdau='$string' and type='$type_bar'";
				if($id_cur)
					$sql_cat.=" and id=".$id_cur;
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$idc=$row_detail['id'];
				$where = " #_product where hienthi=1 and type='$type_bar' and id_cat=$idc";
			}

			if(!$idl&&!$idc){
				$d->reset();
				$sql_cat="select * from #_product_item where tenkhongdau='$string' and type='$type_bar'";
				if($id_cur)
				$sql_cat.=" and id=".$id_cur;
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$idi=$row_detail['id'];
				$where = " #_product where hienthi=1 and type='$type_bar' and id_item=$idi";
			}
			if(!$idl&&!$idc&&!$idi){
				$d->reset();
				$sql_cat="select * from #_product_sub where tenkhongdau='$string' and type='$type_bar'";
				if($id_cur)
				$sql_cat.=" and id=".$id_cur;
				$d->query($sql_cat);
				$row_detail=$d->fetch_array();
				$ids=$row_detail['id'];
				$where = " #_product where hienthi=1 and type='$type_bar' and id_sub=$ids";
			}
			//exit($where);
			foreach ($arr_parent as $key => $value) { 
				if($row_detail[$key]){
					$id_list=get_all_info($row_detail[$key],$value);
					$breadcrumb_temp.='<a href="'.$com.'/'.$id_list['tenkhongdau'].'-'.$id_list['id'].'/">'.$id_list['ten_'.$lang].'</a>';
				}
			}

			$breadcrumb_temp.='<a href="'.$com.'/'.$row_detail['tenkhongdau'].'-'.$row_detail['id'].'/">'.$row_detail['ten_'.$lang].'</a>';

			$per_page = 20; // Set how many records do you want to display per page.
			$startpoint = ($page * $per_page) - $per_page;
			$limit = ' limit '.$startpoint.','.$per_page;
			$sql.=$where." order by stt,ngaytao desc $limit";
			$d->query($sql);
			$product = $d->result_array();
			
			$url = getCurrentPageURL();
			$paging = pagination_home($where,$per_page,$page,$url);

			$title_detail = $row_detail['ten_'.$lang];
			$title_bar = $row_detail['title'];
			$keywords_bar = $row_detail['keywords'];
			$description_bar = $row_detail['description'];
			// exit($title_detail."-".$title_bar."-".$keyword_bar."-".$description_bar);

		}else{ // if rong
			$sql="select * from";
			$per_page = 20; // Set how many records do you want to display per page.
			$startpoint = ($page * $per_page) - $per_page;
			$limit = ' limit '.$startpoint.','.$per_page;
			$where = " #_product where hienthi=1 and type='$type_bar'";
			$sql.=$where." order by stt,ngaytao desc $limit";
			$d->query($sql);
			$product = $d->result_array();
			$url = getCurrentPageURL();
			$paging = pagination_home($where,$per_page,$page,$url);
		}
?>