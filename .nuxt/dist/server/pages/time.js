exports.ids = [62];
exports.modules = {

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/time.vue?vue&type=template&id=152d0de2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"text-align":"center"},attrs:{"id":"intro"}},[_vm._ssrNode("<h1>"+_vm._ssrEscape("Date and Time: "+_vm._s(_vm.timestamp))+"</h1>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/time.vue?vue&type=template&id=152d0de2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/time.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var timevue_type_script_lang_js_ = ({
  data: () => ({
    timestamp: ''
  }),

  computed() {},

  created() {
    setInterval(this.getNow, 500);
  },

  methods: {
    getNow: function () {
      const today = new Date();
      const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getDate();
      const time = today.getHours() + ':' + ('0' + (today.getMinutes() + 1)).slice(-2) + ':' + ('0' + (today.getSeconds() + 1)).slice(-2);
      const dateTime = date + ' ' + time;
      this.timestamp = dateTime;
    }
  }
});
// CONCATENATED MODULE: ./pages/time.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_timevue_type_script_lang_js_ = (timevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// CONCATENATED MODULE: ./pages/time.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_timevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44856c86"
  
)

/* harmony default export */ var time = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=time.js.map