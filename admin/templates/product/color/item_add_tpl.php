<script type="text/javascript">		
	$(document).ready(function() {
		$('.chonngonngu li a').click(function(event) {
			var lang = $(this).attr('href');
			$('.chonngonngu li a').removeClass('active');
			$(this).addClass('active');
			$('.lang_hidden').removeClass('active');
			$('.lang_'+lang).addClass('active');
			return false;
		});

		$('.update_stt').keyup(function(event) {
			var id = $(this).attr('rel');
			var table = 'product_photo';
			var value = $(this).val();
			$.ajax ({
				type: "POST",
				url: "ajax/update_stt.php",
				data: {id:id,table:table,value:value},
				success: function(result) {
				}
			});
		});

		$('.delete_images').click(function(){
	      if (confirm('Bạn có muốn xóa hình này ko ? ')) {
	        var id = $(this).attr('title');
			var table = 'product_photo_color';
			var links = "../upload/product/";
	        $.ajax ({
	          type: "POST",
	          url: "ajax/delete_images.php",
	          data: {id:id,table:table,links:links},
	          success: function(result) { 
	          }
	        });
	        $(this).parent().slideUp();
	      }
	      return false;
	    });

	    $('.themmoi').click(function(e) {
			$.ajax ({
				type: "POST",
				url: "ajax/khuyenmai.php",
				success: function(result) { 
					$('.load_sp').append(result);
				}
			});
        });

		$('.delete').click(function(e) {
			$(this).parent().remove();
		});
		

	});

	$(function(){
		 $("#states").select2();
        ///
        $("#states").change(function(){
        	$tags = $(this).val();
        	
        	if($tags>0){
        	$("#tags_name").append("<p class='delete_tags'>"+$("#states option:selected").text()+"<input name='tags[]' value='"+$tags+"'  type='hidden' /> <span></span> </p>");
        	}

	       	$(".delete_tags span").click(function(){
	        	$(this).parent().remove();
	        });
        });
        //
        $(".delete_tags span").click(function(){
        	$(this).parent().remove();
        });
	});
	
</script>

<?php


  //------------ tags-------------------------
  if($item['tags']!=''){
		$tags = explode(",", $item['tags']) ;
		$sql = "select id,ten_vi from #_tags where id<>".$tags[0];
		for ($i=1,$count = count($tags); $i < $count ; $i++) { 
			$sql .=" and id<> ".$tags[$i];
		}
	}else{
		$sql = "select id,ten_vi from #_tags";
	}
		$d->query($sql);
	    $tags_arr = $d->result_array();

  //------------end tags---------------


?>
<script type="text/javascript">
	$(document).ready(function() {
		$('.id_loaihinh').change(function(event) {
			var id_loaihinh = $('.id_loaihinh').val();
			if (id_loaihinh==1) {
				$('.price').html('Giá bán');
			}else{
				$('.price').html('Giá thuê/Ngày');
			};
		});
	});
</script>

<div class="box_contain_color">
<div class="control_frm">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
        	<li><a href="index.php?com=product&act=man_color<?php if($_REQUEST['type']!='') echo'&type='. $_REQUEST['type'];?>&id_p=<?=$_GET['id_p']?>"><span>Thêm <?=$title_main?></span></a></li>
            <li class="current"><a href="#" onclick="return false;">Thêm</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</div>

<form name="supplier" id="validate" class="form" action="index.php?com=product&act=save_color<?php if($_REQUEST['type']!='') echo'&type='. $_REQUEST['type'];?>&id_p=<?=$_GET['id_p']?>" method="post" enctype="multipart/form-data">

<!--thong tin chung-->
<div class="widget">

		<div class="formRow">
			<label>Tải hình ảnh:</label>
			<div class="formRight">
            	<input type="file" id="file" name="file" />
				<img src="./images/question-button.png" alt="Upload hình" class="icon_question tipS" original-title="Tải hình ảnh (ảnh JPEG, GIF , JPG , PNG)">
				<div class="note"> width : <?php echo _width_thumb*$ratio_;?> px , Height : <?php echo _height_thumb*$ratio_;?> px </div>
			</div>
			<div class="clear"></div>
		</div>
        <?php if($_GET['act']=='edit_color'){?>
		<div class="formRow">
			<label>Hình Hiện Tại :</label>
			<div class="formRight">
			
			<div class="mt10"><img src="<?=_upload_product.$item['thumb']?>"  alt="NO PHOTO" width="100" /></div>

			</div>
			<div class="clear"></div>
		</div>
		<?php } ?>
        
         <div class="formRow">
      <label>Hình ảnh kèm theo: </label>
      <div class="formRight">
          <a class="file_input" data-jfiler-name="files" data-jfiler-extensions="jpg, jpeg, png, gif"><img src="images/image_add.png" alt="" width="100"></a>                
         
     
    <?php if($act=='edit_color'){?>
      <?php if(count($ds_photo)!=0){?>       
            <?php for($i=0;$i<count($ds_photo);$i++){?>
              <div class="item_trich">
                  <img class="img_trich" width="140px" height="110px" src="<?=_upload_product.$ds_photo[$i]['photo']?>" />
                  <input type="text" rel="<?=$ds_photo[$i]['id']?>" value="<?=$ds_photo[$i]['stt']?>" class="update_stt tipS" />
                  <a class="delete_images" title="<?=$ds_photo[$i]['id']?>"><img src="images/delete.png"></a>
              </div>
            <?php } ?>
        
      <?php }?>

    <?php }?>
      </div>
          <div class="clear"></div>
        </div> 

        <div class="formRow">
			<label class="price">Giá bán</label>
			<div class="formRight">
                <input type="text" name="giaban" title="Nhập giá bán" id="giaban" class="conso tipS validate[required]" value="<?=@$item['giaban']?>" />
			</div>
			<div class="clear"></div>
		</div>

		<!-- <div class="formRow">
			<label>Mã SP </label>
			<div class="formRight">
                <input type="text" name="masp" title="Nhập mã sản phẩm" id="masp" class="tipS" value="<?=@$item['masp']?>" />
			</div>
			<div class="clear"></div>
		</div>
 -->
		<?php /* ?> <div class="formRow">
			<label>Giá cũ (Nếu có)</label>
			<div class="formRight">
                <input type="text" name="giacu" title="Nhập giá cũ" id="giacu" class="conso tipS validate[required]" value="<?=@$item['giacu']?>" />
			</div>
			<div class="clear"></div>
		</div><?php */ ?>

		<?php /* ?> <div class="formRow">
			<label>Khuyến mãi</label>
			<div class="formRight">

                <div id="load_muakem">
			     <?php
					$khuyenmai_vi=explode("|",$item['khuyenmai_vi']);
					if(count($khuyenmai_vi)!=0){
					?>     
			        <div class="load_sp">
			        <?php for($i=0;$i<count($khuyenmai_vi);$i++){ ?>
			            <p>
			            <input type="text" value="<?=$khuyenmai_vi[$i]?>" name="khuyenmai_vi[]" placeholder="Thông tin khuyến mãi" size="30" >&nbsp;
			            <img src="images/disabled.png" class="delete" height="15" />
			            </p>
			        <?php } ?>
			        </div>
			     	<?php  } ?>
			        <div><img src="images/add.jpg" class="themmoi" /></divs>
			    </div>
			</div>
			<div class="clear"></div>
		</div> <?php */ ?>

		<!-- <div class="formRow lang_hidden lang_vi active">
			<label>Tags </label>
			<div class="formRight">
            	<select style="width:300px" id="states">
            		<option value="0">
            			Thêm Tags 
            		</option>
            		<?php for ($i=0,$countt = count($tags_arr); $i < $countt ; $i++) { ?>
            			<option value="<?=$tags_arr[$i]["id"]?>"><?=$tags_arr[$i]["ten_vi"]?></option>
            		<?php }?>
            	</select>
            	<div class="clear"></div>
            	<div id="tags_name">
            	<?php  for ($i=0,$count = count($tags); $i < $count ; $i++) { 
        			$d->query("select id,ten_vi from #_tags where id=".$tags[$i]);
        			$tags_name = $d->fetch_array();
        			if($tags_name['ten_vi']!=''){
        			?>
        				<p value="<?=$tags_name["id"]?>" class="delete_tags"><?=$tags_name["ten_vi"]?> <span ></span> 
        					<input name="tags[]" value="<?=$tags_name["id"]?>"  type="hidden" />
        				</p>
        			<?php } ?>
        				
        		<?php }?>
        		</div>
            </div>
			<div class="clear"></div>
		</div> -->

    <div class="formRow">
      <label>Hiển thị : <img src="./images/question-button.png" alt="Chọn loại" class="icon_que tipS" original-title="Bỏ chọn để không hiển thị danh mục này ! "> </label>
      <div class="formRight">
     
        <input type="checkbox" name="hienthi" id="check1" value="1" <?=(!isset($item['hienthi']) || $item['hienthi']==1)?'checked="checked"':''?> />
         <label>Số thứ tự: </label>
          <input type="text" class="tipS" value="<?=isset($item['stt'])?$item['stt']:1?>" name="stt" style="width:20px; text-align:center;" onkeypress="return OnlyNumber(event)" original-title="Số thứ tự của danh mục, chỉ nhập số">
      </div>
      <div class="clear"></div>
    </div>
	
</div>  
<!--end thong tin chung-->

