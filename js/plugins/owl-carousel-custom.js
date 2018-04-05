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
      if(thisElement.children().length <= opts.owlOptions.items) {
        opts.owlOptions.loop = false;
      }
      if(!opts.responsive) {
        opts.owlOptions.responsive = null;
      }
      that.objOwl = thisElement.owlCarousel(opts.owlOptions);
    },
    initArrow: function() {
      var that = this,
          thisElement = that.$element,
          opts = that.options,
          parentElement = thisElement.parent(),
          btnNext = null,
          btnPrev = null;
      while(!parentElement.find(opts.dataOwlNext).length && !parentElement.find(opts.dataOwlPrev).lenght) {
        parentElement = parentElement.parent();
      }
      btnNext = parentElement.find(opts.dataOwlNext),
      btnPrev = parentElement.find(opts.dataOwlPrev);

      $(btnPrev).off('click.' + pluginName).on('click.' + pluginName, function() {
        thisElement.trigger('prev.owl.carousel');
      })

      $(btnNext).off('click.' + pluginName).on('click.' + pluginName, function() {
        thisElement.trigger('next.owl.carousel');
      })
    },
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
    dataOwlNext: '[data-owl-next]',
    dataOwlPrev: '[data-owl-prev]',
    responsive: true,
    owlOptions: {
      items: 4,
      loop:true,
      margin:10,
      nav:false,
      dots: false,
      responsive:{
        0:{
          items:1,
          loop: true
        },
        600:{
          items:3
        },
        1000:{
          items:4
        }
      }
    }
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
