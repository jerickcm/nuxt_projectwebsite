(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{454:function(t,e,n){var content=n(458);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("d6463b14",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n(454)},458:function(t,e,n){var o=n(16)(!1);o.push([t.i,".transparent[data-v-01cda0c7]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-01cda0c7]{text-decoration:none}",""]),t.exports=o},479:function(t,e,n){"use strict";n.r(e);var o=n(15),l=n(11),r=(n(19),n(202),n(24),n(60),n(69)),c=n.n(r),d=(n(197),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,posts:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts(),this.generatePost()},computed:{},methods:{generatePost:function(){},getposts:function(){var t=this;c.a.start();new FormData;c.a.inc();try{this.$axios.$get("api/post/list/".concat(this.page)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green");for(var n=0,l=Object.entries(e.data);n<l.length;n++){var r=Object(o.a)(l[n],2),d=(r[0],r[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created_at,human_date:d.human_date,image:d.image,increment:t.increment})}t.posts=t.data,c.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){c.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(n(457),n(53)),v=n(64),_=n.n(v),f=n(201),h=n(439),C=n(437),w=n(427),x=n(155),k=n(428),y=n(51),V=n(577),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("h1",[t._v("Post")])])],1),t._v(" "),t._l(t.posts,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[n("v-img",{attrs:{height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"posts_view",query:{slug:e.slug}}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Post\n        ")])],1)],1)],1)],2)}),[],!1,null,"01cda0c7",null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:h.a,VCardText:C.b,VCardTitle:C.c,VCol:w.a,VImg:x.a,VRow:k.a,VSheet:y.a,VSkeletonLoader:V.a})}}]);