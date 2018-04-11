;(function ($, Site) {
  var pluginName = 'my-raty';

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
      this.initRaty();
    },
    initRaty: function() {
      var that = this;
      var ele = that.$element;
      ele.raty(
        that.options
      );
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
    half: true,
    path: null,
    starHalf: 'css/raty/images/star-half2.png',
    starOff: 'css/raty/images/star-off2.png',
    starOn: 'css/raty/images/star-on2.png',
    score: function() {
      return $(this).attr('data-score');
    },
    click: function(score, evt) {
      var id=$(this).attr('data-id');
        $.ajax({
          type:'get',
          data:{score:score,id:id},
          url:'ajax/ajax_rating.php',
          success:function(data){
          }
        })
      }
  };

  $(function () {
    $('[data-' + pluginName + ']')[pluginName]();
  });
})(window.jQuery, window.Site);
