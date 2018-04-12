<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
    <script src="js/html5shiv.min.js?version=3.7.3"></script>
    <script src="js/respond.min.js?version=1.4.2"></script>
<![endif]-->
<?php
  $files = array(
    'css/bootstrap/bootstrap.css',
    'css/style.css',
    'css/style_media.css',
    'css/owl2/owl.carousel.min.css',
    'css/owl2/owl.theme.default.min.css',
    'css/fonts.css',
    'css/font_awesome/css/font-awesome.min.css',
    'css/nivo/themes/default/default.css',
    'css/nivo/themes/light/light.css',
    'css/nivo/themes/dark/dark.css',
    'css/nivo/themes/bar/bar.css',
    'css/nivo/nivo-slider.css',
    'css/fancybox3/jquery.fancybox.min.css',
    'css/magiczoomplus/magiczoomplus.css',
    'css/wow/animate.min.css',
    'css/mmenu/jquery.mmenu.all.css',
    'css/raty/jquery.raty.css',
    'css/simplyscroll/jquery.simplyscroll.css',
    'css/slick/slick.css',
    'css/slick/slick-theme.css',
  );
  echo combine_my_files($files, 'cache/', '.css', 1);
?>

<script type="text/javascript" src="js/jquery-1.11.3.js"></script>