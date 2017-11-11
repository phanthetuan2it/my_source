<div class="logo"> <a href="#" target="_blank" onclick="return false;"> Admin </a></div>
<div class="sidebarSep mt0"></div>
<!-- Left navigation -->
<ul id="menu" class="nav">

<li class="dash" id="menu1"><a class=" active" title="" href="index.php"><span>Trang chủ</span></a></li>
<?php if(count($config['lang'])>1){  ?>
<li class="setting_li" id="menu1"><a href="index.php?com=lang&act=man" title=""><span>Quản lý ngôn ngữ</span></a></li>
<?php } ?>
<li class="categories_li" id="menu2"><a href="" title="" class="exp"><span>Sản phẩm</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=product&act=man_list&type=product">Quản lý danh mục 1</a></li>
    <li><a href="index.php?com=product&act=man_cat&type=product">Quản lý danh mục 2</a></li>
    <?php /* ?>
    <li><a href="index.php?com=product&act=man_item&type=product">Quản lý danh mục 3</a></li>
    <li><a href="index.php?com=product&act=man_sub&type=product">Quản lý danh mục 4</a></li>
    <?php */ ?>
    <li><a href="index.php?com=product&act=man&type=product">Quản lý sản phẩm</a></li>
    <li><a href="index.php?com=order&act=man">Quản lý đơn hàng</a></li>
  </ul>
</li> 

<li class="categories_li" id="menu_bv"><a href="" title="" class="exp"><span>Bài viết</span><strong></strong></a>
  <ul class="sub">
    <?php /* ?>
    <li><a href="index.php?com=baiviet&act=man_list&type=tintuc">Quản lý cấp 1 tin tức </a></li>
    <li><a href="index.php?com=baiviet&act=man_cat&type=tintuc">Quản lý cấp 2 tin tức </a></li>
    <li><a href="index.php?com=baiviet&act=man_item&type=tintuc">Quản lý cấp 3 tin tức </a></li>
    <li><a href="index.php?com=baiviet&act=man_sub&type=tintuc">Quản lý cấp 4 tin tức </a></li>
    <?php */ ?>
    <li><a href="index.php?com=baiviet&act=man&type=tintuc">Quản lý tin tức </a></li>
    <li><a href="index.php?com=baiviet&act=man&type=dichvu">Quản lý dịch vụ </a></li>
    <!-- <li><a href="index.php?com=baiviet&act=man&type=about">Quản lý giới thiệu </a></li> -->
    
  </ul>
</li>
<?php /* ?>
<li class="categories_li" id="menu_abs"><a href="#" title="" class="exp"><span>Album</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=album&act=man_list&type=album" title="">Danh mục album</a></li>
    <li><a href="index.php?com=album&act=man&type=album" title="">Danh sách album</a></li>
  </ul>
</li>
<?php */ ?>
<?php /* ?>
<li class="categories_li" id="menu7"><a href="#" title="" class="exp"><span>Thành viên</span><strong></strong></a>
   <ul class="sub">
    <li><a href="index.php?com=thanhvien&act=man" title="" >Quản lý thành viên</a>
    </ul>
</li>
<?php */ ?>
<?php /* ?>
<li class="categories_li" id="menu7"><a href="#" title="" class="exp"><span>Chi nhánh</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=chinhanh&act=man_list&type=chinhanh">Tỉnh thành</a></li>
    <li><a href="index.php?com=chinhanh&act=man_cat&type=chinhanh">Quận huyện</a></li>
    <li><a href="index.php?com=chinhanh&act=man_item&type=chinhanh">Phường xã</a></li>
    <li><a href="index.php?com=chinhanh&act=man_sub&type=chinhanh">Đường phố</a></li>
    <li><a href="index.php?com=chinhanh&act=man&type=chinhanh">Quản lý chi nhánh </a></li>
  </ul>
</li> 
<?php */ ?>
<?php /* ?>
<li class="categories_li" id="menu7"><a href="#" title="" class="exp"><span>Hỏi đáp</span><strong></strong></a>
   <ul class="sub">
    <li><a href="index.php?com=hoidap&act=man" title="" >Quản lý hỏi đáp</a>
    </ul>
</li> 
<?php */ ?>
<li class="categories_li" id="menu_tt"><a href="" title="" class="exp"><span>Trang tĩnh</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=info&act=capnhat&type=gioithieu">Giới thiệu</a></li>

  </ul>
</li>
<?php /* ?>
  <li class="categories_li" id="menu_tg"><a href="" title="" class="exp"><span>Tags</span><strong></strong></a>
    <ul class="sub">
      <li><a href="index.php?com=tags&act=man&type=tags">Quản lý tags</a></li>

    </ul>
  </li>
<?php */ ?>
<li class="categories_li" id="menu5"><a href="#" title="" class="exp"><span>Thông tin công ty</span><strong></strong></a>
  <ul class="sub">
    <?php /* ?><li><a href="index.php?com=background&act=capnhat&type=bgweb" title="">Background</a></li><?php */ ?>
    <li><a href="index.php?com=bannerqc&act=capnhat&type=logo" title="">Logo</a></li>
    <li><a href="index.php?com=bannerqc&act=capnhat&type=banner" title="">banner</a></li>
    <li><a href="index.php?com=bannerqc&act=capnhat&type=favicon" title="">Favicon</a></li>
    <li><a href="index.php?com=bannerqc&act=capnhat&type=popup" title="">popup</a></li>
    <li><a href="index.php?com=lkweb&act=man&type=mxh" title="">Mạng xã hội</a></li>
    <li><a href="index.php?com=company&act=capnhat&type=lienhe" title="">Liên hệ</a></li>
    <li><a href="index.php?com=company&act=capnhat&type=footer" title="">Footer</a></li>
    
    <li><a href="index.php?com=setting&act=capnhat" title="">Cấu hình chung</a></li>
    <li><a href="index.php?com=user&act=admin_edit" title="">Thay đổi thông tin</a></li>
    <?php /* ?>
    <li><a href="index.php?com=lkweb&act=man&type=footer_item" title="">Footer</a></li>
    <li><a href="index.php?com=newsletter&act=man" title="">Gửi Mail</a></li>
    <li><a href="index.php?com=phanquyen&act=man" title="">Phân quyền</a></li>
    <?php */ ?>
  </ul>
</li>
<?php /* ?>
<li class="categories_li" id="menu6"><a href="#" title="" class="exp"><span>Hổ Trợ Online</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=lkweb&act=man&type=lkweb" title="">Liên kết website</a></li>
    <li><a href="index.php?com=yahoo&act=man&type=yahoo" title="">Quản lý yahoo</a></li>
  </ul>
</li>
<?php */ ?>
<li class="categories_li" id="menu7"><a href="#" title="" class="exp"><span>Hình Ảnh - Slider</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=photo&act=man_photo&type=slider" title="">Hình ảnh slider</a></li>
    <li><a href="index.php?com=photo&act=man_photo&type=doitac" title="">Đối tác</a></li>
  </ul>
</li>
<?php /* ?>
<li class="categories_li" id="menu_v"><a href="#" title="" class="exp"><span>Video</span><strong></strong></a>
  <ul class="sub">
    <li><a href="index.php?com=video&act=man&type=video" title="">Video</a></li>
  </ul>
</li>
<?php */ ?>

</ul>
