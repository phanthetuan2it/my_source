<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>CKFinder - Sample - CKEditor</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="../sample.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1 class="samples">
		CKFinder - Sample - CKEditor Integration
	</h1>
	<div class="description">
		CKFinder can be easily integrated with <a href="http://ckeditor.com">CKEditor</a>. Try it now, by clicking
		the "Image" or "Link" icons and then the "<strong>Browse Server</strong>" button.</div>
<?php

// Helper function for this sample file.
function printNotFound( $ver )
{
	static $warned;

	if (!empty($warned))
		return;

	echo '<p><br><strong><span class="error">Error</span>: '.$ver.' not found</strong>. ' .
		'This sample assumes that '.$ver.' (not included with CKFinder) is installed in ' .
		'the "ckeditor" sibling folder of the CKFinder installation folder. If you have it installed in ' .
		'a different place, just edit this file, changing the wrong paths in the include ' .
		'(line 57) and the "basePath" values (line 70).</p>' ;
	$warned = true;
}

// This is a check for the CKEditor PHP integration file. If not found, the paths must be checked.
// Usually you'll not include it in your site and use correct path in line 57 and basePath in line 70 instead.
// Remove this code after correcting the include_once statement.
if ( !@file_exists( '../../../ckeditor/ckeditor.php' ) )
{
	if ( @file_exists('../../../ckeditor/ckeditor.js') || @file_exists('../../../ckeditor/ckeditor_source.js') )
		printNotFound('CKEditor 3.1+');
	else
		printNotFound('CKEditor');
}

include_once '../../../ckeditor/ckeditor.php' ;
require_once '../../ckfinder.php' ;

// This is a check for the CKEditor class. If not defined, the paths in lines 57 and 70 must be checked.
if (!class_exists('CKEditor'))
{
	printNotFound('CKEditor');
}
else
{
	$initialValue = '<p>Just click the <b>Image</b> or <b>Link</b> button, and then <b>&quot;Browse Server&quot;</b>.</p>' ;

	$ckeditor = new CKEditor( ) ;
	$ckeditor->basePath	= '../../../ckeditor/' ;

	// Just call CKFinder::SetupCKEditor before calling editor(), replace() or replaceAll()
	// in CKEditor. The second parameter (optional), is the path for the
	// CKFinder installation (default = "/ckfinder/").
	CKFinder::SetupCKEditor( $ckeditor, '../../' ) ;

	$ckeditor->editor('CKEditor1', $initialValue);
}

?>
	<div id="footer">
		<hr />
		<p>
			CKFinder - Ajax File Manager - <a class="samples" href="http://cksource.com/ckfinder/">http://cksource.com/ckfinder</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2013, <a class="samples" href="http://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>CKFinder - Sample - FCKeditor Integration</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="../sample.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1 class="samples">
		CKFinder - Sample - FCKeditor Integration
	</h1>
	<div class="description">
		CKFinder can be easily integrated with FCKeditor. Try it now, by clicking
		the "Image" or "Link" icons and then the "<strong>Browse Server</strong>" button.</div>
	<p>
<?php

include_once '../../../fckeditor/fckeditor.php' ;
require_once '../../ckfinder.php' ;

// This is a check for the FCKeditor class. If not defined, the paths must be checked.
if ( !class_exists( 'FCKeditor' ) )
{
	echo
		'<br><strong><span class="error">Error</span>: FCKeditor not found</strong>. ' .
		'This sample assumes that FCKeditor (not included with CKFinder) is installed in ' .
		'the "fckeditor" sibling folder of the CKFinder installation folder. If you have it installed in ' .
		'a different place, just edit this file, changing the wrong paths in the include ' .
		'(line 31) and the "BasePath" values (line 47).' ;
}
else
{
	$fckeditor = new FCKeditor( 'FCKeditor1' ) ;
	$fckeditor->BasePath	= '../../../fckeditor/' ;
	$fckeditor->Value		= '<p>Just click the <b>Image</b> or <b>Link</b> button, and then <b>&quot;Browse Server&quot;</b>.</p>' ;

	// Just call CKFinder::SetupFCKeditor before calling Create() or CreateHtml()
	// in FCKeditor. The second parameter (optional), is the path for the
	// CKFinder installation (default = "/ckfinder/").
	CKFinder::SetupFCKeditor( $fckeditor, '../../' ) ;

	$fckeditor->Create() ;
}

?>
	</p>
	<div id="footer">
		<hr />
		<p>
			CKFinder - Ajax File Manager - <a class="samples" href="http://cksource.com/ckfinder/">http://cksource.com/ckfinder</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2013, <a class="samples" href="http://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>CKFinder - Sample - Popup</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="../sample.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1 class="samples">
		CKFinder - Sample - Popup<br />
	</h1>
	<div class="description">
	The example of opening CKFinder in a popup window is available in the &quot;_samples&quot; directory. Click <a href="../popup.html">here</a> to open it.
	</div>
	<div id="footer">
		<hr />
		<p>
			CKFinder - Ajax File Manager - <a class="samples" href="http://cksource.com/ckfinder/">http://cksource.com/ckfinder</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2013, <a class="samples" href="http://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>CKFinder - Sample - Popups</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="../sample.css" rel="stylesheet" type="text/css" />
