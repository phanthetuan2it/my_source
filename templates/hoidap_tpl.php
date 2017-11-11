<script language="javascript" src="js/my_script.js"></script>
<script language="javascript">
function js_submit12(){
	if(isEmpty(document.getElementById('ten'), "Xin nhập Họ tên.")){
		document.getElementById('ten').focus();
		return false;
	}
	if(isEmpty(document.getElementById('diachi'), "Xin nhập Địa Chỉ.")){
		document.getElementById('diachi').focus();
		return false;
	}
	
	// if(isEmpty(document.getElementById('dienthoai'), "Xin nhập Số điện thoại.")){
	// 	document.getElementById('dienthoai').focus();
	// 	return false;
	// }
	
	// if(!isNumber(document.getElementById('dienthoai'), "Số điện thoại không hợp lệ.")){
	// 	document.getElementById('dienthoai').focus();
	// 	return false;
	// }
	
	if(!check_email(document.frm.email.value)){
		alert("Email không hợp lệ");
		document.frm.email.focus();
		return false;
	}
	
	if(isEmpty(document.getElementById('tieude'), "Xin nhập Chủ đề.")){
		document.getElementById('tieude').focus();
		return false;
	}
	
	if(isEmpty(document.getElementById('cauhoi'), "Xin nhập Nội dung.")){
		document.getElementById('cauhoi').focus();
		return false;
	}
	
	document.frm.submit();
}
</script>
<script type="text/javascript">
  $(document).ready(function() {
    $(".faq .box1.active").find(".cont").slideToggle(150);
    $(".faq .box1 h2").click(function(){
      $(".faq .box1 .cont").slideUp("fast");
      $(".faq .box1").removeClass("active");
      if($(this).next(".cont").is(":hidden"))
      {
        $(this).next(".cont").slideToggle(150);
        $(this).parent(".box1").addClass("active");
      }
    
    });
  });
</script>

<div class="sub_main">
	<div class="title_main"><span>FQA</span></div>
	<div class="content_main">
		<div class="cauhoimoi">Câu hỏi mới nhất</div>
		<div class="left_fqa col-md-6 col-sm-6 col-xs-12">
			<div class="faq">
			   		   <?php
			   		   if(count($tintuc)>0){
			   		   for($i=0,$count_tintuc=count($tintuc);$i<$count_tintuc;$i++){
			   		    
			   		?>
			   		  <div class="box1">                    
			   		    <h2><?=$i+1?>. <?=$tintuc[$i]['tieude']?> - <i><?=$tintuc[$i]['ten']?> (<?=date('d/m/Y h:i:s A',$tintuc[$i]['ngaytao'])?>)</i> <span class=""></span></h2>
			   		    <div class="cont">
			   		      <p style="font-style:italic;"><?=($tintuc[$i]['cauhoi'])?></p>
			   		      <?php if($tintuc[$i]['traloi']!=''){?>
							<h3 class="traloi">Trả lời:</h3>
							<div><?=($tintuc[$i]['traloi'])?></div>
			   		      <?php }else{?>
							<i style="color:#f00;">Chưa có trả lời!</i>	
			   		      <?php }?>
			   		    </div>                       
			   		  </div>

			   		    <?php
			   		       
			   		     }
			   		      
			   		      ?>
			   		      
			   		    <?php 
			   		     }else echo '<p style="color:#f00;font-style:italic;">Nội dung đang cập nhật, Vui lòng xem chuyên mục khác!</p>';  ?>  
			   		    <div class="clr"></div>                                   
			   		    
			   		  </div>			
					<div class="clear"></div>
					<div align="center" ><div class="paging"><?=$paging?></div></div>
		</div><!--left fqa-->

		<div class="right_fqa col-md-6 col-sm-6 col-xs-12">
			<div class="cauhoimoi">Gửi câu hỏi đến chúng tôi</div>	
					<disv class="form_lh form_tv">
						<!-- <div class="tv_mota">Để được tư vấn sức khỏe vui lòng hoàn thành mẫu sau để gửi tới các chuyên gia tư vấn của chúng tôi." </div> -->
						<form method="post" name="frm" action="" enctype="multipart/form-data">
							<div class="left">
								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									<?=_hovaten?><b style="color:#990000;">*</b>
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									<input name="ten" class="form-control" type="text"  id="ten" />
								</div><!--con input fqa-->


								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									<label><?=_address?> : </label><b style="color:#990000;">*</b>
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									<input name="diachi" class="form-control" type="text"  id="diachi" />
								</div><!--con input fqa-->

								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									<label>Email : </label><b style="color:#990000;">*</b>
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									<input name="email" class="form-control" type="text" id="email" />
								</div><!--con input fqa-->

								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									<label><?=_chude?> : </label><b style="color:#990000;">*</b>
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									<input name="tieude" class="form-control" type="text" id="tieude" />
								</div><!--con input fqa-->

								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									<label>Câu hỏi : </label><b style="color:#990000;">*</b>
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									<textarea name="cauhoi" cols="50" rows="5" class="ta_cauhoi form-control" id="cauhoi" style="background-color:#FFFFFF; color:#666666;width:100%;height:240px;"></textarea>
								</div><!--con input fqa-->

								<div class="col_title_fqa col-md-3 col-sm-4 col-xs-12 paddingleft0">
									&nbsp;
								</div>
								<div class="col_input_fqa col-md-9 col-sm-8 col-xs-12 paddingright0">
									 <button type="button" class="button-contact dangnhap" onclick="js_submit12();"> Gửi câu hỏi</button>
					            <button type="reset" class="button-contact dangnhap">Reset</button>
								</div><!--con input fqa-->


					        
					       
							
							</div>
							
					        <div class="clear"></div>
					       

					    </form>
					</div>
			   


		      		        
		      	<div class="clear"></div> 	
		</div><!--right fqa-->
			   		  
					
	</div><!--content main-->
</div><!--sub main-->

