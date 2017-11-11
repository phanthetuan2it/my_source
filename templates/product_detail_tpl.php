<div class="sub_main">
  <div class="title_main"><span><?=_chitietsanpham?></span></div>
  <div class="content_main">
    <div class="top_detail">
      <div class="img_detail">
        <div class="main_img_detail">
          <a id="Zoomer" href="<?=_upload_product_l.$row_detail['photo']?>" class="MagicZoomPlus" rel="zoom-width:300px; zoom-height:300px;selectors-effect-speed: 600; selectors-class: Active;">
            <img src="<?=thumb($row_detail['photo'],_upload_product_l,$row_detail['tenkhongdau'],400,250,1)?>" alt="<?=$row_detail['ten_'.$lang]?>"/>
          </a>
        </div><!--main img detail-->
        <?php include_once "layout/module/sub_img_detail_h.php"; ?>
      </div><!--img detail-->

      <div class="info_detail">
        <h1 class="item_info_detail name_detail"><?=$row_detail['ten_'.$lang]?></h1>
        <div class="item_info_detail"><?=_masanpham?> : <span><?=$row_detail['masp']?></span></div>
        <div class="item_info_detail gia_detail"><?=_giaban?> : <span><?=format_giaban($row_detail['giaban'],',',' VNĐ')?></span></div>
        <div class="item_info_detail"><?=_luotxem?> : <?=$row_detail['luotxem']?></div>
        <div class="item_info_detail"><?=_mota?> : <?=$row_detail['mota_'.$lang]?></div>
        
        <div class="item_info_detail">
           <a href="javascript:" class="add_to_basket btn btn-danger" onclick="addtocart(<?=$row_detail['id']?>,1)">
              <i class="fa fa-opencart"></i> <?=_dathang?>
          </a>
        </div>
        <div class="item_info_detail"><?=get_social('','share');?></div><!--end item share-->
      </div><!--info_detail-->
      <div class="clear"></div>
    </div><!--end top detail-->


   

    <div class="bottom_detail">
                <div class="my_box_tab">
                <div class="contain_tab">
                    <a href="#noidung_chitiet" class="item_tab_cm item_tab active" ><?=_noidungchitiet?></a>
                    <a href="#binhluan" class="item_tab_cm item_tab"><?=_binhluan?></a>
                </div><!--end contain tab-->
                <div class="contain_content_tab">
                    <div id="noidung_chitiet" class="content_tab_cm content_tab  active ">
                        <div class="text">
                            <?=stripslashes($row_detail['noidung_'.$lang])?>
                        </div>
                    </div><!--end tinh nang-->
                    
                    <div id="binhluan" class="content_tab_cm content_tab">
                        <div class="text">
                             <div class="fb-comments" data-href="<?=getCurrentPageURL()?>" data-width="100%" data-numposts="5"></div>
                        </div>
                    </div><!--end chuc nang-->
                    
                    <div class="clear"></div>
                </div><!--enc ontain content tab-->
            </div><!--my box tab-->
            </div><!--end bottom detail-->


  </div><!--content main-->
</div><!--sub main-->

<div class="sub_main">
  <div class="title_main"><span><?=$title_other?></span></div>
  <div class="content_main">
      <div class="row_p">
        <?=get_product_items($product)?>
      </div><!--end row san pham-->
      <?=$paging?>
  </div><!--content main-->
</div><!--end sub main-->