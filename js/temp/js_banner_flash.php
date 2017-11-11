
<script type="text/javascript">
		$( document ).ready(function() {
			var screen_device = $(window).width();
			var is_touch_device = 'ontouchstart' in document.documentElement;
			 var supportsTouch = false; 
			 if ('ontouchstart' in window) { 
			 	//iOS & android 
				supportsTouch = true; } 
			else if(window.navigator.msPointerEnabled) { //Win8 
					supportsTouch = true; 
			} 
			else{
				supportsTouch = false; 
			}
			
			if(supportsTouch==true){
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
			else if(is_touch_device){
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
			else if(screen_device<=699){
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
			else if(screen_device<=750){
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
			else if(screen_device<=990){
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
			else {
				$('.banner_img').css('display','block');
				$('.banner_flash').css('display','none');
			}
		});
	</script>