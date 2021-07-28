exports.ids = [17];
exports.modules = {

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(286);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5e7e3f94", content, true, context)
};

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Services_vue_vue_type_style_index_0_id_b2a81be2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.clean[data-v-b2a81be2]{list-style:none!important;list-style-type:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 290:
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
  
  var style0 = __webpack_require__(285)
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


/***/ })

};;
//# sourceMappingURL=services.js.map