exports.ids = [72,2,16,18,19];
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

/***/ 272:
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

/***/ 273:
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

/***/ 274:
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
  add("14a00e5c", content, true, context)
};

/***/ }),

/***/ 275:
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
var touch = __webpack_require__(110);

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
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogList_vue_vue_type_style_index_0_id_1e99ab92_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TagsIndex_vue_vue_type_style_index_0_id_e79e88ce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
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
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_0e152cd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_0e152cd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_0e152cd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_0e152cd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tools_vue_vue_type_style_index_0_id_0e152cd5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-0e152cd5]{text-decoration:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
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

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Tools.vue?vue&type=template&id=0e152cd5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"tag-border",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('h2',{staticClass:"blue--text ma-0 mt-0 pt-0 ",attrs:{"color":"blue"}},[_vm._v("\n        Tools\n      ")])])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"pa-0 "},[_c('v-card',{attrs:{"flat":""}},[_c('v-card-text',{staticClass:"pa-0 ma-0"},[_c('nuxt-link',{staticClass:"nuxtlink green--text",attrs:{"color":"blue","to":"/cryptography/atbash"}},[_c('ul',[_c('li',[_c('h4',{attrs:{"color":"blue"}},[_vm._v("Atbash Cipher")])])])]),_vm._v(" "),_c('nuxt-link',{staticClass:"nuxtlink green--text",attrs:{"color":"blue","to":"/cryptography/rot13"}},[_c('ul',[_c('li',[_c('h4',{attrs:{"color":"blue"}},[_vm._v("ROT-13 Cipher")])])])])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Tools.vue?vue&type=template&id=0e152cd5&scoped=true&

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
  "0e152cd5",
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

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(436);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("14e42c78", content, true, context)
};

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_service_vue_vue_type_style_index_0_id_1fcea861_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(378);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_service_vue_vue_type_style_index_0_id_1fcea861_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_service_vue_vue_type_style_index_0_id_1fcea861_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_service_vue_vue_type_style_index_0_id_1fcea861_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_terms_of_service_vue_vue_type_style_index_0_id_1fcea861_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dont-break-out[data-v-1fcea861]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-1fcea861]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-1fcea861]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-1fcea861]{font-family:\"Barlow-Regular\",sans-serif}.title1[data-v-1fcea861],.v-application a[data-v-1fcea861]{text-decoration:none}.v-application a[data-v-1fcea861]{color:#424dee}.adj-title[data-v-1fcea861]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-1fcea861]{border:3px solid #00f}.hr-red[data-v-1fcea861]{border:3px solid red}.hr-orange[data-v-1fcea861]{border:3px solid orange}.hr-black[data-v-1fcea861]{border:3px solid #000}ul.clean[data-v-1fcea861]{list-style:none!important;list-style-type:none!important}.text-justify[data-v-1fcea861]{text-align:justify;text-justify:inter-word}.hr-brown[data-v-1fcea861]{border:3px solid brown}.tag-border[data-v-1fcea861]{border-right:.4rem solid #add8e6;border-top:.4rem solid #add8e6}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/terms-of-service.vue?vue&type=template&id=1fcea861&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-row',{staticClass:"mb-5 pb-5"},[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:" mb-0 pb-0"},[_c('v-container',[_c('v-row',[_c('v-col',{staticClass:"pa-0 ma-0",attrs:{"xs":"12","sm":"12","md":"12","lg":"8","xl":"8","cols":"12"}},[_c('v-container',{staticClass:"mr-0 pr-0 tag-border"},[_c('h1',{staticClass:"fs-1-3"},[_vm._v("Website Terms and Conditions of Use")]),_vm._v(" "),_c('h2',[_vm._v("1. Terms")]),_vm._v(" "),_c('p',[_vm._v("\n                    By accessing this Website, accessible from\n                    http://www.inhinyeru.com/, you are agreeing to be bound by\n                    these Website Terms and Conditions of Use and agree that\n                    you are responsible for the agreement with any applicable\n                    local laws. If you disagree with any of these terms, you\n                    are prohibited from accessing this site. The materials\n                    contained in this Website are protected by copyright and\n                    trade mark law.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("2. Use License")]),_vm._v(" "),_c('p',[_vm._v("\n                    Permission is granted to temporarily download one copy of\n                    the materials on Project Website's Website for personal,\n                    non-commercial transitory viewing only. This is the grant\n                    of a license, not a transfer of title, and under this\n                    license you may not:\n                  ")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("modify or copy the materials;")]),_vm._v(" "),_c('li',[_vm._v("\n                      use the materials for any commercial purpose or for any\n                      public display;\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                      attempt to reverse engineer any software contained on\n                      Project Website's Website;\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                      remove any copyright or other proprietary notations from\n                      the materials; or\n                    ")]),_vm._v(" "),_c('li',[_vm._v("\n                      transferring the materials to another person or \"mirror\"\n                      the materials on any other server.\n                    ")])]),_vm._v(" "),_c('p',[_vm._v("\n                    This will let Project Website to terminate upon violations\n                    of any of these restrictions. Upon termination, your\n                    viewing right will also be terminated and you should\n                    destroy any downloaded materials in your possession\n                    whether it is printed or electronic format.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("3. Disclaimer")]),_vm._v(" "),_c('p',[_vm._v("\n                    All the materials on Project Website’s Website are\n                    provided \"as is\". Project Website makes no warranties, may\n                    it be expressed or implied, therefore negates all other\n                    warranties. Furthermore, Project Website does not make any\n                    representations concerning the accuracy or reliability of\n                    the use of the materials on its Website or otherwise\n                    relating to such materials or any sites linked to this\n                    Website.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("4. Limitations")]),_vm._v(" "),_c('p',[_vm._v("\n                    Project Website or its suppliers will not be hold\n                    accountable for any damages that will arise with the use\n                    or inability to use the materials on Project Website’s\n                    Website, even if Project Website or an authorize\n                    representative of this Website has been notified, orally\n                    or written, of the possibility of such damage. Some\n                    jurisdiction does not allow limitations on implied\n                    warranties or limitations of liability for incidental\n                    damages, these limitations may not apply to you.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("5. Revisions and Errata")]),_vm._v(" "),_c('p',[_vm._v("\n                    The materials appearing on Project Website’s Website may\n                    include technical, typographical, or photographic errors.\n                    Project Website will not promise that any of the materials\n                    in this Website are accurate, complete, or current.\n                    Project Website may change the materials contained on its\n                    Website at any time without notice. Project Website does\n                    not make any commitment to update the materials.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("6. Links")]),_vm._v(" "),_c('p',[_vm._v("\n                    Project Website has not reviewed all of the sites linked\n                    to its Website and is not responsible for the contents of\n                    any such linked site. The presence of any link does not\n                    imply endorsement by Project Website of the site. The use\n                    of any linked website is at the user’s own risk.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("7. Site Terms of Use Modifications")]),_vm._v(" "),_c('p',[_vm._v("\n                    Project Website may revise these Terms of Use for its\n                    Website at any time without prior notice. By using this\n                    Website, you are agreeing to be bound by the current\n                    version of these Terms and Conditions of Use.\n                  ")]),_vm._v(" "),_c('h2',[_vm._v("8. Your Privacy")]),_vm._v(" "),_c('p',[_vm._v("Please read our Privacy Policy.")]),_vm._v(" "),_c('h2',[_vm._v("9. Governing Law")]),_vm._v(" "),_c('p',[_vm._v("\n                    Any claim related to Project Website's Website shall be\n                    governed by the laws of ph without regards to its conflict\n                    of law provisions.\n                  ")]),_vm._v(" "),_c('v-row',[_c('v-col',[_c('script',{attrs:{"async":"","src":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),_vm._v(" "),_c('script',[_vm._v("\n                        ;(adsbygoogle = window.adsbygoogle || []).push({})\n                      ")]),_vm._v(" "),_c('ins',{staticClass:"adsbygoogle",staticStyle:{"display":"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],1)],1),_vm._v(" "),_c('v-col',{staticClass:"pa-0 ma-0",attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-container',{staticClass:"mr-0 pr-0"},[_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('BlogList',{attrs:{"blogs_in_random":_vm.blogs_in_random,"title":"Random Blogs"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('TagsIndex',{attrs:{"tags":_vm.tags,"load_tags":_vm.load_tags,"total_tags":_vm.total_tags}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('Tools')],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('BlogList',{attrs:{"blogs_in_random":_vm.blogs_in_latest,"title":"Latest Blogs"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('Services')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/terms-of-service.vue?vue&type=template&id=1fcea861&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/terms-of-service.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var terms_of_servicevue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Terms of Service ',
      meta: [{
        hid: 'Terms of Service ',
        name: 'Terms of Service',
        content: 'Terms of Service'
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
// CONCATENATED MODULE: ./pages/terms-of-service.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_terms_of_servicevue_type_script_lang_js_ = (terms_of_servicevue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./pages/terms-of-service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(435)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_terms_of_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1fcea861",
  "2bddc378"
  
)

/* harmony default export */ var terms_of_service = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {BlogList: __webpack_require__(301).default,TagsIndex: __webpack_require__(302).default,Tools: __webpack_require__(303).default,Services: __webpack_require__(304).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=terms-of-service.js.map