exports.ids = [37];
exports.modules = {

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("32973024", content, true, context)
};

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b463c44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(366);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b463c44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b463c44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b463c44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1b463c44_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".font-lulu[data-v-1b463c44]{font-family:\"Lulu\",sans-serif}.font-halimun[data-v-1b463c44]{font-family:\"Halimun\",sans-serif}.font-barlowreg[data-v-1b463c44]{font-family:\"Barlow-Regular\",sans-serif}.bounce-enter-active[data-v-1b463c44]{-webkit-animation:bounce-in-data-v-1b463c44 .5s;animation:bounce-in-data-v-1b463c44 .5s}.bounce-leave-active[data-v-1b463c44]{animation:bounce-in-data-v-1b463c44 .5s reverse}@-webkit-keyframes bounce-in-data-v-1b463c44{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-1b463c44{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=1b463c44&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"ma-0 pa-0 grey lighten-3",attrs:{"fluid":""}},[_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12","md":"12"}},[_c('v-sheet',{staticClass:"black lighten-5",attrs:{"elevation":"2","min-height":"10vh"}},[_c('v-container',[_c('v-row',{staticClass:"pt-5"},[_c('v-col',{staticClass:"text-center",attrs:{"cols":"12","sm":"12","lg":"9"}},[_c('label',{staticClass:"font-lulu white--text",class:{
                  'fs-1.1': _vm.$vuetify.breakpoint.smAndDown,
                  'fs-3': _vm.$vuetify.breakpoint.mdAndUp
                }},[_vm._v("JERICK C. MANGALUS")])]),_vm._v(" "),_c('v-col',{staticClass:"text-center mt-7",attrs:{"cols":"12","sm":"12","lg":"3"}},[_c('label',{staticClass:"text-right white--text",class:{
                  'fs-0-5': _vm.$vuetify.breakpoint.smAndDown,
                  'fs-1-0': _vm.$vuetify.breakpoint.mdAndUp
                }},[_vm._v("[ Technology R&D ]\n              ")])])],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"col-md-6 offset-md-3 text-center"},[_c('div',{staticClass:"hidden-sm-and-down text-center"},_vm._l((_vm.links),function(link){return _c('v-btn',{key:link.label,staticClass:"black pa-1 ma-1 white--text",attrs:{"plain":"","text":"","tile":"","rounded":""}},[_vm._v("\n                  "+_vm._s(link.label)+"\n                ")])}),1),_vm._v(" "),_c('v-card',{staticClass:"mx-auto hidden-md-and-up d-none",attrs:{"tile":""}},[_c('v-list',{attrs:{"dense":""}},[_c('v-list-item-group',{attrs:{"color":"primary"},model:{value:(_vm.selectedItem),callback:function ($$v) {_vm.selectedItem=$$v},expression:"selectedItem"}},_vm._l((_vm.links),function(item,i){return _c('v-list-item',{key:i},[_c('v-list-item-content',[_c('v-list-item-title',{domProps:{"textContent":_vm._s(item.label)}})],1)],1)}),1)],1)],1)],1)],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{staticClass:"grey lighten-5 pa-1 ma-1",attrs:{"elevation":"2"}},[_c('v-container',{},[_c('v-row',{staticClass:"mt-5",attrs:{"no-gutters":""}},[_c('v-col',{attrs:{"cols":"12","sm":"12","lg":"12"}},[_c('v-layout',{attrs:{"justify-center":"","align-center":""}},[(_vm.$vuetify.breakpoint.smAndDown)?_c('v-avatar',{staticClass:"text-center black",attrs:{"size":150}},[_c('v-img',{staticClass:"text-center",attrs:{"src":"/images/cartoon-darken.jpg"}})],1):_c('v-avatar',{staticClass:"text-center black",attrs:{"size":350}},[_c('v-img',{staticClass:"text-center",attrs:{"src":"/images/cartoon-darken.jpg"}})],1)],1)],1)],1),_vm._v(" "),_c('v-row',{staticClass:"mt-5",attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"font-avenir fs-1-4 text-center",attrs:{"cols":"12","sm":"12","lg":"12"}})],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{attrs:{"color":"background","elevation":"2","min-height":"30vh"}},[_c('v-container',{},[_c('v-row',{attrs:{"no-gutters":""}},[_c('v-col',{staticClass:"pa-1 ma-1",attrs:{"cols":"12","sm":"12","lg":"12"}},[_c('p',{staticClass:"fs-1-1 text-justify fs-1-8 font-barlowreg"},[_vm._v("\n                The inspiration of this website build is to expand my\n                knowledge base , in web development. Secondly I am planning to\n                retain this website in a public server earning from ads. Maybe\n                in my free time I could just update it with my newly learned\n                tricks in web deveopment. This website is running in frontend\n                Vue in a nuxt framework and backend is Laravel8. The time this\n                site is being developed is in the new release of PHP version\n                8. Also docker is in my list of research I am actually\n                surprised with laravel response to api is very slow and that\n                is because i am using windows file system that later i\n                discovered you need to be inside the linux filesystem because\n                I was running the backend in a linux container image. This\n                project is using docker in local and docker also in Google\n                Cloud Platform that is my dev-ops application. I am using\n                Laravel sail to build the containers connecting backend and\n                frontend I used Laravel Santum together with Nuxt auth next\n                node plugin. Along development I am learning a lot I advise\n                aldo for developer to do this during work from home. By the\n                way developing this site is during the pandemic it started in\n                March 20, 2020 here in the Philippines and at present covid-19\n                is still a threat to peoples lives. Even though their is\n                already a vaccine the production seems to still inadequate.\n              ")])])],1)],1)],1)],1)],1),_vm._v(" "),_c('v-row',[_c('v-col',{staticClass:"ma-0 pa-0",attrs:{"xs":"12","sm":"12","lg":"12"}},[_c('v-sheet',{attrs:{"elevation":"2","min-height":"10vh"}},[_c('v-container',{},[_c('v-row',[_c('v-col',{attrs:{"cols":"12","sm":"12","lg":"12"}},[(_vm.LoadingStatus)?_c('v-progress-linear',{attrs:{"color":"blue accent-5","indeterminate":"","rounded":"","height":"6"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.MessageOfTheDay),function(message){return (!_vm.LoadingStatus)?_c('div',{key:message.author},[_c('p',{staticClass:"text-center mt-5",class:{
                    'fs-1.1': _vm.$vuetify.breakpoint.smAndDown,
                    'fs-1.5': _vm.$vuetify.breakpoint.mdAndUp
                  },attrs:{"for":""}},[_vm._v("\n                  \" "+_vm._s(message.message)+" \" - "+_vm._s(message.author)+"\n                ")])]):_vm._e()})],2)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=1b463c44&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(43);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  loading: {
    color: 'orange',
    height: '5px'
  },
  middleware: 'auth',
  auth: false,
  head: () => ({
    title: 'Profile ',
    meta: [{
      hid: 'Profile',
      name: 'Profile',
      content: 'Profile'
    }]
  }),
  data: () => ({
    selectedItem: 0,
    show: true,
    title: '',
    model: 6,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
    links: []
  }),
  layout: 'default',
  methods: { ...Object(external_vuex_["mapActions"])('messageoftheday', ['fetchQuote'])
  },
  computed: { ...Object(external_vuex_["mapGetters"])('messageoftheday', ['MessageOfTheDay', 'LoadingStatus'])
  },

  async created() {},

  async mounted() {
    await this.$axios.$get('/sanctum/csrf-cookie');

    try {
      this.fetchQuote();
    } catch (error) {
      console.log(error);
    }
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(71);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(212);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
var grid = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js


/* harmony default export */ var VLayout = (Object(grid["a" /* default */])('layout'));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 3 modules
var components_VList = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemGroup.js
var VListItemGroup = __webpack_require__(75);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VProgressLinear/VProgressLinear.js
var VProgressLinear = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(226);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(15);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(459)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1b463c44",
  "1c7740e9"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */
















installComponents_default()(component, {VAvatar: VAvatar["a" /* default */],VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VLayout: VLayout,VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemGroup: VListItemGroup["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VProgressLinear: VProgressLinear["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map