<!-- Top fixed navigation -->
<div class="topNav">
    <div class="wrapper">
        <div class="userNav">
            <ul>
                <li><a href="http://<?=$config_url?>" title="" target="_blank"><img src="images/icons/topnav/mainWebsite.png" alt="" /><span>Vào trang web</span></a></li>
            </ul>
        </div>
        <div class="clear"></div>
    </div>
</div>

<!-- Main content wrapper -->
<div class="loginWrapper">
    <div class="widget" id="loginForm">
        <div class="title"><img src="images/icons/dark/files.png" alt="" class="titleIcon" /><h6>Đăng nhập</h6></div>
        <form action="index.php?com=user&act=login"  class="form" method="post">
            <fieldset>
                <div class="formRow">
                    <label for="login">Tên đăng nhập:</label>
                    <div class="loginInput"><input type="text" name="username" required id="username" /></div>
                    <div class="clear"></div>
                </div>
                
                <div class="formRow">
                    <label for="pass">Mật khẩu:</label>
                    <div class="loginInput"><input type="password" name="password" required id="pass" /></div>
                    <div class="clear"></div>
                </div>
                
                <div class="loginControl">
                    <input type="submit" value="Đăng nhập" class="btn btn-primary" />
                    <div class="clear"></div>
                </div>
                <div class="ajaxloader"><img src="images/loader.gif" alt="loader" /></div>
               <?php if($_POST['login_error']){ ?>
                <div id="loginError" style="display: block;">
                        <div class="alert alert-danger"><b>Sai thông tin</b></div>
                </div>
                <?php } ?>
            </fieldset>
        </form>
    </div>
</div>    

