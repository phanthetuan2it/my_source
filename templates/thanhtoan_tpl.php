<script language="javascript">
	function clear_cart(){
		if(confirm('Bạn có muốn xóa tất giỏ hàng không ?')){
			document.form1.command.value='clear';
			document.form1.submit();
		}
	}
	function update_cart(){
		document.form1.command.value='update';
		document.form1.submit();
	}
</script>
<script language="javascript">
	function xoa(pid){
		if(confirm('Xóa sản phẩm này ! ')){
			document.form_giohang.pid.value=pid;
			document.form_giohang.command.value='delete';
			document.form_giohang.submit();
		}
	}
</script>

<form name="form_giohang" action="index.php?com=thanh-toan" method="get">
	<input type="hidden" name="com" value="thanh-toan" />
	<input type="hidden" name="pid" />
    <input type="hidden" name="command" />
</form>

<?php
if($_REQUEST['command']=='delete' && $_REQUEST['pid']>0){
		remove_pro_thanh($_REQUEST['pid']);
	}
	else if($_REQUEST['command']=='clear'){
		unset($_SESSION['cart']);
	}
		else if($_REQUEST['command']=='update'){
		$max=count($_SESSION['cart']);
		for($i=0;$i<$max;$i++){
			$pid=$_SESSION['cart'][$i]['productid'];
			$q=$_REQUEST['product'.$pid];
			if($q>0 && $q<=999){
				$soluong = str_replace(",", '.', $q);
				$_SESSION['cart'][$i]['qty']=$soluong;
			}
			else{
				$msg='Some proudcts not updated!, quantity must be a number between 1 and 999';
			}
		}
	}
?>

<link href="css/giohang.css" rel="stylesheet" type="text/css" />

<div class="sub_main">
  <div class="title_main"><span>Thanh toán</span></div>
  <div class="content_main">
  	<?php if($_SESSION['cart']){ ?>
     
             <input type="hidden" name="pid" />
				<input type="hidden" name="command" />
				<div class="contain_table_giohang">
				<?php include_once _template.'layout/table_cart.php'; ?>
				</div><!--end contain table gio hang-->
    
   <?php
   //if(get_order_total()!=0)
  // {
   ?>
   <?php include_once _template.'/form/form_thanhtoan.php'; ?>
    
   
    
    <div style=" float:right; padding-bottom:20px; padding-top:20px;" align="right">
      
        
        <input name="mod" type="hidden" id="mod3">
    </div>
    <?php //}?>
    
   
        </div></div>
        <?php }else{ ?>
        <div class="alert alert-danger"><strong>Không có sản phẩm nào trong giỏ hàng</strong></div>
    <?php } ?>
  </div><!--content main-->
</div><!--sub main-->