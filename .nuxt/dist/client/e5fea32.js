(window.webpackJsonp=window.webpackJsonp||[]).push([[56,16,20],{537:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/post/item");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(236),h=n(84),m=n(239),f=n(906),_=n(516),x=n(525),w=n(181),C=n(517),k=n(66),V=n(540),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Post")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:h.b,VCardTitle:h.c,VChip:m.a,VChipGroup:f.a,VCol:_.a,VContainer:x.a,VImg:w.a,VRow:C.a,VSheet:k.a,VSkeletonLoader:V.a})},544:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/quotes/item");case 5:n=e.sent,t.quote=n.data.message,t.author=n.data.author,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(236),h=n(84),m=n(516),f=n(525),_=n(517),x=n(66),w=n(540),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Quote")]),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-text",[n("p",[t._v(t._s(t.quote)+" - "+t._s(t.author))])]),t._v(" "),t.loader?n("v-skeleton-loader",{attrs:{type:"article, actions"}}):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:h.b,VCol:m.a,VContainer:f.a,VRow:_.a,VSheet:x.a,VSkeletonLoader:w.a})},545:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/blog/item");case 5:n=e.sent,t.content=n.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(236),h=n(84),m=n(239),f=n(906),_=n(516),x=n(525),w=n(181),C=n(517),k=n(66),V=n(540),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Blog")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:h.b,VCardTitle:h.c,VChip:m.a,VChipGroup:f.a,VCol:_.a,VContainer:x.a,VImg:w.a,VRow:C.a,VSheet:k.a,VSkeletonLoader:V.a})},557:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("58bad663",content,!0,{sourceMap:!1})},569:function(t,e,n){"use strict";n(557)},570:function(t,e,n){var r=n(11)(!1);r.push([t.i,".transparent[data-v-19d58b4c]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-19d58b4c]{text-decoration:none}",""]),t.exports=r},594:function(t,e,n){var content=n(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("27352cde",content,!0,{sourceMap:!1})},659:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{props:["content","length","loading"],data:function(){return{}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),c=(n(569),n(35)),l=n(31),d=n.n(l),v=n(508),h=n(236),m=n(84),f=n(516),_=n(181),x=n(517),w=n(66),C=n(540),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("v-row",{},[n("v-col",{staticClass:"ma-2"},[n("h1",[t._v("News")]),t._v(" "),n("p",[t._v("Technological News")])])],1),t._v(" "),t._l(t.content,(function(e,r){return t.loading?t._e():n("v-row",{key:r,staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"news/"+e.slug}}},[n("v-img",{attrs:{height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"news/"+e.slug}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n          Next Article\n        ")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("script",{attrs:{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),t._v(" "),n("script",[t._v("\n        ;(adsbygoogle = window.adsbygoogle || []).push({})\n      ")]),t._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],2)}),[],!1,null,"19d58b4c",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardText:m.b,VCardTitle:m.c,VCol:f.a,VImg:_.a,VRow:x.a,VSheet:w.a,VSkeletonLoader:C.a})},686:function(t,e,n){"use strict";n(594)},687:function(t,e,n){var r=n(11)(!1);r.push([t.i,"ul.clean[data-v-3c12556b]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},861:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=n(60),l=n(16),d=(n(21),n(25),n(51),n(28)),v=n.n(d),h=(n(148),r={created:function(){},transition:{},middleware:"auth",auth:!1,head:function(){return{title:"News",meta:[{hid:"News",name:"News",content:"News Article Page"}]}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/news/page/1/item/10");case 5:n=e.sent,t.content=n.data,t.length=n.data.length,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{content:[],length:null,loading:!1,page:2}}},Object(o.a)(r,"created",(function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()})),Object(o.a)(r,"mounted",(function(){})),Object(o.a)(r,"watch",{lenght:function(t){t<10&&(this.disable_next=!0,this.disable_color="grey")}}),Object(o.a)(r,"computed",{}),Object(o.a)(r,"components",{}),Object(o.a)(r,"watch",{}),Object(o.a)(r,"methods",{nextArticle:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:v.a.start(),v.a.inc();try{t.$axios.$get("api/news/page/".concat(t.page,"/item/",10)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(c.a)(t.content),Object(c.a)(e.data)),v.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,v.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}),r),m=(n(686),n(35)),f=n(31),_=n.n(f),x=n(516),w=n(525),C=n(517),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[n("NewsCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[n("v-container",[n("v-row",[n("v-col",[n("WidgetQuote")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetBlog")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetPost")],1)],1)],1)],1)],1)],1)}),[],!1,null,"3c12556b",null);e.default=component.exports;_()(component,{NewsCard:n(659).default,WidgetQuote:n(544).default,WidgetBlog:n(545).default,WidgetPost:n(537).default}),_()(component,{VCol:x.a,VContainer:w.a,VRow:C.a})}}]);