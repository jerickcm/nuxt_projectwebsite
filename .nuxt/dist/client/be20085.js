(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{440:function(t,e,n){"use strict";n(10),n(7),n(9),n(13),n(8),n(14);var r=n(2),o=(n(23),n(202),n(442),n(105)),l=n(444),c=n(85),d=n(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},442:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("e23b7040",content,!0,{sourceMap:!1})},443:function(t,e,n){var r=n(15)(!1);r.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=r},474:function(t,e,n){var content=n(475);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2065bca8",content,!0,{sourceMap:!1})},475:function(t,e,n){var r=n(15)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},496:function(t,e,n){"use strict";var r=n(71),o=n(2),l=(n(23),n(72),n(58),n(33),n(57),n(92),n(10),n(7),n(9),n(13),n(8),n(14),n(474),n(437)),c=n(106),d=n(129),v=n(211),h=n(214),f=n(213),m=n(212),_=n(42),x=n(130),y=n(5),w=n(6),k=n(0);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C=Object(y.a)(c.a,d.a,v.a,h.a,f.a,m.a,_.a);e.a=C.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===k.x.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(l.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:$({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=$($({},data.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(k.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(k.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},584:function(t,e,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("da564666",content,!0,{sourceMap:!1})},759:function(t,e,n){"use strict";n(584)},760:function(t,e,n){var r=n(15)(!1);r.push([t.i,"ul.clean[data-v-506d7434]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-506d7434],.ck.ck-content.ck-editor__editable[data-v-506d7434],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-506d7434],.ck.ck-content.ck-editor__editable_inline[data-v-506d7434]{height:350px}",""]),t.exports=r},815:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(11),l=(n(19),n(32),n(36),n(291),n(27),n(125),n(30),n(209),n(207),n(54),n(455)),c=n(456),d=n(37),v=n.n(d),h=(n(160),{middleware:"auth",mixins:[l.validationMixin],head:function(){return{title:"Post Datatable"}},data:function(){return{headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Quotes",value:"message"},{text:"Author",value:"author"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_content:"",form_title:"",form_author:"",form_message:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_author:{required:c.required},form_message:{required:c.required},form_publish:{required:c.required}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},components:{},computed:{titleErrors:function(){var t=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&t.push("Title is required."),t):t},contentErrors:function(){var t=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&t.push("Content is required."),t):t}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{handleFileUpload:function(t){var e=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(e);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(t){console.log(t)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},editItem:function(t){this.form_title=this.tabledata[this.tabledata.indexOf(t)].title,this.form_image=this.tabledata[this.tabledata.indexOf(t)].image,this.form_message=this.tabledata[this.tabledata.indexOf(t)].message,this.form_author=this.tabledata[this.tabledata.indexOf(t)].author,this.form_publish=this.tabledata[this.tabledata.indexOf(t)].publishvalue,this.editedIndex=this.tabledata.indexOf(t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.tabledata.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},SaveEdited:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:v.a.start(),n=new FormData,r=t.tabledata[t.editedIndex].id,n.append("post_id",t.tabledata[t.editedIndex].id),n.append("message",t.form_message),n.append("author",t.form_author),n.append("publish",t.form_publish);try{t.$axios.$post("api/quotes/update/".concat(r),n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.tabledata[t.editedIndex].message=t.form_message,t.tabledata[t.editedIndex].author=t.form_message,t.tabledata[t.editedIndex].publish=1==t.form_publish?"Draft":"Publish",t.tabledata[t.editedIndex].publishvalue=t.form_publish,t.dialog=!1,t.form_publish="",v.a.done()})).catch((function(e){t.form_publish="",v.a.done()})).finally((function(){}))}catch(t){}case 10:case"end":return e.stop()}}),e)})))()},deleteItemConfirm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:n=t.tabledata[t.editedIndex].id;try{t.$axios.$delete("api/quotes/delete/".concat(n)).then((function(t){})).catch((function(t){})).finally((function(){}))}catch(t){}t.tabledata.splice(t.editedIndex,1),t.closeDelete();case 6:case"end":return e.stop()}}),e)})))()},getDataFromApi:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l,c,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.options,o=n.sortBy,l=n.sortDesc,c=n.page,d=n.itemsPerPage,(v=new FormData).append("sortDesc",l),v.append("sortBy",o),v.append("page",c),v.append("itemsPerPage",d),v.append("search",t.search),e.next=10,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 10:t.$axios.$post("api/quotes/datatable",v).then((function(e){var data=[],n=1;n=1==c?1:(c-1)*d+1;for(var o=0,l=Object.entries(e.data);o<l.length;o++){var v=Object(r.a)(l[o],2),h=(v[0],v[1]);data.push({no:n,name:h.name,id:h.id,slug:h.slug,title:h.title,content:h.content,publish:1==h.publish?"Draft":"Publish",publishvalue:h.publish,image:h.image,created_at:h.human_date,message:h.message,author:h.author}),n++}t.tabledata=data,t.tabledata_total=e.total,t.loading=!1})).catch((function(e){t.loading=!1})).finally((function(){t.loading=!1}));case 11:case"end":return e.stop()}}),e)})))()}}}),f=(n(759),n(40)),m=n(47),_=n.n(m),x=n(422),y=n(440),w=n(439),k=n(430),O=n(431),$=n(497),C=n(496),j=n(191),D=n(432),I=n(460),A=n(52),P=n(436),S=n(602),T=n(53),E=n(208),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[n("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[n("v-card",[n("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{tile:""}},[n("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("v-toolbar-title",[t._v("Settings")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:t.SaveEdited}},[t._v(" Save ")])],1)],1),t._v(" "),n("v-card-text",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Quote"},on:{blur:function(e){return t.$v.form_message.$touch()},input:function(e){return t.$v.form_message.$touch()}},model:{value:t.form_message,callback:function(e){t.form_message=e},expression:"form_message"}}),t._v(" "),t.$v.form_message.$error?[t.$v.form_message.required?t._e():n("div",{staticClass:"errorMessage red--text"},[t._v("\n                   Quote is required.\n                  ")])]:t._e()],2)],1),t._v(" "),n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Author"},on:{blur:function(e){return t.$v.form_author.$touch()},input:function(e){return t.$v.form_author.$touch()}},model:{value:t.form_author,callback:function(e){t.form_author=e},expression:"form_author"}}),t._v(" "),t.$v.form_author.$error?[t.$v.form_author.required?t._e():n("div",{staticClass:"errorMessage red--text"},[t._v("\n                   Author is required.\n                  ")])]:t._e()],2)],1),t._v(" "),n("v-row",[n("v-col",[n("v-select",{attrs:{items:t.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(e){return t.$v.form_publish.$touch()}},model:{value:t.form_publish,callback:function(e){t.form_publish=e},expression:"form_publish"}}),t._v(" "),t.$v.form_publish.$error?[t.$v.form_publish.required?t._e():n("p",{staticClass:"errorMessage red--text"},[t._v("\n                    Select Publish is required.\n                  ")])]:t._e()],2)],1)],1),t._v(" "),n("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),t._v(" "),n("v-card-title",[t._v("\n        Quotes Table\n        "),n("v-spacer"),t._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:t.getDataFromApi},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.tabledata,options:t.options,"server-items-length":t.tabledata_total,loading:t.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),n("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(e){var header=e.header;return[t._v("\n          "+t._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(e){var header=e.header;return[t._v("\n          "+t._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.publish)+"\n        ")]}},{key:"item.created_at",fn:function(e){var n=e.item;return[t._v("\n          "+t._s(n.created_at)+"\n        ")]}},{key:"item.id",fn:function(e){var r=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n            mdi-pencil\n          ")]),t._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"506d7434",null);e.default=component.exports;_()(component,{Template:n(290).default}),_()(component,{VBtn:x.a,VCard:y.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:k.a,VContainer:O.a,VDataTable:$.a,VDialog:C.a,VIcon:j.a,VRow:D.a,VSelect:I.a,VSheet:A.a,VSpacer:P.a,VTextField:S.a,VToolbar:T.a,VToolbarItems:E.a,VToolbarTitle:E.b})}}]);