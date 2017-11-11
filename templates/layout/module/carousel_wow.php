<?php
	$d->reset();
	$d->query("select * from #_baiviet where hienthi=1 and type='tintuc'");
	$items_carousel=$d->result_array();
	$show_carousel_wow=true;
?>
<link rel="stylesheet" type="text/css" href="css/carousel_wow/style.css" />
<div id="box_carousel_wow">
	<!-- Start WOWSlider.com BODY section --> <!-- add to the <body> of your page -->
	<div id="wowslider-container1">
		<div class="ws_images">
			<ul>
				<?php
				if($items_carousel){
					foreach ($items_carousel as $key => $value) { ?>
						<li><a href="http://wowslider.com/vi"> <img src="<?=thumb($value['photo'],_upload_baiviet_l,$value['tenkhongdau'],580,380)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trs03"/></a></li>
					<?php }
				}
				?>
				
			</ul>
		</div><!--ws images-->
	</div>	
	
	<!-- End WOWSlider.com BODY section -->
</div><!--end bix carousel wow-->
