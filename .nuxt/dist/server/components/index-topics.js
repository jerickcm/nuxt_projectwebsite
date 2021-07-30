exports.ids = [11,22,23];
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

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(380);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("28dc1606", content, true, context)
};

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("35b9ecb6", content, true, context)
};

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topic_vue_vue_type_style_index_0_id_232093dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(340);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topic_vue_vue_type_style_index_0_id_232093dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topic_vue_vue_type_style_index_0_id_232093dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topic_vue_vue_type_style_index_0_id_232093dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Topic_vue_vue_type_style_index_0_id_232093dd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-232093dd]{text-decoration:none!important}.hr-green[data-v-232093dd]{border:3px solid green}.show-btns[data-v-232093dd]{color:#fff!important}.cover[data-v-232093dd]{-o-object-fit:cover;object-fit:cover}.tempoup[data-v-232093dd]{transition:transform .25s}.tempoup[data-v-232093dd]:hover{transform:translateY(-10px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicM_vue_vue_type_style_index_0_id_36648f38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(341);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicM_vue_vue_type_style_index_0_id_36648f38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicM_vue_vue_type_style_index_0_id_36648f38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicM_vue_vue_type_style_index_0_id_36648f38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopicM_vue_vue_type_style_index_0_id_36648f38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-36648f38]{text-decoration:none!important}.hr-green[data-v-36648f38]{border:3px solid green}.show-btns[data-v-36648f38]{color:#fff!important}.cover[data-v-36648f38]{-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(542);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1fe5e48e", content, true, context)
};

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Topic.vue?vue&type=template&id=232093dd&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[(_vm.loader == false)?_c('v-sheet',{staticClass:"d-flex "},[_c('v-hover',{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{staticClass:"tempoup",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 1 : 2,"color":_vm.color,"height":_vm.height,"width":_vm.slider_left}},[_c('label',{staticClass:"justify-center  white--text "},[_vm._v(_vm._s(_vm.title))]),_c('br'),_vm._v(" "),_c('div',[_c('v-img',{staticClass:"justify-center",attrs:{"src":("/icons/" + _vm.image),"width":"25px"}})],1),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/tags/' + _vm.tag
              }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,false,3816712961)}),_vm._v(" "),_vm._l((_vm.data),function(item,indx){return _c('v-hover',{key:indx,attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
              var hover = ref.hover;
return [_c('v-card',{staticClass:"mx-auto mr-1 ml-1 tempoup",class:{ 'on-hover': hover },attrs:{"max-width":"400","elevation":hover ? 1 : 2,"height":_vm.height,"width":_vm.width}},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"src":item.image,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)","height":_vm.height}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/' + item.slug
              }}},[_c('v-card-title',{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1 ",attrs:{"color":"blue"}},[_vm._v("\n                "+_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"height":_vm.height,"aspect-ratio":"1","gradient":"to bottom, rgba(0,0,0,.0), rgba(0,0,0,.5)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
                path: 'blog/' + item.slug
              }}},[_c('v-card-title',{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,true)})})],2):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Topic.vue?vue&type=template&id=232093dd&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Topic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Topicvue_type_script_lang_js_ = ({
  props: ['data', 'height', 'width', 'slider_right', 'slider_left', 'image', 'tag', 'color', 'title', 'loader']
});
// CONCATENATED MODULE: ./components/Topic.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Topicvue_type_script_lang_js_ = (Topicvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(20);

// CONCATENATED MODULE: ./components/Topic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(379)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Topicvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "232093dd",
  "26af1aa4"
  
)

/* harmony default export */ var Topic = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */









installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicM.vue?vue&type=template&id=36648f38&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',{staticClass:"hidden-md-and-up"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-hover',{attrs:{"open-delay":"200"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var hover = ref.hover;
return [_c('v-card',{staticClass:"d-flex align-center flex-column",class:{ 'on-hover': hover },attrs:{"elevation":hover ? 16 : 2,"color":_vm.color}},[_c('label',{staticClass:"white--text pt-2 ma-1"},[_vm._v("Nuxt")]),_c('br'),_vm._v(" "),_c('v-img',{attrs:{"src":("/icons/" + _vm.image),"width":"25px"}}),_vm._v(" "),_c('label',{staticClass:"justify-center pa-2 mt-auto"},[_c('nuxt-link',{staticClass:"white--text nuxtlink",attrs:{"target":"_blank","to":{
              path: 'blog/tags/' + _vm.tag
            }}},[_vm._v("More"),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}])})],1),_vm._v(" "),_vm._l((_vm.data),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"12","lg":"4","xl":"4","cols":"12"}},[_c('v-card',{staticClass:"mr-1 ml-1 cover"},[(item.image != null)?_c('v-img',{staticClass:"align-end",attrs:{"contain":"","src":item.image,"aspect-ratio":"2.5","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,255,0,.3)"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{"color":"blue"}},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1):_c('v-img',{staticClass:"white--text align-end",attrs:{"aspect-ratio":"2.3","gradient":"to bottom, rgba(0,0,0,.1), rgba(0,255,0,.3)","src":"/images/default.jpg"}},[_c('nuxt-link',{staticClass:"nuxtlink",attrs:{"target":"_blank","to":{
            path: 'blog/' + item.slug
          }}},[_c('v-card-title',{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[_vm._v(_vm._s(item.title)),_c('v-icon',{attrs:{"small":"","color":"white"}},[_vm._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopicM.vue?vue&type=template&id=36648f38&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopicM.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopicMvue_type_script_lang_js_ = ({
  props: ['data', 'height', 'width', 'slider_right', 'slider_left', 'image', 'tag', 'color']
});
// CONCATENATED MODULE: ./components/TopicM.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopicMvue_type_script_lang_js_ = (TopicMvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VHover/VHover.js
var VHover = __webpack_require__(306);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/TopicM.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(381)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopicMvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36648f38",
  "9e6f444e"
  
)

/* harmony default export */ var TopicM = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VCard: VCard["a" /* default */],VCardTitle: components_VCard["d" /* VCardTitle */],VCol: VCol["a" /* default */],VHover: VHover["a" /* default */],VIcon: VIcon["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTopics_vue_vue_type_style_index_0_id_351e5608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(431);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTopics_vue_vue_type_style_index_0_id_351e5608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTopics_vue_vue_type_style_index_0_id_351e5608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTopics_vue_vue_type_style_index_0_id_351e5608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexTopics_vue_vue_type_style_index_0_id_351e5608_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxtlink[data-v-351e5608]{text-decoration:none!important}.hr-green[data-v-351e5608]{border:3px solid green}.show-btns[data-v-351e5608]{color:#fff!important}.cover[data-v-351e5608]{-o-object-fit:cover;object-fit:cover}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexTopics.vue?vue&type=template&id=351e5608&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"tag-border",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('h2',{staticClass:"ma-0 mt-0 pt-0 green--text text--darken-5"},[_vm._v("\n        Featured Topics\n      ")])])],1),_vm._v(" "),(_vm.load_nuxt)?_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.show_nuxt)?_c('Topic',{attrs:{"loader":_vm.load_nuxt,"data":_vm.nuxt,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"nuxt-js.svg","tag":"nuxt","color":"green","title":"Nuxt"}}):_vm._e(),_vm._v(" "),(_vm.load_laravel)?_c('v-row',[_c('v-col',{staticClass:"ml-0 pl-0  mb-0 pb-0"},[_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.show_laravel)?_c('Topic',{attrs:{"loader":_vm.load_laravel,"data":_vm.laravel,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"laravel.svg","tag":"Laravel","color":"orange","title":"Laravel"}}):_vm._e(),_vm._v(" "),(_vm.load_vue)?_c('v-row',[_c('v-col',{staticClass:"ma-0 mt-0 pt-0"},[_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}})],1)],1):_vm._e(),_vm._v(" "),(_vm.show_vue)?_c('Topic',{attrs:{"loader":_vm.load_vue,"data":_vm.vue,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"vue-js.svg","tag":"vue3","color":"green","title":"Vue"}}):_vm._e(),_vm._v(" "),_c('TopicM',{attrs:{"data":_vm.nuxt,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"nuxt-js.svg","tag":"nuxt","color":"green"}}),_vm._v(" "),_c('TopicM',{attrs:{"data":_vm.laravel,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"laravel.svg","tag":"Laravel","color":"orange"}}),_vm._v(" "),_c('TopicM',{attrs:{"data":_vm.vue,"height":_vm.height,"width":_vm.width,"slider_right":_vm.slider_right,"slider_left":_vm.slider_left,"image":"vue-js.svg","tag":"vue3","color":"green"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/IndexTopics.vue?vue&type=template&id=351e5608&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/IndexTopics.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var IndexTopicsvue_type_script_lang_js_ = ({
  props: ['nuxt', 'laravel', 'vue', 'load_nuxt', 'load_laravel', 'load_vue', 'show_nuxt', 'show_laravel', 'show_vue'],
  data: () => ({
    height: '17vh',
    width: '100vh',
    slider_right: '90%',
    slider_left: '9%',
    load_component: true
  }),

  async mounted() {}

});
// CONCATENATED MODULE: ./components/IndexTopics.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_IndexTopicsvue_type_script_lang_js_ = (IndexTopicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// CONCATENATED MODULE: ./components/IndexTopics.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(541)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_IndexTopicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "351e5608",
  "4913d0cb"
  
)

/* harmony default export */ var IndexTopics = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Topic: __webpack_require__(443).default,TopicM: __webpack_require__(444).default})


/* vuetify-loader */





installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index-topics.js.map