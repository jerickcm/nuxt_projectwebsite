(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{489:function(e,t,r){var content=r(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("82e52f86",content,!0,{sourceMap:!1})},592:function(e,t,r){"use strict";r(489)},593:function(e,t,r){var n=r(16)(!1);n.push([e.i,"ul.clean[data-v-4ab16fa5]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-4ab16fa5],.ck.ck-content.ck-editor__editable[data-v-4ab16fa5],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-4ab16fa5],.ck.ck-content.ck-editor__editable_inline[data-v-4ab16fa5]{height:350px}",""]),e.exports=n},631:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(60),r(19),r(33),r(37),r(288),r(24),r(1)),l=r(451),c=r(452);o.default.use(l.Vuelidate);var f={head:function(){return{title:"Create Post"}},middleware:"auth",mixins:[l.validationMixin],data:function(){return{image_id:"",url_backend:"",form_content:"",form_title:"",form_publish:"",token:null,publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],image:"",image_preview:"",image_name:""}},validations:{form_content:{required:c.required},form_title:{required:c.required},form_publish:{required:c.required}},components:{"ckeditor-nuxt":function(){return r.e(4).then(r.t.bind(null,605,7))}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.image_id="post-"+(new Date).getTime(),e.timezone="Asia/Singapore",e.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:e.timezone,identifier:e.image_id,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}},t.next=5,e.$axios.$get("/sanctum/csrf-cookie");case 5:case"end":return t.stop()}}),t)})))()},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",!1},onSubmit:function(){var e=this;if(this.form_title&&this.form_content&&this.form_publish){this.$axios.$get("/sanctum/csrf-cookie"),this.$toast.success("Sending");var t=new FormData;t.append("ckeditor_log",this.image_id),t.append("publish",this.form_publish),t.append("title",this.form_title),t.append("content",this.form_content),t.append("image",this.image),t.append("image_name",this.image_name),this.$axios.post("/api/post/create",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$toast.success("Done.")})).catch((function(e){})).finally((function(){}))}else this.$toast.error("Validation failed.")}}},d=(r(592),r(53)),m=r(64),_=r.n(m),v=r(419),h=r(440),$=r(428),k=r(429),w=r(157),x=r(430),C=r(494),y=r(51),V=r(434),S=r(500),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("form",{staticClass:"white pa-5",attrs:{action:""}},[r("v-row",[r("v-col",[r("v-btn",{attrs:{color:"primary",depressed:"",to:"/dashboard"}},[e._v(" BACK ")])],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Title"},on:{blur:function(t){return e.$v.form_title.$touch()},input:function(t){return e.$v.form_title.$touch()}},model:{value:e.form_title,callback:function(t){e.form_title=t},expression:"form_title"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n              Title is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():r("p",{staticClass:"errorMessage red--text"},[e._v("\n              Select Publish is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",{attrs:{lg:"4"}},[r("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),r("v-card",[e.image_preview?r("v-img",{attrs:{src:e.image_preview}}):e._e()],1),e._v(" "),""!=this.image_preview?r("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(t){return e.remove_image()}}},[e._v("Remove")]):e._e()],1),e._v(" "),r("v-spacer")],1),e._v(" "),r("v-row",[r("v-col",[r("label",{staticClass:"black--text",attrs:{for:""}},[e._v("Content")]),e._v(" "),r("br"),e._v(" "),r("client-only",{attrs:{placeholder:"loading..."}},[r("ckeditor-nuxt",{attrs:{config:e.editorConfig,"error-messages":e.contentErrors},on:{blur:function(t){return e.$v.form_content.$touch()},input:function(t){return e.$v.form_content.$touch()}},model:{value:e.form_content,callback:function(t){e.form_content=t},expression:"form_content"}}),e._v(" "),e.$v.form_content.$error?[e.$v.form_content.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n                Content is required.\n              ")])]:e._e()],2)],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(t){return e.onSubmit()}}},[r("label",{staticClass:"white-font"},[e._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"4ab16fa5",null);t.default=component.exports;_()(component,{Template:r(287).default}),_()(component,{VBtn:v.a,VCard:h.a,VCol:$.a,VContainer:k.a,VImg:w.a,VRow:x.a,VSelect:C.a,VSheet:y.a,VSpacer:V.a,VTextField:S.a})}}]);