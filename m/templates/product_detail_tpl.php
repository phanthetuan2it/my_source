
<div class="sub_main">
  <div class="title_main"><span>Chi tiết sản phẩm</span></div>
  <div class="content_main">
      <div class="img_detail">
        <div class="main_img_detail">
         <a href="<?=_upload_product_l.$row_detail['photo']?>" class="swipebox" title="<?=$row_detail['ten_'.$lang]?>">
            <img src="<?=thumb($row_detail['photo'],_upload_product_l,$row_detail['tenkhongdau'],400,250,1)?>" alt="<?=$row_detail['ten_'.$lang]?>" class="w100"/>
          </a>
        </div><!--main img detail-->
        <?php include_once "layout/module/sub_img_detail_h.php"; ?>
      </div><!--img detail-->

      <div class="info_detail">
        <div class="item_info_detail name_detail"><?=$row_detail['ten_'.$lang]?></div>
        <div class="item_info_detail">Mã sản phẩm : <span><?=$row_detail['masp']?></span></div>
        <div class="item_info_detail gia_detail">Giá bán : <span><?=format_giaban($row_detail['giaban'],',',' VNĐ')?></span></div>
        <div class="item_info_detail">Mô tả : <?=$row_detail['mota_'.$lang]?></div>
        <div class="item_info_detail"><?=get_social('','share');?></div><!--end item share-->
      </div><!--info_detail-->
      <div class="clear"></div>
  


   

    <div class="bottom_detail">
                <div class="contain_tab">
                    <a href="#noidung_chitiet" class="item_tab active" ><?=_noidungchitiet?></a>
                    <a href="#binhluan" class="item_tab"><?=_binhluan?></a>
                </div><!--end contain tab-->
                <div class="contain_content_tab">
                    <div id="noidung_chitiet" class="content_tab active ">
                        <div class="text">
                            <?=stripslashes($row_detail['noidung_'.$lang])?>
                        </div>
                    </div><!--end tinh nang-->
                    
                    <div id="binhluan" class="content_tab">
                        <div class="text">
                             <div class="fb-comments" data-href="<?=getCurrentPageURL()?>" data-width="100%" data-numposts="5"></div>
                        </div>
                    </div><!--end chuc nang-->
                    
                    <div class="clear"></div>
                </div><!--enc ontain content tab-->
            </div><!--end bottom detail-->


  </div><!--content main-->
</div><!--sub main-->
 <script type="text/javascript" src="m/js/temp/js_tab.js"></script>
<div class="sub_main">
  <div class="title_main"><span><?=$title_other?></span></div>
  <div class="content_main">
    <div class="row_p">
        <?=get_product_items_m($product_index,'w100')?>
    </div><!--end row san pham-->
    <?=$paging?>
  </div><!--content main-->
</div><!--end sub main-->

