

<script type="text/javascript">
 
    var owl_index=$('.owl_sing_index');
    var data_id=$(this).data('id');
  owl_index.owlCarousel({
    singleItem:true,
    slideSpeed: 500,
    pagination:false,
    navigation:false
  });
  // Custom Navigation Events
  $(".next"+data_id).click(function(){
    owl_index.trigger('owl.next');
  })
  $(".prev"+data_id).click(function(){
    owl_index.trigger('owl.prev');
  })
</script>


<script type="text/javascript">
  $('.owl_index').each(function(){
    var owl_index=$(this);
    var data_id=$(this).data('id');
  owl_index.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,4], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
    slideSpeed: 500,
    pagination:false,
    navigation:false
  });
  // Custom Navigation Events
  $(".next"+data_id).click(function(){
    owl_index.trigger('owl.next');
  })
  $(".prev"+data_id).click(function(){
    owl_index.trigger('owl.prev');
  })
});
</script>

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
  $(window).scroll(function(){
    var s_top=$(window).scrollTop();
    var s_con=$('.contain_menu').offset().top;
    if(s_top>=s_con){
      $('#menu').addClass('menu_fixed');
    }else{
      $('#menu').removeClass('menu_fixed');
    }
  });
</script>



<script type="text/javascript">

$("#menu_bootstrap").mmenu({
   "extensions": [
      "pagedim-black"
   ],
    navbar: {
    title: "Menu"
  }
});
var api_mmenu=$("#menu_bootstrap").data('mmenu');
api_mmenu.bind('opened', function () {
  $('#btn_menu_bootstrap').addClass('move_btn_bootstrap');
});
api_mmenu.bind('closed', function () {
  $('#btn_menu_bootstrap').removeClass('move_btn_bootstrap');
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

<!--raty-->

<script type="text/javascript">

    $('.rate_p').raty({
    		half     : true,
		  	path     : null,
		  	starHalf : 'css/raty/images/star-half2.png',
		  	starOff  : 'css/raty/images/star-off2.png',
		  	starOn   : 'css/raty/images/star-on2.png',
		  	score: function() {
		    	return $(this).attr('data-score');
		  	},
		  	click: function(score, evt) {
    			var id=$(this).attr('data-id');
    			$.ajax({
    				type:'get',
    				data:{score:score,id:id},
    				url:'ajax/ajax_rating.php',
    				success:function(data){

    				}
    			})
  			}
    });

</script>

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
        map = new google.maps.Map(document.getElementById("map_contact"), myOptions);map.setCenter(defaultLatLng);
        
       var arrLatLng = new google.maps.LatLng(<?=$row_setting['toado']?>);
       infoWindowArray[7895] = '<div class="map_description"><div class="map_title"><?=$row_setting["ten_".$lang]?></div><div>Địa Chỉ : <?=$row_setting["diachi_".$lang]?></div></div>';
       loadMarker(arrLatLng, infoWindowArray[7895], 7895);
       
       moveToMaker(7895);}function loadMarker(myLocation, myInfoWindow, id){marker[id] = new google.maps.Marker({position: myLocation, map: map, visible:true});
       var popup = myInfoWindow;infowindow_array[id] = new google.maps.InfoWindow({ content: popup});google.maps.event.addListener(marker[id], 'mouseover', function() {if (id == old_id) return;if (old_id > 0) infowindow_array[old_id].close();infowindow_array[id].open(map, marker[id]);old_id = id;});google.maps.event.addListener(infowindow_array[id], 'closeclick', function() {old_id = 0;});}function moveToMaker(id){var location = marker[id].position;map.setCenter(location);if (old_id > 0) infowindow_array[old_id].close();infowindow_array[id].open(map, marker[id]);old_id = id;}
       
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
            <?php foreach ($chinhanh as $key => $value) {  ?>
                var arrLatLng = new google.maps.LatLng(<?=$value['toado']?>);
                infoWindowArray[<?=$value['id']?>] = '<div class="map_description"><div class="map_title"><?=$value["ten"]?></div><div><?=_diachi?>: <?=$value["diachi"]?></div><div><?=_dienthoai?>: <?=$value["dienthoai"]?></div><div>Website: <?=$value["website"]?></div><div>Facebook: <?=$value["facebook"]?></div></div>';
                loadMarker(arrLatLng, infoWindowArray[<?=$value['id']?>], <?=$value['id']?>);

                bounds.extend(arrLatLng);
            <?php } ?>
            //moveToMaker(<?=$toado[0]['id']?>);
        <?php }else{ ?>
            var arrLatLng = new google.maps.LatLng(<?=$row_setting['toado']?>);
            infoWindowArray[<?=$row_setting['id']?>] = '<div class="map_description"><div class="map_title"><?=$row_setting["ten_".$lang]?></div><div><?=_diachi?>: <?=$row_setting["diachi_".$lang]?></div></div>';
            loadMarker(arrLatLng, infoWindowArray[<?=$row_setting['id']?>], <?=$row_setting['id']?>);
            moveToMaker(<?=$row_setting['id']?>);
        <?php } ?>

        map.fitBounds(bounds);
     //    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      //     this.setZoom(4);
      //     google.maps.event.removeListener(boundsListener);
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
  var owl_video = $("#owl_video");

  owl_video.owlCarousel({
  items : 4, //10 items above 1000px browser width
  itemsDesktop : [1000,4], //5 items between 1000px and 901px
  itemsDesktopSmall : [900,3], // betweem 900px and 601px
  itemsTablet: [600,2], //2 items between 600 and 0
  itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
  slideSpeed: 500,
  pagination:false,
  navigation:false
});
  // Custom Navigation Events
  $(".next_video").click(function(){
    owl_video.trigger('owl.next');
  })

  $(".prev_video").click(function(){
    owl_video.trigger('owl.prev');
  })

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

<script type="text/javascript">
  var owl_doitac = $("#owl_doitac");
  owl_doitac.owlCarousel({
      items : 8, //10 items above 1000px browser width
      itemsDesktop : [1000,8], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,8], // betweem 900px and 601px
      itemsTablet: [600,8], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	  slideSpeed: 500,
	  pagination:false,
	  navigation:false,
  });

  $(".next_doitac").click(function(){
    owl_doitac.trigger('owl.next');
  })

  $(".prev_doitac").click(function(){
    owl_doitac.trigger('owl.prev');
  })
</script>


<script type="text/javascript">
  var owl_img_detail = $(".owl_img_detail");
  owl_img_detail.owlCarousel({
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,4], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	  slideSpeed: 500,
	  pagination:false,
	  navigation:false,
  });
  $(".next_sub_detail").click(function(){
    owl_img_detail.trigger('owl.next');
  })
  $(".prev_sub_detail").click(function(){
    owl_img_detail.trigger('owl.prev');
  })

</script>




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
$('.remove_p_like').click(function(){
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
      offset:       200
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
