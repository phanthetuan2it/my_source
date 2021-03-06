<?php
  $files = array(
    'js/bootstrap/bootstrap.min.js',
    'js/owl2/owl.carousel.min.js',
    'js/slick/slick.min.js',
    'js/fancybox3/jquery.fancybox.min.js',
    'js/nivo/jquery.nivo.slider.js',
    'js/temp/js_backto_top.js',
    'js/wow/wow.js',
    'js/my_js/script_menu_left.js',
    'js/mmenu/jquery.mmenu.all.min.js',
    'js/raty/jquery.raty.js',
    'js/temp/contact_js_check.js',
    'js/simplyscroll/jquery.simplyscroll.js',
    'js/magiczoomplus/magiczoomplus.js',
    'js/confirm_master/jquery-confirm.js',
    'js/plugins/owl-carousel-custom.js',
    'js/plugins/my-raty.js',
    'js/plugins/my-menu-top.js',
    'js/fotorama/fotorama.js',
    'js/script_facebook.js',
    'js/script_google.js',
  );
  echo combine_my_files($files, 'cache/', '.js', 1);
?>

<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDbYXUfyXrfWP46Zq7koC2u08xw_8So_ng"></script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>

<script type="text/javascript">
  $('#slider').nivoSlider({
    effect: 'random',                 // Specify sets like: 'fold,fade,sliceDown'
    slices: 15,                     // For slice animations
    boxCols: 8,                     // For box animations
    boxRows: 4,                     // For box animations
    animSpeed: 500,                 // Slide transition speed
    pauseTime: 3000,                 // How long each slide will show
    startSlide: 0,                     // Set starting Slide (0 index)
    directionNav: true,             // Next & Prev navigation
    controlNav: false,                 // 1,2,3... navigation
    controlNavThumbs: false,         // Use thumbnails for Control Nav
    pauseOnHover: true,             // Stop animation while hovering
    manualAdvance: false,             // Force manual transitions
    prevText: 'Prev',                 // Prev directionNav text
    nextText: 'Next',                 // Next directionNav text
    randomStart: false,             // Start on a random slide
    beforeChange: function(){},     // Triggers before a slide transition
    afterChange: function(){},         // Triggers after a slide transition
    slideshowEnd: function(){},     // Triggers after all slides have been shown
    lastSlide: function(){},         // Triggers when last slide is shown
    afterLoad: function(){$('.contain_slider').css({'height':'auto'})}         // Triggers when slider has loaded
  });
</script>

<script type="text/javascript">
  $('.close_form').click(function(){
    $(this).parents('.full_bglightbox').fadeOut(300,function(){
      overflow_hidden_element('body',false);
    });
  });

  function open_dkdn(id_div){
    overflow_hidden_element('body',true);
    $(id_div).fadeIn();
    e.preventDefault();
  }

  function overflow_hidden_element(my_select,condition){
    if(condition)
      $(my_select).addClass('overflow_hidden');
    else
      $(my_select).removeClass('overflow_hidden');
    }
</script>


