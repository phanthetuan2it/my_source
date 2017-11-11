<table style="width:100%;color:#333;border:1px solid #e9e9e9;">
					<thead>
						<tr style="background-color: #fff;">
							<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Hình ảnh</th>
							<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Tên</th>
							<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Số lượng</th>
							<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Tổng</th>
							<?php if($com!='thanh-toan'){ ?>
							<th style="text-align:center;padding:5px;white-space:nowrap;font-size: 13px;border:1px solid #e9e9e9;">Thao tác</th>
							<?php } ?>
						</tr>
					</thead><!--head-->
					<tfoot>
						<tr style="border:1px solid #e9e9e9;">
							<td colspan="5" style="text-align:right;padding:10px 5px;font-weight: bold;color:#E53C2F;font-size: 13px;"><b>Tổng giá : <span class="price_all_cart"><?=number_format(get_order_total(),0, ',', '.')?> đ</span></b></td>
						</tr>
						<?php if($com!='thanh-toan'){ ?>
						<tr>
							<td colspan="5" style="text-align:right;padding:5px;">
								<input type="button" class="button" value="Mua tiếp" onclick="window.location='index.php'">
								<input type="button" class="button" value="Xóa tất cả" onclick="clear_cart()">
								<input type="button" class="button" value="Cập nhật" onclick="update_cart()">
								<input type="button" class="button" value="Thanh toán" onclick="window.location='thanh-toan.html'">
							</td>
						</tr>
						<?php } ?>
					</tfoot><!--footer-->
					<tbody>
						<?php
						$max=count($_SESSION['cart']);
						for ($i=0;$i<$max;$i++) { 
						#======================================
						$pid=$_SESSION['cart'][$i]['productid'];
						$q=$_SESSION['cart'][$i]['qty'];
						$songay=$_SESSION['cart'][$i]['songay'];
						$pname=get_product_name($pid);
						#======================================
						?>
						<tr style="border-bottom:1px solid #ecedef;">
							<td style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;">
								<img src="http://<?=$config_url.'/'._upload_product_l.get_thumb($pid)?>" width="60" />
							</td>
							<td style="text-align:left;padding:5px 5px;border:1px solid #e9e9e9;">
								<h3 class="name_p_cart" style="font-size:14px;font-weight:bold;"><?=$pname?></h3>
								<div class="price_p_cart_name" style="font-size:15px;color:#f00;"><?=number_format(get_price($pid),0, ',', '.')?> đ</div>
							</td>
							<td style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;">
								<div class="box_number_cart">
									<?php if($com!='thanh-toan'){ ?>
									<button class="minius_cart" style="width: 20px;height: 20px;background-color: #E1E8EE;border-radius: 3px;border: none; cursor: pointer;" data-action="-" data-id="<?=$pid?>"><img src="images/commont/minus.svg" alt="minius cart"/></button>
									<input type="text" class="number_cart" name="product<?=$pid?>" value="<?=$q?>" maxlength="3" size="2" style="background:#fff;text-align:center;border-radius:2px;border:none;outline:none; padding: 5px 0px;" />
									<button class="plus_cart" style="width: 20px;height: 20px;background-color: #E1E8EE;border-radius: 6px;border: none; cursor: pointer;" data-action="+" data-id="<?=$pid?>"><img src="images/commont/plus.svg" alt="plus cart"/></button>
									<?php }else{ ?>
									<input type="text" class="number_cart" name="product<?=$pid?>" readonly="readonly" value="<?=$q?>" maxlength="3" size="2" style="background:#fff;text-align:center;border-radius:2px;border:none;outline:none; padding: 5px 0px;" />
									<?php } ?>
								
								</div><!--box number cart-->
							</td>
							<td  style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;"><div class="price_p_cart" style="text-align: center; font-size: 16px; color: #43484D;"><?=number_format(get_price($pid)*$q,0, ',', '.') ?> đ</div></td>
							<?php if($com!='thanh-toan'){ ?>
							<td  style="text-align:center;padding:5px 5px;border:1px solid #e9e9e9;">
								<a href="javascript:del(<?=$pid?>)"><img src="images/commont/delete_cart.svg" border="0" width="10" /></a>
							</td>
							<?php } ?>
						</tr>
						<?php } //end for cart ?>
					</tbody><!--body-->
				</table>