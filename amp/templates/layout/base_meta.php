<meta charset="utf-8">
<title itemprop='name'><?=($title!='')?$title:$row_setting['title']?></title>
<meta name="description" content="<?=($description!='')? seo_entities($description):$row_setting['description']?>" />
<meta name="keywords" content="<?=($keywords!='')? seo_entities($keywords):$row_setting['keywords']?>" />
<meta name="robots" content="index, follow" />
<meta name="author" content="<?=$row_setting['ten_'.$lang]?> [<?=$row_setting['email']?>]" />
<meta http-equiv="content-language" content="vi" />
<link rel="canonical" href="<?=getCurrentPageURL()?>" />
<link href="<?=_upload_hinhanh_l.$row_setting['photo']?>" rel="shortcut icon" type="image/x-icon" />
<?php //$share_facebook?>
<!-- <meta property="fb:app_id" content="917571318303635" />-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />