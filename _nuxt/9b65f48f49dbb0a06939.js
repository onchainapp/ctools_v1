(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1160:function(t,e,n){"use strict";var r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},headerRightView:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){this.$emit("header-icon-click")},backToLast:function(){this.back()}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[t.icon?n("b-icon",{attrs:{icon:t.icon}}):n("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1161:function(t,e,n){"use strict";var r={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1162:function(t,e,n){"use strict";var r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n(26),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},1293:function(t,e,n){"use strict";n.r(e);n(66),n(47),n(35),n(19),n(45),n(28);var r=n(0),o=n(3),c=n(21),l=n(1161),d=n(1160),f=n(1162);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={name:"ApprovalsTable",props:{data:{type:Array,default:[]},explorer:{type:Object,default:{}},tokenMetaInfo:{type:Object,default:{}}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[],checkable:!0,totalAmount:0,selectType:0,whiteList:{"0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D":"Uniswap","0x10ed43c718714eb63d5aa57b78b54704e256024e":"PancakeSwap","0x1111111254fb6c44bac0bed2854e76f90643097d":"1inch"}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("common",["translationWord"]),{filteredData:function(){if(2==this.selectType)return this.data;var data=[];return 1==this.selectType?this.data.forEach((function(t,i){t.isNFT&&data.push(t)})):this.data.forEach((function(t,i){t.isNFT||data.push(t)})),data}}),mounted:function(){},watch:{},methods:{format:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return parseFloat(t).toFixed(e)}}},m=n(26),_=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-tabs",{staticClass:"form-tabs",attrs:{type:"is-boxed"},model:{value:t.selectType,callback:function(e){t.selectType=e},expression:"selectType"}},[n("b-tab-item",{attrs:{label:"Token",value:"0"}}),t._v(" "),n("b-tab-item",{attrs:{label:"NFT",value:"1"}}),t._v(" "),n("b-tab-item",{attrs:{label:"All",value:"2"}})],1),t._v(" "),n("b-table",{attrs:{loading:t.isLoading,paginated:"","per-page":"30",striped:!0,hoverable:!0,"default-sort":"index",data:t.filteredData,"pagination-position":"bottom","custom-row-key":"ID"}},[t.data.length?[n("b-table-column",{attrs:{label:t.translationWord.formInfo.assets,field:"to"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{display:"flex","align-items":"center",height:"100%"}},[t.tokenMetaInfo[e.row.to]?n("img",{staticStyle:{width:"24px",height:"24px","border-radius":"100px","margin-right":"5px",background:"#e8ecfb"},attrs:{src:t.tokenMetaInfo[e.row.to].logoURI&&!e.row.isNFT}}):n("img",{staticStyle:{width:"24px",height:"24px","border-radius":"100px","margin-right":"5px",background:"#e8ecfb"}}),t._v(" "),e.row.tokenInfo&&e.row.tokenInfo.name?n("a",{attrs:{href:""+t.explorer.address+e.row.to,target:"_blank"}},[t._v(t._s(t._f("trim")(e.row.tokenInfo.name)))]):n("a",{attrs:{href:""+t.explorer.address+e.row.to,target:"_blank"}},[t._v(t._s(t._f("showText")(e.row.to,10)))])])]}}],null,!1,893180015)}),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.formInfo.allowanceSpender,field:"spender"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{attrs:{href:""+t.explorer.address+e.row.spender}},[t.whiteList[e.row.spender]?n("span",[t._v(t._s(t.whiteList[e.row.spender]))]):n("span",[t._v(t._s(t._f("showText")(e.row.spender,10)))])])]}}],null,!1,4149042018)}),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.formInfo.allowance,field:"allowance"},scopedSlots:t._u([{key:"default",fn:function(e){return[-1==e.row.allowance?n("span",[t._v("Unlimited")]):e.row.tokenInfo&&e.row.tokenInfo.allowance?n("span",[t._v(t._s(t._f("1000")(e.row.tokenInfo.allowance)))]):n("span",[t._v("Fetching...")])]}}],null,!1,2400896638)}),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.formInfo.lastUpdated,field:"timeStamp"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateFormat")(1e3*e.row.timeStamp,"YYYY-mm-dd HH:MM:SS"))+"\n      ")]}}],null,!1,2734144314)}),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.formInfo.txHash},scopedSlots:t._u([{key:"default",fn:function(e){return[n("a",{attrs:{href:""+t.explorer.tx+e.row.hash}},[t._v(t._s(t._f("showText")(e.row.hash,10)))])]}}],null,!1,3695878393)}),t._v(" "),n("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"buttons is-right"},[n("button",{staticClass:"button is-small is-info",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.revoke(e.row)}}},[n("b-icon",{attrs:{icon:"link-variant-off",size:"is-small"}}),n("span",[t._v("Revoke")])],1)])]}}],null,!1,1090253743)})]:t._e(),t._v(" "),n("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[n("p",[n("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.loading))])]:[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.noData))])]],2)])],2)],1)}),[],!1,null,null,null).exports;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={name:"BatchCollection",components:{HeroBar:f.a,CardComponent:d.a,TitleBar:l.a,ApprovalTable:_},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("common",["translationWord"]),{},Object(c.b)("metamask",["currency","allNetworkConfig"]),{},Object(c.b)("dashboard",["airdrops"]),{},Object(c.c)("metamask",["ethAccount"]),{titleStack:function(){return["Admin","Dashboard"]}}),mounted:function(){this.$route.params.chain&&(this.chain=this.$route.params.chain.toUpperCase())},data:function(){return{chain:"eth",checkAddress:null,approvals:[],buttonLoading:!1,chainId:1,explorer:{},tokenMetaInfo:{}}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.validateAddress(),t.buttonLoading=!0,e.prev=2,t.approvals=[],e.next=6,t.$store.dispatch("api/fetchApprovals",{chainId:t.chainId,address:t.checkAddress});case 6:return n=e.sent,t.approvals=n,t.buttonLoading=!1,r=[],o=[],n.forEach((function(t,i){r.push(t.to),o.push(t.spender)})),e.next=14,t.$store.dispatch("batchquery/bulkQueryTokensInfo",{chainId:t.chainId,tokens:r,spenders:o,account:t.checkAddress});case 14:return c=e.sent,l=[],n.forEach((function(t,i){var e=t.to+"_"+t.spender,n=c[e];t.tokenInfo=n,l.push(t)})),t.approvals=l,t.explorer=t.allNetworkConfig["netId".concat(t.chainId)].explorerUrl,e.next=21,t.$store.dispatch("api/fetchPublicTokenList",{chainId:t.chainId});case 21:d=e.sent,t.tokenMetaInfo=d,e.next=29;break;case 25:e.prev=25,e.t0=e.catch(2),console.info("eee",e.t0),t.buttonLoading=!1;case 29:case"end":return e.stop()}}),e,null,[[2,25]])})))()},validateAddress:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var address,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return address="0x8c1b557e3c7a5b7b7632f874c7fc745f62c8d1e8",1==t.type&&(address=t.memeForm.feeAddress),2==t.type&&(address=t.memeLPForm.feeAddress),e.next=5,t.$store.dispatch("common/checkAddressIsValid",{address:address});case 5:return n=e.sent,console.info("isValid",n),n?(t.addressMessage="用于接收营销费用",t.addressErrorType=""):(t.addressMessage="请输入正确的钱包地址",t.addressErrorType="is-danger"),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))()}},watch:{netId:function(){},ethAccount:function(t){this.checkAddress||(this.checkAddress=t)},chainId:function(){}},head:function(){return{title:"Chain Tools — Token Approval Checker"}}},w=Object(m.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.bgStyle},[n("section",{staticClass:"section is-main-section is-not-full-width"},[n("div",{staticClass:"is-medium-content"},[n("p",{staticClass:"title is-5 has-text-centered"},[t._v("\n\n        "+t._s(t.chain)+" - Review and revoke your token approvals for any dApp.\n\n      ")]),t._v(" "),n("b-field",{attrs:{position:"is-centered"}},[n("b-input",{staticClass:"fix-input-width",attrs:{placeholder:t.translationWord.formInfo.approvalWalletHolder,type:"search",icon:"magnify"},model:{value:t.checkAddress,callback:function(e){t.checkAddress=e},expression:"checkAddress"}}),t._v(" "),n("p",{staticClass:"control"},[n("b-button",{staticClass:"is-fullheight",attrs:{type:"is-primary",label:"Search",loading:t.buttonLoading},on:{click:function(e){return t.submit()}}})],1)],1),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("CardComponent",{attrs:{title:"Token Approvals"}},[n("ApprovalTable",{attrs:{data:t.approvals,explorer:t.explorer,tokenMetaInfo:t.tokenMetaInfo}})],1)],1)])])}),[],!1,null,null,null);e.default=w.exports}}]);