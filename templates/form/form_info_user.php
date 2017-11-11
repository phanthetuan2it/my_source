<form method="post" name="info_user" id="info_user" action="thong-tin-thanh-vien.html" class="dangnhaptv" enctype="multipart/form-data">
    <div class="tablelienhe" style="width:100%">

            <div class="row_input_form">
                <label>Email </label>
                <div class="box_input_form">
                    <input type="text" name="email" id="email"  readonly="readonly" placeholder="Email của bạn" class="input_form" value="<?=$_SESSION[$name_log]['email']?>" />
                </div>
            </div><!--row input form-->


          <div class="row_input_form">
                <label>Mật Khẩu mới </label>
                <div class="box_input_form">
                     <input type="password" name="password_new" id="password_new" onchange="onchange_input_pass('#password_new','#password_new_re')"  placeholder="mật khẩu mới" class="input_form" />
                     <div class="notify_check_pass"></div>
                </div>
            </div><!--row input form-->


            <div class="row_input_form">
                <label>Nhập Lại Mật Khẩu mới </label>
                <div class="box_input_form">
                    <input type="password" name="password_new_re" id="password_new_re" onchange="onchange_input_pass('#password_new','#password_new_re')"  placeholder="lại mật khẩu trên" class="input_form" />
                    <div class="notify_check_pass"></div>
                </div>
            </div><!--row input form-->

           


            <div class="row_input_form">
                <label>Họ Và Tên </label>
                <div class="box_input_form">
                   <input type="text" name="hoten" id="hoten"   placeholder=" Họ tên" class="input_form" value="<?=$_SESSION[$name_log]['ten']?>" /><br />
                </div>
            </div><!--row input form-->

            <div class="row_input_form">
                <label>Giới Tính </label>
                <div class="box_input_form">
                    <input type="radio" name="gioitinh" value="Nam" <?php if($_SESSION[$name_log]['sex']=='Nam'){ echo "checked='checked'";}?> />&nbsp;&nbsp;&nbsp; Nam &nbsp;&nbsp;&nbsp; 
<input type="radio" name="gioitinh" value="Nữ" <?php if($_SESSION[$name_log]['sex']=='Nữ'){ echo "checked='checked'";}?>/> &nbsp;&nbsp;&nbsp; Nữ
                </div>
            </div><!--row input form-->

            <div class="row_input_form">
                <label>Địa chỉ </label>
                <div class="box_input_form">
                   <input type="text" name="diachi" id="diachi"  size="35"  placeholder="Nhập địa chỉ" class="input_form" value="<?=$_SESSION[$name_log]['diachi']?>"  /><br />
                </div>
            </div><!--row input form-->

             <div class="row_input_form">
                <label>Ảnh đại diện </label>
                <div class="box_input_form">
                     <div class="box_avatar_info">
                        <img id="my_avatar" src="<?=_upload_thanhvien_l.$_SESSION[$name_log]['thumb']?>" alt="avatar" height="100" />
                      </div><br />
                    <input type="file" name="file" onchange="readURL(this)"/><br /><br />
                </div>
            </div><!--row input form-->

             <div class="row_input_form">
                <label>Điện thoại </label>
                <div class="box_input_form">
                    <input type="text" name="dienthoai" id="dienthoai" size="35" placeholder="Nhập Số điện thoại" class="input_form" value="<?=$_SESSION[$name_log]['dienthoai']?>" /><br />
                </div>
            </div><!--row input form-->
            

            <div class="row_input_form">
              <label>&nbsp;</label>
              <div class="box_input_form">
                  <a class="btn_form transitionAll03" onclick="js_submit('info_user');">Cập nhật </a>
              </div>
            </div><!--box input contact-->
    </div><!--end table lien he-->
</form>


 <script type="text/javascript" src="js/temp/contact_js_check.js"></script>

<script type="text/javascript">
<?php /* ?>
var valid_form=true;
    function submib_info(){
      if(valid_form)
        document.dangky.submit();
      
        
    }
<?php */ ?>


  function onchange_input_pass(pass1,pass2){
    var text_pass1=$(pass1).val();
    var text_pass2=$(pass2).val();
    if(text_pass1.length<6){
       $(pass1).parent().find('.notify_check_pass').html('<i class="fa fa-2x fa-warning text_danger"><span>Mật khẩu ít nhất phải 6 ký tự</span></i>');
        valid_form=false;
         $(pass2).parent().find('.notify_check_pass').html('');
    }else{
      $(pass1).parent().find('.notify_check_pass').html('');
       valid_form=true;
       if(text_pass2.length>=1){
          onchange_input_passre(pass1,pass2);
       }
    }
   
  }

  function onchange_input_passre(pass1,pass2){
    var text_pass1=$(pass1).val();
    var text_pass2=$(pass2).val();
    if(text_pass1.length>=6){
      $(pass2).parent().find('.notify_check_pass').html('<i class="fa fa-2x fa-cog fa-spin"></i>');
      setTimeout(function(){
          if(text_pass1==text_pass2){
             $(pass2).parent().find('.notify_check_pass').html('<i class="fa fa-2x fa-check text_success"></i>');
             valid_form=true;
          }else{
            $(pass2).parent().find('.notify_check_pass').html('<i class="fa fa-2x fa-warning text_danger"><span>Mật khẩu không trùng khớp</span></i>');
            valid_form=false;
          }
      },1500);
    }
  }


  function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#my_avatar').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

</script>