<?php /* ?>

<script type="text/javascript">
    var map;
    var infowindow;
    var marker= new Array();
    var old_id= 0;
    var infoWindowArray= new Array();
    var infowindow_array= new Array();
    function initialize(){
      var defaultLatLng = new google.maps.LatLng(<?=$row_setting['toado']?>);
      var myOptions= {
        zoom: 11,
        center: defaultLatLng,
        scrollwheel : false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      map = new google.maps.Map(document.getElementById("map_contact"), myOptions);
      map.setCenter(defaultLatLng);
      var arrLatLng = new google.maps.LatLng(<?=$row_setting['toado']?>);
      infoWindowArray[7895] = '<div class="map_description"><div class="map_title"><?=$row_setting["ten_".$lang]?></div><div>Địa Chỉ : <?=$row_setting["diachi_".$lang]?></div></div>';

      loadMarker(arrLatLng, infoWindowArray[7895], 7895);
      moveToMaker(7895);
    }
    
    function loadMarker(myLocation, myInfoWindow, id) {
      marker[id] = new google.maps.Marker({position: myLocation, map: map, visible:true});
      var popup = myInfoWindow;
      infowindow_array[id] = new google.maps.InfoWindow({ content: popup});
      google.maps.event.addListener(marker[id], 'mouseover', function() {
        if (id == old_id) return;
        if (old_id > 0) infowindow_array[old_id].close();
        infowindow_array[id].open(map, marker[id]);old_id = id;});
        google.maps.event.addListener(infowindow_array[id], 'closeclick', function() {old_id = 0;});
    }
    
    function moveToMaker(id){
      var location = marker[id].position;map.setCenter(location);
      if (old_id > 0) infowindow_array[old_id].close();
      infowindow_array[id].open(map, marker[id]);old_id = id;
    }
    
    google.maps.event.addDomListener(window, "load", initialize);
</script>


<script type="text/javascript">
  var map;
  var infowindow;
  var marker= new Array();
  var old_id= 0;
  var infoWindowArray= new Array();
  var infowindow_array= new Array();
  function initialize(){
    var defaultLatLng = new google.maps.LatLng(<?=($chinhanh[0]['toado'])?$chinhanh[0]['toado']:$row_setting['toado']?>);
    var bounds = new google.maps.LatLngBounds();
    var myOptions= {
      zoom: 6,
      center: defaultLatLng,
      scrollwheel : true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_contact_multi"), myOptions);
    map.setCenter(defaultLatLng);
    <?php if (count($chinhanh)>0) { ?>
      //alert(<?=$chinhanh[0]['toado']?>);
    <?php foreach ($chinhanh as $key => $value) { ?>
      var arrLatLng = new google.maps.LatLng(<?=$value['toado']?>);
      infoWindowArray[<?=$value['id']?>] = 
      [
        '<div class="map_description">',
          '<div class="map_title"><?=$value["ten"]?></div>',
          '<div><?=_diachi?>: <?=$value["diachi"]?></div>',
          '<div><?=_dienthoai?>: <?=$value["dienthoai"]?></div>',
          '<div>Website: <?=$value["website"]?></div>',
          '<div>Facebook: <?=$value["facebook"]?></div>',
        '</div>'
      ].join();
      loadMarker(arrLatLng, infoWindowArray[<?=$value['id']?>], <?=$value['id']?>);
      bounds.extend(arrLatLng);
    <?php } ?>
        //moveToMaker(<?=$toado[0]['id']?>);
    <?php } else { ?>
      var arrLatLng = new google.maps.LatLng(<?=$row_setting['toado']?>);
      infoWindowArray[<?=$row_setting['id']?>] = 
      [
        '<div class="map_description">',
          '<div class="map_title"><?=$row_setting["ten_".$lang]?></div>',
          '<div><?=_diachi?>: <?=$row_setting["diachi_".$lang]?></div>',
        '</div>'
      ].join();
      loadMarker(arrLatLng, infoWindowArray[<?=$row_setting['id']?>], <?=$row_setting['id']?>);
      moveToMaker(<?=$row_setting['id']?>);
    <?php } ?>
    map.fitBounds(bounds);
    // var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    // this.setZoom(4);
    // google.maps.event.removeListener(boundsListener);
    // });
  }

  function loadMarker(myLocation, myInfoWindow, id){
    marker[id] = new google.maps.Marker({position: myLocation, map: map, visible:true});
    var popup = myInfoWindow;
    infowindow_array[id] = new google.maps.InfoWindow({ content: popup});
    google.maps.event.addListener(infowindow_array[id], 'closeclick', function() {old_id = 0;});
  }
  function moveToMaker(id){
    var location = marker[id].position;
    map.setCenter(location);
    map.setZoom(9); 
    if (old_id > 0) 
    infowindow_array[old_id].close();
    infowindow_array[id].open(map, marker[id]);old_id = id;
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  $(document).delegate(".change_maker","click",function(e){
    var data_id=$(this).attr('data-id');
    moveToMaker(data_id);
  });
</script>
<?php */ ?>


<!--vert-->
<script type="text/javascript">
  (function($) {
      $(function() {
        $(".list_news_scroll").simplyScroll({orientation:'vertical',customClass:'vert'});
      });
  })(jQuery);
</script>


<script type="text/javascript">
  $('#list_video').change(function(){
    var id=$(this).val();
    var w_video=$('#video').find('iframe').attr('width');
    var h_video=$('#video').find('iframe').attr('height');
    if(id!=0){
      $('#video iframe').attr('src','https://www.youtube.com/embed/'+id);
    }
  });
</script>


<script type="text/javascript">
  $('.item_video').click(function(){
  var id=$(this).data('id');
  var w_video=$('#main_video_owl').find('iframe').attr('width');
  var h_video=$('#main_video_owl').find('iframe').attr('height');
  if(id!=0){
    $('#main_video_owl iframe').attr('src','https://www.youtube.com/embed/'+id);
  }
  });