</head>
<body>
	<h1 class="samples">
		CKFinder - Sample - Popups<br />
	</h1>
	<div class="description">
	The example of opening multiple CKFinder instances in popup windows is available in the &quot;_samples&quot; directory. Click <a href="../popups.html">here</a> to open it.
	</div>
	<div id="footer">
		<hr />
		<p>
			CKFinder - Ajax File Manager - <a class="samples" href="http://cksource.com/ckfinder/">http://cksource.com/ckfinder</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2013, <a class="samples" href="http://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
	</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  INDX( 	 ��           (   8  �                            4�    p Z     3�    cc�)�� j�K�g�x���#��cc�)��       x              c k e d i t o r . p h p       5�    p \     3�    cc�)�� j�K�g�x���#��cc�)��       �
              f c k e d i t o r . p h p     5�    p Z     3�    cc�)�� j�K�g�x���#��cc�)��       �
              F C K E D I ~ 1 . P H P       6�    h T     3�    cc�)�� j�K�g�����#��cc�)��       �              	p o p u p . p h p     7�    h V     3�    cc�)�� j�K�g�����#��cc�)��       �              
p o p u p s . p h p   8�    p ^     3�    f��)�� j�K�g�����#��f��)��       �              s t a n d a l o n e . p h p   8�    p Z     3�    f��)�� j�K�g�����#��f��)��       �              S T A N D A ~ 1 . P H P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!--
 * CKFinder
 * ========
 * http://cksource.com/ckfinder
 * Copyright (C) 2007-2013, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
-->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>CKFinder - Sample - Standalone</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="robots" content="noindex, nofollow" />
	<link href="../sample.css" rel="stylesheet" type="text/css" />
	<style type="text/css">

		/* By defining CKFinderFrame, you are able to customize the CKFinder frame style */
		.CKFinderFrame
		{
			border: solid 2px #e3e3c7;
			background-color: #f1f1e3;
		}

	</style>
	<script type="text/javascript">

// This is a sample function which is called when a file is selected in CKFinder.
function ShowFileInfo( fileUrl, data )
{
	var msg = 'The selected URL is: ' + fileUrl + '\n\n';
	// Display additional information available in the "data" object.
	// For example, the size of a file (in KB) is available in the data["fileSize"] variable.
	if ( fileUrl != data['fileUrl'] )
		msg += 'File url: ' + data['fileUrl'] + '\n';
	msg += 'File size: ' + data['fileSize'] + 'KB\n';
	msg += 'Last modified: ' + data['fileDate'];

	alert( msg );
}

	</script>
</head>
<body>
	<h1 class="samples">
		CKFinder - Sample - Standalone
	</h1>
	<div class="description">
		CKFinder may be used in standalone mode inside any page, to create a repository
		manager with ease. You may define a custom JavaScript function to be called when
		an image is selected (double-clicked).</div>
	<p style="padding-left: 30px; padding-right: 30px;">
<?php

require_once '../../ckfinder.php' ;

// You can use the "CKFinder" class to render CKFinder in a page:
$finder = new CKFinder() ;
$finder->BasePath = '../../' ;	// The path for the installation of CKFinder (default = "/ckfinder/").
$finder->SelectFunction = 'ShowFileInfo' ;
// The default height is 400.
$finder->Height = 600;
$finder->Create() ;

// It can also be done in a single line, calling the "static"
// Create( basePath, width, height, selectFunction ) function:
// CKFinder::CreateStatic( '../../', null, null, 'ShowFileInfo' ) ;

?>
	</p>
	<div id="footer">
		<hr />
		<p>
			CKFinder - Ajax File Manager - <a class="samples" href="http://cksource.com/ckfinder/">http://cksource.com/ckfinder</a>
		</p>
		<p id="copy">
			Copyright &copy; 2003-2013, <a class="samples" href="http://cksource.com/">CKSource</a> - Frederico Knabben. All rights reserved.
		</p>
	</div>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <?php if(!defined('_lib')) die("Error");
