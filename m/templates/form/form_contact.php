<form method="post" name="frm" id="frm" action="lien-he.html" enctype="multipart/form-data">
		<div class=" tablelienhe" style="width:100%">
    	
            <div class="box_input_form has_notify">
                <i class="fa fa-user"></i>
                <input name="ten" type="text" class="input_form" id="ten" size="50" required placeholder="<?=_hovaten?>" value="<?=$_POST['ten']?>"/>
            </div><!--box input contact-->

            <div class="box_input_form has_notify">
                <i class="fa fa-map-marker"></i>
        	   <input name="diachi" type="text"  class="input_form" size="50" required id="diachi" placeholder="<?=_diachi?>"/>
            </div><!--box input contact-->
         
            <div class="box_input_form has_notify">
                <i class="fa fa-phone"></i>
        	   <input name="dienthoai" type="text" class="input_form" id="dienthoai" required size="50" placeholder="<?=_dienthoai?>"/>
            </div><!--box input contact-->
              
            <div class="box_input_form has_notify">
                <i class="fa fa-envelope-o"></i>
            	<input name="email" type="text" class="input_form" size="50" id="email" required placeholder="Email"/>
            </div><!--box input contact-->
            
            <div class="box_input_form has_notify">
                <i class="fa fa-share-alt"></i>
                <input name="tieude" type="text" class="input_form" id="tieude" size="50" required placeholder="<?=_tieude?>"/>
           </div><!--box input contact-->
                
            <div class="box_input_form">
                <textarea name="noidung" cols="50" rows="7"  class="input_form input_form_normal" style="height:150px;" placeholder="<?=_noidung?>"></textarea>
            </div><!--box input contact-->
            <div class="box_input_form">
            	<a class="button transitionAll03" onclick="js_submit('frm');"/><?=_gui?> </a>
    			<a class="button transitionAll03" onclick="document.frm.reset();"/><?=_lamlai?></a>
            </div><!--box input contact-->
    </div><!--end table lien he-->
</form>