(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{547:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("4eb5ad6a",content,!0,{sourceMap:!1})},559:function(t,e,n){"use strict";n(547)},560:function(t,e,n){var l=n(11)(!1);l.push([t.i,".transparent[data-v-2b083895]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-2b083895]{text-decoration:none}",""]),t.exports=l},576:function(t,e,n){"use strict";n.r(e);var l=n(15),r=(n(51),{props:["content","length","loading"],data:function(){return{selection:""}},created:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),o=(n(559),n(35)),c=n(31),v=n.n(c),d=n(232),_=n(516),f=n(237),m=n(85),h=n(240),C=n(900),x=n(524),w=n(182),k=n(525),V=n(66),y=n(548),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("h1",{staticClass:"fs-1-3"},[t._v("Blog")]),t._v(" "),n("p",[t._v("Relevent Personal Blogs about programming and events")])])],1),t._v(" "),t._l(t.content,(function(e,l){return n("v-row",{key:l,staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"/blog/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{gradient:"to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)",contain:"",src:e.image,"min-height":"250"}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"/blog/"+e.slug}}},[t._v(" "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,l){return n("v-chip",{key:l,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex pa-2",attrs:{size:"37"}},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  Author: ")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  "+t._s(e.name)+" ")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  "+t._s(e.human_date))])])],1)],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"2b083895",null);e.default=component.exports;v()(component,{VAvatar:d.a,VBtn:_.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VChip:h.a,VChipGroup:C.a,VCol:x.a,VImg:w.a,VRow:k.a,VSheet:V.a,VSkeletonLoader:y.a})}}]);