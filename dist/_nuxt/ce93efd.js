(window.webpackJsonp=window.webpackJsonp||[]).push([[26,11],{426:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(11),r=(n(62),{created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("%c[ -- Hello from Project Website -- ]","background: #FFF; color: #0000FF"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),e.next=9,t.$axios.$get("/sanctum/csrf-cookie");case 9:case"end":return e.stop()}}),e)})))()}})},430:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0fba9f94",content,!0,{sourceMap:!1})},455:function(t,e,n){"use strict";n(430)},456:function(t,e,n){var o=n(14)(!1);o.push([t.i,".transparent[data-v-679913df]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-679913df]{text-decoration:none}",""]),t.exports=o},479:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("5087eced",content,!0,{sourceMap:!1})},489:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(11),l=(n(19),n(268),n(24),n(62),n(58)),c=n.n(l),d=(n(189),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,posts:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.getposts()},methods:{requestnextposts:function(){},getposts:function(){var t=this;c.a.start();var e=new FormData;e.append("page",this.page),c.a.inc();try{this.$axios.$post("api/post/list",e).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green");for(var n=0,r=Object.entries(e.data);n<r.length;n++){var l=Object(o.a)(r[n],2),d=(l[0],l[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created,human_date:d.human_date,image:d.image,increment:t.increment})}t.posts=t.data,c.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){c.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),v=(n(455),n(71)),m=n(83),h=n.n(m),f=n(190),_=n(414),C=n(412),x=n(575),w=n(150),k=n(576),y=n(46),V=n(577),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[t._l(t.posts,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[n("v-img",{attrs:{height:"250",src:e.image}},[n("v-card-title",{staticClass:"white--text transparent"},[t._v("\n              Article No: "+t._s(e.increment)+"\n            ")])],1)],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-2 pa-2",class:t.no_more_post},[n("v-col",{staticClass:"text-center text-lg-center mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:"pa-2 ma-2 ",attrs:{elevation:"2"}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Post\n        ")])],1)],1)],1)],2)}),[],!1,null,"679913df",null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:_.a,VCardText:C.b,VCardTitle:C.c,VCol:x.a,VImg:w.a,VRow:k.a,VSheet:y.a,VSkeletonLoader:V.a})},541:function(t,e,n){"use strict";n(479)},542:function(t,e,n){var o=n(14)(!1);o.push([t.i,"ul.clean[data-v-77fe39fc]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},587:function(t,e,n){"use strict";n.r(e);var o={mixins:[n(426).a],data:function(){return{loading:!1}},mounted:function(){},inject:{theme:{default:{isDark:!1}}},components:{},watch:{},methods:{}},r=(n(541),n(71)),l=n(83),c=n.n(l),d=n(414),v=n(412),m=n(575),h=n(405),f=n(576),_=n(46),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{},[n("v-col",{staticClass:"grey lighten-3",attrs:{lg:"3","min-height":"450vh"}},[n("v-sheet",{staticClass:"grey lighten-5",attrs:{"min-height":"450vh"}},[n("v-card",{staticClass:"pa-1 ma-1"},[n("v-card-title",[t._v("News Post Coming Soon")]),t._v(" "),n("v-card-text")],1)],1)],1),t._v(" "),n("v-col",{staticClass:"grey lighten-3",attrs:{lg:"6","min-height":"450vh"}},[n("PostCard")],1),t._v(" "),n("v-col",{staticClass:"grey lighten-3",attrs:{lg:"3","min-height":"450vh"}},[n("v-sheet",{staticClass:"grey lighten-5",attrs:{"min-height":"450vh"}},[n("v-card",{staticClass:"pa-1 ma-1"},[n("v-card-title",[t._v("Blogs Coming Soon")]),t._v(" "),n("v-card-text")],1)],1)],1)],1)],1)}),[],!1,null,"77fe39fc",null);e.default=component.exports;c()(component,{PostCard:n(489).default}),c()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:m.a,VContainer:h.a,VRow:f.a,VSheet:_.a})}}]);