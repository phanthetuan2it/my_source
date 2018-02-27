<?php  if(!defined('_source')) die("Error");
	$d->reset();
	$sql = "select ten_$lang,id,tenkhongdau,thumb,quangcao_thumb from #_product_list where hienthi=1 and type='product' and noibat>0 order by stt,id desc";
	$d->query($sql);
	$listnb = $d->result_array();


	$d->reset();
	$d->query("select * from #_product where hienthi=1 and noibat=1 order by stt asc, id desc");
	$product_index=$d->result_array();

?>