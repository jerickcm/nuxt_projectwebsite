(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{570:function(t,e,n){"use strict";n.r(e);var r=n(15),l=(n(53),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/news/item");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),o=n(35),c=n(31),v=n.n(c),d=n(236),m=n(233),f=n(52),_=n(242),h=n(558),x=n(528),w=n(536),C=n(554),k=n(174),V=n(183),j=n(529),y=n(67),R=n(551),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("News")]),t._v(" "),n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,staticClass:"pa-0 ma-0 pt-2 ",attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.hover;return[n("v-card",{staticClass:"pa-2 ma-0",class:{"on-hover":l},attrs:{elevation:l?16:2,outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/news/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:e.image}}):n("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",{staticClass:"pa-0 ma-0  adj-title"},[n("h2",{staticClass:"title1 fs-1 line-clamp-2 ",attrs:{color:"dark"}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/news/"+e.slug}}},[t._v("\n                  "+t._s(e.title)),n("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)]),t._v(" "),n("v-card-text",{staticClass:"pa-0 ma-0"},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])})),1),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex mt-3",attrs:{size:"37"}},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-avatar",{staticClass:" white--text d-inline-flex  mt-3",attrs:{color:"blue",size:"37"}},[t._v("\n                "+t._s(e.name.charAt(0).toUpperCase())+"\n              ")]),t._v(" "),n("v-card",{staticClass:"d-inline-flex d-flex flex-column ",attrs:{flat:""}},[n("v-card",{attrs:{flat:""}},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{attrs:{flat:""}},[t._v(t._s(e.human_date))])],1)],1)],1)]}}],null,!0)})],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:d.a,VCard:m.a,VCardText:f.c,VCardTitle:f.d,VChip:_.a,VChipGroup:h.a,VCol:x.a,VContainer:w.a,VHover:C.a,VIcon:k.a,VImg:V.a,VRow:j.a,VSheet:y.a,VSkeletonLoader:R.a})}}]);