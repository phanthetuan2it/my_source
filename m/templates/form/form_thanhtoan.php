<form method="post" name="frm_order" action="thanh-toan.html" enctype="multipart/form-data"  id="frm_order">
<div class=" tablelienhe" style="width:100%">

        <div class="row_input_form">
            <label><?=_hovaten?> </label>
            <div class="box_input_form">
               <input type="text" id="ten_thanhtoan" class="input_form" required name="ten_thanhtoan" placeholder=" <?=_hovaten?>"/>
            </div>
        </div><!--row input form-->


        <div class="row_input_form">
            <label><?=_diachi?> </label>
            <div class="box_input_form">
               <input type="text" id="diachi_thanhtoan" class="input_form" required name="diachi_thanhtoan" placeholder=" <?=_diachi?>"/>
            </div>
        </div><!--row input form-->

        


        <div class="row_input_form">
            <label><?=_dienthoai?> </label>
            <div class="box_input_form">
               <input type="text" id="dienthoai_thanhtoan" class="input_form" required name="dienthoai_thanhtoan" placeholder=" <?=_dienthoai?>"/>
            </div>
        </div><!--row input form-->

        <div class="row_input_form">
            <label><?=_email?> </label>
            <div class="box_input_form">
               <input type="email" id="email_thanhtoan" class="input_form" required name="email_thanhtoan" placeholder=" <?=_email?>"/>
            </div>
        </div><!--row input form-->

  <div class="clear"></div>
  <br />
    <div class="row_input_form">
        <div class="box_input_form">
            <textarea name="noidung_thanhtoan" cols="50" rows="7"  class="input_form input_form_normal" style="height:150px;" placeholder="<?=_noidung?>"></textarea>
        </div>
    </div><!--box input contact-->

    <div class="row_input_form">
        <div class="box_input_form">
           <input  id="submit_thanhtoan" class="button" title="Thanh Toán" alt="Thanh Toán" align="right" type="submit" name="next" value="Thanh Toán" style="cursor:pointer;" style="padding:2px;" class="g_muatiep"/>
        </div>
    </div><!--box input contact-->
</div><!--end table lien he-->
</form>