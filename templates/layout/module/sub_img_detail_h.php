<div id="sub_img_detail">
	<div class="list_sub_img_detail">
		<a href="javascript:" title="prev" class="prev_sub_detail transitionAll03"></a>
		<a href="javascript:" title="next" class="next_sub_detail transitionAll03"></a>
		<div class="owl_img_detail owl-carousel">

			<div class="item_owl_sub">
				<a href="<?=_upload_product_l.$row_detail['photo']?>" rel="zoom-id: Zoomer" rev="<?=thumb($row_detail['photo'],_upload_product_l,$row_detail['tenkhongdau'],400,250)?>">
					<img src="<?=thumb($row_detail['photo'],_upload_product_l,$row_detail['tenkhongdau'],100,92)?>"  class="w100" />
				</a>
			</div>
			<?php
			if(count($product_photo)>0){
				foreach ($product_photo as $key => $value) { ?>
				<div class="item_owl_sub">
					<a href="<?=_upload_product_l.$value['photo']?>" rel="zoom-id: Zoomer" rev="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],400,250)?>">
						<img src="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],100,92)?>"  class="w100" />
					</a>
				</div>
				<? }
			}
			?>
		</div><!--owl img detail-->
	</div>
</div>