/*
	$config['servername'] = 'localhost';
	$config['username'] = 'root';
	$config['password'] = 'admin';
	$config['database'] = 'cafechoi';

	$d = new database($config);
	#$d->init($config);
	#$d->connect();
	
	// insert
	$data['ten'] = 'Danh mục 1';
	$data['mota'] = 'Mô tả cho Danh mục 1';
	$data['active'] = '0';

	if(!$d->insert($data)){
		$d->showError();
		$d->debug();
	}
	
	// update
	$data['active'] = '1';
	$d->setWhere("id",3);
	
	if(!$d->update($data)){
		$d->showError();
		$d->debug();
	}

	// select
	$d->setTable("pro_cat");
	$d->setWhere("id",3);
	$d->setOrder("id desc");
	$d->setLimit("0,3");
	
	if(!$d->select()){
		$d->showError();
		$d->debug();
	}else{
		var_dump($d->result_array());
	}

	// delete
	$d->setTable("pro_cat");
	$d->setWhere("id",3);
	$d->delete();
	
*/	
class database{
	
	var $db;
	var $result;
	var $insert_id;
	var $sql = "";
	var $refix = "";

	var $servername;
	var $username;
	var $password;
	var $database;
	
	var $table = "";
	var $where = "";
	var $order = "";
	var $limit = "";
	
	var $error = array();

	function database($config = array()){
		if(!empty($config)){
			$this->init($config);
			$this->connect();
		}
	}

	function init($config = array()){
		foreach($config as $k=>$v)
			$this->$k = $v;
	}
	
	function connect(){
		$this->db = @mysql_connect($this->servername, $this->username, $this->password);
		
		if( !$this->db){
			die('Could not connect: ' . mysql_error());
		}
		
		if( !mysql_select_db($this->database, $this->db)){
			die(mysql_errno($this->db) . ": " . mysql_error($this->db));
			return false;
		}
		
		mysql_query('SET NAMES "utf8"',$this->db);
	}
	
	function query($sql=""){
		if($sql)
			$this->sql = str_replace('#_', $this->refix, $sql);
		$this->result = mysql_query($this->sql,$this->db);
		if(!$this->result){
			#die(mysql_errno($this->db) . ": " . mysql_error($this->db));
			die("syntax error: ".$this->sql);
		}
		return $this->result;	
	}
	
	function insert($data = array()){
		$key = "";
		$value = "";
		foreach($data as $k => $v){
			$key .= "," . $k;
			$value .= ",'" . $v  ."'";
		}
		if($key{0} == ",") $key{0} = "(";
		$key .= ")";
		if($value{0} == ",") $value{0} = "(";
		$value .= ")";
		$this->sql = "insert into ".$this->refix.$this->table.$key." values ".$value;
		$this->query();
		$this->insert_id = mysql_insert_id();
		return $this->result;
	}
	
	function update($data = array()){
		$values = "";
		foreach($data as $k => $v){
			$values .= ", " . $k . " = '" . $v  ."' ";
		}
		if($values{0} == ",") $values{0} = " ";
		$this->sql = "update " . $this->refix . $this->table . " set " . $values;
		$this->sql .= $this->where;
		return $this->query();
	}
	
	function delete(){
		$this->sql = "delete from " . $this->refix . $this->table . $this->where;
		return $this->query();
	}
	
	function select($str = "*"){
		$this->sql = "select " . $str;
		$this->sql .= " from " . $this->refix .$this->table;
		$this->sql .=  $this->where;
		$this->sql .=  $this->order;
		$this->sql .=  $this->limit;
		return $this->query();
	}
	
	function num_rows(){
		return mysql_num_rows($this->result);
	}
	
	function fetch_array(){
		return mysql_fetch_assoc($this->result);
	}
	
	function result_array(){
		$arr = array();
		while ($row = mysql_fetch_assoc($this->result)) 
			$arr[] = $row;
		return $arr;
	}
	
	function setTable($str){
		$this->table = $str;
	}
	
	function setWhere($key, $value=""){
		if($value!=""){
			if($this->where == "")
				$this->where = " where " . $key . " = '" . $value . "'";
			else
				$this->where .= " and " . $key . " = '" . $value ."'";
		}
		else{
			if($this->where == "")
				$this->where = " where " . $key ;
			else
				$this->where .= " and " . $key ;
		}
	}
	
	function setWhereOr($key, $value){
		if($value!=""){
			if($this->where == "")
				$this->where = " where " . $key . " = " . $value;
			else
				$this->where .= " or " . $key . " = " . $value;
		}
		else{
			if($this->where == "")
				$this->where = " where " . $key ;
			else
				$this->where .= " or " . $key ;
		}
	}
	
	function setOrder($str){
		$this->order = " order by " . $str;
	}
	
	function setLimit($str){
		$this->limit = " limit " . $str;
	}
	
	function setError($msg){
		$this->error[] = $msg;
	}
	
	function showError(){
		foreach($this->error as $value)
			echo '<br>'.$value;
	}
	
	function reset(){
		$this->sql = "";
		$this->result = "";
		$this->where = "";
		$this->order = "";
		$this->limit = "";
		$this->table = "";
	}
	
	function debug(){
		echo "<br> servername: ".$this->servername;
		echo "<br> username: ".$this->username;
		echo "<br> password: ".$this->password;
		echo "<br> database: ".$this->database;
		echo "<br> ".$this->sql;
	}
	
