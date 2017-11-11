<?php
  $d->reset();
  $sql="select * from #_yahoo where hienthi=1 order by stt asc, id desc";
  $d->query($sql);
  $yahoo=$d->result_array();
  $show_menu_left=true;
?>


<div class="sub_left">
  <div class="title_left"><span>Danh mục sản phẩm</span></div>
    <div class="content_left">
      <div class="menu_left">
      <?php if(count($list)>0){ ?>
      <ul>
      <?php for($i=0;$i<count($list);$i++){ ?>
        <li><a href="http://<?=$config_url?>/san-pham/<?=$list[$i]['tenkhongdau']?>-<?=$list[$i]['id']?>/"><?=$list[$i]['ten_'.$lang]?></a></li>
      <?php } ?>
      </ul>
      <?php } ?>
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

<div class="sub_left">
    <div class="title_left"><span>Video</span></div>
    <div class="content_left">
       <?php include_once _template.'layout/module/video.php'; ?>
    </div><!--end content_left-->
</div><!--end sub left-->


    
<div class="fb-page" data-href="<?=$row_setting['facebook']?>" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-width="370" data-height="290" data-tabs="timeline"><blockquote cite="<?=$row_setting['facebook']?>" class="fb-xfbml-parse-ignore"><a href="<?=$row_setting['facebook']?>"><?=$row_setting['ten_'.$lang]?></a></blockquote></div>