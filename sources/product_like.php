<?php  if(!defined('_source')) die("Error");

function array_values_recursive($ary)
{
   $lst = array();
   foreach( array_keys($ary) as $k ){
      $v = $ary[$k];
      if (is_scalar($v)) {
         $lst[] = $v;
      } elseif (is_array($v)) {
         $lst = array_merge( $lst,
            array_values_recursive($v)
         );
      }
   }
   return $lst;
}

	if($_SESSION[$name_log]){
      $sql="select id_p from";
      $per_page = 10; // Set how many records do you want to display per page.
      $startpoint = ($page * $per_page) - $per_page;
      $limit = ' limit '.$startpoint.','.$per_page;
      $where = " #_product_like where id_tv=".$_SESSION[$name_log]['id'];
      $sql.=$where." $limit";
      $d->query($sql);
      $list_p_like = $d->result_array();
      $url = getCurrentPageURL();
      $paging = pagination_home($where,$per_page,$page,$url);

      $list_p_like=implode(',',array_values_recursive($list_p_like));
      $sql="select * from #_product where id in(".$list_p_like.") order by stt asc,id desc";
      $d->query($sql);
      $product=$d->result_array();
	}

