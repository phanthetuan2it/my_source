<?php $show_slider=true; ?>
<div class="contain_slider" style="height:400px;background:url(<?=_upload_hinhanh_l.$slider[0]['thumb_'.$lang]?>) top center no-repeat;background-size:100%;">
    <div class="slider-wrapper theme-default">
        <div id="slider" class="nivoSlider">
    	 <?php  foreach ($slider as $key => $value) { ?>
	
           <a href="<?=$value['link']?>" target="_blank">
                  <img src="<?=_upload_hinhanh_l.$value['thumb_'.$lang]?>" alt="<?=$value['ten_'.$lang]?>" />
                </a>
                <!-- <div id="htmlcaption1" class="nivo-html-caption">
                    <strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>. 
                </div> -->
			
         <?php } ?>
           
        </div> 
    </div>
</div><!--contain slider-->