	/**
	 * Escape String
	 *
	 * @access	public
	 * @param	string
	 * @return	string
	 */
	function escape_str($str)	
	{	
		if (is_array($str))
    	{
    		foreach($str as $key => $val)
    		{
    			$str[$key] = $this->escape_str($val);
    		}
    		
    		return $str;
    	}
	
		if (function_exists('mysql_real_escape_string') AND is_resource($this->db))
		{
			return mysql_real_escape_string($str, $this->db);
		}
		elseif (function_exists('mysql_escape_string'))
		{
			return mysql_escape_string($str);
		}
		else
		{
			return addslashes($str);
		}
	}
	
	function xssClean($str){
		#$str = htmlentities($str, ENT_QUOTES, "UTF-8");
		$str = str_replace("'", '&#039;', $str);
		$str = str_replace('"', '&quot;', $str);
		$str = str_replace('<', '&lt;', $str);
		$str = str_replace('>', '&gt;', $str);
		#$str = addslashes($str);
		return $str;
	}
}
?>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <?php
////////////////////////////////////////////////////
// PHPMailer - PHP email class
//
// Class for sending email using either
// sendmail, PHP mail(), or SMTP.  Methods are
// based upon the standard AspEmail(tm) classes.
//
// Copyright (C) 2001 - 2003  Brent R. Matzelle
//
// License: LGPL, see LICENSE
////////////////////////////////////////////////////

/**
 * PHPMailer - PHP email transport class
 * @package PHPMailer
 * @author Brent R. Matzelle
 * @copyright 2001 - 2003 Brent R. Matzelle
 */
 
 
/* example
	$mail = new mosPHPMailer;
	
	$address = "nthaih@yahoo.com";
	$name = "hà ngọc thái";
	
	$mail->IsHTML(true);
	$mail->IsMail();
	$mail->From = "nthaih@yahoo.com";
	$mail->FromName = "hà ngọc thái";
	$mail->Sender = "sender hà ngọc thái";
	$mail->AddAddress($address, $name);
	#$mail->AddCC($address, $name);
	#$mail->AddBCC($address, $name);
	#$mail->AddReplyTo($address, $name);
	$mail->Subject = "subject here";
	$mail->Body = "content here";
	$result = $mail->Send();
*/ 
 
 
class mosPHPMailer
{
	/////////////////////////////////////////////////
	// PUBLIC VARIABLES
	/////////////////////////////////////////////////

	/**
	 * Email priority (1 = High, 3 = Normal, 5 = low).
	 * @var int
	 */
	var $Priority		  = 3;

	/**
	 * Sets the CharSet of the message.
	 * @var string
	 */
	#var $CharSet			= "iso-8859-1";
	var $CharSet			= "utf-8";

	/**
	 * Sets the Content-type of the message.
	 * @var string
	 */
	var $ContentType		= "text/plain";

	/**
	 * Sets the Encoding of the message. Options for this are "8bit",
	 * "7bit", "binary", "base64", and "quoted-printable".
	 * @var string
	 */
	var $Encoding		  = "8bit";

	/**
	 * Holds the most recent mailer error message.
	 * @var string
	 */
	var $ErrorInfo		 = "";

	/**
	 * Sets the From email address for the message.
	 * @var string
	 */
	var $From				= "root@localhost";

	/**
	 * Sets the From name of the message.
	 * @var string
	 */
	var $FromName			= "Root User";

	/**
	 * Sets the Sender email (Return-Path) of the message.  If not empty,
	 * will be sent via -f to sendmail or as 'MAIL FROM' in smtp mode.
	 * @var string
	 */
	var $Sender			= "";

	/**
	 * Sets the Subject of the message.
	 * @var string
	 */
	var $Subject			= "";

	/**
	 * Sets the Body of the message.  This can be either an HTML or text body.
	 * If HTML then run IsHTML(true).
	 * @var string
	 */
	var $Body				= "";

	/**
	 * Sets the text-only body of the message.  This automatically sets the
	 * email to multipart/alternative.  This body can be read by mail
	 * clients that do not have HTML email capability such as mutt. Clients
	 * that can read HTML will view the normal Body.
	 * @var string
	 */
	var $AltBody			= "";

	/**
	 * Sets word wrapping on the body of the message to a given number of
	 * characters.
	 * @var int
	 */
	var $WordWrap		  = 0;

	/**
	 * Method to send mail: ("mail", "sendmail", or "smtp").
	 * @var string
	 */
	var $Mailer			= "mail";

	/**
	 * Sets the path of the sendmail program.
	 * @var string
	 */
	var $Sendmail		  = "/usr/sbin/sendmail";

	/**
	 * Path to PHPMailer plugins.  This is now only useful if the SMTP class
	 * is in a different directory than the PHP include path.
	 * @var string
	 */
	var $PluginDir		 = "";

