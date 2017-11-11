
    <div class="sub_main">
        <div class="title_main"><span><?=$title_detail?></span></div>
        <div class="content_main">
           
            <h1 class="tieude"> <?=$row_detail['ten_'.$lang]?></h1>
            <div class="text">
                <?=$row_detail['noidung_'.$lang]?>
                <?=get_social('','share');?>
                <?=get_social('','comment');?>
            </div>
      
        <div class="box_news_other">
            <div class="title_news_other"><?=$title_other?></div>
            <div class="list_news_other">
                <?php
                if($tintuc){
                    foreach ($tintuc as $key => $value) { ?>
                        <div class="item_news_other">
                            <h3 class="name_news_other"><a href="<?=$com?>/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_'.$lang]?>"><i class="fa fa-chevron-circle-right"></i><?=$value['ten_'.$lang]?></a></h3>
                        </div>
                    <? }
                }
                ?>
                
            </div><!--list news other-->
        </div> 
        
       
         </div><!--content main-->
    </div><!--end sub main-->