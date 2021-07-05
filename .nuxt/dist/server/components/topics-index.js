exports.ids = [11];
exports.modules = {

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(347);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("38c36c79", content, true, context)
};

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_3f38126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_3f38126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_3f38126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_3f38126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_3f38126a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-3f38126a]{text-decoration:none!important}.hr-green[data-v-3f38126a]{border:3px solid green}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicsIndex.vue?vue&type=template&id=3f38126a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:" mb-0 pb-0"},[_c('hr',{staticClass:"hr-green",attrs:{"color":"green"}})])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('h2',{staticClass:"green--text ma-0 mt-0 pt-0 ",attrs:{"color":"green"}},[_vm._v("\n        Topics\n      ")])])],1),_vm._v(" "),_vm._l((Math.ceil(_vm.nuxt.length / 5)),function(i,ind){return _c('v-row',{key:ind + 10,staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column",attrs:{"color":"green","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Nuxt")]),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/tags/nuxt'
          }}},[_vm._v("More\n        ")])],1)]),_vm._v(" "),_vm._l((_vm.nuxt.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-card',{key:indx,staticClass:"mr-1 ml-1",attrs:{"width":"18%"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title))])],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.nuxt.length / 5)),function(i,ind){return _c('v-row',{key:ind,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{staticClass:"d-flex align-center flex-column",attrs:{"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Nuxt")]),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/nuxt'
            }}},[_vm._v("More\n          ")])],1)],1)],1),_vm._v(" "),_vm._l((_vm.nuxt.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"},domProps:{"textContent":_vm._s(item.title)}})],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.laravel.length / 5)),function(i,ind){return _c('v-row',{key:ind + 30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column",attrs:{"color":"orange lighten-2","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Laravel")]),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/laravel.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/tags/Laravel'
          }}},[_vm._v("More\n        ")])],1)]),_vm._v(" "),_vm._l((_vm.laravel.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-card',{key:indx,staticClass:"mr-1 ml-1",attrs:{"width":"18%"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title))])],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.laravel.length / 5)),function(i,ind){return _c('v-row',{key:ind + 40,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{staticClass:"d-flex align-center flex-column",attrs:{"color":"orange lighten-2"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Laravel")]),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/laravel.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/Laravel'
            }}},[_vm._v("More\n          ")])],1)],1)],1),_vm._v(" "),_vm._l((_vm.laravel.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"},domProps:{"textContent":_vm._s(item.title)}})],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.vue.length / 5)),function(i,ind){return _c('v-row',{key:ind + 30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[_c('v-card',{staticClass:"ml-2 d-flex align-center flex-column",attrs:{"color":"green","height":_vm.height,"width":"5%"}},[_c('label',{staticClass:"justify-center pa- white--text "},[_vm._v("Vue")]),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/vue-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/tags/vue3'
          }}},[_vm._v("More\n        ")])],1)]),_vm._v(" "),_vm._l((_vm.vue.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-card',{key:indx,staticClass:"mr-1 ml-1",attrs:{"width":"18%"}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title))])],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)})],2)}),_vm._v(" "),_vm._l((Math.ceil(_vm.vue.length / 5)),function(i,ind){return _c('v-row',{key:ind + 40,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{staticClass:"d-flex align-center flex-column",attrs:{"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Vue")]),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/vue-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/vue3'
            }}},[_vm._v("More\n          ")])],1)],1)],1),_vm._v(" "),_vm._l((_vm.vue.slice((i - 1) * 5, i * 5)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"},domProps:{"textContent":_vm._s(item.title)}})],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","height":_vm.height,"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",domProps:{"textContent":_vm._s(item.title)}})],1)],1)],1)],1)})],2)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicsIndex.vue?vue&type=template&id=3f38126a&scoped=true&

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
/* harmony default export */ var TopicsIndexvue_type_script_lang_js_ = ({
  data: () => ({
    nuxt: [],
    laravel: [],
    vue: [],
    height: '140px'
  }),

  async fetch() {
    await this.$axios.$get('/sanctum/csrf-cookie');
    const nuxt = await this.$axios.$get(`api/blog/page/1/item/5/tags/nuxt`);
    this.nuxt = nuxt.data;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const laravel = await this.$axios.$get(`api/blog/page/1/item/5/tags/Laravel`);
    this.laravel = laravel.data;
    await this.$axios.$get('/sanctum/csrf-cookie');
    const vue = await this.$axios.$get(`api/blog/page/1/item/5/tags/vue3`);
    this.vue = vue.data;
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(253);

// CONCATENATED MODULE: ./components/TopicsIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(346)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopicsIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f38126a",
  "489b7b7a"
  
)

/* harmony default export */ var TopicsIndex = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=topics-index.js.map