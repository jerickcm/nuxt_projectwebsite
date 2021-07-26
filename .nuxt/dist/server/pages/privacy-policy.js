exports.ids = [64,2,15,17,18];
exports.modules = {

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(267);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3c0eddd7", content, true)

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(269);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("8f7a87bc", content, true)

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(294);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("04324442", content, true, context)
};

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(296);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("32efccb3", content, true, context)
};

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(298);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1bde20f9", content, true, context)
};

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(300);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e7e3f94", content, true, context)
};

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VChipGroup/VChipGroup.sass
var VChipGroup = __webpack_require__(266);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(268);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(59);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(111);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities


const BaseSlideGroup = Object(mixins["a" /* default */])(VItemGroup["a" /* BaseItemGroup */], mobile["a" /* default */]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: resize["a" /* default */],
    Touch: touch["a" /* default */]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    internalItemsLength: 0,
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    isSwipingHorizontal: false,
    isSwiping: false,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    canTouch() {
      return typeof window !== 'undefined';
    },

    __cachedNext() {
      return this.genTransition('next');
    },

    __cachedPrev() {
      return this.genTransition('prev');
    },

    classes() {
      return { ...VItemGroup["a" /* BaseItemGroup */].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },

    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing || Math.abs(this.scrollOffset) > 0;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && (this.isOverflowing || Math.abs(this.scrollOffset) > 0);
      }
    },

    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },

    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }

  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',

    scrollOffset(val) {
      this.$refs.content.style.transform = `translateX(${-val}px)`;
    }

  },

  beforeUpdate() {
    this.internalItemsLength = (this.$children || []).length;
  },

  updated() {
    if (this.internalItemsLength === (this.$children || []).length) return;
    this.setWidths();
  },

  methods: {
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content'
      }, this.$slots.default);
    },

    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },

    genIcon(location) {
      let icon = location;

      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }

      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(VIcon["a" /* default */], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },

    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },

    genTransition(location) {
      return this.$createElement(transitions["c" /* VFadeTransition */], [this.genIcon(location)]);
    },

    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper'
      }, [this.genContent()]);
    },

    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },

    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },

    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },

    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },

    onTouchMove(e) {
      if (!this.canTouch) return;

      if (!this.isSwiping) {
        // only calculate disableSwipeHorizontal during the first onTouchMove invoke
        // in order to ensure disableSwipeHorizontal value is consistent between onTouchStart and onTouchEnd
        const diffX = e.touchmoveX - e.touchstartX;
        const diffY = e.touchmoveY - e.touchstartY;
        this.isSwipingHorizontal = Math.abs(diffX) > Math.abs(diffY);
        this.isSwiping = true;
      }

      if (this.isSwipingHorizontal) {
        // sliding horizontally
        this.scrollOffset = this.startX - e.touchmoveX; // temporarily disable window vertical scrolling

        document.documentElement.style.overflowY = 'hidden';
      }
    },

    onTouchEnd() {
      if (!this.canTouch) return;
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);

      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }

      this.isSwiping = false; // rollback whole page scrolling to default

      document.documentElement.style.removeProperty('overflow-y');
    },

    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },

    scrollIntoView
    /* istanbul ignore next */
    () {
      if (!this.selectedItem && this.items.length) {
        const lastItemPosition = this.items[this.items.length - 1].$el.getBoundingClientRect();
        const wrapperPosition = this.$refs.wrapper.getBoundingClientRect();

        if (this.$vuetify.rtl && wrapperPosition.right < lastItemPosition.right || !this.$vuetify.rtl && wrapperPosition.left > lastItemPosition.left) {
          this.scrollTo('prev');
        }
      }

      if (!this.selectedItem) {
        return;
      }

      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = this.calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = this.calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },

    calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
      const clientWidth = selectedElement.clientWidth;
      const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;

      if (rtl) {
        currentScrollOffset = -currentScrollOffset;
      }

      const totalWidth = widths.wrapper + currentScrollOffset;
      const itemOffset = clientWidth + offsetLeft;
      const additionalOffset = clientWidth * 0.4;

      if (offsetLeft <= currentScrollOffset) {
        currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
      } else if (totalWidth <= itemOffset) {
        currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
      }

      return rtl ? -currentScrollOffset : currentScrollOffset;
    },

    calculateCenteredOffset(selectedElement, widths, rtl) {
      const {
        offsetLeft,
        clientWidth
      } = selectedElement;

      if (rtl) {
        const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
        return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      } else {
        const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
        return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      }
    },

    scrollTo
    /* istanbul ignore next */
    (location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },

    setWidths
    /* istanbul ignore next */
    () {
      window.requestAnimationFrame(() => {
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        }; // https://github.com/vuetifyjs/vuetify/issues/13212
        // We add +1 to the wrappers width to prevent an issue where the `clientWidth`
        // gets calculated wrongly by the browser if using a different zoom-level.

        this.isOverflowing = this.widths.wrapper + 1 < this.widths.content;
        this.scrollIntoView();
      });
    }

  },

  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }

});
/* harmony default export */ var VSlideGroup_VSlideGroup = (BaseSlideGroup.extend({
  name: 'v-slide-group',

  provide() {
    return {
      slideGroup: this
    };
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/colorable/index.js
var colorable = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js
// Styles
 // Extensions

 // Mixins

 // Utilities


/* @vue/component */

/* harmony default export */ var VChipGroup_VChipGroup = __webpack_exports__["a"] = (Object(mixins["a" /* default */])(BaseSlideGroup, colorable["a" /* default */]).extend({
  name: 'v-chip-group',

  provide() {
    return {
      chipGroup: this
    };
  },

  props: {
    column: Boolean
  },
  computed: {
    classes() {
      return { ...BaseSlideGroup.options.computed.classes.call(this),
        'v-chip-group': true,
        'v-chip-group--column': this.column
      };
    }

  },
  watch: {
    column(val) {
      if (val) this.scrollOffset = 0;
      this.$nextTick(this.onResize);
    }

  },
  methods: {
    genData() {
      return this.setTextColor(this.color, { ...BaseSlideGroup.options.methods.genData.call(this)
      });
    }

  }
}));

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_mixins_delayable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], _mixins_toggleable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
/* @vue/component */
).extend({
  name: 'v-hover',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: undefined
    }
  },
  methods: {
    onMouseEnter() {
      this.runDelay('open');
    },

    onMouseLeave() {
      this.runDelay('close');
    }

  },

  render() {
    if (!this.$scopedSlots.default && this.value === undefined) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover is missing a default scopedSlot or bound value', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        hover: this.isActive
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_3__[/* consoleWarn */ "c"])('v-hover should only contain a single element', this);
      return element;
    }

    if (!this.disabled) {
      element.data = element.data || {};

      this._g(element.data, {
        mouseenter: this.onMouseEnter,
        mouseleave: this.onMouseLeave
      });
    }

    return element;
  }

}));

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(286);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dont-break-out[data-v-1e99ab92]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-1e99ab92]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-1e99ab92]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-1e99ab92]{font-family:\"Barlow-Regular\",sans-serif}.title1[data-v-1e99ab92],.v-application a[data-v-1e99ab92]{text-decoration:none}.v-application a[data-v-1e99ab92]{color:#424dee}.adj-title[data-v-1e99ab92]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-1e99ab92]{border:3px solid #00f}.hr-red[data-v-1e99ab92]{border:3px solid red}.hr-orange[data-v-1e99ab92]{border:3px solid orange}.hr-black[data-v-1e99ab92]{border:3px solid #000}.tempoup[data-v-1e99ab92]{transition:transform .25s}.tempoup[data-v-1e99ab92]:hover{transform:translateY(-10px)}.cover[data-v-1e99ab92]{border-left:.3rem solid green}.cover[data-v-1e99ab92]:hover{border-left:.3rem solid #000}.back[data-v-1e99ab92]{background-color:#add8e6}.back[data-v-1e99ab92]:hover{background-color:green}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(287);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-e79e88ce]{text-decoration:none!important}.hr-brown[data-v-e79e88ce]{border:3px solid brown}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b5dbd42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b5dbd42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b5dbd42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b5dbd42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_3b5dbd42_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-3b5dbd42]{text-decoration:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(289);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.clean[data-v-b2a81be2]{list-style:none!important;list-style-type:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogList.vue?vue&type=template&id=1e99ab92&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"tag-border",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('nuxt-link',{attrs:{"to":"/blog"}},[_c('h2',{staticClass:"ma-0 mt-0 pt-0 blue--text text--darken-5"},[_vm._v("\n          "+_vm._s(_vm.title)+"\n        ")])])],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0 mt-0 pt-0",attrs:{"cols":"12"}},[_c('v-card',{staticClass:"mx-auto",attrs:{"flat":"","max-width":"400"}},[_c('v-list',{attrs:{"flat":""}},[_c('v-list-item-group',{attrs:{"mandatory":""}},_vm._l((_vm.blogs_in_random),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-list-item',{staticClass:" pa-1 ma-1 cover back",class:hover ? '' : ''},[_c('v-list-item-content',{class:{ 'on-hover': hover },attrs:{"dark":"","elevation":hover ? 1 : 2,"link":item.slug}},[_c('nuxt-link',{class:hover ? 'white--text' : 'black--text',staticStyle:{"text-decoration":"none"},attrs:{"to":{
                      path: '/blog/' + item.slug
                    }}},[_c('v-list-item-title',{staticClass:"font-ptsans",staticStyle:{"white-space":"pre-line!important"}},[_c('span',[_vm._v(_vm._s(item['title'])+" ")])])],1)],1)],1)]}}],null,true)})}),1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BlogList.vue?vue&type=template&id=1e99ab92&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BlogList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BlogListvue_type_script_lang_js_ = ({
  props: ['blogs_in_random', 'title'],
  data: () => ({
    model: 11
  }),

  async mounted() {}

});
// CONCATENATED MODULE: ./components/BlogList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BlogListvue_type_script_lang_js_ = (BlogListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(292);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(96);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/BlogList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(293)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BlogListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e99ab92",
  "239ff27b"
  
)

