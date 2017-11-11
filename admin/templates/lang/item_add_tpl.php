<script type="text/javascript">	
	
	function TreeFilterChanged2(){
		$('#validate_lang').submit();
		
	}
</script>
<div class="wrapper">
<div class="control_frm" style="margin-top:25px;">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
        	<li><a href="index.php?com=lang&act=man"><span>Quản lý  <?=$title_main?></span></a></li>
            <li class="current"><a href="#" onclick="return false;">Thêm</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</div>
<form name="supplier" id="validate_lang" class="form" action="index.php?com=lang&act=save&type=<?=$_GET['type']?>" method="post" enctype="multipart/form-data">
	<div class="widget">



	<div class="title"><img src="./images/icons/dark/record.png" alt="" class="titleIcon" />
		<h6>Thêm mới</h6>
	</div>


	 <div class="formRow">
			<label>Chuỗi define</label>
			<div class="formRight">
                <input type="text" name="data[define]" title="Nhập chuỗi define VD : _baiviet" id="ten_<?=$key?>" class="tipS validate[required]" value="<?=@$item['define']?>" />
			</div>
			<div class="clear"></div>
		</div>
		

		<?php foreach ($config['lang'] as $key => $value) { 
			if($key=='vi'){ ?>
			 <div class="formRow">
				<label><?=$value?></label>
				<div class="formRight">
	                <input type="text" name="data[define_text]" title="Tiếng việt" id="ten_<?=$key?>" class="tipS validate[required]" value="<?=@$item['define_text']?>" />
				</div>
				<div class="clear"></div>
			</div>
			<?php }else{ 
				if($item['id']){
					$d->reset();
					$d->query("select * from #_lang where id_parent=".$item['id']." and lang='$key'");
					$row_lang=$d->fetch_array();
					$define_text=$row_lang['define_text'];
				}else{
					$define_text="";
				}
			?>
			 <div class="formRow">
				<label><?=$value?></label>
				<div class="formRight">
	                <input type="text" name="define_text_<?=$key?>" title="<?=$value?>" id="ten_<?=$key?>" class="tipS validate[required]" value="<?=@$define_text?>" />
				</div>
				<div class="clear"></div>
			</div>
			<?php } ?>
		<?php } ?>
		
		<div class="formRow">
			<div class="formRight">
                 <input type="hidden" name="id" id="id_this_lang" value="<?=@$item['id']?>" />
            	<input type="button" class="btn btn-primary" onclick="TreeFilterChanged2(); return false;" value="Hoàn tất" />
			</div>
			<div class="clear"></div>
		</div>
		
	</div>  
	
</form>        </div>