</script>
<script type="text/javascript">stLight.options({publisher: "52d300e4-b714-48ef-8a81-22c2ea7d8df3", doNotHash: false, doNotCopy: false, hashAddressBar: false});</script>

<form name="form1" action="index.php">
  <input type="hidden" name="productid" />
  <input type="hidden" name="quality" />
  <input type="hidden" name="psize" />
  <input type="hidden" name="pmau" />
  <input type="hidden" name="command" />
</form>

<script language="javascript" type="text/javascript">
  function addtocart(pid,q){
    document.form1.productid.value=pid;
    document.form1.quality.value=q;
    document.form1.command.value='add';
    document.form1.submit();
  }
</script>

<link rel="stylesheet" type="text/css" href="css/confirm_master/jquery-confirm.css">
<script type="text/javascript">
  $('.remove_p_like').click(function() {
    var data_id=$(this).data('id');
    var index_parent=$(this).parents('.my_row').index();
  $.confirm({
    title: 'Xóa',
    content: 'Bạn muốn xóa sản phẩm này khỏi danh sách yêu thích',
    icon: 'fa fa-question-circle',
    animation: 'scale',
    closeAnimation: 'scale',
    opacity: 0.5,
    buttons: {
      'confirm': {
        text: 'Xóa',
        btnClass: 'btn-info',
        action: function () {
          $.ajax({
            data:{data_id:data_id,action:'delete'},
            url:'ajax/ajax_like_p.php',
            type:'get',
            success:function(data){
              if(data.trim()=='1'){
                $('.table_p_like').find('.my_row:eq('+index_parent+')').remove();
              }
              
            }
          })
        }
      },
      cancel: {
        text:'Thoát',
          action:function () {
          
        }
      },
    }
    });
  });
</script>


<script type="text/javascript">
  $('.btn_like_p').click(function(){
    var data_id=$(this).data('id');
    $.ajax({
      data:{data_id:data_id,action:'add'},
      url:'ajax/ajax_like_p.php',
      type:'get',
      success:function(data){
        show_my_alert(data);
      }
    })
  });

  function show_my_alert(data){
    check_contain_alert(false);
    $item_alert=$(data);
    $('.contain_alert').append($item_alert);
    remove_my_alert($item_alert);
  }

  function remove_my_alert($item){
    setTimeout(function(){
     $item.fadeOut(1000,function(){
      $(this).remove();
        check_contain_alert(true);
     });
    },2000)
  }

  function check_contain_alert($remove=true){
    if(!$remove){
      if($('body').find('.contain_alert').length==0){
        $('body').append('<div class="contain_alert"></div>')
      }
    }else{
      if($('body').find('.my_alert').length==0){
        $('body').find('.contain_alert').remove();
      }
    }
  }
//end p like*/
</script>

<script type="text/javascript">
  $(window).load(function(){
    init_my_popup();
  });

  $(window).resize(function(){
    init_my_popup();
  });

  function init_my_popup(){
    $('#my_popup').fadeIn(1000);
    check_content_popup();
    margin_top_popup();
    add_element_my_popup();
    $('body,html').addClass('overflow_my_body_popup');
  }

  function reset_all_init(){
    $('body,html').removeClass('overflow_my_body_popup');
  }

  function add_element_my_popup(){
    $('.content_popup').append('<span class="close_my_popup"></span>');
  }

  function margin_top_popup(){
    var margin_my_box_popup=$('.my_box_popup').css('margin-top');
    var height_content=$('.inner_content_popup').outerHeight();
    var half_height_content=height_content/2+parseInt(margin_my_box_popup)/2;
    $('.content_popup').css({'margin-top':-half_height_content});
  }

  function check_content_popup(){
    var height_content=$('.content_popup').outerHeight();
    var height_box_popup=$('.inner_content_popup').outerHeight();
    if(height_content<height_box_popup){
      $('.inner_content_popup').css({'overflow-y':'scroll','height':height_content});
    }
  }

  $(document).delegate(".close_my_popup","click",function(e){
    reset_all_init();
    $my_popup=$('#my_popup');
    $('#my_popup').fadeOut(1000);
    setTimeout(function(){
      $my_popup.remove();
    },1000);
  });
</script>

