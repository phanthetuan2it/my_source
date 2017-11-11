<?php
	$d->reset();
	$d->query("select * from table_chinhanh where hienthi=1 and type='chinhanh' order by stt asc,id desc");
	$chinhanh=$d->result_array();
	$show_multi_map=true;
?>
<div class="contain_tab_map">
	<ul>
		<?php
		if($chinhanh){
			foreach ($chinhanh as $key => $value) { ?>
				<li class="change_maker" data-id="<?=$value['id']?>"><?=$value['ten_vi']?></li>
			<?php }
		}
		?>
	</ul>
</div>
<div id="map_contact_multi" style="width:100%;height:300px;"></div>