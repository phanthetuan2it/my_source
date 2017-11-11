<li <?=$_GET['com']==''||$_GET['com']=='index'?'class="menu_active"':''?>><a href="index.html"><?=_trangchu?></a></li>
<li <?=$_GET['com']=='gioi-thieu'?'class="menu_active"':''?>><a href="http://<?=$config_url?>/gioi-thieu.html"><?=_gioithieu?></a></li>
<li <?=$_GET['com']=='san-pham'?'class="menu_active"':''?>><a href="san-pham.html"><?=_sanpham?></a>
  <ul> 
    <?php for($i=0;$i<count($list);$i++) { ?>
    <li><a href="san-pham/<?=$list[$i]['tenkhongdau']?>-<?=$list[$i]['id']?>/"><?=$list[$i]['ten_'.$lang]?></a>
      <?php
      $d->reset();
      $d->query("select * from #_product_cat where hienthi=1 and id_list=".$list[$i]['id']." order by stt asc,id desc");
      $cat_menu=$d->result_array();
      $count_cat_menu=count($cat_menu);
      if($count_cat_menu>0){ 
      ?>
      <ul>
          <?php for ($j=0; $j <$count_cat_menu ; $j++) { ?> 
           <li><a href="san-pham/<?=$cat_menu[$j]['tenkhongdau']?>-<?=$cat_menu[$j]['id']?>/"><?=$cat_menu[$j]['ten_'.$lang]?></a>
            <?php
            $d->reset();
            $d->query("select * from #_product_item where hienthi=1 and id_cat=".$cat_menu[$j]['id']." order by stt asc,id desc");
            $item_menu=$d->result_array();
            $count_item_menu=count($item_menu);
            if($count_item_menu>0){ ?>
              <ul>
                <?php
                for ($k=0; $k <$count_item_menu ; $k++) { ?>
                  <li><a href="san-pham/<?=$item_menu[$k]['tenkhongdau']?>-<?=$item_menu[$k]['id']?>/"><?=$item_menu[$k]['ten_'.$lang]?></a>
                    <?php
                    $d->reset();
                    $d->query("select * from #_product_sub where hienthi=1 and id_item=".$item_menu[$k]['id']." order by stt asc,id desc");
                    $sub_menu=$d->result_array();
                    $count_sub_menu=count($sub_menu);
                    if($count_sub_menu>0){ ?>
                      <ul>
                      <?php for ($h=0; $h < $count_sub_menu; $h++) { ?>
                        <li><a href="san-pham/<?=$sub_menu[$h]['tenkhongdau']?>-<?=$sub_menu[$h]['id']?>/"><?=$sub_menu[$h]['ten_'.$lang]?></a></li>
                      <?php } ?>
                      </ul>
                    <?php } ?>
                  </li>
                <?php } ?>
              </ul>
            <?php } ?>
           </li>
          <?php } ?>
      </ul>
      <?php } ?>
    </li>
    <?php } ?>                
  </ul><!--navigation_list-->
</li><!--end li san pham-->
<li <?=$_GET['com']=='tin-tuc'?'class="menu_active"':''?>><a href="tin-tuc.html"><?=_tintuc?></a>
  <?php
  if(count($news_list_menu)){ ?>
  <ul>
    <?php
    foreach ($news_list_menu as $key => $value) { ?>
      <li><a href="tin-tuc/<?=$value['tenkhongdau']?>-<?=$value['id']?>/"><?=$value['ten']?></a>
        <?php
        $d->reset();
        $d->query("select * from #_baiviet_cat where hienthi=1 and type='tintuc' and id_list=".$value['id']." order by stt asc,id desc");
        $news_cat_menu=$d->result_array();
        if(count($news_cat_menu)>0){ ?>
        <ul>
          <?php
          foreach ($news_cat_menu as $key2 => $value2) { ?>
            <li><a href="tin-tuc/<?=$value2['tenkhongdau']?>-<?=$value2['id']?>/"><?=$value2['ten']?></a>
              <?php
              $d->reset();
              $d->query("select id,tenkhongdau,ten_$lang as ten from #_baiviet_item where hienthi=1 and type='tintuc' and id_cat=".$value2['id']." order by stt asc,id desc");
              $news_item_menu=$d->result_array();
              if(count($news_item_menu)>0){ ?>
              <ul>
                <?php
                foreach ($news_item_menu as $key3 => $value3) { ?>
                  <li><a href="tin-tuc/<?=$value3['tenkhongdau']?>-<?=$value3['id']?>/"><?=$value3['ten']?></a>
                    <?php
                    $d->reset();
                    $d->query("select id,tenkhongdau,ten_$lang as ten from #_baiviet_sub where hienthi=1 and type='tintuc' and id_item=".$value3['id']." order by stt asc,id desc");
                    $news_sub_menu=$d->result_array();
                    if(count($news_sub_menu)>0){ ?>
                    <ul>
                      <?php
                      foreach ($news_sub_menu as $key4 => $value4) { ?>
                      <li><a href="tin-tuc/<?=$value4['tenkhongdau']?>-<?=$value4['id']?>/"><?=$value4['ten']?></a></li>
                      <?php } ?>
                    </ul>
                    <?php } ?>
                  </li><!--end li 4-->
                <?php }  ?>
              </ul>
              <?php } ?>
            </li><!--li cap 2-->
          <?php }  ?>
        </ul>
        <?php }  ?>
      </li><!--li cap 1-->
    <?php } ?>
  </ul>
  <?php } ?>
</li><!--end li tin tuc-->
<li <?=$_GET['com']=='dich-vu'?'class="menu_active"':''?>><a href="dich-vu.html"><?=_dichvu?></a></li>
<li <?=$_GET['com']=='thu-vien'?'class="menu_active"':''?>><a href="thu-vien-anh.html"><?=_hinhanh?></a></li>
<li <?=$_GET['com']=='lien-he'?'class="menu_active"':''?>><a href="lien-he.html"><?=_lienhe?></a></li>