(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{655:function(t,e,r){var content=r(784);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("13b1ff85",content,!0,{sourceMap:!1})},783:function(t,e,r){"use strict";r(655)},784:function(t,e,r){var o=r(11)(!1);o.push([t.i,"ul.clean[data-v-3077bd83]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},785:function(t,e,r){var content=r(786);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5db1c400",content,!0,{sourceMap:!1})},786:function(t,e,r){var o=r(11)(!1);o.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=o},872:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(10),r(13),r(9),r(14);var o=r(1);r(29),r(23),r(32),r(187),r(189);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={middleware:"auth",data:function(){return{draw:1,users:[],searchQuery:"",loading:!0,pagination:{descending:!0,page:1,rowsPerPage:10,sortBy:"id",totalItems:0},totalUsers:0,rowsPerPageItems:[10,15,20,30,40,50],columns:{},headers:[{text:"Actions",value:"actions",sortable:!1,searchable:!1,width:"210px"},{text:"ID",value:"id",name:"id",sortable:!0,searchable:!0,width:"40px"},{text:"Name",value:"name",name:"name",sortable:!0,searchable:!0,width:"250px"},{text:"Email",value:"email",sortable:!0,searchable:!0,width:"80px"}],cancelSource:null}},watch:{params:{handler:function(){var t=this;this.getDataFromApi().then((function(data){t.users=data.items,t.totalUsers=data.total}))},deep:!0}},mounted:function(){for(var i=0;i<this.headers.length;i++)this.columns[i]={data:this.headers[i].value,name:void 0!==this.headers[i].name?this.headers[i].name:this.headers[i].value,searchable:this.headers[i].searchable,orderable:this.headers[i].sortable,search:{value:"",regex:!1}}},computed:{params:function(t){return l(l({},this.pagination),{},{query:this.searchQuery})}},methods:{cancelRequest:function(){this.cancelSource&&this.cancelSource.cancel("Start new search, stop active search")},getDataFromApi:function(){var t=this;return this.loading=!0,new Promise((function(e,r){t.cancelRequest(),t.cancelSource=axios.CancelToken.source();var o=t.params;o.length=o.rowsPerPage,o.start=1==o.page?0:o.rowsPerPage*(o.page-1),o.search={value:o.query,regex:!1},o.draw=t.draw,o.sortBy?o.order={0:{column:_.findIndex(t.headers,{value:o.sortBy}),dir:o.descending?"desc":"asc"}}:o.order={0:{column:1,dir:"desc"}},o.columns=t.columns}))}}},d=(r(783),r(35)),h=r(31),v=r.n(h),m=(r(34),r(785),r(94)),f=r(125),x=r(48),y=r(36),w=r(16),O=r(2).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),C=r(4),j=r(5);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function B(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=Object(C.a)(m.a,y.a,O).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(o.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(f.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(x.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(x.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=B(B({},m.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||w.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(j.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),k=r(520),$=r(233),D=r(52),E=r(536),I=r(871),A=r(67),T=r(534),V=r(88),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey ligthen-3  pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("v-card",[r("v-card-title",[t._v("\n        News Table\n        "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-data-table",{attrs:{headers:t.headers,items:t.users,pagination:t.pagination,"server-items-length":t.totalUsers,"footer-props":t.rowsPerPageItems,loading:t.loading},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[r("tr",[r("td",[r("div",{staticClass:"d-flex"},[r("v-btn",{attrs:{to:{name:"users.edit",params:{id:e.item.id}}}},[t._v("Edit")])],1)]),t._v(" "),r("td",[t._v(t._s(e.item.id))]),t._v(" "),r("td",[t._v(t._s(e.item.name))]),t._v(" "),r("td",[t._v(t._s(e.item.email))])])]}},{key:"no-results",fn:function(){return[r("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v('\n            Your search for "'+t._s(t.searchQuery)+'" found no results.\n          ')])]},proxy:!0}])})],1)],1)],1)}),[],!1,null,"3077bd83",null);e.default=component.exports;v()(component,{Template:r(127).default}),v()(component,{VAlert:S,VBtn:k.a,VCard:$.a,VCardTitle:D.d,VContainer:E.a,VDataTable:I.a,VSheet:A.a,VSpacer:T.a,VTextField:V.a})}}]);