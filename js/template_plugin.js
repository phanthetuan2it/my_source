;(function ($, Site) {
  var pluginName = 'my-plugin';

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

  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
