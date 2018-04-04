;(function ($, Site) {
  var pluginName = 'owl-carousel-custom';

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
      var that = this;
      that.initOwl();
      that.initArrow();
    },
    initOwl: function() {
      var that = this,
          thisElement = that.$element,
          opts = that.options;
      that.objOwl = thisElement.owlCarousel(opts.owlOptions);
    },
    initArrow: function() {
      var that = this,
          thisElement = that.$element,
          opts = that.options,
          btnNext = thisElement.closest(opts.dataOwlNext),
          btnPrev = thisElement.closest(opts.dataOwlPrev);
      $(btnPrev).on('click.' + pluginName, function() {
        alert('232');
        thisElement.trigger('owl.prev');
      })

      $(btnNext).on('click.' + pluginName, function() {
        thisElement.trigger('owl.next');
      })
    },

    destroy: function () {
      $.removeData(this.element[0], pluginName);
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
    dataOwlCarouselCustom: '[data-owl-carousel-custom]',
    dataOwlNext: '[data-owl-next]',
    dataOwlPrev: '[data-owl-prev]',
    owlOptions: {
      items : 4, //10 items above 1000px browser width
      itemsDesktop : [1000,4], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,4], // betweem 900px and 601px
      itemsTablet: [600,4], //2 items between 600 and 0
      itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
      slideSpeed: 500,
      pagination:false,
      navigation:false
    }
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
