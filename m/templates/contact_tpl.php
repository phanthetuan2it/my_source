<?php
    $show_check_form=true;
?>
<div class="sub_main">
    <div class="title_main"><span><?=_lienhe?></span></div>
    <div class="content_main">
        <div class="left_lienhe pd0-smx">
            <div class="text"><?=stripcslashes($row_detail['noidung_'.$lang])?></div>
        </div><!--left lien he-->
        <div class="right_lienhe mgt10-smx pd0-smx">
            <?php include _template.'form/form_contact.php'; ?>
        </div><!--right lien he-->
        <div class="clear"></div>
        
        <div class="contain_map_lienhe ">
            <div id="map_contact" style="width:100%;height: 300px;"></div>
        </div>
     </div><!--content main-->
</div><!--end sub main-->