/* harmony default export */ var BlogList = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */











installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemTitle: components_VList["c" /* VListItemTitle */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TagsIndex.vue?vue&type=template&id=e79e88ce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"tag-border",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('h2',{staticClass:"blue--text ma-0 mt-0 pt-0 ",attrs:{"color":"blue"}},[_vm._v("\n        Tags "),(_vm.total_tags)?_c('span',[_vm._v(" ("+_vm._s(_vm.total_tags)+")")]):_vm._e()])])],1),_vm._v(" "),(_vm.load_tags == false)?_c('v-row',[_c('v-col',{staticClass:"pa-0 "},[(_vm.load_tags)?_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}}):_vm._e(),_vm._v(" "),_c('v-card',{attrs:{"flat":""}},[_c('v-card-text',{staticClass:"pa-0 ma-0"},[_c('v-chip-group',{attrs:{"column":"","active-class":"deep-purple accent-4 white--text"}},_vm._l((_vm.tags),function(itm,indx){return _c('v-chip',{key:indx,staticClass:"white--text",attrs:{"to":("/blog/tags/" + (itm.name)),"color":"blue"}},[_vm._v(_vm._s(itm.name))])}),1)],1)],1)],1)],1):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TagsIndex.vue?vue&type=template&id=e79e88ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TagsIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TagsIndexvue_type_script_lang_js_ = ({
  props: ['tags', 'load_tags', 'total_tags'],
  data: () => ({}),

  async mounted() {},

  async fetch() {}

});
// CONCATENATED MODULE: ./components/TagsIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TagsIndexvue_type_script_lang_js_ = (TagsIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js + 1 modules
var VChipGroup = __webpack_require__(291);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/TagsIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(295)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TagsIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e79e88ce",
  "ae9a23a4"
  
)

