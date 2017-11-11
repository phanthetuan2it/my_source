<form id="form_dn" action="dang-nhap.html" name="form_dn" method="post">
    <div class="tablelienhe" style="width:100%">
            <div class="row_input_form">
                <label>Tên đăng nhập </label>
                <div class="box_input_form">
                   <input type="text" id="username_login" class="input_form" required name="username_login" placeholder="Email"/>
                </div>
            </div><!--row input form-->

            <div class="row_input_form row_input_form_mg0">
                <label>Mật khẩu </label>
                <div class="box_input_form">
                  <input type="password" id="password_login" class="input_form" required name="password_login" placeholder="Mật khẩu"/>
                </div>
            </div><!--row input form-->

             <div class="row_input_form">
              <label>&nbsp;</label>
              <div class="box_input_form">
                  <a href="quen-mat-khau.html" class="href_table_form" title="<?=_quenmatkhau?>"><?=_quenmatkhau?></a>
              </div>
            </div><!--box input contact-->

 				<div class="row_input_form">
                <label>&nbsp;</label>
                <div class="box_input_form">
                     <button href="javascript:" class="btn_form transitionAll03" onsubmit="js_submit('form_dn');"/><?=_login?> </button> <label class="label_check_box_form"><input type="checkbox" id="rememberpass" name="rememberpass" class="checkbox_form"/><?=_remember?></label>
                </div>
            </div><!--row input form-->
            

           

            <div class="row_input_form">
              <label>&nbsp;</label>
              <div class="box_input_form">
              		<a href="javascript:" class="item_other_login btn_other_login login_facebook" onClick="loginFb()"><i class="fa fa-facebook"></i> <?=_dangnhapqua?> Facebook</a>
					<a href="javascript:" class="item_other_login btn_other_login login_google" onClick="login()"><i class="fa fa-google"></i> <?=_dangnhapqua?> Google +</a>
              </div>
            </div><!--box input contact-->

            <div class="row_input_form">
             	
            </div><!--box input contact-->
    </div><!--end table lien he-->
</form>



<script type="text/javascript" src="js/temp/contact_js_check.js"></script>
<script type="text/javascript" src="js/script_facebook.js"></script>
<script type="text/javascript" src="js/script_google.js"></script>