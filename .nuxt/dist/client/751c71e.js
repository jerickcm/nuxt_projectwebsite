(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{487:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("605ec347",content,!0,{sourceMap:!1})},503:function(t,e,n){"use strict";n(487)},504:function(t,e,n){var o=n(15)(!1);o.push([t.i,".transparent[data-v-7406cdf8]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-7406cdf8]{text-decoration:none}",""]),t.exports=o},574:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(11),l=(n(20),n(205),n(26),n(55),n(38)),c=n.n(l),d=(n(159),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,posts:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts(),this.generatePost()},computed:{},methods:{generatePost:function(){},getposts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.start(),new FormData,c.a.inc(),e.prev=3,e.next=6,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 6:t.$axios.$get("api/post/list/".concat(t.page)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green"),e.data.length<10&&(t.no_more_post="",t.disable_next=!0,t.disable_color="grey");for(var n=0,r=Object.entries(e.data);n<r.length;n++){var l=Object(o.a)(r[n],2),d=(l[0],l[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created_at,human_date:d.human_date,image:d.image,increment:t.increment})}t.posts=t.data,console.log("logs logs"),c.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){c.a.done(),t.loadcard="d-none"})).finally((function(){})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}}),m=(n(503),n(40)),v=n(48),_=n.n(v),f=n(427),h=n(445),x=n(444),C=n(435),w=n(157),k=n(437),y=n(53),V=n(732),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("h1",[t._v("Post")])])],1),t._v(" "),t._l(t.posts,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/view",query:{slug:e.slug}}}},[n("v-img",{attrs:{height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/view",query:{slug:e.slug}}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"7406cdf8",null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:h.a,VCardText:x.b,VCardTitle:x.c,VCol:C.a,VImg:w.a,VRow:k.a,VSheet:y.a,VSkeletonLoader:V.a})}}]);