/* harmony default export */ var TagsIndex = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VChip: VChip["a" /* default */],VChipGroup: VChipGroup["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tools.vue?vue&type=template&id=3b5dbd42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"tag-border",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('h2',{staticClass:"blue--text ma-0 mt-0 pt-0 ",attrs:{"color":"blue"}},[_vm._v("\n        Tools\n      ")])])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"pa-0 "},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-text',{staticClass:"pa-0 ma-0"},[_c('nuxt-link',{staticClass:"nuxtlink green--text",attrs:{"color":"blue","to":"/cryptography/atbash"}},[_c('ul',[_c('li',[_c('h4',{attrs:{"color":"blue"}},[_vm._v("Atbash Cipher")])])])])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tools.vue?vue&type=template&id=3b5dbd42&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tools.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Toolsvue_type_script_lang_js_ = ({
  data: () => ({}),

  async mounted() {},

  async fetch() {}

});
// CONCATENATED MODULE: ./components/Tools.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Toolsvue_type_script_lang_js_ = (Toolsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/Tools.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(297)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Toolsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b5dbd42",
  "106e3d60"
  
)

/* harmony default export */ var Tools = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCard: VCard["a" /* default */],VCardText: components_VCard["c" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Services.vue?vue&type=template&id=b2a81be2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',{staticClass:"blue mt-0",attrs:{"fluid":""}},[_c('v-col',{staticClass:"blue",attrs:{"justify":"center","align":"center"}},[_c('v-container',[_c('v-row',{staticClass:"pt-4",attrs:{"justify":"center","align":"center"}},[_c('v-col',{attrs:{"justify":"center","align":"center"}},[_c('h2',{staticClass:"white--text"},[_vm._v("Our Services")])])],1),_vm._v(" "),_c('v-row',{attrs:{"justify":"center","align":"center"}},[_c('v-col',{attrs:{"cols":"12","xs":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('ul',{staticClass:"clean ml-0 pl-0"},[_c('li',{staticClass:"white--text"},[_c('b',[_vm._v("Branding")])]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Naming")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Brand Creation")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Logo Development")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")])])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","xs":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('ul',{staticClass:"clean ml-0 pl-0"},[_c('li',{staticClass:"white--text"},[_c('strong',[_vm._v("Digital")])]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Web Design & Development")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Application Development")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Mobile Application Development")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Content Management System")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")])])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","xs":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('ul',{staticClass:"clean ml-0 pl-0"},[_c('li',{staticClass:"white--text"},[_c('strong',[_vm._v("Print")])]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Package Design")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Brochures")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Posters")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")])])]),_vm._v(" "),_c('v-col',{attrs:{"cols":"12","xs":"12","sm":"12","md":"3","lg":"3","xl":"3"}},[_c('ul',{staticClass:"clean ml-0 pl-0"},[_c('li',{staticClass:"white--text"},[_c('strong',[_vm._v("Strategy")])]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Brand Analysis")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Focus Group")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Web Analytics")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v("Search Engine Optimization")]),_vm._v(" "),_c('li',{staticClass:"dark--text"},[_vm._v(" ")])])])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Services.vue?vue&type=template&id=b2a81be2&scoped=true&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/Services.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(299)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b2a81be2",
  "df96bf0e"
  
)

