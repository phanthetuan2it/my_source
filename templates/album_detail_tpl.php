<!--fotorama-->
<link type="text/css" href="css/fotorama/fotorama.css" rel="stylesheet" />
<script type="text/javascript" src="js/fotorama/fotorama.js"></script> 
<div class="sub_main">
    <div class="title_main"><span><?=$title_detail?></span></div>
    <div class="content_main">
        <!-- Fotorama -->
        <div class="box_fotorama">
            <div class="fotorama" data-width="700" data-ratio="700/467" data-max-width="100%" data-nav="thumbs">
                <?php for($i=0,$count_ab=count($album_images);$i<$count_ab;$i++){?>
                <img src="<?=_upload_album_l.$album_images[$i]['photo']?>" alt="<?=$album_detail[0]['ten_'.$lang]?>">
                <?php } ?>
            </div>
        </div><!--box fotorama-->
    </div>
</div>

