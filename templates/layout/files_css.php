<!--bootstrap-->
<link rel="stylesheet" href="css/bootstrap/bootstrap.css">
<!--my style-->
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/style_media.css">
<!--owl-->
<link href="css/owl/owl.carousel.css" type="text/css" rel="stylesheet">
<link href="css/owl/owl.transitions.css" type="text/css" rel="stylesheet">
<link href="css/owl/owl.theme.css" type="text/css" rel="stylesheet">
<!--fonts-->
<link rel="stylesheet" href="css/fonts.css">
<!--font awasome-->
<link rel="stylesheet" href="css/font_awesome/css/font-awesome.min.css">
<!--nivo slider-->
<link rel="stylesheet" href="css/nivo/themes/default/default.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/nivo/themes/light/light.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/nivo/themes/dark/dark.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/nivo/themes/bar/bar.css" type="text/css" media="screen" />
<link rel="stylesheet" href="css/nivo/nivo-slider.css" type="text/css" media="screen" />
<!-- Fancy box -->
<link rel="stylesheet" type="text/css" href="css/fancybox3/jquery.fancybox.min.css" media="screen" />

<!--zoom-->
<link type="text/css" href="css/magiczoomplus/magiczoomplus.css" media="all" rel="stylesheet" />
<!--wow-->
<link type="text/css" href="css/wow/animate.min.css" media="all" rel="stylesheet" />
<?php /* ?>
<!--menu mobile-->
<link rel="stylesheet" href="css/mmenu/jquery.mmenu.all.css">
<!--raty-->
<link rel="stylesheet" href="css/raty/jquery.raty.css">
<!--simple scroll-->
<link rel="stylesheet" href="css/simplyscroll/jquery.simplyscroll.css" media="all" type="text/css">
<!--slick-->
<link rel="stylesheet" type="text/css" href="css/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="css/slick/slick-theme.css"/>
<?php */ ?>
<!-- <script language="javascript" type="text/javascript" src="js/jquery-1.11.3.js"></script> -->
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
    <script src="js/html5shiv.min.js?version=3.7.3"></script>
    <script src="js/respond.min.js?version=1.4.2"></script>
<![endif]-->

<script type="text/javascript">
  let promise = loadScript('js/jquery-1.11.3.js');
  promise.then(() => {
    loadScript('js/bootstrap/bootstrap.min.js');
    loadScript('js/owl/owl.carousel.min.js');
    loadScript('js/slick/slick.min.js');
    loadScript('js/fancybox3/jquery.fancybox.min.js');
    loadScript('js/nivo/jquery.nivo.slider.js');
    loadScript('js/temp/js_backto_top.js');
    loadScript('js/carousel_wow/wowslider.js');
    loadScript('js/carousel_wow/script.js');
    loadScript('js/my_js/script_menu_left.js');
    loadScript('js/my_js/script_menu_top.js');
    loadScript('js/mmenu/jquery.mmenu.all.min.js');
    loadScript('js/script_facebook.js');
    loadScript('js/script_google.js');
    loadScript('js/raty/jquery.raty.js');
    loadScript('http://maps.google.com/maps/api/js?key=AIzaSyDbYXUfyXrfWP46Zq7koC2u08xw_8So_ng');
    loadScript('js/temp/contact_js_check.js');
    loadScript('js/simplyscroll/jquery.simplyscroll.js');
    loadScript('js/fotorama/fotorama.js');
    loadScript('http://w.sharethis.com/button/buttons.js');
    loadScript('js/magiczoomplus/magiczoomplus.js');
    loadScript('js/temp/js_tab.js');
    loadScript('js/confirm_master/jquery-confirm.js');
    loadScript('js/temp/js_giohang.js');
  }).then(() => {
    loadScript('templates/layout/files_js.js', true);
  })

  function loadScript(src, after = false) {
    return new Promise(function(resolve, reject) {
      let script = document.createElement('script');
      script.src = src;

      script.onload = () => resolve(script);
      script.onerror = () => eject(new Error("script load error: "+src));
      if(after)
        document.body.append(script);
      else
        document.head.append(script);
    })
  }


</script>