/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.4",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.4",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.4",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.4",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.4",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport),this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.4",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.4",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.4",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){
var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.4",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a(document.body).height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);/**
 * Owl Carousel v2.3.3
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&(console.log("update called"),this.update())},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){
this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.4.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,h,e=this;if(e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,g=e.options.responsive||null,g&&g.length>-1){e.respondTo=e.options.respondTo||"window";for(h in g)g.hasOwnProperty(h)&&(e.breakpoints.push(g[h].breakpoint),e.breakpointSettings[g[h].breakpoint]=g[h].settings);e.breakpoints.sort(function(a,b){return e.options.mobileFirst===!0?a-b:b-a})}"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(e.hidden="msHidden",e.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.init(),e.checkResponsive()}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!==c.options.asNavFor?a(c.options.asNavFor).slick("getSlick"):null;null!==d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,e,b=this,f=b.$slider.width(),g=window.innerWidth||a(window).width();if("window"===b.respondTo?e=g:"slider"===b.respondTo?e=f:"min"===b.respondTo&&(e=Math.min(g,f)),b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&(b.originalSettings.mobileFirst===!1?e<b.breakpoints[c]&&(d=b.breakpoints[c]):e>b.breakpoints[c]&&(d=b.breakpoints[c]));null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,"unslick"===b.breakpointSettings[d]?b.unslick():(b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh())):(b.activeBreakpoint=d,"unslick"===b.breakpointSettings[d]?b.unslick():(b.options=a.extend({},b.originalSettings,b.breakpointSettings[d]),b.refresh())):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=b.originalSettings,b.refresh())}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||a(b.target).parent().index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c);break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid),b.$slider.html(b.$slides)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var a=this,b=0,c=0,d=[],e=a.options.infinite===!1?a.slideCount-a.options.slidesToShow+1:a.slideCount;for(a.options.centerMode===!0&&(e=a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),b.$slider.trigger("init",[b])},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.autoplay===!0&&(a(document).on(b.visibilityChange,function(){b.visibility()}),b.options.pauseOnHover===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()}))),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b])},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;if(a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1)a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length));else if(a.options.variableWidth===!0){var b=0;a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.children(".slick-slide").each(function(){b+=a.listWidth}),a.$slideTrack.width(Math.ceil(b)+1)}else a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length));var c=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-c)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:800,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(a,b,c){var d=this;d.options[a]=b,c===!0&&(d.unload(),d.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):d.length<=b.options.slidesToShow?d.addClass("slick-active"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),c.asNavFor(d),void 0):(c.slideHandler(d),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?i.fadeSlide(e,function(){i.postSlide(e)}):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.unslick=function(){var a=this;a.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))
},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):(a.paused=!1,a.autoPlay())},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a},a(function(){a("[data-slick]").slick()})});// ==================================================
// fancyBox v3.0.47
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function s(t){var e=t.currentTarget,o=t.data?t.data.options:{},s=t.data?t.data.items:[],i="",a=0;t.preventDefault(),t.stopPropagation(),n(e).attr("data-fancybox")&&(i=n(e).data("fancybox")),i?(s=s.length?s.filter('[data-fancybox="'+i+'"]'):n("[data-fancybox="+i+"]"),a=s.index(e)):s=[e],n.fancybox.open(s,o,a)}if(!n)return o;var i={speed:330,loop:!0,opacity:"auto",margin:[44,0],gutter:30,infobar:!0,buttons:!0,slideShow:!0,fullScreen:!0,thumbs:!0,closeBtn:!0,smallBtn:"auto",image:{preload:"auto",protect:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,scrolling:"no",css:{}},baseClass:"",slideClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',closeTpl:'<button data-fancybox-close class="fancybox-close-small"></button>',parentEl:"body",touch:!0,keyboard:!0,focus:!0,closeClickOutside:!0,beforeLoad:n.noop,afterLoad:n.noop,beforeMove:n.noop,afterMove:n.noop,onComplete:n.noop,onInit:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop},a=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),d=function(o){var s;return"function"==typeof n&&o instanceof n&&(o=o[0]),s=o.getBoundingClientRect(),s.bottom>0&&s.right>0&&s.left<(t.innerWidth||e.documentElement.clientWidth)&&s.top<(t.innerHeight||e.documentElement.clientHeight)},p=function(t,o,s){var a=this;a.opts=n.extend(!0,{index:s},i,o||{}),a.id=a.opts.id||++c,a.group=[],a.currIndex=parseInt(a.opts.index,10)||0,a.prevIndex=null,a.prevPos=null,a.currPos=0,a.firstRun=null,a.createGroup(t),a.group.length&&(a.$lastFocus=n(e.activeElement).blur(),a.slides={},a.init(t))};n.extend(p.prototype,{init:function(){var t,e,o=this,s=!1;o.scrollTop=r.scrollTop(),o.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||(t=n("body").width(),n("html").addClass("fancybox-enabled"),n.fancybox.isTouch?(n.each(o.group,function(t,e){if("image"!==e.type&&"iframe"!==e.type)return s=!0,!1}),s&&n("body").css({position:"fixed",width:t,top:o.scrollTop*-1})):(t=n("body").width()-t,t>1&&n('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: "+t+"px; }").appendTo("head"))),e=n(o.opts.baseTpl).attr("id","fancybox-container-"+o.id).data("FancyBox",o).addClass(o.opts.baseClass).hide().prependTo(o.opts.parentEl),o.$refs={container:e,bg:e.find(".fancybox-bg"),controls:e.find(".fancybox-controls"),buttons:e.find(".fancybox-buttons"),slider_wrap:e.find(".fancybox-slider-wrap"),slider:e.find(".fancybox-slider"),caption:e.find(".fancybox-caption")},o.trigger("onInit"),o.activate(),o.current||o.jumpTo(o.currIndex)},createGroup:function(t){var e=this,s=n.makeArray(t);n.each(s,function(t,s){var i,a,r,c,l={},u={},d=[];n.isPlainObject(s)?(l=s,u=s.opts||{}):"object"===n.type(s)&&n(s).length?(i=n(s),d=i.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.type="type"in d?d.type:u.type,l.src="src"in d?d.src:u.src||i.attr("href"),u.width="width"in d?d.width:u.width,u.height="height"in d?d.height:u.height,u.thumb="thumb"in d?d.thumb:u.thumb,u.selector="selector"in d?d.selector:u.selector,"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=i):l={type:"html",content:s+""},l.opts=n.extend(!0,{},e.opts,u),a=l.type,r=l.src||"",a||(l.content?a="html":r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?a="pdf":"#"===r.charAt(0)&&(a="inline"),l.type=a),l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(s,[e,l]):"caption"in d?l.opts.caption=d.caption:u.$orig&&(l.opts.caption=i.attr("title")),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===a&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.selector=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(a,["html","inline","ajax"])>-1?(l.opts.buttons=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===a&&(l.type="iframe",l.opts.closeBtn=!0,l.opts.smallBtn=!1,l.opts.iframe.preload=!1),l.opts.modal&&n.extend(!0,l.opts,{infobar:0,buttons:0,keyboard:0,slideShow:0,fullScreen:0,closeClickOutside:0}),e.group.push(l)})},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("click.fb-previous","[data-fancybox-previous]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}),n(t).on("orientationchange.fb resize.fb",function(t){u(function(){t&&t.originalEvent&&"resize"===t.originalEvent.type?e.update():(e.$refs.slider_wrap.hide(),u(function(){e.$refs.slider_wrap.show(),e.update()}))})}),r.on("focusin.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null;!o||n(t.target).hasClass("fancybox-container")||n.contains(o.$refs.container[0],t.target)||(t.stopPropagation(),o.focus(),a.scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))}),r.on("keydown.fb",function(t){var o=e.current,s=t.keyCode||t.which;if(o&&o.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea")){if(8===s||27===s)return t.preventDefault(),void e.close(t);switch(s){case 37:case 38:t.preventDefault(),e.previous();break;case 39:case 40:t.preventDefault(),e.next();break;case 80:case 32:t.preventDefault(),e.SlideShow&&(t.preventDefault(),e.SlideShow.toggle());break;case 70:e.FullScreen&&(t.preventDefault(),e.FullScreen.toggle());break;case 71:e.Thumbs&&(t.preventDefault(),e.Thumbs.toggle())}}})},removeEvents:function(){a.off("scroll.fb resize.fb orientationchange.fb"),r.off("keydown.fb focusin.fb click.fb-close"),this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")},previous:function(t){this.jumpTo(this.currIndex-1,t)},next:function(t){this.jumpTo(this.currIndex+1,t)},jumpTo:function(t,e){var n,s,i,a,r=this;if(n=r.firstRun=null===r.firstRun,s=i=t=parseInt(t,10),a=!!r.current&&r.current.opts.loop,!r.isAnimating&&(s!=r.currIndex||n)){if(r.group.length>1&&a)s%=r.group.length,s=s<0?r.group.length+s:s,2==r.group.length?i=t-r.currIndex+r.currPos:(i=s-r.currIndex+r.currPos,Math.abs(r.currPos-(i+r.group.length))<Math.abs(r.currPos-i)?i+=r.group.length:Math.abs(r.currPos-(i-r.group.length))<Math.abs(r.currPos-i)&&(i-=r.group.length));else if(!r.group[s])return void r.update(!1,!1,e);r.current&&(r.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"),r.updateSlide(r.current,!0)),r.prevIndex=r.currIndex,r.prevPos=r.currPos,r.currIndex=s,r.currPos=i,r.current=r.createSlide(i),r.group.length>1&&((r.opts.loop||i-1>=0)&&r.createSlide(i-1),(r.opts.loop||i+1<r.group.length)&&r.createSlide(i+1)),r.current.isMoved=!1,r.current.isComplete=!1,e=parseInt(e===o?1.5*r.current.opts.speed:e,10),r.trigger("beforeMove"),r.updateControls(),n&&(r.current.$slide.addClass("fancybox-slide--current"),r.$refs.container.show(),u(function(){r.$refs.bg.css("transition-duration",r.current.opts.speed+"ms"),r.$refs.container.addClass("fancybox-container--ready")})),r.update(!0,!1,n?0:e,function(){r.afterMove()}),r.loadSlide(r.current),n&&r.current.$ghost||r.preload()}},createSlide:function(t){var e,o,s,i=this;if(o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]){if(i.opts.loop&&i.group.length>2)for(var a in i.slides)if(i.slides[a].index===o)return s=i.slides[a],s.pos=t,i.slides[t]=s,delete i.slides[a],i.updateSlide(s),s;e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.slider),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isMoved:!1,isLoaded:!1})}return i.slides[t]},zoomInOut:function(t,e,o){var s,i,a,r=this,c=r.current,l=c.$placeholder,u=c.opts.opacity,p=c.opts.$thumb,h=p?p.offset():0,f=c.$slide.offset();return!!(l&&c.isMoved&&h&&d(p))&&(!("In"===t&&!r.firstRun)&&(n.fancybox.stop(l),r.isAnimating=!0,s={top:h.top-f.top+parseFloat(p.css("border-top-width")||0),left:h.left-f.left+parseFloat(p.css("border-left-width")||0),width:p.width(),height:p.height(),scaleX:1,scaleY:1},"auto"==u&&(u=Math.abs(c.width/c.height-s.width/s.height)>.1),"In"===t?(i=s,a=r.getFitPos(c),a.scaleX=a.width/i.width,a.scaleY=a.height/i.height,u&&(i.opacity=.1,a.opacity=1)):(i=n.fancybox.getTranslate(l),a=s,c.$ghost&&(c.$ghost.show(),c.$image&&c.$image.remove()),i.scaleX=i.width/a.width,i.scaleY=i.height/a.height,i.width=a.width,i.height=a.height,u&&(a.opacity=0)),r.updateCursor(a.width,a.height),delete a.width,delete a.height,n.fancybox.setTranslate(l,i),l.show(),r.trigger("beforeZoom"+t),l.css("transition","all "+e+"ms"),n.fancybox.setTranslate(l,a),setTimeout(function(){var e;l.css("transition","none"),e=n.fancybox.getTranslate(l),e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(l,e),r.trigger("afterZoom"+t),o.apply(r),r.isAnimating=!1},e),!0))},canPan:function(){var t=this,e=t.current,n=e.$placeholder,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},isScaledDown:function(){var t=this,e=t.current,o=e.$placeholder,s=!1;return o&&(s=n.fancybox.getTranslate(o),s=s.width<e.width||s.height<e.height),s},scaleToActual:function(t,e,s){var i,a,r,c,l,u=this,d=u.current,p=d.$placeholder,h=parseInt(d.$slide.width(),10),f=parseInt(d.$slide.height(),10),g=d.width,b=d.height;p&&(u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*f:e,i=n.fancybox.getTranslate(p),c=g/i.width,l=b/i.height,a=.5*h-.5*g,r=.5*f-.5*b,g>h&&(a=i.left*c-(t*c-t),a>0&&(a=0),a<h-g&&(a=h-g)),b>f&&(r=i.top*l-(e*l-e),r>0&&(r=0),r<f-b&&(r=f-b)),u.updateCursor(g,b),n.fancybox.animate(p,null,{top:r,left:a,scaleX:c,scaleY:l},s||d.opts.speed,function(){u.isAnimating=!1}))},scaleToFit:function(t){var e,o=this,s=o.current,i=s.$placeholder;i&&(o.isAnimating=!0,e=o.getFitPos(s),o.updateCursor(e.width,e.height),n.fancybox.animate(i,null,{top:e.top,left:e.left,scaleX:e.width/i.width(),scaleY:e.height/i.height()},t||s.opts.speed,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,s,i,r,c,l,u=t.$placeholder||t.$content,d=t.width,p=t.height,h=t.opts.margin;return!(!u||!u.length||!d&&!p)&&("number"===n.type(h)&&(h=[h,h]),2==h.length&&(h=[h[0],h[1],h[0],h[1]]),a.width()<800&&(h=[0,0,0,0]),e=parseInt(t.$slide.width(),10)-(h[1]+h[3]),o=parseInt(t.$slide.height(),10)-(h[0]+h[2]),s=Math.min(1,e/d,o/p),c=Math.floor(s*d),l=Math.floor(s*p),i=Math.floor(.5*(o-l))+h[0],r=Math.floor(.5*(e-c))+h[3],{top:i,left:r,width:c,height:l})},update:function(t,e,o,s){var i,a=this;a.isAnimating!==!0&&a.current&&(i=a.current.pos*Math.floor(a.current.$slide.width())*-1-a.current.pos*a.current.opts.gutter,o=parseInt(o,10)||0,n.fancybox.stop(a.$refs.slider),t===!1?a.updateSlide(a.current,e):n.each(a.slides,function(t,n){a.updateSlide(n,e)}),o?n.fancybox.animate(a.$refs.slider,null,{top:0,left:i},o,function(){a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)}):(n.fancybox.setTranslate(a.$refs.slider,{top:0,left:i}),a.current.isMoved=!0,"function"===n.type(s)&&s.apply(a)))},updateSlide:function(t,e){var o,s=this,i=t.$placeholder;t=t||s.current,t&&!s.isClosing&&(o=t.pos*Math.floor(t.$slide.width())+t.pos*t.opts.gutter,o!==t.leftPos&&(n.fancybox.setTranslate(t.$slide,{top:0,left:o}),t.leftPos=o),e!==!1&&i&&(n.fancybox.setTranslate(i,s.getFitPos(t)),t.pos===s.currPos&&s.updateCursor()),t.$slide.trigger("refresh"),s.trigger("onUpdate",t))},updateCursor:function(t,e){var n,s=this,i=s.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");!s.isClosing&&s.opts.touch&&(n=t!==o&&e!==o?t<s.current.width&&e<s.current.height:s.isScaledDown(),n?i.addClass("fancybox-controls--canzoomIn"):s.group.length<2?i.addClass("fancybox-controls--canzoomOut"):i.addClass("fancybox-controls--canGrab"))},loadSlide:function(t){var e,o,s,i=this;if(t&&!t.isLoaded&&!t.isLoading){switch(t.isLoading=!0,i.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":i.setImage(t);break;case"iframe":i.setIframe(t);break;case"html":i.setContent(t,t.content);break;case"inline":n(t.src).length?i.setContent(t,n(t.src)):i.setError(t);break;case"ajax":i.showLoading(t),s=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&i.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&i.setError(t)}})),o.one("onReset",function(){s.abort()});break;default:i.setError(t)}return!0}},setImage:function(e){var o,s,i,a,r=this,c=e.opts.image.srcset;if(e.isLoaded&&!e.hasError)return void r.afterLoad(e);if(c){i=t.devicePixelRatio||1,a=t.innerWidth*i,s=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),s.sort(function(t,e){return t.value-e.value});for(var l=0;l<s.length;l++){var u=s[l];if("w"===u.postfix&&u.value>=a||"x"===u.postfix&&u.value>=i){o=u;break}}!o&&s.length&&(o=s[s.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$placeholder=n('<div class="fancybox-placeholder"></div>').hide().appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("load error",function(){r.isClosing||(n("<img/>")[0].src=e.src,r.revealImage(e,function(){r.setBigImage(e),r.firstRun&&e.index===r.currIndex&&r.preload()}))}).addClass("fancybox-image").appendTo(e.$placeholder).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.afterLoad(t),t.$ghost&&(t.timouts=setTimeout(function(){t.$ghost.hide()},350)))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$placeholder),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},150),t.opts.image.protect&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$placeholder).on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0})},revealImage:function(t,e){var o=this;return e=e||n.noop,"image"!==t.type||t.hasError||t.isRevealed===!0?void e.apply(o):(t.isRevealed=!0,void(t.pos===o.currPos&&o.zoomInOut("In",t.opts.speed,e)||(t.$ghost&&!t.isLoaded&&o.updateSlide(t,!0),t.pos===o.currPos?n.fancybox.animate(t.$placeholder,{opacity:0},{opacity:1},300,e):t.$placeholder.show(),e.apply(o))))},setIframe:function(t){var e,s=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content"></div>').css(i.css).appendTo(a),e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",n.fancybox.isTouch?"auto":i.scrolling).appendTo(t.$content),i.preload?(t.$content.addClass("fancybox-tmp"),s.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),s.afterLoad(t)}),a.on("refresh.fb",function(){var n,s,a,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),s=n.find("body")}catch(t){}s&&s.length&&(i.css.width===o||i.css.height===o)&&(a=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(s.outerWidth(!0)+(l.width()-a)),c=Math.ceil(s.outerHeight(!0)),l.css({width:i.css.width===o?r+(l.outerWidth()-l.innerWidth()):i.css.width,height:i.css.height===o?c+(l.outerHeight()-l.innerHeight()):i.css.height})),l.removeClass("fancybox-tmp")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn&&t.$content.prepend(t.opts.closeTpl),a.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.data("placeholder")&&e.parents(".fancybox-slide").trigger("onReset"),e.data({placeholder:n("<div></div>").hide().insertAfter(e)}).css("display","inline-block")):("string"===n.type(e)&&(e=n("<div>").append(e).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.selector&&(e=n("<div>").html(e).find(t.opts.selector))),t.$slide.one("onReset",function(){var o=l(e)?e.data("placeholder"):0;o&&(e.hide().replaceAll(o),e.data("placeholder",null)),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn===!0&&t.$content.find(".fancybox-close-small").remove().end().eq(0).append(t.opts.closeTpl),this.afterLoad(t))},setError:function(t){t.hasError=!0,this.setContent(t,t.opts.errorTpl)},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterMove:function(){var t=this,e=t.current,o={};e&&(e.$slide.siblings().trigger("onReset"),n.each(t.slides,function(e,n){n.pos>=t.currPos-1&&n.pos<=t.currPos+1?o[n.pos]=n:n&&n.$slide.remove()}),t.slides=o,t.trigger("afterMove"),e.isLoaded&&t.complete())},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.$ghost||e.updateSlide(t,!0),t.index===e.currIndex&&t.isMoved?e.complete():t.$ghost||e.revealImage(t))},complete:function(){var t=this,e=t.current;t.revealImage(e,function(){e.isComplete=!0,e.$slide.addClass("fancybox-slide--complete"),t.updateCursor(),t.trigger("onComplete"),e.opts.focus&&"image"!==e.type&&"iframe"!==e.type&&t.focus()})},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;t=e&&e.isComplete?e.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first"):null,t&&t.length||(t=this.$refs.container),t.focus(),this.$refs.slider_wrap.scrollLeft(0),e&&e.$slide.scrollTop(0)},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t){var e=this,o=e.current,s=o.opts.speed,i=n.proxy(function(){e.cleanUp(t)},this);return!e.isAnimating&&!e.isClosing&&(e.trigger("beforeClose",t)===!1?(n.fancybox.stop(e.$refs.slider),void u(function(){e.update(!0,!0,150)})):(e.isClosing=!0,o.timouts&&clearTimeout(o.timouts),t!==!0&&n.fancybox.stop(e.$refs.slider),e.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"),o.$slide.removeClass("fancybox-slide--complete").siblings().remove(),o.isMoved||o.$slide.css("overflow","visible"),e.removeEvents(),e.hideLoading(o),e.hideControls(),e.updateCursor(),e.$refs.bg.css("transition-duration",s+"ms"),this.$refs.container.removeClass("fancybox-container--ready"),void(t===!0?setTimeout(i,s):e.zoomInOut("Out",s,i)||n.fancybox.animate(e.$refs.container,null,{opacity:0},s,"easeInSine",i))))},cleanUp:function(t){var e,o=this;o.$refs.slider.children().trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(n("html").removeClass("fancybox-enabled"),n("body").removeAttr("style"),a.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("#fancybox-noscroll").remove()),o.$lastFocus&&o.$lastFocus.focus()},trigger:function(t,o){var s,i=Array.prototype.slice.call(arguments,1),a=this,r=o&&o.opts?o:a.current;return r?i.unshift(r):r=a,i.unshift(a),n.isFunction(r.opts[t])&&(s=r.opts[t].apply(r,i)),s===!1?s:void("afterClose"===t?n(e).trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},toggleControls:function(t){this.isHiddenControls?this.updateControls(t):this.hideControls()},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-controls"),this.$refs.container.removeClass("fancybox-show-caption")},updateControls:function(t){var e=this,o=e.$refs.container,s=e.$refs.caption,i=e.current,a=i.index,r=i.opts,c=r.caption;this.isHiddenControls&&t!==!0||(this.isHiddenControls=!1,o.addClass("fancybox-show-controls").toggleClass("fancybox-show-infobar",!!r.infobar&&e.group.length>1).toggleClass("fancybox-show-buttons",!!r.buttons).toggleClass("fancybox-is-modal",!!r.modal),n(".fancybox-button--left",o).toggleClass("fancybox-button--disabled",!r.loop&&a<=0),n(".fancybox-button--right",o).toggleClass("fancybox-button--disabled",!r.loop&&a>=e.group.length-1),n(".fancybox-button--play",o).toggle(!!(r.slideShow&&e.group.length>1)),n(".fancybox-button--close",o).toggle(!!r.closeBtn),n(".js-fancybox-count",o).html(e.group.length),n(".js-fancybox-index",o).html(a+1),i.$slide.trigger("refresh"),s&&s.empty(),c&&c.length?(s.html(c),this.$refs.container.addClass("fancybox-show-caption "),e.$caption=s):this.$refs.container.removeClass("fancybox-show-caption"))}}),n.fancybox={version:"3.0.47",defaults:i,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof p&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new p(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},isTouch:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<=11)}(),getTranslate:function(t){var e,n;return!(!t||!t.length)&&(e=t.get(0).getBoundingClientRect(),n=t.eq(0).css("transform"),n&&n.indexOf("matrix")!==-1?(n=n.split("(")[1],n=n.split(")")[0],n=n.split(",")):n=[],n.length?(n=n.length>10?[n[13],n[12],n[0],n[5]]:[n[5],n[4],n[0],n[3]],n=n.map(parseFloat)):n=[0,0,1,1],{top:n[0],left:n[1],scaleX:n[2],scaleY:n[3],opacity:parseFloat(t.css("opacity")),width:e.width,height:e.height})},setTranslate:function(t,e){var n="",s={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().top:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(s.transform=n),e.opacity!==o&&(s.opacity=e.opacity),e.width!==o&&(s.width=e.width),e.height!==o&&(s.height=e.height),t.css(s)},easing:{easeOutCubic:function(t,e,n,o){return n*((t=t/o-1)*t*t+1)+e},easeInCubic:function(t,e,n,o){return n*(t/=o)*t*t+e},easeOutSine:function(t,e,n,o){return n*Math.sin(t/o*(Math.PI/2))+e},easeInSine:function(t,e,n,o){return-n*Math.cos(t/o*(Math.PI/2))+n+e}},stop:function(t){t.removeData("animateID")},animate:function(t,e,s,i,a,r){var c,l,d,p=this,h=null,f=0,g=function(){s.scaleX!==o&&s.scaleY!==o&&e&&e.width!==o&&e.height!==o&&(s.width=e.width*s.scaleX,s.height=e.height*s.scaleY,s.scaleX=1,s.scaleY=1),p.setTranslate(t,s),r()},b=function(n){if(c=[],l=0,t.length&&t.data("animateID")===d){if(n=n||Date.now(),h&&(l=n-h),h=n,f+=l,f>=i)return void g();for(var r in s)s.hasOwnProperty(r)&&e[r]!==o&&(e[r]==s[r]?c[r]=s[r]:c[r]=p.easing[a](f,e[r],s[r]-e[r],i));p.setTranslate(t,c),u(b)}};p.animateID=d=p.animateID===o?1:p.animateID+1,t.data("animateID",d),r===o&&"function"==n.type(a)&&(r=a,a=o),a||(a="easeOutCubic"),r=r||n.noop,e?this.setTranslate(t,e):e=this.getTranslate(t),i?(t.show(),u(b)):g()}},n.fn.fancybox=function(t){return this.off("click.fb-start").on("click.fb-start",{items:this,options:t||{}},s),this},n(e).on("click.fb-start","[data-fancybox]",s)}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,s){t.each(s.group,function(o,s){var i,a,r,c,l,u,d=s.src||"",p=!1;s.type||(t.each(n,function(n,o){if(a=d.match(o.matcher),l={},u=n,a){if(p=o.type,o.paramPlace&&a[o.paramPlace]){c=a[o.paramPlace],"?"==c[0]&&(c=c.substring(1)),c=c.split("&");for(var h=0;h<c.length;++h){var f=c[h].split("=",2);2==f.length&&(l[f[0]]=decodeURIComponent(f[1].replace(/\+/g," ")))}}return r=t.extend(!0,{},o.params,s.opts[n],l),d="function"===t.type(o.url)?o.url.call(this,a,r,s):e(o.url,a,r),i="function"===t.type(o.thumb)?o.thumb.call(this,a,r,s):e(o.thumb,a),"vimeo"===u&&(d=d.replace("&%23","#")),!1}}),p?(s.src=d,s.type=p,s.opts.thumb||s.opts.$thumb&&s.opts.$thumb.length||(s.opts.thumb=i),"iframe"===p&&(t.extend(!0,s.opts,{iframe:{preload:!1,scrolling:"no"},smallBtn:!1,closeBtn:!0,fullScreen:!1,slideShow:!1}),s.opts.slideClass+=" fancybox-slide--video")):s.type="iframe")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)}}(),s=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},i=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},a=function(t){return t.is("a")||t.is("button")||t.is("input")||t.is("select")||t.is("textarea")||n.isFunction(t.get(0).onclick)},r=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],s=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,i=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return s||i},c=function(t){for(var e=!1;;){if(e=r(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-slider")||t.is("body"))break}return e},l=function(t){var e=this;e.instance=t,e.$wrap=t.$refs.slider_wrap,e.$slider=t.$refs.slider,e.$container=t.$refs.container,e.destroy(),e.$wrap.on("touchstart.fb mousedown.fb",n.proxy(e,"ontouchstart"))};l.prototype.destroy=function(){this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")},l.prototype.ontouchstart=function(e){var o=this,r=n(e.target),l=o.instance,u=l.current,d=u.$content||u.$placeholder;return o.startPoints=s(e),o.$target=r,o.$content=d,o.canvasWidth=Math.round(u.$slide[0].clientWidth),o.canvasHeight=Math.round(u.$slide[0].clientHeight),o.startEvent=e,e.originalEvent.clientX>o.canvasWidth+u.$slide.offset().left||(a(r)||a(r.parent())||c(r)?void 0:u.opts.touch?void(e.originalEvent&&2==e.originalEvent.button||(e.stopPropagation(),e.preventDefault(),!u||o.instance.isAnimating||o.instance.isClosing||!o.startPoints||o.startPoints.length>1&&!u.isMoved||(o.$wrap.off("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(o,"ontouchend")),o.$wrap.on("touchmove.fb mousemove.fb",n.proxy(o,"ontouchmove")),o.startTime=(new Date).getTime(),o.distanceX=o.distanceY=o.distance=0,o.canTap=!1,o.isPanning=!1,o.isSwiping=!1,o.isZooming=!1,o.sliderStartPos=n.fancybox.getTranslate(o.$slider),o.contentStartPos=n.fancybox.getTranslate(o.$content),o.contentLastPos=null,1!==o.startPoints.length||o.isZooming||(o.canTap=u.isMoved,"image"===u.type&&(o.contentStartPos.width>o.canvasWidth+1||o.contentStartPos.height>o.canvasHeight+1)?(n.fancybox.stop(o.$content),o.isPanning=!0):(n.fancybox.stop(o.$slider),o.isSwiping=!0),o.$container.addClass("fancybox-controls--isGrabbing")),2===o.startPoints.length&&u.isMoved&&!u.hasError&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(o.isZooming=!0,o.isSwiping=!1,o.isPanning=!1,n.fancybox.stop(o.$content),o.centerPointStartX=.5*(o.startPoints[0].x+o.startPoints[1].x)-n(t).scrollLeft(),o.centerPointStartY=.5*(o.startPoints[0].y+o.startPoints[1].y)-n(t).scrollTop(),o.percentageOfImageAtPinchPointX=(o.centerPointStartX-o.contentStartPos.left)/o.contentStartPos.width,o.percentageOfImageAtPinchPointY=(o.centerPointStartY-o.contentStartPos.top)/o.contentStartPos.height,o.startDistanceBetweenFingers=i(o.startPoints[0],o.startPoints[1]))))):(o.endPoints=o.startPoints,o.ontap()))},l.prototype.ontouchmove=function(t){var e=this;t.preventDefault(),e.newPoints=s(t),e.newPoints&&e.newPoints.length&&(e.distanceX=i(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=i(e.newPoints[0],e.startPoints[0],"y"),e.distance=i(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()))},l.prototype.onSwipe=function(){var e,s=this,i=s.isSwiping,a=s.sliderStartPos.left;i===!0?Math.abs(s.distance)>10&&(s.instance.group.length<2?s.isSwiping="y":!s.instance.current.isMoved||s.instance.opts.touch.vertical===!1||"auto"===s.instance.opts.touch.vertical&&n(t).width()>800?s.isSwiping="x":(e=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),
s.isSwiping=e>45&&e<135?"y":"x"),s.canTap=!1,s.instance.current.isMoved=!1,s.startPoints=s.newPoints):("x"==i&&(!s.instance.current.opts.loop&&0===s.instance.current.index&&s.distanceX>0?a+=Math.pow(s.distanceX,.8):!s.instance.current.opts.loop&&s.instance.current.index===s.instance.group.length-1&&s.distanceX<0?a-=Math.pow(-s.distanceX,.8):a+=s.distanceX),s.sliderLastPos={top:"x"==i?0:s.sliderStartPos.top+s.distanceY,left:a},o(function(){n.fancybox.setTranslate(s.$slider,s.sliderLastPos)}))},l.prototype.onPan=function(){var t,e,s,i=this;i.canTap=!1,t=i.contentStartPos.width>i.canvasWidth?i.contentStartPos.left+i.distanceX:i.contentStartPos.left,e=i.contentStartPos.top+i.distanceY,s=i.limitMovement(t,e,i.contentStartPos.width,i.contentStartPos.height),s.scaleX=i.contentStartPos.scaleX,s.scaleY=i.contentStartPos.scaleY,i.contentLastPos=s,o(function(){n.fancybox.setTranslate(i.$content,i.contentLastPos)})},l.prototype.limitMovement=function(t,e,n,o){var s,i,a,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,p=c.contentStartPos.top,h=c.distanceX,f=c.distanceY;return s=Math.max(0,.5*l-.5*n),i=Math.max(0,.5*u-.5*o),a=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>s&&(t=s-1+Math.pow(-s+d+h,.8)||0),h<0&&t<a&&(t=a+1-Math.pow(a-d-h,.8)||0)),o>u&&(f>0&&e>i&&(e=i-1+Math.pow(-i+p+f,.8)||0),f<0&&e<r&&(e=r+1-Math.pow(r-p-f,.8)||0)),{top:e,left:t}},l.prototype.limitPosition=function(t,e,n,o){var s=this,i=s.canvasWidth,a=s.canvasHeight;return n>i?(t=t>0?0:t,t=t<i-n?i-n:t):t=Math.max(0,i/2-n/2),o>a?(e=e>0?0:e,e=e<a-o?a-o:e):e=Math.max(0,a/2-o/2),{top:e,left:t}},l.prototype.onZoom=function(){var e=this,s=e.contentStartPos.width,a=e.contentStartPos.height,r=e.contentStartPos.left,c=e.contentStartPos.top,l=i(e.newPoints[0],e.newPoints[1]),u=l/e.startDistanceBetweenFingers,d=Math.floor(s*u),p=Math.floor(a*u),h=(s-d)*e.percentageOfImageAtPinchPointX,f=(a-p)*e.percentageOfImageAtPinchPointY,g=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),b=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),m=g-e.centerPointStartX,y=b-e.centerPointStartY,v=r+(h+m),x=c+(f+y),w={top:x,left:v,scaleX:e.contentStartPos.scaleX*u,scaleY:e.contentStartPos.scaleY*u};e.canTap=!1,e.newWidth=d,e.newHeight=p,e.contentLastPos=w,o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},l.prototype.ontouchend=function(t){var e=this,o=e.instance.current,i=Math.max((new Date).getTime()-e.startTime,1),a=e.isSwiping,r=e.isPanning,c=e.isZooming;return e.endPoints=s(t),e.$container.removeClass("fancybox-controls--isGrabbing"),e.$wrap.off("touchmove.fb mousemove.fb",n.proxy(this,"ontouchmove")),e.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb",n.proxy(this,"ontouchend")),e.isSwiping=!1,e.isPanning=!1,e.isZooming=!1,e.canTap?e.ontap():(e.velocityX=e.distanceX/i*.5,e.velocityY=e.distanceY/i*.5,e.speed=o.opts.speed||330,e.speedX=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityX)*e.speed)),e.speedY=Math.max(.75*e.speed,Math.min(1.5*e.speed,1/Math.abs(e.velocityY)*e.speed)),void(r?e.endPanning():c?e.endZooming():e.endSwiping(a)))},l.prototype.endSwiping=function(t){var e=this;"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.$slider,null,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,left:e.sliderStartPos.left,opacity:0},e.speedY),e.instance.close(!0)):"x"==t&&e.distanceX>50?e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50?e.instance.next(e.speedX):e.instance.update(!1,!0,150)},l.prototype.endPanning=function(){var t,e,o,s=this;s.contentLastPos&&(t=s.contentLastPos.left+s.velocityX*s.speed*2,e=s.contentLastPos.top+s.velocityY*s.speed*2,o=s.limitPosition(t,e,s.contentStartPos.width,s.contentStartPos.height),o.width=s.contentStartPos.width,o.height=s.contentStartPos.height,n.fancybox.animate(s.$content,null,o,s.speed,"easeOutSine"))},l.prototype.endZooming=function(){var t,e,o,s,i=this,a=i.instance.current,r=i.newWidth,c=i.newHeight;i.contentLastPos&&(t=i.contentLastPos.left,e=i.contentLastPos.top,s={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(i.$content,s),r<i.canvasWidth&&c<i.canvasHeight?i.instance.scaleToFit(150):r>a.width||c>a.height?i.instance.scaleToActual(i.centerPointStartX,i.centerPointStartY,150):(o=i.limitPosition(t,e,r,c),n.fancybox.animate(i.$content,null,o,i.speed,"easeOutSine")))},l.prototype.ontap=function(){var t=this,e=t.instance,o=e.current,s=t.endPoints[0].x,i=t.endPoints[0].y;if(s-=t.$wrap.offset().left,i-=t.$wrap.offset().top,e.SlideShow&&e.SlideShow.isActive&&e.SlideShow.stop(),!n.fancybox.isTouch)return o.opts.closeClickOutside&&t.$target.is(".fancybox-slide")?void e.close(t.startEvent):void("image"==o.type&&o.isMoved&&(e.canPan()?e.scaleToFit():e.isScaledDown()?e.scaleToActual(s,i):e.group.length<2&&e.close(t.startEvent)));if(t.tapped){if(clearTimeout(t.tapped),t.tapped=null,Math.abs(s-t.x)>50||Math.abs(i-t.y)>50||!o.isMoved)return this;"image"==o.type&&(o.isLoaded||o.$ghost)&&(e.canPan()?e.scaleToFit():e.isScaledDown()&&e.scaleToActual(s,i))}else t.x=s,t.y=i,t.tapped=setTimeout(function(){t.tapped=null,e.toggleControls(!0)},300);return this},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new l(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=e('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(t.instance.$refs.buttons),t.instance.$refs.container.on("click","[data-fancybox-play]",function(){t.toggle()})},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):t.stop()},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this;t.stop(),t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)&&(t.instance.$refs.container.on({"beforeLoad.fb.player":e.proxy(t,"clear"),"onComplete.fb.player":e.proxy(t,"set")}),t.isActive=!0,t.instance.current.isComplete&&t.set(),t.instance.$refs.container.trigger("onPlayStart"),t.$button.addClass("fancybox-button--pause"))},stop:function(){var t=this;t.clear(),t.instance.$refs.container.trigger("onPlayEnd").off(".player"),t.$button.removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on("onInit.fb",function(t,e){e&&e.group.length>1&&e.opts.slideShow&&!e.SlideShow&&(e.SlideShow=new n(e))}),e(t).on("beforeClose.fb onDeactivate.fb",function(t,e){e&&e.SlideShow&&e.SlideShow.stop()})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,s=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i={};for(n=0;n<s.length;n++)if(e=s[n],e&&e[1]in t){for(o=0;o<e.length;o++)i[s[0][o]]=e[o];return i}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(t){this.isFullscreen()?this.exit():this.request(t)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,n){var s;n&&n.opts.fullScreen&&!n.FullScreen&&(s=n.$refs.container,n.$refs.button_fs=e('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(n.$refs.buttons),s.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(s[0])}),n.opts.fullScreen.requestOnStart===!0&&o.request(s[0]))},"beforeMove.fb":function(t,e){e&&e.$refs.button_fs&&e.$refs.button_fs.toggle(!!e.current.opts.fullScreen)},"beforeClose.fb":function(){o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance(),n=t?t.current.$placeholder:null;n&&(n.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this;t.$button=e('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.toggle()})},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click touchstart","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,s,i=e(this).parent().removeClass("fancybox-thumbs-loading"),a=i.outerWidth(),r=i.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/a,s=n/r,o>=1&&s>=1&&(o>s?(t/=s,n=r):(t=a,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*a-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-container--thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.$grid.show(),this.focus()):this.$grid&&this.$grid.hide(),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible?this.hide():this.show()}}),e(t).on("onInit.fb",function(t,e){var o=e.group[0],s=e.group[1];e.opts.thumbs&&!e.Thumbs&&e.group.length>1&&("image"==o.type||o.opts.thumb||o.opts.$thumb)&&("image"==s.type||s.opts.thumb||s.opts.$thumb)&&(e.Thumbs=new n(e))}),e(t).on("beforeMove.fb",function(t,e,n){var o=e&&e.Thumbs;o&&(n.modal?(o.$button.hide(),o.hide()):(e.opts.thumbs.showOnStart===!0&&e.firstRun&&o.show(),o.$button.show(),o.isVisible&&o.focus()))}),e(t).on("beforeClose.fb",function(t,e){e&&e.Thumbs&&(e.Thumbs.isVisible&&e.opts.thumbs.hideOnClosing!==!1&&e.Thumbs.close(),e.Thumbs=null)})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,s=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:s}}function s(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click"))}function i(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var a=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?a&&a!==t.gallery+"-"+t.index&&(a=null,n.fancybox.close()):""!==t.gallery&&s(t)}),n(t).on({"onInit.fb":function(t,e){var n=o(),s=i(e);s&&n.gallery&&s==n.gallery&&(e.currIndex=n.index-1)},"beforeMove.fb":function(n,o,s){var r=i(o);r&&""!==r&&(e.location.hash.indexOf(r)<0&&(o.opts.origHash=e.location.hash),a=r+(o.group.length>1?"-"+(s.index+1):""),"pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+"#"+a):e.location.hash=a)},"beforeClose.fb":function(n,o,s){var r=i(o),c=o&&o.opts.origHash?o.opts.origHash:"";r&&""!==r&&("pushState"in history?history.pushState("",t.title,e.location.pathname+e.location.search+c):e.location.hash=c),a=null}}),s(o()))},50)})}(document,window,window.jQuery);/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
    var NivoSlider = function(element, options){
        // Defaults are below
        var settings = $.extend({}, $.fn.nivoSlider.defaults, options);

        // Useful variables. Play carefully.
        var vars = {
            currentSlide: 0,
            currentImage: '',
            totalSlides: 0,
            running: false,
            paused: false,
            stop: false,
            controlNavEl: false
        };

        // Get this slider
        var slider = $(element);
        slider.data('nivo:vars', vars).addClass('nivoSlider');

        // Find our slider children
        var kids = slider.children();
        kids.each(function() {
            var child = $(this);
            var link = '';
            if(!child.is('img')){
                if(child.is('a')){
                    child.addClass('nivo-imageLink');
                    link = child;
                }
                child = child.find('img:first');
            }
            // Get img width & height
            var childWidth = (childWidth === 0) ? child.attr('width') : child.width(),
                childHeight = (childHeight === 0) ? child.attr('height') : child.height();

            if(link !== ''){
                link.css('display','none');
            }
            child.css('display','none');
            vars.totalSlides++;
        });
         
        // If randomStart
        if(settings.randomStart){
            settings.startSlide = Math.floor(Math.random() * vars.totalSlides);
        }
        
        // Set startSlide
        if(settings.startSlide > 0){
            if(settings.startSlide >= vars.totalSlides) { settings.startSlide = vars.totalSlides - 1; }
            vars.currentSlide = settings.startSlide;
        }
        
        // Get initial image
        if($(kids[vars.currentSlide]).is('img')){
            vars.currentImage = $(kids[vars.currentSlide]);
        } else {
            vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
        }
        
        // Show initial link
        if($(kids[vars.currentSlide]).is('a')){
            $(kids[vars.currentSlide]).css('display','block');
        }
        
        // Set first background
        var sliderImg = $('<img/>').addClass('nivo-main-image');
        sliderImg.attr('src', vars.currentImage.attr('src')).show();
        slider.append(sliderImg);

        // Detect Window Resize
        $(window).resize(function() {
            slider.children('img').width(slider.width());
            sliderImg.attr('src', vars.currentImage.attr('src'));
            sliderImg.stop().height('auto');
            $('.nivo-slice').remove();
            $('.nivo-box').remove();
        });

        //Create caption
        slider.append($('<div class="nivo-caption"></div>'));
        
        // Process caption function
        var processCaption = function(settings){
            var nivoCaption = $('.nivo-caption', slider);
            if(vars.currentImage.attr('title') != '' && vars.currentImage.attr('title') != undefined){
                var title = vars.currentImage.attr('title');
                if(title.substr(0,1) == '#') title = $(title).html();   

                if(nivoCaption.css('display') == 'block'){
                    setTimeout(function(){
                        nivoCaption.html(title);
                    }, settings.animSpeed);
                } else {
                    nivoCaption.html(title);
                    nivoCaption.stop().fadeIn(settings.animSpeed);
                }
            } else {
                nivoCaption.stop().fadeOut(settings.animSpeed);
            }
        }
        
        //Process initial  caption
        processCaption(settings);
        
        // In the words of Super Mario "let's a go!"
        var timer = 0;
        if(!settings.manualAdvance && kids.length > 1){
            timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
        }
        
        // Add Direction nav
        if(settings.directionNav){
            slider.append('<div class="nivo-directionNav"><a class="nivo-prevNav">'+ settings.prevText +'</a><a class="nivo-nextNav">'+ settings.nextText +'</a></div>');
            
            $(slider).on('click', 'a.nivo-prevNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                vars.currentSlide -= 2;
                nivoRun(slider, kids, settings, 'prev');
            });
            
            $(slider).on('click', 'a.nivo-nextNav', function(){
                if(vars.running) { return false; }
                clearInterval(timer);
                timer = '';
                nivoRun(slider, kids, settings, 'next');
            });
        }
        
        // Add Control nav
        if(settings.controlNav){
            vars.controlNavEl = $('<div class="nivo-controlNav"></div>');
            slider.after(vars.controlNavEl);
            for(var i = 0; i < kids.length; i++){
                if(settings.controlNavThumbs){
                    vars.controlNavEl.addClass('nivo-thumbs-enabled');
                    var child = kids.eq(i);
                    if(!child.is('img')){
                        child = child.find('img:first');
                    }
                    if(child.attr('data-thumb')) vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'"><img src="'+ child.attr('data-thumb') +'" alt="" /></a>');
                } else {
                    vars.controlNavEl.append('<a class="nivo-control" rel="'+ i +'">'+ (i + 1) +'</a>');
                }
            }

            //Set initial active link
            $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            
            $('a', vars.controlNavEl).bind('click', function(){
                if(vars.running) return false;
                if($(this).hasClass('active')) return false;
                clearInterval(timer);
                timer = '';
                sliderImg.attr('src', vars.currentImage.attr('src'));
                vars.currentSlide = $(this).attr('rel') - 1;
                nivoRun(slider, kids, settings, 'control');
            });
        }
        
        //For pauseOnHover setting
        if(settings.pauseOnHover){
            slider.hover(function(){
                vars.paused = true;
                clearInterval(timer);
                timer = '';
            }, function(){
                vars.paused = false;
                // Restart the timer
                if(timer === '' && !settings.manualAdvance){
                    timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
                }
            });
        }
        
        // Event when Animation finishes
        slider.bind('nivo:animFinished', function(){
            sliderImg.attr('src', vars.currentImage.attr('src'));
            vars.running = false; 
            // Hide child links
            $(kids).each(function(){
                if($(this).is('a')){
                   $(this).css('display','none');
                }
            });
            // Show current link
            if($(kids[vars.currentSlide]).is('a')){
                $(kids[vars.currentSlide]).css('display','block');
            }
            // Restart the timer
            if(timer === '' && !vars.paused && !settings.manualAdvance){
                timer = setInterval(function(){ nivoRun(slider, kids, settings, false); }, settings.pauseTime);
            }
            // Trigger the afterChange callback
            settings.afterChange.call(this);
        }); 
        
        // Add slices for slice animations
        var createSlices = function(slider, settings, vars) {
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var sliceHeight = ($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().is('a')) ? $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').parent().height() : $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height();

            for(var i = 0; i < settings.slices; i++){
                var sliceWidth = Math.round(slider.width()/settings.slices);
                
                if(i === settings.slices-1){
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:(slider.width()-(sliceWidth*i))+'px',
                            height:sliceHeight+'px', 
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                } else {
                    slider.append(
                        $('<div class="nivo-slice" name="'+i+'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block !important; top:0; left:-'+ ((sliceWidth + (i * sliceWidth)) - sliceWidth) +'px;" /></div>').css({ 
                            left:(sliceWidth*i)+'px', 
                            width:sliceWidth+'px',
                            height:sliceHeight+'px',
                            opacity:'0',
                            overflow:'hidden'
                        })
                    );
                }
            }
            
            $('.nivo-slice', slider).height(sliceHeight);
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };
        
        // Add boxes for box animations
        var createBoxes = function(slider, settings, vars){
        	if($(vars.currentImage).parent().is('a')) $(vars.currentImage).parent().css('display','block');
            $('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').width(slider.width()).css('visibility', 'hidden').show();
            var boxWidth = Math.round(slider.width()/settings.boxCols),
                boxHeight = Math.round($('img[src="'+ vars.currentImage.attr('src') +'"]', slider).not('.nivo-main-image,.nivo-control img').height() / settings.boxRows);
            
                        
            for(var rows = 0; rows < settings.boxRows; rows++){
                for(var cols = 0; cols < settings.boxCols; cols++){
                    if(cols === settings.boxCols-1){
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:(slider.width()-(boxWidth*cols))+'px'
                                
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    } else {
                        slider.append(
                            $('<div class="nivo-box" name="'+ cols +'" rel="'+ rows +'"><img src="'+ vars.currentImage.attr('src') +'" style="position:absolute; width:'+ slider.width() +'px; height:auto; display:block; top:-'+ (boxHeight*rows) +'px; left:-'+ (boxWidth*cols) +'px;" /></div>').css({ 
                                opacity:0,
                                left:(boxWidth*cols)+'px', 
                                top:(boxHeight*rows)+'px',
                                width:boxWidth+'px'
                            })
                        );
                        $('.nivo-box[name="'+ cols +'"]', slider).height($('.nivo-box[name="'+ cols +'"] img', slider).height()+'px');
                    }
                }
            }
            
            sliderImg.stop().animate({
                height: $(vars.currentImage).height()
            }, settings.animSpeed);
        };

        // Private run method
        var nivoRun = function(slider, kids, settings, nudge){          
            // Get our vars
            var vars = slider.data('nivo:vars');
            
            // Trigger the lastSlide callback
            if(vars && (vars.currentSlide === vars.totalSlides - 1)){ 
                settings.lastSlide.call(this);
            }
            
            // Stop
            if((!vars || vars.stop) && !nudge) { return false; }
            
            // Trigger the beforeChange callback
            settings.beforeChange.call(this);

            // Set current background before change
            if(!nudge){
                sliderImg.attr('src', vars.currentImage.attr('src'));
            } else {
                if(nudge === 'prev'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
                if(nudge === 'next'){
                    sliderImg.attr('src', vars.currentImage.attr('src'));
                }
            }
            
            vars.currentSlide++;
            // Trigger the slideshowEnd callback
            if(vars.currentSlide === vars.totalSlides){ 
                vars.currentSlide = 0;
                settings.slideshowEnd.call(this);
            }
            if(vars.currentSlide < 0) { vars.currentSlide = (vars.totalSlides - 1); }
            // Set vars.currentImage
            if($(kids[vars.currentSlide]).is('img')){
                vars.currentImage = $(kids[vars.currentSlide]);
            } else {
                vars.currentImage = $(kids[vars.currentSlide]).find('img:first');
            }
            
            // Set active links
            if(settings.controlNav){
                $('a', vars.controlNavEl).removeClass('active');
                $('a:eq('+ vars.currentSlide +')', vars.controlNavEl).addClass('active');
            }
            
            // Process caption
            processCaption(settings);            
            
            // Remove any slices from last transition
            $('.nivo-slice', slider).remove();
            
            // Remove any boxes from last transition
            $('.nivo-box', slider).remove();
            
            var currentEffect = settings.effect,
                anims = '';
                
            // Generate random effect
            if(settings.effect === 'random'){
                anims = new Array('sliceDownRight','sliceDownLeft','sliceUpRight','sliceUpLeft','sliceUpDown','sliceUpDownLeft','fold','fade',
                'boxRandom','boxRain','boxRainReverse','boxRainGrow','boxRainGrowReverse');
                currentEffect = anims[Math.floor(Math.random()*(anims.length + 1))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Run random effect from specified set (eg: effect:'fold,fade')
            if(settings.effect.indexOf(',') !== -1){
                anims = settings.effect.split(',');
                currentEffect = anims[Math.floor(Math.random()*(anims.length))];
                if(currentEffect === undefined) { currentEffect = 'fade'; }
            }
            
            // Custom transition as defined by "data-transition" attribute
            if(vars.currentImage.attr('data-transition')){
                currentEffect = vars.currentImage.attr('data-transition');
            }
        
            // Run effects
            vars.running = true;
            var timeBuff = 0,
                i = 0,
                slices = '',
                firstSlice = '',
                totalBoxes = '',
                boxes = '';
            
            if(currentEffect === 'sliceDown' || currentEffect === 'sliceDownRight' || currentEffect === 'sliceDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'top': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUp' || currentEffect === 'sliceUpRight' || currentEffect === 'sliceUpLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    slice.css({ 'bottom': '0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'sliceUpDown' || currentEffect === 'sliceUpDownRight' || currentEffect === 'sliceUpDownLeft'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                var v = 0;
                slices = $('.nivo-slice', slider);
                if(currentEffect === 'sliceUpDownLeft') { slices = $('.nivo-slice', slider)._reverse(); }
                
                slices.each(function(){
                    var slice = $(this);
                    if(i === 0){
                        slice.css('top','0px');
                        i++;
                    } else {
                        slice.css('bottom','0px');
                        i = 0;
                    }
                    
                    if(v === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    v++;
                });
            } else if(currentEffect === 'fold'){
                createSlices(slider, settings, vars);
                timeBuff = 0;
                i = 0;
                
                $('.nivo-slice', slider).each(function(){
                    var slice = $(this);
                    var origWidth = slice.width();
                    slice.css({ top:'0px', width:'0px' });
                    if(i === settings.slices-1){
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            slice.animate({ width:origWidth, opacity:'1.0' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 50;
                    i++;
                });
            } else if(currentEffect === 'fade'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': slider.width() + 'px'
                });
    
                firstSlice.animate({ opacity:'1.0' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInRight'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ slider.trigger('nivo:animFinished'); });
            } else if(currentEffect === 'slideInLeft'){
                createSlices(slider, settings, vars);
                
                firstSlice = $('.nivo-slice:first', slider);
                firstSlice.css({
                    'width': '0px',
                    'opacity': '1',
                    'left': '',
                    'right': '0px'
                });

                firstSlice.animate({ width: slider.width() + 'px' }, (settings.animSpeed*2), '', function(){ 
                    // Reset positioning
                    firstSlice.css({
                        'left': '0px',
                        'right': ''
                    });
                    slider.trigger('nivo:animFinished'); 
                });
            } else if(currentEffect === 'boxRandom'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;

                boxes = shuffle($('.nivo-box', slider));
                boxes.each(function(){
                    var box = $(this);
                    if(i === totalBoxes-1){
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed, '', function(){ slider.trigger('nivo:animFinished'); });
                        }, (100 + timeBuff));
                    } else {
                        setTimeout(function(){
                            box.animate({ opacity:'1' }, settings.animSpeed);
                        }, (100 + timeBuff));
                    }
                    timeBuff += 20;
                    i++;
                });
            } else if(currentEffect === 'boxRain' || currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                createBoxes(slider, settings, vars);
                
                totalBoxes = settings.boxCols * settings.boxRows;
                i = 0;
                timeBuff = 0;
                
                // Split boxes into 2D array
                var rowIndex = 0;
                var colIndex = 0;
                var box2Darr = [];
                box2Darr[rowIndex] = [];
                boxes = $('.nivo-box', slider);
                if(currentEffect === 'boxRainReverse' || currentEffect === 'boxRainGrowReverse'){
                    boxes = $('.nivo-box', slider)._reverse();
                }
                boxes.each(function(){
                    box2Darr[rowIndex][colIndex] = $(this);
                    colIndex++;
                    if(colIndex === settings.boxCols){
                        rowIndex++;
                        colIndex = 0;
                        box2Darr[rowIndex] = [];
                    }
                });
                
                // Run animation
                for(var cols = 0; cols < (settings.boxCols * 2); cols++){
                    var prevCol = cols;
                    for(var rows = 0; rows < settings.boxRows; rows++){
                        if(prevCol >= 0 && prevCol < settings.boxCols){
                            /* Due to some weird JS bug with loop vars 
                            being used in setTimeout, this is wrapped
                            with an anonymous function call */
                            (function(row, col, time, i, totalBoxes) {
                                var box = $(box2Darr[row][col]);
                                var w = box.width();
                                var h = box.height();
                                if(currentEffect === 'boxRainGrow' || currentEffect === 'boxRainGrowReverse'){
                                    box.width(0).height(0);
                                }
                                if(i === totalBoxes-1){
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3, '', function(){ slider.trigger('nivo:animFinished'); });
                                    }, (100 + time));
                                } else {
                                    setTimeout(function(){
                                        box.animate({ opacity:'1', width:w, height:h }, settings.animSpeed/1.3);
                                    }, (100 + time));
                                }
                            })(rows, prevCol, timeBuff, i, totalBoxes);
                            i++;
                        }
                        prevCol--;
                    }
                    timeBuff += 100;
                }
            }           
        };
        
        // Shuffle an array
        var shuffle = function(arr){
            for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i, 10), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        };
        
        // For debugging
        var trace = function(msg){
            if(this.console && typeof console.log !== 'undefined') { console.log(msg); }
        };
        
        // Start / Stop
        this.stop = function(){
            if(!$(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = true;
                trace('Stop Slider');
            }
        };
        
        this.start = function(){
            if($(element).data('nivo:vars').stop){
                $(element).data('nivo:vars').stop = false;
                trace('Start Slider');
            }
        };
        
        // Trigger the afterLoad callback
        settings.afterLoad.call(this);
        
        return this;
    };
        
    $.fn.nivoSlider = function(options) {
        return this.each(function(key, value){
            var element = $(this);
            // Return early if this element already has a plugin instance
            if (element.data('nivoslider')) { return element.data('nivoslider'); }
            // Pass options to plugin constructor
            var nivoslider = new NivoSlider(this, options);
            // Store plugin object in this element's data
            element.data('nivoslider', nivoslider);
        });
    };
    
    //Default settings
    $.fn.nivoSlider.defaults = {
        effect: 'random',
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
        prevText: 'Prev',
        nextText: 'Next',
        randomStart: false,
        beforeChange: function(){},
        afterChange: function(){},
        slideshowEnd: function(){},
        lastSlide: function(){},
        afterLoad: function(){}
    };

    $.fn._reverse = [].reverse;
    
})(jQuery);
$('body').append('<div id="top" ><img src="images/commont/top.png" alt="top"/></div>');
$(window).scroll(function() {
	if($(window).scrollTop() > 100) {
		$('#top').fadeIn();
	} else {
		$('#top').fadeOut();
	}
	});
	$('#top').click(function() {
	$('html, body').animate({scrollTop:0},500);
	});
(function() {
  var Util, WeakMap,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in custom) {
        value = custom[key];
        if (value != null) {
          defaults[key] = value;
        }
      }
      return defaults;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    return Util;

  })();

  WeakMap = this.WeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, _i, _len, _ref;
      _ref = this.keys;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        item = _ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = __bind(this.scrollCallback, this);
      this.scrollHandler = __bind(this.scrollHandler, this);
      this.start = __bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      this.animationNameCache = new WeakMap();
    }

    WOW.prototype.init = function() {
      var _ref;
      this.element = window.document.documentElement;
      if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
        return this.start();
      } else {
        return document.addEventListener('DOMContentLoaded', this.start);
      }
    };

    WOW.prototype.start = function() {
      var box, _i, _len, _ref;
      this.boxes = this.element.getElementsByClassName(this.config.boxClass);
      if (this.boxes.length) {
        if (this.disabled()) {
          return this.resetStyle();
        } else {
          _ref = this.boxes;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            this.applyStyle(box, true);
          }
          window.addEventListener('scroll', this.scrollHandler, false);
          window.addEventListener('resize', this.scrollHandler, false);
          return this.interval = setInterval(this.scrollCallback, 50);
        }
      }
    };

    WOW.prototype.stop = function() {
      window.removeEventListener('scroll', this.scrollHandler, false);
      window.removeEventListener('resize', this.scrollHandler, false);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      return box.className = "" + box.className + " " + this.config.animateClass;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, _i, _len, _ref, _results;
      _ref = this.boxes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        box = _ref[_i];
        _results.push(box.setAttribute('style', 'visibility: visible;'));
      }
      return _results;
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, value, vendor, _results;
      _results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        _results.push((function() {
          var _i, _len, _ref, _results1;
          _ref = this.vendors;
          _results1 = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            vendor = _ref[_i];
            _results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return _results1;
        }).call(this));
      }
      return _results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var result, style, vendor, _i, _len, _ref;
      style = window.getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      _ref = this.vendors;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        vendor = _ref[_i];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (_error) {
        animationName = window.getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var _i, _len, _ref, _results;
          _ref = this.boxes;
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            box = _ref[_i];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            _results.push(box);
          }
          return _results;
        }).call(this);
        if (!this.boxes.length) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = window.pageYOffset;
      viewBottom = viewTop + this.element.clientHeight - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util || (this._util = new Util());
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);
$(document).ready(function(e) {
	
	
  	$('.menu_left ul li').hover(function(){
		$(this).children('ul').stop().slideToggle();	
	});
});/*
 * jQuery mmenu v5.7.1
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function n(){e[t].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},i={},a={},o={},e.each([i,a,o],function(e,n){n.add=function(e){e=e.split(" ");for(var t=0,s=e.length;s>t;t++)n[e[t]]=n.mm(e[t])}}),i.mm=function(e){return"mm-"+e},i.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),i.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[t]._c=i,e[t]._d=a,e[t]._e=o,e[t].glbl=r)}var t="mmenu",s="5.7.1";if(!(e[t]&&e[t].version>s)){e[t]=function(e,n,t){this.$menu=e,this._api=["bind","initPanels","update","setSelected","getInstance","openPanel","closePanel","closeAllPanels"],this.opts=n,this.conf=t,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var s=this.$pnls.children();return this._initAddons(),this.initPanels(s),"function"==typeof this.___debug&&this.___debug(),this},e[t].version=s,e[t].addons={},e[t].uniqueId=0,e[t].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[t].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[t].prototype={init:function(e){this.initPanels(e)},initPanels:function(e){e=e.not("."+i.nopanel),e=this._initPanels(e),this.opts.initPanels.call(this,e),this.trigger("initPanels",e),this.trigger("update")},update:function(){this.trigger("update")},setSelected:function(e){this.$menu.find("."+i.listview).children().removeClass(i.selected),e.addClass(i.selected),this.trigger("setSelected",e)},openPanel:function(n){var s=n.parent(),a=this;if(s.hasClass(i.vertical)){var o=s.parents("."+i.subopened);if(o.length)return void this.openPanel(o.first());s.addClass(i.opened),this.trigger("openPanel",n),this.trigger("openingPanel",n),this.trigger("openedPanel",n)}else{if(n.hasClass(i.current))return;var r=this.$pnls.children("."+i.panel),l=r.filter("."+i.current);r.removeClass(i.highest).removeClass(i.current).not(n).not(l).not("."+i.vertical).addClass(i.hidden),e[t].support.csstransitions||l.addClass(i.hidden),n.hasClass(i.opened)?n.nextAll("."+i.opened).addClass(i.highest).removeClass(i.opened).removeClass(i.subopened):(n.addClass(i.highest),l.addClass(i.subopened)),n.removeClass(i.hidden).addClass(i.current),a.trigger("openPanel",n),setTimeout(function(){n.removeClass(i.subopened).addClass(i.opened),a.trigger("openingPanel",n),a.__transitionend(n,function(){a.trigger("openedPanel",n)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var n=e.parent();n.hasClass(i.vertical)&&(n.removeClass(i.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+i.listview).children().removeClass(i.selected).filter("."+i.vertical).removeClass(i.opened);var e=this.$pnls.children("."+i.panel),n=e.first();this.$pnls.children("."+i.panel).not(n).removeClass(i.subopened).removeClass(i.opened).removeClass(i.current).removeClass(i.highest).addClass(i.hidden),this.openPanel(n)},togglePanel:function(e){var n=e.parent();n.hasClass(i.vertical)&&this[n.hasClass(i.opened)?"closePanel":"openPanel"](e)},getInstance:function(){return this},bind:function(e,n){e="init"==e?"initPanels":e,this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(n)},trigger:function(){var e=this,n=Array.prototype.slice.call(arguments),t=n.shift();if(t="init"==t?"initPanels":t,this.cbck[t])for(var s=0,i=this.cbck[t].length;i>s;s++)this.cbck[t][s].apply(e,n)},_initMenu:function(){this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",i.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+i.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(i.wrapper);var n=[i.menu];this.opts.slidingSubmenus||n.push(i.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&n.push(this.opts.extensions),this.$menu.addClass(n.join(" "))},_initPanels:function(n){var t=this,s=this.__findAddBack(n,"ul, ol");this.__refactorClass(s,this.conf.classNames.inset,"inset").addClass(i.nolistview+" "+i.nopanel),s.not("."+i.nolistview).addClass(i.listview);var o=this.__findAddBack(n,"."+i.listview).children();this.__refactorClass(o,this.conf.classNames.selected,"selected"),this.__refactorClass(o,this.conf.classNames.divider,"divider"),this.__refactorClass(o,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(n,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var r=e(),l=n.add(n.find("."+i.panel)).add(this.__findAddBack(n,"."+i.listview).children().children(this.conf.panelNodetype)).not("."+i.nopanel);this.__refactorClass(l,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||l.addClass(i.vertical),l.each(function(){var n=e(this),s=n;n.is("ul, ol")?(n.wrap('<div class="'+i.panel+'" />'),s=n.parent()):s.addClass(i.panel);var a=n.attr("id");n.removeAttr("id"),s.attr("id",a||t.__getUniqueId()),n.hasClass(i.vertical)&&(n.removeClass(t.conf.classNames.vertical),s.add(s.parent()).addClass(i.vertical)),r=r.add(s)});var d=e("."+i.panel,this.$menu);r.each(function(n){var s,o,r=e(this),l=r.parent(),d=l.children("a, span").first();if(l.is("."+i.panels)||(l.data(a.child,r),r.data(a.parent,l)),l.children("."+i.next).length||l.parent().is("."+i.listview)&&(s=r.attr("id"),o=e('<a class="'+i.next+'" href="#'+s+'" data-target="#'+s+'" />').insertBefore(d),d.is("span")&&o.addClass(i.fullsubopen)),!r.children("."+i.navbar).length&&!l.hasClass(i.vertical)){l.parent().is("."+i.listview)?l=l.closest("."+i.panel):(d=l.closest("."+i.panel).find('a[href="#'+r.attr("id")+'"]').first(),l=d.closest("."+i.panel));var c=!1,h=e('<div class="'+i.navbar+'" />');if(t.opts.navbar.add&&r.addClass(i.hasnavbar),l.length){switch(s=l.attr("id"),t.opts.navbar.titleLink){case"anchor":c=d.attr("href");break;case"panel":case"parent":c="#"+s;break;default:c=!1}h.append('<a class="'+i.btn+" "+i.prev+'" href="#'+s+'" data-target="#'+s+'" />').append(e('<a class="'+i.title+'"'+(c?' href="'+c+'"':"")+" />").text(d.text())).prependTo(r)}else t.opts.navbar.title&&h.append('<a class="'+i.title+'">'+t.opts.navbar.title+"</a>").prependTo(r)}});var c=this.__findAddBack(n,"."+i.listview).children("."+i.selected).removeClass(i.selected).last().addClass(i.selected);c.add(c.parentsUntil("."+i.menu,"li")).filter("."+i.vertical).addClass(i.opened).end().each(function(){e(this).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened)}),c.children("."+i.panel).not("."+i.vertical).addClass(i.opened).parentsUntil("."+i.menu,"."+i.panel).not("."+i.vertical).first().addClass(i.opened).addClass(i.subopened);var h=d.filter("."+i.opened);return h.length||(h=r.first()),h.addClass(i.opened).last().addClass(i.current),r.not("."+i.vertical).not(h.last()).addClass(i.hidden).end().filter(function(){return!e(this).parent().hasClass(i.panels)}).appendTo(this.$pnls),r},_initAnchors:function(){var n=this;r.$body.on(o.click+"-oncanvas","a[href]",function(s){var a=e(this),o=!1,r=n.$menu.find(a).length;for(var l in e[t].addons)if(e[t].addons[l].clickAnchor.call(n,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,n.$menu);c.is("."+i.panel)&&(o=!0,n[a.parent().hasClass(i.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&s.preventDefault(),!o&&r&&a.is("."+i.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){n.__valueOrFn(n.opts.onClick.setSelected,a)&&n.setSelected(e(s.target).parent());var u=n.__valueOrFn(n.opts.onClick.preventDefault,a,"#"==d.slice(0,1));u&&s.preventDefault(),n.__valueOrFn(n.opts.onClick.close,a,u)&&n.close()}})},_initAddons:function(){var n;for(n in e[t].addons)e[t].addons[n].add.call(this),e[t].addons[n].add=function(){};for(n in e[t].addons)e[t].addons[n].setup.call(this)},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=i.umm(e)),e},__api:function(){var n=this,t={};return e.each(this._api,function(e){var s=this;t[s]=function(){var e=n[s].apply(n,arguments);return"undefined"==typeof e?t:e}}),t},__valueOrFn:function(e,n,t){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof t?t:e},__refactorClass:function(e,n,t){return e.filter("."+n).removeClass(n).addClass(i[t])},__findAddBack:function(e,n){return e.find(n).add(e.filter(n))},__filterListItems:function(e){return e.not("."+i.divider).not("."+i.hidden)},__transitionend:function(n,t,s){var i=!1,a=function(s){if("undefined"!=typeof s){if(!e(s.target).is(n))return!1;n.unbind(o.transitionend),n.unbind(o.webkitTransitionEnd)}i||t.call(n[0]),i=!0};n.on(o.transitionend,a),n.on(o.webkitTransitionEnd,a),setTimeout(a,1.1*s)},__getUniqueId:function(){return i.mm(e[t].uniqueId++)}},e.fn[t]=function(s,i){return n(),s=e.extend(!0,{},e[t].defaults,s),i=e.extend(!0,{},e[t].configuration,i),this.each(function(){var n=e(this);if(!n.data(t)){var a=new e[t](n,s,i);a.$menu.data(t,a.__api())}})},e[t].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,n=e.style,t="transition";if("string"==typeof n[t])return!0;var s=["Moz","webkit","Webkit","Khtml","O","ms"];t=t.charAt(0).toUpperCase()+t.substr(1);for(var i=0;i<s.length;i++)if("string"==typeof n[s[i]+t])return!0;return!1}(),csstransforms:function(){return"undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransforms?Modernizr.csstransforms:!0}(),csstransforms3d:function(){return"undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransforms3d?Modernizr.csstransforms3d:!0}()};var i,a,o,r}}(jQuery),/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="offCanvas";e[n].addons[t]={setup:function(){if(this.opts[t]){var i=this.opts[t],a=this.conf[t];o=e[n].glbl,this._api=e.merge(this._api,["open","close","setPage"]),("top"==i.position||"bottom"==i.position)&&(i.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[s.offcanvas];"left"!=i.position&&r.push(s.mm(i.position)),"back"!=i.zposition&&r.push(s.mm(i.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper),e[n].support.csstransforms||this.$menu.addClass(s["no-csstransforms"]),e[n].support.csstransforms3d||this.$menu.addClass(s["no-csstransforms3d"]),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+t](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),i.add("style"),a.add("resize")},clickAnchor:function(e,n){if(!this.opts[t])return!1;var s=this._getOriginalMenuId();if(s&&e.is('[href="#'+s+'"]'))return this.open(),!0;if(o.$page)return s=o.$page.first().attr("id"),s&&e.is('[href="#'+s+'"]')?(this.close(),!0):!1}},e[n].defaults[t]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[n].configuration[t]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[n].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[n].prototype._openSetup=function(){var n=this,r=this.opts[t];this.closeAllOthers(),o.$page.each(function(){e(this).data(i.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+t,[!0]);var l=[s.opened];r.blockUI&&l.push(s.blocking),"modal"==r.blockUI&&l.push(s.modal),r.moveBackground&&l.push(s.background),"left"!=r.position&&l.push(s.mm(this.opts[t].position)),"back"!=r.zposition&&l.push(s.mm(this.opts[t].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){n.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(s.current+" "+s.opened)},e[n].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(s.opening),this.trigger("opening")},e[n].prototype.close=function(){if(this.vars.opened){var n=this;this.__transitionend(o.$page.first(),function(){n.$menu.removeClass(s.current).removeClass(s.opened),o.$html.removeClass(s.opened).removeClass(s.blocking).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(n.opts[t].position)).removeClass(s.mm(n.opts[t].zposition)),n.opts.extensions&&o.$html.removeClass(n.opts.extensions),o.$page.each(function(){e(this).attr("style",e(this).data(i.style))}),n.vars.opened=!1,n.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(s.opening),this.trigger("close"),this.trigger("closing")}},e[n].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var t=e(this).data(n);t&&t.close&&t.close()})},e[n].prototype.setPage=function(n){var i=this,a=this.conf[t];n&&n.length||(n=o.$body.find(a.pageSelector),a.noPageSelector.length&&(n=n.not(a.noPageSelector.join(", "))),n.length>1&&a.wrapPageIfNeeded&&(n=n.wrapAll("<"+this.conf[t].pageNodetype+" />").parent())),n.each(function(){e(this).attr("id",e(this).attr("id")||i.__getUniqueId())}),n.addClass(s.page+" "+s.slideout),o.$page=n,this.trigger("setPage",n)},e[n].prototype["_initWindow_"+t]=function(){o.$wndw.off(a.keydown+"-"+t).on(a.keydown+"-"+t,function(e){return o.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var e=0;o.$wndw.off(a.resize+"-"+t).on(a.resize+"-"+t,function(n,t){if(1==o.$page.length&&(t||o.$html.hasClass(s.opened))){var i=o.$wndw.height();(t||i!=e)&&(e=i,o.$page.css("minHeight",i))}})},e[n].prototype._initBlocker=function(){var n=this;this.opts[t].blockUI&&(o.$blck||(o.$blck=e('<div id="'+s.blocker+'" class="'+s.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+t+" "+a.touchmove+"-"+t).on(a.touchstart+"-"+t+" "+a.touchmove+"-"+t,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+t)}).off(a.mousedown+"-"+t).on(a.mousedown+"-"+t,function(e){e.preventDefault(),o.$html.hasClass(s.modal)||(n.closeAllOthers(),n.close())}))};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu scrollBugFix addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="scrollBugFix";e[n].addons[t]={setup:function(){var i=this,r=this.opts[t];this.conf[t];if(o=e[n].glbl,e[n].support.touch&&this.opts.offCanvas&&this.opts.offCanvas.blockUI&&("boolean"==typeof r&&(r={fix:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),r.fix)){var l=this.$menu.attr("id"),d=!1;this.bind("opening",function(){this.$pnls.children("."+s.current).scrollTop(0)}),o.$docu.on(a.touchmove,function(e){i.vars.opened&&e.preventDefault()}),o.$body.on(a.touchstart,"#"+l+"> ."+s.panels+"> ."+s.current,function(e){i.vars.opened&&(d||(d=!0,0===e.currentTarget.scrollTop?e.currentTarget.scrollTop=1:e.currentTarget.scrollHeight===e.currentTarget.scrollTop+e.currentTarget.offsetHeight&&(e.currentTarget.scrollTop-=1),d=!1))}).on(a.touchmove,"#"+l+"> ."+s.panels+"> ."+s.current,function(n){i.vars.opened&&e(this)[0].scrollHeight>e(this).innerHeight()&&n.stopPropagation()}),o.$wndw.on(a.orientationchange,function(){i.$pnls.children("."+s.current).scrollTop(0).css({"-webkit-overflow-scrolling":"auto"}).css({"-webkit-overflow-scrolling":"touch"})})}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e},clickAnchor:function(e,n){}},e[n].defaults[t]={fix:!0};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu autoHeight addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="autoHeight";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var i=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof i&&i&&(i={height:"auto"}),"string"==typeof i&&(i={height:i}),"object"!=typeof i&&(i={}),i=this.opts[t]=e.extend(!0,{},e[n].defaults[t],i),"auto"==i.height||"highest"==i.height){this.$menu.addClass(s.autoheight);var a=function(n){if(this.vars.opened){var t=parseInt(this.$pnls.css("top"),10)||0,a=parseInt(this.$pnls.css("bottom"),10)||0,o=0;this.$menu.addClass(s.measureheight),"auto"==i.height?(n=n||this.$pnls.children("."+s.current),n.is("."+s.vertical)&&(n=n.parents("."+s.panel).not("."+s.vertical).first()),o=n.outerHeight()):"highest"==i.height&&this.$pnls.children().each(function(){var n=e(this);n.is("."+s.vertical)&&(n=n.parents("."+s.panel).not("."+s.vertical).first()),o=Math.max(o,n.outerHeight())}),this.$menu.height(o+t+a).removeClass(s.measureheight)}};this.bind("opening",a),"highest"==i.height&&this.bind("initPanels",a),"auto"==i.height&&(this.bind("update",a),this.bind("openPanel",a),this.bind("closePanel",a))}}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("autoheight measureheight"),a.add("resize")},clickAnchor:function(e,n){}},e[n].defaults[t]={height:"default"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu backButton addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="backButton";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var i=this,a=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof a&&(a={close:a}),"object"!=typeof a&&(a={}),a=e.extend(!0,{},e[n].defaults[t],a),a.close){var r="#"+i.$menu.attr("id");this.bind("opened",function(e){location.hash!=r&&history.pushState(null,document.title,r)}),e(window).on("popstate",function(e){o.$html.hasClass(s.opened)?(e.stopPropagation(),i.close()):location.hash==r&&(e.stopPropagation(),i.open())})}}},add:function(){return window.history&&window.history.pushState?(s=e[n]._c,i=e[n]._d,void(a=e[n]._e)):void(e[n].addons[t].setup=function(){})},clickAnchor:function(e,n){}},e[n].defaults[t]={close:!1};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu columns addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="columns";e[n].addons[t]={setup:function(){var i=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof i&&(i={add:i}),"number"==typeof i&&(i={add:!0,visible:i}),"object"!=typeof i&&(i={}),"number"==typeof i.visible&&(i.visible={min:i.visible,max:i.visible}),i=this.opts[t]=e.extend(!0,{},e[n].defaults[t],i),i.add){i.visible.min=Math.max(1,Math.min(6,i.visible.min)),i.visible.max=Math.max(i.visible.min,Math.min(6,i.visible.max)),this.$menu.addClass(s.columns);for(var a=this.opts.offCanvas?this.$menu.add(o.$html):this.$menu,r=[],l=0;l<=i.visible.max;l++)r.push(s.columns+"-"+l);r=r.join(" ");var d=function(e){u.call(this,this.$pnls.children("."+s.current))},c=function(){var e=this.$pnls.children("."+s.panel).filter("."+s.opened).length;e=Math.min(i.visible.max,Math.max(i.visible.min,e)),a.removeClass(r).addClass(s.columns+"-"+e)},h=function(){this.opts.offCanvas&&o.$html.removeClass(r)},u=function(n){this.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(n).slice(-i.visible.max).each(function(n){e(this).addClass(s.columns+"-"+n)})};this.bind("open",c),this.bind("close",h),this.bind("initPanels",d),this.bind("openPanel",u),this.bind("openingPanel",c),this.bind("openedPanel",c),this.opts.offCanvas||c.call(this)}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("columns")},clickAnchor:function(n,i){if(!this.opts[t].add)return!1;if(i){var a=n.attr("href");if(a.length>1&&"#"==a.slice(0,1))try{var o=e(a,this.$menu);if(o.is("."+s.panel))for(var r=parseInt(n.closest("."+s.panel).attr("class").split(s.columns+"-")[1].split(" ")[0],10)+1;r!==!1;){var l=this.$pnls.children("."+s.columns+"-"+r);if(!l.length){r=!1;break}r++,l.removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden)}}catch(d){}}}},e[n].defaults[t]={add:!1,visible:{min:1,max:3}};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="counters";e[n].addons[t]={setup:function(){var a=this,r=this.opts[t];this.conf[t];o=e[n].glbl,"boolean"==typeof r&&(r={add:r,update:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),this.bind("initPanels",function(n){this.__refactorClass(e("em",n),this.conf.classNames[t].counter,"counter")}),r.add&&this.bind("initPanels",function(n){var t;switch(r.addTo){case"panels":t=n;break;default:t=n.filter(r.addTo)}t.each(function(){var n=e(this).data(i.parent);n&&(n.children("em."+s.counter).length||n.prepend(e('<em class="'+s.counter+'" />')))})}),r.update&&this.bind("update",function(){this.$pnls.children("."+s.panel).each(function(){var n=e(this),t=n.data(i.parent);if(t){var o=t.children("em."+s.counter);o.length&&(n=n.children("."+s.listview),n.length&&o.html(a.__filterListItems(n.children()).length))}})})},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("counter search noresultsmsg")},clickAnchor:function(e,n){}},e[n].defaults[t]={add:!1,addTo:"panels",update:!1},e[n].configuration.classNames[t]={counter:"Counter"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu dividers addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="dividers";e[n].addons[t]={setup:function(){var i=this,r=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof r&&(r={add:r,fixed:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),this.bind("initPanels",function(n){this.__refactorClass(e("li",this.$menu),this.conf.classNames[t].collapsed,"collapsed")}),r.add&&this.bind("initPanels",function(n){var t;switch(r.addTo){case"panels":t=n;break;default:t=n.filter(r.addTo)}e("."+s.divider,t).remove(),t.find("."+s.listview).not("."+s.vertical).each(function(){var n="";i.__filterListItems(e(this).children()).each(function(){var t=e.trim(e(this).children("a, span").text()).slice(0,1).toLowerCase();t!=n&&t.length&&(n=t,e('<li class="'+s.divider+'">'+t+"</li>").insertBefore(this))})})}),r.collapse&&this.bind("initPanels",function(n){e("."+s.divider,n).each(function(){var n=e(this),t=n.nextUntil("."+s.divider,"."+s.collapsed);t.length&&(n.children("."+s.subopen).length||(n.wrapInner("<span />"),n.prepend('<a href="#" class="'+s.subopen+" "+s.fullsubopen+'" />')))})}),r.fixed){var l=function(n){n=n||this.$pnls.children("."+s.current);var t=n.find("."+s.divider).not("."+s.hidden);if(t.length){this.$menu.addClass(s.hasdividers);var i=n.scrollTop()||0,a="";n.is(":visible")&&n.find("."+s.divider).not("."+s.hidden).each(function(){e(this).position().top+i<i+1&&(a=e(this).text())}),this.$fixeddivider.text(a)}else this.$menu.removeClass(s.hasdividers)};this.$fixeddivider=e('<ul class="'+s.listview+" "+s.fixeddivider+'"><li class="'+s.divider+'"></li></ul>').prependTo(this.$pnls).children(),this.bind("openPanel",l),this.bind("update",l),this.bind("initPanels",function(n){n.off(a.scroll+"-dividers "+a.touchmove+"-dividers").on(a.scroll+"-dividers "+a.touchmove+"-dividers",function(n){l.call(i,e(this))})})}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("collapsed uncollapsed fixeddivider hasdividers"),a.add("scroll")},clickAnchor:function(e,n){if(this.opts[t].collapse&&n){var i=e.parent();if(i.is("."+s.divider)){var a=i.nextUntil("."+s.divider,"."+s.collapsed);return i.toggleClass(s.opened),a[i.hasClass(s.opened)?"addClass":"removeClass"](s.uncollapsed),!0}}return!1}},e[n].defaults[t]={add:!1,addTo:"panels",fixed:!1,collapse:!1},e[n].configuration.classNames[t]={collapsed:"Collapsed"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu drag addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function n(e,n,t){return n>e&&(e=n),e>t&&(e=t),e}function t(t,s,i){var r,l,d,c,h,u=this,p={},f=0,v=!1,m=!1,g=0,b=0;switch(this.opts.offCanvas.position){case"left":case"right":p.events="panleft panright",p.typeLower="x",p.typeUpper="X",m="width";break;case"top":case"bottom":p.events="panup pandown",p.typeLower="y",p.typeUpper="Y",m="height"}switch(this.opts.offCanvas.position){case"right":case"bottom":p.negative=!0,c=function(e){e>=i.$wndw[m]()-t.maxStartPos&&(f=1)};break;default:p.negative=!1,c=function(e){e<=t.maxStartPos&&(f=1)}}switch(this.opts.offCanvas.position){case"left":p.open_dir="right",p.close_dir="left";break;case"right":p.open_dir="left",p.close_dir="right";break;case"top":p.open_dir="down",p.close_dir="up";break;case"bottom":p.open_dir="up",p.close_dir="down"}switch(this.opts.offCanvas.zposition){case"front":h=function(){return this.$menu};break;default:h=function(){return e("."+o.slideout)}}var _=this.__valueOrFn(t.node,this.$menu,i.$page);"string"==typeof _&&(_=e(_));var C=new Hammer(_[0],this.opts[a].vendors.hammer);C.on("panstart",function(e){c(e.center[p.typeLower]),i.$slideOutNodes=h(),v=p.open_dir}).on(p.events+" panend",function(e){f>0&&e.preventDefault()}).on(p.events,function(e){if(r=e["delta"+p.typeUpper],p.negative&&(r=-r),r!=g&&(v=r>=g?p.open_dir:p.close_dir),g=r,g>t.threshold&&1==f){if(i.$html.hasClass(o.opened))return;f=2,u._openSetup(),u.trigger("opening"),i.$html.addClass(o.dragging),b=n(i.$wndw[m]()*s[m].perc,s[m].min,s[m].max)}2==f&&(l=n(g,10,b)-("front"==u.opts.offCanvas.zposition?b:0),p.negative&&(l=-l),d="translate"+p.typeUpper+"("+l+"px )",i.$slideOutNodes.css({"-webkit-transform":"-webkit-"+d,transform:d}))}).on("panend",function(e){2==f&&(i.$html.removeClass(o.dragging),i.$slideOutNodes.css("transform",""),u[v==p.open_dir?"_openFinish":"close"]()),f=0})}function s(n,t,s,i){var l=this;n.each(function(){var n=e(this),t=n.data(r.parent);if(t&&(t=t.closest("."+o.panel),t.length)){var s=new Hammer(n[0],l.opts[a].vendors.hammer);s.on("panright",function(e){l.openPanel(t)})}})}var i="mmenu",a="drag";e[i].addons[a]={setup:function(){if(this.opts.offCanvas){var n=this.opts[a],o=this.conf[a];d=e[i].glbl,"boolean"==typeof n&&(n={menu:n,panels:n}),"object"!=typeof n&&(n={}),"boolean"==typeof n.menu&&(n.menu={open:n.menu}),"object"!=typeof n.menu&&(n.menu={}),"boolean"==typeof n.panels&&(n.panels={close:n.panels}),"object"!=typeof n.panels&&(n.panels={}),n=this.opts[a]=e.extend(!0,{},e[i].defaults[a],n),n.menu.open&&t.call(this,n.menu,o.menu,d),n.panels.close&&this.bind("initPanels",function(e){s.call(this,e,n.panels,o.panels,d)})}},add:function(){return"function"!=typeof Hammer||Hammer.VERSION<2?void(e[i].addons[a].setup=function(){}):(o=e[i]._c,r=e[i]._d,l=e[i]._e,void o.add("dragging"))},clickAnchor:function(e,n){}},e[i].defaults[a]={menu:{open:!1,maxStartPos:100,threshold:50},panels:{close:!1},vendors:{hammer:{}}},e[i].configuration[a]={menu:{width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}},panels:{}};var o,r,l,d}(jQuery),/*	
 * jQuery mmenu dropdown addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="dropdown";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var r=this,l=this.opts[t],d=this.conf[t];if(o=e[n].glbl,"boolean"==typeof l&&l&&(l={drop:l}),"object"!=typeof l&&(l={}),"string"==typeof l.position&&(l.position={of:l.position}),l=this.opts[t]=e.extend(!0,{},e[n].defaults[t],l),l.drop){if("string"!=typeof l.position.of){var c=this.$menu.attr("id");c&&c.length&&(this.conf.clone&&(c=s.umm(c)),l.position.of='[href="#'+c+'"]')}if("string"==typeof l.position.of){var h=e(l.position.of);if(h.length){this.$menu.addClass(s.dropdown),l.tip&&this.$menu.addClass(s.tip),l.event=l.event.split(" "),1==l.event.length&&(l.event[1]=l.event[0]),"hover"==l.event[0]&&h.on(a.mouseenter+"-dropdown",function(){r.open()}),"hover"==l.event[1]&&this.$menu.on(a.mouseleave+"-dropdown",function(){r.close()}),this.bind("opening",function(){this.$menu.data(i.style,this.$menu.attr("style")||""),o.$html.addClass(s.dropdown)}),this.bind("closed",function(){this.$menu.attr("style",this.$menu.data(i.style)),o.$html.removeClass(s.dropdown)});var u=function(i,a){var r=a[0],c=a[1],u="x"==i?"scrollLeft":"scrollTop",p="x"==i?"outerWidth":"outerHeight",f="x"==i?"left":"top",v="x"==i?"right":"bottom",m="x"==i?"width":"height",g="x"==i?"maxWidth":"maxHeight",b=null,_=o.$wndw[u](),C=h.offset()[f]-=_,$=C+h[p](),y=o.$wndw[m](),x=d.offset.button[i]+d.offset.viewport[i];if(l.position[i])switch(l.position[i]){case"left":case"bottom":b="after";break;case"right":case"top":b="before"}null===b&&(b=y/2>C+($-C)/2?"after":"before");var w,k;return"after"==b?(w="x"==i?C:$,k=y-(w+x),r[f]=w+d.offset.button[i],r[v]="auto",c.push(s["x"==i?"tipleft":"tiptop"])):(w="x"==i?$:C,k=w-x,r[v]="calc( 100% - "+(w-d.offset.button[i])+"px )",r[f]="auto",c.push(s["x"==i?"tipright":"tipbottom"])),r[g]=Math.min(e[n].configuration[t][m].max,k),[r,c]},p=function(e){if(this.vars.opened){this.$menu.attr("style",this.$menu.data(i.style));var n=[{},[]];n=u.call(this,"y",n),n=u.call(this,"x",n),this.$menu.css(n[0]),l.tip&&this.$menu.removeClass(s.tipleft+" "+s.tipright+" "+s.tiptop+" "+s.tipbottom).addClass(n[1].join(" "))}};this.bind("opening",p),o.$wndw.on(a.resize+"-dropdown",function(e){p.call(r)}),this.opts.offCanvas.blockUI||o.$wndw.on(a.scroll+"-dropdown",function(e){p.call(r)})}}}}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("dropdown tip tipleft tipright tiptop tipbottom"),a.add("mouseenter mouseleave resize scroll")},clickAnchor:function(e,n){}},e[n].defaults[t]={drop:!1,event:"click",position:{},tip:!0},e[n].configuration[t]={offset:{button:{x:-10,y:10},viewport:{x:20,y:20}},height:{max:880},width:{max:440}};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu fixedElements addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="fixedElements";e[n].addons[t]={setup:function(){if(this.opts.offCanvas){var s=this.opts[t];this.conf[t];o=e[n].glbl,s=this.opts[t]=e.extend(!0,{},e[n].defaults[t],s);var i=function(e){var n=this.conf.classNames[t].fixed;this.__refactorClass(e.find("."+n),n,"slideout").appendTo(o.$body)};i.call(this,o.$page),this.bind("setPage",i)}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("fixed")},clickAnchor:function(e,n){}},e[n].configuration.classNames[t]={fixed:"Fixed"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu iconPanels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="iconPanels";e[n].addons[t]={setup:function(){var i=this,a=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof a&&(a={add:a}),"number"==typeof a&&(a={add:!0,visible:a}),"object"!=typeof a&&(a={}),a=this.opts[t]=e.extend(!0,{},e[n].defaults[t],a),a.visible++,a.add){this.$menu.addClass(s.iconpanel);for(var r=[],l=0;l<=a.visible;l++)r.push(s.iconpanel+"-"+l);r=r.join(" ");var d=function(n){n.hasClass(s.vertical)||i.$pnls.children("."+s.panel).removeClass(r).filter("."+s.subopened).removeClass(s.hidden).add(n).not("."+s.vertical).slice(-a.visible).each(function(n){e(this).addClass(s.iconpanel+"-"+n)})};this.bind("openPanel",d),this.bind("initPanels",function(n){d.call(i,i.$pnls.children("."+s.current)),n.not("."+s.vertical).each(function(){e(this).children("."+s.subblocker).length||e(this).prepend('<a href="#'+e(this).closest("."+s.panel).attr("id")+'" class="'+s.subblocker+'" />')})})}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("iconpanel subblocker")},clickAnchor:function(e,n){}},e[n].defaults[t]={add:!1,visible:3};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu navbar addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars";e[n].addons[t]={setup:function(){var i=this,a=this.opts[t],r=this.conf[t];if(o=e[n].glbl,"undefined"!=typeof a){a instanceof Array||(a=[a]);var l={};e.each(a,function(o){var d=a[o];"boolean"==typeof d&&d&&(d={}),"object"!=typeof d&&(d={}),"undefined"==typeof d.content&&(d.content=["prev","title"]),d.content instanceof Array||(d.content=[d.content]),d=e.extend(!0,{},i.opts.navbar,d);var c=d.position,h=d.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=c&&(c="top"),l[c]||(l[c]=0),l[c]++;var u=e("<div />").addClass(s.navbar+" "+s.navbar+"-"+c+" "+s.navbar+"-"+c+"-"+l[c]+" "+s.navbar+"-size-"+h);l[c]+=h-1;for(var p=0,f=0,v=d.content.length;v>f;f++){var m=e[n].addons[t][d.content[f]]||!1;m?p+=m.call(i,u,d,r):(m=d.content[f],m instanceof e||(m=e(d.content[f])),u.append(m))}p+=Math.ceil(u.children().not("."+s.btn).length/h),p>1&&u.addClass(s.navbar+"-content-"+p),u.children("."+s.btn).length&&u.addClass(s.hasbtns),u.prependTo(i.$menu)});for(var d in l)i.$menu.addClass(s.hasnavbar+"-"+d+"-"+l[d])}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("close hasbtns")},clickAnchor:function(e,n){}},e[n].configuration[t]={breadcrumbSeparator:"/"},e[n].configuration.classNames[t]={};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu navbar addon breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="breadcrumbs";e[n].addons[t][s]=function(t,s,i){var a=e[n]._c,o=e[n]._d;a.add("breadcrumbs separator");var r=e('<span class="'+a.breadcrumbs+'" />').appendTo(t);this.bind("initPanels",function(n){n.removeClass(a.hasnavbar).each(function(){for(var n=[],t=e(this),s=e('<span class="'+a.breadcrumbs+'"></span>'),r=e(this).children().first(),l=!0;r&&r.length;){r.is("."+a.panel)||(r=r.closest("."+a.panel));var d=r.children("."+a.navbar).children("."+a.title).text();n.unshift(l?"<span>"+d+"</span>":'<a href="#'+r.attr("id")+'">'+d+"</a>"),l=!1,r=r.data(o.parent)}s.append(n.join('<span class="'+a.separator+'">'+i.breadcrumbSeparator+"</span>")).appendTo(t.children("."+a.navbar))})});var l=function(){r.html(this.$pnls.children("."+a.current).children("."+a.navbar).children("."+a.breadcrumbs).html())};return this.bind("openPanel",l),this.bind("initPanels",l),0}}(jQuery),/*	
 * jQuery mmenu navbar addon close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="close";e[n].addons[t][s]=function(t,s){var i=e[n]._c,a=e[n].glbl,o=e('<a class="'+i.close+" "+i.btn+'" href="#" />').appendTo(t),r=function(e){o.attr("href","#"+e.attr("id"))};return r.call(this,a.$page),this.bind("setPage",r),-1}}(jQuery),/*	
 * jQuery mmenu navbar addon next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="next";e[n].addons[t][s]=function(s,i){var a,o,r=e[n]._c,l=e('<a class="'+r.next+" "+r.btn+'" href="#" />').appendTo(s),d=function(e){e=e||this.$pnls.children("."+r.current);var n=e.find("."+this.conf.classNames[t].panelNext);a=n.attr("href"),o=n.html(),l[a?"attr":"removeAttr"]("href",a),l[a||o?"removeClass":"addClass"](r.hidden),l.html(o)};return this.bind("openPanel",d),this.bind("initPanels",function(){d.call(this)}),-1},e[n].configuration.classNames[t].panelNext="Next"}(jQuery),/*	
 * jQuery mmenu navbar addon prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="prev";e[n].addons[t][s]=function(s,i){var a=e[n]._c,o=e('<a class="'+a.prev+" "+a.btn+'" href="#" />').appendTo(s);this.bind("initPanels",function(e){e.removeClass(a.hasnavbar).children("."+a.navbar).addClass(a.hidden)});var r,l,d=function(e){if(e=e||this.$pnls.children("."+a.current),!e.hasClass(a.vertical)){var n=e.find("."+this.conf.classNames[t].panelPrev);n.length||(n=e.children("."+a.navbar).children("."+a.prev)),r=n.attr("href"),l=n.html(),o[r?"attr":"removeAttr"]("href",r),o[r||l?"removeClass":"addClass"](a.hidden),o.html(l)}};return this.bind("openPanel",d),this.bind("initPanels",function(){d.call(this)}),-1},e[n].configuration.classNames[t].panelPrev="Prev"}(jQuery),/*	
 * jQuery mmenu navbar addon searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="searchfield";e[n].addons[t][s]=function(t,s){var i=e[n]._c,a=e('<div class="'+i.search+'" />').appendTo(t);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=a,0}}(jQuery),/*	
 * jQuery mmenu navbar addon title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="navbars",s="title";e[n].addons[t][s]=function(s,i){var a,o,r=e[n]._c,l=e('<a class="'+r.title+'" />').appendTo(s),d=function(e){if(e=e||this.$pnls.children("."+r.current),!e.hasClass(r.vertical)){var n=e.find("."+this.conf.classNames[t].panelTitle);n.length||(n=e.children("."+r.navbar).children("."+r.title)),a=n.attr("href"),o=n.html()||i.title,l[a?"attr":"removeAttr"]("href",a),l[a||o?"removeClass":"addClass"](r.hidden),l.html(o)}};return this.bind("openPanel",d),this.bind("initPanels",function(e){d.call(this)}),0},e[n].configuration.classNames[t].panelTitle="Title"}(jQuery),/*	
 * jQuery mmenu RTL addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="rtl";e[n].addons[t]={setup:function(){var i=this.opts[t];this.conf[t];o=e[n].glbl,"object"!=typeof i&&(i={use:i}),i=this.opts[t]=e.extend(!0,{},e[n].defaults[t],i),"boolean"!=typeof i.use&&(i.use="rtl"==(o.$html.attr("dir")||"").toLowerCase()),i.use&&this.$menu.addClass(s.rtl)},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("rtl")},clickAnchor:function(e,n){}},e[n].defaults[t]={use:"detect"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu screenReader addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function n(e,n,t){e.prop("aria-"+n,t)[t?"attr":"removeAttr"]("aria-"+n,"true")}function t(e){return'<span class="'+a.sronly+'">'+e+"</span>"}var s="mmenu",i="screenReader";e[s].addons[i]={setup:function(){var o=this.opts[i],r=this.conf[i];if(l=e[s].glbl,"boolean"==typeof o&&(o={aria:o,text:o}),"object"!=typeof o&&(o={}),o=this.opts[i]=e.extend(!0,{},e[s].defaults[i],o),o.aria){if(this.opts.offCanvas){var d=function(){n(this.$menu,"hidden",!1)},c=function(){n(this.$menu,"hidden",!0)};this.bind("open",d),this.bind("close",c),c.call(this)}var h=function(){n(this.$menu.find("."+a.hidden),"hidden",!0),n(this.$menu.find('[aria-hidden="true"]').not("."+a.hidden),"hidden",!1)},u=function(e){n(this.$pnls.children("."+a.panel).not(e).not("."+a.hidden),"hidden",!0),n(e,"hidden",!1)};this.bind("update",h),this.bind("openPanel",h),this.bind("openPanel",u);var p=function(e){n(e.find("."+a.prev+", ."+a.next),"haspopup",!0)};this.bind("initPanels",p),p.call(this,this.$menu.children("."+a.navbar))}if(o.text){var f=function(n){n.children("."+a.navbar).children("."+a.prev).html(t(r.text.closeSubmenu)).end().children("."+a.next).html(t(r.text.openSubmenu)).end().children("."+a.close).html(t(r.text.closeMenu)),n.is("."+a.panel)&&n.find("."+a.listview).find("."+a.next).each(function(){e(this).html(t(r.text[e(this).parent().is("."+a.vertical)?"toggleSubmenu":"openSubmenu"]))})};this.bind("initPanels",f),f.call(this,this.$menu)}},add:function(){a=e[s]._c,o=e[s]._d,r=e[s]._e,a.add("sronly")},clickAnchor:function(e,n){}},e[s].defaults[i]={aria:!1,text:!1},e[s].configuration[i]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}};var a,o,r,l}(jQuery),/*	
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function n(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var t="mmenu",s="searchfield";e[t].addons[s]={setup:function(){var l=this,d=this.opts[s],c=this.conf[s];r=e[t].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[s]=e.extend(!0,{},e[t].defaults[s],d),c=this.conf[s]=e.extend(!0,{},e[t].configuration[s],c),this.bind("close",function(){this.$menu.find("."+i.search).find("input").blur()}),this.bind("initPanels",function(t){if(d.add){var r;switch(d.addTo){case"panels":r=t;break;default:r=this.$menu.find(d.addTo)}if(r.each(function(){var n=e(this);if(!n.is("."+i.panel)||!n.is("."+i.vertical)){if(!n.children("."+i.search).length){var t=l.__valueOrFn(c.clear,n),s=l.__valueOrFn(c.form,n),a=l.__valueOrFn(c.input,n),r=l.__valueOrFn(c.submit,n),h=e("<"+(s?"form":"div")+' class="'+i.search+'" />'),u=e('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />');h.append(u);var p;if(a)for(p in a)u.attr(p,a[p]);if(t&&e('<a class="'+i.btn+" "+i.clear+'" href="#" />').appendTo(h).on(o.click+"-searchfield",function(e){e.preventDefault(),u.val("").trigger(o.keyup+"-searchfield")}),s){for(p in s)h.attr(p,s[p]);r&&!t&&e('<a class="'+i.btn+" "+i.next+'" href="#" />').appendTo(h).on(o.click+"-searchfield",function(e){e.preventDefault(),h.submit()})}n.hasClass(i.search)?n.replaceWith(h):n.prepend(h).addClass(i.hassearch)}if(d.noResults){var f=n.closest("."+i.panel).length;if(f||(n=l.$pnls.children("."+i.panel).first()),!n.children("."+i.noresultsmsg).length){var v=n.children("."+i.listview).first();e('<div class="'+i.noresultsmsg+" "+i.hidden+'" />').append(d.noResults)[v.length?"insertAfter":"prependTo"](v.length?v:n)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var h=this.$pnls.children("."+i.resultspanel);h.length||(h=e('<div class="'+i.panel+" "+i.resultspanel+" "+i.hidden+'" />').appendTo(this.$pnls).append('<div class="'+i.navbar+" "+i.hidden+'"><a class="'+i.title+'">'+d.resultsPanel.title+"</a></div>").append('<ul class="'+i.listview+'" />').append(this.$pnls.find("."+i.noresultsmsg).first().clone()),this.initPanels(h))}this.$menu.find("."+i.search).each(function(){var t,r,c=e(this),u=c.closest("."+i.panel).length;u?(t=c.closest("."+i.panel),r=t):(t=e("."+i.panel,l.$menu),r=l.$menu),d.resultsPanel.add&&(t=t.not(h));var p=c.children("input"),f=l.__findAddBack(t,"."+i.listview).children("li"),v=f.filter("."+i.divider),m=l.__filterListItems(f),g="a",b=g+", span",_="",C=function(){var n=p.val().toLowerCase();if(n!=_){if(_=n,d.resultsPanel.add&&h.children("."+i.listview).empty(),t.scrollTop(0),m.add(v).addClass(i.hidden).find("."+i.fullsubopensearch).removeClass(i.fullsubopen+" "+i.fullsubopensearch),m.each(function(){var n=e(this),t=g;(d.showTextItems||d.showSubPanels&&n.find("."+i.next))&&(t=b);var s=n.data(a.searchtext)||n.children(t).text();s.toLowerCase().indexOf(_)>-1&&n.add(n.prevAll("."+i.divider).first()).removeClass(i.hidden)}),d.showSubPanels&&t.each(function(n){var t=e(this);l.__filterListItems(t.find("."+i.listview).children()).each(function(){var n=e(this),t=n.data(a.child);n.removeClass(i.nosubresults),t&&t.find("."+i.listview).children().removeClass(i.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+i.subopened).last());else{var s=e();t.each(function(){var n=l.__filterListItems(e(this).find("."+i.listview).children()).not("."+i.hidden).clone(!0);n.length&&(d.resultsPanel.dividers&&(s=s.add('<li class="'+i.divider+'">'+e(this).children("."+i.navbar).text()+"</li>")),s=s.add(n))}),s.find("."+i.next).remove(),h.children("."+i.listview).append(s),this.openPanel(h)}else e(t.get().reverse()).each(function(n){var t=e(this),s=t.data(a.parent);s&&(l.__filterListItems(t.find("."+i.listview).children()).length?(s.hasClass(i.hidden)&&s.children("."+i.next).not("."+i.fullsubopen).addClass(i.fullsubopen).addClass(i.fullsubopensearch),s.removeClass(i.hidden).removeClass(i.nosubresults).prevAll("."+i.divider).first().removeClass(i.hidden)):u||(t.hasClass(i.opened)&&setTimeout(function(){l.openPanel(s.closest("."+i.panel))},(n+1)*(1.5*l.conf.openingInterval)),s.addClass(i.nosubresults)))});r.find("."+i.noresultsmsg)[m.not("."+i.hidden).length?"addClass":"removeClass"](i.hidden),this.update()}};p.off(o.keyup+"-"+s+" "+o.change+"-"+s).on(o.keyup+"-"+s,function(e){n(e.keyCode)||C.call(l)}).on(o.change+"-"+s,function(e){C.call(l)});var $=c.children("."+i.btn);$.length&&p.on(o.keyup+"-"+s,function(e){$[p.val().length?"removeClass":"addClass"](i.hidden)}),p.trigger(o.keyup+"-"+s)})}}})},add:function(){i=e[t]._c,a=e[t]._d,o=e[t]._e,i.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,n){}},e[t].defaults[s]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[t].configuration[s]={clear:!1,form:!1,input:!1,submit:!1};var i,a,o,r}(jQuery),/*	
 * jQuery mmenu sectionIndexer addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="sectionIndexer";e[n].addons[t]={setup:function(){var i=this,r=this.opts[t];this.conf[t];o=e[n].glbl,"boolean"==typeof r&&(r={add:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),this.bind("initPanels",function(n){if(r.add){var t;switch(r.addTo){case"panels":t=n;break;default:t=e(r.addTo,this.$menu).filter("."+s.panel)}t.find("."+s.divider).closest("."+s.panel).addClass(s.hasindexer)}if(!this.$indexer&&this.$pnls.children("."+s.hasindexer).length){this.$indexer=e('<div class="'+s.indexer+'" />').prependTo(this.$pnls).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'),this.$indexer.children().on(a.mouseover+"-sectionindexer "+s.touchstart+"-sectionindexer",function(n){var t=e(this).attr("href").slice(1),a=i.$pnls.children("."+s.current),o=a.find("."+s.listview),r=!1,l=a.scrollTop();a.scrollTop(0),o.children("."+s.divider).not("."+s.hidden).each(function(){r===!1&&t==e(this).text().slice(0,1).toLowerCase()&&(r=e(this).position().top)}),a.scrollTop(r!==!1?r:l)});var o=function(e){i.$menu[(e.hasClass(s.hasindexer)?"add":"remove")+"Class"](s.hasindexer)};this.bind("openPanel",o),o.call(this,this.$pnls.children("."+s.current))}})},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("indexer hasindexer"),a.add("mouseover touchstart")},clickAnchor:function(e,n){return e.parent().is("."+s.indexer)?!0:void 0}},e[n].defaults[t]={add:!1,addTo:"panels"};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu setSelected addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="setSelected";e[n].addons[t]={setup:function(){var a=this,r=this.opts[t];this.conf[t];if(o=e[n].glbl,"boolean"==typeof r&&(r={hover:r,parent:r}),"object"!=typeof r&&(r={}),r=this.opts[t]=e.extend(!0,{},e[n].defaults[t],r),"detect"==r.current){var l=function(e){e=e.split("?")[0].split("#")[0];var n=a.$menu.find('a[href="'+e+'"], a[href="'+e+'/"]');n.length?a.setSelected(n.parent(),!0):(e=e.split("/").slice(0,-1),e.length&&l(e.join("/")))};l(window.location.href)}else r.current||this.bind("initPanels",function(e){e.find("."+s.listview).children("."+s.selected).removeClass(s.selected)});if(r.hover&&this.$menu.addClass(s.hoverselected),r.parent){this.$menu.addClass(s.parentselected);var d=function(e){this.$pnls.find("."+s.listview).find("."+s.next).removeClass(s.selected);for(var n=e.data(i.parent);n&&n.length;)n=n.children("."+s.next).addClass(s.selected).closest("."+s.panel).data(i.parent)};this.bind("openedPanel",d),this.bind("initPanels",function(e){d.call(this,this.$pnls.children("."+s.current))})}},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("hoverselected parentselected")},clickAnchor:function(e,n){}},e[n].defaults[t]={current:!0,hover:!1,parent:!1};var s,i,a,o}(jQuery),/*	
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){var n="mmenu",t="toggles";e[n].addons[t]={setup:function(){var i=this;this.opts[t],this.conf[t];o=e[n].glbl,this.bind("initPanels",function(n){this.__refactorClass(e("input",n),this.conf.classNames[t].toggle,"toggle"),this.__refactorClass(e("input",n),this.conf.classNames[t].check,"check"),e("input."+s.toggle+", input."+s.check,n).each(function(){var n=e(this),t=n.closest("li"),a=n.hasClass(s.toggle)?"toggle":"check",o=n.attr("id")||i.__getUniqueId();t.children('label[for="'+o+'"]').length||(n.attr("id",o),t.prepend(n),e('<label for="'+o+'" class="'+s[a]+'"></label>').insertBefore(t.children("a, span").last()))})})},add:function(){s=e[n]._c,i=e[n]._d,a=e[n]._e,s.add("toggle check")},clickAnchor:function(e,n){}},e[n].configuration.classNames[t]={toggle:"Toggle",check:"Check"};var s,i,a,o}(jQuery);/*!
 * jQuery Raty - A Star Rating Plugin
 *
 * The MIT License
 *
 * @author  : Washington Botelho
 * @doc     : http://wbotelhos.com/raty
 * @version : 2.7.1
 *
 */

;
(function($) {
  'use strict';

  var methods = {
    init: function(options) {
      return this.each(function() {
        this.self = $(this);

        methods.destroy.call(this.self);

        this.opt = $.extend(true, {}, $.fn.raty.defaults, options);

        methods._adjustCallback.call(this);
        methods._adjustNumber.call(this);
        methods._adjustHints.call(this);

        this.opt.score = methods._adjustedScore.call(this, this.opt.score);

        if (this.opt.starType !== 'img') {
          methods._adjustStarType.call(this);
        }

        methods._adjustPath.call(this);
        methods._createStars.call(this);

        if (this.opt.cancel) {
          methods._createCancel.call(this);
        }

        if (this.opt.precision) {
          methods._adjustPrecision.call(this);
        }

        methods._createScore.call(this);
        methods._apply.call(this, this.opt.score);
        methods._setTitle.call(this, this.opt.score);
        methods._target.call(this, this.opt.score);

        if (this.opt.readOnly) {
          methods._lock.call(this);
        } else {
          this.style.cursor = 'pointer';

          methods._binds.call(this);
        }
      });
    },

    _adjustCallback: function() {
      var options = ['number', 'readOnly', 'score', 'scoreName', 'target', 'path'];

      for (var i = 0; i < options.length; i++) {
        if (typeof this.opt[options[i]] === 'function') {
          this.opt[options[i]] = this.opt[options[i]].call(this);
        }
      }
    },

    _adjustedScore: function(score) {
      if (!score) {
        return score;
      }

      return methods._between(score, 0, this.opt.number);
    },

    _adjustHints: function() {
      if (!this.opt.hints) {
        this.opt.hints = [];
      }

      if (!this.opt.halfShow && !this.opt.half) {
        return;
      }

      var steps = this.opt.precision ? 10 : 2;

      for (var i = 0; i < this.opt.number; i++) {
        var group = this.opt.hints[i];

        if (Object.prototype.toString.call(group) !== '[object Array]') {
          group = [group];
        }

        this.opt.hints[i] = [];

        for (var j = 0; j < steps; j++) {
          var
            hint = group[j],
            last = group[group.length - 1];

          if (last === undefined) {
            last = null;
          }

          this.opt.hints[i][j] = hint === undefined ? last : hint;
        }
      }
    },

    _adjustNumber: function() {
      this.opt.number = methods._between(this.opt.number, 1, this.opt.numberMax);
    },

    _adjustPath: function() {
      this.opt.path = this.opt.path || '';

      if (this.opt.path && this.opt.path.charAt(this.opt.path.length - 1) !== '/') {
        this.opt.path += '/';
      }
    },

    _adjustPrecision: function() {
      this.opt.half = true;
    },

    _adjustStarType: function() {
      var replaces = ['cancelOff', 'cancelOn', 'starHalf', 'starOff', 'starOn'];

      this.opt.path = '';

      for (var i = 0; i < replaces.length; i++) {
        this.opt[replaces[i]] = this.opt[replaces[i]].replace('.', '-');
      }
    },

    _apply: function(score) {
      methods._fill.call(this, score);

      if (score) {
        if (score > 0) {
          this.score.val(score);
        }

        methods._roundStars.call(this, score);
      }
    },

    _between: function(value, min, max) {
      return Math.min(Math.max(parseFloat(value), min), max);
    },

    _binds: function() {
      if (this.cancel) {
        methods._bindOverCancel.call(this);
        methods._bindClickCancel.call(this);
        methods._bindOutCancel.call(this);
      }

      methods._bindOver.call(this);
      methods._bindClick.call(this);
      methods._bindOut.call(this);
    },

    _bindClick: function() {
      var that = this;

      that.stars.on('click.raty', function(evt) {
        var
          execute = true,
          score   = (that.opt.half || that.opt.precision) ? that.self.data('score') : (this.alt || $(this).data('alt'));

        if (that.opt.click) {
          execute = that.opt.click.call(that, +score, evt);
        }

        if (execute || execute === undefined) {
          if (that.opt.half && !that.opt.precision) {
            score = methods._roundHalfScore.call(that, score);
          }

          methods._apply.call(that, score);
        }
      });
    },

    _bindClickCancel: function() {
      var that = this;

      that.cancel.on('click.raty', function(evt) {
        that.score.removeAttr('value');

        if (that.opt.click) {
          that.opt.click.call(that, null, evt);
        }
      });
    },

    _bindOut: function() {
      var that = this;

      that.self.on('mouseleave.raty', function(evt) {
        var score = +that.score.val() || undefined;

        methods._apply.call(that, score);
        methods._target.call(that, score, evt);
        methods._resetTitle.call(that);

        if (that.opt.mouseout) {
          that.opt.mouseout.call(that, score, evt);
        }
      });
    },

    _bindOutCancel: function() {
      var that = this;

      that.cancel.on('mouseleave.raty', function(evt) {
        var icon = that.opt.cancelOff;

        if (that.opt.starType !== 'img') {
          icon = that.opt.cancelClass + ' ' + icon;
        }

        methods._setIcon.call(that, this, icon);

        if (that.opt.mouseout) {
          var score = +that.score.val() || undefined;

          that.opt.mouseout.call(that, score, evt);
        }
      });
    },

    _bindOver: function() {
      var that   = this,
          action = that.opt.half ? 'mousemove.raty' : 'mouseover.raty';

      that.stars.on(action, function(evt) {
        var score = methods._getScoreByPosition.call(that, evt, this);

        methods._fill.call(that, score);

        if (that.opt.half) {
          methods._roundStars.call(that, score, evt);
          methods._setTitle.call(that, score, evt);

          that.self.data('score', score);
        }

        methods._target.call(that, score, evt);

        if (that.opt.mouseover) {
          that.opt.mouseover.call(that, score, evt);
        }
      });
    },

    _bindOverCancel: function() {
      var that = this;

      that.cancel.on('mouseover.raty', function(evt) {
        var
          starOff = that.opt.path + that.opt.starOff,
          icon    = that.opt.cancelOn;

        if (that.opt.starType === 'img') {
          that.stars.attr('src', starOff);
        } else {
          icon = that.opt.cancelClass + ' ' + icon;

          that.stars.attr('class', starOff);
        }

        methods._setIcon.call(that, this, icon);
        methods._target.call(that, null, evt);

        if (that.opt.mouseover) {
          that.opt.mouseover.call(that, null);
        }
      });
    },

    _buildScoreField: function() {
      return $('<input />', { name: this.opt.scoreName, type: 'hidden' }).appendTo(this);
    },

    _createCancel: function() {
      var icon   = this.opt.path + this.opt.cancelOff,
          cancel = $('<' + this.opt.starType + ' />', { title: this.opt.cancelHint, 'class': this.opt.cancelClass });

      if (this.opt.starType === 'img') {
        cancel.attr({ src: icon, alt: 'x' });
      } else {
        // TODO: use $.data
        cancel.attr('data-alt', 'x').addClass(icon);
      }

      if (this.opt.cancelPlace === 'left') {
        this.self.prepend('&#160;').prepend(cancel);
      } else {
        this.self.append('&#160;').append(cancel);
      }

      this.cancel = cancel;
    },

    _createScore: function() {
      var score = $(this.opt.targetScore);

      this.score = score.length ? score : methods._buildScoreField.call(this);
    },

    _createStars: function() {
      for (var i = 1; i <= this.opt.number; i++) {
        var
          name  = methods._nameForIndex.call(this, i),
          attrs = { alt: i, src: this.opt.path + this.opt[name] };

        if (this.opt.starType !== 'img') {
          attrs = { 'data-alt': i, 'class': attrs.src }; // TODO: use $.data.
        }

        attrs.title = methods._getHint.call(this, i);

        $('<' + this.opt.starType + ' />', attrs).appendTo(this);

        if (this.opt.space) {
          this.self.append(i < this.opt.number ? '&#160;' : '');
        }
      }

      this.stars = this.self.children(this.opt.starType);
    },

    _error: function(message) {
      $(this).text(message);

      $.error(message);
    },

    _fill: function(score) {
      var hash = 0;

      for (var i = 1; i <= this.stars.length; i++) {
        var
          icon,
          star   = this.stars[i - 1],
          turnOn = methods._turnOn.call(this, i, score);

        if (this.opt.iconRange && this.opt.iconRange.length > hash) {
          var irange = this.opt.iconRange[hash];

          icon = methods._getRangeIcon.call(this, irange, turnOn);

          if (i <= irange.range) {
            methods._setIcon.call(this, star, icon);
          }

          if (i === irange.range) {
            hash++;
          }
        } else {
          icon = this.opt[turnOn ? 'starOn' : 'starOff'];

          methods._setIcon.call(this, star, icon);
        }
      }
    },

    _getFirstDecimal: function(number) {
      var
        decimal = number.toString().split('.')[1],
        result  = 0;

      if (decimal) {
        result = parseInt(decimal.charAt(0), 10);

        if (decimal.slice(1, 5) === '9999') {
          result++;
        }
      }

      return result;
    },

    _getRangeIcon: function(irange, turnOn) {
      return turnOn ? irange.on || this.opt.starOn : irange.off || this.opt.starOff;
    },

    _getScoreByPosition: function(evt, icon) {
      var score = parseInt(icon.alt || icon.getAttribute('data-alt'), 10);

      if (this.opt.half) {
        var
          size    = methods._getWidth.call(this),
          percent = parseFloat((evt.pageX - $(icon).offset().left) / size);

        score = score - 1 + percent;
      }

      return score;
    },

    _getHint: function(score, evt) {
      if (score !== 0 && !score) {
        return this.opt.noRatedMsg;
      }

      var
        decimal = methods._getFirstDecimal.call(this, score),
        integer = Math.ceil(score),
        group   = this.opt.hints[(integer || 1) - 1],
        hint    = group,
        set     = !evt || this.move;

      if (this.opt.precision) {
        if (set) {
          decimal = decimal === 0 ? 9 : decimal - 1;
        }

        hint = group[decimal];
      } else if (this.opt.halfShow || this.opt.half) {
        decimal = set && decimal === 0 ? 1 : decimal > 5 ? 1 : 0;

        hint = group[decimal];
      }

      return hint === '' ? '' : hint || score;
    },

    _getWidth: function() {
      var width = this.stars[0].width || parseFloat(this.stars.eq(0).css('font-size'));

      if (!width) {
        methods._error.call(this, 'Could not get the icon width!');
      }

      return width;
    },

    _lock: function() {
      var hint = methods._getHint.call(this, this.score.val());

      this.style.cursor = '';
      this.title        = hint;

      this.score.prop('readonly', true);
      this.stars.prop('title', hint);

      if (this.cancel) {
        this.cancel.hide();
      }

      this.self.data('readonly', true);
    },

    _nameForIndex: function(i) {
      return this.opt.score && this.opt.score >= i ? 'starOn' : 'starOff';
    },

    _resetTitle: function(star) {
      for (var i = 0; i < this.opt.number; i++) {
        this.stars[i].title = methods._getHint.call(this, i + 1);
      }
    },

     _roundHalfScore: function(score) {
      var integer = parseInt(score, 10),
          decimal = methods._getFirstDecimal.call(this, score);

      if (decimal !== 0) {
        decimal = decimal > 5 ? 1 : 0.5;
      }

      return integer + decimal;
    },

    _roundStars: function(score, evt) {
      var
        decimal = (score % 1).toFixed(2),
        name    ;

      if (evt || this.move) {
        name = decimal > 0.5 ? 'starOn' : 'starHalf';
      } else if (decimal > this.opt.round.down) {               // Up:   [x.76 .. x.99]
        name = 'starOn';

        if (this.opt.halfShow && decimal < this.opt.round.up) { // Half: [x.26 .. x.75]
          name = 'starHalf';
        } else if (decimal < this.opt.round.full) {             // Down: [x.00 .. x.5]
          name = 'starOff';
        }
      }

      if (name) {
        var
          icon = this.opt[name],
          star = this.stars[Math.ceil(score) - 1];

        methods._setIcon.call(this, star, icon);
      }                                                         // Full down: [x.00 .. x.25]
    },

    _setIcon: function(star, icon) {
      star[this.opt.starType === 'img' ? 'src' : 'className'] = this.opt.path + icon;
    },

    _setTarget: function(target, score) {
      if (score) {
        score = this.opt.targetFormat.toString().replace('{score}', score);
      }

      if (target.is(':input')) {
        target.val(score);
      } else {
        target.html(score);
      }
    },

    _setTitle: function(score, evt) {
      if (score) {
        var
          integer = parseInt(Math.ceil(score), 10),
          star    = this.stars[integer - 1];

        star.title = methods._getHint.call(this, score, evt);
      }
    },

    _target: function(score, evt) {
      if (this.opt.target) {
        var target = $(this.opt.target);

        if (!target.length) {
          methods._error.call(this, 'Target selector invalid or missing!');
        }

        var mouseover = evt && evt.type === 'mouseover';

        if (score === undefined) {
          score = this.opt.targetText;
        } else if (score === null) {
          score = mouseover ? this.opt.cancelHint : this.opt.targetText;
        } else {
          if (this.opt.targetType === 'hint') {
            score = methods._getHint.call(this, score, evt);
          } else if (this.opt.precision) {
            score = parseFloat(score).toFixed(1);
          }

          var mousemove = evt && evt.type === 'mousemove';

          if (!mouseover && !mousemove && !this.opt.targetKeep) {
            score = this.opt.targetText;
          }
        }

        methods._setTarget.call(this, target, score);
      }
    },

    _turnOn: function(i, score) {
      return this.opt.single ? (i === score) : (i <= score);
    },

    _unlock: function() {
      this.style.cursor = 'pointer';
      this.removeAttribute('title');

      this.score.removeAttr('readonly');

      this.self.data('readonly', false);

      for (var i = 0; i < this.opt.number; i++) {
        this.stars[i].title = methods._getHint.call(this, i + 1);
      }

      if (this.cancel) {
        this.cancel.css('display', '');
      }
    },

    cancel: function(click) {
      return this.each(function() {
        var self = $(this);

        if (self.data('readonly') !== true) {
          methods[click ? 'click' : 'score'].call(self, null);

          this.score.removeAttr('value');
        }
      });
    },

    click: function(score) {
      return this.each(function() {
        if ($(this).data('readonly') !== true) {
          score = methods._adjustedScore.call(this, score);

          methods._apply.call(this, score);

          if (this.opt.click) {
            this.opt.click.call(this, score, $.Event('click'));
          }

          methods._target.call(this, score);
        }
      });
    },

    destroy: function() {
      return this.each(function() {
        var self = $(this),
            raw  = self.data('raw');

        if (raw) {
          self.off('.raty').empty().css({ cursor: raw.style.cursor }).removeData('readonly');
        } else {
          self.data('raw', self.clone()[0]);
        }
      });
    },

    getScore: function() {
      var score = [],
          value ;

      this.each(function() {
        value = this.score.val();

        score.push(value ? +value : undefined);
      });

      return (score.length > 1) ? score : score[0];
    },

    move: function(score) {
      return this.each(function() {
        var
          integer  = parseInt(score, 10),
          decimal  = methods._getFirstDecimal.call(this, score);

        if (integer >= this.opt.number) {
          integer = this.opt.number - 1;
          decimal = 10;
        }

        var
          width   = methods._getWidth.call(this),
          steps   = width / 10,
          star    = $(this.stars[integer]),
          percent = star.offset().left + steps * decimal,
          evt     = $.Event('mousemove', { pageX: percent });

        this.move = true;

        star.trigger(evt);

        this.move = false;
      });
    },

    readOnly: function(readonly) {
      return this.each(function() {
        var self = $(this);

        if (self.data('readonly') !== readonly) {
          if (readonly) {
            self.off('.raty').children(this.opt.starType).off('.raty');

            methods._lock.call(this);
          } else {
            methods._binds.call(this);
            methods._unlock.call(this);
          }

          self.data('readonly', readonly);
        }
      });
    },

    reload: function() {
      return methods.set.call(this, {});
    },

    score: function() {
      var self = $(this);

      return arguments.length ? methods.setScore.apply(self, arguments) : methods.getScore.call(self);
    },

    set: function(options) {
      return this.each(function() {
        $(this).raty($.extend({}, this.opt, options));
      });
    },

    setScore: function(score) {
      return this.each(function() {
        if ($(this).data('readonly') !== true) {
          score = methods._adjustedScore.call(this, score);

          methods._apply.call(this, score);
          methods._target.call(this, score);
        }
      });
    }
  };

  $.fn.raty = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist!');
    }
  };

  $.fn.raty.defaults = {
    cancel       : false,
    cancelClass  : 'raty-cancel',
    cancelHint   : 'Cancel this rating!',
    cancelOff    : 'cancel-off.png',
    cancelOn     : 'cancel-on.png',
    cancelPlace  : 'left',
    click        : undefined,
    half         : false,
    halfShow     : true,
    hints        : ['bad', 'poor', 'regular', 'good', 'gorgeous'],
    iconRange    : undefined,
    mouseout     : undefined,
    mouseover    : undefined,
    noRatedMsg   : 'Not rated yet!',
    number       : 5,
    numberMax    : 20,
    path         : undefined,
    precision    : false,
    readOnly     : false,
    round        : { down: 0.25, full: 0.6, up: 0.76 },
    score        : undefined,
    scoreName    : 'score',
    single       : false,
    space        : true,
    starHalf     : 'star-half.png',
    starOff      : 'star-off.png',
    starOn       : 'star-on.png',
    starType     : 'img',
    target       : undefined,
    targetFormat : '{score}',
    targetKeep   : false,
    targetScore  : undefined,
    targetText   : '',
    targetType   : 'hint'
  };

})(jQuery);

function js_submit(id_form){
	var dem=0;
	$('#'+id_form+' .input_form[required]').each(function(){
		if(!show_hide_notify($(this))) dem++;
	});

	if(dem>0)
			return false;
	document.getElementById(id_form).submit();
}

$(document).ready(function(){
	$('.input_form[required]').mousedown(function(){
		if($(this).val()==''){
			$(this).removeClass('box_not_valid');
		}
	});
	
	// $('.input_form[required]').blur(function(){
	// 	show_hide_notify($(this));
	// });
	
	// $('.box_input_form.has_notify').each(function(){
	// 	var text_input=$(this).find('input').attr('placeholder');
	// 	$notify_input=$('<div class="notify_input"><div class="content_notify_input">'+text_input+'</div></div>');
	// 	$(this).append($notify_input);
	// });
});

function show_hide_notify(input_check){
	var this_notify=$(input_check).attr('placeholder');
		if($(input_check).val()==''){

			//$('.'+this_notify).fadeIn();
			if($(input_check).parent().find('.notify_form').length==0){
				$(input_check).parent().append('<div class="notify_form"><i class="fa fa-info-circle"></i> <span>Bạn chưa nhập '+this_notify+'</span></div>');
			}
				// $(input_check).parent().addClass('box_not_valid');
			return false;
		}else{
			//alert('222');
			$(input_check).parent().find('.notify_form').remove();
				// $(input_check).parent().removeClass('box_not_valid');
			//$('.'+this_notify).fadeOut();
			return true;
		}
}


/*
 * simplyScroll 2 - a scroll-tastic jQuery plugin
 *
 * http://logicbox.net/jquery/simplyscroll/
 *
 * Copyright (c) 2009-2012 Will Kelly - http://logicbox.net
 *
 * Dual licensed under the MIT and GPL licenses.
 *
 * Version: 2.0.5 Last revised: 10/05/2012
 *
 */

(function($,window,undefined) {

$.fn.simplyScroll = function(options) {
	return this.each(function() {
		new $.simplyScroll(this,options);
	});
};

var defaults = {
	customClass: 'simply-scroll',
	frameRate: 24, //No of movements per second
	speed: 1, //No of pixels per frame
	orientation: 'horizontal', //'horizontal or 'vertical' - not to be confused with device orientation
	auto: true,
	autoMode: 'loop', //auto = true, 'loop' or 'bounce',
	manualMode: 'end', //auto = false, 'loop' or 'end'
	direction: 'forwards', //'forwards' or 'backwards'.
	pauseOnHover: true, //autoMode = loop|bounce only
	pauseOnTouch: true, //" touch device only
	pauseButton: false, //" generates an extra element to allow manual pausing 
	startOnLoad: false //use this to delay starting of plugin until all page assets have loaded
};
	
$.simplyScroll = function(el,options) {
	
	var self = this;
	
	this.o = $.extend({}, defaults, options || {});
	this.isAuto = this.o.auto!==false && this.o.autoMode.match(/^loop|bounce$/)!==null;
	this.isHorizontal = this.o.orientation.match(/^horizontal|vertical$/)!==null && this.o.orientation==defaults.orientation; 
	this.isRTL = this.isHorizontal && $("html").attr('dir') == 'rtl';
	this.isForwards = !this.isAuto  || (this.isAuto && this.o.direction.match(/^forwards|backwards$/)!==null && this.o.direction==defaults.direction) && !this.isRTL;
	this.isLoop = this.isAuto && this.o.autoMode == 'loop' || !this.isAuto && this.o.manualMode == 'loop';
	
	this.supportsTouch = ('createTouch' in document);
	
	this.events = this.supportsTouch ? 
		{start:'touchstart MozTouchDown',move:'touchmove MozTouchMove',end:'touchend touchcancel MozTouchRelease'} : 
		{start:'mouseenter',end:'mouseleave'};
	
	this.$list = $(el); //called on ul/ol/div etc
	var $items = this.$list.children();
	
	//generate extra markup
	this.$list.addClass('simply-scroll-list')
		.wrap('<div class="simply-scroll-clip"></div>')
		.parent().wrap('<div class="' + this.o.customClass + ' simply-scroll-container"></div>');
	
	if (!this.isAuto) { //button placeholders
		this.$list.parent().parent()
		.prepend('<div class="simply-scroll-forward"></div>')
		.prepend('<div class="simply-scroll-back"></div>');
	} else {
		if (this.o.pauseButton) {
			this.$list.parent().parent()
			.prepend('<div class="simply-scroll-btn simply-scroll-btn-pause"></div>');
			this.o.pauseOnHover = false;
		}
	}
	
	//wrap an extra div around the whole lot if elements scrolled aren't equal
	if ($items.length > 1) {
		
		var extra_wrap = false,
			total = 0;
			
		if (this.isHorizontal) {
			$items.each(function() { total+=$(this).outerWidth(true); });
			extra_wrap = $items.eq(0).outerWidth(true) * $items.length !== total;
		} else {
			$items.each(function() { total+=$(this).outerHeight(true); });
			extra_wrap = $items.eq(0).outerHeight(true) * $items.length !== total;
		}
		
		if (extra_wrap) {
			this.$list = this.$list.wrap('<div></div>').parent().addClass('simply-scroll-list');
			if (this.isHorizontal) {
				this.$list.children().css({"float":'left',width: total + 'px'});	
			} else {
				this.$list.children().css({height: total + 'px'});
			}
		}
	}
	
	if (!this.o.startOnLoad) {
		this.init();
	} else {
		//wait for load before completing setup
		$(window).load(function() { self.init();  });
	}
		
};
	
$.simplyScroll.fn = $.simplyScroll.prototype = {};

$.simplyScroll.fn.extend = $.simplyScroll.extend = $.extend;

$.simplyScroll.fn.extend({
	init: function() {

		this.$items = this.$list.children();
		this.$clip = this.$list.parent(); //this is the element that scrolls
		this.$container = this.$clip.parent();
		this.$btnBack = $('.simply-scroll-back',this.$container);
		this.$btnForward = $('.simply-scroll-forward',this.$container);

		if (!this.isHorizontal) {
			this.itemMax = this.$items.eq(0).outerHeight(true); 
			this.clipMax = this.$clip.height();
			this.dimension = 'height';			
			this.moveBackClass = 'simply-scroll-btn-up';
			this.moveForwardClass = 'simply-scroll-btn-down';
			this.scrollPos = 'Top';
		} else {
			this.itemMax = this.$items.eq(0).outerWidth(true);
			this.clipMax = this.$clip.width();			
			this.dimension = 'width';
			this.moveBackClass = 'simply-scroll-btn-left';
			this.moveForwardClass = 'simply-scroll-btn-right';
			this.scrollPos = 'Left';
		}
		
		this.posMin = 0;
		
		this.posMax = this.$items.length * this.itemMax;
		
		var addItems = Math.ceil(this.clipMax / this.itemMax);
		
		//auto scroll loop & manual scroll bounce or end(to-end)
		if (this.isAuto && this.o.autoMode=='loop') {
			
			this.$list.css(this.dimension,this.posMax+(this.itemMax*addItems) +'px');
			
			this.posMax += (this.clipMax - this.o.speed);
			
			if (this.isForwards) {
				this.$items.slice(0,addItems).clone(true).appendTo(this.$list);
				this.resetPosition = 0;
				
			} else {
				this.$items.slice(-addItems).clone(true).prependTo(this.$list);
				this.resetPosition = this.$items.length * this.itemMax;
				//due to inconsistent RTL implementation force back to LTR then fake
				if (this.isRTL) {
					this.$clip[0].dir = 'ltr';
					//based on feedback seems a good idea to force float right
					this.$items.css('float','right');
				}
			}
		
		//manual and loop
		} else if (!this.isAuto && this.o.manualMode=='loop') {
			
			this.posMax += this.itemMax * addItems;
			
			this.$list.css(this.dimension,this.posMax+(this.itemMax*addItems) +'px');
			
			this.posMax += (this.clipMax - this.o.speed);
			
			var items_append  = this.$items.slice(0,addItems).clone(true).appendTo(this.$list);
			var items_prepend = this.$items.slice(-addItems).clone(true).prependTo(this.$list);
			
			this.resetPositionForwards = this.resetPosition = addItems * this.itemMax;
			this.resetPositionBackwards = this.$items.length * this.itemMax;
			
			//extra events to force scroll direction change
			var self = this;
			
			this.$btnBack.bind(this.events.start,function() {
				self.isForwards = false;
				self.resetPosition = self.resetPositionBackwards;
			});
			
			this.$btnForward.bind(this.events.start,function() {
				self.isForwards = true;
				self.resetPosition = self.resetPositionForwards;
			});
			
		} else { //(!this.isAuto && this.o.manualMode=='end') 
			
			this.$list.css(this.dimension,this.posMax +'px');
			
			if (this.isForwards) {
				this.resetPosition = 0;
				
			} else {
				this.resetPosition = this.$items.length * this.itemMax;
				//due to inconsistent RTL implementation force back to LTR then fake
				if (this.isRTL) {
					this.$clip[0].dir = 'ltr';
					//based on feedback seems a good idea to force float right
					this.$items.css('float','right');
				}
			}
		}
		
		this.resetPos() //ensure scroll position is reset
		
		this.interval = null;	
		this.intervalDelay = Math.floor(1000 / this.o.frameRate);
		
		if (!(!this.isAuto && this.o.manualMode=='end')) { //loop mode
			//ensure that speed is divisible by item width. Helps to always make images even not odd widths!
			while (this.itemMax % this.o.speed !== 0) {
				this.o.speed--;
				if (this.o.speed===0) {
					this.o.speed=1; break;	
				}
			}
		}
		
		var self = this;
		this.trigger = null;
		this.funcMoveBack = function(e) { 
			if (e !== undefined) {
				e.preventDefault();
			}
			self.trigger = !self.isAuto && self.o.manualMode=='end' ? this : null;
			if (self.isAuto) {
				self.isForwards ? self.moveBack() : self.moveForward(); 
			} else {
				self.moveBack();	
			}
		};
		this.funcMoveForward = function(e) { 
			if (e !== undefined) {
				e.preventDefault();
			}
			self.trigger = !self.isAuto && self.o.manualMode=='end' ? this : null;
			if (self.isAuto) {
				self.isForwards ? self.moveForward() : self.moveBack(); 
			} else {
				self.moveForward();	
			}
		};
		this.funcMovePause = function() { self.movePause(); };
		this.funcMoveStop = function() { self.moveStop(); };
		this.funcMoveResume = function() { self.moveResume(); };
		
		
		
		if (this.isAuto) {
			
			this.paused = false;
			
			function togglePause() {
				if (self.paused===false) {
					self.paused=true;
					self.funcMovePause();
				} else {
					self.paused=false;
					self.funcMoveResume();
				}
				return self.paused;
			};
			
			//disable pauseTouch when links are present
			if (this.supportsTouch && this.$items.find('a').length) {
				this.supportsTouch=false;
			}
			
			if (this.isAuto && this.o.pauseOnHover && !this.supportsTouch) {
				this.$clip.bind(this.events.start,this.funcMovePause).bind(this.events.end,this.funcMoveResume);
			} else if (this.isAuto && this.o.pauseOnTouch && !this.o.pauseButton && this.supportsTouch) {
				
				var touchStartPos, scrollStartPos;
				
				this.$clip.bind(this.events.start,function(e) {
					togglePause();
					var touch = e.originalEvent.touches[0];
					touchStartPos = self.isHorizontal ? touch.pageX : touch.pageY;
					scrollStartPos = self.$clip[0]['scroll' + self.scrollPos];
					e.stopPropagation();
					e.preventDefault();
					
				}).bind(this.events.move,function(e) {
					
					e.stopPropagation();
					e.preventDefault();
					
					var touch = e.originalEvent.touches[0],
						endTouchPos = self.isHorizontal ? touch.pageX : touch.pageY,
						pos = (touchStartPos - endTouchPos) + scrollStartPos;
					
					if (pos < 0) pos = 0;
					else if (pos > self.posMax) pos = self.posMax;
					
					self.$clip[0]['scroll' + self.scrollPos] = pos;
					
					//force pause
					self.funcMovePause();
					self.paused = true;
				});	
			} else {
				if (this.o.pauseButton) {
					
					this.$btnPause = $(".simply-scroll-btn-pause",this.$container)
						.bind('click',function(e) {
							e.preventDefault();
							togglePause() ? $(this).addClass('active') : $(this).removeClass('active');
					});
				}
			}
			this.funcMoveForward();
		} else {

			this.$btnBack 
				.addClass('simply-scroll-btn' + ' ' + this.moveBackClass)
				.bind(this.events.start,this.funcMoveBack).bind(this.events.end,this.funcMoveStop);
			this.$btnForward
				.addClass('simply-scroll-btn' + ' ' + this.moveForwardClass)
				.bind(this.events.start,this.funcMoveForward).bind(this.events.end,this.funcMoveStop);
				
			if (this.o.manualMode == 'end') {
				!this.isRTL ? this.$btnBack.addClass('disabled') : this.$btnForward.addClass('disabled');	
			}
		}
	},
	moveForward: function() {
		var self = this;
		this.movement = 'forward';
		if (this.trigger !== null) {
			this.$btnBack.removeClass('disabled');
		}
		self.interval = setInterval(function() {
			if (self.$clip[0]['scroll' + self.scrollPos] < (self.posMax-self.clipMax)) {
				self.$clip[0]['scroll' + self.scrollPos] += self.o.speed;
			} else if (self.isLoop) {
				self.resetPos();
			} else {
				self.moveStop(self.movement);
			}
		},self.intervalDelay);
	},
	moveBack: function() {
		var self = this;
		this.movement = 'back';
		if (this.trigger !== null) {
			this.$btnForward.removeClass('disabled');
		}
		self.interval = setInterval(function() {
			if (self.$clip[0]['scroll' + self.scrollPos] > self.posMin) {
				self.$clip[0]['scroll' + self.scrollPos] -= self.o.speed;
			} else if (self.isLoop) {
				self.resetPos();
			} else {
				self.moveStop(self.movement);
			}
		},self.intervalDelay);
	},
	movePause: function() {
		clearInterval(this.interval);	
	},
	moveStop: function(moveDir) {
		this.movePause();
		if (this.trigger!==null) {
			if (typeof moveDir !== 'undefined') {
				$(this.trigger).addClass('disabled');
			}
			this.trigger = null;
		}
		if (this.isAuto) {
			if (this.o.autoMode=='bounce') {
				moveDir == 'forward' ? this.moveBack() : this.moveForward();
			}
		}
	},
	moveResume: function() {
		this.movement=='forward' ? this.moveForward() : this.moveBack();
	},
	resetPos: function() {
		this.$clip[0]['scroll' + this.scrollPos] = this.resetPosition;
	}
});
		  
})(jQuery,window);
/*


   Magic Zoom Plus v4.5.40 
   Copyright 2015 Magic Toolbox
   Buy a license: www.magictoolbox.com/magiczoomplus/
   License agreement: http://www.magictoolbox.com/license/


*/
eval(function(m,a,g,i,c,k){c=function(e){return(e<a?'':c(parseInt(e/a)))+((e=e%a)>35?String.fromCharCode(e+29):e.toString(36))};if(!''.replace(/^/,String)){while(g--){k[c(g)]=i[g]||c(g)}i=[function(e){return k[e]}];c=function(){return'\\w+'};g=1};while(g--){if(i[g]){m=m.replace(new RegExp('\\b'+c(g)+'\\b','g'),i[g])}}return m}('(R(){if(1f.6v){S}V b={3H:"e8.7.4",cQ:0,5Y:{},$ac:R(d){S(d.$4A||(d.$4A=++a.cQ))},9b:R(d){S(a.5Y[d]||(a.5Y[d]={}))},$F:R(){},$12:R(){S 12},2P:R(d){S(1H!=d)},fT:R(d){S!!(d)},2I:R(d){if(!a.2P(d)){S 12}if(d.$4i){S d.$4i}if(!!d.5v){if(1==d.5v){S"99"}if(3==d.5v){S"cM"}}if(d.1A&&d.9J){S"fU"}if(d.1A&&d.8G){S"2i"}if((d 4z 1f.fV||d 4z 1f.af)&&d.4N===a.4O){S"6p"}if(d 4z 1f.5a){S"5N"}if(d 4z 1f.af){S"R"}if(d 4z 1f.8x){S"6f"}if(a.1a.2L){if(a.2P(d.dy)){S"3j"}}1i{if(d===1f.3j||d.4N==1f.9V||d.4N==1f.fS||d.4N==1f.fR||d.4N==1f.fN||d.4N==1f.fO){S"3j"}}if(d 4z 1f.cP){S"cN"}if(d 4z 1f.4T){S"fP"}if(d===1f){S"1f"}if(d===1n){S"1n"}S 4k(d)},1Y:R(j,h){if(!(j 4z 1f.5a)){j=[j]}1K(V g=0,e=j.1A;g<e;g++){if(!a.2P(j)){65}1K(V f in(h||{})){36{j[g][f]=h[f]}3k(d){}}}S j[0]},8M:R(h,g){if(!(h 4z 1f.5a)){h=[h]}1K(V f=0,d=h.1A;f<d;f++){if(!a.2P(h[f])){65}if(!h[f].2W){65}1K(V e in(g||{})){if(!h[f].2W[e]){h[f].2W[e]=g[e]}}}S h[0]},cO:R(f,e){if(!a.2P(f)){S f}1K(V d in(e||{})){if(!f[d]){f[d]=e[d]}}S f},$36:R(){1K(V f=0,d=2i.1A;f<d;f++){36{S 2i[f]()}3k(g){}}S 1b},$A:R(f){if(!a.2P(f)){S $X([])}if(f.cR){S $X(f.cR())}if(f.9J){V e=f.1A||0,d=1t 5a(e);3J(e--){d[e]=f[e]}S $X(d)}S $X(5a.2W.fQ.21(f))},31:R(){S 1t cP().fW()},3U:R(h){V f;2r(a.2I(h)){1p"aE":f={};1K(V g in h){f[g]=a.3U(h[g])}1q;1p"5N":f=[];1K(V e=0,d=h.1A;e<d;e++){f[e]=a.3U(h[e])}1q;2q:S h}S a.$(f)},$:R(e){if(!a.2P(e)){S 1b}if(e.$ae){S e}2r(a.2I(e)){1p"5N":e=a.cO(e,a.1Y(a.5a,{$ae:a.$F}));e.3b=e.3R;e.4G=a.5a.4G;S e;1q;1p"6f":V d=1n.dk(e);if(a.2P(d)){S a.$(d)}S 1b;1q;1p"1f":1p"1n":a.$ac(e);e=a.1Y(e,a.6A);1q;1p"99":a.$ac(e);e=a.1Y(e,a.3s);1q;1p"3j":e=a.1Y(e,a.9V);1q;1p"cM":S e;1q;1p"R":1p"5N":1p"cN":2q:1q}S a.1Y(e,{$ae:a.$F})},$1t:R(d,f,e){S $X(a.2O.47(d)).dm(f||{}).1g(e||{})},g2:R(e){if(1n.9j&&1n.9j.1A){1n.9j[0].b7(e,0)}1i{V d=$X(1n.47("1M"));d.2Z(e);1n.6B("8E")[0].2A(d)}}};V a=b;1f.6v=b;1f.$X=b.$;a.5a={$4i:"5N",4w:R(g,h){V d=Q.1A;1K(V e=Q.1A,f=(h<0)?1v.3A(0,e+h):h||0;f<e;f++){if(Q[f]===g){S f}}S-1},4G:R(d,e){S Q.4w(d,e)!=-1},3R:R(d,g){1K(V f=0,e=Q.1A;f<e;f++){if(f in Q){d.21(g,Q[f],f,Q)}}},2X:R(d,j){V h=[];1K(V g=0,e=Q.1A;g<e;g++){if(g in Q){V f=Q[g];if(d.21(j,Q[g],g,Q)){h.4p(f)}}}S h},bQ:R(d,h){V g=[];1K(V f=0,e=Q.1A;f<e;f++){if(f in Q){g[f]=d.21(h,Q[f],f,Q)}}S g}};a.8M(8x,{$4i:"6f",4j:R(){S Q.2F(/^\\s+|\\s+$/g,"")},eq:R(d,e){S(e||12)?(Q.6a()===d.6a()):(Q.3a().6a()===d.3a().6a())},3d:R(){S Q.2F(/-\\D/g,R(d){S d.cS(1).fY()})},6q:R(){S Q.2F(/[A-Z]/g,R(d){S("-"+d.cS(0).3a())})},1R:R(d){S 28(Q,d||10)},c0:R(){S 45(Q)},6O:R(){S!Q.2F(/1c/i,"").4j()},3n:R(e,d){d=d||"";S(d+Q+d).4w(d+e+d)>-1}});b.8M(af,{$4i:"R",1o:R(){V e=a.$A(2i),d=Q,f=e.7v();S R(){S d.4Y(f||1b,e.cT(a.$A(2i)))}},2p:R(){V e=a.$A(2i),d=Q,f=e.7v();S R(g){S d.4Y(f||1b,$X([g||1f.3j]).cT(e))}},2z:R(){V e=a.$A(2i),d=Q,f=e.7v();S 1f.64(R(){S d.4Y(d,e)},f||0)},er:R(){V e=a.$A(2i),d=Q;S R(){S d.2z.4Y(d,e)}},d2:R(){V e=a.$A(2i),d=Q,f=e.7v();S 1f.g1(R(){S d.4Y(d,e)},f||0)}});V c=a7.fM.3a();a.1a={8I:{cu:!!(1n.fL),fx:!!(1f.fy),a9:!!(1n.fz)},3E:R(){S"fw"in 1f||(1f.cY&&1n 4z cY)}(),fr:c.3v(/cV|fs|ft|fu\\/|fA|fB|fI|fJ|fK|fH|fG|ip(cU|cW|ad)|fC|fD|fE |fF|g7|g8|gC|cX m(gD|in)i|gE( gB)?|cZ|p(gA|gw)\\/|gx|gy|gz|gF|gG|gN\\.(1a|5I)|gO|gP|gM (ce|cZ)|gL|gH/)?1c:12,4L:(1f.cX)?"7L":!!(1f.gI)?"2L":(1H!=1n.gJ||1b!=1f.gK)?"b0":(1b!=1f.gv||!a7.gu)?"3f":"gf",3H:"",3D:0,9I:c.3v(/ip(?:ad|cW|cU)/)?"c8":(c.3v(/(?:ge|cV)/)||a7.9I.3v(/bJ|5q|g9/i)||["ga"])[0].3a(),3K:1n.94&&"cK"==1n.94.3a(),4r:R(){S(1n.94&&"cK"==1n.94.3a())?1n.2j:1n.8e},6n:1f.6n||1f.gb||1f.gc||1f.gi||1f.gj||1H,95:1f.95||1f.cJ||1f.cJ||1f.gq||1f.gr||1f.gs||1H,1N:12,3S:R(){if(a.1a.1N){S}a.1a.1N=1c;a.2j=$X(1n.2j);a.5q=$X(1f);(R(){a.1a.6G={4m:12,3e:""};if(4k 1n.2j.1M.av!=="1H"){a.1a.6G.4m=1c}1i{V f="cz cA O 9p cy".4s(" ");1K(V e=0,d=f.1A;e<d;e++){a.1a.6G.3e=f[e];if(4k 1n.2j.1M[a.1a.6G.3e+"gp"]!=="1H"){a.1a.6G.4m=1c;1q}}}})();(R(){a.1a.7A={4m:12,3e:""};if(4k 1n.2j.1M.go!=="1H"){a.1a.7A.4m=1c}1i{V f="cz cA O 9p cy".4s(" ");1K(V e=0,d=f.1A;e<d;e++){a.1a.7A.3e=f[e];if(4k 1n.2j.1M[a.1a.7A.3e+"gm"]!=="1H"){a.1a.7A.4m=1c;1q}}}})();$X(1n).dh("58")}};(R(){R d(){S!!(2i.8G.aW)}a.1a.3H=("7L"==a.1a.4L)?!!(1n.8E)?gn:!!(1f.gQ)?eI:!!(1f.cw)?6V:(a.1a.8I.a9)?eJ:((d())?eH:((1n.7R)?eD:5f)):("2L"==a.1a.4L)?!!(1f.eF||1f.eK)?cH:!!(1f.cx&&1f.eL)?6:((1f.cx)?5:4):("3f"==a.1a.4L)?((a.1a.8I.cu)?((a.1a.8I.a9)?eP:d8):eC):("b0"==a.1a.4L)?!!(1n.8E)?5f:!!1n.6H?eM:!!(1f.cw)?eB:((1n.7R)?ex:ey):"";a.1a[a.1a.4L]=a.1a[a.1a.4L+a.1a.3H]=1c;if(1f.cB){a.1a.cB=1c}a.1a.3D=(!a.1a.2L)?0:(1n.cC)?1n.cC:R(){V e=0;if(a.1a.3K){S 5}2r(a.1a.3H){1p 4:e=6;1q;1p 5:e=7;1q;1p 6:e=8;1q;1p cH:e=9;1q}S e}()})();(R(){a.1a.3l={4m:12,8O:R(){S 12},9Q:R(){},cF:R(){},cI:"",cG:"",3e:""};if(4k 1n.cD!="1H"){a.1a.3l.4m=1c}1i{V f="3f c1 o 9p fp".4s(" ");1K(V e=0,d=f.1A;e<d;e++){a.1a.3l.3e=f[e];if(4k 1n[a.1a.3l.3e+"cE"]!="1H"){a.1a.3l.4m=1c;1q}}}if(a.1a.3l.4m){a.1a.3l.cI=a.1a.3l.3e+"ff";a.1a.3l.cG=a.1a.3l.3e+"fc";a.1a.3l.8O=R(){2r(Q.3e){1p"":S 1n.3l;1p"3f":S 1n.fh;2q:S 1n[Q.3e+"fi"]}};a.1a.3l.9Q=R(g){S(Q.3e==="")?g.ds():g[Q.3e+"fo"]()};a.1a.3l.cF=R(g){S(Q.3e==="")?1n.cD():1n[Q.3e+"cE"]()}}})();a.3s={5u:R(d){S Q.2Y.3n(d," ")},2k:R(d){if(d&&!Q.5u(d)){Q.2Y+=(Q.2Y?" ":"")+d}S Q},5g:R(d){d=d||".*";Q.2Y=Q.2Y.2F(1t 4T("(^|\\\\s)"+d+"(?:\\\\s|$)"),"$1").4j();S Q},fa:R(d){S Q.5u(d)?Q.5g(d):Q.2k(d)},1O:R(f){f=(f=="4W"&&Q.7g)?"ap":f.3d();V d=1b,e=1b;if(Q.7g){d=Q.7g[f]}1i{if(1n.ao&&1n.ao.d1){e=1n.ao.d1(Q,1b);d=e?e.eX([f.6q()]):1b}}if(!d){d=Q.1M[f]}if("1C"==f){S a.2P(d)?45(d):1}if(/^(2o(9H|9F|9E|9C)bw)|((24|1X)(9H|9F|9E|9C))$/.1P(f)){d=28(d)?d:"1V"}S("1D"==d?1b:d)},1F:R(f,d){36{if("1C"==f){Q.2C(d);S Q}1i{if("4W"==f){Q.1M[("1H"===4k(Q.1M.ap))?"eV":"ap"]=d;S Q}1i{if(a.1a.6G&&/av/.1P(f)){}}}Q.1M[f.3d()]=d+(("6c"==a.2I(d)&&!$X(["2x","1r"]).4G(f.3d()))?"1z":"")}3k(g){}S Q},1g:R(e){1K(V d in e){Q.1F(d,e[d])}S Q},4x:R(){V d={};a.$A(2i).3b(R(e){d[e]=Q.1O(e)},Q);S d},2C:R(h,e){e=e||12;h=45(h);if(e){if(h==0){if("1W"!=Q.1M.2U){Q.1M.2U="1W"}}1i{if("4F"!=Q.1M.2U){Q.1M.2U="4F"}}}if(a.1a.2L){if(!Q.7g||!Q.7g.f1){Q.1M.1r=1}36{V g=Q.f2.9J("dp.dq.dn");g.8O=(1!=h);g.1C=h*1Q}3k(d){Q.1M.2X+=(1==h)?"":"f8:dp.dq.dn(8O=1c,1C="+h*1Q+")"}}Q.1M.1C=h;S Q},dm:R(d){1K(V e in d){Q.f4(e,""+d[e])}S Q},1T:R(){S Q.1g({2g:"2R",2U:"1W"})},2c:R(){S Q.1g({2g:"2s",2U:"4F"})},1I:R(){S{U:Q.bv,W:Q.bq}},7w:R(){S{19:Q.4Q,17:Q.6g}},fg:R(){V d=Q,e={19:0,17:0};do{e.17+=d.6g||0;e.19+=d.4Q||0;d=d.1U}3J(d);S e},3h:R(){if(a.2P(1n.8e.dj)){V d=Q.dj(),f=$X(1n).7w(),h=a.1a.4r();S{19:d.19+f.y-h.f7,17:d.17+f.x-h.eW}}V g=Q,e=t=0;do{e+=g.eU||0;t+=g.eY||0;g=g.eZ}3J(g&&!(/^(?:2j|f9)$/i).1P(g.3Z));S{19:t,17:e}},3L:R(){V e=Q.3h();V d=Q.1I();S{19:e.19,1k:e.19+d.W,17:e.17,1m:e.17+d.U}},7q:R(f){36{Q.8Y=f}3k(d){Q.fk=f}S Q},4c:R(){S(Q.1U)?Q.1U.4t(Q):Q},5W:R(){a.$A(Q.fl).3b(R(d){if(3==d.5v||8==d.5v){S}$X(d).5W()});Q.4c();Q.bs();if(Q.$4A){a.5Y[Q.$4A]=1b;3G a.5Y[Q.$4A]}S 1b},4S:R(g,e){e=e||"1k";V d=Q.2Q;("19"==e&&d)?Q.91(g,d):Q.2A(g);S Q},29:R(f,e){V d=$X(f).4S(Q,e);S Q},bz:R(d){Q.4S(d.1U.8d(Q,d));S Q},68:R(d){if("99"!==a.2I("6f"==a.2I(d)?d=1n.dk(d):d)){S 12}S(Q==d)?12:(Q.4G&&!(a.1a.dr))?(Q.4G(d)):(Q.dl)?!!(Q.dl(d)&16):a.$A(Q.2E(d.3Z)).4G(d)}};a.3s.78=a.3s.1O;a.3s.fb=a.3s.1g;if(!1f.3s){1f.3s=a.$F;if(a.1a.4L.3f){1f.1n.47("fd")}1f.3s.2W=(a.1a.4L.3f)?1f["[[fe.2W]]"]:{}}a.8M(1f.3s,{$4i:"99"});a.6A={1I:R(){if(a.1a.eT||a.1a.dr){S{U:1f.9g,W:1f.9f}}S{U:a.1a.4r().eO,W:a.1a.4r().et}},7w:R(){S{x:1f.eA||a.1a.4r().6g,y:1f.eu||a.1a.4r().4Q}},aT:R(){V d=Q.1I();S{U:1v.3A(a.1a.4r().ew,d.U),W:1v.3A(a.1a.4r().ev,d.W)}}};a.1Y(1n,{$4i:"1n"});a.1Y(1f,{$4i:"1f"});a.1Y([a.3s,a.6A],{1e:R(g,e){V d=a.9b(Q.$4A),f=d[g];if(1H!=e&&1H==f){f=d[g]=e}S(a.2P(f)?f:1b)},1G:R(f,e){V d=a.9b(Q.$4A);d[f]=e;S Q},92:R(e){V d=a.9b(Q.$4A);3G d[e];S Q}});if(!(1f.aq&&1f.aq.2W&&1f.aq.2W.7R)){a.1Y([a.3s,a.6A],{7R:R(d){S a.$A(Q.6B("*")).2X(R(g){36{S(1==g.5v&&g.2Y.3n(d," "))}3k(f){}})}})}a.1Y([a.3s,a.6A],{eR:R(){S Q.7R(2i[0])},2E:R(){S Q.6B(2i[0])}});if(a.1a.3l.4m){a.3s.ds=R(){a.1a.3l.9Q(Q)}}a.9V={$4i:"3j",1u:R(){if(Q.dx){Q.dx()}1i{Q.dy=1c}if(Q.aJ){Q.aJ()}1i{Q.hj=12}S Q},4X:R(){V e,d;e=((/5s/i).1P(Q.2n))?Q.4q[0]:Q;S(!a.2P(e))?{x:0,y:0}:{x:e.iB||e.5U+a.1a.4r().6g,y:e.ix||e.5J+a.1a.4r().4Q}},5l:R(){V d=Q.gR||Q.i1;3J(d&&3==d.5v){d=d.1U}S d},4e:R(){V e=1b;2r(Q.2n){1p"26":e=Q.dw||Q.hX;1q;1p"2S":e=Q.dw||Q.i9;1q;2q:S e}36{3J(e&&3==e.5v){e=e.1U}}3k(d){e=1b}S e},5r:R(){if(!Q.dt&&Q.8h!==1H){S(Q.8h&1?1:(Q.8h&2?3:(Q.8h&4?2:0)))}S Q.dt}};a.9T="du";a.9X="io";a.8l="";if(!1n.du){a.9T="ib";a.9X="ia";a.8l="56"}a.1Y([a.3s,a.6A],{1y:R(g,f){V i=("58"==g)?12:1c,e=Q.1e("7M",{});e[g]=e[g]||{};if(e[g].5O(f.$7t)){S Q}if(!f.$7t){f.$7t=1v.7D(1v.7I()*a.31())}V d=Q,h=R(j){S f.21(d)};if("58"==g){if(a.1a.1N){f.21(Q);S Q}}if(i){h=R(j){j=a.1Y(j||1f.e,{$4i:"3j"});S f.21(d,$X(j))};Q[a.9T](a.8l+g,h,12)}e[g][f.$7t]=h;S Q},2t:R(g){V i=("58"==g)?12:1c,e=Q.1e("7M");if(!e||!e[g]){S Q}V h=e[g],f=2i[1]||1b;if(g&&!f){1K(V d in h){if(!h.5O(d)){65}Q.2t(g,d)}S Q}f=("R"==a.2I(f))?f.$7t:f;if(!h.5O(f)){S Q}if("58"==g){i=12}if(i){Q[a.9X](a.8l+g,h[f],12)}3G h[f];S Q},dh:R(h,f){V m=("58"==h)?12:1c,l=Q,j;if(!m){V g=Q.1e("7M");if(!g||!g[h]){S Q}V i=g[h];1K(V d in i){if(!i.5O(d)){65}i[d].21(Q)}S Q}if(l===1n&&1n.8u&&!l.d7){l=1n.8e}if(1n.8u){j=1n.8u(h);j.ij(f,1c,1c)}1i{j=1n.ik();j.iq=h}if(1n.8u){l.d7(j)}1i{l.im("56"+f,j)}S j},bs:R(){V d=Q.1e("7M");if(!d){S Q}1K(V e in d){Q.2t(e)}Q.92("7M");S Q}});(R(){if("6F"===1n.6H){S a.1a.3S.2z(1)}if(a.1a.3f&&a.1a.3H<d8){(R(){($X(["i0","6F"]).4G(1n.6H))?a.1a.3S():2i.8G.2z(50)})()}1i{if(a.1a.2L&&a.1a.3D<9&&1f==19){(R(){(a.$36(R(){a.1a.4r().hY("17");S 1c}))?a.1a.3S():2i.8G.2z(50)})()}1i{$X(1n).1y("hW",a.1a.3S);$X(1f).1y("2J",a.1a.3S)}}})();a.4O=R(){V h=1b,e=a.$A(2i);if("6p"==a.2I(e[0])){h=e.7v()}V d=R(){1K(V l in Q){Q[l]=a.3U(Q[l])}if(Q.4N.$3I){Q.$3I={};V o=Q.4N.$3I;1K(V n in o){V j=o[n];2r(a.2I(j)){1p"R":Q.$3I[n]=a.4O.d6(Q,j);1q;1p"aE":Q.$3I[n]=a.3U(j);1q;1p"5N":Q.$3I[n]=a.3U(j);1q}}}V i=(Q.41)?Q.41.4Y(Q,2i):Q;3G Q.aW;S i};if(!d.2W.41){d.2W.41=a.$F}if(h){V g=R(){};g.2W=h.2W;d.2W=1t g;d.$3I={};1K(V f in h.2W){d.$3I[f]=h.2W[f]}}1i{d.$3I=1b}d.4N=a.4O;d.2W.4N=d;a.1Y(d.2W,e[0]);a.1Y(d,{$4i:"6p"});S d};b.4O.d6=R(d,e){S R(){V g=Q.aW;V f=e.4Y(d,2i);S f}};a.5q=$X(1f);a.2O=$X(1n)})();(R(b){if(!b){7r"8w 8c 9c";S}if(b.22){S}V a=b.$;b.22=1t b.4O({T:{4K:60,35:8R,4D:R(c){S-(1v.b5(1v.b3*c)-1)/2},7b:b.$F,3Y:b.$F,7X:b.$F,b6:b.$F,7C:12,df:1c},4b:1b,41:R(d,c){Q.el=a(d);Q.T=b.1Y(Q.T,c);Q.4Z=12},1B:R(c){Q.4b=c;Q.1J=0;Q.i6=0;Q.aY=b.31();Q.d9=Q.aY+Q.T.35;Q.b4=Q.aS.1o(Q);Q.T.7b.21();if(!Q.T.7C&&b.1a.6n){Q.4Z=b.1a.6n.21(1f,Q.b4)}1i{Q.4Z=Q.aS.1o(Q).d2(1v.4V(aM/Q.T.4K))}S Q},aR:R(){if(Q.4Z){if(!Q.T.7C&&b.1a.6n&&b.1a.95){b.1a.95.21(1f,Q.4Z)}1i{i5(Q.4Z)}Q.4Z=12}},1u:R(c){c=b.2P(c)?c:12;Q.aR();if(c){Q.6N(1);Q.T.3Y.2z(10)}S Q},86:R(e,d,c){S(d-e)*c+e},aS:R(){V d=b.31();if(d>=Q.d9){Q.aR();Q.6N(1);Q.T.3Y.2z(10);S Q}V c=Q.T.4D((d-Q.aY)/Q.T.35);if(!Q.T.7C&&b.1a.6n){Q.4Z=b.1a.6n.21(1f,Q.b4)}Q.6N(c)},6N:R(c){V d={};1K(V e in Q.4b){if("1C"===e){d[e]=1v.4V(Q.86(Q.4b[e][0],Q.4b[e][1],c)*1Q)/1Q}1i{d[e]=Q.86(Q.4b[e][0],Q.4b[e][1],c);if(Q.T.df){d[e]=1v.4V(d[e])}}}Q.T.7X(d);Q.7P(d);Q.T.b6(d)},7P:R(c){S Q.el.1g(c)}});b.22.3m={4E:R(c){S c},dg:R(c){S-(1v.b5(1v.b3*c)-1)/2},iy:R(c){S 1-b.22.3m.dg(1-c)},de:R(c){S 1v.3x(2,8*(c-1))},it:R(c){S 1-b.22.3m.de(1-c)},ct:R(c){S 1v.3x(c,2)},iw:R(c){S 1-b.22.3m.ct(1-c)},db:R(c){S 1v.3x(c,3)},iz:R(c){S 1-b.22.3m.db(1-c)},dc:R(d,c){c=c||1.iu;S 1v.3x(d,2)*((c+1)*d-c)},iA:R(d,c){S 1-b.22.3m.dc(1-d)},bD:R(d,c){c=c||[];S 1v.3x(2,10*--d)*1v.b5(20*d*1v.b3*(c[0]||1)/3)},hU:R(d,c){S 1-b.22.3m.bD(1-d,c)},bE:R(e){1K(V d=0,c=1;1;d+=c,c/=2){if(e>=(7-4*d)/11){S c*c-1v.3x((11-6*d-11*e)/4,2)}}},hd:R(c){S 1-b.22.3m.bE(1-c)},2R:R(c){S 0}}})(6v);(R(a){if(!a){7r"8w 8c 9c";S}if(!a.22){7r"8w.22 8c 9c";S}if(a.22.ba){S}V b=a.$;a.22.ba=1t a.4O(a.22,{T:{6M:"7z"},41:R(d,c){Q.el=$X(d);Q.T=a.1Y(Q.$3I.T,Q.T);Q.$3I.41(d,c);Q.54=Q.el.1e("5P:54");Q.54=Q.54||a.$1t("3o").1g(a.1Y(Q.el.4x("1X-19","1X-17","1X-1m","1X-1k","1w","19","4W"),{2y:"1W"})).bz(Q.el);Q.el.1G("5P:54",Q.54).1g({1X:0})},7z:R(){Q.1X="1X-19";Q.4R="W";Q.6r=Q.el.bq},aN:R(c){Q.1X="1X-"+(c||"17");Q.4R="U";Q.6r=Q.el.bv},1m:R(){Q.aN()},17:R(){Q.aN("1m")},1B:R(e,h){Q[h||Q.T.6M]();V g=Q.el.1O(Q.1X).1R(),f=Q.54.1O(Q.4R).1R(),c={},i={},d;c[Q.1X]=[g,0],c[Q.4R]=[0,Q.6r],i[Q.1X]=[g,-Q.6r],i[Q.4R]=[f,0];2r(e){1p"in":d=c;1q;1p"aG":d=i;1q;1p"9t":d=(0==f)?c:i;1q}Q.$3I.1B(d);S Q},7P:R(c){Q.el.1F(Q.1X,c[Q.1X]);Q.54.1F(Q.4R,c[Q.4R]);S Q},he:R(c){S Q.1B("in",c)},hc:R(c){S Q.1B("aG",c)},1T:R(d){Q[d||Q.T.6M]();V c={};c[Q.4R]=0,c[Q.1X]=-Q.6r;S Q.7P(c)},2c:R(d){Q[d||Q.T.6M]();V c={};c[Q.4R]=Q.6r,c[Q.1X]=0;S Q.7P(c)},9t:R(c){S Q.1B("9t",c)}})})(6v);(R(b){if(!b){7r"8w 8c 9c";S}if(b.8Z){S}V a=b.$;b.8Z=1t b.4O(b.22,{41:R(c,d){Q.au=c;Q.T=b.1Y(Q.T,d);Q.4Z=12},1B:R(c){Q.$3I.1B([]);Q.bO=c;S Q},6N:R(c){1K(V d=0;d<Q.au.1A;d++){Q.el=a(Q.au[d]);Q.4b=Q.bO[d];Q.$3I.6N(c)}}})})(6v);V 5p=(R(g){V i=g.$;g.$8N=R(j){$X(j).1u();S 12};g.ek=R(j,l,q){V m,k,n,o=[],e=-1;q||(q=g.ha);m=g.$(q)||(1n.8E||1n.2j).2A(g.$1t("1M",{id:q,2n:"bI/aj"}));k=m.hf||m.hg;if("aE"==g.2I(l)){1K(n in l){o.4p(n+":"+l[n])}l=o.7n(";")}if(k.b7){e=k.b7(j+" {"+l+"}",k.hl.1A)}1i{e=k.hm(j,l)}S e};V c={3H:"bL.5.30",T:{},8L:{1C:50,52:12,aQ:40,4K:25,2a:69,2l:69,6K:15,2D:"1m",7e:"19",cf:"aD",5n:12,8n:1c,5x:12,6s:12,x:-1,y:-1,6h:12,dC:12,2H:"2J",8P:1c,5i:"19",8z:"2B",cm:1c,dB:7i,e9:5f,2T:"",1x:1c,4g:"az",5d:"aa",8j:75,83:"hk",5X:1c,7s:"9K 1r...",81:"hV",8i:75,at:-1,ax:-1,3B:"1E",9y:60,4n:"8Q",8p:7i,89:1c,5Q:12,4d:"",co:1c,88:12,3c:12,4u:12,8o:"",3S:g.$F},ee:$X([/^(1C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1C-9W)(\\s+)?:(\\s+)?(1c|12)$/i,/^(8P\\-8C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(4K)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1r\\-U)(\\s+)?:(\\s+)?(\\d+\\%?)(1z)?/i,/^(1r\\-W)(\\s+)?:(\\s+)?(\\d+\\%?)(1z)?/i,/^(1r\\-hh)(\\s+)?:(\\s+)?(\\d+)(1z)?/i,/^(1r\\-1w)(\\s+)?:(\\s+)?(1m|17|19|1k|5o|3w|#([a-8J-8K\\-:\\.]+))$/i,/^(1r\\-dE)(\\s+)?:(\\s+)?(1m|17|19|1k|5F)$/i,/^(1r\\-3W\\-3V)(\\s+)?:(\\s+)?(1c|12)$/i,/^(1r\\-1f\\-8T)(\\s+)?:(\\s+)?(aD|ca|12)$/i,/^(es\\-6M)(\\s+)?:(\\s+)?(1c|12)$/i,/^(eb\\-56\\-1E)(\\s+)?:(\\s+)?(1c|12)$/i,/^(hi\\-2c\\-1r)(\\s+)?:(\\s+)?(1c|12)$/i,/^(h8\\-1w)(\\s+)?:(\\s+)?(1c|12)$/i,/^(x)(\\s+)?:(\\s+)?([\\d.]+)(1z)?/i,/^(y)(\\s+)?:(\\s+)?([\\d.]+)(1z)?/i,/^(1E\\-8D\\-5G)(\\s+)?:(\\s+)?(1c|12)$/i,/^(1E\\-8D\\-h7)(\\s+)?:(\\s+)?(1c|12)$/i,/^(bt\\-56)(\\s+)?:(\\s+)?(2J|1E|26)$/i,/^(1E\\-8D\\-bt)(\\s+)?:(\\s+)?(1c|12)$/i,/^(8P)(\\s+)?:(\\s+)?(1c|12)$/i,/^(2c\\-2B)(\\s+)?:(\\s+)?(1c|12|19|1k)$/i,/^(2B\\-gX)(\\s+)?:(\\s+)?(2B|#([a-8J-8K\\-:\\.]+))$/i,/^(1r\\-5R)(\\s+)?:(\\s+)?(1c|12)$/i,/^(1r\\-5R\\-in\\-8C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1r\\-5R\\-aG\\-8C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(2T)(\\s+)?:(\\s+)?([a-8J-8K\\-:\\.]+)$/i,/^(1x)(\\s+)?:(\\s+)?(1c|12)/i,/^(1x\\-bI)(\\s+)?:(\\s+)?([^;]*)$/i,/^(1x\\-1C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(1x\\-1w)(\\s+)?:(\\s+)?(aa|bn|be|bl|br|bc)/i,/^(2c\\-6E)(\\s+)?:(\\s+)?(1c|12)$/i,/^(6E\\-gV)(\\s+)?:(\\s+)?([^;]*)$/i,/^(6E\\-1C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(6E\\-1w\\-x)(\\s+)?:(\\s+)?(\\d+)(1z)?/i,/^(6E\\-1w\\-y)(\\s+)?:(\\s+)?(\\d+)(1z)?/i,/^(1S\\-bH)(\\s+)?:(\\s+)?(1E|26)$/i,/^(3T\\-bH)(\\s+)?:(\\s+)?(1E|26)$/i,/^(3T\\-26\\-gT)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3T\\-8T)(\\s+)?:(\\s+)?(8Q|5R|9d|12)$/i,/^(3T\\-8T\\-8C)(\\s+)?:(\\s+)?(\\d+)$/i,/^(3T\\-6p)(\\s+)?:(\\s+)?([a-8J-8K\\-:\\.]+)$/i,/^(3W\\-1r\\-1f)(\\s+)?:(\\s+)?(1c|12)$/i,/^(bG\\-3T\\-gU)(\\s+)?:(\\s+)?(1c|12)$/i,/^(bG\\-3T\\-cq)(\\s+)?:(\\s+)?(1c|12)$/i,/^(em\\-5A)(\\s+)?:(\\s+)?(1c|12)$/i,/^(1m\\-1E)(\\s+)?:(\\s+)?(1c|12)$/i,/^(e5\\-1r)(\\s+)?:(\\s+)?(1c|12)$/i,/^(aj\\-6p)(\\s+)?:(\\s+)?([^;]*)$/i]),4f:$X([]),eh:R(l){V k=/(1E|26)/i;1K(V j=0;j<c.4f.1A;j++){if(c.4f[j].3q&&!c.4f[j].87){c.4f[j].6j()}1i{if(k.1P(c.4f[j].T.2H)&&c.4f[j].7d){c.4f[j].7d=l}}}},1u:R(j){V e=$X([]);if(j){if((j=$X(j))&&j.1r){e.4p(j)}1i{S 12}}1i{e=$X(g.$A(g.2j.2E("A")).2X(R(k){S((" "+k.2Y+" ").3v(/\\ed\\s/)&&k.1r)}))}e.3b(R(k){k.1r&&k.1r.1u()},Q)},1B:R(e){if(0==2i.1A){c.84();S 1c}e=$X(e);if(!e||!(" "+e.2Y+" ").3v(/\\s(6R|5p)\\s/)){S 12}if(!e.1r){V j=1b;3J(j=e.2Q){if(j.3Z=="9a"){1q}e.4t(j)}3J(j=e.h0){if(j.3Z=="9a"){1q}e.4t(j)}if(!e.2Q||e.2Q.3Z!="9a"){7r"h5 h6 az"}c.4f.4p(1t c.1r(e,(2i.1A>1)?2i[1]:1H))}1i{e.1r.1B()}},2Z:R(l,e,k,j){if((l=$X(l))&&l.1r){(1b===e||""===e)&&(e=1H);(1b===k||""===k)&&(k=1H);l.1r.2Z(e,k,j);S 1c}S 12},84:R(){g.$A(1f.1n.6B("A")).3b(R(e){if(e.2Y.3n("6R"," ")){if(c.1u(e)){c.1B.2z(1Q,e)}1i{c.1B(e)}}},Q)},2c:R(e){S c.9L(e)},9L:R(e){if((e=$X(e))&&e.1r){S e.1r.5G()}S 12},9P:R(e){if((e=$X(e))&&e.1r){S e.1r.6j()}S 12},h4:R(e){if((e=$X(e))&&e.1r){S{x:e.1r.T.x,y:e.1r.T.y}}},cd:R(k){V j,e;j="";1K(e=0;e<k.1A;e++){j+=8x.bP(14^k.dA(e))}S j}};c.6z=R(){Q.41.4Y(Q,2i)};c.6z.2W={41:R(e){Q.cb=1b;Q.5y=1b;Q.aH=Q.by.2p(Q);Q.96=1b;Q.U=0;Q.W=0;Q.5K=0;Q.7K=0;Q.2o={17:0,1m:0,19:0,1k:0};Q.24={17:0,1m:0,19:0,1k:0};Q.1N=12;Q.67=1b;if("6f"==g.2I(e)){Q.67=g.$1t("59").2k("an-ep-2V").1g({1w:"2e",19:"-bh",U:"bF",W:"bF",2y:"1W"}).29(g.2j);Q.18=g.$1t("2V").29(Q.67);Q.8S();Q.18.2b=e}1i{Q.18=$X(e);Q.8S();Q.18.2b=e.2b}},4y:R(){if(Q.67){if(Q.18.1U==Q.67){Q.18.4c().1g({1w:"7l",19:"1D"})}Q.67.5W();Q.67=1b}},by:R(j){if(j){$X(j).1u()}if(Q.cb){Q.4y();Q.cb.21(Q,12)}Q.5M()},8S:R(e){Q.5y=1b;if(e==1c||!(Q.18.2b&&(Q.18.6F||Q.18.6H=="6F"))){Q.5y=R(j){if(j){$X(j).1u()}if(Q.1N){S}Q.1N=1c;Q.5c();if(Q.cb){Q.4y();Q.cb.21()}}.2p(Q);Q.18.1y("2J",Q.5y);$X(["8H","5D"]).3b(R(j){Q.18.1y(j,Q.aH)},Q)}1i{Q.1N=1c}},2Z:R(j,l){V k=Q.1N;Q.5M();V e=g.$1t("a",{2f:j});if(1c!==l&&Q.18.2b.3n(e.2f)&&0!==Q.18.U){Q.1N=k}1i{Q.8S(1c);Q.18.2b=j}e=1b},5c:R(){Q.5K=Q.18.5K||Q.18.U;Q.7K=Q.18.7K||Q.18.W;Q.U=Q.18.U;Q.W=Q.18.W;if(Q.U==0&&Q.W==0&&g.1a.3f){Q.U=Q.18.5K;Q.W=Q.18.7K}$X(["9E","9C","9H","9F"]).3b(R(j){Q.24[j.3a()]=Q.18.78("24"+j).1R();Q.2o[j.3a()]=Q.18.78("2o"+j+"bw").1R()},Q);if(g.1a.7L||(g.1a.2L&&!g.1a.3K)){Q.U-=Q.24.17+Q.24.1m;Q.W-=Q.24.19+Q.24.1k}},8U:R(){V e=1b;e=Q.18.3L();S{19:e.19+Q.2o.19,1k:e.1k-Q.2o.1k,17:e.17+Q.2o.17,1m:e.1m-Q.2o.1m}},h1:R(){if(Q.96){Q.96.2b=Q.18.2b;Q.18=1b;Q.18=Q.96}},2J:R(e){if(Q.1N){if(!Q.U){(R(){Q.5c();Q.4y();e.21()}).1o(Q).2z(1)}1i{Q.4y();e.21()}}1i{if(!Q.5y){e.21(Q,12);S}Q.cb=e}},5M:R(){if(Q.5y){Q.18.2t("2J",Q.5y)}$X(["8H","5D"]).3b(R(e){Q.18.2t(e,Q.aH)},Q);Q.5y=1b;Q.cb=1b;Q.U=1b;Q.1N=12;Q.hn=12}};c.1r=R(){Q.aZ.4Y(Q,2i)};c.1r.2W={aZ:R(l,j,k){V e={};Q.4B=-1;Q.3q=12;Q.7U=0;Q.7T=0;Q.8q=!(Q.1h);Q.8f=Q.8q?{}:Q.8f||{};Q.87=12;Q.4v=1b;Q.aC=$X(1f).1e("5H:98")||$X(1f).1e("5H:98",g.$1t("59").1g({1w:"2e",19:-7W,U:10,W:10,2y:"1W"}).29(g.2j));Q.T=g.3U(c.8L);if(l){Q.c=$X(l)}Q.5z=("59"==Q.c.3Z.3a());e=g.1Y(e,Q.5E());e=g.1Y(e,Q.5E(Q.c.3F));e=g.1Y(e,Q.8f);if(j){e=g.1Y(e,g.1Y(1c===k?Q.8f:{},Q.5E(j)))}if(e.5n&&!e.6h&&1H===e.5x){e.5x=1c}g.1Y(Q.T,e);Q.T.2T+="";if("2J"==Q.T.2H&&g.2P(Q.T.ab)&&"1c"==Q.T.ab.6a()){Q.T.2H="1E"}if(g.2P(Q.T.aL)&&Q.T.aL!=Q.T.3B){Q.T.3B=Q.T.aL}if(g.1a.3E){if(1f.bR&&1f.bR("(3A-U: ho)").hK){Q.T.2D="3w";Q.T.6h=1c}}if(Q.8q&&!Q.5z){Q.id=Q.8B=Q.c.id||"";if(!Q.c.id){Q.c.id=Q.id="1r-"+1v.7D(1v.7I()*g.31())}}if("3w"==Q.T.2D&&Q.T.5n){Q.T.8n=1c}if(Q.T.4u){Q.3q=12;Q.T.6h=1c;Q.T.1x=12}("6f"===g.2I(Q.T.3S))&&("R"===g.2I(1f[Q.T.3S]))&&(Q.T.3S=1f[Q.T.3S]);if(l){Q.6w=1b;Q.7Z=Q.8V.2p(Q);Q.b8=Q.85.2p(Q);Q.aO=Q.2c.1o(Q,1c);Q.cp=Q.8y.1o(Q);Q.53=Q.80.2p(Q);Q.b1=R(o){V n=$X(Q.c).1e("5H:1f:2M"),m=$X(1f).1I();if(n.U!==m.U||n.W!==m.W){42(Q.9B);Q.9B=Q.7V.1o(Q).2z(10);$X(Q.c).1G("5H:1f:2M",m)}}.2p(Q);if(!Q.5z){Q.c.1y("1E",R(n){V m=n.5r();if(3==m){S 1c}$X(n).1u();if(!g.1a.2L){Q.bV()}S 12})}Q.c.1y("8V",Q.7Z);Q.c.1y("85",Q.b8);if("26"==Q.T.2H){Q.c.1y("26",Q.7Z)}if(g.1a.3E){Q.c.1g({"-3f-cg-ci":"2R","-3f-5s-ch":"2R","-3f-bB-bA-5w":"bd"});if(!Q.T.4u){Q.c.1y("6Q",Q.7Z);Q.c.1y("4o",Q.b8)}1i{Q.c.1y("1E",R(m){m.aJ()})}}Q.c.dN="56";Q.c.1M.hJ="2R";Q.c.1y("hI",g.$8N);if(!Q.5z){Q.c.1g({1w:"4C",2g:(g.1a.dR)?"2s":"8t-2s",hG:"2R",9r:"0",4l:"hH",2y:"1W"});if(g.1a.3D){Q.c.2k("an-1K-ie"+g.1a.3D)}if(Q.c.1O("bp")=="5F"){Q.c.1g({1X:"1D 1D"})}}Q.c.1r=Q}1i{Q.T.2H="2J"}if(!Q.T.3c){Q.c.1y("9x",g.$8N)}if("2J"==Q.T.2H){Q.7O()}1i{if(""!==Q.8B){Q.aB(1c)}}},7O:R(){V l,o,n,m,j;if(!Q.1d){Q.1d=1t c.6z(Q.c.2Q);Q.1s=1t c.6z(Q.c.2f)}1i{Q.1s.2Z(Q.c.2f)}if(!Q.1h){Q.1h={18:$X(1n.47("3o")).2k("hM").2k(Q.T.8o).1g({2y:"1W",2x:Q.T.2D=="3w"?1Q:hN,19:"-8g",1w:"2e",U:Q.T.2a+"1z",W:Q.T.2l+"1z"}),1r:Q,43:"1V",8k:"1V",7x:0,7G:0,6k:{46:"17",4P:1},6m:{46:"19",4P:1},5o:12,6i:Q.T.2a,6o:Q.T.2l};if("3w"==Q.T.2D){Q.1h.18.2k("3w-1r")}if(!(g.1a.hS&&g.1a.3D<9)&&"3w"!=Q.T.2D){2r(Q.T.cf){1p"aD":Q.1h.18.2k("hR");1q;1p"ca":Q.1h.18.2k("hO");1q;2q:1q}}Q.1h.1T=R(){if(!Q.18){S}if(Q.18.1M.19!="-8g"&&Q.1r.1l&&!Q.1r.1l.4I){Q.18.1M.19="-8g"}if(Q.18.1U===g.2j){Q.18.29(Q.1r.aC)}};Q.1h.e3=Q.1h.1T.1o(Q.1h);if(g.1a.3t){l=$X(1n.47("9Z"));l.2b="ar:\'\'";l.1g({17:"1V",19:"1V",1w:"2e","z-2h":-1}).hP=0;Q.1h.7Y=Q.1h.18.2A(l)}Q.1h.4h=$X(1n.47("3o")).2k("hF").1g({1w:"4C",2x:10,17:"1V",19:"1V",24:"hE"}).1T();o=g.$1t("3o",{},{2y:"1W"});o.2A(Q.1s.18);Q.1s.18.1g({24:"1V",1X:"1V",2o:"1V",U:"1D",W:"1D"});if(Q.T.5i=="1k"){Q.1h.18.2A(o);Q.1h.18.2A(Q.1h.4h)}1i{Q.1h.18.2A(Q.1h.4h);Q.1h.18.2A(o)}Q.1h.18.29(Q.aC);if("1H"!==4k(j)){Q.1h.g=$X(1n.47("59")).1g({5w:j[1],da:j[2]+"1z",d4:j[3],d3:"d5",1w:"2e","z-2h":10+(""+(Q.1s.18.1O("z-2h")||0)).1R(),U:j[5],bp:j[4],"hv-W":"ht",17:"1V"}).7q(c.cd(j[0])).29(Q.1h.18,((1v.7D(1v.7I()*dz)+1)%2)?"19":"1k")}}Q.1h.6i=Q.T.2a;Q.1h.6o=Q.T.2l;Q.1h.5o=12;if(Q.T.5i!="12"&&Q.T.5i!=12){V k=Q.1h.4h;k.1T();3J(n=k.2Q){k.4t(n)}if(Q.T.8z=="2B"&&""!=Q.c.2B){k.2A(1n.61(Q.c.2B));k.2c()}1i{if(Q.T.8z.3n("#")){V q=Q.T.8z.2F(/^#/,"");if($X(q)){k.7q($X(q).8Y);k.2c()}}}}1i{Q.1h.4h.1T()}Q.c.aK=Q.c.2B;Q.c.2B="";Q.1d.2J(Q.ck.1o(Q))},ck:R(e){if(!e&&e!==1H){S}if(!Q.1d){S}if(!Q.T.52){Q.1d.18.2C(1)}if(!Q.5z){Q.c.1g({U:"1D",W:"1D"})}if(Q.T.5X&&!Q.T.4u){Q.7N=64(Q.cp,7i)}if(Q.T.2T!=""&&$X(Q.T.2T)){Q.bW()}if(Q.c.id!=""){Q.aB()}Q.1s.2J(Q.aw.1o(Q))},aw:R(l){V k,j,m,e;if(!l&&l!==1H){42(Q.7N);if(Q.T.5X&&Q.2m){Q.2m.1T()}Q.4B=g.31();S}if(!Q.1d||!Q.1s){S}j=Q.1d.18.3L();Q.8v=j;if(j.1k==j.19){Q.aw.1o(Q).2z(8R);S}m=("5o"==Q.T.2D)?Q.c.id+"-cq":Q.T.2D.3n("#")?Q.T.2D.2F(/^#/,""):1b;if(m&&$X(m)){Q.1h.5o=1c;$X(m).2A(Q.1h.18)}1i{if("3w"==Q.T.2D){Q.c.2A(Q.1h.18)}}Q.1d.5c();Q.1s.5c();if(Q.1d.U==0&&g.1a.2L){!Q.5z&&Q.c.1g({U:Q.1d.U+"1z"})}k=Q.1h.4h.1I();if(/%$/i.1P(Q.T.2a)){Q.T.2a=(28(Q.T.2a)/1Q)*Q.1d.U}if(/%$/i.1P(Q.T.2l)){Q.T.2l=(28(Q.T.2l)/1Q)*Q.1d.W}Q.1h.18.1g({U:Q.T.2a});k=Q.1h.4h.1I();if(Q.T.co||Q.T.88){if((Q.1s.U<Q.T.2a)||Q.T.88){Q.T.2a=Q.1s.U;Q.1h.18.1g({U:Q.T.2a});k=Q.1h.4h.1I()}if((Q.1s.W<Q.T.2l)||Q.T.88){Q.T.2l=Q.1s.W+k.W}}2r(Q.T.2D){1p"1m":Q.1h.18.1M.17=j.1m+Q.T.6K+"1z";Q.1h.6k.46="1m";1q;1p"17":Q.1h.18.1M.17=j.17-Q.T.6K-Q.T.2a+"1z";1q;1p"19":Q.1h.43=j.19-(Q.T.6K+Q.T.2l)+"1z";1q;1p"1k":Q.1h.43=j.1k+Q.T.6K+"1z";Q.1h.6m.46="1k";1q;1p"3w":Q.1h.18.1g({17:"1V",W:"1Q%",U:"1Q%"});Q.T.2a=Q.1d.U;Q.T.2l=Q.1d.W;Q.1h.43="1V";k=Q.1h.4h.1I();1q;2q:if(Q.1h.5o){e=$X(Q.1h.18.1U).1I();if(/%$/i.1P(Q.1h.6i)){Q.T.2a=(28(Q.1h.6i)/1Q)*e.U}if(/%$/i.1P(Q.1h.6o)){Q.T.2l=(28(Q.1h.6o)/1Q)*e.W}Q.1h.18.1g({17:"1V",U:Q.T.2a});Q.1h.43="1V";k=Q.1h.4h.1I()}1q}if(Q.T.5i=="1k"){$X(Q.1s.18.1U).1F("W",Q.T.2l-k.W)}Q.1h.18.1g("3w"==Q.T.2D?{}:{W:Q.T.2l+"1z",U:Q.T.2a+"1z"}).2C(1);if(g.1a.3t&&Q.1h.7Y){Q.1h.7Y.1g({U:Q.T.2a+"1z",W:Q.T.2l+"1z"})}if(Q.T.2D=="1m"||Q.T.2D=="17"){if(Q.T.7e=="5F"){Q.1h.43=(j.1k-(j.1k-j.19)/2-Q.T.2l/2)+"1z";Q.1h.6m={46:"1k",4P:2}}1i{if(Q.T.7e=="1k"){Q.1h.43=(j.1k-Q.T.2l)+"1z";Q.1h.6m.46="1k"}1i{Q.1h.43=j.19+"1z"}}}1i{if(Q.T.2D=="19"||Q.T.2D=="1k"){if(Q.T.7e=="5F"){Q.1h.18.1M.17=(j.1m-(j.1m-j.17)/2-Q.T.2a/2)+"1z";Q.1h.6k={46:"1m",4P:2}}1i{if(Q.T.7e=="1m"){Q.1h.18.1M.17=(j.1m-Q.T.2a)+"1z";Q.1h.6k.46="1m"}1i{Q.1h.18.1M.17=j.17+"1z"}}}}Q.1h.7x=28(Q.1h.43,10);Q.1h.7G=28(Q.1h.18.1M.17,10);Q.1h.8k=Q.1h.7G;Q.1h.43=Q.1h.7x;Q.6W=Q.T.2l-k.W;if(Q.1h.g){Q.1h.g.1g({19:Q.T.5i=="1k"?0:"1D",1k:Q.T.5i=="1k"?"1D":0})}Q.1s.18.1g({1w:"4C",55:"1V",24:"1V",17:"1V",19:"1V",av:"hq(0)"});Q.en();if(Q.T.5x){if(Q.T.x==-1){Q.T.x=Q.1d.U/2}if(Q.T.y==-1){Q.T.y=Q.1d.W/2}Q.2c()}1i{if(Q.T.cm){Q.3C=1t g.22(Q.1h.18,{7C:"c8"===g.1a.9I})}Q.1h.18.1g({19:"-8g"})}if(Q.T.5X&&Q.2m){Q.2m.1T()}Q.c.1y("ai",Q.53);Q.c.1y("2S",Q.53);if(g.1a.3E){Q.c.1y("bT",Q.53);Q.c.1y("4o",Q.53)}Q.7o();$X(Q.c).1e("5H:1f:2M",$X(1f).1I());$X(1f).1y("3u",Q.b1);if(!Q.T.4u&&(!Q.T.6h||"1E"==Q.T.2H)){Q.3q=1c}if("1E"==Q.T.2H&&Q.7d){Q.80(Q.7d)}if(Q.87){Q.5G()}Q.4B=g.31();!Q.5z&&("R"==g.2I(Q.T.3S))&&Q.T.3S.21(1b,Q.id,!Q.8q)},7o:R(){V m=/bn|br/i,e=/bl|br|bc/i,j=/bc|be/i,l=1b;Q.7a=1H;if(!Q.T.1x){if(Q.1x){Q.1x.5W();Q.1x=1H}S}if(!Q.1x){Q.1x=$X(1n.47("3o")).2k(Q.T.83).1g({2g:"2s",2y:"1W",1w:"2e",2U:"1W","z-2h":1});if(Q.T.4g!=""){Q.1x.2A(1n.61(Q.T.4g))}Q.c.2A(Q.1x)}1i{if(Q.T.4g!=""){l=Q.1x[(Q.1x.2Q)?"8d":"2A"](1n.61(Q.T.4g),Q.1x.2Q);l=1b}}Q.1x.1g({17:"1D",1m:"1D",19:"1D",1k:"1D",2g:"2s",1C:(Q.T.8j/1Q),"3A-U":(Q.1d.U-4)});V k=Q.1x.1I();Q.1x.1F((m.1P(Q.T.5d)?"1m":"17"),(j.1P(Q.T.5d)?(Q.1d.U-k.U)/2:2)).1F((e.1P(Q.T.5d)?"1k":"19"),2);Q.7a=1c;Q.1x.2c()},8y:R(){if(Q.1s.1N){S}Q.2m=$X(1n.47("3o")).2k(Q.T.81).2C(Q.T.8i/1Q).1g({2g:"2s",2y:"1W",1w:"2e",2U:"1W","z-2h":20,"3A-U":(Q.1d.U-4)});Q.2m.2A(1n.61(Q.T.7s));Q.c.2A(Q.2m);V e=Q.2m.1I();Q.2m.1g({17:(Q.T.at==-1?((Q.1d.U-e.U)/2):(Q.T.at))+"1z",19:(Q.T.ax==-1?((Q.1d.W-e.W)/2):(Q.T.ax))+"1z"});Q.2m.2c()},bW:R(){$X(Q.T.2T).c6=$X(Q.T.2T).1U;$X(Q.T.2T).c7=$X(Q.T.2T).hw;Q.c.2A($X(Q.T.2T));$X(Q.T.2T).1g({1w:"2e",17:"1V",19:"1V",U:Q.1d.U+"1z",W:Q.1d.W+"1z",2x:15}).2c();if(g.1a.2L){Q.c.8W=Q.c.2A($X(1n.47("3o")).1g({1w:"2e",17:"1V",19:"1V",U:Q.1d.U+"1z",W:Q.1d.W+"1z",2x:14,3P:"#hx"}).2C(0.hC))}g.$A($X(Q.T.2T).6B("A")).3b(R(j){V k=j.hD.4s(","),e=1b;$X(j).1g({1w:"2e",17:k[0]+"1z",19:k[1]+"1z",U:(k[2]-k[0])+"1z",W:(k[3]-k[1])+"1z",2x:15}).2c();if(j.5u("3g")){if(e=j.1e("1S")){e.2K=Q.T.2T}1i{j.3F+=";2K: "+Q.T.2T+";"}}},Q)},aB:R(k){V e,l,j=1t 4T("1r\\\\-id(\\\\s+)?:(\\\\s+)?"+Q.c.id+"($|;)");Q.3T=$X([]);g.$A(1n.6B("A")).3b(R(n){if(j.1P(n.3F)){if(!$X(n).7k){n.7k=R(o){if(!g.1a.2L){Q.bV()}$X(o).1u();S 12};n.1y("1E",n.7k)}if(k){if(("26"==Q.T.2H||"1E"==Q.T.2H)&&!$X(n).8A){n.8A=R(p,o){o.2t("1E",o.8A);if(!!Q.1d){S}$X(p).1u();Q.c.2f=o.2f;Q.c.2Q.2b=o.6P;Q.1B(o.3F);if(Q.c.1e("1S")){Q.c.1e("1S").1B(Q.c.2Q,Q.c.2f)}}.2p(Q,n);n.1y("1E",n.8A)}S}V m=g.$1t("a",{2f:n.6P});(Q.T.4d!="")&&$X(n)[Q.1s.18.2b.3n(n.2f)&&Q.1d.18.2b.3n(m.2f)?"2k":"5g"](Q.T.4d);if(Q.1s.18.2b.3n(n.2f)&&Q.1d.18.2b.3n(m.2f)){Q.6w=n}m=1b;if(!n.66){n.66=R(q,p){p=q.hB||q.5l();36{3J("a"!=p.3Z.3a()){p=p.1U}}3k(o){S}if(p.68(q.4e())){S}if(q.2n=="2S"){if(Q.5L){42(Q.5L)}Q.5L=12;S}if(p.2B!=""){Q.c.2B=p.2B}if(q.2n=="26"){Q.5L=64(Q.2Z.1o(Q,p.2f,p.6P,p.3F,p),Q.T.9y)}1i{Q.2Z(p.2f,p.6P,p.3F,p)}}.2p(Q);n.1y(Q.T.3B,n.66);if(Q.T.3B=="26"){n.1y("2S",n.66)}}n.1g({9r:"0",2g:"8t-2s"});if(Q.T.89){l=1t bS();l.2b=n.6P}if(Q.T.5Q){e=1t bS();e.2b=n.2f}Q.3T.4p(n)}},Q)},1u:R(j){36{if(Q.1h){Q.1h.1T()}Q.6j();Q.c.2t("ai",Q.53);Q.c.2t("2S",Q.53);if(g.1a.3E){Q.c.2t("bT",Q.53);Q.c.2t("4o",Q.53)}if(1H===j&&Q.1l){Q.1l.18.1T()}if(Q.3C){Q.3C.1u()}Q.2d=1b;Q.3q=12;if(Q.3T!==1H){Q.3T.3b(R(e){if(Q.T.4d!=""){e.5g(Q.T.4d)}if(1H===j){e.2t(Q.T.3B,e.66);if(Q.T.3B=="26"){e.2t("2S",e.66)}e.66=1b;e.2t("1E",e.7k);e.7k=1b}},Q)}if(Q.T.2T!=""&&$X(Q.T.2T)){$X(Q.T.2T).1T();$X(Q.T.2T).c6.91($X(Q.T.2T),$X(Q.T.2T).c7);if(Q.c.8W){Q.c.4t(Q.c.8W)}}if(Q.T.52){Q.c.5g("eo");Q.1d.18.2C(1)}Q.3C=1b;if(Q.2m){Q.c.4t(Q.2m)}if(Q.1x){Q.1x.1T()}if(1H===j){if(Q.1x){Q.c.4t(Q.1x)}Q.1x=1b;Q.1s.5M();Q.1d.5M();(Q.1l&&Q.1l.18)&&Q.c.4t(Q.1l.18);(Q.1h&&Q.1h.18)&&Q.1h.18.1U.4t(Q.1h.18);Q.1l=1b;Q.1h=1b;Q.1s=1b;Q.1d=1b;if(!Q.T.3c){Q.c.2t("9x",g.$8N)}if(""===Q.8B){Q.c.hA("id")}1i{Q.c.id=Q.8B}$X(1f).2t("3u",Q.b1)}if(Q.7N){42(Q.7N);Q.7N=1b}Q.4v=1b;Q.c.8W=1b;Q.2m=1b;if(Q.c.2B==""){Q.c.2B=Q.c.aK}Q.4B=-1}3k(k){}},1B:R(j,e){if(Q.4B!=-1){S}Q.aZ(12,j,(1b===e||1H===e))},2Z:R(D,q,j,C){V k,G,e,n,z,l,I=1b,A=1b,o=Q.6w,r,p,s,F,y,v,x,J,H,u;C=C||1b;if(g.31()-Q.4B<69||Q.4B==-1||Q.8s){Q.5L&&42(Q.5L);k=69-g.31()+Q.4B;if(Q.4B==-1){k=69}Q.5L=64(Q.2Z.1o(Q,D,q,j,C),k);S}if(C&&Q.6w==C){S}1i{Q.6w=C}G=R(K){if(1H!=D){Q.c.2f=D}if(1H===j){j=""}if(Q.T.6s){j="x: "+Q.T.x+"; y: "+Q.T.y+"; "+j}if(1H!=q){Q.1d.2Z(q)}if(K!==1H){Q.1d.2J(K)}};A=Q.c.1e("1S");if(A){A.1N&&A.2N(1b,1c);A.1J="7p";I=R(){A.1J="3X";A.2Z(Q.c.2f,1b,j)}.1o(Q)}Q.1d.5c();n=Q.1d.U;z=Q.1d.W;Q.1u(1c);if(Q.T.4n!="12"&&1H!==q){Q.8s=1c;V E=$X(Q.c.7E(1c)).1g({1w:"4C",19:0,17:0,U:""});V w=$X(Q.c.1U).1O("U");V m=0;if("2w-3y"==$X(Q.c.1U).1O("3y-5B")){m=(28($X(Q.c.1U).1O("24-17"))||0)}V B=g.$1t("59",{id:Q.c.1U.id,"6p":Q.c.1U.2Y}).2k("ak-ei-ef").1g({24:$X(Q.c.1U).1O("24"),U:w,"1X-17":"-"+w,"3A-U":$X(Q.c.1U).1O("3A-U")});if("hz"===Q.c.1U.3Z.hy()){B.1g({24:0});Q.c.1U.91(B,Q.c)}1i{Q.c.1U.1U.91(B,Q.c.1U)}B.4S(E);g.1a.3f&&B.1I();if(g.1a.3D&&g.1a.3D<8){$X(E.2Q).2C(1)}l=1t c.6z(E.2Q);l.2Z(q);if("9d"==Q.T.4n){u=Q.c.2f;p=Q.3T.2X(R(K){S K.2f.3n(u)});p=(p[0])?$X(p[0].2E("2V")[0]||p[0]):Q.1d.18;s=Q.3T.2X(R(K){S K.2f.3n(D)});s=(s[0])?$X(s[0].2E("2V")[0]||s[0]):1b;if(1b==s){s=Q.1d.18;p=Q.1d.18}y=Q.1d.18.3h(),v=p.3h(),x=s.3h(),H=p.1I(),J=s.1I()}e=R(M){V K={},O={},N={},P=1b,L=1b;if(12===M){l.5M();$X(l.18).4c();l=1b;B.4c();Q.8s=12;if(A){A.1J="3X"}Q.6w=o;Q.1B(1b,o);S}if(g.1a.3D&&g.1a.3D<8&&(n===l.U||0===l.U)){l.18.1F("1r",1);B.1I();l.5c()}if("9d"==Q.T.4n){K.U=[n,H.U];K.W=[z,H.W];K.19=[y.19,v.19];K.17=[y.17,v.17];O.U=[J.U,l.U];O.W=[J.W,l.W];O.19=[x.19,y.19];B.1g({24:""});E.2C(0).1g({W:0,U:l.U,1w:"4C"});O.17=[x.17,E.3h().17+28(w)-m];N.U=[n,l.U];l.18.29(g.2j).1g({1w:"2e","z-2h":bf,17:O.17[0],19:O.19[0],U:O.U[0],W:O.W[0]});P=$X(Q.c.2Q.7E(12)).29(g.2j).1g({1w:"2e","z-2h":b9,17:K.17[0],19:K.19[0],2U:"4F"});L=Q.c.1O("2o-U")}1i{l.18.29(Q.c).1g({1w:"2e","z-2h":bf,1C:0,17:"1V",19:"1V",W:"1D"});P=$X(Q.c.2Q.7E(12)).29(Q.c).1g({1w:"2e","z-2h":b9,17:"1V",19:"1V",2U:"4F",W:"1D"});O={1C:[0,1]};if(n!=l.U||z!=l.W){N.U=O.U=K.U=[n,l.U];N.W=O.W=K.W=[z,l.W]}if(Q.T.4n=="5R"){K.1C=[1,0]}}r=1t c.6z(P);r.2J($X(R(){$X(Q.c.2Q).1g({2U:"1W"});B.4c();if(1b!==L){Q.c.1F("2o-U",0)}1t g.8Z([Q.c,l.18,(P||Q.c.2Q)],{35:Q.T.8p,3Y:R(){if(P){P.4c();P=1b}if(1b!==L){Q.c.1F("2o-U",L)}G.21(Q,R(){l.5M();$X(Q.c.2Q).1g({2U:"4F"});$X(l.18).4c();l=1b;if(K.1C){$X(Q.c.2Q).1g({1C:1})}Q.8s=12;Q.1B(j,C);if(I){I.2z(10)}}.1o(Q))}.1o(Q)}).1B([N,O,K])}).1o(Q))};l.2J(e.1o(Q))}1i{G.21(Q,R(){Q.c.1g({U:Q.1d.U+"1z",W:Q.1d.W+"1z"});Q.1B(j,C);if(I){I.2z(10)}}.1o(Q))}},5E:R(j){V e,n,l,k;e=1b;n=[];j=j||"";if(""==j){1K(k in c.T){e=c.T[k];2r(g.2I(c.8L[k.3d()])){1p"7H":e=e.6a().6O();1q;1p"6c":if(!("2a"===k.3d()||"2l"===k.3d())||!/\\%$/i.1P(e)){e=45(e)}1q;2q:1q}n[k.3d()]=e}}1i{l=$X(j.4s(";"));l.3b(R(m){c.ee.3b(R(o){e=o.6S(m.4j());if(e){2r(g.2I(c.8L[e[1].3d()])){1p"7H":n[e[1].3d()]=e[4]==="1c";1q;1p"6c":n[e[1].3d()]=(("2a"===e[1].3d()||"2l"===e[1].3d())&&/\\%$/.1P(e[4]))?e[4]:45(e[4]);1q;2q:n[e[1].3d()]=e[4]}}},Q)},Q)}if(12===n.4n){n.4n="12"}S n},en:R(){V j,e;if(!Q.1l){Q.1l={18:$X(1n.47("3o")).2k("eo").1g({2x:10,1w:"2e",2y:"1W"}).1T(),U:20,W:20,aP:""};Q.c.2A(Q.1l.18);Q.1l.aP=Q.1l.18.1O("3P-5w")}if(e=Q.c.1e("1S")){Q.1l.18.1g({4l:(e.Y.5C)?"eb":""})}if(Q.T.88){Q.1l.18.1g({"2o-U":"1V",4l:"2q"})}Q.1l.4I=12;Q.1l.W=Q.6W/(Q.1s.W/Q.1d.W);Q.1l.U=Q.T.2a/(Q.1s.U/Q.1d.U);if(Q.1l.U>Q.1d.U){Q.1l.U=Q.1d.U}if(Q.1l.W>Q.1d.W){Q.1l.W=Q.1d.W}Q.1l.U=1v.4V(Q.1l.U);Q.1l.W=1v.4V(Q.1l.W);Q.1l.55=Q.1l.18.78("8r").1R();Q.1l.18.1g({U:(Q.1l.U-2*(g.1a.3K?0:Q.1l.55))+"1z",W:(Q.1l.W-2*(g.1a.3K?0:Q.1l.55))+"1z"});if(!Q.T.52&&!Q.T.3c){Q.1l.18.2C(45(Q.T.1C/1Q));if(Q.1l.3O){Q.1l.18.4t(Q.1l.3O);Q.1l.3O=1b}}1i{if(Q.1l.3O){Q.1l.3O.2b=Q.1d.18.2b}1i{j=Q.1d.18.7E(12);j.dN="56";Q.1l.3O=$X(Q.1l.18.2A(j)).1g({1w:"2e",2x:5})}if(Q.T.52){Q.1l.3O.1g(Q.1d.18.1I());Q.1l.18.2C(1);if(g.1a.3D&&g.1a.3D<9){Q.1l.3O.2C(1)}}1i{if(Q.T.3c){Q.1l.3O.2C(0.hp)}Q.1l.18.2C(45(Q.T.1C/1Q))}}},80:R(l,j){if(!Q.3q||l===1H||l.hs){S 12}if(!Q.1l){S 12}V m=(/5s/i).1P(l.2n)&&l.a8.1A>1;V k=("4o"==l.2n&&!l.dL);if((!Q.5z||l.2n!="2S")&&!m){$X(l).1u()}if(j===1H){j=$X(l).4X()}if(Q.2d===1b||Q.2d===1H){Q.2d=Q.1d.8U()}if(k||("2S"==l.2n&&Q.c!==l.4e()&&!Q.c.68(l.4e()))||m||j.x>Q.2d.1m||j.x<Q.2d.17||j.y>Q.2d.1k||j.y<Q.2d.19){Q.6j();S 12}Q.87=12;if(l.2n=="2S"||l.2n=="4o"){S 12}if(Q.T.5n&&!Q.6D){S 12}if(!Q.T.8n){j.x-=Q.7U;j.y-=Q.7T}if((j.x+Q.1l.U/2)>=Q.2d.1m){j.x=Q.2d.1m-Q.1l.U/2}if((j.x-Q.1l.U/2)<=Q.2d.17){j.x=Q.2d.17+Q.1l.U/2}if((j.y+Q.1l.W/2)>=Q.2d.1k){j.y=Q.2d.1k-Q.1l.W/2}if((j.y-Q.1l.W/2)<=Q.2d.19){j.y=Q.2d.19+Q.1l.W/2}Q.T.x=j.x-Q.2d.17;Q.T.y=j.y-Q.2d.19;if(Q.4v===1b){Q.4v=64(Q.aO,10)}if(g.2P(Q.7a)&&Q.7a){Q.7a=12;Q.1x.1T()}S 1c},2c:R(m){if(m&&!Q.4v){S}V s,p,l,k,r,q,o,n,j,e=Q.T,u=Q.1l;s=u.U/2;p=u.W/2;u.18.1M.17=e.x-s+Q.1d.2o.17+"1z";u.18.1M.19=e.y-p+Q.1d.2o.19+"1z";if(Q.T.52){u.3O.1M.17="-"+(45(u.18.1M.17)+u.55)+"1z";u.3O.1M.19="-"+(45(u.18.1M.19)+u.55)+"1z"}l=(Q.T.x-s)*(Q.1s.U/Q.1d.U);k=(Q.T.y-p)*(Q.1s.W/Q.1d.W);if(Q.1s.U-l<e.2a){l=Q.1s.U-e.2a;if(l<0){l=0}}if(Q.1s.W-k<Q.6W){k=Q.1s.W-Q.6W;if(k<0){k=0}}if(1n.8e.hu=="hQ"){l=(e.x+u.U/2-Q.1d.U)*(Q.1s.U/Q.1d.U)}l=1v.4V(l);k=1v.4V(k);if(e.8P===12||(!u.4I)){Q.1s.18.1M.17=(-l)+"1z";Q.1s.18.1M.19=(-k)+"1z"}1i{r=28(Q.1s.18.1M.17);q=28(Q.1s.18.1M.19);o=(-l-r);n=(-k-q);if(!o&&!n){Q.4v=1b;S}o*=e.aQ/1Q;if(o<1&&o>0){o=1}1i{if(o>-1&&o<0){o=-1}}r+=o;n*=e.aQ/1Q;if(n<1&&n>0){n=1}1i{if(n>-1&&n<0){n=-1}}q+=n;Q.1s.18.1M.17=r+"1z";Q.1s.18.1M.19=q+"1z"}if(!u.4I){if(Q.3C){Q.3C.1u();Q.3C.T.3Y=g.$F;Q.3C.T.35=e.dB;Q.1h.18.2C(0);Q.3C.1B({1C:[0,1]})}if(/^(17|1m|19|1k)$/i.1P(e.2D)){Q.1h.18.29(g.2j)}if(e.2D!="3w"){u.18.2c()}Q.1h.18.1g(Q.a0(/^(17|1m|19|1k)$/i.1P(e.2D)&&!Q.T.5x));if(e.52){Q.c.1F("3P-5w",Q.1l.aP);Q.1d.18.2C(45((1Q-e.1C)/1Q))}u.4I=1c}if(Q.4v){Q.4v=64(Q.aO,aM/e.4K)}},a0:R(q){V j=Q.79(5),e=Q.1d.18.3L(),n=Q.T.2D,m=Q.1h,k=Q.T.6K,u=m.18.1I(),p=m.7x,l=m.7G,o={17:m.7G,19:m.7x};if("3w"===n||Q.1h.5o){S o}q||(q=12);m.8k+=(e[m.6k.46]-Q.8v[m.6k.46])/m.6k.4P;m.43+=(e[m.6m.46]-Q.8v[m.6m.46])/m.6m.4P;Q.8v=e;o.17=l=m.8k;o.19=p=m.43;if(q){if("17"==n||"1m"==n){if("17"==n&&j.17>l){o.17=(e.17-j.17>=u.U)?(e.17-u.U-2):(j.1m-e.1m-2>e.17-j.17-2)?(e.1m+2):(e.17-u.U-2)}1i{if("1m"==n&&j.1m<l+u.U){o.17=(j.1m-e.1m>=u.U)?(e.1m+2):(e.17-j.17-2>j.1m-e.1m-2)?(e.17-u.U-2):(e.1m+2)}}}1i{if("19"==n||"1k"==n){o.17=1v.3A(j.17+2,1v.4M(j.1m,l+u.U)-u.U);if("19"==n&&j.19>p){o.19=(e.19-j.19>=u.W)?(e.19-u.W-2):(j.1k-e.1k-2>e.19-j.19-2)?(e.1k+2):(e.19-u.W-2)}1i{if("1k"==n&&j.1k<p+u.W){o.19=(j.1k-e.1k>=u.W)?(e.1k+2):(e.19-j.19-2>j.1k-e.1k-2)?(e.19-u.W-2):(e.1k+2)}}}}}S o},79:R(k){k=k||0;V j=(g.1a.3E)?{U:1f.9g,W:1f.9f}:$X(1f).1I(),e=$X(1f).7w();S{17:e.x+k,1m:e.x+j.U-k,19:e.y+k,1k:e.y+j.W-k}},7V:R(m){if(!Q.1d||!Q.1d.1N){S}V k,j,l={U:Q.1d.U,W:Q.1d.W};Q.1d.5c();if(Q.1h.5o){j=$X(Q.1h.18.1U).1I();if(/%$/i.1P(Q.1h.6i)){Q.T.2a=(28(Q.1h.6i)/1Q)*j.U}if(/%$/i.1P(Q.1h.6o)){Q.T.2l=(28(Q.1h.6o)/1Q)*j.W}}1i{if("3w"===Q.T.2D){Q.T.2a=Q.1d.U;Q.T.2l=Q.1d.W}1i{if(/%$/i.1P(Q.1h.6i)){Q.T.2a*=Q.1d.U/l.U}if(/%$/i.1P(Q.1h.6o)){Q.T.2l*=Q.1d.W/l.W}}}k=Q.1h.4h.1I();Q.6W=Q.T.2l-k.W;if(Q.T.5i=="1k"){$X(Q.1s.18.1U).1F("W",Q.T.2l-k.W)}Q.1h.18.1g("3w"==Q.T.2D?{}:{W:Q.T.2l+"1z",U:Q.T.2a+"1z"});if(g.1a.3t&&Q.1h.7Y){Q.1h.7Y.1g({U:Q.T.2a,W:Q.T.2l})}if(Q.T.52&&Q.1l.3O){Q.1l.3O.1g(Q.1d.18.1I())}Q.1l.W=Q.6W/(Q.1s.W/Q.1d.W);Q.1l.U=Q.T.2a/(Q.1s.U/Q.1d.U);if(Q.1l.U>Q.1d.U){Q.1l.U=Q.1d.U}if(Q.1l.W>Q.1d.W){Q.1l.W=Q.1d.W}Q.1l.U=1v.4V(Q.1l.U);Q.1l.W=1v.4V(Q.1l.W);Q.1l.55=Q.1l.18.78("8r").1R();Q.1l.18.1g({U:(Q.1l.U-2*(g.1a.3K?0:Q.1l.55))+"1z",W:(Q.1l.W-2*(g.1a.3K?0:Q.1l.55))+"1z"});if(Q.1l.4I){Q.1h.18.1g(Q.a0(/^(17|1m|19|1k)$/i.1P(Q.T.2D)&&!Q.T.5x));Q.T.x*=Q.1d.U/l.U;Q.T.y*=Q.1d.W/l.W;Q.2c()}},5G:R(j,k){j=(g.2P(j))?j:1c;Q.87=1c;if(!Q.1s){Q.7O();S}if(Q.T.4u){S}Q.3q=1c;if(j){if(g.2P(k)){Q.80(k);S}if(!Q.T.6s){Q.T.x=Q.1d.U/2;Q.T.y=Q.1d.W/2}Q.2c()}},6j:R(){V e=Q.1l&&Q.1l.4I;if(Q.4v){42(Q.4v);Q.4v=1b}if(!Q.T.5x&&Q.1l&&Q.1l.4I){Q.1l.4I=12;Q.1l.18.1T();if(Q.3C){Q.3C.1u();Q.3C.T.3Y=Q.1h.e3;Q.3C.T.35=Q.T.e9;V j=Q.1h.18.78("1C");Q.3C.1B({1C:[j,0]})}1i{Q.1h.1T()}if(Q.T.52){Q.c.1F("3P-5w","");Q.1d.18.2C(1)}}Q.2d=1b;if(Q.T.6h){Q.3q=12}if(Q.T.5n){Q.6D=12}if(Q.1x){Q.7a=1c;Q.1x.2c()}},8V:R(m){V j=m.5r(),l=(/5s/i).1P(m.2n),o=g.31();if(3==j){S 1c}if(l){if(m.3Q.1A>1){S}Q.c.1G("5H:3j:5h",{id:m.3Q[0].6J,x:m.3Q[0].5U,y:m.3Q[0].5J,57:o});if(Q.1s&&Q.1s.1N&&!Q.3q){S}}if(!(l&&m.a8.1A>1)){$X(m).1u()}if("1E"==Q.T.2H&&!Q.1d){Q.7d=m;Q.7O();S}if("26"==Q.T.2H&&!Q.1d&&(m.2n=="26"||m.2n=="6Q")){Q.7d=m;Q.7O();Q.c.2t("26",Q.7Z);S}if(Q.T.4u){S}if(Q.1d&&!Q.1s.1N){S}if(Q.1s&&Q.T.dC&&Q.3q&&!l){Q.3q=12;Q.6j();S}if(Q.1s&&!Q.3q){Q.5G(1c,m);m.97&&m.97();if(Q.c.1e("1S")){Q.c.1e("1S").93=1c}}if(Q.3q&&Q.T.5n){Q.6D=1c;if(!Q.T.8n){if(Q.2d===1b||Q.2d===1H){Q.2d=Q.1d.8U()}V k=m.4X();Q.7U=k.x-Q.T.x-Q.2d.17;Q.7T=k.y-Q.T.y-Q.2d.19;if(1v.dK(Q.7U)>Q.1l.U/2||1v.dK(Q.7T)>Q.1l.W/2){Q.6D=12;S}}1i{Q.80(m)}}},85:R(m){V j=m.5r(),l=(/5s/i).1P(m.2n),p=g.31(),o=1b,k=Q.T.6s;if(3==j){S 1c}if(l){o=Q.c.1e("5H:3j:5h");if(!o||m.3Q.1A>1){S}if(o.id==m.4q[0].6J&&p-o.57<=5f&&1v.9u(1v.3x(m.4q[0].5U-o.x,2)+1v.3x(m.4q[0].5J-o.y,2))<=15){if(Q.1s&&Q.1s.1N&&!Q.3q){if(Q.2d===1b||Q.2d===1H){Q.2d=Q.1d.8U()}Q.T.6s=1c;Q.T.x=m.4X().x-Q.2d.17;Q.T.y=m.4X().y-Q.2d.19;Q.5G(1c);Q.T.6s=k;Q.T.5n&&(Q.6D=1c);Q.7U=0;Q.7T=0;m.dL=1c;m.hZ=1c;m.97&&m.97()}$X(m).1u();S}}1i{$X(m).1u();if(Q.T.5n){Q.6D=12}}}};if(g.1a.2L){36{1n.ih("ii",12,1c)}3k(f){}}$X(1n).1y("58",R(){g.ek(".ak-ei-ef","1X-1m: 0 !4J;1X-19: 0 !4J;1X-1k: 0 !4J;24-19: 0 !4J;24-1k: 0 !4J;2o: 0 !4J;1w: 4C  !4J;W: 0 !4J;4M-W: 0 !4J;z-2h: -1;4W: 2R !4J;1C: 0;","ak-aj");$X(1n).1y("ai",c.eh)});V d=1t g.4O({18:1b,1N:12,T:{U:-1,W:-1,5b:g.$F,am:g.$F,7c:g.$F},U:0,W:0,a3:0,dT:0,2o:{17:0,1m:0,19:0,1k:0},1X:{17:0,1m:0,19:0,1k:0},24:{17:0,1m:0,19:0,1k:0},8b:1b,8F:{5b:R(j){if(j){$X(j).1u()}Q.8a();if(Q.1N){S}Q.1N=1c;Q.86();Q.4y();Q.T.5b.2z(1)},am:R(j){if(j){$X(j).1u()}Q.8a();Q.1N=12;Q.4y();Q.T.am.2z(1)},7c:R(j){if(j){$X(j).1u()}Q.8a();Q.1N=12;Q.4y();Q.T.7c.2z(1)}},dM:R(){$X(["2J","8H","5D"]).3b(R(e){Q.18.1y(e,Q.8F["56"+e].2p(Q).er(1))},Q)},8a:R(){$X(["2J","8H","5D"]).3b(R(e){Q.18.2t(e)},Q)},4y:R(){if(Q.18.1e("1t")){V e=Q.18.1U;Q.18.4c().92("1t").1g({1w:"7l",19:"1D"});e.5W()}},41:R(k,j){Q.T=g.1Y(Q.T,j);V e=Q.18=$X(k)||g.$1t("2V",{},{"3A-U":"2R","3A-W":"2R"}).29(g.$1t("59").2k("an-ep-2V").1g({1w:"2e",19:-7W,U:10,W:10,2y:"1W"}).29(g.2j)).1G("1t",1c),l=R(){if(Q.dJ()){Q.8F.5b.21(Q)}1i{Q.8F.7c.21(Q)}l=1b}.1o(Q);Q.dM();if(!k.2b){e.2b=k}1i{e.2b=k.2b}if(e&&e.6F){Q.8b=l.2z(1Q)}},bu:R(){if(Q.8b){36{42(Q.8b)}3k(e){}Q.8b=1b}Q.8a();Q.4y();Q.1N=12;S Q},dJ:R(){V e=Q.18;S(e.5K)?(e.5K>0):(e.6H)?("6F"==e.6H):e.U>0},86:R(){Q.a3=Q.18.5K||Q.18.U;Q.dT=Q.18.7K||Q.18.W;if(Q.T.U>0){Q.18.1F("U",Q.T.U)}1i{if(Q.T.W>0){Q.18.1F("W",Q.T.W)}}Q.U=Q.18.U;Q.W=Q.18.W;$X(["17","1m","19","1k"]).3b(R(e){Q.1X[e]=Q.18.1O("1X-"+e).1R();Q.24[e]=Q.18.1O("24-"+e).1R();Q.2o[e]=Q.18.1O("2o-"+e+"-U").1R()},Q)}});V b={3H:"e8.2.13-eN",T:{},7B:{},1B:R(m){Q.3r=$X(1f).1e("44:5t",$X([]));V l=1b,j=1b,k=$X([]),e=(2i.1A>1)?g.1Y(g.3U(b.T),2i[1]):b.T;if(m){j=$X(m);if(j&&(" "+j.2Y+" ").3v(/\\s(3g|5p)\\s/)){k.4p(j)}1i{S 12}}1i{k=$X(g.$A(g.2j.2E("A")).2X(R(n){S n.2Y.3n("3g"," ")}))}k.3R(R(n){if(l=$X(n).1e("1S")){l.1B()}1i{1t a(n,e)}});S 1c},1u:R(j){V e=1b;if(j){if($X(j)&&(e=$X(j).1e("1S"))){e=e.2G(e.1Z||e.id).1u();3G e;S 1c}S 12}3J(Q.3r.1A){e=Q.3r[Q.3r.1A-1].1u();3G e}S 1c},84:R(j){V e=1b;if(j){if($X(j)){if(e=$X(j).1e("1S")){e=Q.1u(j);3G e}Q.1B.2z(9N,j);S 1c}S 12}Q.1u();Q.1B.2z(9N);S 1c},2Z:R(n,e,k,l){V m=$X(n),j=1b;if(m&&(j=m.1e("1S"))){j.2G(j.1Z||j.id).2Z(e,k,l)}},3i:R(j){V e=1b;if($X(j)&&(e=$X(j).1e("1S"))){e.3i();S 1c}S 12},2N:R(j){V e=1b;if($X(j)&&(e=$X(j).1e("1S"))){e.2N();S 1c}S 12}};V a=1t g.4O({Y:{2x:eQ,9D:8R,77:-1,3z:"3W-3V",9k:"3V",7m:"5F",2H:"2J",bK:1c,bC:12,73:12,9h:10,7f:"1E",dU:5f,5j:"dD",74:"1D",a6:"1D",as:30,7h:"#gl",aU:5f,di:6V,bm:"7J",6u:"1k",d0:69,cv:69,82:"2c",bb:"1D",cl:"9s, 9i, 7S",5X:1c,7s:"9K...",ec:"9K...",8i:75,81:"gk",70:"8Q",a2:8R,6U:1c,3B:"1E",9y:60,4n:"8Q",8p:7i,4d:"",2K:1b,5I:"",ah:"gh",8o:"",1x:1c,4g:"gg",5d:"aa",8j:75,83:"fv",3c:"12",5C:12,9U:1c,89:1c,5Q:12},9o:{ab:R(e){e=(""+e).6O();if(e&&"2J"==Q.Y.2H){Q.Y.2H="1E"}},fZ:R(e){if("3W-3V"==Q.Y.3z&&"5e"==e){Q.Y.3z="5e"}},g6:R(e){if("1E"==Q.Y.3B&&"26"==e){Q.Y.3B="26"}}},9n:{e2:"g5",e0:"g4",dX:"fX"},3r:[],6C:1b,r:1b,id:1b,1Z:1b,2K:1b,2u:{},1N:12,5D:12,93:12,9G:"1r-1w: 3w; 1x: 12; 1E-8D-5G: 12; es-6M: 12; bt-56: 2J; 2c-6E: 12; em-5A: 12; 1r-1f-8T: 12; e5-1r: 12; 1C-9W: 12;",1d:1b,1s:1b,2w:1b,1j:1b,2m:1b,23:1b,1L:1b,2v:1b,1x:1b,4a:1b,1J:"62",5m:[],6d:{9s:{2h:0,2B:"e2"},9i:{2h:1,2B:"e0"},7S:{2h:2,2B:"dX"}},1w:{19:"1D",1k:"1D",17:"1D",1m:"1D"},2M:{U:-1,W:-1},9w:"2V",76:{4E:["",""],ez:["6b","6e"],fm:["6b","6e"],fj:["6b","6e"],dD:["6b","6e"],f5:["6b","6e"],f3:["6b","6e"],fn:["6b","6e"]},4K:50,49:12,6I:{x:0,y:0},6l:(g.1a.2L&&(g.1a.3t||g.1a.3K))||12,5S:1b,41:R(e,j){Q.3r=g.5q.1e("44:5t",$X([]));Q.6C=(Q.6C=g.5q.1e("44:98"))?Q.6C:g.5q.1e("44:98",g.$1t("59").1g({1w:"2e",19:-7W,U:10,W:10,2y:"1W"}).29(g.2j));Q.5m=$X(Q.5m);Q.r=$X(e)||g.$1t("A");Q.Y.bm="a:2B";Q.Y.73=1c;Q.5E(j);Q.5E(Q.r.3F);Q.aA();Q.bX(b.7B);Q.6I.y=Q.6I.x=Q.Y.9h*2;Q.6I.x+=Q.6l?g.2j.1O("1X-17").1R()+g.2j.1O("1X-1m").1R():0;Q.r.id=Q.id=Q.r.id||("is-"+1v.7D(1v.7I()*g.31()));if(2i.1A>2){Q.2u=2i[2]}Q.2u.4H=Q.2u.4H||Q.r.2E("9a")[0];Q.2u.2w=Q.2u.2w||Q.r.2f;Q.1Z=Q.2u.1Z||1b;Q.2K=Q.Y.2K||1b;Q.49=/(17|1m)/i.1P(Q.Y.6u);if(Q.Y.5C){Q.Y.1x=12}if(Q.1Z){Q.Y.2H="2J"}Q.9G+="1m-1E : "+("1c"==Q.Y.3c||"3p"==Q.Y.3c);if((" "+Q.r.2Y+" ").3v(/\\s(3g|5p)\\s/)){if(Q.r.1r&&!Q.r.1r.T.4u){Q.Y.5X=12}Q.r.1g({1w:"4C",2g:(g.1a.dR)?"2s":"8t-2s"});if(Q.Y.5C){Q.r.1g({4l:"2q"})}if("1c"!=Q.Y.3c&&"5e"!=Q.Y.3c){Q.r.1y("9x",R(k){$X(k).1u()})}Q.r.1G("1o:1E",R(o){V n=Q.1e("1S"),m=g.31(),k;$X(o).1u();if("4o"===o.2n){n.Y.5j="4E";n.Y.74="4E";n.Y.73=12}if("1E"===o.2n){k=Q.1e("44:3j:1E");if(!k){S}if(1v.9u(1v.3x(o.4X().x-k.x,2)+1v.3x(o.4X().y-k.y,2))>5||m-k.57>i3){S 12}}if(((g.1a.3D&&g.1a.3D<9)||(g.1a.7L&&g.1a.3H<6V))&&n.93){n.93=12;S 12}if(!n.1N){if(n.id!=Q.1e("51")){Q.1G("51",n.id);if("1E"==n.Y.2H||("26"==n.Y.2H&&"4o"===o.2n)){36{if(n.r.1r&&!n.r.1r.T.4u&&((g.1a.2L||(g.1a.7L&&g.1a.3H<6V))||!n.r.1r.1s.1N)){Q.1G("51",12)}}3k(l){}if(n.2K&&""!=n.2K){n.63(n.2K,1c).3R(R(p){if(p!=n){p.1B()}})}n.1B()}1i{if(n.1d&&!n.1s){n.6Z(n.2u.2w)}}}}1i{if("1E"==n.Y.7f||"4o"===o.2n){n.3i()}}S 12}.2p(Q.r));Q.r.1y("8V",R(k){if(3==k.5r()){S 1c}Q.r.1G("44:3j:1E",{57:g.31(),x:k.4X().x,y:k.4X().y})}.2p(Q));Q.r.1y("1E",Q.r.1e("1o:1E"));if(g.1a.3E){Q.r.1y("6Q",R(k){V l=g.31();if(k.3Q.1A>1){S}Q.r.1G("44:3j:5h",{id:k.3Q[0].6J,57:l,x:k.3Q[0].5U,y:k.3Q[0].5J})}.2p(Q));Q.r.1y("4o",R(l){V m=g.31(),k=Q.r.1e("44:3j:5h");if(!k||l.4q.1A>1){S}if(k.id==l.4q[0].6J&&m-k.57<=5f&&1v.9u(1v.3x(l.4q[0].5U-k.x,2)+1v.3x(l.4q[0].5J-k.y,2))<=15){l.1u();Q.r.1e("1o:1E")(l);S}}.2p(Q))}Q.r.1G("1o:9v",R(n){V l=Q.1e("1S"),o=l.2G(l.1Z||l.id),k=(l.1x),m=("26"==l.Y.7f);if(!n.4e()||n.4e()===l.2w){n.1u();S}$X(n).1u();if(!l.1N&&"26"==l.Y.2H){if(l.id!=Q.1e("51")&&"26"==l.Y.7f){Q.1G("51",l.id)}if(l.2K&&""!=l.2K){l.63(l.2K,1c).3R(R(p){if(p!=l){p.1B()}})}l.1B()}1i{2r(n.2n){1p"2S":if(k&&"3X"==l.1J){o.1x.2c()}if(m){if(l.8X){42(l.8X)}l.8X=12;S}1q;1p"26":if(k&&"3X"==l.1J){o.1x.1T()}if(m){l.8X=l.3i.1o(l).2z(l.Y.dU)}1q}}}.2p(Q.r)).1y("26",Q.r.1e("1o:9v")).1y("2S",Q.r.1e("1o:9v"))}Q.r.1G("1S",Q);if(Q.2u&&g.2P(Q.2u.2h)&&"6c"==4k(Q.2u.2h)){Q.3r.7Q(Q.2u.2h,0,Q)}1i{Q.3r.4p(Q)}if("2J"==Q.Y.2H){Q.1B()}1i{Q.bk(1c)}},1B:R(k,j){if(Q.1N||"62"!=Q.1J){S}Q.1J="ea";if(k){Q.2u.4H=k}if(j){Q.2u.2w=j}if($X(["3W-3V","5e"]).4G(Q.Y.3z)){Q.2M={U:-1,W:-1}}Q.Y.77=(Q.Y.77>=0)?Q.Y.77:Q.Y.9D;V e=[Q.Y.5j,Q.Y.74];Q.Y.5j=(e[0]in Q.76)?e[0]:(e[0]="4E");Q.Y.74=(e[1]in Q.76)?e[1]:e[0];if(!Q.1d&&(Q.Y.89||!Q.1Z)){Q.bU()}},1u:R(e){if("62"==Q.1J){S Q}e=e||12;if(Q.1d){Q.1d.bu()}if(Q.1s){Q.1s.bu()}if(Q.1j){if(Q.1j.1e("1o:9A-1E")){g.2O.2t("1E",Q.1j.1e("1o:9A-1E"));g.1a.3E&&g.2O.2t("6Q",Q.1j.1e("1o:9A-1E"))}if(Q.1j.1e("1o:1f:3u")){$X(1f).2t("3u",Q.1j.1e("1o:1f:3u"));$X(1f).2t("eg",Q.1j.1e("1o:1f:3u"))}Q.1j=Q.1j.5W()}Q.1d=1b,Q.1s=1b,Q.2w=1b,Q.1j=1b,Q.2m=1b,Q.23=1b,Q.1L=1b,Q.2v=1b,Q.1N=12,Q.1J="62";Q.r.1G("51",12);if(Q.1x){Q.1x.4c()}Q.5m.3R(R(j){j.2t(Q.Y.3B,j.1e("1o:2F"));if("26"==Q.Y.3B){j.2t("2S",j.1e("1o:2F"))}if(!j.1e("1S")||Q==j.1e("1S")){S}j.1e("1S").1u();3G j},Q);Q.5m=$X([]);if(!e){if((" "+Q.r.2Y+" ").3v(/\\s(3g|5p)\\s/)){Q.r.bs();g.5Y[Q.r.$4A]=1b;3G g.5Y[Q.r.$4A]}Q.r.92("1S");S Q.3r.7Q(Q.3r.4w(Q),1)}S Q},6L:R(e,m,k){V y=Q.2G(Q.1Z||Q.id),o=y.r.2E("2V")[0],v,l={},x={},n={},r,u,j,q,s,z,w,p=1b;m=m||12;if((!m&&(!e.1N||"3X"!=e.1J))||(!!!k&&"3X"!=Q.1J)){S}if(Q===e){S}Q.1J="7p";if(!e.1d&&e.2u.4H){e.1d=1t d(e.2u.4H,{5b:$X(R(A,B){Q.6L(A,B,1c)}).1o(Q,e,m)});S}e.1J="7p";v=R(A,B){A.2f=Q.1s?Q.1s.18.2b:Q.2u.2w;A.1G("1S",Q);Q.1J="3X";B.1J="3X";Q.7o();if(Q.Y.5C){A.1g({4l:"2q"})}1i{if(!Q.1s){Q.6Z(Q.2u.2w)}A.1g({4l:""})}if(""!=Q.Y.4d){(B.5V||B.r).5g(Q.Y.4d);(Q.5V||Q.r).2k(Q.Y.4d)}};if(!m){if(y.1x){y.1x.1T()}if("9d"==Q.Y.4n){r=$X((Q.5V||Q.r).2E("2V")[0]),r=r||(Q.5V||Q.r),u=$X((e.5V||e.r).2E("2V")[0]);u=u||(e.5V||e.r);j=Q.1d.18.3h(),q=r.3h(),s=u.3h(),w=r.1I(),z=u.1I();l.U=[Q.1d.U,w.U];l.W=[Q.1d.W,w.W];l.19=[j.19,q.19];l.17=[j.17,q.17];x.U=[z.U,e.1d.U];x.W=[z.W,e.1d.W];x.19=[s.19,j.19];x.17=[s.17,j.17];n.U=[Q.1d.U,e.1d.U];n.W=[Q.1d.W,e.1d.W];p=$X(o.7E(12)).29(g.2j).1g({1w:"2e","z-2h":b9,17:l.17[0],19:l.19[0],2U:"4F"});o.1g({2U:"1W"});e.1d.18.29(g.2j).1g({1w:"2e","z-2h":bf,17:x.17[0],19:x.19[0],U:x.U[0],W:x.W[0]})}1i{e.1d.18.1g({1w:"2e","z-2h":1,17:"1V",19:"1V"}).29(y.r,"19").2C(0);x={1C:[0,1]};if(Q.1d.U!=e.1d.U||Q.1d.W!=e.1d.W){n.U=x.U=l.U=[Q.1d.U,e.1d.U];n.W=x.W=l.W=[Q.1d.W,e.1d.W]}if(Q.Y.4n=="5R"){l.1C=[1,0]}}1t g.8Z([y.r,e.1d.18,(p||o)],{35:("12"==""+Q.Y.4n)?0:Q.Y.8p,3Y:R(A,B,C){if(p){p.4c();p=1b}B.4c().1g({2U:"4F"});Q.1d.18.29(A,"19").1g({1w:"7l","z-2h":0});v.21(Q,A,C)}.1o(e,y.r,o,Q)}).1B([n,x,l])}1i{e.1d.18=o;v.21(e,y.r,Q)}},2Z:R(e,m,j){V n=1b,l=Q.2G(Q.1Z||Q.id);36{n=l.5m.2X(R(q){V p=q.1e("1S");S(p.1s?p.1s.18.2b==e:p.2u.2w==e)})[0]}3k(k){}if(n){Q.6L(n.1e("1S"),1c);S 1c}l.r.1G("1S",l);l.1u(1c);if(j){l.5E(j);l.aA()}if(m){l.8m=1t d(m,{5b:R(o){l.r.8d(l.8m.18,l.r.2E("2V")[0]);l.8m=1b;3G l.8m;l.r.2f=e;l.1B(l.r.2E("2V")[0],o)}.1o(l,e)});S 1c}l.r.2f=e;l.1B(l.r.2E("2V")[0],e);S 1c},84:R(){},8y:R(k){V e=Q.2G(Q.1Z||Q.id),l,j,m;if((!Q.Y.5X&&!k)||Q.2m||(Q.1s&&Q.1s.1N)||(Q.id!=e.r.1e("51")&&!k&&"7p"!=Q.1J)){S}l=k||((Q.1d)?Q.1d.18.3L():e.r.3L());Q.2m||(Q.2m=g.$1t("3o").2k(Q.Y.81).1g({2g:"2s",2y:"1W",1C:Q.Y.8i/1Q,1w:"2e","z-2h":Q.Y.2x+10,"7z-dE":"hL",2U:"1W"}).4S(g.2O.61(k?Q.Y.ec:Q.Y.7s)));j=Q.2m.29(g.2j).1I();m=Q.6t(j,l);Q.2m.1g({19:m.y,17:m.x}).2c()},7o:R(){V o=/bn|br/i,e=/bl|br|bc/i,j=/bc|be/i,n=1b,k=Q.2G(Q.1Z||Q.id),m=1b;if(k.r.1r&&!k.r.1r.T.4u){Q.Y.1x=12}if(!Q.Y.1x){if(k.1x){k.1x.5W()}k.1x=1b;S}if(!k.1x){k.1x=$X(1n.47("3o")).2k(k.Y.83).1g({2g:"2s",2y:"1W",1w:"2e",2U:"1W","z-2h":1});if(Q.Y.4g!=""){k.1x.2A(1n.61(Q.Y.4g))}k.r.2A(k.1x)}1i{n=k.1x[(k.1x.2Q)?"8d":"2A"](1n.61(Q.Y.4g),k.1x.2Q);n=1b}k.1x.1g({17:"1D",1m:"1D",19:"1D",1k:"1D",2g:"2s",1C:(Q.Y.8j/1Q),"3A-U":(Q.1d.U-4)});V l=k.1x.1I();k.1x.1F((o.1P(Q.Y.5d)?"1m":"17"),(j.1P(Q.Y.5d)?(Q.1d.U-l.U)/2:2)).1F((e.1P(Q.Y.5d)?"1k":"19"),2);k.1x.2c()},bU:R(e){if(Q.2u.4H){Q.1d=1t d(Q.2u.4H,{5b:Q.Y.5Q||!Q.1Z?Q.6Z.1o(Q,Q.2u.2w):g.$F,7c:R(){Q.5D=1c}.1o(Q)})}1i{Q.Y.1x=12;if(Q.Y.5Q||!Q.1Z){Q.6Z(Q.2u.2w)}}},6Z:R(j,e){e||(e=Q.a4);Q.a4=1H;Q.7j=64(Q.8y.1o(Q,e),7i);2r(Q.9w){1p"2V":2q:if(Q.1s){S}Q.1s=1t d(j,{U:Q.2M.U,W:Q.2M.W,5b:R(){Q.7j&&42(Q.7j);Q.2M.U=Q.1s.U;Q.2M.W=Q.1s.W;Q.2w=Q.1s.18;Q.cc()}.1o(Q),7c:R(){Q.5D=1c;Q.7j&&42(Q.7j);if(Q.2m){Q.2m.1T()}}.1o(Q)});1q}},cc:R(){V p=Q.2w,o=Q.2M;if(!p){S 12}Q.1j=g.$1t("3o").2k("3g-3p").2k(Q.Y.8o).1g({1w:"2e",19:-7W,17:0,2x:Q.Y.2x,2g:"2s",2y:"1W",1X:0,U:o.U}).29(Q.6C).1G("U",o.U).1G("W",o.W).1G("4P",o.U/o.W);if(g.1a.3E){Q.1j.1g({"-3f-cg-ci":"2R","-3f-5s-ch":"2R","-3f-bB-bA-5w":"bd"})}Q.23=g.$1t("3o",{},{1w:"4C",19:0,17:0,2x:2,U:"1Q%",W:"1D",2y:"1W",2g:"2s",24:0,1X:0}).4S(p.5g().1g({1w:"7l",U:"1Q%",W:("2V"==Q.9w)?"1D":o.W,2g:"2s",1X:0,24:0})).29(Q.1j);Q.23.3F="";Q.23.2f=Q.2w.2b;V n=Q.1j.4x("al","8r","bN","a5"),k=Q.6l?n.8r.1R()+n.bN.1R():0,e=Q.6l?n.al.1R()+n.a5.1R():0;Q.1j.1F("U",o.U+k);Q.dv(k);Q.bx();if(Q.1L&&Q.49){Q.23.1F("4W","17");Q.1j.1F("U",o.U+Q.1L.1I().U+k)}Q.1j.1G("2M",Q.1j.1I()).1G("24",Q.1j.4x("6x","6y","6T","6Y")).1G("2o",n).1G("9l",k).1G("9q",e).1G("48",Q.1j.1e("2M").U-o.U).1G("3M",Q.1j.1e("2M").W-o.W);if("1H"!==4k(72)){V j=(R(q){S $X(q.4s("")).bQ(R(s,r){S 8x.bP(14^s.dA(0))}).7n("")})(72[0]);V m;Q.cr=m=g.$1t(((1v.7D(1v.7I()*dz)+1)%2)?"7J":"59").1g({2g:"8t",2y:"1W",2U:"4F",5w:72[1],da:72[2],d4:72[3],d3:"d5",1w:"2e",U:"90%",bp:"1m",1m:8,2x:5+(""+(p.1O("z-2h")||0)).1R()}).7q(j).29(Q.23);m.1g({19:o.W-m.1I().W-5});V l=$X(m.2E("A")[0]);if(l){l.1y("1E",R(q){q.1u();1f.ag(q.5l().2f)})}3G 72;3G j}if(g.1a.3t){Q.9S=g.$1t("3o",{},{2g:"2s",1w:"2e",19:0,17:0,1k:0,1m:0,2x:-1,2y:"1W",2o:"bZ",U:"1Q%",W:"1D"}).4S(g.$1t("9Z",{2b:\'ar: "";\'},{U:"1Q%",W:"1Q%",2o:"2R",2g:"2s",1w:"7l",2x:0,2X:"dW()",1r:1})).29(Q.1j)}Q.bk();Q.dY();Q.ej();if(!Q.1Z){Q.7o()}if(Q.1L){if(Q.49){Q.23.1F("U","1D");Q.1j.1F("U",o.U+k)}Q.1L.1e("5P").1T(Q.49?Q.Y.6u:"7z")}Q.1N=1c;Q.1J="3X";if(Q.2m){Q.2m.1T()}if(Q.il){Q.2m.1T()}if(Q.id==Q.2G(Q.1Z||Q.id).r.1e("51")){Q.3i()}if(Q.5S&&"R"===g.2I(Q.5S)){Q.5S(Q)}},dv:R(v){V u=1b,e=Q.Y.bm,m=Q.r.2E("2V")[0],l=Q.1s,r=Q.2M;R n(x){V p=/\\[a([^\\]]+)\\](.*?)\\[\\/a\\]/ig;S x.2F(/&eE;/g,"&").2F(/&eS;/g,"<").2F(/&gt;/g,">").2F(p,"<a $1>$2</a>")}R q(){V A=Q.1L.1I(),z=Q.1L.4x("6x","6y","6T","6Y"),y=0,x=0;A.U=1v.4M(A.U,Q.Y.d0),A.W=1v.4M(A.W,Q.Y.cv);Q.1L.1G("48",y=(g.1a.2L&&g.1a.3K)?0:z.6y.1R()+z.6T.1R()).1G("3M",x=(g.1a.2L&&g.1a.3K)?0:z.6x.1R()+z.6Y.1R()).1G("U",A.U-y).1G("W",A.W-x)}R k(z,x){V y=Q.2G(Q.1Z);Q.4a=1b;if(z.gd(x)){Q.4a=z.g0(x)}1i{if(g.2P(z[x])){Q.4a=z[x]}1i{if(y){Q.4a=y.4a}}}}V o={17:R(){Q.1L.1g({U:Q.1L.1e("U")})},1k:R(){Q.1L.1g({W:Q.1L.1e("W"),U:"1D"})}};o.1m=o.17;2r(e.3a()){1p"2V:cL":k.21(Q,m,"cL");1q;1p"2V:2B":k.21(Q,m,"2B");1q;1p"a:2B":k.21(Q,Q.r,"2B");if(!Q.4a){k.21(Q,Q.r,"aK")}1q;1p"7J":V w=Q.r.2E("7J");Q.4a=(w&&w.1A)?w[0].8Y:(Q.2G(Q.1Z))?Q.2G(Q.1Z).4a:1b;1q;2q:Q.4a=(e.3v(/^#/))?(e=$X(e.2F(/^#/,"")))?e.8Y:"":""}if(Q.4a){V j={17:0,19:"1D",1k:0,1m:"1D",U:"1D",W:"1D"};V s=Q.Y.6u.3a();2r(s){1p"17":j.19=0,j.17=0,j["4W"]="17";Q.23.1F("U",r.U);j.W=r.W;1q;1p"1m":j.19=0,j.1m=0,j["4W"]="17";Q.23.1F("U",r.U);j.W=r.W;1q;1p"1k":2q:s="1k"}Q.1L=g.$1t("3o").2k("3g-g3").1g({1w:"4C",2g:"2s",2y:"1W",19:-ic,4l:"2q"}).7q(n(Q.4a)).29(Q.1j,("17"==s)?"19":"1k").1g(j);q.21(Q);o[s].21(Q);Q.1L.1G("5P",1t g.22.ba(Q.1L,{35:Q.Y.di,7b:R(){Q.1L.1F("2y-y","1W")}.1o(Q),3Y:R(){Q.1L.1F("2y-y","1D");if(g.1a.3t){Q.9S.1F("W",Q.1j.bq)}}.1o(Q)}));if(Q.49){Q.1L.1e("5P").T.7X=R(y,C,B,x,z){V A={};if(!B){A.U=y+z.U}if(x){A.17=Q.dO-z.U+C}Q.1j.1g(A)}.1o(Q,r.U+v,Q.6l?0:Q.Y.9h,("3W-3V"==Q.Y.3z),"17"==s)}1i{if(Q.6l){Q.1L.1e("5P").54.1F("W","1Q%")}}}},bx:R(){if("1T"==Q.Y.82){S}V j=Q.Y.bb;7F=Q.1j.4x("6x","6y","6T","6Y"),9m=/17/i.1P(j)||("1D"==Q.Y.bb&&"bJ"==g.1a.9I);Q.2v=g.$1t("3o").2k("3g-82").1g({1w:"2e",2U:"4F",2x:hT,2y:"1W",4l:"9O",19:/1k/i.1P(j)?"1D":5+7F.6x.1R(),1k:/1k/i.1P(j)?5+7F.6Y.1R():"1D",1m:(/1m/i.1P(j)||!9m)?5+7F.6T.1R():"1D",17:(/17/i.1P(j)||9m)?5+7F.6y.1R():"1D",c5:"c4-c2",c3:"-bh -bh"}).29(Q.23);V e=Q.2v.1O("3P-5A").2F(/bj\\s*\\(\\s*\\"{0,1}([^\\"]*)\\"{0,1}\\s*\\)/i,"$1");$X($X(Q.Y.cl.2F(/\\s/ig,"").4s(",")).2X(R(k){S Q.6d.5O(k)}.1o(Q)).hr(R(l,k){V m=Q.6d[l].2h-Q.6d[k].2h;S(9m)?("7S"==l)?-1:("7S"==k)?1:m:m}.1o(Q))).3R(R(k){k=k.4j();V m=g.$1t("A",{2B:Q.9n[Q.6d[k].2B],2f:"#",3F:k},{2g:"2s","4W":"17"}).29(Q.2v),l=(l=m.1O("U"))?l.1R():0,q=(q=m.1O("W"))?q.1R():0;m.1g({"4W":"17",1w:"4C",9r:"2R",2g:"2s",4l:"9O",2o:0,24:0,7h:"bd",dG:(g.1a.3t)?"2R":"bZ",c5:"c4-c2",c3:""+-(Q.6d[k].2h*l)+"1z 1V"});if(g.1a.2L&&(g.1a.3H>4)){m.1g(Q.2v.4x("3P-5A"))}if(g.1a.3t){Q.2v.1F("3P-5A","2R");36{if(!g.2O.9e.1A||!g.2O.9e.9J("4U")){g.2O.9e.dF("4U","dI:dH-dS-e6:e4")}}3k(o){36{g.2O.9e.dF("4U","dI:dH-dS-e6:e4")}3k(o){}}if(!g.2O.9j.dZ){V p=g.2O.gW();p.gY.id="dZ";p.hb="4U\\\\:*{dV:bj(#2q#e7);} 4U\\\\:bo {dV:bj(#2q#e7); 2g: 2s; }"}m.1g({dG:"2R",2y:"1W",2g:"2s"});V n=\'<4U:bo iv="12"><4U:dP 2n="ir" 2b="\'+e+\'"></4U:dP></4U:bo>\';m.i8("eG",n);$X(m.2Q).1g({2g:"2s",U:(l*3)+"1z",W:q*2});m.6g=(Q.6d[k].2h*l)+1;m.4Q=1;m.1G("bg-1w",{l:m.6g,t:m.4Q})}},Q)},bk:R(e){V j=Q.3r.4w(Q);$X(g.$A(g.2O.2E("A")).2X(R(l){V k=1t 4T("(^|;)\\\\s*(1r|1S)\\\\-id\\\\s*:\\\\s*"+Q.id.2F(/\\-/,"-")+"(;|$)");S k.1P(l.3F.4j())},Q)).3R(R(m,k){Q.2K=Q.id;m=$X(m);if(!$X(m).1e("1o:bi")){$X(m).1G("1o:bi",R(n){$X(n).1u();S 12}).1y("1E",m.1e("1o:bi"))}if(e){S}$X(m).1G("1o:2F",R(r,n){V p=Q.1e("1S"),o=n.1e("1S"),q=p.2G(p.1Z||p.id);if((" "+q.r.2Y+" ").3v(/\\ed(?:9M){0,1}\\s/)&&q.r.1r){S 1c}$X(r).1u();if(!p.1N||"3X"!=p.1J||!o.1N||"3X"!=o.1J||p==o){S}2r(r.2n){1p"2S":if(p.9z){42(p.9z)}p.9z=12;S;1q;1p"26":p.9z=p.6L.1o(p,o).2z(p.Y.9y);1q;2q:p.6L(o);S}}.2p(Q.r,m)).1y(Q.Y.3B,m.1e("1o:2F"));if("26"==Q.Y.3B){m.1y("2S",m.1e("1o:2F"))}if(m.2f!=Q.1s.18.2b){V l=$X(Q.3r.2X(R(n){S(m.2f==n.2u.2w&&Q.2K==n.2K)},Q))[0];if(l){m.1G("1S",l)}1i{1t a(m,g.1Y(g.3U(Q.Y),{2H:"2J",2K:Q.2K}),{4H:m.6P,1Z:Q.id,2h:j+k})}}1i{Q.5V=m;m.1G("1S",Q);if(""!=Q.Y.4d){m.2k(Q.Y.4d)}}m.1g({9r:"2R"}).2k("3g-6L");Q.5m.4p(m)},Q)},ej:R(){V e;if("1c"!=Q.Y.3c&&"3p"!=Q.Y.3c){Q.2w.1y("9x",R(m){$X(m).1u()})}if(("1D"==Q.Y.a6&&"26"==Q.Y.7f&&"5A"==Q.Y.9k)||"2S"==Q.Y.a6){Q.1j.1y("2S",R(n){V m=$X(n).1u().5l();if("3p"!=Q.1J){S}if(Q.1j==n.4e()||Q.1j.68(n.4e())){S}Q.2N(1b)}.2p(Q))}Q.23.1y("85",R(n){V m=n.5r();if(3==m){S}if(Q.Y.5I){$X(n).1u();g.5q.ag(Q.Y.5I,(2==m)?"fq":Q.Y.ah)}1i{if(1==m&&"2V"==Q.9w){$X(n).1u();Q.2N(1b)}}}.2p(Q));if(g.1a.3E){Q.23.1y("6Q",R(m){V o=g.31();if(m.3Q.1A>1){S}Q.23.1G("44:3j:5h",{id:m.3Q[0].6J,57:o,x:m.3Q[0].5U,y:m.3Q[0].5J})}.2p(Q));Q.23.1y("4o",R(o){V p=g.31(),m=Q.23.1e("44:3j:5h");if(!m||o.a8.1A>1){S}if(m.id==o.4q[0].6J&&p-m.57<=5f&&1v.9u(1v.3x(o.4q[0].5U-m.x,2)+1v.3x(o.4q[0].5J-m.y,2))<=15){if(Q.Y.5I){$X(o).1u();g.5q.ag(Q.Y.5I,Q.Y.ah);S}o.1u();Q.2N(1b);S}}.2p(Q))}if(Q.2v){V k,l,j;Q.2v.1G("1o:9v",k=Q.e1.2p(Q)).1G("1o:1E",l=Q.dQ.2p(Q));Q.2v.1y("26",k).1y("2S",k).1y("85",l).1y("1E",R(m){$X(m).1u()});g.1a.3E&&Q.2v.1y("4o",l);if("f0"==Q.Y.82){Q.1j.1G("1o:f6",j=R(n){V m=$X(n).1u().5l();if("3p"!=Q.1J){S}if(Q.1j==n.4e()||Q.1j.68(n.4e())){S}Q.7y(("2S"==n.2n))}.2p(Q)).1y("26",j).1y("2S",j)}}Q.1j.1G("1o:9A-1E",e=R(m){if(Q.1j.68(m.5l())){S}if(((/5s/i).1P(m.2n)||(1==m.5r()||0==m.5r()))&&"3p"==Q.1J){if((/5s/i).1P(m.2n)){$X(m).1u()}Q.2N(1b,1c)}}.2p(Q));g.2O.1y("1E",e);g.1a.3E&&g.2O.1y("6Q",e);Q.1j.1G("1o:1f:3u",R(m){42(Q.9B);Q.9B=Q.7V.1o(Q).2z(1Q)}.2p(Q));$X(1f).1y("3u",Q.1j.1e("1o:1f:3u"));if("5e"!==Q.Y.3z){$X(1f).1y("eg",Q.1j.1e("1o:1f:3u"))}},dY:R(){Q.3N=1t g.22(Q.1j,{4D:g.22.3m[Q.Y.5j+Q.76[Q.Y.5j][0]],35:Q.Y.9D,4K:Q.4K,7b:R(){V l=Q.2G(Q.1Z||Q.id);Q.1j.1F("U",Q.3N.4b.U[0]);Q.1j.29(g.2j);if(!l.r.1e("44:3j:5h")){Q.aV(12)}Q.7y(1c,1c);if(Q.2v&&g.1a.2L&&g.1a.3H<6){Q.2v.1T()}if(!Q.Y.73&&!(Q.5T&&"3i"!=Q.Y.70)){V j={};1K(V e in Q.3N.4b){j[e]=Q.3N.4b[e][0]}Q.1j.1g(j);if((" "+l.r.2Y+" ").3v(/\\s(3g|5p)\\s/)){l.r.2C(0,1c)}}if(Q.1L){if(g.1a.2L&&g.1a.3K&&Q.49){Q.1L.1F("2g","2R")}Q.1L.1U.1F("W",0)}Q.1j.1g({2x:Q.Y.2x+1,1C:1})}.1o(Q),3Y:R(){V j=Q.2G(Q.1Z||Q.id);if(Q.Y.5I){Q.1j.1g({4l:"9O"})}if(!(Q.5T&&"3i"!=Q.Y.70)){j.r.2k("3g-3p-4H")}if("1T"!=Q.Y.82){if(Q.2v&&g.1a.2L&&g.1a.3H<6){Q.2v.2c();if(g.1a.3t){g.$A(Q.2v.2E("A")).3b(R(l){V m=l.1e("bg-1w");l.6g=m.l;l.4Q=m.t})}}Q.7y()}if(Q.1L){if(Q.49){V e=Q.1j.1e("2o"),k=Q.dd(Q.1j,Q.1j.1I().W,e.al.1R()+e.a5.1R());Q.23.1g(Q.1j.4x("U"));Q.1L.1F("W",k-Q.1L.1e("3M")).1U.1F("W",k);Q.1j.1F("U","1D");Q.dO=Q.1j.3h().17}Q.1L.1F("2g","2s");Q.a1()}Q.1J="3p";g.2O.1y("aI",Q.cs.2p(Q));if(Q.Y.9U&&Q.23.1I().U<Q.1s.a3){if(!Q.23.1r){Q.b2=1t c.1r(Q.23,Q.9G)}1i{Q.23.1r.1B(Q.9G)}}}.1o(Q)});Q.5k=1t g.22(Q.1j,{4D:g.22.3m.4E,35:Q.Y.77,4K:Q.4K,7b:R(){if(Q.Y.9U){c.1u(Q.23)}Q.7y(1c,1c);if(Q.2v&&g.1a.3t){Q.2v.1T()}Q.1j.1g({2x:Q.Y.2x});if(Q.1L&&Q.49){Q.1j.1g(Q.23.4x("U"));Q.23.1F("U","1D")}}.1o(Q),3Y:R(){if(!Q.5T||(Q.5T&&!Q.1Z&&!Q.5m.1A)){V e=Q.2G(Q.1Z||Q.id);if(!e.r.1e("44:3j:5h")){e.aV(1c)}e.r.5g("3g-3p-4H").2C(1,1c);if(e.1x){e.1x.2c()}}Q.1j.1g({19:-7W}).29(Q.6C);Q.1J="3X"}.1o(Q)});if(g.1a.3t){Q.3N.T.7X=Q.5k.T.7X=R(l,e,m,k){V j=k.U+e;Q.9S.1g({U:j,W:1v.aX(j/l)+m});if(k.1C){Q.23.2C(k.1C)}}.1o(Q,Q.1j.1e("4P"),Q.1j.1e("48"),Q.1j.1e("3M"))}},3i:R(w,q){if(Q.Y.5C){S}if("3X"!=Q.1J){if("62"==Q.1J){Q.r.1G("51",Q.id);Q.1B()}S}Q.1J="5Z-3i";Q.5T=w=w||12;Q.cj().3R(R(p){if(p==Q||Q.5T){S}2r(p.1J){1p"5Z-2N":p.5k.1u(1c);1q;1p"5Z-3i":p.3N.1u();p.1J="3p";2q:p.2N(1b,1c)}},Q);V z=Q.2G(Q.1Z||Q.id).r.1e("1S"),e=(z.1d)?z.1d.18.3L():z.r.3L(),v=(z.1d)?z.1d.18.3h():z.r.3h(),x=("3W-3V"==Q.Y.3z)?Q.3u():{U:Q.1j.1e("2M").U-Q.1j.1e("48")+Q.1j.1e("9l"),W:Q.1j.1e("2M").W-Q.1j.1e("3M")+Q.1j.1e("9q")},r={U:x.U+Q.1j.1e("48"),W:x.W+Q.1j.1e("3M")},s={},l=[Q.1j.4x("6x","6y","6T","6Y"),Q.1j.1e("24")],k={U:[e.1m-e.17,x.U]};$X(["9H","9F","9E","9C"]).3R(R(p){k["24"+p]=[l[0]["24"+p].1R(),l[1]["24"+p].1R()]});V j=Q.1w;V y=("5A"==Q.Y.9k)?e:Q.79();2r(Q.Y.7m){1p"5F":s=Q.6t(r,y);1q;2q:if("3W-3V"==Q.Y.3z){x=Q.3u({x:(28(j.17))?0+j.17:(28(j.1m))?0+j.1m:0,y:(28(j.19))?0+j.19:(28(j.1k))?0+j.1k:0});r={U:x.U+Q.1j.1e("48"),W:x.W+Q.1j.1e("3M")};k.U[1]=x.U}y.19=(y.19+=28(j.19))?y.19:(y.1k-=28(j.1k))?y.1k-r.W:y.19;y.1k=y.19+r.W;y.17=(y.17+=28(j.17))?y.17:(y.1m-=28(j.1m))?y.1m-r.U:y.17;y.1m=y.17+r.U;s=Q.6t(r,y);1q}k.19=[v.19,s.y];k.17=[v.17,s.x+((Q.1L&&"17"==Q.Y.6u)?Q.1L.1e("U"):0)];if(w&&"3i"!=Q.Y.70){k.U=[x.U,x.U];k.19[0]=k.19[1];k.17[0]=k.17[1];k.1C=[0,1];Q.3N.T.35=Q.Y.a2;Q.3N.T.4D=g.22.3m.4E}1i{Q.3N.T.4D=g.22.3m[Q.Y.5j+Q.76[Q.Y.5j][0]];Q.3N.T.35=Q.Y.9D;if(g.1a.3t){Q.23.2C(1)}if(Q.Y.73){k.1C=[0,1]}}if(Q.2v){g.$A(Q.2v.2E("A")).3R(R(A){V p=A.1O("3P-1w").4s(" ");if(g.1a.3t){A.4Q=1}1i{p[p.1A>2?3:1]="1V";A.1g({"3P-1w":p.7n(" ")})}});V m=g.$A(Q.2v.2E("A")).2X(R(p){S"9s"==p.3F})[0],o=g.$A(Q.2v.2E("A")).2X(R(p){S"9i"==p.3F})[0],u=Q.c9(Q.2K),n=Q.cn(Q.2K);if(m){(Q==u&&(u==n||!Q.Y.6U))?m.1T():m.2c()}if(o){(Q==n&&(u==n||!Q.Y.6U))?o.1T():o.2c()}}Q.3N.1B(k);Q.9Y()},2N:R(e,n){if(!e&&"5Z-3i"==Q.1J){Q.3N.1u();Q.1J="3p"}if("3p"!=Q.1J){S}if(e&&"62"==e.1J){e.5S=Q.2N.1o(Q,e);e.a4=Q.23.3L();e.1B();S}if(e&&!e.1N&&(!e.1s||"ea"==e.1J)){e.5S=Q.2N.1o(Q,e);if(!e.Y.5Q){e.6Z(e.2u.2w,Q.23.3L())}Q.6X=e;S}if(Q.6X){Q.6X.5S=1b;Q.6X.2m&&Q.6X.2m.1T()}Q.6X=1b;V m={},p=Q.1j.3L();Q.1J="5Z-2N";Q.5T=e=e||1b;n=n||12;g.2O.2t("aI");if(Q.1L){Q.a1("1T");Q.1L.1U.1F("W",0);if(g.1a.2L&&g.1a.3K&&Q.49){Q.1L.1F("2g","2R")}}m=g.3U(Q.3N.4b);m.U[1]=Q.23.1I().U;m.19[1]=Q.1j.3h().19;m.17[1]=Q.1j.3h().17;if(e&&"3i"!=Q.Y.70){if("5R"==Q.Y.70){m.1C=[1,0]}m.U[0]=m.U[1];m.19=m.19[1];m.17=m.17[1];Q.5k.T.35=Q.Y.a2;Q.5k.T.4D=g.22.3m.4E}1i{Q.5k.T.35=(n)?0:Q.Y.77;Q.5k.T.4D=g.22.3m[Q.Y.74+Q.76[Q.Y.74][1]];1K(V j in m){if("5N"!=g.2I(m[j])){65}m[j].9W()}if(!Q.Y.73){3G m.1C}V l=Q.2G(Q.1Z||Q.id).r.1e("1S"),q=(l.1d)?l.1d.18:l.r;m.U[1]=q.1I().U;m.19[1]=q.3h().19;m.17[1]=q.3h().17}Q.5k.1B(m);if(e){e.3i(Q,p)}V o=g.2O.1e("bg:7u");if(!e&&o){if("1W"!=o.el.1O("2U")){Q.9Y(1c)}}},a1:R(j){if(!Q.1L){S}V e=Q.1L.1e("5P");Q.1L.1F("2y-y","1W");e.1u();e[j||"9t"](Q.49?Q.Y.6u:"7z")},7y:R(j,l){V n=Q.2v;if(!n){S}j=j||12;l=l||12;V k=n.1e("cb:7u"),e={};if(!k){n.1G("cb:7u",k=1t g.22(n,{4D:g.22.3m.4E,35:6V}))}1i{k.1u()}if(l){n.1F("1C",(j)?0:1);S}V m=n.1O("1C");e=(j)?{1C:[m,0]}:{1C:[m,1]};k.1B(e)},e1:R(m){V k=$X(m).1u().5l();if("3p"!=Q.1J){S}36{3J("a"!=k.3Z.3a()&&k!=Q.2v){k=k.1U}if("a"!=k.3Z.3a()||k.68(m.4e())){S}}3k(l){S}V j=k.1O("3P-1w").4s(" ");2r(m.2n){1p"26":j[j.1A>2?3:1]="-"+k.1O("W");1q;1p"2S":j[j.1A>2?3:1]="1V";1q}if(g.1a.3t){k.4Q=j[1].1R()+1}1i{k.1g({"3P-1w":j.7n(" ")})}},dQ:R(k){V j=$X(k).1u().5l();3J("a"!=j.3Z.3a()&&j!=Q.2v){j=j.1U}if("a"!=j.3Z.3a()){S}2r(j.3F){1p"9s":Q.2N(Q.ay(Q,Q.Y.6U));1q;1p"9i":Q.2N(Q.aF(Q,Q.Y.6U));1q;1p"7S":Q.2N(1b);1q}},9Y:R(j){j=j||12;V k=g.2O.1e("bg:7u"),e={},m=0;if(!k){V l=g.$1t("3o").2k("3g-3P").1g({1w:"gS",2g:"2s",19:0,1k:0,17:0,1m:0,2x:(Q.Y.2x-1),2y:"1W",7h:Q.Y.7h,1C:0,2o:0,1X:0,24:0}).29(g.2j).1T();if(g.1a.3t){l.4S(g.$1t("9Z",{2b:\'ar:"";\'},{U:"1Q%",W:"1Q%",2g:"2s",2X:"dW()",19:0,gZ:0,1w:"2e",2x:-1,2o:"2R"}))}g.2O.1G("bg:7u",k=1t g.22(l,{4D:g.22.3m.4E,35:Q.Y.aU,7b:R(n){if(n){Q.1g(g.1Y(g.2O.aT(),{1w:"2e"}))}}.1o(l,Q.6l),3Y:R(){Q.2C(Q.1O("1C"),1c)}.1o(l)}));e={1C:[0,Q.Y.as/1Q]}}1i{k.1u();m=k.el.1O("1C");k.el.1F("3P-5w",Q.Y.7h);e=(j)?{1C:[m,0]}:{1C:[m,Q.Y.as/1Q]};k.T.35=Q.Y.aU}k.el.2c();k.1B(e)},aV:R(j){j=j||12;V e=Q.2G(Q.1Z||Q.id);if(e.r.1r&&-1!=e.r.1r.4B){if(!j){e.r.1r.6j();e.r.1r.3q=12;e.r.1r.1l.4I=12;e.r.1r.1l.18.1T();e.r.1r.1h.1T()}1i{if(!e.r.1r.T.6h){e.r.1r.5G(e.r.1r.T.5x)}}}},79:R(k){k=k||0;V j=(g.1a.3E)?{U:1f.9g,W:1f.9f}:$X(1f).1I(),e=$X(1f).7w();S{17:e.x+k,1m:e.x+j.U-k,19:e.y+k,1k:e.y+j.W-k}},6t:R(k,l){V j=Q.79(Q.Y.9h),e=$X(1f).aT();l=l||j;S{y:1v.3A(j.19,1v.4M(("3W-3V"==Q.Y.3z)?j.1k:e.W+k.W,l.1k-(l.1k-l.19-k.W)/2)-k.W),x:1v.3A(j.17,1v.4M(j.1m,l.1m-(l.1m-l.17-k.U)/2)-k.U)}},3u:R(m,j){V n=(g.1a.3E)?{U:1f.9g,W:1f.9f}:$X(1f).1I(),s=Q.1j.1e("2M"),o=Q.1j.1e("4P"),l=Q.1j.1e("48"),k=Q.1j.1e("3M"),r=Q.1j.1e("9l"),e=Q.1j.1e("9q"),q=0,p=0;if(m){n.U-=m.x;n.W-=m.y}q=1v.4M(Q.2M.U+r,1v.4M(s.U,n.U-l-Q.6I.x)),p=1v.4M(Q.2M.W+e,1v.4M(s.W,n.W-k-Q.6I.y));if(q/p>o){q=p*o}1i{if(q/p<o){p=q/o}}if(!j){Q.1j.1F("U",q);if(Q.cr){Q.cr.1g({19:(Q.1s.18.1I().W-Q.cr.1I().W)})}}S{U:1v.aX(q),W:1v.aX(p)}},7V:R(){if("3p"!==Q.1J){S}V n=Q.1j.1I();V r=Q.2G(Q.1Z||Q.id).r.1e("1S"),e=(r.1d)?r.1d.18.3L():r.r.3L(),s=("5A"==Q.Y.9k)?e:Q.79(),j=Q.1w,o=("3W-3V"==Q.Y.3z)?Q.3u(1b,1c):{U:Q.1j.1e("2M").U-Q.1j.1e("48")+Q.1j.1e("9l"),W:Q.1j.1e("2M").W-Q.1j.1e("3M")+Q.1j.1e("9q")},l={U:o.U+Q.1j.1e("48"),W:o.W+Q.1j.1e("3M")},q=Q.1j.3h(),k=(Q.1L&&Q.49)?Q.1L.1e("U")+Q.1L.1e("48"):0,m;n.U-=Q.1j.1e("48");n.W-=Q.1j.1e("3M");2r(Q.Y.7m){1p"5F":m=Q.6t(l,s);1q;2q:if("3W-3V"==Q.Y.3z){o=Q.3u({x:(28(j.17))?0+j.17:(28(j.1m))?0+j.1m:0,y:(28(j.19))?0+j.19:(28(j.1k))?0+j.1k:0},1c);l={U:o.U+Q.1j.1e("48"),W:o.W+Q.1j.1e("3M")}}s.19=(s.19+=28(j.19))?s.19:(s.1k-=28(j.1k))?s.1k-l.W:s.19;s.1k=s.19+l.W;s.17=(s.17+=28(j.17))?s.17:(s.1m-=28(j.1m))?s.1m-l.U:s.17;s.1m=s.17+l.U;m=Q.6t(l,s);1q}1t g.22(Q.1j,{35:6V,b6:R(p,u){V v;if(p>0){Q.23.1F("U",u.U-p);v=Q.23.1I().W;Q.1L.1F("W",v-Q.1L.1e("3M")).1U.1F("W",v)}if(Q.cr){Q.cr.1g({19:(Q.1s.18.1I().W-Q.cr.1I().W)})}}.1o(Q,k),3Y:R(){if(Q.b2){Q.b2.7V()}}.1o(Q)}).1B({U:[n.U+k,o.U+k],19:[q.19,m.y],17:[q.17,m.x]})},dd:R(l,j,e){V k=12;2r(g.1a.4L){1p"b0":k="2w-3y"!=(l.1O("3y-5B")||l.1O("-c1-3y-5B"));1q;1p"3f":k="2w-3y"!=(l.1O("3y-5B")||l.1O("-3f-3y-5B"));1q;1p"2L":k=g.1a.3K||"2w-3y"!=(l.1O("3y-5B")||l.1O("-9p-3y-5B")||"2w-3y");1q;2q:k="2w-3y"!=l.1O("3y-5B");1q}S(k)?j:j-e},5E:R(o){R l(r){V q=[];if("6f"==g.2I(r)){S r}1K(V m in r){q.4p(m.6q()+":"+r[m])}S q.7n(";")}V k=l(o).4j(),p=$X(k.4s(";")),n=1b,j=1b;p.3R(R(q){1K(V m in Q.Y){j=1t 4T("^"+m.6q().2F(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]"+(("4g"==m)?"*":"+")+")$","i").6S(q.4j());if(j){2r(g.2I(Q.Y[m])){1p"7H":Q.Y[m]=j[1].6O();1q;1p"6c":Q.Y[m]=(j[1].3n("."))?(j[1].c0()*((m.3a().3n("1C"))?1Q:aM)):j[1].1R();1q;2q:Q.Y[m]=j[1].4j()}}}},Q);1K(V e in Q.9o){if(!Q.9o.5O(e)){65}j=1t 4T("(^|;)\\\\s*"+e.6q().2F(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)\\\\s*(;|$)","i").6S(k);if(j){Q.9o[e].21(Q,j[2])}}},aA:R(){V e=1b,l=Q.1w,k=Q.2M;1K(V j in l){e=1t 4T(""+j+"\\\\s*=\\\\s*([^,]+)","i").6S(Q.Y.7m);if(e){l[j]=(bY(l[j]=e[1].1R()))?l[j]:"1D"}}if((71(l.19)&&71(l.1k))||(71(l.17)&&71(l.1m))){Q.Y.7m="5F"}if(!$X(["3W-3V","5e"]).4G(Q.Y.3z)){1K(V j in k){e=1t 4T(""+j+"\\\\s*=\\\\s*([^,]+)","i").6S(Q.Y.3z);if(e){k[j]=(bY(k[j]=e[1].1R()))?k[j]:-1}}if(71(k.U)&&71(k.W)){Q.Y.3z="3W-3V"}}},bX:R(e){V j,l;1K(V j in e){if(Q.9n.5O(l=j.3d())){Q.9n[l]=e[j]}}},2G:R(e){S $X(Q.3r.2X(R(j){S(e==j.id)}))[0]},63:R(e,j){e=e||1b;j=j||12;S $X(Q.3r.2X(R(k){S(e==k.2K&&!k.5D&&(j||k.1N)&&(j||"62"!=k.1J)&&(j||!k.Y.5C))}))},aF:R(m,e){e=e||12;V j=Q.63(m.2K,1c),k=j.4w(m)+1;S(k>=j.1A)?(!e||1>=j.1A)?1H:j[0]:j[k]},ay:R(m,e){e=e||12;V j=Q.63(m.2K,1c),k=j.4w(m)-1;S(k<0)?(!e||1>=j.1A)?1H:j[j.1A-1]:j[k]},c9:R(j){j=j||1b;V e=Q.63(j,1c);S(e.1A)?e[0]:1H},cn:R(j){j=j||1b;V e=Q.63(j,1c);S(e.1A)?e[e.1A-1]:1H},cj:R(){S $X(Q.3r.2X(R(e){S("3p"==e.1J||"5Z-3i"==e.1J||"5Z-2N"==e.1J)}))},cs:R(k){V j=Q.Y.6U,m=1b;if(!Q.Y.bK){g.2O.2t("aI");S 1c}k=$X(k);if(Q.Y.bC&&!(k.h2||k.h3)){S 12}2r(k.bM){1p 27:k.1u();Q.2N(1b);1q;1p 32:1p 34:1p 39:1p 40:m=Q.aF(Q,j||32==k.bM);1q;1p 33:1p 37:1p 38:m=Q.ay(Q,j);1q;2q:}if(m){k.1u();Q.2N(m)}}});V h={3H:"bL.5.40",T:{},7B:{},Y:{4u:12,5C:12,89:1c,5Q:1c,83:"h9",4g:"az",81:"i4",7s:"9K 1r...",3c:"12"},1B:R(l){Q.5t=$X(1f).1e("i7:5t",$X([]));V e=1b,j=$X([]),k={};Q.T=g.1Y(1f.i2||{},Q.T);Q.Y=g.1Y(Q.Y,Q.9R());c.T=g.3U(Q.Y);b.T=g.3U(Q.Y);c.T.3c=("5e"==Q.Y.3c||"1c"==Q.Y.3c);b.7B=Q.7B;if(l){e=$X(l);if(e&&(" "+e.2Y+" ").3v(/\\s(6R(?:9M){0,1}|3g)\\s/)){j.4p(e)}1i{S 12}}1i{j=$X(g.$A(g.2j.2E("A")).2X(R(m){S(" "+m.2Y+" ").3v(/\\s(6R(?:9M){0,1}|3g)\\s/)}))}j.3R(R(p){p=$X(p);V m=p.2E("7J"),n=1b;k=g.1Y(g.3U(Q.Y),Q.9R(p.3F||" "));if(p.5u("6R")||(p.5u("5p"))){if(m&&m.1A){n=p.4t(m[0])}c.1B(p,"1m-1E: "+("5e"==k.3c||"1c"==k.3c));if(n){p.4S(n)}}if(p.5u("3g")||(p.5u("5p"))){b.1B(p)}1i{p.1M.4l="9O"}Q.5t.4p(p)},Q);S 1c},1u:R(m){V e=1b,l=1b,j=$X([]);if(m){e=$X(m);if(e&&(" "+e.2Y+" ").3v(/\\s(6R(?:9M){0,1}|3g)\\s/)){j=$X(Q.5t.7Q(Q.5t.4w(e),1))}1i{S 12}}1i{j=$X(Q.5t)}3J(j&&j.1A){l=$X(j[j.1A-1]);if(l.1r){l.1r.1u();c.4f.7Q(c.4f.4w(l.1r),1);l.1r=1H}b.1u(l);V k=j.7Q(j.4w(l),1);3G k}S 1c},84:R(j){V e=1b;if(j){Q.1u(j);Q.1B.1o(Q).2z(9N,j)}1i{Q.1u();Q.1B.1o(Q).2z(9N)}S 1c},2Z:R(n,e,k,l){V m=$X(n),j=1b;if(m){if((j=m.1e("1S"))){if(j.2G(j.1Z||j.id).1N){j.2G(j.1Z||j.id).2N(1b,1c)}j.2G(j.1Z||j.id).1J="7p"}if(!c.2Z(m,e,k,l)){b.2Z(m,e,k,l)}}},3i:R(e){S b.3i(e)},2N:R(e){S b.2N(e)},9L:R(e){S c.9L(e)},9P:R(e){S c.9P(e)},9R:R(j){V e,p,l,k,n;e=1b;p={};n=[];if(j){l=$X(j.4s(";"));l.3b(R(o){1K(V m in Q.Y){e=1t 4T("^"+m.6q().2F(/\\-/,"\\\\-")+"\\\\s*:\\\\s*([^;]+)$","i").6S(o.4j());if(e){2r(g.2I(Q.Y[m])){1p"7H":p[m]=e[1].6O();1q;1p"6c":p[m]=45(e[1]);1q;2q:p[m]=e[1].4j()}}}},Q)}1i{1K(k in Q.T){e=Q.T[k];2r(g.2I(Q.Y[k.3d()])){1p"7H":e=e.6a().6O();1q;1p"6c":e=45(e);1q;2q:1q}p[k.3d()]=e}}S p}};$X(1n).1y("58",R(){h.1B()});S h})(6v);',62,1154,'||||||||||||||||||||||||||||||||||||||||||||||||||||this|function|return|options|width|var|height|mjs|_o||||false|||||left|self|top|j21|null|true|z7|j29|window|j6|z46|else|t22|bottom|z4|right|document|j24|case|break|zoom|z1|new|stop|Math|position|hint|je1|px|length|start|opacity|auto|click|j6Prop|j30|undefined|j7|state|for|t25|style|ready|j5|test|100|j17|thumb|hide|parentNode|0px|hidden|margin|extend|t27||call|FX|t23|padding||mouseover||parseInt|j32|zoomWidth|src|show|z6|absolute|href|display|index|arguments|body|j2|zoomHeight|z3|type|border|j16|default|switch|block|je2|params|t26|content|zIndex|overflow|j27|appendChild|title|j23|zoomPosition|byTag|replace|t16|initializeOn|j1|load|group|trident|size|restore|doc|defined|firstChild|none|mouseout|hotspots|visibility|img|prototype|filter|className|update||now||||duration|try||||toLowerCase|j14|rightClick|j22|prefix|webkit|MagicThumb|j8|expand|event|catch|fullScreen|Transition|has|DIV|expanded|z30|thumbs|Element|trident4|resize|match|inner|pow|box|expandSize|max|selectorsChange|z2|ieMode|touchScreen|rel|delete|version|parent|while|backCompat|j9|padY|t30|z42|background|targetTouches|forEach|onready|selectors|detach|screen|fit|inz30|onComplete|tagName||init|clearTimeout|z21|magicthumb|parseFloat|edge|createElement|padX|hCaption|captionText|styles|j33|selectorsClass|getRelated|zooms|hintText|z41|J_TYPE|j26|typeof|cursor|capable|selectorsEffect|touchend|push|changedTouches|getDoc|split|removeChild|disableZoom|z44|indexOf|j19s|_cleanup|instanceof|J_UUID|z28|relative|transition|linear|visible|contains|thumbnail|z38|important|fps|engine|min|constructor|Class|ratio|scrollTop|layout|append|RegExp|mt_vml_|round|float|j15|apply|timer||clicked|opacityReverse|z43Bind|wrapper|borderWidth|on|ts|domready|div|Array|onload|z13|hintPosition|original|200|j3|lastTap|showTitle|expandEffect|t31|getTarget|t28|dragMode|custom|MagicZoomPlus|win|getButton|touch|items|j13|nodeType|color|alwaysShowZoom|z9|divTag|image|sizing|disableExpand|error|z37|center|activate|magiczoom|link|clientY|naturalWidth|z35|unload|array|hasOwnProperty|slide|preloadSelectorsBig|fade|onInititalize|prevItem|clientX|selector|kill|showLoading|storage|busy||createTextNode|uninitialized|t15|setTimeout|continue|z34|_tmpp|hasChild|300|toString|Out|number|cbs|In|string|scrollLeft|clickToActivate|initWidth|pause|adjustX|ieBack|adjustY|requestAnimationFrame|initHeight|class|dashize|offset|preservePosition|t14|captionPosition|magicJS|lastSelector|paddingTop|paddingLeft|z47|Doc|getElementsByTagName|t29|z45|loading|complete|css3Transformations|readyState|scrPad|identifier|zoomDistance|swap|mode|render|j18|rev|touchstart|MagicZoom|exec|paddingRight|slideshowLoop|250|zoomViewHeight|nextItem|paddingBottom|setupContent|slideshowEffect|isNaN|gd56f7fsgd|keepThumbnail|restoreEffect||easing|restoreSpeed|j19|t13|hintVisible|onStart|onerror|initMouseEvent|zoomAlign|expandTrigger|currentStyle|backgroundColor|400|z3Timer|z36|static|expandPosition|join|setupHint|updating|changeContent|throw|loadingMsg|J_EUID|t32|shift|j10|initTopPos|t10|vertical|css3Animation|lang|forceAnimation|floor|cloneNode|pad|initLeftPos|boolean|random|span|naturalHeight|presto|events|z24|z18|set|splice|getElementsByClassName|close|ddy|ddx|onresize|10000|onBeforeRender|z23|z14|z43|loadingClass|buttons|hintClass|refresh|mouseup|calc|activatedEx|entireImage|preloadSelectorsSmall|_unbind|_timer|not|replaceChild|documentElement|exOptions|100000px|button|loadingOpacity|hintOpacity|lastLeftPos|_event_prefix_|newImg|moveOnClick|cssClass|selectorsEffectSpeed|firstRun|borderLeftWidth|ufx|inline|createEvent|z7Rect|MagicJS|String|z29|titleSource|clickInitZoom|originId|speed|to|head|_handlers|callee|abort|features|z0|9_|defaults|implement|Ff|enabled|smoothing|dissolve|500|z11|effect|getBox|mousedown|z33|hoverTimer|innerHTML|PFX||insertBefore|j31|dblclick|compatMode|cancelAnimationFrame|z10|stopImmediatePropagation|holder|element|IMG|getStorage|found|pounce|namespaces|innerHeight|innerWidth|screenPadding|next|styleSheets|expandAlign|hspace|theme_mac|_lang|_deprecated|ms|vspace|outline|previous|toggle|sqrt|hover|media|contextmenu|selectorsMouseoverDelay|swapTimer|external|resizeTimer|Right|expandSpeed|Left|Bottom|mzParams|Top|platform|item|Loading|zoomIn|Plus|150|pointer|zoomOut|request|_z37|overlapBox|_event_add_|panZoom|Event|reverse|_event_del_|t11|IFRAME|adjustPosition|t12|slideshowSpeed|nWidth|loadingRect|borderBottomWidth|restoreTrigger|navigator|touches|query|tl|clickToInitialize|uuid||J_EXTENDED|Function|open|linkTarget|mousemove|css|mz|borderTopWidth|onabort|magic|defaultView|styleFloat|HTMLElement|javascript|backgroundOpacity|loadingPositionX|el_arr|transform|z20|loadingPositionY|t18|Zoom|parseExOptions|z26|z1Holder|shadow|object|t17|out|onErrorHandler|keydown|preventDefault|z5|thumbChange|1000|horizontal|z16|bgColor|smoothingSpeed|stopAnimation|loop|j12|backgroundSpeed|toggleMZ|caller|ceil|startTime|construct|gecko|resizeBind|zoomItem|PI|loopBind|cos|onAfterRender|insertRule|z15|5000|Slide|buttonsPosition||transparent|tc|5001||10000px|prevent|url|t6||captionSource|tr|rect|textAlign|offsetHeight||je3|initialize|destroy|offsetWidth|Width|t5|onError|enclose|highlight|tap|keyboardCtrl|elasticIn|bounceIn|1px|preload|change|text|mac|keyboard|v4|keyCode|borderRightWidth|styles_arr|fromCharCode|map|matchMedia|Image|touchmove|t2|blur|z25|setLang|isFinite|inherit|toFloat|moz|repeat|backgroundPosition|no|backgroundRepeat|z31|z32|ios|t19|glow||t1|x7||zoomWindowEffect|user|callout|select|t21|z19|buttonsDisplay|zoomFade|t20|fitZoomWindow|z17|big||onKey|quadIn|xpath|captionHeight|localStorage|XMLHttpRequest|Khtml|Webkit|Moz|chrome|documentMode|cancelFullScreen|CancelFullScreen|cancel|errorEventName|900|changeEventName|mozCancelAnimationFrame|backcompat|alt|textnode|date|nativize|Date|UUID|toArray|charAt|concat|hone|android|od|opera|DocumentTouch|phone|captionWidth|getComputedStyle|interval|fontFamily|fontWeight|Tahoma|wrap|dispatchEvent|420|finishTime|fontSize|cubicIn|backIn|adjBorder|expoIn|roundCss|sineIn|raiseEvent|captionSpeed|getBoundingClientRect|getElementById|compareDocumentPosition|setProps|Alpha||DXImageTransform|Microsoft|webkit419|requestFullScreen|which|addEventListener|t4|relatedTarget|stopPropagation|cancelBubble|101|charCodeAt|zoomFadeInSpeed|clickToDeactivate|back|align|add|backgroundImage|schemas|urn|isReady|abs|continueAnimation|_bind|unselectable|curLeft|fill|cbClick|gecko181|microsoft|nHeight|expandTriggerDelay|behavior|mask|buttonClose|t8|magicthumb_ie_ex|buttonNext|cbHover|buttonPrevious|z22|vml|disable|com|VML|v2|zoomFadeOutSpeed|initializing|move|loadingMsgExpanded|sMagicZoom|z39|clone|scroll|z8|tmp|t7|insertCSS||entire|z27|MagicZoomPup|temporary||j28|drag|clientHeight|pageYOffset|scrollHeight|scrollWidth|190|181|sine|pageXOffset|191|419|210|amp|msPerformance|beforeEnd|211|260|220|performance|postMessage|192|mzp|clientWidth|525|10001|byClass|lt|presto925|offsetLeft|cssFloat|clientLeft|getPropertyValue|offsetTop|offsetParent|autohide|hasLayout|filters|bounce|setAttribute|elastic|cbhover|clientTop|progid|html|j4|j20|fullscreenerror|iframe|DOMElement|fullscreenchange|j11|webkitIsFullScreen|FullScreen|cubic|innerText|childNodes|quad|expo|RequestFullScreen|khtml|_blank|mobile|tablet|avantgo|bada|MagicThumbHint|ontouchstart|air|runtime|querySelector|blackberry|blazer|iris|kindle|lge|maemo|iemobile|hiptop|compal|elaine|fennec|evaluate|userAgent|KeyboardEvent|KeyEvent|regexp|slice|UIEvent|MouseEvent|exists|collection|Object|getTime|Close|toUpperCase|imageSize|getAttribute|setInterval|addCSS|caption|Next|Previous|swapImage|midp|mmp|linux|other|mozRequestAnimationFrame|webkitRequestAnimationFrame|getAttributeNode|webos|unknown|Expand|_self|oRequestAnimationFrame|msRequestAnimationFrame|MagicThumbLoading|000000|AnimationName|270|animationName|Transform|oCancelAnimationFrame|msCancelAnimationFrame|webkitCancelRequestAnimationFrame||taintEnabled|WebKitPoint|re|plucker|pocket|psp|ixi|os|netfront|ob|palm|symbian|treo|xiino|ActiveXObject|getBoxObjectFor|mozInnerScreenY|xda|windows|up|vodafone|wap|applicationCache|target|fixed|delay|small|msg|createStyleSheet|source|owningElement|lef|lastChild|z12|ctrlKey|metaKey|getXY|Invalid|Magic|deactivate|preserve|MagicZoomPlusHint|stylesId|cssText|slideOut|bounceOut|slideIn|sheet|styleSheet|distance|always|returnValue|MagicZoomHint|cssRules|addRule|_new|767px|009|translateZ|sort|skipAnimation|2em|dir|line|nextSibling|ccc|toLocaleLowerCase|td|removeAttribute|currentTarget|00001|coords|3px|MagicZoomHeader|textDecoration|hand|selectstart|MozUserSelect|matches|middle|MagicZoomBigImageCont|10002|MagicBoxGlow|frameBorder|rtl|MagicBoxShadow|trident900|111|elasticOut|MagicZoomLoading|DOMContentLoaded|fromElement|doScroll|zoomActivation|loaded|srcElement|MagicZoomPlusOptions|600|MagicZoomPlusLoading|clearInterval|curFrame|magiczoomplus|insertAdjacentHTML|toElement|detachEvent|attachEvent|9999|||||execCommand|BackgroundImageCache|initEvent|createEventObject|clickTo|fireEvent||removeEventListener||eventType|tile|mt|expoOut|618|stroked|quadOut|pageY|sineOut|cubicOut|backOut|pageX'.split('|'),0,{}))/*!
 * jquery-confirm v3.0.1 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2016 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}

var jconfirm, Jconfirm;
(function ($) {
    "use strict";

    $.fn.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string')
            options = {
                content: options,
                title: (option2) ? option2 : false
            };

        /*
         *  Alias of $.confirm to emulate native confirm()
         */
        $(this).each(function () {
            var $this = $(this);
            $this.on('click', function (e) {
                e.preventDefault();
                var jcOption = $.extend({}, options);
                if ($this.attr('data-title'))
                    jcOption['title'] = $this.attr('data-title');
                if ($this.attr('data-content'))
                    jcOption['content'] = $this.attr('data-content');
                if (typeof jcOption['buttons'] == 'undefined')
                    jcOption['buttons'] = {};

                jcOption['$target'] = $this;
                if ($this.attr('href') && Object.keys(jcOption['buttons']).length == 0) {
                    var buttons = {};
                    if (jconfirm.defaults && jconfirm.defaults.defaultButtons) {
                        buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons, jconfirm.defaults.defaultButtons || {});
                    } else {
                        buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons);
                    }
                    var firstBtn = Object.keys(buttons)[0];
                    jcOption['buttons'] = buttons;
                    jcOption.buttons[firstBtn].action = function () {
                        location.href = $this.attr('href');
                    };
                }
                jcOption['closeIcon'] = false;
                $.confirm(jcOption);
            });
        });
        return $(this);
    };
    $.confirm = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string')
            options = {
                content: options,
                title: (option2) ? option2 : false,
            };

        if (typeof options['buttons'] != 'object')
            options['buttons'] = {};

        if (Object.keys(options['buttons']).length == 0) {
            var buttons = {};
            if (jconfirm.defaults && jconfirm.defaults.defaultButtons) {
                buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons, jconfirm.defaults.defaultButtons || {});
            } else {
                buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons);
            }
            options['buttons'] = buttons;
        }

        /*
         *  Alias of jconfirm
         */
        return jconfirm(options);
    };
    $.alert = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string')
            options = {
                content: options,
                title: (option2) ? option2 : false,
            };

        if (typeof options.buttons != 'object')
            options.buttons = {};

        if (Object.keys(options['buttons']).length == 0) {
            var buttons = {};
            if (jconfirm.defaults && jconfirm.defaults.defaultButtons)
                buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons, jconfirm.defaults.defaultButtons || {});
            else
                buttons = $.extend({}, jconfirm.pluginDefaults.defaultButtons);
            var firstBtn = Object.keys(buttons)[0];
            options['buttons'][firstBtn] = buttons[firstBtn];
        }
        /*
         *  Alias of jconfirm
         */
        return jconfirm(options);
    };
    $.dialog = function (options, option2) {
        if (typeof options === 'undefined') options = {};
        if (typeof options === 'string')
            options = {
                content: options,
                title: (option2) ? option2 : false,
                closeIcon: function () {
                    // Just close the modal
                }
            };

        options['buttons'] = {}; // purge buttons

        if (typeof options['closeIcon'] == 'undefined') {
            // Dialog must have a closeIcon.
            options['closeIcon'] = function () {
            }
        }
        /*
         *  Alias of jconfirm
         */
        options.confirmKeys = [13];
        return jconfirm(options);
    };

    jconfirm = function (options) {
        if (typeof options === 'undefined') options = {};
        /*
         * initial function for calling.
         */
        if (jconfirm.defaults) {
            /*
             * Merge global defaults with plugin defaults
             */
            $.extend(jconfirm.pluginDefaults, jconfirm.defaults);
        }

        /*
         * merge options with plugin defaults.
         */
        options = $.extend({}, jconfirm.pluginDefaults, options);
        var instance = new Jconfirm(options);
        jconfirm.instances.push(instance);
        return instance;
    };
    Jconfirm = function (options) {
        /*
         * constructor function Jconfirm,
         * options = user options.
         */
        $.extend(this, options);
        this._init();
    };
    Jconfirm.prototype = {
        _init: function () {
            var that = this;

            this._lastFocused = $('body').find(':focus');
            this._id = Math.round(Math.random() * 99999);
            setTimeout(function () {
                that.open();
            }, 0);
        },
        _buildHTML: function () {
            var that = this;

            // prefix the animation string and store in animationParsed
            this._parseAnimation(this.animation, 'o');
            this._parseAnimation(this.closeAnimation, 'c');
            this._parseBgDismissAnimation(this.backgroundDismissAnimation);
            this._parseColumnClass(this.columnClass);
            this._parseTheme(this.theme);

            /*
             * Append html.
             */
            var template = $(this.template);
            var type = '';
            switch (this.type) {
                case 'default':
                case 'blue':
                case 'green':
                case 'red':
                case 'orange':
                case 'purple':
                case 'dark':
                    type = 'jconfirm-' + this.type;
                    break;
                default:
                    console.warn('Invalid dialog type: ' + this.type);
            }

            template.find('.jconfirm-box').addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(type);
            if (this.typeAnimated)
                template.find('.jconfirm-box').addClass('jconfirm-type-animated');

            if (this.useBootstrap) {
                template.find('.jc-bs3-row').addClass(this.bootstrapClasses.row);
                template.find('.jconfirm-box-container').addClass(this.columnClassParsed);

                if (this.containerFluid)
                    template.find('.jc-bs3-container').addClass(this.bootstrapClasses.containerFluid);
                else
                    template.find('.jc-bs3-container').addClass(this.bootstrapClasses.container);
            } else {
                template.find('.jconfirm-box').css('width', this.boxWidth);
            }

            if (this.titleClass)
                template.find('.jconfirm-title-c').addClass(this.titleClass);

            template.addClass(this.themeParsed);
            var ariaLabel = 'jconfirm-box' + this._id;
            template.find('.jconfirm-box').attr('aria-labelledby', ariaLabel).attr('tabindex', -1);
            template.find('.jconfirm-content').attr('id', ariaLabel);
            if (this.bgOpacity != null)
                template.find('.jconfirm-bg').css('opacity', this.bgOpacity);
            if (this.rtl)
                template.addClass('jconfirm-rtl');

            this.$el = template.appendTo(this.container);
            this.$jconfirmBoxContainer = this.$el.find('.jconfirm-box-container');
            this.$jconfirmBox = this.$body = this.$el.find('.jconfirm-box');
            this.$jconfirmBg = this.$el.find('.jconfirm-bg');
            this.$title = this.$el.find('.jconfirm-title');
            this.$content = this.$el.find('div.jconfirm-content');
            this.$contentPane = this.$el.find('.jconfirm-content-pane');
            this.$icon = this.$el.find('.jconfirm-icon-c');
            this.$closeIcon = this.$el.find('.jconfirm-closeIcon');
            // this.$content.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$btnc = this.$el.find('.jconfirm-buttons');
            this.$scrollPane = this.$el.find('.jconfirm-scrollpane');

            // for loading content via URL
            this._contentReady = $.Deferred();
            this._modalReady = $.Deferred();

            this.setTitle();
            this.setIcon();
            this._setButtons();
            this._parseContent();

            if (this.isAjax)
                this.showLoading(false);

            $.when(this._contentReady, this._modalReady).then(function () {
                if (that.isAjaxLoading)
                    setTimeout(function () {
                        that.isAjaxLoading = false;
                        that.setContent();
                        that.setTitle();
                        that.setIcon();
                        setTimeout(function () {
                            that.hideLoading(false);
                        }, 100);
                        if (typeof that.onContentReady == 'function')
                            that.onContentReady();
                    }, 50);
                else {
                    that.setContent();
                    that.setTitle();
                    that.setIcon();
                    if (typeof that.onContentReady == 'function')
                        that.onContentReady();
                }

                // start countdown after content has loaded.
                if (that.autoClose)
                    that._startCountDown();
            });

            // initial hash for comparison
            that._contentHash = this._hash(that.$content.html());
            that._contentHeight = this.$content.height();

            this._watchContent();
            this.setDialogCenter();

            if (this.animation == 'none') {
                this.animationSpeed = 1;
                this.animationBounce = 1;
            }

            this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
            this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
            this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
        },
        themeParsed: '',
        _themePrefix: 'jconfirm-',
        setTheme: function (theme) {
            var that = this;
            var previous = this.theme;
            this.theme = theme || this.theme;
            this._parseTheme(this.theme);
            if (previous)
                this.$el.removeClass(previous);
            this.$el.addClass(this.themeParsed);
            this.theme = theme;
        },
        _parseTheme: function (theme) {
            var that = this;
            theme = theme.split(',');
            $.each(theme, function (k, a) {
                if (a.indexOf(that._themePrefix) == -1)
                    theme[k] = that._themePrefix + $.trim(a);
            });
            this.themeParsed = theme.join(' ').toLowerCase();
        },
        backgroundDismissAnimationParsed: '',
        _bgDismissPrefix: 'jconfirm-hilight-',
        _parseBgDismissAnimation: function (bgDismissAnimation) {
            var animation = bgDismissAnimation.split(',');
            var that = this;
            $.each(animation, function (k, a) {
                if (a.indexOf(that._bgDismissPrefix) == -1)
                    animation[k] = that._bgDismissPrefix + $.trim(a);
            });
            this.backgroundDismissAnimationParsed = animation.join(' ').toLowerCase();
        },
        animationParsed: '',
        closeAnimationParsed: '',
        _animationPrefix: 'jconfirm-animation-',
        setAnimation: function (animation) {
            this.animation = animation || this.animation;
            this._parseAnimation(this.animation, 'o');
        },
        _parseAnimation: function (animation, which) {
            which = which || 'o'; // parse what animation and store where. open or close?
            var animations = animation.split(',');
            var that = this;
            $.each(animations, function (k, a) {
                if (a.indexOf(that._animationPrefix) == -1)
                    animations[k] = that._animationPrefix + $.trim(a);
            });
            var a_string = animations.join(' ').toLowerCase();
            if (which == 'o')
                this.animationParsed = a_string;
            else
                this.closeAnimationParsed = a_string;

            return a_string;
        },
        setCloseAnimation: function (closeAnimation) {
            this.closeAnimation = closeAnimation || this.closeAnimation;
            this._parseAnimation(this.closeAnimation, 'c');
        },
        setAnimationSpeed: function (speed) {
            this.animationSpeed = speed || this.animationSpeed;
            // this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
        },
        columnClassParsed: '',
        setColumnClass: function (colClass) {
            this.columnClass = colClass || this.columnClass;
            this._parseColumnClass(this.columnClass);
            this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
        },
        _parseColumnClass: function (colClass) {
            colClass = colClass.toLowerCase();
            var p;
            switch (colClass) {
                case 'xl':
                case 'xlarge':
                    p = 'col-md-12';
                    break;
                case 'l':
                case 'large':
                    p = 'col-md-8 col-md-offset-2';
                    break;
                case 'm':
                case 'medium':
                    p = 'col-md-6 col-md-offset-3';
                    break;
                case 's':
                case 'small':
                    p = 'col-md-4 col-md-offset-4';
                    break;
                case 'xs':
                case 'xsmall':
                    p = 'col-md-2 col-md-offset-5';
                    break;
                default:
                    p = colClass;
            }
            this.columnClassParsed = p;
        },
        _hash: function (a) {
            return btoa((encodeURIComponent(a)));
        },
        _watchContent: function () {
            var that = this;
            if (this._timer) clearInterval(this._timer);
            this._timer = setInterval(function () {
                var now = that._hash(that.$content.html());
                var nowHeight = that.$content.height();
                if (that._contentHash != now || that._contentHeight != nowHeight) {
                    that._contentHash = now;
                    that._contentHeight = nowHeight;
                    that.setDialogCenter();
                    that._imagesLoaded();
                }
            }, this.watchInterval);
        },
        _hilightAnimating: false,
        _hiLightModal: function () {
            var that = this;
            if (this._hilightAnimating)
                return;

            that.$body.addClass('hilight');
            // var duration = parseFloat(that.$body.css('animation-duration')) || 0;
            var duration = 2; // 2 seconds default
            this._hilightAnimating = true;
            setTimeout(function () {
                that._hilightAnimating = false;
                that.$body.removeClass('hilight');
            }, duration * 1000);
        },
        _bindEvents: function () {
            var that = this;
            this.boxClicked = false;

            this.$scrollPane.click(function (e) { // Ignore propagated clicks
                if (!that.boxClicked) { // Background clicked
                    /*
                     If backgroundDismiss is a function and its return value is truthy
                     proceed to close the modal.
                     */
                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.backgroundDismiss == 'function')
                        str = that.backgroundDismiss();
                    else
                        str = that.backgroundDismiss;

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!(str) == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }

                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == 'undefined') || !!(btnResponse);
                    }

                    if (shouldClose)
                        that.close();
                    else
                        that._hiLightModal();
                }
                that.boxClicked = false;
            });

            this.$jconfirmBox.click(function (e) {
                that.boxClicked = true;
            });

            setTimeout(function () {
                $(window).on('keyup.' + that._id, function (e) {
                    that.reactOnKey(e);
                });
            }, 10);

            $(window).on('resize.' + this._id, function () {
                that.setDialogCenter(true);
            });
        },
        _cubic_bezier: '0.36, 0.55, 0.19',
        _getCSS: function (speed, bounce) {
            return {
                '-webkit-transition-duration': speed / 1000 + 's',
                'transition-duration': speed / 1000 + 's',
                '-webkit-transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')',
                'transition-timing-function': 'cubic-bezier(' + this._cubic_bezier + ', ' + bounce + ')'
            };
        },
        _imagesLoaded: function () {
            // detect if the image is loaded by checking on its height.
            var that = this;
            if (that.imageLoadInterval)
                clearInterval(that.imageLoadInterval);

            $.each(this.$content.find('img:not(.loaded)'), function (i, a) {
                that.imageLoadInterval = setInterval(function () {
                    var h = $(a).css('height');
                    if (h !== '0px') {
                        $(a).addClass('loaded');
                        clearInterval(that.imageLoadInterval);
                        that.setDialogCenter();
                    }
                }, 40);
            });
        },
        _setButtons: function () {
            var that = this;
            /*
             * Settings up buttons
             */

            var total_buttons = 0;
            if (typeof this.buttons !== 'object')
                this.buttons = {};

            $.each(this.buttons, function (key, button) {
                total_buttons += 1;
                if (typeof button === 'function') {
                    that.buttons[key] = button = {
                        action: button
                    };
                }

                that.buttons[key].text = button.text || key;
                that.buttons[key].btnClass = button.btnClass || 'btn-default';
                that.buttons[key].action = button.action || function () {
                    };
                that.buttons[key].keys = button.keys || [];

                $.each(that.buttons[key].keys, function (i, a) {
                    that.buttons[key].keys[i] = a.toLowerCase();
                });

                var button_element = $('<button type="button" class="btn ' + that.buttons[key].btnClass + '">' + that.buttons[key].text + '</button>').click(function (e) {
                    e.preventDefault();
                    var res = that.buttons[key].action.apply(that);
                    that.onAction(key);
                    that._stopCountDown();
                    if (typeof res === 'undefined' || res)
                        that.close();
                });
                that.buttons[key].el = button_element;
                that.buttons[key].setText = function (text) {
                    button_element.html(text);
                };
                that.buttons[key].addClass = function (className) {
                    button_element.addClass(className);
                };
                that.buttons[key].removeClass = function (className) {
                    button_element.removeClass(className);
                };
                that.buttons[key].disable = function () {
                    button_element.prop('disabled', true);
                };
                that.buttons[key].enable = function () {
                    button_element.prop('disabled', false);
                };
                that.buttons[key].show = function () {
                    button_element.css('display', '');
                    that.setDialogCenter();
                };
                that.buttons[key].hide = function () {
                    button_element.css('display', 'none');
                    that.setDialogCenter();
                };
                /*
                 Buttons are prefixed with $_ or $$ for quick access
                 */
                that['$_' + key] = that['$$' + key] = button_element;
                that.$btnc.append(button_element);
            });

            if (total_buttons === 0) this.$btnc.hide();
            if (this.closeIcon === null && total_buttons === 0) {
                /*
                 in case when no buttons are present & closeIcon is null, closeIcon is set to true,
                 set closeIcon to true to explicitly tell to hide the close icon
                 */
                this.closeIcon = true;
            }

            if (this.closeIcon) {
                if (this.closeIconClass) {
                    // user requires a custom class.
                    var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
                    this.$closeIcon.html(closeHtml);
                }

                this.$closeIcon.click(function (e) {
                    e.preventDefault();

                    var buttonName = false;
                    var shouldClose = false;
                    var str;

                    if (typeof that.closeIcon == 'function') {
                        str = that.closeIcon();
                    } else {
                        str = that.closeIcon;
                    }

                    if (typeof str == 'string' && typeof that.buttons[str] != 'undefined') {
                        buttonName = str;
                        shouldClose = false;
                    } else if (typeof str == 'undefined' || !!(str) == true) {
                        shouldClose = true;
                    } else {
                        shouldClose = false;
                    }
                    if (buttonName) {
                        var btnResponse = that.buttons[buttonName].action.apply(that);
                        shouldClose = (typeof btnResponse == 'undefined') || !!(btnResponse);
                    }
                    if (shouldClose) {
                        that.close();
                    }
                });
                this.$closeIcon.show();
            } else {
                this.$closeIcon.hide();
            }
        },
        setTitle: function (string, force) {
            force = force || false;

            if (typeof string !== 'undefined')
                if (typeof string == 'string')
                    this.title = string;
                else if (typeof string == 'function') {
                    if (typeof string.promise == 'function')
                        console.error('Promise was returned from title function, this is not supported.');

                    var response = string();
                    if (typeof response == 'string')
                        this.title = response;
                    else
                        this.title = false;
                } else
                    this.title = false;

            if (this.isAjax && !force)
                return;

            this.$title.html(this.title || '');
        },
        setIcon: function (iconClass, force) {
            force = force || false;

            if (typeof iconClass !== 'undefined')
                if (typeof iconClass == 'string')
                    this.icon = iconClass;
                else if (typeof iconClass === 'function') {
                    var response = iconClass();
                    if (typeof response == 'string')
                        this.icon = response;
                    else
                        this.icon = false;
                }
                else
                    this.icon = false;

            if (this.isAjax && !force)
                return;

            this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : '');
        },
        setContentPrepend: function (string, force) {
            this.contentParsed = string + this.contentParsed;
            if (this.isAjaxLoading && !force)
                return;

            this.$content.prepend(string);
        },
        setContentAppend: function (string, force) {
            this.contentParsed = this.contentParsed + string;
            if (this.isAjaxLoading && !force)
                return;

            this.$content.append(string);
        },
        setContent: function (string, force) {
            force = force || false;
            var that = this;
            this.contentParsed = (typeof string == 'undefined') ? this.contentParsed : string;
            if (this.isAjaxLoading && !force)
                return;

            this.$content.html(this.contentParsed);
            this.setDialogCenter();
            setTimeout(function () {
                that.$body.find('input[autofocus]:visible:first').focus();
            }, 100);
        },
        loadingSpinner: false,
        showLoading: function (disableButtons) {
            this.loadingSpinner = true;
            this.$jconfirmBox.addClass('loading');
            if (disableButtons)
                this.$btnc.find('button').prop('disabled', true);

            this.setDialogCenter();
        },
        hideLoading: function (enableButtons) {
            this.loadingSpinner = false;
            this.$jconfirmBox.removeClass('loading');
            if (enableButtons)
                this.$btnc.find('button').prop('disabled', false);

            this.setDialogCenter();
        },
        ajaxResponse: false,
        contentParsed: '',
        isAjax: false,
        isAjaxLoading: false,
        _parseContent: function () {
            var that = this;
            var e = '&nbsp;';

            if (typeof this.content == 'function') {
                var res = this.content.apply(this);
                if (typeof res == 'string') {
                    this.content = res;
                }
                else if (typeof res == 'object' && typeof res.always == 'function') {
                    // this is ajax loading via promise
                    this.isAjax = true;
                    this.isAjaxLoading = true;
                    res.always(function (data, status, xhr) {
                        that.ajaxResponse = {
                            data: data,
                            status: status,
                            xhr: xhr
                        };
                        that._contentReady.resolve(data, status, xhr);
                        if (typeof that.contentLoaded == 'function')
                            that.contentLoaded(data, status, xhr);
                    });
                    this.content = e;
                } else {
                    this.content = e;
                }
            }

            if (typeof this.content == 'string' && this.content.substr(0, 4).toLowerCase() === 'url:') {
                this.isAjax = true;
                this.isAjaxLoading = true;
                var u = this.content.substring(4, this.content.length);
                $.get(u).done(function (html) {
                    that.contentParsed = html;
                }).always(function (data, status, xhr) {
                    that.ajaxResponse = {
                        data: data,
                        status: status,
                        xhr: xhr
                    };
                    that._contentReady.resolve(data, status, xhr);
                    if (typeof that.contentLoaded == 'function')
                        that.contentLoaded(data, status, xhr);
                });
            }

            if (!this.content)
                this.content = e;

            if (!this.isAjax) {
                this.contentParsed = this.content;
                this.setContent(this.contentParsed);
                that._contentReady.resolve();
            }
        },
        _stopCountDown: function () {
            clearInterval(this.autoCloseInterval);
            if (this.$cd)
                this.$cd.remove();
        },
        _startCountDown: function () {
            var that = this;
            var opt = this.autoClose.split('|');
            if (opt.length !== 2) {
                console.error('Invalid option for autoClose. example \'close|10000\'');
                return false;
            }

            var button_key = opt[0];
            var time = parseInt(opt[1]);
            if (typeof this.buttons[button_key] === 'undefined') {
                console.error('Invalid button key \'' + button_key + '\' for autoClose');
                return false;
            }

            var seconds = time / 1000;
            this.$cd = $('<span class="countdown"> (' + seconds + ')</span>')
                .appendTo(this['$_' + button_key]);

            this.autoCloseInterval = setInterval(function () {
                that.$cd.html(' (' + (seconds -= 1) + ') ');
                if (seconds === 0) {
                    that['$$' + button_key].trigger('click');
                    that._stopCountDown();
                }
            }, 1000);
        },
        _getKey: function (key) {
            // very necessary keys.
            switch (key) {
                case 192:
                    return 'tilde';
                case 13:
                    return 'enter';
                case 16:
                    return 'shift';
                case 9:
                    return 'tab';
                case 20:
                    return 'capslock';
                case 17:
                    return 'ctrl';
                case 91:
                    return 'win';
                case 18:
                    return 'alt';
                case 27:
                    return 'esc';
                case 32:
                    return 'space';
            }

            // only trust alphabets with this.
            var initial = String.fromCharCode(key);
            if (/^[A-z0-9]+$/.test(initial))
                return initial.toLowerCase();
            else
                return false;
        },
        reactOnKey: function (e) {
            var that = this;

            /*
             Prevent keyup event if the dialog is not last!
             */
            var a = $('.jconfirm');
            if (a.eq(a.length - 1)[0] !== this.$el[0])
                return false;

            var key = e.which;
            /*
             Do not react if Enter or Space is pressed on input elements
             */
            if (this.$content.find(':input').is(':focus') && /13|32/.test(key))
                return false;

            var keyChar = this._getKey(key);

            // If esc is pressed
            if (keyChar === 'esc' && this.escapeKey) {
                if (this.escapeKey === true) {
                    this.$scrollPane.trigger('click');
                }
                else if (typeof this.escapeKey === 'string' || typeof this.escapeKey === 'function') {
                    var buttonKey;
                    if (typeof this.escapeKey === 'function') {
                        buttonKey = this.escapeKey();
                    } else {
                        buttonKey = this.escapeKey;
                    }

                    if (buttonKey)
                        if (typeof this.buttons[buttonKey] === 'undefined') {
                            console.warn('Invalid escapeKey, no buttons found with key ' + buttonKey);
                        } else {
                            this['$_' + buttonKey].trigger('click');
                        }
                }
            }

            // check if any button is listening to this key.
            $.each(this.buttons, function (key, button) {
                if (button.keys.indexOf(keyChar) != -1) {
                    that['$_' + key].trigger('click');
                }
            });
        },
        setDialogCenter: function () {
            var contentHeight;
            var paneHeight;
            var style;

            contentHeight = 0;
            paneHeight = 0;
            if (this.$contentPane.css('display') != 'none') {
                contentHeight = this.$content.outerHeight() || 0;
                paneHeight = this.$contentPane.height() || 0;
            }

            // if the child has margin top
            var children = this.$content.children();
            if (children.length != 0) {
                var marginTopChild = parseInt(children.eq(0).css('margin-top'));
                if (marginTopChild)
                    contentHeight += marginTopChild;
            }

            if (paneHeight == 0)
                paneHeight = contentHeight;

            var windowHeight = $(window).height();
            var boxHeight;

            boxHeight = (this.$body.outerHeight() - paneHeight) + contentHeight;

            var topMargin = (windowHeight - boxHeight) / 2;
            var minMargin = 100; // todo: include this in options
            if (boxHeight > (windowHeight - minMargin)) {
                style = {
                    'margin-top': minMargin / 2,
                    'margin-bottom': minMargin / 2
                };
                $('body').addClass('jconfirm-no-scroll-' + this._id);
            } else {
                style = {
                    'margin-top': topMargin,
                    'margin-bottom': minMargin / 2,
                };
                $('body').removeClass('jconfirm-no-scroll-' + this._id);
            }

            this.$contentPane.css({
                'height': contentHeight
            }).scrollTop(0);
            this.$body.css(style);
        },
        _unwatchContent: function () {
            clearInterval(this._timer);
        },
        close: function () {
            var that = this;

            if (typeof this.onClose === 'function')
                this.onClose();

            this._unwatchContent();
            clearInterval(this.imageLoadInterval);

            /*
             unbind the window resize & keyup event.
             */
            $(window).unbind('resize.' + this._id);
            $(window).unbind('keyup.' + this._id);
            $('body').removeClass('jconfirm-no-scroll-' + this._id);
            this.$body.addClass(this.closeAnimationParsed);
            this.$jconfirmBg.addClass('jconfirm-bg-h');
            var closeTimer = (this.closeAnimation == 'none') ? 1 : this.animationSpeed;
            setTimeout(function () {
                that.$el.remove();

                console.log(that._lastFocused);
                if (that._lastFocused.length && $.contains(document, that._lastFocused[0])) {
                    var st = $(window).scrollTop();
                    var ot = that._lastFocused.offset().top;
                    var wh = $(window).height();
                    if (!(ot > st && ot < (st + wh))) {
                        $('html, body').animate({
                            scrollTop: (ot - Math.round((wh / 3))),
                        }, that.animationSpeed, 'swing', function () {
                            that._lastFocused.focus();
                        });
                    } else {
                        that._lastFocused.focus();
                    }
                }

                if (typeof that.onDestroy == 'function')
                    that.onDestroy();
            }, closeTimer * 0.40);

            return true;
        },
        open: function () {
            // var that = this;
            this._buildHTML();
            this._bindEvents();
            this._open();

            return true;
        },
        _open: function () {
            var that = this;
            if (typeof that.onOpenBefore == 'function')
                that.onOpenBefore();
            this.$body.removeClass(this.animationParsed);
            this.$jconfirmBg.removeClass('jconfirm-bg-h');
            this.$body.focus();
            setTimeout(function () {
                that.$body.css(that._getCSS(that.animationSpeed, 1));
                that.$body.css({
                    'transition-property': that.$body.css('transition-property') + ', margin'
                });
                that._modalReady.resolve();
                if (typeof that.onOpen === 'function')
                    that.onOpen();
            }, this.animationSpeed);
        },
        isClosed: function () {
            return this.$el.css('display') === '';
        },
        isOpen: function () {
            return !this.isClosed();
        },
        toggle: function () {
            if (!this.isOpen())
                this.open();
            else
                this.close();
        }
    };

    jconfirm.instances = [];
    jconfirm.pluginDefaults = {
        template: '' +
        '<div class="jconfirm">' +
        '<div class="jconfirm-bg jconfirm-bg-h"></div>' +
        '<div class="jconfirm-scrollpane">' +
        '<div class="jc-bs3-container">' +
        '<div class="jc-bs3-row">' +
        '<div class="jconfirm-box-container">' +
        '<div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1">' +
        '<div class="jconfirm-closeIcon">&times;</div>' +
        '<div class="jconfirm-title-c">' +
        '<span class="jconfirm-icon-c"></span>' +
        '<span class="jconfirm-title"></span></div>' +
        '<div class="jconfirm-content-pane">' +
        '<div class="jconfirm-content"></div>' +
        '</div>' +
        '<div class="jconfirm-buttons">' +
        '</div>' +
        '<div class="jconfirm-clear">' +
        '</div></div></div></div></div></div></div>',
        title: 'Hello',
        titleClass: '',
        type: 'default',
        typeAnimated: true,
        content: 'Are you sure to continue?',
        buttons: {},
        defaultButtons: {
            ok: {
                action: function () {
                }
            },
            close: {
                action: function () {
                }
            },
        },
        contentLoaded: function () {
        },
        icon: '',
        bgOpacity: null,
        theme: 'light',
        animation: 'zoom',
        closeAnimation: 'scale',
        animationSpeed: 400,
        animationBounce: 1.2,
        escapeKey: true,
        rtl: false,
        container: 'body',
        containerFluid: false,
        backgroundDismiss: false,
        backgroundDismissAnimation: 'shake',
        autoClose: false,
        closeIcon: null,
        closeIconClass: false,
        watchInterval: 100,
        columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',
        boxWidth: '50%',
        useBootstrap: true,
        bootstrapClasses: {
            container: 'container',
            containerFluid: 'container-fluid',
            row: 'row',
        },
        onContentReady: function () {

        },
        onOpenBefore: function () {

        },
        onOpen: function () {

        },
        onClose: function () {

        },
        onDestroy: function () {

        },
        onAction: function () {

        }
    };
})(jQuery);
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
      opts.owlOptions['loop'] = thisElement.children().length >= opts.owlOptions.items;
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
/*!
 * Fotorama 4.6.4 | http://fotorama.io/license/
 */
fotoramaVersion="4.6.4",function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return Ic?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a){var b={};return Ic?b.transform="translate3d("+a+"px,0,0)":b.left=a,b}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return isNaN(a)?b:a}function n(a,b){return m(+String(a).replace(b||"px",""))}function o(a){return/%$/.test(a)?n(a,"%"):e}function p(a,b){return m(o(a)/100*b,n(a))}function q(a){return(!isNaN(n(a))||!isNaN(n(a,"%")))&&a}function r(a,b,c,d){return(a-(d||0))*(b+(c||0))}function s(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function t(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};T(c,d[uc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()}),b.tEnd=!0}}function u(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),t(a))}function v(a,b){if(a.length){var c=a.data();Ic?(a.css(l(0)),c.onEndFn=g,clearTimeout(c.tT)):a.stop();var d=w(b,function(){return j(a)});return a.css(k(d)),d}}function w(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function x(a,b){return Math.round(a+(b-a)/1.5)}function y(){return y.p=y.p||("https:"===c.protocol?"https://":"http://"),y.p}function z(a){var c=b.createElement("a");return c.href=a,c}function A(a,b){if("string"!=typeof a)return a;a=z(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,""),p:y()}:!1}function B(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=y()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:y()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,C(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function C(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Xc]=i[Zc]=i[Yc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function D(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?A(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=n(c.width||a.attr("width")),g=n(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:S(c.thumbratio||n(c.thumbwidth||b&&b.attr("width")||e||f)/n(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=R(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function E(a){return 0===a.offsetWidth&&0===a.offsetHeight}function F(a){return!d.contains(b.documentElement,a)}function G(a,b,c,d){return G.i||(G.i=1,G.ii=[!0]),d=d||G.i,"undefined"==typeof G.ii[d]&&(G.ii[d]=!0),a()?b():G.ii[d]&&setTimeout(function(){G.ii[d]&&G(a,b,c,d)},c||100),G.i++}function H(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function I(a,b,c,d){var e=a.data(),f=e.measures;if(f&&(!e.l||e.l.W!==f.width||e.l.H!==f.height||e.l.r!==f.ratio||e.l.w!==b.w||e.l.h!==b.h||e.l.m!==c||e.l.p!==d)){var g=f.width,i=f.height,j=b.w/b.h,k=f.ratio>=j,l="scaledown"===c,m="contain"===c,n="cover"===c,o=$(d);k&&(l||m)||!k&&n?(g=h(b.w,0,l?g:1/0),i=g/f.ratio):(k&&n||!k&&(l||m))&&(i=h(b.h,0,l?i:1/0),g=i*f.ratio),a.css({width:g,height:i,left:p(o.x,b.w-g),top:p(o.y,b.h-i)}),e.l={W:f.width,H:f.height,r:f.ratio,w:b.w,h:b.h,m:c,p:d}}return!0}function J(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function K(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function L(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function M(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(cb(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onTouchEnd:c.onTouchEnd||g,onEnd:function(c){c.moved||b.call(this,a)}}),{noMove:!0}))})}function N(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function O(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function P(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function Q(a,b,c){a.scrollLeft(b||0).scrollTop(c||0)}function R(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function S(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function T(a,b,c,d){b&&(a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent("on"+b,c))}function U(a){return!!a.getAttribute("disabled")}function V(a){return{tabindex:-1*a+"",disabled:a}}function W(a,b){T(a,"keyup",function(c){U(a)||13==c.keyCode&&b.call(a,c)})}function X(a,b){T(a,"focus",a.onfocusin=function(c){b.call(a,c)},!0)}function Y(a,b){a.preventDefault?a.preventDefault():a.returnValue=!1,b&&a.stopPropagation&&a.stopPropagation()}function Z(a){return a?">":"<"}function $(a){return a=(a+"").split(/\s+/),{x:q(a[0])||bd,y:q(a[1])||bd}}function _(a,b){var c=a.data(),e=Math.round(b.pos),f=function(){c.sliding=!1,(b.onEnd||g)()};"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(e=b.overPos,f=function(){_(a,d.extend({},b,{overPos:b.pos,time:Math.max(Qc,b.time/2)}))});var h=d.extend(k(e),b.width&&{width:b.width});c.sliding=!0,Ic?(a.css(d.extend(l(b.time),h)),b.time>10?u(a,"transform",f,b.time):f()):a.stop().animate(h,b.time,_c,f)}function ab(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&ab.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.removeClass(Rb+" "+Qb),a.stop().addClass(Rb),b.stop().addClass(Qb),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:0,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function bb(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY,a._now=d.now()}function cb(a,c){function e(a){return m=d(a.target),u.checked=p=q=s=!1,k||u.flow||a.touches&&a.touches.length>1||a.which>1||ed&&ed.type!==a.type&&gd||(p=c.select&&m.is(c.select,t))?p:(o="touchstart"===a.type,q=m.is("a, a *",t),n=u.control,r=u.noMove||u.noSwipe||n?16:u.snap?0:4,bb(a),l=ed=a,fd=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),(c.onStart||g).call(t,a,{control:n,$target:m}),k=u.flow=!0,void((!o||u.go)&&Y(a)))}function f(a){if(a.touches&&a.touches.length>1||Nc&&!a.isPrimary||fd!==a.type||!k)return k&&h(),void(c.onTouchEnd||g)();bb(a);var b=Math.abs(a._x-l._x),d=Math.abs(a._y-l._y),e=b-d,f=(u.go||u.x||e>=0)&&!u.noSwipe,i=0>e;o&&!u.checked?(k=f)&&Y(a):(Y(a),(c.onMove||g).call(t,a,{touch:o})),!s&&Math.sqrt(Math.pow(b,2)+Math.pow(d,2))>r&&(s=!0),u.checked=u.checked||f||i}function h(a){(c.onTouchEnd||g)();var b=k;u.control=k=!1,b&&(u.flow=!1),!b||q&&!u.checked||(a&&Y(a),gd=!0,clearTimeout(hd),hd=setTimeout(function(){gd=!1},1e3),(c.onEnd||g).call(t,{moved:s,$target:m,control:n,touch:o,startEvent:l,aborted:!a||"MSPointerCancel"===a.type}))}function i(){u.flow||setTimeout(function(){u.flow=!0},10)}function j(){u.flow&&setTimeout(function(){u.flow=!1},Pc)}var k,l,m,n,o,p,q,r,s,t=a[0],u={};return Nc?(T(t,"MSPointerDown",e),T(b,"MSPointerMove",f),T(b,"MSPointerCancel",h),T(b,"MSPointerUp",h)):(T(t,"touchstart",e),T(t,"touchmove",f),T(t,"touchend",h),T(b,"touchstart",i),T(b,"touchend",j),T(b,"touchcancel",j),Ec.on("scroll",j),a.on("mousedown",e),Fc.on("mousemove",f).on("mouseup",h)),a.on("click","a",function(a){u.checked&&Y(a)}),u}function db(a,b){function c(c,d){A=!0,j=l=c._x,q=c._now,p=[[q,j]],m=n=D.noMove||d?0:v(a,(b.getPos||g)()),(b.onStart||g).call(B,c)}function e(a,b){s=D.min,t=D.max,u=D.snap,w=a.altKey,A=z=!1,y=b.control,y||C.sliding||c(a)}function f(d,e){D.noSwipe||(A||c(d),l=d._x,p.push([d._now,l]),n=m-(j-l),o=K(n,s,t),s>=n?n=x(n,s):n>=t&&(n=x(n,t)),D.noMove||(a.css(k(n)),z||(z=!0,e.touch||Nc||a.addClass(ec)),(b.onMove||g).call(B,d,{pos:n,edge:o})))}function i(e){if(!D.noSwipe||!e.moved){A||c(e.startEvent,!0),e.touch||Nc||a.removeClass(ec),r=d.now();for(var f,i,j,k,o,q,v,x,y,z=r-Pc,C=null,E=Qc,F=b.friction,G=p.length-1;G>=0;G--){if(f=p[G][0],i=Math.abs(f-z),null===C||j>i)C=f,k=p[G][1];else if(C===z||i>j)break;j=i}v=h(n,s,t);var H=k-l,I=H>=0,J=r-C,K=J>Pc,L=!K&&n!==m&&v===n;u&&(v=h(Math[L?I?"floor":"ceil":"round"](n/u)*u,s,t),s=t=v),L&&(u||v===n)&&(y=-(H/J),E*=h(Math.abs(y),b.timeLow,b.timeHigh),o=Math.round(n+y*E/F),u||(v=o),(!I&&o>t||I&&s>o)&&(q=I?s:t,x=o-q,u||(v=q),x=h(v+.03*x,q-50,q+50),E=Math.abs((n-x)/(y/F)))),E*=w?10:1,(b.onEnd||g).call(B,d.extend(e,{moved:e.moved||K&&u,pos:n,newPos:v,overPos:x,time:E}))}}var j,l,m,n,o,p,q,r,s,t,u,w,y,z,A,B=a[0],C=a.data(),D={};return D=d.extend(cb(b.$wrap,d.extend({},b,{onStart:e,onMove:f,onEnd:i})),D)}function eb(a,b){var c,e,f,h=a[0],i={prevent:{}};return T(h,Oc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)&&!Math.abs(h),l=Z(0>j),m=e===l,n=d.now(),o=Pc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(Y(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Rc)),(b.onEnd||g)(a,b.shift?l:j)))}),i}function fb(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function gb(a){d.Fotorama.instances.push(a),fb()}function hb(a){d.Fotorama.instances.splice(a.index,1),fb()}var ib="fotorama",jb="fullscreen",kb=ib+"__wrap",lb=kb+"--css2",mb=kb+"--css3",nb=kb+"--video",ob=kb+"--fade",pb=kb+"--slide",qb=kb+"--no-controls",rb=kb+"--no-shadows",sb=kb+"--pan-y",tb=kb+"--rtl",ub=kb+"--only-active",vb=kb+"--no-captions",wb=kb+"--toggle-arrows",xb=ib+"__stage",yb=xb+"__frame",zb=yb+"--video",Ab=xb+"__shaft",Bb=ib+"__grab",Cb=ib+"__pointer",Db=ib+"__arr",Eb=Db+"--disabled",Fb=Db+"--prev",Gb=Db+"--next",Hb=ib+"__nav",Ib=Hb+"-wrap",Jb=Hb+"__shaft",Kb=Hb+"--dots",Lb=Hb+"--thumbs",Mb=Hb+"__frame",Nb=Mb+"--dot",Ob=Mb+"--thumb",Pb=ib+"__fade",Qb=Pb+"-front",Rb=Pb+"-rear",Sb=ib+"__shadow",Tb=Sb+"s",Ub=Tb+"--left",Vb=Tb+"--right",Wb=ib+"__active",Xb=ib+"__select",Yb=ib+"--hidden",Zb=ib+"--fullscreen",$b=ib+"__fullscreen-icon",_b=ib+"__error",ac=ib+"__loading",bc=ib+"__loaded",cc=bc+"--full",dc=bc+"--img",ec=ib+"__grabbing",fc=ib+"__img",gc=fc+"--full",hc=ib+"__dot",ic=ib+"__thumb",jc=ic+"-border",kc=ib+"__html",lc=ib+"__video",mc=lc+"-play",nc=lc+"-close",oc=ib+"__caption",pc=ib+"__caption__wrap",qc=ib+"__spinner",rc='" tabindex="0" role="button',sc=d&&d.fn.jquery.split(".");if(!sc||sc[0]<1||1==sc[0]&&sc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var tc={},uc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),vc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},wc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)vc.ok=!0;else for(var xc=0,yc=wc.length;yc>xc;xc++)if(vc.prefix=wc[xc],"undefined"!=typeof b[vc.prefix+"CancelFullScreen"]){vc.ok=!0;break}vc.ok&&(vc.event=vc.prefix+"fullscreenchange",vc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},vc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},vc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var zc,Ac={lines:12,length:5,width:2,radius:7,corners:1,rotate:15,color:"rgba(128, 128, 128, .75)",hwaccel:!0},Bc={top:"auto",left:"auto",className:""};!function(a,b){zc=b()}(this,function(){function a(a,c){var d,e=b.createElement(a||"div");for(d in c)e[d]=c[d];return e}function c(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function d(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=m.substring(0,m.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return o[e]||(p.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",p.cssRules.length),o[e]=1),e}function f(a,b){var c,d,f=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<n.length;d++)if(c=n[d]+b,f[c]!==e)return c;return f[b]!==e?b:void 0}function g(a,b){for(var c in b)a.style[f(a,c)||c]=b[c];return a}function h(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)a[d]===e&&(a[d]=c[d])}return a}function i(a){for(var b={x:a.offsetLeft,y:a.offsetTop};a=a.offsetParent;)b.x+=a.offsetLeft,b.y+=a.offsetTop;return b}function j(a,b){return"string"==typeof a?a:a[b%a.length]}function k(a){return"undefined"==typeof this?new k(a):void(this.opts=h(a||{},k.defaults,q))}function l(){function b(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}p.addRule(".spin-vml","behavior:url(#default#VML)"),k.prototype.lines=function(a,d){function e(){return g(b("group",{coordsize:k+" "+k,coordorigin:-i+" "+-i}),{width:k,height:k})}function f(a,f,h){c(m,c(g(e(),{rotation:360/d.lines*a+"deg",left:~~f}),c(g(b("roundrect",{arcsize:d.corners}),{width:i,height:d.width,left:d.radius,top:-d.width>>1,filter:h}),b("fill",{color:j(d.color,a),opacity:d.opacity}),b("stroke",{opacity:0}))))}var h,i=d.length+d.width,k=2*i,l=2*-(d.width+d.length)+"px",m=g(e(),{position:"absolute",top:l,left:l});if(d.shadow)for(h=1;h<=d.lines;h++)f(h,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(h=1;h<=d.lines;h++)f(h);return c(a,m)},k.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var m,n=["webkit","Moz","ms","O"],o={},p=function(){var d=a("style",{type:"text/css"});return c(b.getElementsByTagName("head")[0],d),d.sheet||d.styleSheet}(),q={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};k.defaults={},h(k.prototype,{spin:function(b){this.stop();var c,d,e=this,f=e.opts,h=e.el=g(a(0,{className:f.className}),{position:f.position,width:0,zIndex:f.zIndex}),j=f.radius+f.length+f.width;if(b&&(b.insertBefore(h,b.firstChild||null),d=i(b),c=i(h),g(h,{left:("auto"==f.left?d.x-c.x+(b.offsetWidth>>1):parseInt(f.left,10)+j)+"px",top:("auto"==f.top?d.y-c.y+(b.offsetHeight>>1):parseInt(f.top,10)+j)+"px"})),h.setAttribute("role","progressbar"),e.lines(h,e.opts),!m){var k,l=0,n=(f.lines-1)*(1-f.direction)/2,o=f.fps,p=o/f.speed,q=(1-f.opacity)/(p*f.trail/100),r=p/f.lines;!function s(){l++;for(var a=0;a<f.lines;a++)k=Math.max(1-(l+(f.lines-a)*r)%p*q,f.opacity),e.opacity(h,a*f.direction+n,k,f);e.timeout=e.el&&setTimeout(s,~~(1e3/o))}()}return e},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=e),this},lines:function(b,e){function f(b,c){return g(a(),{position:"absolute",width:e.length+e.width+"px",height:e.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/e.lines*i+e.rotate)+"deg) translate("+e.radius+"px,0)",borderRadius:(e.corners*e.width>>1)+"px"})}for(var h,i=0,k=(e.lines-1)*(1-e.direction)/2;i<e.lines;i++)h=g(a(),{position:"absolute",top:1+~(e.width/2)+"px",transform:e.hwaccel?"translate3d(0,0,0)":"",opacity:e.opacity,animation:m&&d(e.opacity,e.trail,k+i*e.direction,e.lines)+" "+1/e.speed+"s linear infinite"}),e.shadow&&c(h,g(f("#000","0 0 4px #000"),{top:"2px"})),c(b,c(h,f(j(e.color,i),"0 0 1px rgba(0,0,0,.1)")));return b},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var r=g(a("group"),{behavior:"url(#default#VML)"});return!f(r,"transform")&&r.adj?l():m=f(r,"animation"),k});var Cc,Dc,Ec=d(a),Fc=d(b),Gc="quirks"===c.hash.replace("#",""),Hc=uc.csstransforms3d,Ic=Hc&&!Gc,Jc=Hc||"CSS1Compat"===b.compatMode,Kc=vc.ok,Lc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Mc=!Ic||Lc,Nc=navigator.msPointerEnabled,Oc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Pc=250,Qc=300,Rc=1400,Sc=5e3,Tc=2,Uc=64,Vc=500,Wc=333,Xc="$stageFrame",Yc="$navDotFrame",Zc="$navThumbFrame",$c="auto",_c=f([.1,0,.25,1]),ad=99999,bd="50%",cd={width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Tc,glimpse:0,fit:"contain",position:bd,thumbposition:bd,nav:"dots",navposition:"bottom",navwidth:null,thumbwidth:Uc,thumbheight:Uc,thumbmargin:Tc,thumbborderwidth:Tc,thumbfit:"cover",allowfullscreen:!1,transition:"slide",clicktransition:null,transitionduration:Qc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!1,enableifsingleframe:!1,controlsonstart:!0,shuffle:!1,direction:"ltr",shadows:!0,spinner:null},dd={left:!0,right:!0,down:!1,up:!1,space:!1,home:!1,end:!1};G.stop=function(a){G.ii[a]=!1};var ed,fd,gd,hd;jQuery.Fotorama=function(a,e){function f(){d.each(yd,function(a,b){if(!b.i){b.i=me++;var c=A(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=B(b,yd,ie),C(yd,{img:d.img,thumb:d.thumb},b.i,ie)}}})}function g(a){return Zd[a]||ie.fullScreen}function i(a){var b="keydown."+ib,c=ib+je,d="keydown."+c,f="resize."+c+" orientationchange."+c;a?(Fc.on(d,function(a){var b,c;Cd&&27===a.keyCode?(b=!0,md(Cd,!0,!0)):(ie.fullScreen||e.keyboard&&!ie.index)&&(27===a.keyCode?(b=!0,ie.cancelFullScreen()):a.shiftKey&&32===a.keyCode&&g("space")||37===a.keyCode&&g("left")||38===a.keyCode&&g("up")?c="<":32===a.keyCode&&g("space")||39===a.keyCode&&g("right")||40===a.keyCode&&g("down")?c=">":36===a.keyCode&&g("home")?c="<<":35===a.keyCode&&g("end")&&(c=">>")),(b||c)&&Y(a),c&&ie.show({index:c,slow:a.altKey,user:!0})}),ie.index||Fc.off(b).on(b,"textarea, input, select",function(a){!Dc.hasClass(jb)&&a.stopPropagation()}),Ec.on(f,ie.resize)):(Fc.off(d),Ec.off(f))}function j(b){b!==j.f&&(b?(a.html("").addClass(ib+" "+ke).append(qe).before(oe).before(pe),gb(ie)):(qe.detach(),oe.detach(),pe.detach(),a.html(ne.urtext).removeClass(ke),hb(ie)),i(b),j.f=b)}function m(){yd=ie.data=yd||P(e.data)||D(a),zd=ie.size=yd.length,!xd.ok&&e.shuffle&&O(yd),f(),Je=y(Je),zd&&j(!0)}function o(){var a=2>zd&&!e.enableifsingleframe||Cd;Me.noMove=a||Sd,Me.noSwipe=a||!e.swipe,!Wd&&se.toggleClass(Bb,!e.click&&!Me.noMove&&!Me.noSwipe),Nc&&qe.toggleClass(sb,!Me.noSwipe)}function t(a){a===!0&&(a=""),e.autoplay=Math.max(+a||Sc,1.5*Vd)}function u(){function a(a,c){b[a?"add":"remove"].push(c)}ie.options=e=R(e),Sd="crossfade"===e.transition||"dissolve"===e.transition,Md=e.loop&&(zd>2||Sd&&(!Wd||"slide"!==Wd)),Vd=+e.transitionduration||Qc,Yd="rtl"===e.direction,Zd=d.extend({},e.keyboard&&dd,e.keyboard);var b={add:[],remove:[]};zd>1||e.enableifsingleframe?(Nd=e.nav,Pd="top"===e.navposition,b.remove.push(Xb),we.toggle(!!e.arrows)):(Nd=!1,we.hide()),Rb(),Bd=new zc(d.extend(Ac,e.spinner,Bc,{direction:Yd?-1:1})),Gc(),Hc(),e.autoplay&&t(e.autoplay),Td=n(e.thumbwidth)||Uc,Ud=n(e.thumbheight)||Uc,Ne.ok=Pe.ok=e.trackpad&&!Mc,o(),ed(e,[Le]),Od="thumbs"===Nd,Od?(lc(zd,"navThumb"),Ad=Be,he=Zc,J(oe,d.Fotorama.jst.style({w:Td,h:Ud,b:e.thumbborderwidth,m:e.thumbmargin,s:je,q:!Jc})),ye.addClass(Lb).removeClass(Kb)):"dots"===Nd?(lc(zd,"navDot"),Ad=Ae,he=Yc,ye.addClass(Kb).removeClass(Lb)):(Nd=!1,ye.removeClass(Lb+" "+Kb)),Nd&&(Pd?xe.insertBefore(re):xe.insertAfter(re),wc.nav=!1,wc(Ad,ze,"nav")),Qd=e.allowfullscreen,Qd?(De.prependTo(re),Rd=Kc&&"native"===Qd):(De.detach(),Rd=!1),a(Sd,ob),a(!Sd,pb),a(!e.captions,vb),a(Yd,tb),a("always"!==e.arrows,wb),Xd=e.shadows&&!Mc,a(!Xd,rb),qe.addClass(b.add.join(" ")).removeClass(b.remove.join(" ")),Ke=d.extend({},e)}function x(a){return 0>a?(zd+a%zd)%zd:a>=zd?a%zd:a}function y(a){return h(a,0,zd-1)}function z(a){return Md?x(a):y(a)}function E(a){return a>0||Md?a-1:!1}function U(a){return zd-1>a||Md?a+1:!1}function $(){Me.min=Md?-1/0:-r(zd-1,Le.w,e.margin,Fd),Me.max=Md?1/0:-r(0,Le.w,e.margin,Fd),Me.snap=Le.w+e.margin}function bb(){Oe.min=Math.min(0,Le.nw-ze.width()),Oe.max=0,ze.toggleClass(Bb,!(Oe.noMove=Oe.min===Oe.max))}function cb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=yd[x(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function fb(a,b,c,d){(!$d||"*"===$d&&d===Ld)&&(a=q(e.width)||q(a)||Vc,b=q(e.height)||q(b)||Wc,ie.resize({width:a,ratio:e.ratio||c||a/b},0,d!==Ld&&"*"))}function Pb(a,b,c,f,g,h){cb(a,b,function(a,i,j,k,l,m){function n(a){var b=x(i);fd(a,{index:b,src:w,frame:yd[b]})}function o(){t.remove(),d.Fotorama.cache[w]="error",j.html&&"stage"===b||!y||y===w?(!w||j.html||r?"stage"===b&&(k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc),n("load"),fb()):(k.trigger("f:error").removeClass(ac).addClass(_b),n("error")),m.state="error",!(zd>1&&yd[i]===j)||j.html||j.deleted||j.video||r||(j.deleted=!0,ie.splice(i,1))):(j[v]=w=y,Pb([i],b,c,f,g,!0))}function p(){d.Fotorama.measures[w]=u.measures=d.Fotorama.measures[w]||{width:s.width,height:s.height,ratio:s.width/s.height},fb(u.measures.width,u.measures.height,u.measures.ratio,i),t.off("load error").addClass(fc+(r?" "+gc:"")).prependTo(k),I(t,(d.isFunction(c)?c():c)||Le,f||j.fit||e.fit,g||j.position||e.position),d.Fotorama.cache[w]=m.state="loaded",setTimeout(function(){k.trigger("f:load").removeClass(ac+" "+_b).addClass(bc+" "+(r?cc:dc)),"stage"===b?n("load"):(j.thumbratio===$c||!j.thumbratio&&e.thumbratio===$c)&&(j.thumbratio=u.measures.ratio,vd())},0)}function q(){var a=10;G(function(){return!fe||!a--&&!Mc},function(){p()})}if(k){var r=ie.fullScreen&&j.full&&j.full!==j.img&&!m.$full&&"stage"===b;if(!m.$img||h||r){var s=new Image,t=d(s),u=t.data();m[r?"$full":"$img"]=t;var v="stage"===b?r?"full":"img":"thumb",w=j[v],y=r?null:j["stage"===b?"thumb":"img"];if("navThumb"===b&&(k=m.$wrap),!w)return void o();d.Fotorama.cache[w]?!function z(){"error"===d.Fotorama.cache[w]?o():"loaded"===d.Fotorama.cache[w]?setTimeout(q,0):setTimeout(z,100)}():(d.Fotorama.cache[w]="*",t.on("load",q).on("error",o)),m.state="",s.src=w}}})}function Qb(a){Ie.append(Bd.spin().el).appendTo(a)}function Rb(){Ie.detach(),Bd&&Bd.stop()}function Sb(){var a=Dd[Xc];a&&!a.data().state&&(Qb(a),a.on("f:load f:error",function(){a.off("f:load f:error"),Rb()}))}function ec(a){W(a,sd),X(a,function(){setTimeout(function(){Q(ye)},0),Rc({time:Vd,guessIndex:d(this).data().eq,minMax:Oe})})}function lc(a,b){cb(a,b,function(a,c,e,f,g,h){if(!f){f=e[g]=qe[g].clone(),h=f.data(),h.data=e;var i=f[0];"stage"===b?(e.html&&d('<div class="'+kc+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(f),e.caption&&d(N(oc,N(pc,e.caption))).appendTo(f),e.video&&f.addClass(zb).append(Fe.clone()),X(i,function(){setTimeout(function(){Q(re)},0),pd({index:h.eq,user:!0})}),te=te.add(f)):"navDot"===b?(ec(i),Ae=Ae.add(f)):"navThumb"===b&&(ec(i),h.$wrap=f.children(":first"),Be=Be.add(f),e.video&&h.$wrap.append(Fe.clone()))}})}function sc(a,b,c,d){return a&&a.length&&I(a,b,c,d)}function tc(a){cb(a,"stage",function(a,b,c,f,g,h){if(f){var i=x(b),j=c.fit||e.fit,k=c.position||e.position;h.eq=i,Re[Xc][i]=f.css(d.extend({left:Sd?0:r(b,Le.w,e.margin,Fd)},Sd&&l(0))),F(f[0])&&(f.appendTo(se),md(c.$video)),sc(h.$img,Le,j,k),sc(h.$full,Le,j,k)}})}function uc(a,b){if("thumbs"===Nd&&!isNaN(a)){var c=-a,f=-a+Le.nw;Be.each(function(){var a=d(this),g=a.data(),h=g.eq,i=function(){return{h:Ud,w:g.w}},j=i(),k=yd[h]||{},l=k.thumbfit||e.thumbfit,m=k.thumbposition||e.thumbposition;j.w=g.w,g.l+g.w<c||g.l>f||sc(g.$img,j,l,m)||b&&Pb([h],"navThumb",i,l,m)})}}function wc(a,b,c){if(!wc[c]){var f="nav"===c&&Od,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=yd.length;f>e;e++)if(c.data===yd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(f){var a=d(this),b=a.data(),c=Math.round(Ud*b.data.thumbratio)||Td;b.l=g,b.w=c,a.css({width:c}),g+=c+e.thumbmargin}})),wc[c]=!0}}function xc(a){return a-Se>Le.w/3}function yc(a){return!(Md||Je+a&&Je-zd+a||Cd)}function Gc(){var a=yc(0),b=yc(1);ue.toggleClass(Eb,a).attr(V(a)),ve.toggleClass(Eb,b).attr(V(b))}function Hc(){Ne.ok&&(Ne.prevent={"<":yc(0),">":yc(1)})}function Lc(a){var b,c,d=a.data();return Od?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*e.thumbmargin,max:-b+Le.w-c-10*e.thumbmargin}}function Oc(a){var b=Dd[he].data();_(Ce,{time:1.2*a,pos:b.l,width:b.w-2*e.thumbborderwidth})}function Rc(a){var b=yd[a.guessIndex][he];if(b){var c=Oe.min!==Oe.max,d=a.minMax||c&&Lc(Dd[he]),e=c&&(a.keep&&Rc.l?Rc.l:h((a.coo||Le.nw/2)-Lc(b).c,d.min,d.max)),f=c&&h(e,Oe.min,Oe.max),g=1.1*a.time;_(ze,{time:g,pos:f||0,onEnd:function(){uc(f,!0)}}),ld(ye,K(f,Oe.min,Oe.max)),Rc.l=e}}function Tc(){_c(he),Qe[he].push(Dd[he].addClass(Wb))}function _c(a){for(var b=Qe[a];b.length;)b.shift().removeClass(Wb)}function bd(a){var b=Re[a];d.each(Ed,function(a,c){delete b[x(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function cd(a){Fd=Gd=Je;var b=Dd[Xc];b&&(_c(Xc),Qe[Xc].push(b.addClass(Wb)),a||ie.show.onEnd(!0),v(se,0,!0),bd(Xc),tc(Ed),$(),bb())}function ed(a,b){a&&d.each(b,function(b,c){c&&d.extend(c,{width:a.width||c.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:S(a.ratio)})})}function fd(b,c){a.trigger(ib+":"+b,[ie,c])}function gd(){clearTimeout(hd.t),fe=1,e.stopautoplayontouch?ie.stopAutoplay():ce=!0}function hd(){fe&&(e.stopautoplayontouch||(id(),jd()),hd.t=setTimeout(function(){fe=0},Qc+Pc))}function id(){ce=!(!Cd&&!de)}function jd(){if(clearTimeout(jd.t),G.stop(jd.w),!e.autoplay||ce)return void(ie.autoplay&&(ie.autoplay=!1,fd("stopautoplay")));ie.autoplay||(ie.autoplay=!0,fd("startautoplay"));var a=Je,b=Dd[Xc].data();jd.w=G(function(){return b.state||a!==Je},function(){jd.t=setTimeout(function(){if(!ce&&a===Je){var b=Kd,c=yd[b][Xc].data();jd.w=G(function(){return c.state||b!==Kd},function(){ce||b!==Kd||ie.show(Md?Z(!Yd):Kd)})}},e.autoplay)})}function kd(){ie.fullScreen&&(ie.fullScreen=!1,Kc&&vc.cancel(le),Dc.removeClass(jb),Cc.removeClass(jb),a.removeClass(Zb).insertAfter(pe),Le=d.extend({},ee),md(Cd,!0,!0),rd("x",!1),ie.resize(),Pb(Ed,"stage"),Q(Ec,ae,_d),fd("fullscreenexit"))}function ld(a,b){Xd&&(a.removeClass(Ub+" "+Vb),b&&!Cd&&a.addClass(b.replace(/^|\s/g," "+Tb+"--")))}function md(a,b,c){b&&(qe.removeClass(nb),Cd=!1,o()),a&&a!==Cd&&(a.remove(),fd("unloadvideo")),c&&(id(),jd())}function nd(a){qe.toggleClass(qb,a)}function od(a){if(!Me.flow){var b=a?a.pageX:od.x,c=b&&!yc(xc(b))&&e.click;od.p!==c&&re.toggleClass(Cb,c)&&(od.p=c,od.x=b)}}function pd(a){clearTimeout(pd.t),e.clicktransition&&e.clicktransition!==e.transition?setTimeout(function(){var b=e.transition;ie.setOptions({transition:e.clicktransition}),Wd=b,pd.t=setTimeout(function(){ie.show(a)},10)},0):ie.show(a)}function qd(a,b){var c=a.target,f=d(c);f.hasClass(mc)?ie.playVideo():c===Ee?ie.toggleFullScreen():Cd?c===He&&md(Cd,!0,!0):b?nd():e.click&&pd({index:a.shiftKey||Z(xc(a._x)),slow:a.altKey,user:!0})}function rd(a,b){Me[a]=Oe[a]=b}function sd(a){var b=d(this).data().eq;pd({index:b,slow:a.altKey,user:!0,coo:a._x-ye.offset().left})}function td(a){pd({index:we.index(this)?">":"<",slow:a.altKey,user:!0})}function ud(a){X(a,function(){setTimeout(function(){Q(re)},0),nd(!1)})}function vd(){if(m(),u(),!vd.i){vd.i=!0;var a=e.startindex;(a||e.hash&&c.hash)&&(Ld=L(a||c.hash.replace(/^#/,""),yd,0===ie.index||a,a)),Je=Fd=Gd=Hd=Ld=z(Ld)||0}if(zd){if(wd())return;Cd&&md(Cd,!0),Ed=[],bd(Xc),vd.ok=!0,ie.show({index:Je,time:0}),ie.resize()}else ie.destroy()}function wd(){return!wd.f===Yd?(wd.f=Yd,Je=zd-1-Je,ie.reverse(),!0):void 0}function xd(){xd.ok||(xd.ok=!0,fd("ready"))}Cc=d("html"),Dc=d("body");var yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd,Sd,Td,Ud,Vd,Wd,Xd,Yd,Zd,$d,_d,ae,be,ce,de,ee,fe,ge,he,ie=this,je=d.now(),ke=ib+je,le=a[0],me=1,ne=a.data(),oe=d("<style></style>"),pe=d(N(Yb)),qe=d(N(kb)),re=d(N(xb)).appendTo(qe),se=(re[0],d(N(Ab)).appendTo(re)),te=d(),ue=d(N(Db+" "+Fb+rc)),ve=d(N(Db+" "+Gb+rc)),we=ue.add(ve).appendTo(re),xe=d(N(Ib)),ye=d(N(Hb)).appendTo(xe),ze=d(N(Jb)).appendTo(ye),Ae=d(),Be=d(),Ce=(se.data(),ze.data(),d(N(jc)).appendTo(ze)),De=d(N($b+rc)),Ee=De[0],Fe=d(N(mc)),Ge=d(N(nc)).appendTo(re),He=Ge[0],Ie=d(N(qc)),Je=!1,Ke={},Le={},Me={},Ne={},Oe={},Pe={},Qe={},Re={},Se=0,Te=[];
qe[Xc]=d(N(yb)),qe[Zc]=d(N(Mb+" "+Ob+rc,N(ic))),qe[Yc]=d(N(Mb+" "+Nb+rc,N(hc))),Qe[Xc]=[],Qe[Zc]=[],Qe[Yc]=[],Re[Xc]={},qe.addClass(Ic?mb:lb).toggleClass(qb,!e.controlsonstart),ne.fotorama=this,ie.startAutoplay=function(a){return ie.autoplay?this:(ce=de=!1,t(a||e.autoplay),jd(),this)},ie.stopAutoplay=function(){return ie.autoplay&&(ce=de=!0,jd()),this},ie.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?Gd+1:"<"===b?Gd-1:"<<"===b?0:">>"===b?zd-1:b,b=isNaN(b)?L(b,yd,!0):b,b="undefined"==typeof b?Je||0:b,ie.activeIndex=Je=z(b),Id=E(Je),Jd=U(Je),Kd=x(Je+(Yd?-1:1)),Ed=[Je,Id,Jd],Gd=Md?b:Je;var c=Math.abs(Hd-Gd),d=w(a.time,function(){return Math.min(Vd*(1+(c-1)/12),2*Vd)}),f=a.overPos;a.slow&&(d*=10);var g=Dd;ie.activeFrame=Dd=yd[Je];var i=g===Dd&&!a.user;md(Cd,Dd.i!==yd[x(Fd)].i),lc(Ed,"stage"),tc(Mc?[Gd]:[Gd,E(Gd),U(Gd)]),rd("go",!0),i||fd("show",{user:a.user,time:d}),ce=!0;var j=ie.show.onEnd=function(b){if(!j.ok){if(j.ok=!0,b||cd(!0),i||fd("showend",{user:a.user}),!b&&Wd&&Wd!==e.transition)return ie.setOptions({transition:Wd}),void(Wd=!1);Sb(),Pb(Ed,"stage"),rd("go",!1),Hc(),od(),id(),jd()}};if(Sd){var k=Dd[Xc],l=Je!==Hd?yd[Hd][Xc]:null;ab(k,l,te,{time:d,method:e.transition,onEnd:j},Te)}else _(se,{pos:-r(Gd,Le.w,e.margin,Fd),overPos:f,time:d,onEnd:j});if(Gc(),Nd){Tc();var m=y(Je+h(Gd-Hd,-1,1));Rc({time:d,coo:m!==Je&&a.coo,guessIndex:"undefined"!=typeof a.coo?m:Je,keep:i}),Od&&Oc(d)}return be="undefined"!=typeof Hd&&Hd!==Je,Hd=Je,e.hash&&be&&!ie.eq&&H(Dd.id||Je+1),this},ie.requestFullScreen=function(){return Qd&&!ie.fullScreen&&(_d=Ec.scrollTop(),ae=Ec.scrollLeft(),Q(Ec),rd("x",!0),ee=d.extend({},Le),a.addClass(Zb).appendTo(Dc.addClass(jb)),Cc.addClass(jb),md(Cd,!0,!0),ie.fullScreen=!0,Rd&&vc.request(le),ie.resize(),Pb(Ed,"stage"),Sb(),fd("fullscreenenter")),this},ie.cancelFullScreen=function(){return Rd&&vc.is()?vc.cancel(b):kd(),this},ie.toggleFullScreen=function(){return ie[(ie.fullScreen?"cancel":"request")+"FullScreen"]()},T(b,vc.event,function(){!yd||vc.is()||Cd||kd()}),ie.resize=function(a){if(!yd)return this;var b=arguments[1]||0,c=arguments[2];ed(ie.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:R(a),[Le,c||ie.fullScreen||e]);var d=Le.width,f=Le.height,g=Le.ratio,i=Ec.height()-(Nd?ye.height():0);return q(d)&&(qe.addClass(ub).css({width:d,minWidth:Le.minwidth||0,maxWidth:Le.maxwidth||ad}),d=Le.W=Le.w=qe.width(),Le.nw=Nd&&p(e.navwidth,d)||d,e.glimpse&&(Le.w-=Math.round(2*(p(e.glimpse,d)||0))),se.css({width:Le.w,marginLeft:(Le.W-Le.w)/2}),f=p(f,i),f=f||g&&d/g,f&&(d=Math.round(d),f=Le.h=Math.round(h(f,p(Le.minheight,i),p(Le.maxheight,i))),re.stop().animate({width:d,height:f},b,function(){qe.removeClass(ub)}),cd(),Nd&&(ye.stop().animate({width:Le.nw},b),Rc({guessIndex:Je,time:b,keep:!0}),Od&&wc.nav&&Oc(b)),$d=c||!0,xd())),Se=re.offset().left,this},ie.setOptions=function(a){return d.extend(e,a),vd(),this},ie.shuffle=function(){return yd&&O(yd)&&vd(),this},ie.destroy=function(){return ie.cancelFullScreen(),ie.stopAutoplay(),yd=ie.data=null,j(),Ed=[],bd(Xc),vd.ok=!1,this},ie.playVideo=function(){var a=Dd,b=a.video,c=Je;return"object"==typeof b&&a.videoReady&&(Rd&&ie.fullScreen&&ie.cancelFullScreen(),G(function(){return!vc.is()||c!==Je},function(){c===Je&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Xc]),qe.addClass(nb),Cd=a.$video,o(),we.blur(),De.blur(),fd("loadvideo"))})),this},ie.stopVideo=function(){return md(Cd,!0,!0),this},re.on("mousemove",od),Me=db(se,{onStart:gd,onMove:function(a,b){ld(re,b.edge)},onTouchEnd:hd,onEnd:function(a){ld(re);var b=(Nc&&!ge||a.touch)&&e.arrows&&"always"!==e.arrows;if(a.moved||b&&a.pos!==a.newPos&&!a.control){var c=s(a.newPos,Le.w,e.margin,Fd);ie.show({index:c,time:Sd?Vd:a.time,overPos:a.overPos,user:!0})}else a.aborted||a.control||qd(a.startEvent,b)},timeLow:1,timeHigh:1,friction:2,select:"."+Xb+", ."+Xb+" *",$wrap:re}),Oe=db(ze,{onStart:gd,onMove:function(a,b){ld(ye,b.edge)},onTouchEnd:hd,onEnd:function(a){function b(){Rc.l=a.newPos,id(),jd(),uc(a.newPos,!0)}if(a.moved)a.pos!==a.newPos?(ce=!0,_(ze,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),uc(a.newPos),Xd&&ld(ye,K(a.newPos,Oe.min,Oe.max))):b();else{var c=a.$target.closest("."+Mb,ze)[0];c&&sd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:ye}),Ne=eb(re,{shift:!0,onEnd:function(a,b){gd(),hd(),ie.show({index:b,slow:a.altKey})}}),Pe=eb(ye,{onEnd:function(a,b){gd(),hd();var c=v(ze)+.25*b;ze.css(k(h(c,Oe.min,Oe.max))),Xd&&ld(ye,K(c,Oe.min,Oe.max)),Pe.prevent={"<":c>=Oe.max,">":c<=Oe.min},clearTimeout(Pe.t),Pe.t=setTimeout(function(){Rc.l=c,uc(c,!0)},Pc),uc(c)}}),qe.hover(function(){setTimeout(function(){fe||nd(!(ge=!0))},0)},function(){ge&&nd(!(ge=!1))}),M(we,function(a){Y(a),td.call(this,a)},{onStart:function(){gd(),Me.control=!0},onTouchEnd:hd}),we.each(function(){W(this,function(a){td.call(this,a)}),ud(this)}),W(Ee,ie.toggleFullScreen),ud(Ee),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){ie[b]=function(){return yd=yd||[],"load"!==b?Array.prototype[b].apply(yd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(yd=P(arguments[0])),vd(),ie}}),vd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b,!0):G(function(){return!E(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},cd,a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d.Fotorama.measures={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){{var b,c="";tc.escape}return c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(tc.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?a.p+"youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?a.p+"player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s&&"custom"!=a.type?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>\n'},d(function(){d("."+ib+':not([data-auto="false"])').fotorama()})}(window,document,location,"undefined"!=typeof jQuery&&jQuery);window.fbAsyncInit = function () {
    FB.init({
        appId: '1054355541261554',
        cookie: true,  // enable cookies to allow the server to access
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.5' // use version 2.0
    });
};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function loginFb(){
FB.login(function (response) {
        if (response.authResponse) {
            FB.api('/me?fields=id,name,email,pictute', function (response) {
				
				//window.location.href='https://graph.facebook.com/'+response.id+'/picture?width=140&height=110';
				
                $.ajax({
					data:{email:response.email,name:response.name,url:'dangnhap'},
					type:'post',
					error:function(e){
						console.log(e);
						return false;
					},
					url:'ajax/ajax_facebook.php',
					success:function(data){	
					//alert(data);
						window.location.href = "";
					}
				})
            });
        } else {
            // alert('Login failed! Please try again.');
        }
    }, {scope: 'email,user_likes,offline_access,read_stream,user_photos,user_videos,publish_stream'});
    return false;
}
	
	
	function logout()
{
    gapi.auth.signOut();
    location.reload();
}
function login() 
{
  var myParams = {
    'clientid' : '424240407147-nrg8r31agipopkvbmij1o4g0f08aki6e.apps.googleusercontent.com',
    'cookiepolicy' : 'single_host_origin',
    'callback' : 'loginCallback',
    'approvalprompt':'force',
    'scope' : 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
  };
  gapi.auth.signIn(myParams);
}
 
function loginCallback(result)
{
    if(result['status']['signed_in'])
    {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp)
        {
            var email = '';
			
			
            if(resp['emails'])
            {
                for(i = 0; i < resp['emails'].length; i++)
                {
                    if(resp['emails'][i]['type'] == 'account')
                    {
                        email = resp['emails'][i]['value'];
						
                    }
                }
            }				
			var str = "Name:" + resp['displayName'] + "<br>";
            str += "Image:" + resp['image']['url'] + "<br>";
            str += "<img src='" + resp['image']['url'] + "' /><br>";
 
            str += "URL:" + resp['url'] + "<br>";
            str += "Email:" + email + "<br>";
			alert("email:"+ email +" name:"+resp['displayName'] );
			$.ajax({
				data:{email:email,name:resp['displayName'],url:'dangnhap'},
				type:'post',
				
				error:function(e){
					console.log(e);
				},
				url:'ajax/ajax_google.php',
				success:function(data){
					alert(data);
					window.location.href='';
					return false;
							
				}
			})
			return false;
 
           
        });
 
    }
 
}

function onLoadCallback()
{
    gapi.client.setApiKey('');
    gapi.client.load('plus', 'v1',function(){});
}
 (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
     })();	