
<div id="header_register">
  <div class="inner">
    <div class="logo_register">
      <a href="http://<?=$config_url?>/index.html"><img src="<?=_upload_hinhanh_l.$logo['photo']?>" alt="<?=$row_setting['ten_'.$lang]?>" class="mw100" /></a>
    </div><!--logo register-->
  </div>
</div>
<div class="contain_box_register">
  <div class="sub_main">
    <?php include_once _template.'layout/module/breadcrumb.php'; ?>
  <div class="title_register"><h2>Thông tin thành viên</h2></div>
  <div class="content_main">
   
    <div class="box_dangky">
        <?php include_once _template.'form/form_info_user.php'; ?>
    </div>
  </div><!--content main-->
</div><!--sub main-->
</div><!--end contain box register-->


  <script type="text/javascript">
  function dcv_random(a){
    for(var b="",c=0;c<a;c++)b+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(Math.floor(Math.random()*62));
    return b
  }
  function nv_change_captcha(a,b){
    var c=document.getElementById(a);
    nocache=dcv_random(10);
    c.src="captcha_image.php?&nocache="+nocache;  
    document.getElementById(b).value="";return!1
  }
</script>       	