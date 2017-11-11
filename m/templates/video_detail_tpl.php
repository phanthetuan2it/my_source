<div class="sub_main">
  <div class="title_main"><span><?=$title_detail?></span></div>
  <div class="content_main">
    <div class="text">
       <div class="embed-responsive embed-responsive-4by3">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<?=youtobi($row_detail['links'])?>"></iframe>
      </div>
    </div>
  </div><!--end content main-->
</div><!--end sub main-->

<div class="sub_main">
  <div class="title_main"><span><?=$title_other?></span></div>
  <div class="content_main">
       <div class="row_sanpham">
            <?php
              if(count($tintuc)>0){
              foreach ($tintuc as $key => $value) { 
                $arr_links=explode('watch?v=',$value['links']);
              ?>
              <div class="col_sanpham col-md-3 col-sm-4 col-xs-6">
                 <div class="box_sanpham ">
                      <div class="img_sanpham">
                          <a href="video/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                            <img src="timthumb.php?src=http://img.youtube.com/vi/<?=$arr_links[1]?>/0.jpg&w=300&h=230&zc=2&q=100" class="w100"  />
                          </a>
                      </div><!--end img sanpham-->
                      <div class="name_sanpham">
                          <a href="video/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <h2><?=$value['ten_'.$lang]?></h2>
                          </a>
                      </div><!--end ten sanpham-->
                  </div><!--box san pham-->
                </div><!--col sản phẩm-->
             
            <? } 
        } ?>
        </div><!--end row san pham-->
  </div><!--end content main-->
</div><!--end sub main-->