<?php if($config_name=="true"){ ?>
<!--phan ngon ngu-->
<div class="widget">
<?php
 if(count($config['lang'])>1) {?>
	<div class="title chonngonngu">
		<ul>
		<?php foreach ($config['lang'] as $key => $value) { ?>
			<li><a href="<?=$key?>" class="<?=$key==$config['lang_active']?'active':''?> tipS validate[required]" title="Chọn <?=$value?>"><?=$value?></a></li>
		<?php } ?>
		</ul>
	</div>
<?php } ?>

<?php foreach ($config['lang'] as $key => $value) { ?>
<div class="contain_lang_<?=$key?> contain_lang <?=$key==$config['lang_active']?'active':''?>">
	<div class="title"><img src="./images/icons/dark/record.png" alt="" class="titleIcon" />
		<h6>Nội dung <?=$value?></h6>
	</div>
	
        <div class="formRow">
			<label>Tiêu đề <?=$key!=$config['lang_active']?'('.$key.')':''?></label>
			<div class="formRight">
                <input type="text" name="data[ten_<?=$key?>]" title="Nhập tên danh mục" id="ten_<?=$key?>" class="tipS validate[required]" value="<?=@$item['ten_'.$key]?>" />
			</div>
			<div class="clear"></div>
		</div>
		
<?php if($config_mota=='true'){ ?>
		<div class="formRow">
			<label>Mô tả <?=$key!=$config['lang_active']?'('.$key.')':''?></label>
			<div class="formRight">
                <textarea rows="4" cols="" title="Nhập mô tả . " class="tipS" name="data[mota_<?=$key?>]"><?=@$item['mota_'.$key]?></textarea>
			</div>
			<div class="clear"></div>
		</div>

		
<?php } ?>
<?php if($config_noidung=='true'){ ?>
		<div class="formRow">
			<label>Nội Dung <?=$key!=$config['lang_active']?'('.$key.')':''?></label>
			<div class="ck_editor">
                <textarea id="noidung_<?=$key?>" name="data[noidung_<?=$key?>]"><?=@$item['noidung_'.$key]?></textarea>
			</div>
			<div class="clear"></div>
		</div>
<?php } ?>
</div><!--lang-->
<?php } ?>
</div>
<!--end phan ngon ngu-->
<?php } ?>

	<div class="widget">
		 <?php if($config_seo=="true"){ ?>
		<div class="title"><img src="./images/icons/dark/record.png" alt="" class="titleIcon" />
			<h6>Nội dung seo</h6>
		</div>
		
		<div class="formRow">
			<label>Title</label>
			<div class="formRight">
				<input type="text" value="<?=@$item['title']?>" name="title" title="Nội dung thẻ meta Title dùng để SEO" class="tipS" />
			</div>
			<div class="clear"></div>
		</div>
		
		<div class="formRow">
			<label>Từ khóa</label>
			<div class="formRight">
				<input type="text" value="<?=@$item['keywords']?>" name="keywords" title="Từ khóa chính cho danh mục" class="tipS" />
			</div>
			<div class="clear"></div>
		</div>
		
		<div class="formRow">
			<label>Description:</label>
			<div class="formRight">
				<textarea rows="4" cols="" title="Nội dung thẻ meta Description dùng để SEO" class="tipS" name="description"><?=@$item['description']?></textarea>
                <input readonly="readonly" type="text" style="width:25px; margin-top:10px; text-align:center;" name="des_char" value="<?=@$item['des_char']?>" /> ký tự <b>(Tốt nhất là 68 - 170 ký tự)</b>
			</div>
			<div class="clear"></div>
		</div>
		<?php } ?>
		<div class="formRow">
			<div class="formRight">
                <input type="hidden" name="type" id="id_this_type" value="<?=$_REQUEST['type']?>" />
                <input type="hidden" name="id" id="id_this_post" value="<?=@$item['id']?>" />
                <input type="hidden" name="data[id_p]" id="id_this_post" value="<?=@$_GET['id_p']?>" />
            	<input type="submit" class="btn btn-primary" onclick="TreeFilterChanged2(); return false;" value="Hoàn tất" />
            	<a href="index.php?com=product&act=man_color<?php if($_REQUEST['type']!='') echo'&type='. $_REQUEST['type'];?>&id_p=<?=$_GET['id_p']?>"  title="" class="btn btn-default tipS" original-title="Thoát">Thoát</a>
			</div>
			<div class="clear"></div>
		</div>

	</div>
</form>        </div>



<script>
  $(document).ready(function() {
    $('.file_input').filer({
            showThumbs: true,
            templates: {
                box: '<ul class="jFiler-item-list"></ul>',
                item: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li><span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span></li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\<input type="text" name="stthinh[]" class="stthinh" placeholder="Nhập STT" />\
                                </div>\
                            </div>\
                        </li>',
                itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <span class="jFiler-item-others">{{fi-icon}} {{fi-size2}}</span>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\<input type="text" name="stthinh[]" class="stthinh" placeholder="Nhập STT" />\
                                </div>\
                            </div>\
                        </li>',
                progressBar: '<div class="bar"></div>',
                itemAppendToEnd: true,
                removeConfirmation: true,
                _selectors: {
                    list: '.jFiler-item-list',
                    item: '.jFiler-item',
                    progressBar: '.bar',
                    remove: '.jFiler-item-trash-action',
                }
            },
            addMore: true
        });
  });
</script>
