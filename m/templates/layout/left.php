<?php
  $d->reset();
  $sql="select * from #_yahoo where hienthi=1 order by stt asc, id desc";
  $d->query($sql);
  $yahoo=$d->result_array();
  
?>



<script src="js/my_js/script_menu_left.js"></script>

<div class="sub_left">
  <div class="title_left"><span>Danh mục sản phẩm</span></div>
    <div class="content_left">
      <div class="menu_left">
      <?php if(count($list)>0){ ?>
      <ul>
      <? for($i=0;$i<count($list);$i++){ ?>
        <li><a href="http://<?=$config_url?>/san-pham/<?=$list[$i]['tenkhongdau']?>-<?=$list[$i]['id']?>/"><?=$list[$i]['ten']?></a></li>
      <? } ?>
      </ul>
      <? } ?>
      </div><!--end menu left-->
    </div><!--end content_left-->
</div><!--end sub left-->

<div class="sub_left">
    <div class="title_left"><span><?=_thongketruycap?></span></div>
    <div class="content_left">
        <div class="thongke_left">
            <ul>
                <li>Đang online : <?php $count=count_online();echo $count['dangxem'];?></li>
                <li>Hôm nay : <?=$today_visitors?></li>
                <li>Tháng này :<?=$month_visitors?> </li>
                <li>Tổng truy cập : <?=$all_visitors?></li>
            </ul>
        </div><!--end thongke left-->
    </div><!--end content_left-->
</div><!--end sub left-->

    
<!--     
    <div class="sub_left">
      <div class="title_left"><h2>Facebook</h2></div>
        <div class="content_left">
          <div class="facebook_left">
              <div id="fb-root"></div>
        <script>
        (function(d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
          js.id = id;
                  js.src ="//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.3";
                  fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
                </script>

    <div class="fb-like-box" data-href="<?=$company["facebook"]?>" data-width="227" data-height="250" data-colorscheme="light" data-show-faces="true" data-header="false" data-stream="false" data-show-border="false"></div>
            </div>
        </div>
    </div>
     -->
