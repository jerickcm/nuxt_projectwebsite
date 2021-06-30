exports.ids = [29];
exports.modules = {

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return admin; });
const admin = {
  middleware: 'admin',
  layout: 'admin'
};

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(455);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("7888a536", content, true, context)
};

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1afc9e29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1afc9e29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1afc9e29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1afc9e29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_id_1afc9e29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.clean[data-v-1afc9e29]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-1afc9e29],.ck.ck-content.ck-editor__editable[data-v-1afc9e29],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-1afc9e29],.ck.ck-content.ck-editor__editable_inline[data-v-1afc9e29]{height:350px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/quotes/create.vue?vue&type=template&id=1afc9e29&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{"fluid":"","min-height":"800vh"}},[_c('v-sheet',{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[_c('form',{staticClass:"white pa-5",attrs:{"action":""}},[_c('v-row',[_c('v-col',[_c('v-btn',{attrs:{"color":"primary","depressed":"","to":"/admin/quotes/manage"}},[_vm._v("\n            BACK\n          ")])],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"Quote"},on:{"blur":function($event){return _vm.$v.form_message.$touch()},"input":function($event){return _vm.$v.form_message.$touch()}},model:{value:(_vm.form_message),callback:function ($$v) {_vm.form_message=$$v},expression:"form_message"}}),_vm._v(" "),(_vm.$v.form_message.$error)?[(!_vm.$v.form_message.required)?_c('div',{staticClass:"errorMessage red--text"},[_vm._v("\n              Quote is required.\n            ")]):_vm._e()]:_vm._e()],2)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-text-field',{attrs:{"label":"Author"},on:{"blur":function($event){return _vm.$v.form_author.$touch()},"input":function($event){return _vm.$v.form_author.$touch()}},model:{value:(_vm.form_author),callback:function ($$v) {_vm.form_author=$$v},expression:"form_author"}}),_vm._v(" "),(_vm.$v.form_author.$error)?[(!_vm.$v.form_author.required)?_c('div',{staticClass:"errorMessage red--text"},[_vm._v("\n              Title is required.\n            ")]):_vm._e()]:_vm._e()],2)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-select',{attrs:{"items":_vm.publishselection,"item-value":"value","item-text":"text","label":"Publish"},on:{"blur":function($event){return _vm.$v.form_publish.$touch()}},model:{value:(_vm.form_publish),callback:function ($$v) {_vm.form_publish=$$v},expression:"form_publish"}}),_vm._v(" "),(_vm.$v.form_publish.$error)?[(!_vm.$v.form_publish.required)?_c('p',{staticClass:"errorMessage red--text"},[_vm._v("\n              Select Publish is required.\n            ")]):_vm._e()]:_vm._e()],2)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-btn',{staticClass:"ml-0",attrs:{"color":"success"},on:{"click":function($event){return _vm.onSubmit()}}},[_c('label',{staticClass:"white-font"},[_vm._v("Submit")])])],1)],1)],1)])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/quotes/create.vue?vue&type=template&id=1afc9e29&scoped=true&

// EXTERNAL MODULE: ./mixins/admin_pages.js
var admin_pages = __webpack_require__(265);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vuelidate"
var external_vuelidate_ = __webpack_require__(75);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(50);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/quotes/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



external_vue_default.a.use(external_vuelidate_["Vuelidate"]);

const dev = "http://localhost:3001";
const prod = "https://backend.inhinyeru.com";
const url =  false ? undefined : prod;
var timezone = "Asia/Singapore";
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  head: () => ({
    title: 'Create News'
  }),
  mixins: [external_vuelidate_["validationMixin"], admin_pages["a" /* admin */]],
  data: () => ({
    form_message: '',
    form_author: '',
    form_publish: '',
    token: null,
    publishselection: [{
      value: 1,
      text: 'Draft'
    }, {
      value: 2,
      text: 'Publish'
    }]
  }),
  validations: {
    form_message: {
      required: validators_["required"]
    },
    form_author: {
      required: validators_["required"]
    },
    form_publish: {
      required: validators_["required"]
    }
  },
  components: {},

  async created() {},

  computed: {
    titleErrors() {
      const errors = [];
      if (!this.$v.form_title.$dirty) return errors;
      !this.$v.form_title.required && errors.push('Title is required.');
      return errors;
    },

    contentErrors() {
      const errors = [];
      if (!this.$v.form_content.$dirty) return errors;
      !this.$v.form_content.required && errors.push('Content is required.');
      return errors;
    }

  },
  methods: {
    async onSubmit() {
      if (this.form_author && this.form_message && this.form_publish) {
        await this.$axios.$get('/sanctum/csrf-cookie');
        this.$toast.success('Sending');
        let payload = new FormData();
        payload.append('publish', this.form_publish);
        payload.append('message', this.form_message);
        payload.append('author', this.form_author);
        this.$axios.post('/api/quotes/create', payload, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(res => {
          this.$toast.success('Done.'); // redirect('/dashboard')
        }).catch(error => {// this.$toast.success('Error.')
        }).finally(() => {});
      } else {
        this.$toast.error('Validation failed.');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/quotes/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var quotes_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSelect/VSelect.js + 5 modules
var VSelect = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(29);

// CONCATENATED MODULE: ./pages/admin/quotes/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(454)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  quotes_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1afc9e29",
  "3a25f551"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Template: __webpack_require__(59).default})


/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSelect: VSelect["a" /* default */],VSheet: VSheet["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=create.js.map