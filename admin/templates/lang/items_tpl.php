<div class="control_frm" style="margin-top:25px;">
    <div class="bc">
        <ul id="breadcrumbs" class="breadcrumbs">
            <li><a href="index.php?com=lang&act=man"><span>Quản lý ngôn ngữ website</span></a></li>
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
<form name="f" id="f" method="post" class="form">
<div class="contain_list_action">
  <div id="box_list_action" class="control_frm" style="margin-top:0;">
     
        <input type="button" class="btn btn-primary" value="Thêm" onclick="location.href='index.php?com=lang&act=add&type=<?=$_GET['type']?>'" />
        <!--   <input type="button" class="btn btn-primary" value="Hiện" onclick="ChangeAction('index.php?com=lang&act=man&multi=show&type=<?=$_GET['type']?>');return false;" />
          <input type="button" class="btn btn-primary" value="Ẩn" onclick="ChangeAction('index.php?com=lang&act=man&multi=hide&type=<?=$_GET['type']?>');return false;" /> -->
          <input type="button" class="btn btn-primary" value="Xoá" onclick="ChangeAction('index.php?com=lang&act=man&multi=del&type=<?=$_GET['type']?>');return false;" />
          <input type="button" class="btn btn-primary" value="Cập nhật" onclick="ChangeAction('index.php?com=lang&act=capnhat&type=<?=$_GET['type']?>');return false;" />
  </div>
</div><!--contain list action-->


<div class="widget">
  <div class="title">
   <span class="titleIcon">
    <input type="checkbox" id="titleCheck" name="titleCheck" />
    </span>
    <h6>Danh sách liên kết web</h6>
  </div>
  <table cellpadding="0" cellspacing="0" width="100%" class="sTable withCheck mTable" id="checkAll">
    <thead>
      <tr>
        <td></td>
        <?php foreach ($config['lang'] as $key => $value) { ?>
        <td width="150"><div><?=$value?></div></td>
        <?php } ?>
       
        <td style="width:70px;">Thao tác</td>
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

      <?php foreach ($config['lang'] as $key => $value) { 
        if($key=='vi'){  ?>
        <td>
          <?=$items[$i]['define_text']?>
         
        </td>
        <?php } else{ 
          $d->reset();
          $d->query("select define_text from #_lang where id_parent=".$items[$i]['id']." and lang='".$key."'");
          $row=$d->fetch_array();
        ?>
        <td>
           <input type="text" name="<?=$key?>_<?=$items[$i]['id']?>" value="<?=$row['define_text']?>" class="tipS" />
        </td>
        <?php }
       } ?>
       
        
        <td class="actBtns">
            <a href="index.php?com=lang&act=edit&id=<?=$items[$i]['id']?>&type=<?=$_GET['type']?>" title="" class="smallButton tipS" original-title="Sửa danh mục"><img src="./images/icons/dark/pencil.png" alt=""></a>
            <a href="" onclick="CheckDelete('index.php?com=lang&act=delete&id=<?=$items[$i]['id']?>&type=<?=$_GET['type']?>'); return false;" title="" class="smallButton tipS" original-title="Xóa danh mục"><img src="./images/icons/dark/close.png" alt=""></a>
        </td>
      </tr>
           <?php } ?> 
                </tbody>
  </table>
  <?=$paging?>
</div>
</form>               

<script type="text/javascript">
  $(window).scroll(function(){
    var s_top=$(window).scrollTop();
    var top_box=$('.contain_list_action').offset().top;
    if(s_top>=top_box){
      var move_top=s_top-top_box;
      $('#box_list_action').css({'position':'fixed','top':'0px','left':'auto','background':'#fff','z-index':'1000'});
    }else{
      $('#box_list_action').css({'position':'relative','top':'auto','left':'auto'});
    }
  });
</script>