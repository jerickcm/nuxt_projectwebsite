exports.ids = [12];
exports.modules = {

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(262);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("8f7a87bc", content, true)

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76);
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2);
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities


const BaseSlideGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
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
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__[/* BaseItemGroup */ "a"].options.computed.classes.call(this),
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
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
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
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__[/* VFadeTransition */ "c"], [this.genIcon(location)]);
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
/* harmony default export */ __webpack_exports__["b"] = (BaseSlideGroup.extend({
  name: 'v-slide-group',

  provide() {
    return {
      slideGroup: this
    };
  }

}));

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(350);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("926f11d2", content, true, context)
};

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_6bb65825_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_6bb65825_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_6bb65825_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_6bb65825_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_6bb65825_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-6bb65825]{text-decoration:none!important}.hr-green[data-v-6bb65825]{border:3px solid green}.show-btns[data-v-6bb65825]{color:#fff!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicsIndex.vue?vue&type=template&id=6bb65825&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load_component == false)?_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:" mb-0 pb-0"},[_c('hr',{staticClass:"hr-green",attrs:{"color":"green"}})])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('h2',{staticClass:"green--text ma-0 mt-0 pt-0 ",attrs:{"color":"green"}},[_vm._v("\n        Topics\n      ")])])],1),_vm._v(" "),_vm._l((Math.ceil(_vm.nuxt.length / 5)),function(i,ind){return _c('v-row',{key:ind + 10,staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column ",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Nuxt")]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/nuxt'
            }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,true)}),_vm._v(" "),_c('v-sheet',{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[_c('v-slide-group',{staticClass:"pa-0 ma-0",attrs:{"multiple":"","show-arrows":""}},_vm._l((_vm.nuxt.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-slide-item',{key:indx,staticClass:"pa-0 ma-0"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"height":"200px","width":"450px"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                    "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})],1)}),1)],1)],1)}),_vm._v(" "),_vm._l((Math.ceil(_vm.nuxt.length / 5)),function(i,ind){return _c('v-row',{key:ind,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                  var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Nuxt")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/nuxt'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,true)})],1),_vm._v(" "),_vm._l((_vm.nuxt.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.laravel.length / 5)),function(i,ind){return (_vm.load_laravel == false)?_c('v-row',{key:ind + 30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"orange lighten-2","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Laravel")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/laravel.svg","width":"25px"}}),_c('br')],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/Laravel'
            }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,true)}),_vm._v(" "),_c('v-sheet',{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[_c('v-slide-group',{staticClass:"pa-0 ma-0",attrs:{"multiple":"","show-arrows":""}},_vm._l((_vm.laravel.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-slide-item',{key:indx,staticClass:"pa-0 ma-0"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"height":"200px","width":"450px"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                    "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v("\n                    "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})],1)}),1)],1)],1):_vm._e()}),_vm._v(" "),_vm._l((Math.ceil(_vm.laravel.length / 5)),function(i,ind){return (_vm.load_laravel == false)?_c('v-row',{key:ind + 40,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                  var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"orange lighten-2"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Laravel")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/laravel.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/Laravel'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,true)})],1),_vm._v(" "),_vm._l((_vm.laravel.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var hover = ref.hover;
return [_c('v-card',{key:indx,staticClass:"mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/' + item.slug
              }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/' + item.slug
              }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v("\n                "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})],1)})],2):_vm._e()}),_vm._v(" "),_vm._l((Math.ceil(_vm.vue.length / 5)),function(i,ind){return (_vm.load_vue == false)?_c('v-row',{key:ind + 30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var hover = ref.hover;
return [_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Vue")]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/vue-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/vue3'
            }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,true)}),_vm._v(" "),_c('v-sheet',{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[_c('v-slide-group',{staticClass:"pa-0 ma-0",attrs:{"multiple":"","show-arrows":""}},_vm._l((_vm.vue.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-slide-item',{key:indx,staticClass:"pa-0 ma-0"},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"height":"200px","width":"450px"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                    "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                    path: 'blog/' + item.slug
                  }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v("\n                    "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})],1)}),1)],1)],1):_vm._e()}),_vm._v(" "),_vm._l((Math.ceil(_vm.vue.length / 5)),function(i,ind){return (_vm.load_vue == false)?_c('v-row',{key:ind + 40,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                  var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Vue")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/vue-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/vue3'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,true)})],1),_vm._v(" "),_vm._l((_vm.vue.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n              "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v("\n              "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2):_vm._e()})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicsIndex.vue?vue&type=template&id=6bb65825&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicsIndex.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopicsIndexvue_type_script_lang_js_ = ({
  data: () => ({
    load_component: true,
    nuxt: [],
    laravel: [],
    vue: [],
    load_nuxt: false,
    load_laravel: false,
    load_vue: false,
    height: '200px'
  }),

  async fetch() {
    this.load_component = true;
    this.load_nuxt = true;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const nuxt = await this.$axios.$get(`api/blog/page/1/item/5/tags/nuxt`);
    this.load_nuxt = false;
    this.nuxt = nuxt.data;
    this.load_laravel = true;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const laravel = await this.$axios.$get(`api/blog/page/1/item/5/tags/Laravel`);
    this.load_laravel = false;
    this.laravel = laravel.data;
    this.load_vue = true;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const vue = await this.$axios.$get(`api/blog/page/1/item/5/tags/vue3`);
    this.load_vue = false;
    this.vue = vue.data;
    this.load_component = false;
  }

});
// CONCATENATED MODULE: ./components/TopicsIndex.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopicsIndexvue_type_script_lang_js_ = (TopicsIndexvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(494);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js
var VSlideGroup = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/groupable/index.js
var groupable = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/console.js
var console = __webpack_require__(3);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VItemGroup/VItem.js
// Mixins
 // Utilities


 // Types


/* @vue/component */

const BaseItem = external_vue_default.a.extend({
  props: {
    activeClass: String,
    value: {
      required: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render() {
    if (!this.$scopedSlots.default) {
      Object(console["c" /* consoleWarn */])('v-item is missing a default scopedSlot', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        active: this.isActive,
        toggle: this.toggle
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(console["c" /* consoleWarn */])('v-item should only contain a single element', this);
      return element;
    }

    element.data = this._b(element.data || {}, element.tag, {
      class: {
        [this.activeClass]: this.isActive
      }
    });
    return element;
  }

});
/* harmony default export */ var VItem = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('itemGroup', 'v-item', 'v-item-group')).extend({
  name: 'v-item'
}));
// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js
// Extensions
 // Mixins



/* harmony default export */ var VSlideItem = (Object(mixins["a" /* default */])(BaseItem, Object(groupable["a" /* factory */])('slideGroup')
/* @vue/component */
).extend({
  name: 'v-slide-item'
}));
// CONCATENATED MODULE: ./components/TopicsIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(349)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopicsIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6bb65825",
  "489b7b7a"
  
)

/* harmony default export */ var TopicsIndex = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */],VSlideGroup: VSlideGroup["b" /* default */],VSlideItem: VSlideItem})


/***/ }),

/***/ 494:
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

/***/ })

};;
//# sourceMappingURL=topics-index.js.map