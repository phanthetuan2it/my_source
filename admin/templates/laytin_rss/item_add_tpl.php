<script type="text/javascript">	
	function TreeFilterChanged2(){
		$('#validate_laytin_rss').submit();
	}
</script>
<div class="wrapper">
<div class="control_frm" style="margin-top:25px;">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
        	<li><a href="index.php?com=laytin_rss&act=man"><span>Lấy tin RSS</span></a></li>
            <li class="current"><a href="#" onclick="return false;">Thêm</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</div>
<form name="supplier" id="validate_laytin_rss" class="form" action="index.php?com=laytin_rss&act=save&type=<?=$_GET['type']?>" method="post" enctype="multipart/form-data">
	<div class="widget">
		<div class="title"><img src="./images/icons/dark/record.png" alt="" class="titleIcon" />
			<h6>Nội dung <?=$value?></h6>
		</div>

		<div class="formRow">
			<label>Wesbsite</label>
			<div class="formRight">
               <?php
               foreach ($arr_type_website as $key => $value) { ?>
               	<label><input type="radio" name="data[type]" value="<?=$value?>" <?=($item['type']==''&&$key==0)||$item['type']==$value?'checked':''?> /><?=$value?></label>
               <?php }  ?>
			</div>
			<div class="clear"></div>
		</div>

		<?php foreach ($config['lang'] as $key => $value) { ?>
		<div class="contain_lang_<?=$key?> contain_lang <?=$key==$config['lang_active']?'active':''?>">
			
			
		        <div class="formRow">
					<label>Tiêu đề <?=$key!=$config['lang_active']?'('.$key.')':''?></label>
					<div class="formRight">
		                <input type="text" name="data[ten_<?=$key?>]" title="Nhập tên danh mục" id="ten_<?=$key?>" class="tipS validate[required]" value="<?=@$item['ten_'.$key]?>" />
					</div>
					<div class="clear"></div>
				</div>
				
		</div><!--lang-->
		<?php break; } ?>

        <div class="formRow">
			<label>Link</label>
			<div class="formRight">
                <input type="text" name="url" title="Nhập link website" id="url" class="tipS " value="<?=@$item['url']?>" />
			</div>
			<div class="clear"></div>
		</div>
		
        <div class="formRow">
          <label>Tùy chọn: <img src="./images/question-button.png" alt="Chọn loại" class="icon_que tipS" original-title="Check vào những tùy chọn "> </label>
          <div class="formRight">
           
            <input type="checkbox" name="active" id="check1" value="1" <?=(!isset($item['hienthi']) || $item['hienthi']==1)?'checked="checked"':''?> />
            <label for="check1">Hiển thị</label>            
          </div>
          <div class="clear"></div>
        </div>
        <div class="formRow">
            <label>Số thứ tự: </label>
            <div class="formRight">
                <input type="text" class="tipS" value="<?=isset($item['stt'])?$item['stt']:1?>" name="num" style="width:20px; text-align:center;" onkeypress="return OnlyNumber(event)" original-title="Số thứ tự của danh mục, chỉ nhập số">
            </div>
            <div class="clear"></div>
        </div>
		
		
		<div class="formRow">
			<div class="formRight">
                 <input type="hidden" name="id" id="id_this_laytin_rss" value="<?=@$item['id']?>" />
            	<input type="button" class="btn btn-primary" onclick="TreeFilterChanged2(); return false;" value="Hoàn tất" />
			</div>
			<div class="clear"></div>
		</div>
		
	</div>  
	
</form>        </div>