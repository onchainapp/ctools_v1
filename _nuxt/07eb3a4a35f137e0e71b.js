(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1255:function(e,t,n){"use strict";n.r(t);n(64),n(42),n(33),n(41),n(27),n(34);var r=n(0),o=n(3),c=n(21),l=n(1117),d=n(1118),f=n(1119),h=(n(1120),n(1161)),m=n(1162),v=n(1137);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var O={name:"CreateWallet",components:{BaseInfo:m.a,HeroBar:f.a,TitleBar:d.a,ResultTable:h.a,CardComponent:l.a,Notification:v.a},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("common",["translationWord"]),{titleStack:function(){return["Admin","Profile"]}}),data:function(){return{loading:!1,addresses:[],total:0,chain:"ETH"}},mounted:function(){this.$route.params.chain&&(this.chain=this.$route.params.chain.toUpperCase())},methods:{generate:function(e,symbol){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,i,address;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,console.info(e),t.total=parseInt(e),t.addresses=[],r=10,o=function(time){return new Promise((function(e){return setTimeout(e,time)}))},c=[],i=0;case 8:if(!(i<e)){n.next=21;break}return n.next=11,t.$store.dispatch("wallet/create",{type:symbol});case 11:if(address=n.sent,c.push(address),i%r!=0&&i+1!=e){n.next=18;break}return t.addresses=t.addresses.concat(c),c=[],n.next=18,o(50);case 18:i++,n.next=8;break;case 21:return n.next=23,o(1e3);case 23:t.loading=!1,t.$buefy.snackbar.open({message:"Successful Generated",queue:!1,position:"is-bottom-right"});case 25:case"end":return n.stop()}}),n)})))()}},head:function(){var e=this;return{title:"ChainTools - Wallet Batch Creator, Wallet Batch Generator",script:[{src:"/3rd/TronWeb.js",body:!0,callback:function(){e.$store.dispatch("wallet/saveTronWeb",{tronWeb:TronWeb})}},{src:"/3rd/solana.index.iife.min.js",body:!0,callback:function(){e.$store.dispatch("wallet/saveSolanaWeb3",{solanaWeb3:solanaWeb3})}}]}}},C=n(26),component=Object(C.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("section",{staticClass:"section is-main-section is-not-full-width"},[n("div",{staticClass:"is-main-content"},[n("p",{staticClass:"title is-5 has-text-centered"},[e._v("\n          "+e._s(e.translationWord.walletCreator.title)+"\n        ")]),e._v(" "),n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"information","custom-size":"default"}}),e._v(" "),n("span",[e._v(e._s(e.translationWord.walletCreator.info))])],1)]),e._v(" "),n("CardComponent",[n("BaseInfo",{attrs:{loading:e.loading,generate:e.generate}})],1),e._v(" "),e.loading?n("b-progress",{attrs:{value:e.addresses.length,size:"is-large",rounded:!1,type:"is-info",max:e.total,"show-value":""}},[n("span",{staticStyle:{color:"#f0f0f0"}},[e._v(e._s(e.addresses.length)+" / "+e._s(e.total))])]):e._e(),e._v(" "),n("CardComponent",{staticClass:"tile is-child",attrs:{title:e.translationWord.walletCreator.result,icon:"database-search"}},[n("result-table",{attrs:{addresses:e.addresses}})],1)],1)])])}),[],!1,null,null,null);t.default=component.exports}}]);