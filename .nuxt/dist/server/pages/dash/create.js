exports.ids = [35];
exports.modules = {

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(415);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7069f8d3", content, true, context)
};

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_ad39aefa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(351);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_ad39aefa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_ad39aefa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_ad39aefa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_ad39aefa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.clean[data-v-ad39aefa]{list-style:none!important;list-style-type:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dash/create.vue?vue&type=template&id=ad39aefa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{"fluid":"","min-height":"800vh"}},[_c('v-sheet',{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[_c('form',{staticClass:"white pa-5",attrs:{"action":""}},[_c('v-row',[_c('v-col',[_c('v-btn',{attrs:{"color":"primary","depressed":""}},[_vm._v(" POST ")])],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"Title"},model:{value:(_vm.form_title),callback:function ($$v) {_vm.form_title=$$v},expression:"form_title"}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('label',{staticClass:"black--text",attrs:{"for":""}},[_vm._v("Content")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('client-only',{attrs:{"placeholder":"loading..."}},[_c('form',{attrs:{"action":""}},[_c('ckeditor-nuxt',{attrs:{"config":_vm.editorConfig},model:{value:(_vm.form_content),callback:function ($$v) {_vm.form_content=$$v},expression:"form_content"}})],1)])],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-btn',{staticClass:"ml-0",attrs:{"color":"success"},on:{"click":function($event){return _vm.onSubmit()}}},[_c('label',{staticClass:"white-font"},[_vm._v("Submit")])])],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dash/create.vue?vue&type=template&id=ad39aefa&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dash/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var url = "https://backend.inhinyeru.com";
var timezone = "Asia/Singapore";
console.log(url);
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  middleware: 'auth',

  data() {
    return {
      url: null,
      form_content: '',
      form_title: '',
      token: null
    };
  },

  components: {
    'ckeditor-nuxt': () => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 241, 7))
  },

  async created() {
    this.$axios.$get('/sanctum/csrf-cookie').then(response => {});
    this.url = url;
    this.timezone = timezone;
    this.editorConfig = {
      simpleUpload: {
        uploadUrl: 'http://back.api.test:3001/api/ckeditor',
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          Timezone: this.timezone,
          // Authorization:"Bearer " + this.$auth.$storage.getCookies()["XSRF-TOKEN"],
          'X-XSRF-TOKEN': this.$auth.$storage.getCookies()['XSRF-TOKEN'] // "XSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"],
          // "CSRF-TOKEN": this.$auth.$storage.getCookies()["XSRF-TOKEN"],

        }
      }
    };
  },

  computed: {},
  methods: {
    onSubmit() {
      console.log(this.$auth.user);
      console.log(this.$store.state.auth.loggedIn);
      console.log(this.$auth.$storage.getCookies());
      var test = this.$auth.$storage.getCookies();
      console.log('test'); // console.log(test.__gads);

      console.log(test['XSRF-TOKEN']); // for (let key in test) {
      //   console.log(key, test[key]);
      // }
      // console.log(this.$auth.strategy.refreshToken.get());
      // Access using $auth
      // this.$auth.loggedIn
      // Access using vuex

      if (this.form_title && this.form_content) {
        // this.$axios.$get("/sanctum/csrf-cookie").then(response => {});
        let payload = new FormData();
        payload.append('title', this.form_title);
        payload.append('content', this.form_content);
        this.$axios.post('/api/create-post', payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {}).catch(error => {}).finally(() => {});
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/dash/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var dash_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(249);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(254);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(250);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(29);

// CONCATENATED MODULE: ./pages/dash/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(414)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  dash_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "ad39aefa",
  "77ba26ba"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=create.js.map