	/**
	 *  Holds PHPMailer version.
	 *  @var string
	 */
	var $Version			= "1.73";

	/**
	 * Sets the email address that a reading confirmation will be sent.
	 * @var string
	 */
	var $ConfirmReadingTo  = "";

	/**
	 *  Sets the hostname to use in Message-Id and Received headers
	 *  and as default HELO string. If empty, the value returned
	 *  by SERVER_NAME is used or 'localhost.localdomain'.
	 *  @var string
	 */
	var $Hostname		  = "";

	/////////////////////////////////////////////////
	// SMTP VARIABLES
	/////////////////////////////////////////////////

	/**
	 *  Sets the SMTP hosts.  All hosts must be separated by a
	 *  semicolon.  You can also specify a different port
	 *  for each host by using this format: [hostname:port]
	 *  (e.g. "smtp1.example.com:25;smtp2.example.com").
	 *  Hosts will be tried in order.
	 *  @var string
	 */
	var $Host		= "localhost";

	/**
	 *  Sets the default SMTP server port.
	 *  @var int
	 */
	var $Port		= 25;

	/**
	 *  Sets the SMTP HELO of the message (Default is $Hostname).
	 *  @var string
	 */
	var $Helo		= "";

	/**
	 *  Sets SMTP authentication. Utilizes the Username and Password variables.
	 *  @var bool
	 */
	var $SMTPAuth	 = false;

	/**
	 *  Sets SMTP username.
	 *  @var string
	 */
	var $Username	 = "";

	/**
	 *  Sets SMTP password.
	 *  @var string
	 */
	var $Password	 = "";

	/**
	 *  Sets the SMTP server timeout in seconds. This function will not
	 *  work with the win32 version.
	 *  @var int
	 */
	var $Timeout	  = 10;

	/**
	 *  Sets SMTP class debugging on or off.
	 *  @var bool
	 */
	var $SMTPDebug	= false;

	/**
	 * Prevents the SMTP connection from being closed after each mail
	 * sending.  If this is set to true then to close the connection
	 * requires an explicit call to SmtpClose().
	 * @var bool
	 */
	var $SMTPKeepAlive = false;

	/**#@+
	 * @access private
	 */
	var $smtp			= NULL;
	var $to			  = array();
	var $cc			  = array();
	var $bcc			 = array();
	var $ReplyTo		 = array();
	var $attachment	  = array();
	var $CustomHeader	= array();
	var $message_type	= "";
	var $boundary		= array();
	var $language		= array();
	var $error_count	 = 0;
	var $LE			  = "\n";
	/**#@-*/

	/////////////////////////////////////////////////
	// VARIABLE METHODS
	/////////////////////////////////////////////////

	/**
	 * Sets message type to HTML.
	 * @param bool $bool
	 * @return void
	 */
	function IsHTML($bool) {
		if($bool == true)
			$this->ContentType = "text/html";
		else
			$this->ContentType = "text/plain";
	}

	/**
	 * Sets Mailer to send message using SMTP.
	 * @return void
	 */
	function IsSMTP() {
		$this->Mailer = "smtp";
	}

	/**
	 * Sets Mailer to send message using PHP mail() function.
	 * @return void
	 */
	function IsMail() {
		$this->Mailer = "mail";
	}

	/**
	 * Sets Mailer to send message using the $Sendmail program.
	 * @return void
	 */
	function IsSendmail() {
		$this->Mailer = "sendmail";
	}

	/**
	 * Sets Mailer to send message using the qmail MTA.
	 * @return void
	 */
	function IsQmail() {
		$this->Sendmail = "/var/qmail/bin/sendmail";
		$this->Mailer = "sendmail";
	}


	/////////////////////////////////////////////////
	// RECIPIENT METHODS
	/////////////////////////////////////////////////

	/**
	 * Adds a "To" address.
	 * @param string $address
	 * @param string $name
	 * @return void
	 */
	function AddAddress($address, $name = "") {
		$cur = count($this->to);
		$this->to[$cur][0] = trim($address);
		$this->to[$cur][1] = $name;
	}

	/**
	 * Adds a "Cc" address. Note: this function works
	 * with the SMTP mailer on win32, not with the "mail"
	 * mailer.
	 * @param string $address
	 * @param string $name
	 * @return void
	*/
	function AddCC($address, $name = "") {
		$cur = count($this->cc);
		$this->cc[$cur][0] = trim($address);
		$this->cc[$cur][1] = $name;
	}

	/**
	 * Adds a "Bcc" address. Note: this function works
	 * with the SMTP mailer on win32, not with the "mail"
	 * mailer.
	 * @param string $address
	 * @param string $name
	 * @return void
	 */
	function AddBCC($address, $name = "") {
		$cur = count($this->bcc);
		$this->bcc[$cur][0] = trim($address);
		$this->bcc[$cur][1] = $name;
	}

