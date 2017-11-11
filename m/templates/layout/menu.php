<?php
  $d->reset();
  $d->query("select id,tenkhongdau,ten_$lang as ten from #_baiviet_list where hienthi=1 and type='tintuc' order by stt asc,id desc");
  $news_list_menu=$d->result_array();
?>




<div class="contain_menu">
	<a href="#menu_bootstrap" id="btn_menu_bootstrap" ><span class="transAll03"></span></a>
	<div id="menu" >
	    <?php include _template."layout/module/timkiem.php"; ?>
	    <nav id="menu_bootstrap" style="display: none;">
  			<ul>
	            <li <?=$_GET['com']==''||$_GET['com']=='index'?'class="menu_active"':''?>><a href="index.html" class="transitionAll"><?=_trangchu?></a></li>
	            <li <?=$_GET['com']=='gioi-thieu'?'class="menu_active"':''?>><a href="gioi-thieu.html" class="transitionAll"><?=_gioithieu?></a></li>
	            <li <?=$_GET['com']=='dich-vu'?'class="menu_active"':''?>><a href="dich-vu.html" class="transitionAll"><?=_dichvu?></a></li>
	            <li <?=$_GET['com']=='thu-vien'?'class="menu_active"':''?>><a href="thu-vien-anh.html" class="transitionAll"><?=_hinhanh?></a></li>
	            <li <?=$_GET['com']=='lien-he'?'class="menu_active"':''?>><a href="lien-he.html" class="transitionAll"><?=_lienhe?></a></li>
        	</ul>
		</nav>
	</div><!-- #menu -->
</div><!--end contain menu-->



