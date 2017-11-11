<?php
	$d->reset();
	$d->query("select * from table_video where hienthi=1 order by stt asc,id desc");
	$video=$d->result_array();
?>
<!--fotorama-->
<link type="text/css" href="css/fotorama/fotorama.css" rel="stylesheet" />
<div class="box_video_index">
	<div class="fotorama">
		<?php
		for ($i=0; $i <count($video) ; $i++) { 
			//$arr_links=explode('watch?v=',$video[$i]['links']);
		?>
		 <a href="<?=$video[$i]['links']?>"><?=$video[$i]['ten_vi']?></a>
		<? } ?>
	</div>
</div><!--box video-->
<script type="text/javascript" src="js/fotorama/fotorama.js"></script> 