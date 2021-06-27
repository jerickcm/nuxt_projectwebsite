exports.ids = [38];
exports.modules = {

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6d9cfa92", content, true, context)
};

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_style_index_0_id_0b0bb6d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_style_index_0_id_0b0bb6d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_style_index_0_id_0b0bb6d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_style_index_0_id_0b0bb6d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_final_vue_vue_type_style_index_0_id_0b0bb6d3_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".link[data-v-0b0bb6d3]{cursor:pointer;text-decoration:underline}.container[data-v-0b0bb6d3]{font-size:20px;text-align:center;padding-top:100px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/final.vue?vue&type=template&id=0b0bb6d3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<p data-v-0b0bb6d3>About Page</p> <p data-v-0b0bb6d3>It should take 5 seconds for the loader to disappear</p> <p data-v-0b0bb6d3>\n    It should take 5 seconds for the route to change after you\n    <span class=\"link\" data-v-0b0bb6d3>\n      click here\n    </span></p>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/final.vue?vue&type=template&id=0b0bb6d3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/final.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var finalvue_type_script_lang_js_ = ({
  loading: false,

  asyncData() {
    return new Promise(resolve => {
      setTimeout(function () {
        resolve({});
      }, 1000);
    });
  },

  mounted() {
    setTimeout(() => {
      // Extend loader for an additional 5s
      this.$nuxt.$loading.finish();
    }, 5000);
  },

  methods: {
    goToFinal() {
      // Start loader immediately
      this.$nuxt.$loading.start(); // Actually change route 5s later

      setTimeout(() => {
        this.$router.push('/test');
      }, 5000);
    }

  }
});
// CONCATENATED MODULE: ./pages/final.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_finalvue_type_script_lang_js_ = (finalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/final.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(392)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_finalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0b0bb6d3",
  "0f1f0953"
  
)

/* harmony default export */ var pages_final = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=final.js.map