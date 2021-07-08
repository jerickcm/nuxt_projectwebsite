exports.ids = [12];
exports.modules = {

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(338);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("41d82878", content, true, context)
};

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_4f1a907c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(305);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_4f1a907c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_4f1a907c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_4f1a907c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicsIndex_vue_vue_type_style_index_0_id_4f1a907c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-4f1a907c]{text-decoration:none!important}.hr-green[data-v-4f1a907c]{border:3px solid green}.show-btns[data-v-4f1a907c]{color:#fff!important}.cover[data-v-4f1a907c]{-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicsIndex.vue?vue&type=template&id=4f1a907c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.load_component == false)?_c('v-container',{attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:" mb-0 pb-0"},[_c('hr',{staticClass:"hr-green",attrs:{"color":"green"}})])],1),_vm._v(" "),_c('v-row',{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-col',[_c('v-sheet',{staticClass:"d-flex "},[_c('v-hover',{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green","height":_vm.height,"width":_vm.slider_left}},[_c('label',{staticClass:"justify-center  white--text "},[_vm._v("Nuxt")]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/tags/nuxt'
                }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,false,1364033321)}),_vm._v(" "),_vm._l((_vm.nuxt),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"max-width":"400","elevation":hover ? 16 : 2,"height":_vm.height,"width":_vm.width}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                  "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})})],2)],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-col',[_c('v-sheet',{staticClass:"d-flex "},[_c('v-hover',{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"orange","height":_vm.height,"width":_vm.slider_left}},[_c('label',{staticClass:"justify-center  white--text "},[_vm._v("Laravel")]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/laravel.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/tags/Laravel'
                }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,false,753362848)}),_vm._v(" "),_vm._l((_vm.laravel),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"max-width":"400","elevation":hover ? 16 : 2,"height":_vm.height,"width":_vm.width}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                  "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})})],2)],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-col',[_c('v-sheet',{staticClass:"d-flex "},[_c('v-hover',{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green","height":_vm.height,"width":_vm.slider_left}},[_c('label',{staticClass:"justify-center  white--text "},[_vm._v("Vue")]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":"/icons/vue-js.svg","width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/tags/vue3'
                }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,false,4113029579)}),_vm._v(" "),_vm._l((_vm.vue),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto mr-1 ml-1",class:{ 'on-hover': hover },attrs:{"max-width":"400","elevation":hover ? 16 : 2,"height":_vm.height,"width":_vm.width}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","height":_vm.height,"width":"100%"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v("\n                  "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","width":"100%","height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                  path: 'blog/' + item.slug
                }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})})],2)],1)],1),_vm._v(" "),_c('v-row',{key:_vm.ind,staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
                var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Nuxt")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/nuxt-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/nuxt'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,false,3190998480)})],1),_vm._v(" "),_vm._l((_vm.nuxt),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{staticClass:"mr-1 ml-1 cover"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2),_vm._v(" "),_c('v-row',{staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"orange"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Laravel")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/laravel.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/nuxt'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,false,134375535)})],1),_vm._v(" "),_vm._l((_vm.laravel),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2),_vm._v(" "),_c('v-row',{staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
            var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":"green"}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Vue")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":"/icons/vue-js.svg","width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/nuxt'
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,false,1755623600)})],1),_vm._v(" "),_vm._l((_vm.vue),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{key:indx,staticClass:"mr-1 ml-1"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"contain":"","aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/' + item.slug
            }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2)],1):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicsIndex.vue?vue&type=template&id=4f1a907c&scoped=true&

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
/* harmony default export */ var TopicsIndexvue_type_script_lang_js_ = ({
  data: () => ({
    load_component: true,
    nuxt: [],
    laravel: [],
    vue: [],
    load_nuxt: false,
    load_laravel: false,
    load_vue: false,
    height: '17vh',
    width: '100vh',
    slider_right: '90%',
    slider_left: '9%'
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
var VHover = __webpack_require__(474);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(253);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(19);

// CONCATENATED MODULE: ./components/TopicsIndex.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(337)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopicsIndexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4f1a907c",
  "489b7b7a"
  
)

/* harmony default export */ var TopicsIndex = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["c" /* VCardTitle */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 474:
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

/***/ })

};;
//# sourceMappingURL=topics-index.js.map