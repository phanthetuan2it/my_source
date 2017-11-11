<div class="content_main">
	<div class="title_main"><span><?=_sanphamyeuthich?></span></div>
	<div class="content_main">
		<div class="row_p_like">
			
			<?php
			if($product){ ?>
			<div class="my_table table_p_like">
				<div class="my_row my_row_title">
					<div class="my_cell">Sản phẩm</div>
					<div class="my_cell">Ngày</div>
					<div class="my_cell">Giá</div>
				</div>
			
				<?php foreach ($product as $key => $value) { ?>
				<div class="my_row">
					<div class="my_cell">
						<img src="timthumb.php?src=<?=_upload_product_l.$value['photo']?>&w=75&h=75&zc=1&q=100" alt="<?=$value['ten_'.$lang]?>" class="img_p_like"/>
						<h3 class="name_p_like"><?=$value['ten_'.$lang]?></h3>
						<div class="remove_p_like text_danger" data-id="<?=$value['id']?>"  data-toggle="modal" data-target="#confirm_myModal"><i class="fa fa-times"></i><?=_xoakhoidanhsach?></div>
					</div>
					<div class="my_cell"><?=date('d/m/Y',$value['ngaytao'])?></div>
					<div class="my_cell"><div class="price_p_like text_danger"><strong><?=number_format($value['giaban'],0,0,',')?> VNĐ</strong></div></div>
				</div>

			<?php  } ?>
		</div><!--end table-->
		<?=$paging?>
			<?php }else{ ?>
			<div class="alert alert-warning col-xs-12 center"><strong><?=_chuacosanphamyeuthich?></strong></div>
			<?php } ?>
		</div>
		
	</div><!--content main-->
</div><!--sub main-->

