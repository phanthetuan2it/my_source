<?php
  $d->reset();
  $d->query("select id,tenkhongdau,ten_$lang as ten from #_baiviet_list where hienthi=1 and type='tintuc' order by stt asc,id desc");
  $news_list_menu=$d->result_array();
  $show_menu_top=true;
?>

<div id="menu">
  <div class="inner">
    <a href="#menu_bootstrap" id="btn_menu_bootstrap" data-role="button" role="button" ><span class="transAll03"></span></a>
        <ul>
            <?php include _template.'layout/items_menu.php'; ?>
        </ul>
<?php include _template."layout/module/timkiem.php"; ?>
  </div><!--end inner menu-->
</div>
<!-- #menu -->

<?php //include_once _template.'layout/menu_mobile.php'; ?>