<ul class="list_thongke">
	<li class="tk_online"><?=_dangonline?> : <span><?php $count=count_online();echo $tong_xem=$count['dangxem'];?></span></li>
	<li class="tk_today"><?=_homnay?> : <span><?=$today_visitors?></span></li>
	<li class="tk_week"><?=_tuannay?> : <span><?=$week_visitors?></span></li>
	<li class="tk_all"><?=_tongtruycap?> : <span><?=$all_visitors?></span></li>
</ul>