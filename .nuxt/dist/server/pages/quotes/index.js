exports.ids = [55,8];
exports.modules = {

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(305);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("b647df5e", content, true, context)
};

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_36e386e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(288);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_36e386e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_36e386e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_36e386e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_36e386e6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".transparent[data-v-36e386e6]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-36e386e6]{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(397);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("61668395", content, true, context)
};

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuotesCard.vue?vue&type=template&id=36e386e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-sheet',{staticClass:"ma-0 pa-0"},[_c('v-row',{staticClass:"ma-0 pa-0"},[_c('v-col',{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{"sm":"12","md":"8","lg":"8","xl":"8"}},[_c('h1',[_vm._v("Quotes")]),_vm._v(" "),_c('p',[_vm._v("Memorable quotes from technology and science dicipline")])])],1),_vm._v(" "),_c('v-row',{staticClass:"ma-0 pa-0"},[_c('v-col',{},[_c('v-container',[_vm._l((Math.ceil(_vm.content.length / 3)),function(i,ind){return _c('v-row',{key:ind,attrs:{"color":"blue"}},_vm._l((_vm.content.slice((i - 1) * 3, i * 3)),function(item,indx){return _c('v-col',{key:indx,attrs:{"lg":"4"}},[_c('v-card',{staticClass:" pa-4",attrs:{"height":"15vh"}},[_c('p',[_vm._v(_vm._s(item.message)+" - "+_vm._s(item.author))])])],1)}),1)}),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"lg":"12"}},[_c('v-card',{staticClass:" pa-4 text-center"},[(!(_vm.length == 10))?_c('label',{staticClass:"grey--text pa-4 ma-2",attrs:{"for":""}},[_vm._v("Nothing Follows")]):_vm._e(),_c('br'),_vm._v(" "),_c('v-btn',{staticClass:"white--text pa-4 ma-2",class:_vm.length == 10 ? 'green' : 'grey',attrs:{"disabled":_vm.length == 10 ? false : true},on:{"click":_vm.getnextarticle}},[_vm._v("\n                Next Article\n              ")])],1)],1)],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QuotesCard.vue?vue&type=template&id=36e386e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuotesCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var QuotesCardvue_type_script_lang_js_ = ({
  props: ['content', 'length', 'loading'],
  data: () => ({}),

  async created() {},

  mounted() {},

  computed: {},
  methods: {
    getnextarticle() {
      this.$emit('next-article');
    }

  }
});
// CONCATENATED MODULE: ./components/QuotesCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuotesCardvue_type_script_lang_js_ = (QuotesCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(215);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(229);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(15);

// CONCATENATED MODULE: ./components/QuotesCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(304)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuotesCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36e386e6",
  "6513b9bc"
  
)

/* harmony default export */ var QuotesCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_326ed740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(336);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_326ed740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_326ed740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_326ed740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_326ed740_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "ul.clean[data-v-326ed740]{list-style:none!important;list-style-type:none!important}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/quotes/index.vue?vue&type=template&id=326ed740&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"white",attrs:{"fluid":""}},[_c('v-row',{},[_c('v-col',{attrs:{"md":"12","lg":"12"}},[_c('QuotesCard',{attrs:{"content":_vm.content,"length":_vm.length,"loading":_vm.loading},on:{"next-article":_vm.nextArticle}})],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('script',{attrs:{"async":"","src":"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),_vm._v(" "),_c('script',[_vm._v("\n          (adsbygoogle = window.adsbygoogle || []).push({});\n          ")]),_vm._v(" "),_c('ins',{staticClass:"adsbygoogle",staticStyle:{"display":"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/quotes/index.vue?vue&type=template&id=326ed740&scoped=true&

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(9);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__(49);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/quotes/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var quotesvue_type_script_lang_js_ = ({
  created() {
    setTimeout(function () {
      this.$nuxt.$loading.finish();
    }, 1000);
  },

  transition: {
    beforeEnter(el) {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
    }

  },
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Quotes',
    meta: [{
      hid: 'Quotes',
      name: 'Quotes',
      content: 'Quotes Article Page'
    }]
  }),
  data: () => ({
    loading: false,
    page: 2
  }),

  async asyncData({
    $axios,
    error,
    params
  }) {
    await $axios.$get('/sanctum/csrf-cookie');
    const res = await $axios.$get(`api/quotes/page/1/item/10`);
    return {
      content: res.data,
      length: res.data.length
    };
  },

  async created() {},

  mounted() {},

  components: {},
  watch: {},
  methods: {
    async nextArticle() {
      this.loading = true;
      await this.$axios.$get('/sanctum/csrf-cookie');
      external_nprogress_default.a.start();
      external_nprogress_default.a.inc();

      try {
        this.$axios.$get(`api/quotes/page/${this.page}/item/${10}`).then(res => {
          this.length = res.data.length;
          this.content = [...this.content, ...res.data];
          external_nprogress_default.a.done();
          this.page = this.page + 1;
          this.loading = false;
        }).catch(error => {
          this.loading = false;
          external_nprogress_default.a.done();
        }).finally(() => {});
      } catch (error) {
        this.loading = false;
        console.log('error');
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/quotes/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_quotesvue_type_script_lang_js_ = (quotesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(229);

// CONCATENATED MODULE: ./pages/quotes/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(396)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_quotesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "326ed740",
  "174596e6"
  
)

/* harmony default export */ var quotes = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {QuotesCard: __webpack_require__(375).default})


/* vuetify-loader */




installComponents_default()(component, {VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map