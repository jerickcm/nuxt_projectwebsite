(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{484:function(t,e,o){var content=o(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("01665be4",content,!0,{sourceMap:!1})},582:function(t,e,o){"use strict";o(484)},583:function(t,e,o){var n=o(16)(!1);n.push([t.i,"ul.clean[data-v-9fb20a6a]{list-style:none!important;list-style-type:none!important}",""]),t.exports=n},626:function(t,e,o){"use strict";o.r(e);var n=o(11),r=(o(60),o(19),o(33),o(37),"https://backend.inhinyeru.com");console.log(r);var l={middleware:"auth",data:function(){return{url:null,form_content:"",form_title:"",token:null}},components:{"ckeditor-nuxt":function(){return o.e(4).then(o.t.bind(null,605,7))}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.$get("/sanctum/csrf-cookie").then((function(t){})),t.url=r,t.timezone="Asia/Singapore",t.editorConfig={simpleUpload:{uploadUrl:"http://back.api.test:3001/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:t.timezone,"X-XSRF-TOKEN":t.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 4:case"end":return e.stop()}}),e)})))()},computed:{},methods:{onSubmit:function(){console.log(this.$auth.user),console.log(this.$store.state.auth.loggedIn),console.log(this.$auth.$storage.getCookies());var t=this.$auth.$storage.getCookies();if(console.log("test"),console.log(t["XSRF-TOKEN"]),this.form_title&&this.form_content){var e=new FormData;e.append("title",this.form_title),e.append("content",this.form_content),this.$axios.post("/api/create-post",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){})).catch((function(t){})).finally((function(){}))}}}},c=(o(582),o(53)),f=o(64),h=o.n(f),m=o(419),d=o(428),v=o(429),_=o(430),w=o(51),k=o(500),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[o("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[o("form",{staticClass:"white pa-5",attrs:{action:""}},[o("v-row",[o("v-col",[o("v-btn",{attrs:{color:"primary",depressed:""}},[t._v(" POST ")])],1)],1),t._v(" "),o("v-row",[o("v-col",[o("v-text-field",{attrs:{label:"Title"},model:{value:t.form_title,callback:function(e){t.form_title=e},expression:"form_title"}})],1)],1),t._v(" "),o("v-row",[o("v-col",[o("label",{staticClass:"black--text",attrs:{for:""}},[t._v("Content")]),t._v(" "),o("br"),t._v(" "),o("client-only",{attrs:{placeholder:"loading..."}},[o("form",{attrs:{action:""}},[o("ckeditor-nuxt",{attrs:{config:t.editorConfig},model:{value:t.form_content,callback:function(e){t.form_content=e},expression:"form_content"}})],1)])],1)],1),t._v(" "),o("v-row",[o("v-col",[o("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(e){return t.onSubmit()}}},[o("label",{staticClass:"white-font"},[t._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"9fb20a6a",null);e.default=component.exports;h()(component,{VBtn:m.a,VCol:d.a,VContainer:v.a,VRow:_.a,VSheet:w.a,VTextField:k.a})}}]);