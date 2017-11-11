<div class="sub_main">
    <div class="title_main"><span><?=$title_detail?></span></div>
    <div class="content_main">
        <?php if($album){
         foreach ($album as $key => $value) { 
            $d->reset();
            $sql="select * from #_album_photo where id_album=".$value['id']." order by stt asc,id desc";
            $d->query($sql);
            $photos_album=$d->result_array();
        ?>
                <div class="col_album col-md-4 col-sm-4 col-xs-6">
                    <div class="box_album">
                        <div class="img_album">
                         <a data-fancybox="<?=$value['id']?>" href="<?=_upload_album_l.$value['photo']?>" title="<?=$value['ten_'.$lang]?>">
                            <img src="<?=_upload_album_l.$value['thumb']?>" alt="<?=$value['tenkhongdau']?>" class="w100">
                        </a>
                       

                        </div><!--img-->
                        <div class="name_album">
                             <h3><a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>">
                                <?=$value['ten_'.$lang]?>
                            </a></h3>
                        </div><!--name-->

                         <?php
                        if($photos_album){
                            for ($i=0; $i <count($photos_album) ; $i++) { ?>
                               <a data-fancybox="<?=$value['id']?>" href="<?=_upload_album_l.$photos_album[$i]['photo']?>" title="<?=$value['ten_'.$lang]?>">
                                   
                                </a>
                          <?php   }
                         }  ?>

                    </div><!--box album-->
                </div><!--col album-->
        <?php } ?>
        
    <?php } else { ?><div style="text-align:center; color:#FF0000; font-weight:900; font-size:22px; text-transform:uppercase;" ><?=_noidungchuacapnhat?></div> <?php }?>

        <div class="clear"></div>
        <?=$paging?>
    </div>
</div><!--sub main-->
