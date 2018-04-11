<?php
  $d->reset();
  $d->query("select ten_$lang as ten,id,links from #_video where hienthi=1 and type='video' order by stt asc,id desc");
  $video=$d->result_array();
  $id_y=id_youtube($video[0]['links']);
  $show_video_owl=true;
?>
<div id="box_video_owl">
  <div id="main_video_owl">
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/<?=$id_y?>" frameborder="0" allowfullscreen></iframe>
  </div>
  <div id="sub_video_owl">
    <div class="next_video" data-owl-next></div>
    <div class="prev_video" data-owl-prev></div>
    <div id="owl_video" class="owl-carousel" data-owl-carousel-custom data-owl-options='{"items": 4,"margin": 5, "dots": false,
    "responsive": {"1000": {"items": 4}, "800": {"items": 3}, "600": {"items": 3},"0": {"items": 2}}}'>
      <?php
      if($video){
        foreach ($video as $key => $value) { 
          $id_y=id_youtube($value['links']);
        ?>
          <div class="item_video" data-id="<?=$id_y?>" >
            <img src="http://img.youtube.com/vi/<?=$id_y?>/0.jpg" class="w100"/>
          </div>
        <?php }
      }
      ?>
    </div>
  </div>
</div>