	/**
	 * Adds a "Reply-to" address.
	 * @param string $address
	 * @param string $name
	 * @return void
	 */
	function AddReplyTo($address, $name = "") {
		$cur = count($this->ReplyTo);
		$this->ReplyTo[$cur][0] = trim($address);
		$this->ReplyTo[$cur][1] = $name;
	}


	/////////////////////////////////////////////////
	// MAIL SENDING METHODS
	/////////////////////////////////////////////////

	/**
	 * Creates message and assigns Mailer. If the message is
	 * not sent successfully then it returns false.  Use the ErrorInfo
	 * variable to view description of the error.
	 * @return bool
	 */
	function Send() {
		$header = "";
		$body = "";
		$result = true;

		if((count($this->to) + count($this->cc) + count($this->bcc)) < 1)
		{
			$this->SetError($this->Lang("provide_address"));
			return false;
		}

		// Set whether the message is multipart/alternative
		if(!empty($this->AltBody))
			$this->ContentType = "multipart/alternative";

		$this->error_count = 0; // reset errors
		$this->SetMessageType();
		$header .= $this->CreateHeader();
		$body = $this->CreateBody();

		if($body == "") { return false; }

		// Choose the mailer
		switch($this->Mailer)
		{
			case "sendmail":
				$result = $this->SendmailSend($header, $body);
				break;
			case "mail":
				$result = $this->MailSend($header, $body);
				break;
			case "smtp":
				$result = $this->SmtpSend($header, $body);
				break;
			default:
			$this->SetError($this->Mailer . $this->Lang("mailer_not_supported"));
				$result = false;
				break;
		}

		return $result;
	}

	/**
	 * Sends mail using the $Sendmail program.
	 * @access private
	 * @return bool
	 */
	function SendmailSend($header, $body) { 
		if ($this->Sender != "")
			$sendmail = sprintf("%s -oi -f %s -t", $this->Sendmail, $this->Sender);
		else
			$sendmail = sprintf("%s -oi -t", $this->Sendmail);

		if(!@$mail = popen($sendmail, "w"))
		{
			$this->SetError($this->Lang("execute") . $this->Sendmail);
			return false;
		}

		fputs($mail, $header);
		fputs($mail, $body);

		$result = pclose($mail) >> 8 & 0xFF;
		if($result != 0)
		{
			$this->SetError($this->Lang("execute") . $this->Sendmail);
			return false;
		}

		return true;
	}

	/**
	 * Sends mail using the PHP mail() function.
	 * @access private
	 * @return bool
	 */
	function MailSend($header, $body) {
		$to = "";
		for($i = 0; $i < count($this->to); $i++)
		{
			if($i != 0) { $to .= ", "; }
			$to .= $this->to[$i][0];
		}
		
		#var_dump($this->EncodeHeader($this->Subject));
		if ($this->Sender != "" && strlen(ini_get("safe_mode"))< 1)
		{
			$old_from = ini_get("sendmail_from");
			ini_set("sendmail_from", $this->Sender);
			$params = sprintf("-oi -f %s", $this->Sender);
			$rt = @mail($to, $this->EncodeHeader($this->Subject), $body,
						$header, $params);
		}
		else
			$rt = @mail($to, $this->EncodeHeader($this->Subject), $body, $header);
		#var_dump($rt);
		if (isset($old_from))
			ini_set("sendmail_from", $old_from);

		if(!$rt)
		{
			$this->SetError($this->Lang("instantiate"));
			return false;
		}
		
		return true;
	}

	/**
	 * Sends mail via SMTP using PhpSMTP (Author:
	 * Chris Ryan).  Returns bool.  Returns false if there is a
	 * bad MAIL FROM, RCPT, or DATA input.
	 * @access private
	 * @return bool
	 */
	function SmtpSend($header, $body) {
		include_once($this->PluginDir . "class.smtp.php");
		$error = "";
		$bad_rcpt = array();

		if(!$this->SmtpConnect())
			return false;

		$smtp_from = ($this->Sender == "") ? $this->From : $this->Sender;
		if(!$this->smtp->Mail($smtp_from))
		{
			$error = $this->Lang("from_failed") . $smtp_from;
			$this->SetError($error);
			$this->smtp->Reset();
			return false;
		}

		// Attempt to send attach all recipients
		for($i = 0; $i < count($this->to); $i++)
		{
			if(!$this->smtp->Recipient($this->to[$i][0]))
				$bad_rcpt[] = $this->to[$i][0];
		}
		for($i = 0; $i < count($this->cc); $i++)
		{
			if(!$this->smtp->Recipient($this->cc[$i][0]))
				$bad_rcpt[] = $this->cc[$i][0];
		}
		for($i = 0; $i < count($this->bcc); $i++)
		{
			if(!$this->smtp->Recipient($this->bcc[$i][0]))
				$bad_rcpt[] = $this->bcc[$i][0];
		}

		if(count($bad_rcpt) > 0) // Create error message
		{
			for($i = 0; $i < count($bad_rcpt); $i++)
			{
				if($i != 0) { $error .= ", "; }
				$error .= $bad_rcpt[$i];
			}
			$error = $this->Lang("recipients_failed") . $error;
			$this->SetError($error);
			$this->smtp->Reset();
			return false;
		}

		if(!$this->smtp->Data($header . $body))
		{
			$this->SetError($this->Lang("data_not_accepted"));
			$this->smtp->Reset();
			return false;
		}
		if($this->SMTPKeepAlive == true)
			$this->smtp->Reset();
		else
			$this->SmtpClose();

		return true;
	}

