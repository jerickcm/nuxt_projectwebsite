(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{430:function(t,e,n){var content=n(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0fba9f94",content,!0,{sourceMap:!1})},455:function(t,e,n){"use strict";n(430)},456:function(t,e,n){var r=n(14)(!1);r.push([t.i,".transparent[data-v-679913df]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-679913df]{text-decoration:none}",""]),t.exports=r},485:function(t,e,n){"use strict";n.r(e);var r=n(17),o=n(11),l=(n(19),n(268),n(24),n(62),n(58)),c=n.n(l),d=(n(189),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,posts:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie").then((function(t){}));case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){this.getposts()},methods:{requestnextposts:function(){},getposts:function(){var t=this;c.a.start();var e=new FormData;e.append("page",this.page),c.a.inc();try{this.$axios.$post("api/post/list",e).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green");for(var n=0,o=Object.entries(e.data);n<o.length;n++){var l=Object(r.a)(o[n],2),d=(l[0],l[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created,human_date:d.human_date,image:d.image,increment:t.increment})}t.posts=t.data,c.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){c.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),v=(n(455),n(71)),m=n(83),_=n.n(m),f=n(190),h=n(414),x=n(412),C=n(571),w=n(150),k=n(572),y=n(46),V=n(573),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[t._l(t.posts,(function(e,r){return n("v-row",{key:r,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[n("v-img",{attrs:{height:"250",src:e.image}},[n("v-card-title",{staticClass:"white--text transparent"},[t._v("\n              Article No: "+t._s(e.increment)+"\n            ")])],1)],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-2 pa-2",class:t.no_more_post},[n("v-col",{staticClass:"text-center text-lg-center mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0",attrs:{sm:"12",lg:"12"}},[n("v-card",{staticClass:"pa-2 ma-2 ",attrs:{elevation:"2"}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Post\n        ")])],1)],1)],1)],2)}),[],!1,null,"679913df",null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:h.a,VCardText:x.b,VCardTitle:x.c,VCol:C.a,VImg:w.a,VRow:k.a,VSheet:y.a,VSkeletonLoader:V.a})}}]);