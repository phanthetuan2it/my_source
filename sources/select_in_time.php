<?php
	
    $day             =    date('d');
    $month             =    date('n');
    $year             =    date('Y');
    $daystart         =    mktime(0,0,0,$month,$day,$year);
    $monthstart         =  mktime(0,0,0,$month,1,$year);
	
 
    $weekday         =    date('w');
    $weekday--;
	echo $weekday ;
    if ($weekday < 0)    $weekday = 7;
    $weekday         =    $weekday * 24*60*60;
    $weekstart         =    $daystart - $weekday;
    $yearstart         =    $daystart - 365*24*60*60;

    $sql = "SELECT * FROM table_product WHERE ngaytao>='$weekstart' order by luotxem desc limit 0,10";
	$d->query($sql);
    $view_week=$d->result_array();;

    $sql="SELECT * FROM table_product WHERE ngaytao>='$monthstart'  order by luotxem desc limit 0,10";
    $d->query($sql);
    $view_month =$d->result_array();
	
	$sql="SELECT * FROM table_product WHERE ngaytao>='$yearstart'  order by luotxem desc limit 0,10";
    $d->query($sql);
    $view_year=$d->result_array();


?> 