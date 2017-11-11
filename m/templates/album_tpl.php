<div class="sub_main">
    <div class="title_main"><span><?=$title_detail?></span></div>
    <div class="content_main">
        <?php if(count($album)!=0){?>
         <?php for($j=0;$j<count($album);$j++){
            ?>
                <div class="album">
                        <a href="thu-vien-anh/<?=$album[$j]['tenkhongdau']?>.html" title="<?=$album[$j]['ten_'.$lang]?>">
                            <img src="<?=_upload_album_l.$album[$j]['thumb']?>" alt="<?=$album[$j]['tenkhongdau']?>">
                            <h3><?=$album[$j]['ten_'.$lang]?></h3>
                        </a>
                </div>
        <?php }?>
        
    <?php } else { ?><div style="text-align:center; color:#FF0000; font-weight:900; font-size:22px; text-transform:uppercase;" >Chưa Có Tin Cho Mục này .</div> <?php }?>

        <div class="clear"></div>
        <div class="paging"><?=$paging?></div> 
    </div>
</div><!--sub main-->
