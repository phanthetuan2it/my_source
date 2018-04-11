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
    },
    initMenu: function() {
      var that = this;
      var ele = that.$element;
      var opts = that.options;
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
        var strCss = 'height: ' + hMenu + 'px, position: relative';
        that.idBox = 'contain-menu-fix';
        var wrapMenu = ele.wrap('<div id="'+that.idBox+'" style="'+strCss+'"></div>');
        that.handleScroll();
      }
    },
    handleScroll: function() {
      var that = this;
      var ele = that.$element;
      var opts = that.options;
      $(window).scroll(function(){
        var s_con=$('#' + that.idBox).offset().top;
        if(window.pageYOffset >= s_con){
          ele.addClass('is-fixed');
        }else{
          ele.removeClass('is-fixed');
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
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
