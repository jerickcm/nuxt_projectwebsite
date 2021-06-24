exports.ids = [12];
exports.modules = {

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/index.vue?vue&type=template&id=dc145004&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('v-row',[_c('v-col',[_c('h1',[_vm._v("Profile Username : "+_vm._s(_vm.username))])])],1),_vm._v(" "),_c('v-row',[_c('v-col',[_c('v-card',[(_vm.profile['details'].cover_photo)?_c('v-img',{attrs:{"src":_vm.profile['details'].cover_photo}}):_vm._e(),_vm._v(" "),(_vm.profile['details'].profile_picture)?_c('v-img',{attrs:{"src":_vm.profile['details'].profile_picture}}):_vm._e(),_vm._v(" "),_c('v-card-text',[_c('span',{staticClass:"fs-1-5"},[_vm._v(_vm._s(_vm.profile.name))]),_c('br'),_vm._v(" "),_c('span',{staticClass:"fs-1-5"},[_c('span',{staticClass:"font-Bonida"},[_vm._v(_vm._s(_vm.allibataname))])]),_c('br'),_vm._v(" "),(_vm.username)?_c('span',[_vm._v("Username: "+_vm._s(_vm.username))]):_vm._e(),_c('br'),_vm._v(" "),(_vm.profile.email)?_c('span',[_vm._v("Email: "+_vm._s(_vm.profile.email))]):_vm._e(),_c('br'),_vm._v(" "),(_vm.profile['details'].house_number)?_c('span',[_vm._v(" Address No: "+_vm._s(_vm.profile['details'].house_number)+" ")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.profile['details'].street)?_c('span',[_vm._v(" Address street: "+_vm._s(_vm.profile['details'].street)+" ")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.profile['details'].city)?_c('span',[_vm._v(" Address City: "+_vm._s(_vm.profile['details'].city)+" ")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.profile['details'].province)?_c('span',[_vm._v(" Address province: "+_vm._s(_vm.profile['details'].province)+" ")]):_vm._e(),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.profile['details'].country)?_c('span',[_vm._v(" Address country: "+_vm._s(_vm.profile['details'].country)+" ")]):_vm._e(),_vm._v(" "),_c('br')])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_username/index.vue?vue&type=template&id=dc145004&

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: 'Profile ' + this.username,
      meta: [{
        hid: 'Profile',
        name: 'Profile',
        content: 'Profile'
      }]
    };
  },

  data() {
    return {
      loading: false,
      profile: [],
      pp: 'test'
    };
  },

  async watch() {},

  async asyncData({
    $axios,
    error,
    params
  }) {
    await $axios.$get('/sanctum/csrf-cookie');
    let response = await $axios.$get(`api/user_details/username/${params.username}`);
    return {
      profile: response.user
    };
  },

  computed: {
    username() {
      return this.$route.params.username;
    },

    allibataname() {
      return this.profile.name;
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
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(12);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(77);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(227);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(229);

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







installComponents_default()(component, {VCard: VCard["a" /* default */],VCardText: components_VCard["b" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map