<?php
    $d->reset();
    $sql="select id,ten_vi from table_product_list where hienthi =1 order by stt,id desc";
    $d->query($sql);
    $result_list=$d->result_array();
?>
<script type="text/javascript">     
    function TreeFilterChanged2(){    
        $('#validate_photo').submit();        
    }   
</script>
<div class="control_frm" style="margin-top:25px;">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
        	<li><a href="index.php?com=photo&act=man_photo<?php if($_REQUEST['type']!='') echo'&type='. $_REQUEST['type'];?>"><span><?=$title_main?></span></a></li>
            <li class="current"><a href="#" onclick="return false;">Thêm hình ảnh</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</div>

<form name="supplier" id="validate_photo" class="form" action="index.php?com=photo&act=save_photo<?php if($_REQUEST['type']!='') echo'&type='. $_REQUEST['type'];?>" method="post" enctype="multipart/form-data">
	<div class="widget">
				
		
        <?php for($i=0; $i<1; $i++){?>
        <div class="title"><img src="./images/icons/dark/list.png" alt="" class="titleIcon" />
			<h6>Thêm hình ảnh</h6>
		</div>
        <?php if($config_list=='true'){ ?>
        <div class="formRow">
            <label>Chọn danh mục 1</label>
            <div class="formRight">
                <select id="id_list" name="id_list<?=$i?>" class="main_select">
                    <option>Chọn danh mục</option>
                    <?php for ($j=0; $j < count($result_list) ; $j++) { ?>
                    <option value="<?=$result_list[$j]['id']?>"><?=$result_list[$j]['ten_vi']?></option>
                    <?php } ?>
                </select>
            </div>
            <div class="clear"></div>
        </div>
        <?php } ?>

<!--ngon ngu-->
<?php
if($config_multi_lang=="true"){
 if(count($config['lang'])>1) {?>
    <div class="title chonngonngu">
        <ul>
        <?php foreach ($config['lang'] as $key => $value) { ?>
            <li><a href="<?=$key?><?=$i?>" class="<?=$key==$config['lang_active']?'active':''?> tipS validate[required]" title="Chọn <?=$value?>"><?=$value?></a></li>
        <?php } ?>
        </ul>
    </div>
<?php } 
}?>
    <?php foreach ($config['lang'] as $key => $value) { ?>
    <div class="contain_lang_<?=$key?><?=$i?> contain_lang <?=$key==$config['lang_active']?'active':''?>">
    <div class="title"><img src="./images/icons/dark/record.png" alt="" class="titleIcon" />
        <h6>Nội dung <?=$value?></h6>
    </div>
        <div class="formRow">
			<label>Tên hình ảnh <?=$key!=$config['lang_active']?'('.$key.')':''?></label>
			<div class="formRight">
                <input type="text" name="ten_<?=$key.$i?>" title="Nhập tên hình ảnh" id="name" class="tipS validate[required]" value="" />
			</div>
			<div class="clear"></div>
		</div>		                     
        
		<div class="formRow">
			<label>Tải hình ảnh <?=$key!=$config['lang_active']?'('.$key.')':''?>:</label>
			<div class="formRight">
                <div class="fileinput fileinput-new" data-provides="fileinput">
                    <span class="btn btn-default btn-file"><span>Choose file</span><input type="file" name="file_<?=$key.$i?>" /></span>
                    <span class="fileinput-filename"></span><span class="fileinput-new">No file chosen</span>
                </div>
				<img src="./images/question-button.png" alt="Upload hình" class="icon_question tipS" original-title="Tải hình ảnh (ảnh JPEG, GIF , JPG , PNG)">
                <span class="note">width : <?php echo _width_thumb*$ratio_;?>px  - Height : <?php echo _height_thumb*$ratio_;?>px</span>
			</div>
			<div class="clear"></div>
		</div>
    </div><!--lang-->
<?php } ?><!--end for lang-->
        <?php if($links_=='true'){?>
        <div class="formRow">
            <label>Link liên kết:</label>
            <div class="formRight">
                <input type="text" id="code_pro" name="link<?=$i?>" value=""  title="Nhập link liên kết cho hình ảnh" class="tipS" />
            </div>
            <div class="clear"></div>
        </div>
        <?php }  ?>

        <?php if($config_string_json=='true'){?>
            <ul class="list_string_json">
                <li>
                    <div class="box_type_string_json">

                        <div class="formRow">
                            <label>&nbsp;</label>
                            <div class="formRight">
                                 <label><input type="radio" name="type_item" value="text" id="type_item_text" checked="" /> Chữ</label>
                                 <label><input type="radio" name="type_item" value="img" id="type_item_img"/> Hình ảnh</label>

                            </div><!--form right-->
                            <div class="clear"></div>

                        <div id="type_item_text" class="item_content_type_json active">
                            <div class="formRow">
                                <label>Text item</label>
                                <div class="formRight">
                                    <input type="text" name="ten_<?=$key.$i?>" title="Nhập tên hình ảnh" id="name" class="tipS validate[required]" value="" />
                                </div>
                                <div class="clear"></div>
                            </div>         
                        </div><!--end text-->

                        <div id="type_item_img" class="item_content_type_json">
                            <div class="formRow">
                                <label>Tải hình ảnh:</label>
                                <div class="formRight">
                                    <input type="file" id="file" name="file" />
                                    <img src="./images/question-button.png" alt="Upload hình" class="icon_question tipS" original-title="Tải hình ảnh (ảnh JPEG, GIF , JPG , PNG)">
                                    <div class="note"> width : <?php echo _width_thumb*$ratio_;?> px , Height : <?php echo _height_thumb*$ratio_;?> px </div>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="formRow">
                                <label>Hình Hiện Tại :</label>
                                <div class="formRight">
                                
                                <div class="mt10"><img src="<?=_upload_product.$item['thumb']?>"  alt="NO PHOTO" width="100" /></div>

                                </div>
                                <div class="clear"></div>
                            </div>

                        </div><!--end img-->

                        </div><!--formRow-->
                        
                    </div><!--end box type-->
                   
                   <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-x</label>
                            <div class="formRight">
                                <input type="text" name="data_x" title="Nhập data-x" id="name" class="tipS " value="<?=$string_json->data_x?>" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>

                   <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-y</label>
                            <div class="formRight">
                                <input type="text" name="data_y" title="Nhập data-y" id="name" class="tipS " value="<?=$string_json->data_y?>" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>

                   <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-customout</label>
                            <div class="formRight">
                               <div class="item_custom_photo">
                                    <label>X</label>
                                    <input type="text" name="data_customout[x]" value="<?=$string_json->data_customout_x?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>Y</label>
                                    <input type="text" name="data_customout[y]" value="<?=$string_json->data_customout_y?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>rotationX</label>
                                    <input type="text" name="data_customout[rotationX]" value="<?=$string_json->data_customout_rotationX?>" />
                               </div>

                               <div class="item_custom_photo">
                                    <label>rotationY</label>
                                    <input type="text"  name="data_customout[rotationY]" value="<?=$string_json->data_customout_rotationY?>" />
                               </div>

                                <div class="item_custom_photo">
                                    <label>rotationZ</label>
                                    <input type="text" name="data_customout[rotationZ]" value="<?=$string_json->data_customout_rotationZ?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>scaleX</label>
                                    <input type="text" name="data_customout[scaleX]" value="<?=$string_json->data_customout_scaleX?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>scaleY</label>
                                    <input type="text" name="data_customout[scaleY]" value="<?=$string_json->data_customout_scaleY?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>skewX</label>
                                    <input type="text" name="data_customout[skewX]" value="<?=$string_json->data_customout_skewX?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>skewY</label>
                                    <input type="text" name="data_customout[skewY]" value="<?=$string_json->data_customout_scaleY?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>opacity</label>
                                    <input type="text" name="data_customout[opacity]" value="<?=$string_json->data_customout_opacity?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>transformPerspective</label>
                                    <input type="text" name="data_customout[transformPerspective]" value="<?=$string_json->data_customout_transformPerspective?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>transformOrigin</label>
                                    <input type="text" name="data_customout[transformOrigin]" value="<?=$string_json->data_customout_transformOrigin?>" />
                               </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div><!--box data string-->

                    <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-customin</label>
                            <div class="formRight">
                                <div class="item_custom_photo">
                                    <label>X</label>
                                    <input type="text" name="data_customin[x]" value="<?=$string_json->data_customin_x?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>Y</label>
                                    <input type="text" name="data_customin[y]" value="<?=$string_json->data_customin_y?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>rotationX</label>
                                    <input type="text" name="data_customin[rotationX]" value="<?=$string_json->data_customin_rotationX?>" />
                               </div>

                               <div class="item_custom_photo">
                                    <label>rotationY</label>
                                    <input type="text" name="data_customin[rotationY]" value="<?=$string_json->data_customin_rotationY?>" />
                               </div>

                                <div class="item_custom_photo">
                                    <label>rotationZ</label>
                                    <input type="text" name="data_customin[rotationZ]" value="<?=$string_json->data_customin_rotationZ?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>scaleX</label>
                                    <input type="text" name="data_customin[scaleX]" value="<?=$string_json->data_customin_scaleX?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>scaleY</label>
                                    <input type="text" name="data_customin[scaleY]" value="<?=$string_json->data_customin_scaleY?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>skewX</label>
                                    <input type="text" name="data_customin[skewX]" value="<?=$string_json->data_customin_skewX?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>skewY</label>
                                    <input type="text" name="data_customin[skewY]" value="<?=$string_json->data_customin_scaleY?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>Opacity</label>
                                    <input type="text" name="data_customin[opacity]" value="<?=$string_json->data_customin_opacity?>" />
                               </div>
                               <div class="item_custom_photo">
                                    <label>transformPerspective</label>
                                    <input type="text" name="data_customin[transformPerspective]" value="<?=$string_json->data_customin_transformPerspective?>" />
                               </div>
                                <div class="item_custom_photo">
                                    <label>transformOrigin</label>
                                    <input type="text" name="data_customin[transformOrigin]" value="<?=$string_json->data_customin_transformPerspective?>" />
                               </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>
                   <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-speed</label>
                            <div class="formRight">
                                <input type="text" name="data_speed[]" title="Nhập data speed" id="name" class="tipS " value="" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>
                    <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-start</label>
                            <div class="formRight">
                                <input type="text" name="data_y[]" title="Nhập data star38" id="name" class="tipS " value="" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>

                    <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-easing</label>
                            <div class="formRight">
                                <input type="text" name="data_y[]" title="Nhập data-y" id="name" class="tipS " value="" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>
                    <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-endspeed</label>
                            <div class="formRight">
                                <input type="text" name="data_y[]" title="Nhập data-y" id="name" class="tipS " value="" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>
                <div class="box_data_string_json">
                        <div class="formRow">
                            <label>data-endeasing</label>
                            <div class="formRight">
                                <input type="text" name="data_y[]" title="Nhập data-y" id="name" class="tipS " value="" />
                            </div>
                            <div class="clear"></div>
                        </div>
                   </div>


                </li>
            </ul>
        <?php }  ?>

        <div class="formRow">
          <label>Tùy chọn: <img src="./images/question-button.png" alt="Chọn loại" class="icon_que tipS" original-title="Check vào những tùy chọn "> </label>
          <div class="formRight">           
            <input type="checkbox" name="active<?=$i?>" id="check1" value="1" checked="checked" />
            <label for="check1">Hiển thị</label>           
          </div>
          <div class="clear"></div>
        </div>
        <div class="formRow">
            <label>Số thứ tự: </label>
            <div class="formRight">
                <input type="text" class="tipS" value="1" name="stt<?=$i?>" style="width:20px; text-align:center;" onkeypress="return OnlyNumber(event)" original-title="Số thứ tự của hình ảnh, chỉ nhập số">
            </div>
            <div class="clear"></div>
        </div>
		<?php } ?>
	<div class="formRow">
			<div class="formRight">
            	<input type="hidden" name="type" id="id_this_type" value="<?=$_REQUEST['type']?>" />
            	<input type="button" class="btn btn-primary" onclick="TreeFilterChanged2(); return false;" value="Hoàn tất" />
			</div>
			<div class="clear"></div>
		</div>	
	</div>
   
	
</form>   

<script type="text/javascript">
    $('.box_type_string_json input[type=radio]').click(function(){
        alert('22');
    })
</script>