exports.ids = [55];
exports.modules = {

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VCardActions; });
/* unused harmony export VCardSubtitle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "i"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=template&id=bb5dafda&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{staticClass:"ma-0 pa-0",attrs:{"fluid":""}},[_c('v-row',{attrs:{"min-height":"100vh"}},[_c('v-col',{staticClass:"grey lighten-4 pa-4 ma-0",attrs:{"sm":"12","lg":"8"}},[_c('v-card',{staticClass:"grey lighten-5 pa-0 ma-1 ",attrs:{"min-height":"200vh"}},[_c('v-card',[_vm._v("\n          "+_vm._s(_vm.MessageOfTheDay)+"\n          "),_c('v-card-text',[_vm._v(" "+_vm._s(_vm.Message)+" - "+_vm._s(_vm.Author)+" ")])],1)],1)],1),_vm._v(" "),_c('v-col',{staticClass:"grey lighten-4 pa-4 ma-0",attrs:{"sm":"12","lg":"4"}},[_c('v-card',{staticClass:"grey lighten-5 pa-0",attrs:{"min-height":"200vh"}},[_c('v-sheet',{staticClass:"pa-2 ma-2 text-center",attrs:{"color":"white","elevation":"2"}},[_c('label',[_vm._v("Using vuex in Counters")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(this.$store.state.test.counter))]),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.add_one}},[_vm._v("Add 1")]),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":_vm.remove_one}},[_vm._v("Remove 1")])],1),_vm._v(" "),_c('v-sheet',{staticClass:"pa-2 ma-2 text-center",attrs:{"color":"white","elevation":"2"}},[_c('label',[_vm._v("Using vuex in Nuxt")]),_vm._v(" "),_c('ul',[_vm._l((_vm.todos),function(todo){return _c('li',{key:todo.text},[_c('input',{attrs:{"type":"checkbox"},domProps:{"checked":todo.done},on:{"change":function($event){return _vm.toggle(todo)}}}),_vm._v(" "),_c('span',{class:{ done: todo.done }},[_vm._v(_vm._s(todo.text))])])}),_vm._v(" "),_c('li',[_c('input',{attrs:{"placeholder":"What needs to be done?"},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addTodo.apply(null, arguments)}}})])],2)]),_vm._v(" "),_c('v-sheet',{staticClass:"pa-2 ma-2 text-center",attrs:{"color":"white","elevation":"2"}},[_c('label',[_vm._v("Using vuex mapGetters and mapActions")]),_vm._v(" "),_c('div',[_c('v-text-field',{attrs:{"placeholder":"Add Todo..."},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}}),_vm._v(" "),_c('v-btn',{attrs:{"color":"green"},on:{"click":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_vm._v("Submit")])],1),_vm._v(" "),_vm._l((_vm.allTodos),function(todo){return _c('div',{key:todo.id},[_c('v-sheet',{staticClass:"text-left pa-1 ma-1 orange lighten-2"},[_vm._v("\n              "+_vm._s(todo.title)+"\n              "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){return _vm.deleteTodos(todo.id)}}},[_vm._v("Delete")])],1)],1)})],2),_vm._v(" "),_c('v-sheet',{staticClass:"pa-2 ma-2 text-center",attrs:{"color":"white","elevation":"2"}},_vm._l((_vm.myDatas),function(test){return _c('div',{key:test.id},[_vm._v("\n            "+_vm._s(test.id)+" - "+_vm._s(test.title)+"\n          ")])}),0)],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/test.vue?vue&type=template&id=bb5dafda&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__(45);

// EXTERNAL MODULE: ./mixins/greeting.js
var greeting = __webpack_require__(49);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/test.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var testvue_type_script_lang_js_ = ({
  data: () => ({
    title: ''
  }),
  layout: 'default',
  mixins: [greeting["a" /* greetMixins */]],
  methods: {
    //test1
    add_one() {
      this.$store.commit('test/increment');
    },

    remove_one() {
      this.$store.commit('test/decrement');
    },

    //test2
    addTodo(e) {
      this.$store.commit('todos/add', e.target.value);
      e.target.value = '';
    },

    ...Object(external_vuex_["mapMutations"])({
      toggle: 'todos/toggle'
    }),
    //test 3
    ...Object(external_vuex_["mapActions"])('users', ['fetchTodos', 'addTodos', 'deleteTodos']),

    onSubmit(e) {
      e.preventDefault();
      this.addTodos(this.title);
    },

    ...Object(external_vuex_["mapActions"])('messageoftheday', ['fetchQuote'])
  },
  computed: {
    //test2
    todos() {
      return this.$store.state.todos.list;
    },

    //test3
    // ...mapGetters('users', ['allTodos']),
    ...Object(external_vuex_["mapGetters"])('users', ['myDatas', 'allTodos']),
    ...Object(external_vuex_["mapGetters"])('messageoftheday', ['Author', 'Message', 'MessageOfTheDay'])
  },

  created() {
    this.$axios.$get('/sanctum/csrf-cookie');
    this.fetchTodos('test');
    this.fetchQuote();
  },

  mounted() {}

});
// CONCATENATED MODULE: ./pages/test.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_testvue_type_script_lang_js_ = (testvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(11);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(207);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(206);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(221);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(222);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(223);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(224);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 3 modules
var VTextField = __webpack_require__(212);

// CONCATENATED MODULE: ./pages/test.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_testvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bb5dafda",
  "05b58145"
  
)

/* harmony default export */ var test = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCardText: components_VCard["b" /* VCardText */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */],VSpacer: VSpacer["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=test.js.map