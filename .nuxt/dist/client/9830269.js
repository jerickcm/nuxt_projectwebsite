(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{446:function(e,t,r){"use strict";r(10),r(7),r(9),r(13),r(8),r(14);var n=r(2),o=(r(23),r(202),r(448),r(105)),l=r(450),c=r(85),d=r(5);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},447:function(e,t,r){"use strict";r(10),r(7),r(9),r(13),r(8),r(14);var n=r(2),o=(r(23),r(128),r(452),r(205)),l=r(129),c=r(31),d=r(93),h=r(206),v=r(26),m=r(0),f=r(5);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var y=Object(f.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a);t.a=y.extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(e,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(n.a)(e,"width",Object(m.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.g)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.s)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},448:function(e,t,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},449:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},450:function(e,t,r){"use strict";r(23);var n=r(1),o=r(451);t.a=n.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},451:function(e,t,r){"use strict";var n=r(447);t.a=n.a},452:function(e,t,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("cf87dc84",content,!0,{sourceMap:!1})},453:function(e,t,r){var n=r(15)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n},593:function(e,t,r){var content=r(764);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("47d0ed81",content,!0,{sourceMap:!1})},763:function(e,t,r){"use strict";r(593)},764:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.font-lulu[data-v-6d0e7c07]{font-family:"Lulu",sans-serif}.font-halimun[data-v-6d0e7c07]{font-family:"Halimun",sans-serif}.font-kalamreg[data-v-6d0e7c07]{font-family:"Kalam-Regular",sans-serif;line-height:1.2}.font-barlowreg[data-v-6d0e7c07]{font-family:"Barlow-Regular",sans-serif}.bounce-enter-active[data-v-6d0e7c07]{-webkit-animation:bounce-in-data-v-6d0e7c07 .5s;animation:bounce-in-data-v-6d0e7c07 .5s}.bounce-leave-active[data-v-6d0e7c07]{animation:bounce-in-data-v-6d0e7c07 .5s reverse}@-webkit-keyframes bounce-in-data-v-6d0e7c07{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-6d0e7c07{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}',""]),e.exports=n},773:function(e,t,r){"use strict";r.r(t);r(10),r(7),r(9),r(13),r(8),r(14);var n=r(11),o=r(2),l=(r(55),r(109));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={middleware:"auth",auth:!1,head:function(){return{title:"Profile ",meta:[{hid:"Profile",name:"Profile",content:"Profile"}]}},data:function(){return{selectedItem:0,show:!0,title:"",model:6,rounded:["0","sm","md","lg","xl","pill","circle"],links:[]}},layout:"default",methods:d({},Object(l.b)("messageoftheday",["fetchQuote"])),computed:d({},Object(l.c)("messageoftheday",["MessageOfTheDay","LoadingStatus"])),created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie");case 2:try{e.fetchQuote()}catch(e){console.log(e)}case 3:case"end":return t.stop()}}),t)})))()}},v=(r(763),r(40)),m=r(48),f=r.n(m),_=r(189),y=r(428),k=r(446),w=r(436),x=r(437),O=r(157),C=(r(233),r(272)),j=Object(C.a)("layout"),P=r(192),B=r(121),V=r(49),S=r(194),z=r(447),$=r(438),D=r(53),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"ma-0 pa-0 grey lighten-3",attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12",md:"12"}},[r("v-sheet",{staticClass:"black lighten-5",attrs:{elevation:"2","min-height":"10vh"}},[r("v-container",[r("v-row",{staticClass:"pt-5"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",lg:"9"}},[r("label",{staticClass:"font-lulu white--text",class:{"fs-1.1":e.$vuetify.breakpoint.smAndDown,"fs-3":e.$vuetify.breakpoint.mdAndUp}},[e._v("JERICK C. MANGALUS")])]),e._v(" "),r("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12",sm:"12",lg:"3"}},[r("label",{staticClass:"text-right white--text",class:{"fs-0-5":e.$vuetify.breakpoint.smAndDown,"fs-1-0":e.$vuetify.breakpoint.mdAndUp}},[e._v("[ Technology R&D ]\n              ")])])],1),e._v(" "),r("v-row",[r("v-col",{staticClass:"col-md-6 offset-md-3 text-center"},[r("div",{staticClass:"hidden-sm-and-down text-center"},e._l(e.links,(function(link){return r("v-btn",{key:link.label,staticClass:"black pa-1 ma-1 white--text",attrs:{plain:"",text:"",tile:"",rounded:""}},[e._v("\n                  "+e._s(link.label)+"\n                ")])})),1),e._v(" "),r("v-card",{staticClass:"mx-auto hidden-md-and-up d-none",attrs:{tile:""}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedItem,callback:function(t){e.selectedItem=t},expression:"selectedItem"}},e._l(e.links,(function(t,i){return r("v-list-item",{key:i},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.label)}})],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"grey lighten-5 pa-1 ma-1",attrs:{elevation:"2"}},[r("v-container",{},[r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[e.$vuetify.breakpoint.smAndDown?r("v-avatar",{staticClass:"text-center black",attrs:{size:150}},[r("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1):r("v-avatar",{staticClass:"text-center black",attrs:{size:350}},[r("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1)],1)],1)],1),e._v(" "),r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"font-avenir fs-1-4 text-center",attrs:{cols:"12",sm:"12",lg:"12"}})],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"grey lighten-1",attrs:{elevation:"2","min-height":"30vh"}},[r("v-container",{},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{staticClass:"pa-1 ma-1",attrs:{cols:"12",sm:"12",lg:"12"}},[r("p",{staticClass:"fs-1-1 text-justify white--text fs-1-8 font-barlowreg"},[e._v("\n                The inspiration of this website build is to expand my\n                knowledge base , in web development. Secondly I am planning to\n                retain this website in a public server earning from ads. Maybe\n                in my free time I could just update it with my newly learned\n                tricks in web deveopment. This website is running in frontend\n                Vue in a nuxt framework and backend is Laravel8. The time this\n                site is being developed is in the new release of PHP version\n                8. Also docker is in my list of research I am actually\n                surprised with laravel response to api is very slow and that\n                is because i am using windows file system that later i\n                discovered you need to be inside the linux filesystem because\n                I was running the backend in a linux container image. This\n                project is using docker in local and docker also in Google\n                Cloud Platform that is my dev-ops application. I am using\n                Laravel sail to build the containers connecting backend and\n                frontend I used Laravel Santum together with Nuxt auth next\n                node plugin. Along development I am learning a lot I advise\n                aldo for developer to do this during work from home. By the\n                way developing this site is during the pandemic it started in\n                March 20, 2020 here in the Philippines and at present covid-19\n                is still a threat to peoples lives. Even though their is\n                already a vaccine the production seems to still inadequate.\n              ")])])],1)],1)],1)],1)],1),e._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"white lighten-5",attrs:{elevation:"2","min-height":"10vh"}},[r("v-container",{},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[e.LoadingStatus?r("v-progress-linear",{attrs:{color:"blue accent-5",indeterminate:"",rounded:"",height:"6"}}):e._e(),e._v(" "),e._l(e.MessageOfTheDay,(function(t){return e.LoadingStatus?e._e():r("div",{key:t.author},[r("p",{staticClass:"font-kalamreg text-center mt-5",class:{"fs-1.1":e.$vuetify.breakpoint.smAndDown,"fs-1.5":e.$vuetify.breakpoint.mdAndUp},attrs:{for:""}},[e._v('\n                  " '+e._s(t.message)+' " - '+e._s(t.author)+"\n                ")])])}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,"6d0e7c07",null);t.default=component.exports;f()(component,{VAvatar:_.a,VBtn:y.a,VCard:k.a,VCol:w.a,VContainer:x.a,VImg:O.a,VLayout:j,VList:P.a,VListItem:B.a,VListItemContent:V.a,VListItemGroup:S.a,VListItemTitle:V.b,VProgressLinear:z.a,VRow:$.a,VSheet:D.a})}}]);