	/**
	 * Initiates a connection to an SMTP server.  Returns false if the
	 * operation failed.
	 * @access private
	 * @return bool
	 */
	function SmtpConnect() {
		if($this->smtp == NULL) { $this->smtp = new SMTP(); }

		$this->smtp->do_debug = $this->SMTPDebug;
		$hosts = explode(";", $this->Host);
		$index = 0;
		$connection = ($this->smtp->Connected());

		// Retry while there is no connection
		while($index < count($hosts) && $connection == false)
		{
			if(strstr($hosts[$index], ":"))
				list($host, $port) = explode(":", $hosts[$index]);
			else
			{
				$host = $hosts[$index];
				$port = $this->Port;
			}

			if($this->smtp->Connect($host, $port, $this->Timeout))
			{
				if ($this->Helo != '')
					$this->smtp->Hello($this->Helo);
				else
					$this->smtp->Hello($this->ServerHostname());

				if($this->SMTPAuth)
				{
					if(!$this->smtp->Authenticate($this->Username,
												  $this->Password))
					{
						$this->SetError($this->Lang("authenticate"));
						$this->smtp->Reset();
						$connection = false;
					}
				}
				$connection = true;
			}
			$index++;
		}
		if(!$connection)
			$this->SetError($this->Lang("connect_host"));

		return $connection;
	}

	/**
	 * Closes the active SMTP session if one exists.
	 * @return void
	 */
	function SmtpClose() {
		if($this->smtp != NULL)
		{
			if($this->smtp->Connected())
			{
				$this->smtp->Quit();
				$this->smtp->Close();
			}
		}
	}

	/**
	 * Sets the language for all class error messages.  Returns false
	 * if it cannot load the language file.  The default language type
	 * is English.
	 * @param string $lang_type Type of language (e.g. Portuguese: "br")
	 * @param string $lang_path Path to the language file directory
	 * @access public
	 * @return bool
	 */
	function SetLanguage($lang_type, $lang_path = "language/") {
		if(file_exists($lang_path.'phpmailer.lang-'.$lang_type.'.php'))
			include($lang_path.'phpmailer.lang-'.$lang_type.'.php');
		else if(file_exists($lang_path.'phpmailer.lang-en.php'))
			include($lang_path.'phpmailer.lang-en.php');
		else
		{
			$this->SetError("Could not load language file");
			return false;
		}
		$this->language = $PHPMAILER_LANG;

		return true;
	}

	/////////////////////////////////////////////////
	// MESSAGE CREATION METHODS
	/////////////////////////////////////////////////

	/**
	 * Creates recipient headers.
	 * @access private
	 * @return string
	 */
	function AddrAppend($type, $addr) {
		$addr_str = $type . ": ";
		$addr_str .= $this->AddrFormat($addr[0]);
		if(count($addr) > 1)
		{
			for($i = 1; $i < count($addr); $i++)
				$addr_str .= ", " . $this->AddrFormat($addr[$i]);
		}
		$addr_str .= $this->LE;

		return $addr_str;
	}

	/**
	 * Formats an address correctly.
	 * @access private
	 * @return string
	 */
	function AddrFormat($addr) {
		if(empty($addr[1]))
			$formatted = $addr[0];
		else
		{
			$formatted = $this->EncodeHeader($addr[1], 'phrase') . " <" .
						 $addr[0] . ">";
		}

		return $formatted;
	}

