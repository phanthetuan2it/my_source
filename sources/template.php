<?php

    $d->reset();
    $sql= "select * from #_photo where type='logo'";
    $d->query($sql);
    $logo = $d->fetch_array();

    $d->reset();
    $sql= "select * from #_photo where type='banner'";
    $d->query($sql);
    $banner_top = $d->fetch_array();

    $d->reset();
    $sql = "select * from #_lkweb where hienthi=1 and type='mxh' order by stt asc,id desc";
    $d->query($sql);
    $mxh = $d->result_array();

    $d->reset();
    $sql = "select * from #_product_list where hienthi=1 and type='product' order by stt,id desc";
    $d->query($sql);
    $list = $d->result_array();

    $d->reset();
    $sql = "select * from #_photo where hienthi=1 and type='slider' order by stt asc,id desc";
    $d->query($sql);
    $slider = $d->result_array();


    $d->reset();
    $sql = "select * from #_photo where hienthi=1 and type='doitac' order by id asc";
    $d->query($sql);
    $doitac = $d->result_array();



?>