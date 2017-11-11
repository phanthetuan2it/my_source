<?php 
if(!empty($_POST)&& (isset($_POST['username'])||isset($_POST['username_login']))) {

	$username = $_POST['username_login'];
	$password = $_POST['password_login'];
	$d->reset();
	$sql = "select * from #_thanhvien where email='".$username."'";
	$d->query($sql);
	if($d->num_rows() == 1){
		$row = $d->fetch_array();
		
		if($row['hienthi']!=1){
			transfer(_banphaikichhoat, "http://".$config_url."/",false);
		} else { 
			if(($row['password'] == md5($password))){
				//$name_log => in file "file_requick"
				//$name_log ="phanthetuan" => $_SESSION['phanthetuan'] 
				$_SESSION[$name_log]= $row;
				if($_POST['rememberpass']){
					setcookie('email_remember', $row['email'], time()+60*60*24*365);
					setcookie('password_remember', $row['password'], time()+60*60*24*365);
				}

				transfer("Đăng nhập thành công","index.html");
			}
		}
	}
		transfer("Tên đăng nhập hoặc mật khẩu không chính xác", "http://".$config_url."/",false);
	}
	
	$title_bar .= "Đăng nhập"; 
?>