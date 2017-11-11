<meta charset="UTF-8">
<base href="http://<?=$config_url?>/">
<meta name="description" content="<?php if($description_bar!='') echo $description_bar; else echo $row_setting['description']; ?>">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
<meta name="viewport" content="width=1349" />
<?php /* ?><meta name="viewport" content="width=device-width, initial-scale=1.0"/><?php */ ?>
<title><?php if($title_bar!='') echo $title_bar; else echo $row_setting['title']; ?></title>
<meta name="keywords" content="<?php if($keywords_bar!='') echo $keywords_bar; else echo $row_setting['keywords']; ?>">
<meta name="robots" content="index,follow" />
<meta name="google" content="notranslate" />
<meta name='revisit-after' content='1 days' />
<meta name="ICBM" content="<?=$row_setting['toado']?>">
<meta name="geo.position" content="<?=$row_setting['toado']?>">
<meta name="geo.placename" content="<?=$row_setting['diachi_'.$lang]?>">
<meta name="author" content="<?=$row_setting['ten_'.$lang]?>">
<?=$row_setting['meta']?>
<?=$share_facebook?>
<link id="favicon" rel="shortcut icon" href="<?=_upload_hinhanh_l.$favicon['thumb_'.$lang]?>" type="image/x-icon" />
<link rel="canonical" href="<?= getCurrentPageURL() ?>" />
<?php if($_GET['com']=='san-pham' || $_GET['com']=='tin-tuc') {?>
<link rel="amphtml" href="<?=getCurrentPageURL_AMP()?>" /> 
<?php }?>