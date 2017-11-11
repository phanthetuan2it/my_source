<?php 
//function get video youtube
function get_video_youtube($width=2,$height=1,$select=true,$auto=false ){
	global $d;
	$ratio = round($height/$width*100,2);
	//get database
	$sql_video = "select ten_vi as ten,photo,links from #_video where type='video' and hienthi=1  order by stt,id desc";
	$d->query($sql_video);
	$video = $d->result_array();
	$chuoi=explode("=",$video[0]['links']);
	//showtext div load
	$showtext .= '<div style="padding-bottom: '.$ratio.'%;position:relative;width:100%;height: 0;" id="box_video" data-id="'.$chuoi[1].'" data-width="'.$width.'" data-height="'.$height.'" data-auto="'.$auto.'" ></div>';
	if($select){
		$showtext .= '<div class="select_video"><select width="100%" id="video_lienquan">';
		$showtext .='<option value="">Video khác</option>';
		for ($i=0,$count=count($video); $i < $count; $i++) { 
			$chuoi=explode("=",$video[$i]['links']);
			$showtext .='<option value="'.$chuoi[1].'">'.$video[$i]['ten'].'</option>';
		}
		$showtext .='</select></div>';
	}
	//script
	$showtext.='<script>$(function(){var i=!1;$(window).scroll(function(){if($(window).scrollTop()>1&&!i){var o=$("#box_video").data("id"),d=$("#box_video").data("width"),a=$("#box_video").data("height");""!=o&&($("#box_video").load("ajax/load_video.php?id="+o+"&width="+d+"&height="+a),i=!0)}}),$("#video_lienquan").change(function(){var i=$(this).val();return""!=i&&$("#box_video").load("ajax/load_video.php?id="+i),!1})});</script>';
	echo $showtext;
}
//function load social
function get_social($url,$type="share",$width="100%",$height="auto"){
	switch ($type) {
		case 'share':
			if($url=='') $url= getCurrentPageURL(); 
			$showtext = '';
			$showtext.= '<span class="st_fblike_hcount" displayText="Facebook Like"></span>';
			$showtext.='<span class="st_facebook_hcount" displayText="Facebook"></span>';
			$showtext.='<span class="st_googleplus_hcount" displayText="Google +""></span>';
			break;
	
		case 'comment':
			if($url=='') $url= getCurrentPageURL();
			$showtext = '<div class="fb-comments" data-width="100%" data-href="'.$url.'" data-numposts="5"></div>';
			break;
		default:
			if($url=='') $url= getCurrentPageURL();
			$showtext = '';
			break;
	}
	echo $showtext;
}
//get map google api
function get_mapapi($width=2,$height=1,$coor='',$zoom=16){
	$ratio = round($height/$width*100,2);
	$showtext ='<script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDbYXUfyXrfWP46Zq7koC2u08xw_8So_ng&sensor=true"></script>';
	$showtext .='<div style="padding-bottom:'.$ratio.'%;position:relative;width:100%;height: 0">
	<div id="map_canvas" data-coor="'.$coor.'" data-zoom="'.$zoom.'" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;"></div>
	</div>';
	$showtext .='<script>var a=!1;$(window).scroll(function(){$(window).scrollTop()>5&&!a&&($("#map_canvas").load("ajax/load_map.php?coor="+$("#map_canvas").data("coor")+"&zoom="+$("#map_canvas").data("zoom")),a=!0)});</script>';
	echo $showtext;
}
//get url now
?>