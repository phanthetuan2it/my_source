;(function ($, Site) {
  var pluginName = 'my-menu-top';

  var Plugin = function (element, options) {
    this.$element = $(element);
    this.options = $.extend(
      {},
      $.fn[pluginName].defaults,
      this.$element.data(),
      options
    );

    this.init();
  }

  Plugin.prototype = {
    init: function () {
      this.initMenu();
      this.initMenuMobile()
    },
    initMenu: function() {
      var that = this;
      var ele = that.$element;
      var opts = that.options;
      that.divWrap = document.createElement('div');
      ele.find('li').hover(
        function(){
          $(this).children('ul').stop().slideDown();
        },
        function(){
          $(this).children('ul').hide();
      })

      if(opts.isFixed) {
       
        var hMenu = ele.outerHeight();
        var wMenu = ele.outerWidth();
        var cssWrap = [
          'height: ' + hMenu + 'px;',
          'position: relative;'
        ].join('');

        $(that.divWrap).attr('style', cssWrap);

        that.cssFixed = [
          'width: 100%;',
          'max-width:' + wMenu + 'px;',
          'position: fixed;',
          'left: auto;',
          'top: 0px;',
          'z-index: 10;',
        ].join('');

        ele.wrap(that.divWrap);
        that.handleScroll();
      }
    },
    initMenuMobile: function() {
      var that = this;
      var opts = that.options;
      $('#btn_menu_bootstrap').click(function(){
        $('#menu_bootstrap').stop().slideToggle();
        if($('#menu_bootstrap').hasClass('menu_bootstrap_active')){
          $('#menu_bootstrap').addClass('menu_bootstrap_active');
        }
      });
      
      $('.sub_btn').click(function(){
        if($(this).hasClass('cur_rotate')){
          $(this).css({'-webkit-transform':'rotate(0deg)'});
          $(this).removeClass('cur_rotate');
        }else{
          $(this).css({'-webkit-transform':'rotate(90deg)'});
          $(this).addClass('cur_rotate');
        }
        
        $(this).parent().children('ul').stop().slideToggle();
        
      });
      
      $('#btn_menu_bootstrap2').click(function(){
        $('#menu_bootstrap2').stop().slideToggle();
        if($('#menu_bootstrap2').hasClass('menu_bootstrap_active2')){
          $('#menu_bootstrap2').addClass('menu_bootstrap_active2');
        }
      });
    },
    handleScroll: function() {
      var that = this;
      var ele = that.$element;
      var opts = that.options;
      $(window).scroll(function() {
        var offsetWrap = ele.parent().offset().top;
        if(offsetWrap <= window.pageYOffset) {
          ele.attr('style', that.cssFixed);
        } else {
          ele.removeAttr('style');
        }
      }).trigger('scroll');
    }
  }

  $.fn[pluginName] = function (options, params) {
    return this.each(function () {
      var instance = $.data(this, pluginName);

      if (!instance) {
        $.data(this, pluginName, new Plugin(this, options));
      } else if (instance[options]) {
        instance[options](params);
      }
    });
  };

  $.fn[pluginName].defaults = {
    isFixed: true,
    dataMenuMobile: '[data-menu-mobile]',
    dataBtnMenu: '[data-btn-menu]'
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
