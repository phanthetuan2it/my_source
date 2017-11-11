<?php
	$d->reset();
	$d->query("select * from table_video where hienthi=1 and type='video' order by stt asc,id desc");
	$video=$d->result_array();
	$show_fotorama=true;
?>
<!--fotorama-->
<link type="text/css" href="css/fotorama/fotorama.css" rel="stylesheet" />
<div class="box_video_index">
	<div class="fotorama">
		<?php for ($i=0; $i <count($video) ; $i++) { ?>
		 <a href="<?=$video[$i]['links']?>"><?=$video[$i]['ten_vi']?></a>
		<? } ?>
	</div>
</div><!--box video-->
<script type="text/javascript" src="js/fotorama/fotorama.js"></script> 