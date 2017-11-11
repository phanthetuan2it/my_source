<script language="javascript">
  function addtocart(pid){
    document.form_giohang.productid.value=pid;
    document.form_giohang.command.value='add';
    document.form_giohang.submit();
  }
</script>
<form name="form_giohang" action="index.php" method="post">
  <input type="hidden" name="productid" />
  <input type="hidden" name="command" />
</form>
<div class="sub_main">
  <div class="title_main"><span><?=$title_detail?></span></div>
        <div class="content_main">
             <div class="row_sanpham">
              <div id="box_product_ajax">
            <?php
              if(count($product)>0){
              foreach ($product as $key => $value) { ?>
              <div class="col_sanpham col-md-4 col-sm-4 col-xs-6">
                 <div class="box_sanpham ">
                      <div class="img_sanpham">
                          <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <img src="<?=thumb($value['photo'],_upload_product_l,$value['tenkhongdau'],300,230)?>" alt="<?=$value['ten_'.$lang]?>" class="w100 trans03"/>
                          </a>
                      </div><!--end img sanpham-->
                      <div class="name_sanpham">
                          <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <h2><?=$value['ten_'.$lang]?></h2>
                          </a>
                      </div><!--end ten sanpham-->
                      <div class="gia_sanpham">
                          <?=_gia?> : <span><?=$value['giaban']==0?_lienhe:number_format($value['giaban'],0,',',',').' VNĐ'?></span>
                      </div><!--end gia sanpham-->
                      <div class="more_sanpham">
                          <a href="san-pham/<?=$value['tenkhongdau']?>-<?=$value['id']?>.html" title="<?=$value['ten_vi']?>">
                              <?=_xemthem?>
                          </a>
                      </div><!--end more san pham-->
                      <div class="dathang_sanpham">
                          <a href="javascript:" class="add_to_basket btn_dathang" onclick="addtocart(<?=$value['id']?>,1)">
                              <?=_dathang?>
                          </a>
                      </div><!--end dat hang san pham-->
                  </div><!--end box san pham-->
              </div><!--end col san pham-->
            <? } 
        } ?>
      </div><!--box product ajax-->
        </div><!--end row san pham-->
        <div class="ajax_pagination" data-type='product' data-div="box_product_ajax" data-per-page="1" data-cur-page="<?=getCurrentPageURL()?>"><?=$paging?></div>
        </div><!--content main-->
</div><!--end sub main-->


<script type="text/javascript">
    
$(document).delegate(".ajax_pagination a","click",function(e){
  var page=$(this).attr('data-page');
  var url_change=$(this).attr('href')
  //thong so thiet lap pagination
  var this_ajax_pagination=$(this).parent().parent().parent();
  var div_insert=$(this_ajax_pagination).attr('data-div');
  var type_bar=$(this_ajax_pagination).attr('data-type');
  var per_page=$(this_ajax_pagination).attr('data-per-page');
  var url=$(this_ajax_pagination).attr('data-cur-page');


  $.ajax({
    url:'ajax/ajax_pagination_home.php',
    data:{per_page:per_page,page:page,type_bar:type_bar,url:url},
    dataType:'json',
    success:function(data){
      $(this_ajax_pagination).html(data.paging);
      $('#'+div_insert).html(data.result);
      window.history.pushState("", "", url_change);
      document.title = "Sản phẩm";
    }
  });
  return false;
});
</script>