<script type="text/javascript">
    wow = new WOW(
    {
      animateClass: 'animated',
      offset: 200
    }
  );
  wow.init();
</script>

<script type="text/javascript">
  $('.dangkymail').submit(function(event) {
    var email = $('.dangkymail input').val();
    if(email==''){
      alert('Bạn chưa nhập email');
      $('.dangkymail input').focus();
    } else {
      $.ajax ({
        type: "POST",
        url: "ajax/dangky_email.php",
        data: {email:email},
        success: function(result) { 
          if(result==0){
            $('.dangkymail input').attr('value','');
            alert('Đăng ký thành công ! ');
            $('.dangkymail input').attr('value','');
          } else if(result==1){
            alert('Email đã được đăng ký ! ');
            $('.dangkymail input').attr('value','');
          } else if(result==2){
            alert(' ! Đăng ký không thành công . Vui lòng thử lại ');
          }
        }
      });
    }
    return false;
  });
</script>

<script type="text/javascript">
   $('#slider_main_news').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '#slider_sub_news'
  });
  $('#slider_sub_news').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#slider_main_news',
    dots: true,
    centerMode: false,
    vertical:true,
    focusOnSelect: true,
      prevArrow: $('.prev_sub_news'),
      nextArrow: $('.next_sub_news'),
  });
</script>

<script type="text/javascript">
  $('.title_facebook_chat').click(function(){
     var h_box_chat=$('.box_facebook_chat').outerHeight();
    if(h_box_chat>100){
      var this_click=$(this);
      var this_w=this_click.outerWidth();
      var contain_w=$('#facebook_chat').outerWidth();
      var w_trans=contain_w-this_w;
      if(!this_click.hasClass('click')){
        this_click.animate({'right':w_trans},300,function(){
          $('.body_facebook_chat').animate({'height':h_box_chat},300);
        });
        this_click.addClass('click');
      }else{
          $('.body_facebook_chat').animate({'height':0},300,function(){
          this_click.animate({'right':0},300);
        });
          this_click.removeClass('click');
      }
    }
  });
</script>


<script type="text/javascript">
// *********** cart ***********
  function del(pid) {
    if(confirm('Xóa sản phẩm này ! ')) {
      document.form1.pid.value=pid;
      document.form1.command.value='delete';
        document.form1.submit();
    }
  }

  function clear_cart() {
    if(confirm('Bạn Chắc Có Muốn Xóa Giỏ Hàng Hay Không ? ')) {
      document.form1.command.value='clear';
      document.form1.submit();
    }
  }

  function update_cart() {
    if(confirm('Cập nhật giỏ hàng của bạn ?')) {
      document.form1.command.value='update';
      document.form1.submit();
    }
  }

  /*code button cong tru*/
  $(document).ready(function() {
      $('.minius_cart').click(function(){
        var action=$(this).attr('data-action');
        var id_product=$(this).attr('data-id');
        var number_cart=$(this).parent().children('.number_cart').val();
        if(number_cart>1){
          number_cart=parseInt(number_cart)-1;
          $(this).parent().children('.number_cart').val(number_cart);
          update_cart_ajax($(this),action,id_product,number_cart);
        }
        return false;
      });

      $('.plus_cart').click(function(){
        var action=$(this).attr('data-action');
        var id_product=$(this).attr('data-id');
        var number_cart=$(this).parent().children('.number_cart').val();
        if(number_cart<101){
          number_cart=parseInt(number_cart)+1;
          $(this).parent().children('.number_cart').val(number_cart);
          update_cart_ajax($(this),action,id_product,number_cart);
        }
        return false;
      });

    function update_cart_ajax(element,action,id_product,quantity) {
      $.ajax({
        url:'ajax/ajax_update_cart.php',
        data:{action:action,id_product:id_product,quantity:quantity},
        dataType:'json',
        type:'post',
        success:function(data){
          element.parents('tr').find('.price_p_cart').text(data.total_this);
          $('.price_all_cart').text(data.total_all);
        }
      });
    }
  });
</script>

<script type="text/javascript">
  // ***** tab *****
  $('.item_tab_cm').click(function(){
    $(this).parent().find('.item_tab_cm').removeClass('active');
    var id_tab=$(this).attr('href');
    $(this).addClass('active');
    $(this).parents('.my_box_tab').find('.content_tab_cm').css({'display':'none'});
    $(id_tab).fadeIn();
    return false;
  });
</script>