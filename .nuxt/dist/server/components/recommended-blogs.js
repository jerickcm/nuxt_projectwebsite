exports.ids = [17];
exports.modules = {

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_delayable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
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

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(376);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6b76c770", content, true, context)
};

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedBlogs_vue_vue_type_style_index_0_id_31ed2202_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedBlogs_vue_vue_type_style_index_0_id_31ed2202_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedBlogs_vue_vue_type_style_index_0_id_31ed2202_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedBlogs_vue_vue_type_style_index_0_id_31ed2202_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecommendedBlogs_vue_vue_type_style_index_0_id_31ed2202_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dont-break-out[data-v-31ed2202]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-31ed2202]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-31ed2202]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-31ed2202]{font-family:\"Barlow-Regular\",sans-serif}.title1[data-v-31ed2202],.v-application a[data-v-31ed2202]{text-decoration:none}.v-application a[data-v-31ed2202]{color:#424dee}.adj-title[data-v-31ed2202]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-31ed2202]{border:3px solid #00f}.hr-red[data-v-31ed2202]{border:3px solid red}.hr-orange[data-v-31ed2202]{border:3px solid orange}.hr-black[data-v-31ed2202]{border:3px solid #000}.tempoup[data-v-31ed2202]{transition:transform .25s}.tempoup[data-v-31ed2202]:hover{transform:translateY(-10px)}.bleft[data-v-31ed2202]{border-left:.3rem solid #1b0597}.bleft[data-v-31ed2202]:hover{border-left:.3rem solid #000}.rr[data-v-31ed2202]{background-color:#add8e6}.rr[data-v-31ed2202]:hover{background-color:#74c0f3}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecommendedBlogs.vue?vue&type=template&id=31ed2202&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"mr-0 pr-0 tag-border"},[_c('v-row',[_c('v-col',{staticClass:"mb-0 pb-0 mt-0 pt-0",attrs:{"xs":"12","sm":"12","md":"12","lg":"12","xl":"12","cols":"12"}},[_c('v-card',{staticClass:"ma-0 pa-0",attrs:{"flat":""}},[_c('v-card-title',{staticClass:"mb-0 pb-0 ml-0 pl-0"},[_c('nuxt-link',{attrs:{"to":"/blog"}},[_c('h3',{staticClass:"ma-0 mt-0 pt-0 blue--text text--darken-5"},[_vm._v("\n              Related Blogs\n            ")])])],1),_vm._v(" "),_c('v-list',{staticClass:"ma-2 pa-2 pl-0 ml-0",attrs:{"flat":""}},[_c('v-list-item-group',{attrs:{"mandatory":""}},_vm._l((_vm.related_blog),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-list-item',{staticClass:" pa-1 ma-1 bleft rr",class:hover ? '' : ''},[_c('v-list-item-content',{class:{ 'on-hover': hover },attrs:{"dark":"","elevation":hover ? 1 : 2,"link":item.slug}},[_c('nuxt-link',{class:hover ? 'white--text' : 'black--text',staticStyle:{"text-decoration":"none"},attrs:{"to":{
                      path: '/blog/' + item.slug
                    }}},[_c('v-list-item-title',{staticClass:"font-ptsans",staticStyle:{"white-space":"pre-line!important"}},[_c('span',{attrs:{"data-id":item['id']}},[_vm._v(_vm._s(item['title'])+"\n                      ")])])],1)],1)],1)]}}],null,true)})}),1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/RecommendedBlogs.vue?vue&type=template&id=31ed2202&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/RecommendedBlogs.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var RecommendedBlogsvue_type_script_lang_js_ = ({
  props: ['related_blog']
});
// CONCATENATED MODULE: ./components/RecommendedBlogs.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_RecommendedBlogsvue_type_script_lang_js_ = (RecommendedBlogsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(306);

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

// CONCATENATED MODULE: ./components/RecommendedBlogs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(375)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_RecommendedBlogsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "31ed2202",
  "6c72c891"
  
)

/* harmony default export */ var RecommendedBlogs = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */












installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemTitle: components_VList["c" /* VListItemTitle */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=recommended-blogs.js.map