exports.ids = [11];
exports.modules = {

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/index.vue?vue&type=template&id=aaca5b08&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>"+_vm._ssrEscape("Profile # "+_vm._s(_vm.id))+"</h1> "),_c('v-container',[_c('v-row',[_vm._v(" "+_vm._s(_vm.profile))])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_username/index.vue?vue&type=template&id=aaca5b08&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _usernamevue_type_script_lang_js_ = ({
  auth: false,

  head() {
    return {
      title: 'Profile ' + this.id,
      meta: [{
        hid: 'Profile',
        name: 'Profile',
        content: 'Profile'
      }]
    };
  },

  data() {
    loading: false;
  },

  async asyncData({
    $axios,
    error,
    params
  }) {
    await $axios.$get('/sanctum/csrf-cookie');
    let response = await $axios.$get(`api/user_details/username/${params.username}`); // console.log(response.user['details'])

    return {
      profile: response.user
    };
  },

  computed: {
    id() {
      return this.$route.params.username;
    },

    username() {
      return this.$route.params.username;
    }

  },
  methods: {},

  mounted() {},

  components: {},
  watch: {}
});
// CONCATENATED MODULE: ./pages/_username/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_usernamevue_type_script_lang_js_ = (_usernamevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(192);

// CONCATENATED MODULE: ./pages/_username/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_usernamevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1e0a5142"
  
)

/* harmony default export */ var _username = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map