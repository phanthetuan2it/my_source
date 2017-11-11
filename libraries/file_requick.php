<?php
	$com = (isset($_REQUEST['com'])) ? addslashes($_REQUEST['com']) : "";
	$act = (isset($_REQUEST['act'])) ? addslashes($_REQUEST['act']) : "";
	
	$page = (int)(!isset($_GET["page"]) ? 1 : $_GET["page"]);
	
	if ($page <= 0) $page = 1;

	$d->reset();
	$sql_setting = "select * from #_bgweb where type='bgweb' limit 0,1";
	$d->query($sql_setting);
	$row_background= $d->fetch_array();

	$d->reset();
    $sql = "select thumb_$lang from #_photo where type='favicon'";
    $d->query($sql);
    $favicon = $d->fetch_array();

    $d->reset();
    $sql = "select noidung_$lang as noidung from #_company where type='footer'  limit 0,1";
    $d->query($sql);
    $footer = $d->fetch_array();

    if(!$_SESSION[$name_log]){
    	$arr_check_login=array('thong-tin-thanh-vien','san-pham-yeu-thich');
    	if(in_array($com,$arr_check_login))
    		header('Location: ' . 'index.html');
    }
    

	//alert($_GET['lang']);
	switch($com){
		case 'ngon-ngu':
			$_SESSION['lang']=$_GET['lang'];
			header('Location: ' . $_SERVER['HTTP_REFERER']);
		break;

		case 'hoi-dap':
			$source = "hoidap";
			$template = "hoidap";
			break;
		case 'dang-ky':
			$source = "register";
			$template = "register";
			$title_detail = _dangky;
			break;
		case 'tim-kiem-google':
			$source = "google_search";
			$template = "google_search";
			break;
		case 'quen-mat-khau':
			$source = "forgot_password";
			$template = "forgot_password";
			break;
		case 'activated':
			$source = "activated";
			$template = "activated";
			$title_detail = _kichhoattaikhoan;
			break;
		case 'thong-tin-thanh-vien':
			$source = "info_user";
			$template = "info_user";
			break;
		case 'video':
			$source = "video";
			$template = isset($_GET['id']) ? "video_detail" : "video";
			break;
			
		case 'ban-do':
			$source = "map";
			$template ="map";
			break;
		case 'download':
			$source = "download";
			$template = isset($_GET['id']) ? "download_detail" : "download";
			$type_bar = 'download';
			$title_detail = "Download";
			break;
		case 'thu-vien-anh':
			$source = "album";
			$template = isset($_GET['id']) ? "album_detail" : "album";
			$type_bar = 'album';
			$title_detail = "album";
			break;
		case 'site-map':
			$source = "sitemap";
			$template ="sitemap";
			break;
		case 'tuyen-dung':
			$source = "about";
			$template = "about";
			$title_detail = _tuyendung;
			$type_bar = 'tuyendung';
			break;

		case 'dang-nhap':
		 	$source = "login";
		 	$template ="login";
		 	$title_detail = _dangnhap;
		 	break;
		case 'tags':
			$source = "tags";
			$template ="tags";
			break;
			
		case 'gioi-thieu':
			$source = "about";
			$template = "about";
			$title_detail = _gioithieu;
			$type_bar = 'gioithieu';
			break;
	
		case 'kiem-tra-don-hang':
			$source = "donhang";
			$template = "donhang";
			$title_detail = "Kiểm tra đơn hàng";
			$type_bar = 'chamsoc';
			break;
		
		case 'gioi-thieu':
			$source = "news";
			$template = isset($_GET['id']) ? "news_detail" : "news";
			$type_bar = 'about';
			$title_detail = 'Giới thiệu';
			break;
		
		case 'tin-tuc':
			$source = "news";
			$template = isset($_GET['id']) ? "news_detail" : "news";
			$type_bar = 'tintuc';
			$title_detail = _tintuc;
			break;
		
		
		case 'dich-vu':
			$source = "news";
			$template = isset($_GET['id']) ? "news_detail" : "news";
			$type_bar = 'dichvu';
			$title_detail = _dichvu;
		break;
		
		case 'san-pham':
			$source = "product";
			$template =isset($_GET['id']) ? "product_detail" : "product";
			$title_detail = _sanpham;
			$type_bar = 'product';	
			break;	

		case 'san-pham-yeu-thich':
			$source = "product_like";
			$template ="product_like";
			$title_detail = _sanphamyeuthich;	
			break;	
								
		case 'lien-he':
			$source = "contact";
			$template = "contact";
			$title_detail = _lienhe;	
			break;
		
		case 'tim-kiem':
			$source = "search";
			$template = "search";
			break;
		case 'gio-hang':
			$source = "giohang";
			$template = "giohang";
			break;	
		case 'thanh-toan':
			$source = "thanhtoan";
			$template = "thanhtoan";
			break;
		case 'xac-nhan':
			$source = "xacnhan";
			$template = "xacnhan";
			break;		
			
		default: 
			$source = "index";
			$template = "index";
			break;
	}
	
	if($source!="") include _source.$source.".php";
	/*==================== dkdn ====================*/
	if($_COOKIE['email_remember']){
		$email_remember=$_COOKIE['email_remember'];
		$d->reset();
		$d->query("select * from #_thanhvien where email='$email_remember' limit 0,1");
		$row=$d->fetch_array();
		$_SESSION[$name_log]=$row;
	}
	if($_SESSION[$name_log]){
		$thanhvien=$_SESSION[$name_log];
	}
	if($_REQUEST['com']=='logout')
	{
		unset($_SESSION[$name_log]);
		setcookie('email_remember', $row['email'], time()-1);
		setcookie('password_remember', $row['password'], time()-1);
		header("Location: http://".$config_url."/");
	}		
	//end dkdn
?>