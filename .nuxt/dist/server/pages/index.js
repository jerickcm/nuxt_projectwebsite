exports.ids = [38];
exports.modules = {

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VChip_VChip_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(53);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var _mixins_routable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3);
// Styles

 // Components


 // Mixins






 // Utilities


/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _mixins_sizeable__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_5__[/* factory */ "a"])('chipGroup'), Object(_mixins_toggleable__WEBPACK_IMPORTED_MODULE_7__[/* factory */ "b"])('inputValue')).extend({
  name: 'v-chip',
  props: {
    active: {
      type: Boolean,
      default: true
    },
    activeClass: {
      type: String,

      default() {
        if (!this.chipGroup) return '';
        return this.chipGroup.activeClass;
      }

    },
    close: Boolean,
    closeIcon: {
      type: String,
      default: '$delete'
    },
    closeLabel: {
      type: String,
      default: '$vuetify.close'
    },
    disabled: Boolean,
    draggable: Boolean,
    filter: Boolean,
    filterIcon: {
      type: String,
      default: '$complete'
    },
    label: Boolean,
    link: Boolean,
    outlined: Boolean,
    pill: Boolean,
    tag: {
      type: String,
      default: 'span'
    },
    textColor: String,
    value: null
  },
  data: () => ({
    proxyClass: 'v-chip--active'
  }),
  computed: {
    classes() {
      return {
        'v-chip': true,
        ..._mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.classes.call(this),
        'v-chip--clickable': this.isClickable,
        'v-chip--disabled': this.disabled,
        'v-chip--draggable': this.draggable,
        'v-chip--label': this.label,
        'v-chip--link': this.isLink,
        'v-chip--no-color': !this.color,
        'v-chip--outlined': this.outlined,
        'v-chip--pill': this.pill,
        'v-chip--removable': this.hasClose,
        ...this.themeClasses,
        ...this.sizeableClasses,
        ...this.groupClasses
      };
    },

    hasClose() {
      return Boolean(this.close);
    },

    isClickable() {
      return Boolean(_mixins_routable__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].options.computed.isClickable.call(this) || this.chipGroup);
    }

  },

  created() {
    const breakingProps = [['outline', 'outlined'], ['selected', 'input-value'], ['value', 'active'], ['@input', '@active.sync']];
    /* istanbul ignore next */

    breakingProps.forEach(([original, replacement]) => {
      if (this.$attrs.hasOwnProperty(original)) Object(_util_console__WEBPACK_IMPORTED_MODULE_10__[/* breaking */ "a"])(original, replacement, this);
    });
  },

  methods: {
    click(e) {
      this.$emit('click', e);
      this.chipGroup && this.toggle();
    },

    genFilter() {
      const children = [];

      if (this.isActive) {
        children.push(this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
          staticClass: 'v-chip__filter',
          props: {
            left: true
          }
        }, this.filterIcon));
      }

      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VExpandXTransition */ "b"], children);
    },

    genClose() {
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        staticClass: 'v-chip__close',
        props: {
          right: true,
          size: 18
        },
        attrs: {
          'aria-label': this.$vuetify.lang.t(this.closeLabel)
        },
        on: {
          click: e => {
            e.stopPropagation();
            e.preventDefault();
            this.$emit('click:close');
            this.$emit('update:active', false);
          }
        }
      }, this.closeIcon);
    },

    genContent() {
      return this.$createElement('span', {
        staticClass: 'v-chip__content'
      }, [this.filter && this.genFilter(), this.$slots.default, this.hasClose && this.genClose()]);
    }

  },

  render(h) {
    const children = [this.genContent()];
    let {
      tag,
      data
    } = this.generateRouteLink();
    data.attrs = { ...data.attrs,
      draggable: this.draggable ? 'true' : undefined,
      tabindex: this.chipGroup && !this.disabled ? 0 : data.attrs.tabindex
    };
    data.directives.push({
      name: 'show',
      value: this.active
    });
    data = this.setBackgroundColor(this.color, data);
    const color = this.textColor || this.outlined && this.color;
    return h(tag, this.setTextColor(color, data), children);
  }

}));

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("197fcea4", content, true)

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:\"\";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("3c0eddd7", content, true)

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(274);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("8f7a87bc", content, true)

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VChipGroup/VChipGroup.sass
var VChipGroup = __webpack_require__(271);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass
var VSlideGroup = __webpack_require__(273);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/index.js
var VIcon = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/transitions/index.js + 2 modules
var transitions = __webpack_require__(42);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js
var VItemGroup = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/mobile/index.js
var mobile = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/resize/index.js
var resize = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/directives/touch/index.js
var touch = __webpack_require__(100);

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
var colorable = __webpack_require__(7);

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

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(469);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7c2dd08e", content, true, context)
};

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c4ee7ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(374);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c4ee7ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c4ee7ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c4ee7ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c4ee7ba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".font-lulu[data-v-7c4ee7ba]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-7c4ee7ba]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-7c4ee7ba]{font-family:\"Barlow-Regular\",sans-serif}.bounce-enter-active[data-v-7c4ee7ba]{-webkit-animation:bounce-in-data-v-7c4ee7ba .5s;animation:bounce-in-data-v-7c4ee7ba .5s}.bounce-leave-active[data-v-7c4ee7ba]{animation:bounce-in-data-v-7c4ee7ba .5s reverse}@-webkit-keyframes bounce-in-data-v-7c4ee7ba{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-7c4ee7ba{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}.title1[data-v-7c4ee7ba],.v-application a[data-v-7c4ee7ba]{text-decoration:none}.v-application a[data-v-7c4ee7ba]{color:#424dee}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=7c4ee7ba&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"ma-0 pa-0 grey lighten-3",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12","md":"12"}},[_c('v-sheet',{staticClass:"black lighten-5",attrs:{"elevation":"2","min-height":"10vh"}},[_c('v-container',[_c('v-row',{staticClass:"pt-5"},[_c('v-col',{staticClass:"text-center",attrs:{"cols":"12","sm":"12","lg":"9"}},[_c('label',{staticClass:"font-lulu white--text",class:{
                  'fs-1.1': _vm.$vuetify.breakpoint.smAndDown,
                  'fs-3': _vm.$vuetify.breakpoint.mdAndUp
                }},[_vm._v("JERICK C. MANGALUS")])]),_vm._v(" "),_c('v-col',{staticClass:"text-center mt-7",attrs:{"cols":"12","sm":"12","lg":"3"}},[_c('label',{staticClass:"text-right white--text",class:{
                  'fs-0-5': _vm.$vuetify.breakpoint.smAndDown,
                  'fs-1-0': _vm.$vuetify.breakpoint.mdAndUp
                }},[_vm._v("[ Technology R&D ]\n              ")])])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"col-md-6 offset-md-3 text-center"},[_c('div',{staticClass:"hidden-sm-and-down text-center"},_vm._l((_vm.links),function(link){return _c('v-btn',{key:link.label,staticClass:"black pa-1 ma-1 white--text",attrs:{"plain":"","text":"","tile":"","rounded":""}},[_vm._v("\n                  "+_vm._s(link.label)+"\n                ")])}),1),_vm._v(" "),_c('v-card',{staticClass:"mx-auto hidden-md-and-up d-none",attrs:{"tile":""}},[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item-group',{attrs:{"color":"primary"},model:{value:(_vm.selectedItem),callback:function ($$v) {_vm.selectedItem=$$v},expression:"selectedItem"}},_vm._l((_vm.links),function(item,i){return _c('v-list-item',{key:i},[_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.label)}})],1)],1)}),1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{staticClass:"grey lighten-5 pa-1 ma-1",attrs:{"elevation":"2"}},[_c('v-container',{},[_c('v-row',{staticClass:"mt-5",attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","sm":"12","lg":"12"}},[_c('v-layout',{attrs:{"justify-center":"","align-center":""}},[(_vm.$vuetify.breakpoint.smAndDown)?_c('v-avatar',{staticClass:"text-center black",attrs:{"size":150}},[_c('v-img',{staticClass:"text-center",attrs:{"src":"/images/cartoon-darken.jpg"}})],1):_c('v-avatar',{staticClass:"text-center black",attrs:{"size":350}},[_c('v-img',{staticClass:"text-center",attrs:{"src":"/images/cartoon-darken.jpg"}})],1)],1)],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-5",attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"font-avenir fs-1-4 text-center",attrs:{"cols":"12","sm":"12","lg":"12"}})],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-container',[_c('v-row',[_c('v-col',[_c('h2',{attrs:{"color":"dark"}},[_vm._v("Blogs")])])],1),_vm._v(" "),_vm._l((Math.ceil(_vm.content.length / 3)),function(i,ind){return _c('v-row',{key:ind,attrs:{"color":"blue"}},_vm._l((_vm.content.slice((i - 1) * 3, i * 3)),function(item,indx){return _c('v-col',{key:indx,attrs:{"lg":"4"}},[_c('v-card',{staticClass:"pa-2 ma-0",attrs:{"elevation":"2","outlined":"","shaped":"","tile":""}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                      path: 'blog/' + item.slug,
                    }}},[_c('v-img',{attrs:{"height":"250","src":item.image}})],1),_vm._v(" "),_c('v-card-title',[_c('h2',{staticClass:"title1 blue--text"},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                        path: 'blog/' + item.slug,
                      }}},[_vm._v(" "+_vm._s(item.title)+"\n                    ")])],1)]),_vm._v(" "),_c('v-card-text',{},[_c('v-chip-group',{attrs:{"active-class":"deep-purple accent-4 white--text","column":""},model:{value:(_vm.selection),callback:function ($$v) {_vm.selection=$$v},expression:"selection"}},[_c('span',{staticClass:"pt-3"},[_vm._v("Tags: ‌‌")]),_vm._v(" "),_vm._l((item.tags),function(itm,index){return _c('v-chip',{key:index,staticClass:"white--text",attrs:{"color":"blue"}},[_vm._v(_vm._s(itm))])})],2),_vm._v(" "),_c('span',[_vm._v("Author: "+_vm._s(item.name)+" ")]),_c('br'),_vm._v(" "),_c('span',[_vm._v("Date : "+_vm._s(item.human_date))]),_c('br')],1)],1)],1)}),1)})],2)],1),_vm._v(" "),_c('v-row',[_c('v-container',[_c('v-row',[_c('v-col',[_c('h2',{attrs:{"color":"dark"}},[_vm._v("News")])])],1),_vm._v(" "),_vm._l((Math.ceil(_vm.news.length / 3)),function(i,ind){return _c('v-row',{key:ind,attrs:{"color":"blue"}},_vm._l((_vm.news.slice((i - 1) * 3, i * 3)),function(item,indx){return _c('v-col',{key:indx,attrs:{"lg":"4"}},[_c('v-card',{staticClass:"pa-2 ma-0",attrs:{"elevation":"2","outlined":"","shaped":"","tile":""}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                      path: 'news/' + item.slug,
                    }}},[_c('v-img',{attrs:{"height":"250","src":item.image}})],1),_vm._v(" "),_c('v-card-title',[_c('h2',{staticClass:"title1 blue--text"},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                        path: 'news/' + item.slug,
                      }}},[_vm._v(" "+_vm._s(item.title)+"\n                    ")])],1)]),_vm._v(" "),_c('v-card-text',{},[_c('v-chip-group',{attrs:{"active-class":"deep-purple accent-4 white--text","column":""},model:{value:(_vm.selection),callback:function ($$v) {_vm.selection=$$v},expression:"selection"}},[_c('span',{staticClass:"pt-3"},[_vm._v("Tags: ‌‌")]),_vm._v(" "),_vm._l((item.tags),function(itm,index){return _c('v-chip',{key:index,staticClass:"white--text",attrs:{"color":"blue"}},[_vm._v(_vm._s(itm))])})],2),_vm._v(" "),_c('span',[_vm._v("Author: "+_vm._s(item.name)+" ")]),_c('br'),_vm._v(" "),_c('span',[_vm._v("Date : "+_vm._s(item.human_date))]),_c('br')],1)],1)],1)}),1)})],2)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{attrs:{"color":"background","elevation":"2","min-height":"30vh"}},[_c('v-container',{},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"pa-1 ma-1",attrs:{"cols":"12","sm":"12","lg":"12"}},[_c('p',{staticClass:"pl-5 pr-5 text-justify  font-barlowreg",class:{
                  'fs-1': _vm.$vuetify.breakpoint.smAndDown,
                  'fs-2': _vm.$vuetify.breakpoint.mdAndUp
                }},[_vm._v("\n                The inspiration of this website build is to expand my\n                knowledge base , in web development. Secondly I am planning to\n                retain this website in a public server earning from ads. Maybe\n                in my free time I could just update it with my newly learned\n                tricks in web deveopment. This website is running in frontend\n                Vue in a nuxt framework and backend is Laravel8. The time this\n                site is being developed is in the new release of PHP version\n                8. Also docker is in my list of research I am actually\n                surprised with laravel response to api is very slow and that\n                is because i am using windows file system that later i\n                discovered you need to be inside the linux filesystem because\n                I was running the backend in a linux container image. This\n                project is using docker in local and docker also in Google\n                Cloud Platform that is my dev-ops application. I am using\n                Laravel sail to build the containers connecting backend and\n                frontend I used Laravel Santum together with Nuxt auth next\n                node plugin. Along development I am learning a lot I advise\n                aldo for developer to do this during work from home. By the\n                way developing this site is during the pandemic it started in\n                March 20, 2020 here in the Philippines and at present covid-19\n                is still a threat to peoples lives. Even though their is\n                already a vaccine the production seems to still inadequate.\n              ")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{attrs:{"elevation":"2","min-height":"10vh"}},[_c('v-container',{},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"12","lg":"12"}},[(_vm.LoadingStatus)?_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.MessageOfTheDay),function(message){return (!_vm.LoadingStatus)?_c('div',{key:message.author},[_c('p',{staticClass:"text-center mt-5",class:{
                    'fs-1.1': _vm.$vuetify.breakpoint.smAndDown,
                    'fs-1.5': _vm.$vuetify.breakpoint.mdAndUp
                  },attrs:{"for":""}},[_vm._v("\n                  \" "+_vm._s(message.message)+" \" - "+_vm._s(message.author)+"\n                ")])]):_vm._e()})],2)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('script',{attrs:{"async":"","src":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),_vm._v(" "),_c('script',[_vm._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n        ")]),_vm._v(" "),_c('ins',{staticClass:"adsbygoogle",staticStyle:{"display":"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=7c4ee7ba&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  loading: {
    color: 'orange',
    height: '5px'
  },
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Profile ',
    meta: [{
      hid: 'Profile',
      name: 'Profile',
      content: 'Profile'
    }]
  }),
  data: () => ({
    selection: 0,
    content: [],
    news: [],
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: []
  }),

  async fetch() {
    await this.$axios.$get('/sanctum/csrf-cookie');
    const res = await this.$axios.$get(`api/blog/page/1/item/3`);
    this.content = res.data;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const news = await this.$axios.$get(`api/news/page/1/item/3`);
    this.news = news.data;
  },

  layout: 'default',
  methods: { ...Object(external_vuex_["mapActions"])('messageoftheday', ['fetchQuote'])
  },
  computed: { ...Object(external_vuex_["mapGetters"])('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },

  async created() {},

  async mounted() {
    await this.$axios.$get('/sanctum/csrf-cookie');

    try {
      this.fetchQuote();
    } catch (error) {
      console.log(error);
    }
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(218);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(79);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(50);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChip/VChip.js
var VChip = __webpack_require__(236);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VChipGroup/VChipGroup.js + 1 modules
var VChipGroup = __webpack_require__(333);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(66);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
var grid = __webpack_require__(108);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js


/* harmony default export */ var VLayout = (Object(grid["a" /* default */])('layout'));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 3 modules
var components_VList = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(78);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(232);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(15);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(468)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7c4ee7ba",
  "1c7740e9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




















installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["b" /* VCardText */],VCardTitle: components_VCard["c" /* VCardTitle */],VChip: VChip["a" /* default */],VChipGroup: VChipGroup["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout,VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map