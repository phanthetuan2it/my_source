<?php
	$d->reset();
	$d->query("select ten_$lang as ten,id,links from #_video where hienthi=1 and type='video' order by stt asc,id desc");
	$video=$d->result_array();
	$id_y=id_youtube($video[0]['links']);
	$show_video_select=true;
?>
<div class="box_video">
	<div class="contain_video">
	<div id="video">
		<iframe width="100%" height="235" src="https://www.youtube.com/embed/<?=$id_y?>" frameborder="0" allowfullscreen></iframe>
	</div>
	<center>
		<select id="list_video">
			<option value="0"><?=_chonvideo?></option>
			<?php
			if(count($video)>0){
				foreach ($video as $key => $value) { 
				$id_y=id_youtube($value['links']);
				?>
			<option value="<?=$id_y?>"><?=$value['ten']?></option>
				<?php }
			}
			?>
		</select>
	</center>
</div>
</div>
