exports.ids = [62];
exports.modules = {

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _mixins_reservedusernames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(438);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  mixins: [_mixins_reservedusernames_js__WEBPACK_IMPORTED_MODULE_0__[/* usernames */ "a"]],

  data() {
    return {
      profile: '',
      posts: {
        content: [],
        image: '',
        date: '',
        author: ''
      },
      title: '',
      pageload: true,
      image: '',
      image_preview: '',
      image_name: '',
      form_image: ''
    };
  },

  head() {
    return {
      title: 'Profile :' + this.profile.name,
      meta: [{
        hid: 'Profile',
        name: 'Profile',
        content: 'Profile' + this.profile.name
      }]
    };
  },

  mounted() {
    console.log('mounted');
  },

  async asyncData({
    $axios,
    error,
    params,
    $auth
  }) {
    await $axios.$get('/sanctum/csrf-cookie');
    let response = await $axios.$get(`api/user_details/${$auth.state['user'].email}`);
    return {
      profile: response.user
    };
  },

  computed: {
    email() {
      return this.$auth.state['user'].email;
    },

    alibataname() {
      return this.profile.name;
    }

  },

  async created() {},

  middleware: 'auth',
  components: {},
  watch: {},
  methods: {
    handleFileUpload(e) {
      const file = this.$refs.file.files[0];
      this.image_preview = URL.createObjectURL(file);

      try {
        this.image_name = this.$refs.file.files[0].name;
        this.form_image = this.$refs.file.files[0];
      } catch (err) {
        console.log(err);
      }
    },

    async Update_Profile() {
      var reservedvalues = this.reservedval;

      if (reservedvalues.includes(this.profile['details'].username)) {
        this.$toast.error(`username "` + this.profile['details'].username + `" is reserved`);
      } else {
        let payload = new FormData();
        payload.append('username', this.profile['details'].username);

        try {
          this.$axios.$post(`api/user_details/update/${this.profile.id}`, payload, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res => {}).catch(error => {}).finally(() => {});
        } catch (error) {}
      }
    }

  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(244)["URL"]))

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usernames; });
const usernames = {
  data: () => ({
    reservedval: ['search', 'admin', 'blog', 'codesnippet', 'dash', 'dashboard', 'news', 'post', 'profile', 'quotes', 'technology', 'tutorial', 'world-reminders', 'about', 'contact-us', 'index', 'login', 'logout', 'register', 'template', 'test', 'tutorials', 'users', 'final', 'time']
  })
};

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/edit.vue?vue&type=template&id=133dc010&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('v-container',[_c('v-row',{attrs:{"align":"center"}},[_c('v-col',{attrs:{"lg":"12"}},[_c('v-card',{staticClass:"  pa-4 ma-4"},[_c('input',{ref:"file",attrs:{"type":"file","id":"file"},on:{"change":function($event){return _vm.handleFileUpload()}}}),_vm._v(" "),_c('v-card',[(_vm.image_preview)?_c('v-img',{attrs:{"src":_vm.image_preview}}):_c('div',[(_vm.form_image)?_c('v-img',{attrs:{"src":_vm.form_image}}):_vm._e()],1)],1),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Name"},model:{value:(_vm.profile.name),callback:function ($$v) {_vm.$set(_vm.profile, "name", $$v)},expression:"profile.name"}}),_vm._v(" "),_c('span',{staticClass:"font-Bonida"},[_vm._v(_vm._s(_vm.alibataname))]),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Username"},model:{value:(_vm.profile['details'].username),callback:function ($$v) {_vm.$set(_vm.profile['details'], "username", $$v)},expression:"profile['details'].username"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"House number"},model:{value:(_vm.profile['details'].house_number),callback:function ($$v) {_vm.$set(_vm.profile['details'], "house_number", $$v)},expression:"profile['details'].house_number"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"City"},model:{value:(_vm.profile['details'].city),callback:function ($$v) {_vm.$set(_vm.profile['details'], "city", $$v)},expression:"profile['details'].city"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Street"},model:{value:(_vm.profile['details'].street),callback:function ($$v) {_vm.$set(_vm.profile['details'], "street", $$v)},expression:"profile['details'].street"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Province"},model:{value:(_vm.profile['details'].province),callback:function ($$v) {_vm.$set(_vm.profile['details'], "province", $$v)},expression:"profile['details'].province"}}),_vm._v(" "),_c('v-text-field',{attrs:{"label":"Country"},model:{value:(_vm.profile['details'].country),callback:function ($$v) {_vm.$set(_vm.profile['details'], "country", $$v)},expression:"profile['details'].country"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.Update_Profile}},[_vm._v(" Save ")])],1)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/edit.vue?vue&type=template&id=133dc010&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/edit.vue?vue&type=script&lang=js&
var editvue_type_script_lang_js_ = __webpack_require__(343);

// CONCATENATED MODULE: ./pages/profile/edit.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_editvue_type_script_lang_js_ = (editvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(242);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(254);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js + 2 modules
var VImg = __webpack_require__(73);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(255);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(27);

// CONCATENATED MODULE: ./pages/profile/edit.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_editvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "133dc010",
  "43c10c90"
  
)

/* harmony default export */ var edit = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */








installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VImg: VImg["a" /* default */],VRow: VRow["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=edit.js.map