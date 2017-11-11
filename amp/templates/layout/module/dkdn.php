<?php
	$show_dkdn=true;
?>
<div id="user_header">
	<?php if(!$_SESSION[$name_log]){ ?>
	   	<a href="http://<?=$config_url?>/dang-ky.html"  target="_self" class="btn_dkdn"><?=_dangky?></a> / 
	   	
	  	<?php /* ?><a href="javascript:" onclick="open_dkdn('#login')" target="_self" class="btn_dkdn"><?=_dangnhap?></a><?php */ ?>
	 
	  	<a href="dang-nhap.html" class="btn_dkdn"><?=_dangnhap?></a>
  	<?php }else{ ?>
  		<a href="http://<?=$config_url?>/thong-tin-thanh-vien.html"  target="_self" class="btn_dkdn"><?=_xinchao?> <?=$thanhvien['ten']?></a> / 
	  	<a href="http://<?=$config_url?>/logout.html" target="_self" class="btn_dkdn"><?=_dangxuat?></a>
  	<?php } 	?>
</div>