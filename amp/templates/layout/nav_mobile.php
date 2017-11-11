<amp-sidebar id='sidebar' layout='nodisplay'>
    <label class="title_menu_mobile">Menu</label>
    <ul class="menu_mobile">
      <li class="item_menu_mb"><a href="/index.html" title="<?=$lang_arr["trangchu"]?>">Trang chủ</a></li>
    </ul>
    <amp-accordion class="drop_nav">
      <section>
          <h4 class="title_dropdown_nav item_menu_mb">Sản phẩm <i class="fa fa-caret-down"></i></h4>
          <ul>
          <?php for ($i=0,$count=count($list); $i < $count; $i++) { ?>
            <li class="item_menu_mb"><a href="/san-pham/<?=$list[$i]["tenkhongdau"]?>-<?=$list[$i]["id"]?>/"><?=$list[$i]["ten_".$lang]?></a>
              
                <?php 
                  $d->reset();
                  $d->query("select * from #_product_cat where id_list=".$list[$i]['id']." order by stt asc,id desc");
                  $cats=$d->result_array();
                  if($cats){
                  echo '<ul>';
                  for ($j=0,$countc=count($cats); $j < $countc; $j++) { ?>
                  <li class="item_menu_mb"><a href="/san-pham/<?=$cats[$j]["tenkhongdau"]?>-<?=$cats[$j]["id"]?>/"><?=$cats[$j]["ten_".$lang]?></a></li>
                  <?php } 
                  echo '</ul>';
                } ?>
            </li>
          <?php }?>
          </ul>
      </section>
    </amp-accordion>
    <ul class="menu_mobile">
      <li><a href="/lien-he.html" title="Liên hệ">Liên hệ</a></li>
    </ul>
</amp-sidebar>