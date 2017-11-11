<div class="control_frm" style="margin-top:25px;">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
        	            <li><a href="index.php?com=laytin_rss&act=man"><span>Lấy tin RSS</span></a></li>
                                    <li class="current"><a href="#" onclick="return false;">Tất cả</a></li>
        </ul>
        <div class="clear"></div>
    </div>
</div>
<script language="javascript">
	function CheckDelete(l){
		if(confirm('Bạn có chắc muốn xoá mục này?'))
		{
			location.href = l;	
		}
	}	
	function ChangeAction(str){
		if(confirm("Bạn có chắc chắn?"))
		{
			document.f.action = str;
			document.f.submit();
		}
	}		
</script>
<form name="f" id="f" method="post">
<div class="control_frm" style="margin-top:0;">
  	<div style="float:left;">
    	<input type="button" class="btn btn-primary" value="Thêm" onclick="location.href='index.php?com=laytin_rss&act=add'" />
        <!-- <input type="button" class="btn btn-primary" value="Hiện" onclick="ChangeAction('index.php?com=laytin_rss&act=man&multi=show');return false;" />
        <input type="button" class="btn btn-primary" value="Ẩn" onclick="ChangeAction('index.php?com=laytin_rss&act=man&multi=hide');return false;" />
        <input type="button" class="btn btn-primary" value="Xoá" onclick="ChangeAction('index.php?com=laytin_rss&act=man&multi=del');return false;" /> -->
    </div>    
</div>



<div class="widget">
  <div class="title"><span class="titleIcon">
    <input type="checkbox" id="titleCheck" name="titleCheck" />
    </span>
    <h6>Danh sách liên kết web</h6>
  </div>
  <table cellpadding="0" cellspacing="0" width="100%" class="sTable withCheck mTable" id="checkAll">
    <thead>
      <tr>
        <td></td>
        <td class="tb_data_small"><a href="#" class="tipS" style="margin: 5px;">Thứ tự</a></td>
        <td width="150"><div>Tên<span></span></div></td>
        <td width="50">Thao tác</td>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td colspan="10">
        <div class="pagination">
            <?=pagesListLimitadmin($url_link , $totalRows , $pageSize, $offset)?>            
        </div></td>
      </tr>
    </tfoot>
    <tbody>
          <?php for($i=0, $count=count($items); $i<$count; $i++){?>
          <tr>
        <td>
            <input type="checkbox" name="iddel[]" value="<?=$items[$i]['id']?>" id="check<?=$i?>" />
        </td>
        <td align="center">
            <input type="text" value="<?=$items[$i]['stt']?>" name="ordering[]" onkeypress="return OnlyNumber(event)" class="tipS smallText" original-title="Nhập số thứ tự danh mục" id="number<?=$items[$i]['id']?>" onchange="return updateNumber('laytin_rss', '<?=$items[$i]['id']?>')" />
            <div id="ajaxloader"><img class="numloader" id="ajaxloader<?=$items[$i]['id']?>" src="images/loader.gif" alt="loader" /></div>
        </td>       
        <td>
            <a href="#" data-toggle="modal" data-target="#myModal" class="tipS SC_bold"><strong class="type_rss"><?=$items[$i]['type']?></strong> - <?=$items[$i]['ten_vi']?></a>
        </td>
       
       
        
        <td class="actBtns">
            <a href="index.php?com=laytin_rss&act=edit&id=<?=$items[$i]['id']?>" title="" class="smallButton tipS" original-title="Sửa danh mục"><img src="./images/icons/dark/pencil.png" alt=""></a>
            <a href="" onclick="CheckDelete('index.php?com=laytin_rss&act=delete&id=<?=$items[$i]['id']?>'); return false;" title="" class="smallButton tipS" original-title="Xóa danh mục"><img src="./images/icons/dark/close.png" alt=""></a>
        </td>
      </tr>
           <?php } ?> 
                </tbody>
  </table>
</div>
</form>               

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>