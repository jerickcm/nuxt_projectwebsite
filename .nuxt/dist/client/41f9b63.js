(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{489:function(t,e,o){var content=o(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("277b2835",content,!0,{sourceMap:!1})},505:function(t,e,o){"use strict";o(489)},506:function(t,e,o){var n=o(15)(!1);n.push([t.i,".transparent[data-v-8c182bce]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-8c182bce]{text-decoration:none}",""]),t.exports=n},600:function(t,e,o){"use strict";o.r(e);var n=o(17),l=o(11),c=(o(19),o(207),o(27),o(54),o(37)),r=o.n(c),d=(o(160),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,content:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green"}},created:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts()},computed:{},methods:{getposts:function(){var t=this;this.$axios.$get("/sanctum/csrf-cookie"),r.a.start(),r.a.inc();try{this.$axios.$get("api/quotes/page/".concat(this.page,"/item/",10)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green"),e.data.length<10&&(t.no_more_post="",t.disable_next=!0,t.disable_color="grey");for(var o=0,l=Object.entries(e.data);o<l.length;o++){var c=Object(n.a)(l[o],2),d=(c[0],c[1]);t.increment=t.increment+1,t.data.push({name:d.name,id:d.id,slug:d.slug,title:d.title,content:d.content,created_at:d.created_at,human_date:d.human_date,image:d.image,increment:t.increment,author:d.author,message:d.message})}t.content=t.data,r.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){r.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(o(505),o(40)),f=o(47),v=o.n(f),_=o(422),h=o(440),x=o(439),C=o(430),w=o(432),k=o(52),y=o(458),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-sheet",{staticClass:"ma-0 pa-0"},[o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[o("h1",[t._v("Quotes")]),t._v(" "),o("p",[t._v("Memorabe quotes from technology and science dicipline")])])],1),t._v(" "),t._l(t.content,(function(e,n){return o("v-row",{key:n,staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[o("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("v-card-text",{},[o("h2",[t._v(t._s(e.message)+" - "+t._s(e.author))]),t._v(" "),o("br"),t._v(" "),o("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return o("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[o("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),o("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[o("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1),t._v(" "),o("v-row",{staticClass:"ma-0 pa-0"},[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[o("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"8c182bce",null);e.default=component.exports;v()(component,{VBtn:_.a,VCard:h.a,VCardText:x.b,VCol:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:y.a})}}]);