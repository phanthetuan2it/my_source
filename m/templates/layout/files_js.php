<script language="javascript">
  function addtocart(pid){
    document.form_giohang.productid.value=pid;
    document.form_giohang.command.value='add';
    document.form_giohang.submit();
  }
</script>
<form name="form_giohang" action="index.php" method="post">
  <input type="hidden" name="productid" />
  <input type="hidden" name="command" />
</form>
<script type="text/javascript" src="m/js/owl2/owl.carousel.min.js"></script>
<script src="m/js/swipebox/jquery.swipebox.js"></script>
<script language="javascript" type="text/javascript" src="m/js/mmenu/jquery.mmenu.all.min.js"></script>
<script language="javascript" type="text/javascript" src="m/js/mmenu/jquery.mmenu.fixedelements.js"></script>
<script type="text/javascript">
$('#btn_menu_bootstrap').click(function(){
  //$('#menu').css({'top':$(window).scrollTop()});
});
$("#menu_bootstrap").mmenu({
   "extensions": [
      "pagedim-black"
   ]
},  {
         // configuration
         offCanvas: {
            pageSelector: "#full"
         }
      });
var api_mmenu=$("#menu_bootstrap").data('mmenu');
api_mmenu.bind('opened', function () {
  $('#btn_menu_bootstrap').addClass('move_btn_bootstrap');
  $('#menu').addClass('fuck');
});
api_mmenu.bind('closed', function () {
  $('#btn_menu_bootstrap').removeClass('move_btn_bootstrap');
    //$('.menu_fixed').css({'top':0});
});
 $(document).delegate(".fuck","click",function(e){
 api_mmenu.close();

 });
</script>

<?php if($source=='index'){ ?>
<script type="text/javascript">
$('.owl_index').each(function(){
    var owl = $(this);
    var data_id=$(this).attr('data-id');
    owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    smartSpeed:1000,
    responsive:{
        0:{ items:2 },
        600:{ items:3 },
        1000:{ items:4 }
    }     
    });
  $(".next_index"+data_id).click(function(){owl.trigger('next.owl.carousel');})
  $(".prev_index"+data_id).click(function(){owl.trigger('prev.owl.carousel');})
});
</script>
<?php } ?>

<?php if($show_slider){ ?>
<script type="text/javascript">
    var owl_slider=$('#slider');
    owl_slider.owlCarousel({
    autoplay:true,
    autoplaySpeed:500, 
    autoplayHoverPause:true, //tam dung khi hiver
    //autoplayTimeout:500, //thoi gian dung
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    smartSpeed:1000,
    items:1
    });
  $(".next_slider").click(function(){owl_slider.trigger('next.owl.carousel');})
  $(".prev_slider").click(function(){owl_slider.trigger('prev.owl.carousel');})
</script>
<?php } ?>

<?php if($source=='product'&&$_GET['id']!=''||$source=='index'){ //Chi tiết sản phẩm ?>
<script type="text/javascript">
$('.item_owl_sub a').click(function(){
    var this_img=$(this).attr('href');
    var img_change=$(this).attr('data-rel');
    $('.main_img_detail a').attr('href',this_img);
    $('.main_img_detail img').attr('src',img_change);
    $('.item_owl_sub a').addClass('swipebox');
    $(this).removeClass('swipebox');
    return false;
});

var owl_detail = $('.owl_img_detail');
    owl_detail.owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    items:4,
    smartSpeed:1000,
    responsive:{
        0:{ items:4 },
        600:{ items:4 },
        1000:{ items:4 }
    }     
    });
  $(".next_sub_detail").click(function(){owl_detail.trigger('next.owl.carousel');})
  $(".prev_sub_detail").click(function(){owl_detail.trigger('prev.owl.carousel');})
  $( '.swipebox' ).swipebox();
</script>

<?php } ?>


<?php if($show_doitac){ ?>
<script type="text/javascript">
  var owl = $("#owl_doitac");
  owl.owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    smartSpeed:1000,
    responsive:{
        0:{ items:2 },
        600:{ items:3 },
        1000:{ items:4 }
    }     
  });
  $(".next_doitac").click(function(){owl.trigger('next.owl.carousel');})
  $(".prev_doitac").click(function(){owl.trigger('prev.owl.carousel');})
</script>
<?php } ?>

<?php if($show_check_form){ //Check Form ?>
 <script type="text/javascript" src="js/temp/contact_js_check.js"></script>
 <?php } ?>