/* harmony default export */ var Services = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(429);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("44ee14ae", content, true, context)
};

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_policy_vue_vue_type_style_index_0_id_22f01395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_policy_vue_vue_type_style_index_0_id_22f01395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_policy_vue_vue_type_style_index_0_id_22f01395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_policy_vue_vue_type_style_index_0_id_22f01395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_privacy_policy_vue_vue_type_style_index_0_id_22f01395_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dont-break-out[data-v-22f01395]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-22f01395]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-22f01395]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-22f01395]{font-family:\"Barlow-Regular\",sans-serif}.title1[data-v-22f01395],.v-application a[data-v-22f01395]{text-decoration:none}.v-application a[data-v-22f01395]{color:#424dee}.adj-title[data-v-22f01395]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-22f01395]{border:3px solid #00f}.hr-red[data-v-22f01395]{border:3px solid red}.hr-orange[data-v-22f01395]{border:3px solid orange}.hr-black[data-v-22f01395]{border:3px solid #000}.text-justify[data-v-22f01395]{text-align:justify;text-justify:inter-word}.hr-brown[data-v-22f01395]{border:3px solid brown}.tag-border[data-v-22f01395]{border-right:.4rem solid #add8e6;border-top:.4rem solid #add8e6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy-policy.vue?vue&type=template&id=22f01395&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-row',{staticClass:"mb-5 pb-5"},[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:" mb-0 pb-0"},[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:"pa-0 ma-0",attrs:{"xs":"12","sm":"12","md":"12","lg":"8","xl":"8","cols":"12"}},[_c('v-container',{staticClass:"mr-0 pr-0 tag-border"},[_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('v-container',[_c('h1',{staticClass:"fs-1-3"},[_vm._v("Privacy Policy")]),_vm._v(" "),_c('p',[_vm._v("Last updated: June 20, 2021")]),_vm._v(" "),_c('p',[_vm._v("\n                          This Privacy Policy describes Our policies and\n                          procedures on the collection, use and disclosure of\n                          Your information when You use the Service and tells\n                          You about Your privacy rights and how the law\n                          protects You.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          We use Your Personal data to provide and improve the\n                          Service. By using the Service, You agree to the\n                          collection and use of information in accordance with\n                          this Privacy Policy.\n                        ")]),_vm._v(" "),_c('h1',[_vm._v("Interpretation and Definitions")]),_vm._v(" "),_c('h2',[_vm._v("Interpretation")]),_vm._v(" "),_c('p',[_vm._v("\n                          The words of which the initial letter is capitalized\n                          have meanings defined under the following\n                          conditions. The following definitions shall have the\n                          same meaning regardless of whether they appear in\n                          singular or in plural.\n                        ")]),_vm._v(" "),_c('h2',[_vm._v("Definitions")]),_vm._v(" "),_c('p',[_vm._v("For the purposes of this Privacy Policy:")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_vm._v("Account")]),_vm._v(" means a unique account\n                              created for You to access our Service or parts\n                              of our Service.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Company")]),_vm._v(" (referred to as either\n                              \"the Company\", \"We\",\n                              \"Us\" or \"Our\" in this\n                              Agreement) refers to Project Website.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Cookies")]),_vm._v(" are small files that\n                              are placed on Your computer, mobile device or\n                              any other device by a website, containing the\n                              details of Your browsing history on that website\n                              among its many uses.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Country")]),_vm._v(" refers to: Philippines\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Device")]),_vm._v(" means any device that\n                              can access the Service such as a computer, a\n                              cellphone or a digital tablet.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Personal Data")]),_vm._v(" is any\n                              information that relates to an identified or\n                              identifiable individual.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Service")]),_vm._v(" refers to the Website.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Service Provider")]),_vm._v(" means any\n                              natural or legal person who processes the data\n                              on behalf of the Company. It refers to\n                              third-party companies or individuals employed by\n                              the Company to facilitate the Service, to\n                              provide the Service on behalf of the Company, to\n                              perform services related to the Service or to\n                              assist the Company in analyzing how the Service\n                              is used.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Third-party Social Media Service")]),_vm._v("\n                              refers to any website or any social network\n                              website through which a User can log in or\n                              create an account to use the Service.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Usage Data")]),_vm._v(" refers to data\n                              collected automatically, either generated by the\n                              use of the Service or from the Service\n                              infrastructure itself (for example, the duration\n                              of a page visit).\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Website")]),_vm._v(" refers to Project\n                              Website, accessible from\n                              "),_c('a',{attrs:{"href":"https://www.inhinyeru.com/","rel":"external nofollow noopener","target":"_blank"}},[_vm._v("https://www.inhinyeru.com/")])])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("You")]),_vm._v(" means the individual\n                              accessing or using the Service, or the company,\n                              or other legal entity on behalf of which such\n                              individual is accessing or using the Service, as\n                              applicable.\n                            ")])])]),_vm._v(" "),_c('h1',[_vm._v("Collecting and Using Your Personal Data")]),_vm._v(" "),_c('h2',[_vm._v("Types of Data Collected")]),_vm._v(" "),_c('h3',[_vm._v("Personal Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          While using Our Service, We may ask You to provide\n                          Us with certain personally identifiable information\n                          that can be used to contact or identify You.\n                          Personally identifiable information may include, but\n                          is not limited to:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("Email address")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("First name and last name")])]),_vm._v(" "),_c('li',[_c('p',[_vm._v("Usage Data")])])]),_vm._v(" "),_c('h3',[_vm._v("Usage Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          Usage Data is collected automatically when using the\n                          Service.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          Usage Data may include information such as Your\n                          Device's Internet Protocol address (e.g. IP\n                          address), browser type, browser version, the pages\n                          of our Service that You visit, the time and date of\n                          Your visit, the time spent on those pages, unique\n                          device identifiers and other diagnostic data.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          When You access the Service by or through a mobile\n                          device, We may collect certain information\n                          automatically, including, but not limited to, the\n                          type of mobile device You use, Your mobile device\n                          unique ID, the IP address of Your mobile device,\n                          Your mobile operating system, the type of mobile\n                          Internet browser You use, unique device identifiers\n                          and other diagnostic data.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          We may also collect information that Your browser\n                          sends whenever You visit our Service or when You\n                          access the Service by or through a mobile device.\n                        ")]),_vm._v(" "),_c('h3',[_vm._v("\n                          Information from Third-Party Social Media Services\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company allows You to create an account and log\n                          in to use the Service through the following\n                          Third-party Social Media Services:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Google")]),_vm._v(" "),_c('li',[_vm._v("Facebook")]),_vm._v(" "),_c('li',[_vm._v("Twitter")])]),_vm._v(" "),_c('p',[_vm._v("\n                          If You decide to register through or otherwise grant\n                          us access to a Third-Party Social Media Service, We\n                          may collect Personal data that is already associated\n                          with Your Third-Party Social Media Service's\n                          account, such as Your name, Your email address, Your\n                          activities or Your contact list associated with that\n                          account.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          You may also have the option of sharing additional\n                          information with the Company through Your\n                          Third-Party Social Media Service's account. If You\n                          choose to provide such information and Personal\n                          Data, during registration or otherwise, You are\n                          giving the Company permission to use, share, and\n                          store it in a manner consistent with this Privacy\n                          Policy.\n                        ")]),_vm._v(" "),_c('h3',[_vm._v("Tracking Technologies and Cookies")]),_vm._v(" "),_c('p',[_vm._v("\n                          We use Cookies and similar tracking technologies to\n                          track the activity on Our Service and store certain\n                          information. Tracking technologies used are beacons,\n                          tags, and scripts to collect and track information\n                          and to improve and analyze Our Service. The\n                          technologies We use may include:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('strong',[_vm._v("Cookies or Browser Cookies.")]),_vm._v(" A\n                            cookie is a small file placed on Your Device. You\n                            can instruct Your browser to refuse all Cookies or\n                            to indicate when a Cookie is being sent. However,\n                            if You do not accept Cookies, You may not be able\n                            to use some parts of our Service. Unless you have\n                            adjusted Your browser setting so that it will\n                            refuse Cookies, our Service may use Cookies.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Flash Cookies.")]),_vm._v(" Certain features\n                            of our Service may use local stored objects (or\n                            Flash Cookies) to collect and store information\n                            about Your preferences or Your activity on our\n                            Service. Flash Cookies are not managed by the same\n                            browser settings as those used for Browser\n                            Cookies. For more information on how You can\n                            delete Flash Cookies, please read \"Where can\n                            I change the settings for disabling, or deleting\n                            local shared objects?\" available at\n                            "),_c('a',{attrs:{"href":"https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_","rel":"external nofollow noopener","target":"_blank"}},[_vm._v("Link")])]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("Web Beacons.")]),_vm._v(" Certain sections of\n                            our Service and our emails may contain small\n                            electronic files known as web beacons (also\n                            referred to as clear gifs, pixel tags, and\n                            single-pixel gifs) that permit the Company, for\n                            example, to count users who have visited those\n                            pages or opened an email and for other related\n                            website statistics (for example, recording the\n                            popularity of a certain section and verifying\n                            system and server integrity).\n                          ")])]),_vm._v(" "),_c('p',[_vm._v("\n                          Cookies can be \"Persistent\" or\n                          \"Session\" Cookies. Persistent Cookies\n                          remain on Your personal computer or mobile device\n                          when You go offline, while Session Cookies are\n                          deleted as soon as You close Your web browser. Learn\n                          more about cookies:\n                          "),_c('a',{attrs:{"href":"https://www.freeprivacypolicy.com/blog/cookies/","target":"_blank"}},[_vm._v("Cookies: What Do They Do?")]),_vm._v(".\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          We use both Session and Persistent Cookies for the\n                          purposes set out below:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_vm._v("Necessary / Essential Cookies")])]),_vm._v(" "),_c('p',[_vm._v("Type: Session Cookies")]),_vm._v(" "),_c('p',[_vm._v("Administered by: Us")]),_vm._v(" "),_c('p',[_vm._v("\n                              Purpose: These Cookies are essential to provide\n                              You with services available through the Website\n                              and to enable You to use some of its features.\n                              They help to authenticate users and prevent\n                              fraudulent use of user accounts. Without these\n                              Cookies, the services that You have asked for\n                              cannot be provided, and We only use these\n                              Cookies to provide You with those services.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Cookies Policy / Notice Acceptance\n                                Cookies")])]),_vm._v(" "),_c('p',[_vm._v("Type: Persistent Cookies")]),_vm._v(" "),_c('p',[_vm._v("Administered by: Us")]),_vm._v(" "),_c('p',[_vm._v("\n                              Purpose: These Cookies identify if users have\n                              accepted the use of cookies on the Website.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("Functionality Cookies")])]),_vm._v(" "),_c('p',[_vm._v("Type: Persistent Cookies")]),_vm._v(" "),_c('p',[_vm._v("Administered by: Us")]),_vm._v(" "),_c('p',[_vm._v("\n                              Purpose: These Cookies allow us to remember\n                              choices You make when You use the Website, such\n                              as remembering your login details or language\n                              preference. The purpose of these Cookies is to\n                              provide You with a more personal experience and\n                              to avoid You having to re-enter your preferences\n                              every time You use the Website.\n                            ")])])]),_vm._v(" "),_c('p',[_vm._v("\n                          For more information about the cookies we use and\n                          your choices regarding cookies, please visit our\n                          Cookies Policy or the Cookies section of our Privacy\n                          Policy.\n                        ")]),_vm._v(" "),_c('h2',[_vm._v("Use of Your Personal Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company may use Personal Data for the following\n                          purposes:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_vm._v("To provide and maintain our Service")]),_vm._v(", including to monitor the usage of our\n                              Service.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("To manage Your Account:")]),_vm._v(" to\n                              manage Your registration as a user of the\n                              Service. The Personal Data You provide can give\n                              You access to different functionalities of the\n                              Service that are available to You as a\n                              registered user.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("For the performance of a contract:")]),_vm._v("\n                              the development, compliance and undertaking of\n                              the purchase contract for the products, items or\n                              services You have purchased or of any other\n                              contract with Us through the Service.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("To contact You:")]),_vm._v(" To contact You\n                              by email, telephone calls, SMS, or other\n                              equivalent forms of electronic communication,\n                              such as a mobile application's push\n                              notifications regarding updates or informative\n                              communications related to the functionalities,\n                              products or contracted services, including the\n                              security updates, when necessary or reasonable\n                              for their implementation.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("To provide You")]),_vm._v(" with news,\n                              special offers and general information about\n                              other goods, services and events which we offer\n                              that are similar to those that you have already\n                              purchased or enquired about unless You have\n                              opted not to receive such information.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("To manage Your requests:")]),_vm._v(" To\n                              attend and manage Your requests to Us.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("For business transfers:")]),_vm._v(" We may\n                              use Your information to evaluate or conduct a\n                              merger, divestiture, restructuring,\n                              reorganization, dissolution, or other sale or\n                              transfer of some or all of Our assets, whether\n                              as a going concern or as part of bankruptcy,\n                              liquidation, or similar proceeding, in which\n                              Personal Data held by Us about our Service users\n                              is among the assets transferred.\n                            ")])]),_vm._v(" "),_c('li',[_c('p',[_c('strong',[_vm._v("For other purposes")]),_vm._v(": We may use\n                              Your information for other purposes, such as\n                              data analysis, identifying usage trends,\n                              determining the effectiveness of our promotional\n                              campaigns and to evaluate and improve our\n                              Service, products, services, marketing and your\n                              experience.\n                            ")])])]),_vm._v(" "),_c('p',[_vm._v("\n                          We may share Your personal information in the\n                          following situations:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('strong',[_vm._v("With Service Providers:")]),_vm._v(" We may\n                            share Your personal information with Service\n                            Providers to monitor and analyze the use of our\n                            Service, to contact You.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("For business transfers:")]),_vm._v(" We may\n                            share or transfer Your personal information in\n                            connection with, or during negotiations of, any\n                            merger, sale of Company assets, financing, or\n                            acquisition of all or a portion of Our business to\n                            another company.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("With Affiliates:")]),_vm._v(" We may share\n                            Your information with Our affiliates, in which\n                            case we will require those affiliates to honor\n                            this Privacy Policy. Affiliates include Our parent\n                            company and any other subsidiaries, joint venture\n                            partners or other companies that We control or\n                            that are under common control with Us.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("With business partners:")]),_vm._v(" We may\n                            share Your information with Our business partners\n                            to offer You certain products, services or\n                            promotions.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("With other users:")]),_vm._v(" when You share\n                            personal information or otherwise interact in the\n                            public areas with other users, such information\n                            may be viewed by all users and may be publicly\n                            distributed outside. If You interact with other\n                            users or register through a Third-Party Social\n                            Media Service, Your contacts on the Third-Party\n                            Social Media Service may see Your name, profile,\n                            pictures and description of Your activity.\n                            Similarly, other users will be able to view\n                            descriptions of Your activity, communicate with\n                            You and view Your profile.\n                          ")]),_vm._v(" "),_c('li',[_c('strong',[_vm._v("With Your consent")]),_vm._v(": We may\n                            disclose Your personal information for any other\n                            purpose with Your consent.\n                          ")])]),_vm._v(" "),_c('h2',[_vm._v("Retention of Your Personal Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company will retain Your Personal Data only for\n                          as long as is necessary for the purposes set out in\n                          this Privacy Policy. We will retain and use Your\n                          Personal Data to the extent necessary to comply with\n                          our legal obligations (for example, if we are\n                          required to retain your data to comply with\n                          applicable laws), resolve disputes, and enforce our\n                          legal agreements and policies.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company will also retain Usage Data for internal\n                          analysis purposes. Usage Data is generally retained\n                          for a shorter period of time, except when this data\n                          is used to strengthen the security or to improve the\n                          functionality of Our Service, or We are legally\n                          obligated to retain this data for longer time\n                          periods.\n                        ")]),_vm._v(" "),_c('h2',[_vm._v("Transfer of Your Personal Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          Your information, including Personal Data, is\n                          processed at the Company's operating offices and in\n                          any other places where the parties involved in the\n                          processing are located. It means that this\n                          information may be transferred to — and maintained\n                          on — computers located outside of Your state,\n                          province, country or other governmental jurisdiction\n                          where the data protection laws may differ than those\n                          from Your jurisdiction.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          Your consent to this Privacy Policy followed by Your\n                          submission of such information represents Your\n                          agreement to that transfer.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company will take all steps reasonably necessary\n                          to ensure that Your data is treated securely and in\n                          accordance with this Privacy Policy and no transfer\n                          of Your Personal Data will take place to an\n                          organization or a country unless there are adequate\n                          controls in place including the security of Your\n                          data and other personal information.\n                        ")]),_vm._v(" "),_c('h2',[_vm._v("Disclosure of Your Personal Data")]),_vm._v(" "),_c('h3',[_vm._v("Business Transactions")]),_vm._v(" "),_c('p',[_vm._v("\n                          If the Company is involved in a merger, acquisition\n                          or asset sale, Your Personal Data may be\n                          transferred. We will provide notice before Your\n                          Personal Data is transferred and becomes subject to\n                          a different Privacy Policy.\n                        ")]),_vm._v(" "),_c('h3',[_vm._v("Law enforcement")]),_vm._v(" "),_c('p',[_vm._v("\n                          Under certain circumstances, the Company may be\n                          required to disclose Your Personal Data if required\n                          to do so by law or in response to valid requests by\n                          public authorities (e.g. a court or a government\n                          agency).\n                        ")]),_vm._v(" "),_c('h3',[_vm._v("Other legal requirements")]),_vm._v(" "),_c('p',[_vm._v("\n                          The Company may disclose Your Personal Data in the\n                          good faith belief that such action is necessary to:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("Comply with a legal obligation")]),_vm._v(" "),_c('li',[_vm._v("\n                            Protect and defend the rights or property of the\n                            Company\n                          ")]),_vm._v(" "),_c('li',[_vm._v("\n                            Prevent or investigate possible wrongdoing in\n                            connection with the Service\n                          ")]),_vm._v(" "),_c('li',[_vm._v("\n                            Protect the personal safety of Users of the\n                            Service or the public\n                          ")]),_vm._v(" "),_c('li',[_vm._v("Protect against legal liability")])]),_vm._v(" "),_c('h2',[_vm._v("Security of Your Personal Data")]),_vm._v(" "),_c('p',[_vm._v("\n                          The security of Your Personal Data is important to\n                          Us, but remember that no method of transmission over\n                          the Internet, or method of electronic storage is\n                          100% secure. While We strive to use commercially\n                          acceptable means to protect Your Personal Data, We\n                          cannot guarantee its absolute security.\n                        ")]),_vm._v(" "),_c('h1',[_vm._v("Children's Privacy")]),_vm._v(" "),_c('p',[_vm._v("\n                          Our Service does not address anyone under the age of\n                          13. We do not knowingly collect personally\n                          identifiable information from anyone under the age\n                          of 13. If You are a parent or guardian and You are\n                          aware that Your child has provided Us with Personal\n                          Data, please contact Us. If We become aware that We\n                          have collected Personal Data from anyone under the\n                          age of 13 without verification of parental consent,\n                          We take steps to remove that information from Our\n                          servers.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          If We need to rely on consent as a legal basis for\n                          processing Your information and Your country\n                          requires consent from a parent, We may require Your\n                          parent's consent before We collect and use that\n                          information.\n                        ")]),_vm._v(" "),_c('h1',[_vm._v("Links to Other Websites")]),_vm._v(" "),_c('p',[_vm._v("\n                          Our Service may contain links to other websites that\n                          are not operated by Us. If You click on a third\n                          party link, You will be directed to that third\n                          party's site. We strongly advise You to review the\n                          Privacy Policy of every site You visit.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          We have no control over and assume no responsibility\n                          for the content, privacy policies or practices of\n                          any third party sites or services.\n                        ")]),_vm._v(" "),_c('h1',[_vm._v("Changes to this Privacy Policy")]),_vm._v(" "),_c('p',[_vm._v("\n                          We may update Our Privacy Policy from time to time.\n                          We will notify You of any changes by posting the new\n                          Privacy Policy on this page.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          We will let You know via email and/or a prominent\n                          notice on Our Service, prior to the change becoming\n                          effective and update the \"Last updated\"\n                          date at the top of this Privacy Policy.\n                        ")]),_vm._v(" "),_c('p',[_vm._v("\n                          You are advised to review this Privacy Policy\n                          periodically for any changes. Changes to this\n                          Privacy Policy are effective when they are posted on\n                          this page.\n                        ")]),_vm._v(" "),_c('h1',[_vm._v("Contact Us")]),_vm._v(" "),_c('p',[_vm._v("\n                          If you have any questions about this Privacy Policy,\n                          You can contact us:\n                        ")]),_vm._v(" "),_c('ul',[_c('li',[_c('p',[_vm._v("By email: jmangaluz@gmail.com")])])]),_vm._v(" "),_c('v-row',[_c('v-col',[_c('script',{attrs:{"async":"","src":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),_vm._v(" "),_c('script',[_vm._v("\n                              ;(adsbygoogle = window.adsbygoogle || []).push(\n                                {}\n                              )\n                            ")]),_vm._v(" "),_c('ins',{staticClass:"adsbygoogle",staticStyle:{"display":"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-col',{staticClass:"pa-0 ma-0",attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-container',{staticClass:"mr-0 pr-0"},[_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('BlogList',{attrs:{"blogs_in_random":_vm.blogs_in_random,"title":"Random Blogs"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('TagsIndex',{attrs:{"tags":_vm.tags,"load_tags":_vm.load_tags,"total_tags":_vm.total_tags}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('Tools')],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('BlogList',{attrs:{"blogs_in_random":_vm.blogs_in_latest,"title":"Latest Blogs"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('Services')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/privacy-policy.vue?vue&type=template&id=22f01395&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/privacy-policy.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var privacy_policyvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Privacy Policy ',
      meta: [{
        hid: 'Privacy Policy ',
        name: 'Privacy Policy',
        content: 'Privacy Policy'
      }]
    };
  },

  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
    blogs_load: false,
    news_load: false,
    posts_load: false,
    selection: 0,
    content: [],
    news: [],
    posts: [],
    nuxt: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: [],
    posts_content: 0,
    news_content: 0,
    tags: [],
    load_tags: false,
    total_tags: 0,
    height: '200px',
    blogs_load: false,
    blogs_content: [],
    blogs_total: 0,
    nuxt: [],
    laravel: [],
    vue: [],
    load_nuxt: false,
    load_laravel: false,
    load_vue: false,
    show_nuxt: false,
    show_laravel: false,
    show_vue: false,
    blogs_in_random: [],
    blogs_in_latest: [],
    page: 2
  }),
  layout: 'default',

  async fetch() {
    const BlogsRandom = await this.$axios.$get(`api/blog/index/10`);
    this.blogs_in_random = BlogsRandom.data;
    const Blogslatest = await this.$axios.$get(`api/blog/latest/10`);
    this.blogs_in_latest = Blogslatest.data;
    this.load_tags = true;
    const tags = await this.$axios.$get(`api/tags`);
    this.load_tags = false;
    this.tags = tags.data;
    this.total_tags = tags.total;
  }

});
// CONCATENATED MODULE: ./pages/privacy-policy.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_privacy_policyvue_type_script_lang_js_ = (privacy_policyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./pages/privacy-policy.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(428)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_privacy_policyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "22f01395",
  "aeae20ec"
  
)

/* harmony default export */ var privacy_policy = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {BlogList: __webpack_require__(301).default,TagsIndex: __webpack_require__(302).default,Tools: __webpack_require__(303).default,Services: __webpack_require__(304).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=privacy-policy.js.map