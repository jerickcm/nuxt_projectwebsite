exports.ids = [24];
exports.modules = {

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/skel.vue?vue&type=template&id=2b5fb058&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h1>"+_vm._ssrEscape("Event # "+_vm._s(_vm.id))+"</h1> "),_c('v-container',_vm._l((_vm.rowCount),function(item,index){return _c('v-row',{key:_vm.data.id},_vm._l((_vm.numberOfColumns),function(item,index){return _c('v-col',{key:_vm.data.id},[_vm._v("\n        AA\n      ")])}),1)}),1),_vm._ssrNode(" "),_c('v-container',_vm._l((Math.ceil(_vm.datum.length / 4)),function(i,ind){return _c('v-row',{key:ind,attrs:{"color":"blue"}},_vm._l((_vm.datum.slice((i - 1) * 4, i * 4)),function(item,indx){return _c('v-col',{key:indx,attrs:{"color":"red","lg":"3"}},[_c('v-card',[_vm._v("\n          "+_vm._s(item.name)+"\n        ")])],1)}),1)}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_username/skel.vue?vue&type=template&id=2b5fb058&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_username/skel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var skelvue_type_script_lang_js_ = ({
  auth: false,

  head() {
    return {
      title: 'World Reminders ' + this.id,
      meta: [{
        hid: 'World Reminders',
        name: 'World Reminders',
        content: 'World Reminders'
      }]
    };
  },

  data: () => ({
    datum: [{
      name: 'test1'
    }, {
      name: 'test2'
    }, {
      name: 'test3'
    }, {
      name: 'test4'
    }, {
      name: 'test5'
    }, {
      name: 'test6'
    }, {
      name: 'test7'
    } // { name: 'test78' },
    ],
    data: [1, 2, 3, 4, 5, 6],
    //sample data
    numberOfColumns: 4,
    loading: false
  }),

  async created() {
    console.log(Math.ceil(this.datum.length / 4));
    console.log(this.datum.slice((i - 1) * 4, i * 4));
  },

  async asyncData({
    $axios,
    error,
    params
  }) {
    await $axios.$get('/sanctum/csrf-cookie');
    let response = await $axios.$get(`api/user_details`);
    console.log(response.user['details']);
    return {
      profile: response.user
    };
  },

  computed: {
    id() {
      return this.$route.params.username;
    },

    rowCount: function () {
      return Math.floor((this.data.length - 1) / this.numberOfColumns) + 1;
    }
  },
  methods: {
    layoutCount: function (rows, columns) {
      return (rows - 1) * this.numberOfColumns + columns;
    }
  },

  mounted() {},

  components: {},
  watch: {}
});
// CONCATENATED MODULE: ./pages/_username/skel.vue?vue&type=script&lang=js&
 /* harmony default export */ var _username_skelvue_type_script_lang_js_ = (skelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(252);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(257);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(253);

// CONCATENATED MODULE: ./pages/_username/skel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _username_skelvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f39d98e"
  
)

/* harmony default export */ var skel = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=skel.js.map