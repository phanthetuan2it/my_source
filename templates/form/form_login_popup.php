
<div id="login" class="full_bglightbox">
	<div class="contain_box_form">
		<div class="header_login">
			<h3 class="title_login"><?=_dangnhap?></h3>
			<div class="close_form"><i class="fa fa-times"></i></div>
		</div>
		<div class="body_form">
			<div class="left_body_form">
				<div class="notify_login">Những thông tin có đánh dấu (<span>*</span>) là bắt buộc nhập.</div>
				 <form id="login" action="dang-nhap.html" name="form_dn" method="post">
				<div class="my_table table_form">
					<div class="my_row">
						<div class="my_cell my_cell_title"><label for="username_login"><?=_tendangnhap?></label></div>
						<div class="my_cell"><input type="text" id="username_login" class="input_form" name="username_login"/></div>
					</div><!--end row-->
					<div class="my_row">
						<div class="my_cell my_cell_title"><label for="password_login"><?=_matkhau?></label></div>
						<div class="my_cell"><input type="password" id="password_login" class="input_form" name="password_login"/></div>
					</div><!--end row-->
					<div class="my_row">
						<div class="my_cell my_cell_title"></div>
						<div class="my_cell">
							<div class="left_table_form">
								<label class="label_check_box_form"><input type="checkbox" id="rememberpass" name="rememberpass" class="checkbox_form"/><?=_nhomatkhau?></label>
							</div>
							<div class="right_table_form">
								<a href="quen-mat-khau.html" class="href_table_form" title="<?=_quenmatkhau?>"><?=_quenmatkhau?></a>
							</div>
						</div>
					</div><!--end row-->
					<div class="my_row">
						<div class="my_cell my_cell_title"></div>
						<div class="my_cell">
							<button class="btn_form w100"><?=_dangnhap?></button>
						</div>
					</div><!--end row-->
				</div><!--end table form-->
				</form>
			</div><!--end left body form-->
			<div class="right_body_form">
				<div class="title_other_login"><span><?=_hoac?></span></div>
				<a href="javascript:" class="item_other_login" onClick="loginFb()"><button class="btn_other_login login_facebook"><i class="fa fa-facebook"></i></button> <?=_dangnhapqua?> Facebook</a>
				<a href="javascript:" class="item_other_login" onClick="login()"><button class="btn_other_login login_google"><i class="fa fa-google"></i></button> <?=_dangnhapqua?> Google +</a>
			</div><!--end right body form-->
			<div class="clear"></div>
		</div><!--end body login-->
	</div><!--end contain login-->
</div><!--full_bglightbox-->
