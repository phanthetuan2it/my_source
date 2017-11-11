<?php  if(!defined('_source')) die("Error");
		
	/*xử lý string get*/
	$where_temp="";
			$arr_uri=explode('/', $_SERVER['REQUEST_URI']);
			$arr_uri_last=explode('?',$arr_uri[count($arr_uri)-1]);
			$arr_s=explode('&',$arr_uri_last[1]);
			foreach ($arr_s as $key => $value) {
				$arr_temp=explode('=',$value);
				$_GET[$arr_temp[0]]=urldecode($arr_temp[1]);

				if($_GET[$arr_temp[0]]!=''&&$arr_temp[0]!='keywords'){
					$where_temp.=" and ".$arr_temp[0]."=".$_GET[$arr_temp[0]];
				}
			}
		if($_GET['page']) $page=$_GET['page'];
		$key=trim($_GET['keywords']);
		$key_khong_dau=changeTitle($key);

		$per_page = 20; // Set how many records do you want to display per page.
		$startpoint = ($page * $per_page) - $per_page;
		$limit = ' limit '.$startpoint.','.$per_page;
		
		$where = " #_product where hienthi=1 and type='product' ";
		$ten=trim($_POST['timkiem']);
		if($key!='')
		{
			$where.=" and (ten_$lang like'%$key%' or tenkhongdau like'%$key_khong_dau%') ";

		}
		$where.=$where_temp;
		$where .= " order by stt,ngaytao desc";

		$sql = "select * from $where $limit";
		$d->query($sql);
		$product = $d->result_array();

		$d->reset();
		$sql = "select id from $where";
		$d->query($sql);
		$num_search=$d->num_rows();

		$title_detail = _timthay." ".($num_search)." "._ketqua;

		$url = getCurrentPageURL();
		$paging = pagination_home($where,$per_page,$page,$url);

?>