(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{494:function(t,e,o){var content=o(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("667b5d22",content,!0,{sourceMap:!1})},512:function(t,e,o){"use strict";o(494)},513:function(t,e,o){var n=o(15)(!1);n.push([t.i,".transparent[data-v-570b22da]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-570b22da]{text-decoration:none}",""]),t.exports=n},599:function(t,e,o){"use strict";o.r(e);var n=o(17),l=o(11),r=(o(20),o(207),o(27),o(55),o(38)),c=o.n(r),d=(o(159),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,content:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts()},computed:{},methods:{getposts:function(){var t=this;this.$axios.$get("/sanctum/csrf-cookie"),c.a.start(),c.a.inc();try{this.$axios.$get("api/quotes/page/".concat(this.page,"/item/",10)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green"),e.data.length<10&&(t.no_more_post="",t.disable_next=!0,t.disable_color="grey");for(var o=0,l=Object.entries(e.data);o<l.length;o++){var r=Object(n.a)(l[o],2),d=(r[0],r[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created_at,human_date:d.human_date,image:d.image,increment:t.increment,author:d.author,message:d.message})}t.content=t.data,c.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){c.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(o(512),o(40)),v=o(48),_=o.n(v),f=o(427),h=o(445),C=o(444),x=o(435),w=o(437),k=o(53),y=o(467),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-sheet",{staticClass:"ma-0 pa-0"},[o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[o("h1",[t._v("Quotes")])])],1),t._v(" "),t._l(t.content,(function(e,n){return o("v-row",{key:n,staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[o("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("v-card-text",{},[o("h2",[t._v(" "+t._s(e.message)+" -  "+t._s(e.author)+" ")]),o("br"),t._v(" "),o("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return o("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[o("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),o("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[o("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1),t._v(" "),o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8  col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[o("v-card",{staticClass:" pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n           Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"570b22da",null);e.default=component.exports;_()(component,{VBtn:f.a,VCard:h.a,VCardText:C.b,VCol:x.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:y.a})}}]);