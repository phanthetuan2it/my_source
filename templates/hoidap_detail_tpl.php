<!-- start -->
<h1 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h1>
<h2 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h2>
<h3 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h3>
<h4 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h4>
<h5 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h5>
<h6 class="visit_hidden"><?=$row_detail['ten_'.$lang]?></h6>
<!-- end -->
<div id="info">
<div id="sanpham">
    
        <div>        
            <div class="tt_tintuc"><h3 class="title"><?=$title_detail?></h3></div>    
            <div class="content_wrap">
                <h3 class="tieude"> <?=$row_detail['ten_'.$lang]?></h3>
                <div class="date"><?=date('d-m-Y h:i:s A',$row_detail['ngaytao'])?></div>
                <div class="cungchude">
                   <ul>
                 <?php foreach((array)$tintuc as $tinkhac){?>
                       <li><a href="<?=$_GET['com']?>/<?=$tinkhac['tenkhongdau']?>-<?=$tinkhac['id']?>.html" style="text-decoration:none;"><?=$tinkhac['ten_'.$lang]?></a></li>
                     <?php }
                     ?>
                   </ul>
                 </div><!--cungchude-->
                 <div class="mota-news"><?=$row_detail['mota_'.$lang]?></div>
                  <?=$row_detail['noidung_'.$lang]?>

                  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-55a5ff5b3a9222b9" async="async"></script>
                  <script src="https://apis.google.com/js/platform.js" async defer></script>
                  <?=get_social('','share');?>
                  <?=get_social('','comment');?>

                <div class="tt_top"><h3>Tin mới nhất</h3></div>

                <?php foreach($tinmoi as $tinkhac){?>
                <div style="padding-left:10px; height:auto;"><a href="<?=$com?>/<?=$tinkhac['tenkhongdau']?>-<?=$tinkhac['id']?>.html" style="text-decoration:none;"><img src="images/sao.png" border="0" />&nbsp;&nbsp;<span style="font-size:14px; color:#666;"><?=$tinkhac['ten_'.$lang]?></span></a></div>
                
                <?php }?>
                </div> 
            </div>
        </div>
   <div class="clear"></div>
</div>   
</div>
     