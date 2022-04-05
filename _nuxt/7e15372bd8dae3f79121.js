(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1532:function(t,e,n){"use strict";n.r(e);n(98),n(67),n(47),n(40),n(59),n(48);var o=n(0),r=n(3),l=n(52),c=n(1397),d=n(1398),f=(n(1401),n(1441)),k=n(1442);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"Profile",components:{NetworkSelectWithToken:f.a,TitleBar:d.a,HoldersTable:k.a,CardComponent:c.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("common",["translationWord"]),{},Object(l.c)("batchquery",["tokenType"]),{titleStack:function(){return["Admin","Profile"]},routeTitle:function(){return"nft"==this.type?this.translationWord.sideMenu.nft:this.translationWord.sideMenu.token},tokenAddressLabel:function(){return"nft"==this.type?this.translationWord.sideMenu.nft:this.translationWord.sideMenu.token}},Object(l.c)(["userName","userEmail"])),methods:{getData:function(){this.$route.params.token&&(this.type=this.$route.params.token,console.info(this.$route.params.token))},fetchHolders:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c,i,d,f,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.holders=[],t.fromBlock=0,t.toBlock=0,null!=(n=t.latestBlock)){e.next=9;break}return e.next=7,t.$store.dispatch("batchquery/fetchBlockNumber");case 7:n=e.sent,console.info(n);case 9:t.buttonLoading=!0,o=1e3,r={},l=!1,c=1e4,i=0;case 15:if(!(i<c)){e.next=32;break}if(!l){e.next=18;break}return e.abrupt("break",32);case 18:return d=n-o*i,t.fromBlock=n-o*(i+1),t.toBlock=d,e.next=23,t.$store.dispatch("batchquery/bulkQueryEvents",{tokenType:t.tokenType,latestBlock:d,limit:o,filterParams:{tokenId:t.tokenID}});case 23:f=e.sent,console.info(f),k=[],f.forEach((function(t,i){null==r[t.address]&&(r[t.address]=!0,k.push(t))})),t.holders=t.holders.concat(k),null!=t.maxTotal&&t.holders.length>=t.maxTotal&&(l=!0);case 29:i++,e.next=15;break;case 32:t.buttonLoading=!1,t.$buefy.snackbar.open({message:t.translationWord.tokenHolder.done,queue:!1,position:"is-top-right"});case 34:case"end":return e.stop()}}),e)})))()}},mounted:function(){},created:function(){this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))),this.getData()},data:function(){return{holders:[],tokenID:null,buttonLoading:!1,latestBlock:null,fromBlock:0,toBlock:0,maxTotal:null,type:"token",toAddress:null,fromAddress:null}},head:function(){return{title:"ChainTools - Token Holder Scan"}}},v=n(42),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section is-main-section is-not-full-width"},[n("div",{staticClass:"is-main-content"},[n("p",{staticClass:"title is-5 has-text-centered"},[t._v("\n           "+t._s(t.routeTitle)+t._s(t.translationWord.tokenHolder.titleRight)+"\n         ")]),t._v(" "),n("NetworkSelectWithToken",{attrs:{type:t.type}}),t._v(" "),n("div",[n("b-field",{attrs:{grouped:""}},[n("b-field",{attrs:{label:t.translationWord.tokenHolder.totalAmount,expanded:""}},[n("b-input",{attrs:{size:"is-medium"},model:{value:t.maxTotal,callback:function(e){t.maxTotal=e},expression:"maxTotal"}})],1),t._v(" "),n("b-field",{attrs:{label:t.translationWord.tokenHolder.maxBlockNumber,expanded:""}},[n("b-input",{attrs:{size:"is-medium"},model:{value:t.latestBlock,callback:function(e){t.latestBlock=e},expression:"latestBlock"}})],1)],1),t._v(" "),"nft"==t.type||1==t.tokenType?n("b-field",{attrs:{label:t.translationWord.tokenHolder.tokenID,expanded:""}},[n("b-input",{attrs:{size:"is-medium"},model:{value:t.tokenID,callback:function(e){t.tokenID=e},expression:"tokenID"}})],1):t._e()],1),t._v(" "),n("br"),t._v(" "),n("b-button",{staticClass:"is-info",attrs:{loading:t.buttonLoading},on:{click:t.fetchHolders}},[n("span",{staticClass:"is-size-6"},[t._v(" "+t._s(t.translationWord.button.scan))])]),t._v(" "),n("hr"),t._v(" "),t.buttonLoading?n("CardComponent",{staticClass:"tile is-child",attrs:{title:t.translationWord.tokenHolder.exportTitle,icon:"database-search"}},[n("b",{staticStyle:{"margin-bottom":"1rem",display:"inline-block"}},[t._v(t._s(t.translationWord.tokenHolder.scanning)+t._s(t.translationWord.tokenHolder.from)+t._s(t.fromBlock)+t._s(t.translationWord.tokenHolder.to)+t._s(t.toBlock))]),t._v(" "),n("b-progress",{attrs:{value:t.holders.length,size:"is-large",rounded:!1,type:"is-info",max:t.maxTotal,"show-value":""}},[n("span",{staticStyle:{color:"#f0f0f0"}},[t._v(t._s(t.holders.length)+" / "+t._s(t.maxTotal))])])],1):t._e(),t._v(" "),t.buttonLoading?n("hr"):t._e(),t._v(" "),n("CardComponent",{staticClass:"tile is-child",attrs:{title:t.translationWord.balanceQuery.result,icon:"database-search"}},[n("HoldersTable",{attrs:{balances:t.holders}})],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);