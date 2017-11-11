(function($){
	$.fn.extend({ 
		menuAni: function(options){
			var defaults = {
				animatePadding: 60,
	            mouseOverColor : '#000000',
	            mouseOutColor : '#ffffff'
			};
			var options =  $.extend(defaults, options);
	        return this.each(function() {
	            var opts = options;
	            var obj = $(this);              
	            var items = $("li a", obj);
	            items.mouseover(function() {
	                $(this).animate({paddingLeft: opts.animatePadding}, 500);
	            }).mouseout(function() {
	                $(this).animate({paddingLeft: '0'}, 500);
	            });
	         
	        });
		}
	});
})(jQuery);
/*
(function($){
    $.fn.extend({ 
 
        neoAnimateMenu: function(options) {
 
            // Đặt các giá trị mặc định
            var defaults = {
                animatePadding: 60
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                var opts =options;
                 
                // Đặt tên biến cho element (ul)
                var obj = $(this);              
                 
                // Lấy tất cả thẻ li trong ul
                var items = $("li a", obj);
               
                // Thêm sự kiện mouseover và mouseout vào thẻ a
                items.mouseover(function() {
                    // lúc này this chính là thẻ a
                    $(this).animate({paddingLeft: opts.animatePadding}, 500);
                }).mouseout(function() {
                    $(this).animate({paddingLeft: '0'}, 500);
                });
            });
        }
    });
})(jQuery);
*/