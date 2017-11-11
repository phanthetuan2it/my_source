<?php
    $show_slider=true;
?>
<div class="contain_slider inner">
        <div class="prev_slider"></div>
        <div class="next_slider"></div>
        <div id="slider" class="owl-carousel owl-theme">
    	 <?php  foreach ($slider as $key => $value) { ?>
           <a href="<?=$slider[$i]['link']?>" target="_blank">
                <img src="<?=_upload_hinhanh_l.$value['thumb_'.$lang]?>" class="w100" alt="<?=$value['ten_vi']?>"/>
            </a>
         <? } ?>
        </div> 
</div><!--contain slider-->
