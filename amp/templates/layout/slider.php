<amp-carousel width="1349" height="400" layout="responsive" delay="3000" autoplay type="slides">
 <?php  foreach ($slider as $key => $value) { ?>
<amp-img srcset="http://<?=$config_url?>/<?=_upload_hinhanh_l.$value['thumb_'.$lang]?>" width="1349" height="400" layout="responsive"></amp-img>
<?php }?>
</amp-carousel>