	/**
	 * Wraps message for use with mailers that do not
	 * automatically perform wrapping and for quoted-printable.
	 * Original written by philippe.
	 * @access private
	 * @return string
	 */
	function WrapText($message, $length, $qp_mode = false) {
		$soft_break = ($qp_mode) ? sprintf(" =%s", $this->LE) : $this->LE;

		$message = $this->FixEOL($message);
		if (substr($message, -1) == $this->LE)
			$message = substr($message, 0, -1);

		$line = explode($this->LE, $message);
		$message = "";
		for ($i=0 ;$i < count($line); $i++)
		{
		  $line_part = explode(" ", $line[$i]);
		  $buf = "";
		  for ($e = 0; $e<count($line_part); $e++)
		  {
			  $word = $line_part[$e];
			  if ($qp_mode and (strlen($word) > $length))
			  {
				$space_left = $length - strlen($buf) - 1;
				if ($e != 0)
				{
					if ($space_left > 20)
					{
						$len = $space_left;
						if (substr($word, $len - 1, 1) == "=")
						  $len--;
						elseif (substr($word, $len - 2, 1) == "=")
						  $len -= 2;
						$part = substr($word, 0, $len);
						$word = substr($word, $len);
						$buf .= " " . $part;
						$message .= $buf . sprintf("=%s", $this->LE);
					}
					else
					{
						$message .= $buf . $soft_break;
					}
					$buf = "";
				}
				while (strlen($word) > 0)
				{
					$len = $length;
					if (substr($word, $len - 1, 1) == "=")
						$len--;
					elseif (substr($word, $len - 2, 1) == "=")
						$len -= 2;
					$part = substr($word, 0, $len);
					$word = substr($word, $len);

					if (strlen($word) > 0)
						$message .= $part . sprintf("=%s", $this->LE);
					else
						$buf = $part;
				}
			  }
			  else
			  {
				$buf_o = $buf;
				$buf .= ($e == 0) ? $word : (" " . $word);

				if (strlen($buf) > $length and $buf_o != "")
				{
					$message .= $buf_o . $soft_break;
					$buf = $word;
				}
			  }
		  }
		  $message .= $buf . $this->LE;
		}

		return $message;
	}

	/**
	 * Set the body wrapping.
	 * @access private
	 * @return void
	 */
	function SetWordWrap() {
		if($this->WordWrap < 1)
			return;

		switch($this->message_type)
		{
			case "alt":
			  // fall through
			case "alt_attachments":
			  $this->AltBody = $this->WrapText($this->AltBody, $this->WordWrap);
			  break;
			default:
			  $this->Body = $this->WrapText($this->Body, $this->WordWrap);
			  break;
		}
	}

	/**
	 * Assembles message header.
	 * @access private
	 * @return string
	 */
	function CreateHeader() {
		$result = "";

		// Set the boundaries
		$uniq_id = md5(uniqid(time()));
		$this->boundary[1] = "b1_" . $uniq_id;
		$this->boundary[2] = "b2_" . $uniq_id;

		$result .= $this->HeaderLine("Date", $this->RFCDate());
		if($this->Sender == "")
			$result .= $this->HeaderLine("Return-Path", trim($this->From));
		else
			$result .= $this->HeaderLine("Return-Path", trim($this->Sender));

		// To be created automatically by mail()
		if($this->Mailer != "mail")
		{
			if(count($this->to) > 0)
				$result .= $this->AddrAppend("To", $this->to);
			else if (count($this->cc) == 0)
				$result .= $this->HeaderLine("To", "undisclosed-recipients:;");
			if(count($this->cc) > 0)
				$result .= $this->AddrAppend("Cc", $this->cc);
		}

		$from = array();
		$from[0][0] = trim($this->From);
		$from[0][1] = $this->FromName;
		$result .= $this->AddrAppend("From", $from);

		// sendmail and mail() extract Bcc from the header before sending
		if((($this->Mailer == "sendmail") || ($this->Mailer == "mail")) && (count($this->bcc) > 0))
			$result .= $this->AddrAppend("Bcc", $this->bcc);

		if(count($this->ReplyTo) > 0)
			$result .= $this->AddrAppend("Reply-to", $this->ReplyTo);

		// mail() sets the subject itself
		if($this->Mailer != "mail")
			$result .= $this->HeaderLine("Subject", $this->EncodeHeader(trim($this->Subject)));

		$result .= sprintf("Message-ID: <%s@%s>%s", $uniq_id, $this->ServerHostname(), $this->LE);
		$result .= $this->HeaderLine("X-Priority", $this->Priority);
		$result .= $this->HeaderLine("X-Mailer", "PHPMailer [version " . $this->Version . "]");

		if($this->ConfirmReadingTo != "")
		{
			$result .= $this->HeaderLine("Disposition-Notification-To",
						"<" . trim($this->ConfirmReadingTo) . ">");
		}

		// Add custom headers
		for($index = 0; $index < count($this->CustomHeader); $index++)
		{
			$result .= $this->HeaderLine(trim($this->CustomHeader[$index][0]),
						$this->EncodeHeader(trim($this->CustomHeader[$index][1])));
		}
		$result .= $this->HeaderLine("MIME-Version", "1.0");

		switch($this->message_type)
		{
			case "plain":
				$result .= $this->HeaderLine("Content-Transfer-Encoding", $this->Encoding);
				$result .= sprintf("Content-Type: %s; charset=\"%s\"",
									$this->ContentType, $this->CharSet);
				break;
			case "attachments":
				// fall through
			case "alt_attachments":
				if($this->InlineImageExists())
				{
					$result .= sprintf("Content-Type: %s;%s\ttype=\"text/html\";%s\tboundary=\"%s\"%s",
							