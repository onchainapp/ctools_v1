(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1151:function(t,e,n){"use strict";var o={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){console.info("222222"),this.$emit("header-icon-click")},backToLast:function(){this.back()}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[n("b-icon",{attrs:{icon:"arrow-left","custom-size":"default"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1154:function(t,e,n){"use strict";n(117);var o=n(367),r=n.n(o),filter=n(1155),c=n.n(filter),l={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))}},render:function(t){var e=this,n=c()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.maxPerRow?this.renderAncestor(t,n):t("div",{attrs:{class:"is-tiles-wrapper"}},r()(n,this.maxPerRow).map((function(n){return e.renderAncestor(t,n)})))}},d=n(26),component=Object(d.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},1155:function(t,e,n){var o=n(1160),r=n(1156),c=n(1159),l=n(366);t.exports=function(t,e){return(l(t)?o:r)(t,c(e,3))}},1156:function(t,e,n){var o=n(1157);t.exports=function(t,e){var n=[];return o(t,(function(t,o,r){e(t,o,r)&&n.push(t)})),n}},1157:function(t,e,n){var o=n(1161),r=n(1158)(o);t.exports=r},1158:function(t,e,n){var o=n(190);t.exports=function(t,e){return function(n,r){if(null==n)return n;if(!o(n))return t(n,r);for(var c=n.length,l=e?c:-1,d=Object(n);(e?l--:++l<c)&&!1!==r(d[l],l,d););return n}}},1274:function(t,e,n){"use strict";n.r(e);n(64),n(45),n(34),n(24),n(42),n(52);var o=n(3),r=(n(117),n(20));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"CardChain",components:{CardComponent:n(1151).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("common",["translationWord"])),props:{icon:{type:String,default:null},chainId:{type:Number,default:0},name:{type:String,default:null},symbol:{type:String,default:null},showConnect:{type:Boolean,default:!0}},methods:{addNetwork:function(){$nuxt.$bus.$emit("addNetwork",this.chainId)}}},d=n(26);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"Home",components:{CardChain:Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"is-widget-label"},[n("h3",{staticClass:"title is-5"},[t._v("\n          "+t._s(t.name)+"\n        ")]),t._v(" "),n("div",{staticClass:"chain-info"},[n("div",{staticClass:"left"},[n("h3",{staticClass:"subtitle is-6"},[n("span",[t._v(t._s(t.translationWord.chainlist.chainId))])]),t._v(" "),n("h1",{staticClass:"title is-5"},[n("span",[t._v(t._s(t.chainId))])])]),t._v(" "),n("div",{staticClass:"right"},[n("h3",{staticClass:"subtitle is-6"},[n("span",[t._v(t._s(t.translationWord.chainlist.currency))])]),t._v(" "),n("h1",{staticClass:"title is-5"},[n("span",[t._v(t._s(t.symbol))])])])]),t._v(" "),n("br")])]),t._v(" "),t.icon?n("div",{staticClass:"level-right has-widget-icon"},[n("div",{staticClass:"is-widget-icon"},[n("img",{attrs:{src:t.icon}})])]):t._e()]),t._v(" "),t.showConnect?n("b-button",{attrs:{type:"is-info",expanded:"",outlined:""},on:{click:function(e){return t.connectWallet()}}},[n("span",{staticClass:"is-size-7"},[t._v(t._s(t.translationWord.header.connectWallet))])]):n("b-button",{attrs:{type:"is-info",expanded:"",outlined:""},on:{click:function(e){return t.addNetwork()}}},[n("span",{staticClass:"is-size-7"},[t._v(t._s(t.translationWord.button.addToMetamask))])])],1)}),[],!1,null,null,null).exports,Tiles:n(1154).a},data:function(){return{isLoading:!0,buefyLoading:void 0,keyword:"",showConnect:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)("api",["chainlist"]),{},Object(r.c)("metamask",["ethAccount"]),{},Object(r.b)("common",["translationWord"]),{titleStack:function(){return["Admin","Dashboard"]},filteredChains:{get:function(){var t=this;return this.chainlist.filter((function(option){return option.name.toLowerCase().indexOf(t.keyword.toLowerCase())>=0||option.chainId==t.keyword||option.nativeCurrency.symbol.toLowerCase().indexOf(t.keyword.toLowerCase())>=0}))}}}),mounted:function(){var t=this;this.showOrCloseLoading(),this.updateShowConnect(),this.$store.dispatch("api/fetchChainlist"),this.$store.dispatch("api/fetchCryptoLogos"),$nuxt.$bus.$on("addNetwork",(function(e){t.$store.dispatch("api/switchNetwork",{networkId:e})}))},watch:{chainlist:function(t){this.showOrCloseLoading(!1)},ethAccount:function(t){this.updateShowConnect()}},methods:{updateShowConnect:function(){""!=this.ethAccount&&null!=this.ethAccount?this.showConnect=!1:this.showConnect=!0},showOrCloseLoading:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t?this.buefyLoading=this.$buefy.loading.open({container:this.$refs.chainList.$el}):this.buefyLoading&&this.buefyLoading.close()}},head:function(){return{title:"Dashboard — Chain Tools Chainlist"}}},v=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{ref:"chainList",staticClass:"section is-main-section is-not-full-width"},[n("div",[n("p",{staticClass:"title is-5 has-text-centered"},[t._v("\n      "+t._s(t.translationWord.chainlist.title)+"\n    ")]),t._v(" "),n("b-field",{attrs:{position:"is-centered"}},[n("b-input",{staticClass:"fix-input-width",attrs:{placeholder:t.translationWord.chainlist.placeholder,type:"search",icon:"magnify"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),n("p",{staticClass:"control"})],1),t._v(" "),n("hr"),t._v(" "),t.chainlist.length?n("div",[n("tiles",{attrs:{maxPerRow:3}},t._l(t.filteredChains,(function(e,o){return n("card-chain",{key:o,staticClass:"tile is-child",attrs:{type:"is-info",icon:"https://cdn.jsdelivr.net/gh/webThreeBuilder/CryptoLogos/logos/"+e.logo,symbol:e.nativeCurrency.symbol,chainId:e.chainId,name:e.name,showConnect:t.showConnect}})})),1)],1):n("div")],1)])])}),[],!1,null,null,null);e.default=v.exports}}]);