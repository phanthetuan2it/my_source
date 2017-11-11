<?php

	if(!empty($_POST)){


    $ten_input=$_POST['ten_thanhtoan'];
	$diachi_input=$_POST['diachi_thanhtoan'];
	$dienthoai_input=$_POST['dienthoai_thanhtoan'];
	$email_input=$_POST['email_thanhtoan'];
	$noidung_input=$_POST['noidung_thanhtoan'];

	

  
   if(isset($_POST))
   {
		include_once "phpMailer/class.phpmailer.php";	
		$mail = new PHPMailer();
		// $mail->IsSMTP(); // Gọi đến class xử lý SMTP
		// $mail->Host       = $config_ip; // tên SMTP server
		// $mail->SMTPAuth   = true;                  // Sử dụng đăng nhập vào account
		// $mail->Username   = $config_email; // SMTP account username
		// $mail->Password   = $config_pass;  

		// //Thiet lap thong tin nguoi gui va email nguoi gui
		// $mail->SetFrom($config['email'],$row_setting['ten_'.$lang]);

		$mail->IsSMTP(); // Gọi đến class xử lý SMTP
		$mail->Host       = "120.72.119.1"; // tên SMTP server 
		$mail->SMTPAuth   = true;                  // Sử dụng đăng nhập vào account
		$mail->Username   = "thoitrangl"; // SMTP account username
		$mail->Password   = "8Ea2o2bwV";  

		//Thiet lap thong tin nguoi gui va email nguoi gui
		$mail->SetFrom('support@vnhieu.vn',$row_setting['ten_'.$lang]);
		
		$mail->AddAddress($row_setting['email'],$row_setting['ten_'.$lang]);
		$mail->AddAddress($email_input, $ten_input);
		
		/*=====================================
		 * THIET LAP NOI DUNG EMAIL
 		*=====================================*/

		//Thiết lập tiêu đề
		$mahoadon=strtoupper (ChuoiNgauNhien(6));
		$mail->Subject    = 'Xác nhận đơn hàng '.$mahoadon;
		$mail->IsHTML(true);
		//Thiết lập định dạng font chữ
		$mail->CharSet = "utf-8";	
		$body="";
		$body.='<div class="box_contain_table" style="background-color:#F2F2F2;padding:15px;">';
		$body.='<div class="inner_contain_table" style="background-color:#fff;max-width:700px;margin:0px auto;line-height:22px;padding:10px;">';
		$body.= '<div style="border-bottom:3px solid #00b7f1;padding:10px 0px;margin-bottom:15px;"><img src="http://'.$config_url."/"._upload_hinhanh_l.$logo['photo_vi'].'" /></div>';
		$body.= '<div style="padding:15px;">';
		$body.= '<div><h2>Cảm ơn quý khách '.$ten_input.' đã đặt hàng tại '.$config_url.'</h2></div>';
		$body.= '<div style="color:#02acea;"><strong>Thông tin đơn hàng</strong></div>';
		$body.= '<div><strong>Họ tên : </strong> '.$ten_input.'</div>';
		$body.= '<div><strong>Email  : </strong> '.$email_input.'</div>';
		$body.= '<div><strong>Điện thoại  : </strong> '.$dienthoai_input.'</div>';
		$body.= '<div><strong>Địa chỉ  : </strong> '.$diachi_input.'</div>';
		$body.= '<div><strong>Nội dung : </strong> '.$noidung_input.'</div>';
        $body.='<table style="width:100%;color:#333;border:1px solid #e9e9e9; border-collapse: collapse;margin:10px 0px;">';
			if(is_array($_SESSION['cart']))
			{
            	$body.='<thead>';
				$body.='<tr style="background-color: #fff;">';
				$body.='<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Hình ảnh</th>';
				$body.='<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Tên</th>';
				$body.='<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Số lượng</th>';
				$body.='<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Tổng</th>';
				$body.='</tr>';
				$body.='</thead>';

				$body.='<tfoot>';
				$body.='<tr style="border:1px solid #e9e9e9;">';
				$body.='<td colspan="5" style="text-align:right;padding:10px 5px;font-weight: bold;color:#E53C2F;font-size: 13px;"><b>Tổng giá : <span class="price_all_cart">'.number_format(get_order_total(),0, ',', '.').' đ</span></b></td>';
				$body.='</tr>';
				$body.='</tfoot><!--footer-->';

				$body.='<tbody>';
				
						$max=count($_SESSION['cart']);
						for ($i=0;$i<$max;$i++) { 
						#======================================
						$pid=$_SESSION['cart'][$i]['productid'];
						$q=$_SESSION['cart'][$i]['qty'];
						$songay=$_SESSION['cart'][$i]['songay'];
						$pname=get_product_name($pid);
						#======================================
						
				$body.='<tr style="border-bottom:1px solid #ecedef;">';
				$body.='<td style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;">';
				$body.='<img src="http://'.$config_url.'/'._upload_product_l.get_thumb($pid).'" width="60" />';
				$body.='</td>';
				$body.='<td style="text-align:left;padding:5px 5px;border:1px solid #e9e9e9;">';
				$body.='<h3 class="name_p_cart" style="font-size:14px;font-weight:bold;">'.$pname.'</h3>';
				$body.='<div class="price_p_cart_name" style="font-size:15px;color:#f00;">'.number_format(get_price($pid),0, ',', '.').' đ</div>
							</td>';
				$body.='<td style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;">';
				$body.='<div class="box_number_cart">';
				$body.='<input type="text" class="number_cart" name="product'.$pid.'" readonly="readonly" value="'.$q.'" maxlength="3" size="2" style="background:#fff;text-align:center;border-radius:2px;border:none;outline:none; padding: 5px 0px;" />';
				$body.='</div><!--box number cart-->';
				$body.='</td>';
				$body.='<td  style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;"><div class="price_p_cart" style="text-align: center; font-size: 16px; color: #43484D;">'.number_format(get_price($pid)*$q,0, ',', '.') .' đ</div></td>';
				$body.='</tr>';
						 } //end for cart
				$body.='</tbody><!--body-->';
            }
			else{
				$body.='<tr bgColor="#FFFFFF"><td>There are no items in your shopping cart!</td>';
			}
       $body.=' </table>';
    //thông tin hỗ trợ
	  $body.= '<div style="color:#02acea;"><strong>Thông tin hỗ trợ</strong></div>';
	  $body.='<div><strong>Tên công ty : </strong> '.$row_setting['ten_'.$lang].'</div>';
	  $body.='<div><strong>Địa chỉ : </strong> '.$row_setting['diachi_'.$lang].'</div>';
	  $body.='<div><strong>Email : </strong> '.$row_setting['email'].'</div>';
	  $body.='<div><strong>Website :</strong> http://www.'.$config_url.'/</div>';
	  $body.='<div></div></div>';


			
			
			$ngaydangky=time();
			$tonggia=get_order_total();
			
			$sql = "INSERT INTO  table_order (madonhang,hoten,dienthoai,diachi,email,httt,tonggia,noidung,ngaytao,trangthai)  VALUES ('$mahoadon','$ten_input','$dienthoai_input','$diachi_input','$email_input','$phuongthuc_input','$tonggia','$noidung_input','$ngaydangky','1')";
			mysql_query($sql);

			$id_order = mysql_insert_id();

			$max=count($_SESSION['cart']);

			for($i=0;$i<$max;$i++){
				$pid = $_SESSION['cart'][$i]['productid'];
				$q = $_SESSION['cart'][$i]['qty'];
				$pname = get_product_name($pid);
				$gia = get_price($pid);
				
				if($q==0) continue;

				$data1['id_product'] = $pid;
				$data1['id_order'] = $id_order;
				$data1['ten'] = $pname;
				$data1['gia'] = $gia;
				$data1['soluong'] = $q;
				$d->setTable('order_detail');
				$d->insert($data1);
        		
			}

		
			
		
			$mail->Body = $body;
			if($mail->Send()){
				unset($_SESSION['cart']);
				transfer("Đặt Hàng Thành Công ! ", "index.html");
			}
			else transfer("Xin lỗi quý khách.<br>Hệ thống bị lỗi, xin quý khách thử lại.", "thanh-toan.html",false);
		}
		}
		$title_bar .= "Thanh Toán";
?>