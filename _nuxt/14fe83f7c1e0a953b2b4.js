(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1155:function(e,t,r){"use strict";var n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){console.info("222222"),this.$emit("header-icon-click")},backToLast:function(){this.back()}}},l=r(26),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e.title?r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[e.tips?r("span",[r("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:e._u([{key:"content",fn:function(){return[r("span",{domProps:{innerHTML:e._s(e.tips)}})]},proxy:!0}],null,!1,1676059129)},[e._v(" "),e.icon?r("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v("\n          "+e._s(e.title)+"\n        ")],1)],1):r("span",[e.back?r("span",{staticClass:"is-clickable",on:{click:function(t){return t.preventDefault(),e.backToLast(t)}}},[e.icon?r("b-icon",{attrs:{icon:e.icon}}):r("b-icon",{attrs:{icon:"arrow-left"}}),e._v("\n            "+e._s(e.title)+"\n          ")],1):r("span",[e.icon?r("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v("\n            "+e._s(e.title)+"\n          ")],1)])]),e._v(" "),e.headerIcon?r("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[r("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"card-content"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=component.exports},1156:function(e,t,r){"use strict";var n={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},l=r(26),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section is-title-bar"},[r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[r("ul",e._l(e.titleStack,(function(title,t){return r("li",{key:t},[e._v("\n            "+e._s(title)+"\n          ")])})),0)])]),e._v(" "),e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"level-right"},[t("div",{staticClass:"level-item"},[t("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);t.a=component.exports},1157:function(e,t,r){"use strict";var n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},l=r(26),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero is-hero-bar"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[t("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);t.a=component.exports},1286:function(e,t,r){"use strict";r.r(t);r(59),r(46),r(32),r(19),r(44);var n=r(129),l=(r(30),r(0)),o=r(3),c=r(21),m=r(1156),d=r(1155);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f={name:"Forms",components:{HeroBar:r(1157).a,CardComponent:d.a,TitleBar:m.a},data:function(){return{isLoading:!1,type:1,addressErrorType:"",addressMessage:"用于接收营销费用",memeForm:{name:null,symbol:null,supply:null,decimals:9,feeAddress:null,txFee:3,charityFee:3,burnFee:4},simpleForm:{name:null,symbol:null,supply:null,decimals:18},memeLPForm:{name:null,symbol:null,supply:null,decimals:9,feeAddress:null,txFee:3,lpFee:3,devFee:4,routerDex:"PancakeSwap",routerAddress:"0x10ed43c718714eb63d5aa57b78b54704e256024e"}}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)("common",["translationWord"]),{},Object(c.b)("metamask",["currency"]),{},Object(c.c)("bulksender",["txUrl"]),{},Object(c.c)("common",["isMobile"]),{},Object(c.c)("tokenCreator",["createdTx","createdTxStatus"]),{titleStack:function(){return["Admin","Dashboard"]},onCreating:function(){return 0==this.createdTxStatus}}),methods:{submit:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validateAddress()||0==e.type){t.next=4;break}return e.addressMessage="请输入正确的钱包地址",t.abrupt("return");case 4:return data=e.simpleForm,1==e.type&&(data=e.memeForm),2==e.type&&(data=e.memeLPForm),t.prev=7,t.next=10,e.$store.dispatch("tokenCreator/createMemeToken",{tokenInfo:data,type:e.type});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(7),console.info(t.t0);case 15:case"end":return t.stop()}}),t,null,[[7,12]])})))()},validateAddress:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var address,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return address="0x8c1b557e3c7a5b7b7632f874c7fc745f62c8d1e8",1==e.type&&(address=e.memeForm.feeAddress),2==e.type&&(address=e.memeLPForm.feeAddress),t.next=5,e.$store.dispatch("common/checkAddressIsValid",{address:address});case 5:return r=t.sent,console.info("isValid",r),r?(e.addressMessage="用于接收营销费用",e.addressErrorType=""):(e.addressMessage="请输入正确的钱包地址",e.addressErrorType="is-danger"),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))()},reset:function(){this.form=mapValues(this.form,(function(e){return e&&"object"===Object(n.a)(e)?[]:null})),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}},watch:{createdTxStatus:function(e){1==e&&this.$buefy.snackbar.open({message:"创建成功",queue:!1,position:"is-top-right"})}},head:function(){return{title:"Chain Tools — TokenMaker"}}},h=r(26),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{staticClass:"section is-main-section is-not-full-width"},[r("div",{staticClass:"is-main-content"},[r("p",{staticClass:"title is-5 has-text-centered"},[e._v("\n          "+e._s(e.translationWord.header.moreOptions.tokenMaker)+" "),r("strong",{staticStyle:{"font-style":"italic"}},[e._v(" - 当前仅支持币安链")])]),e._v(" "),[r("b-tabs",{attrs:{type:"is-toggle",multiline:"",expanded:""},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[r("b-tab-item",{attrs:{label:"标准"}}),e._v(" "),r("b-tab-item",{attrs:{label:"销毁+分红+营销"}}),e._v(" "),r("b-tab-item",{attrs:{label:"流动性+分红+营销"}}),e._v(" "),r("b-tab-item",{attrs:{label:"高级(买卖限制, 指定分红币)"}})],1)],e._v(" "),1==e.type?r("card-component",{attrs:{title:"创建",icon:"ballot"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("b-field",{attrs:{label:"代币名称",message:"例如：Bitcoin"}},[r("b-input",{attrs:{placeholder:"e.g. Bitcoin",required:""},model:{value:e.memeForm.name,callback:function(t){e.$set(e.memeForm,"name",t)},expression:"memeForm.name"}})],1),e._v(" "),r("b-field",{attrs:{label:"代币符号",message:"例如：BTC"}},[r("b-input",{attrs:{placeholder:"e.g. BTC",required:""},model:{value:e.memeForm.symbol,callback:function(t){e.$set(e.memeForm,"symbol",t)},expression:"memeForm.symbol"}})],1),e._v(" "),r("b-field",{attrs:{label:"发行量",message:"例如：想发行1万个，就写10000"}},[r("b-input",{attrs:{type:"number",placeholder:"e.g. 10000",required:""},model:{value:e.memeForm.supply,callback:function(t){e.$set(e.memeForm,"supply",t)},expression:"memeForm.supply"}})],1),e._v(" "),r("b-field",{attrs:{label:"精度",message:"如果不明白精度的意思，使用默认值就可"}},[r("b-input",{attrs:{type:"number",placeholder:"e.g. 18",required:""},model:{value:e.memeForm.decimals,callback:function(t){e.$set(e.memeForm,"decimals",t)},expression:"memeForm.decimals"}})],1),e._v(" "),r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{label:"销毁比例",message:"每笔转账销毁(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeForm.burnFee,callback:function(t){e.$set(e.memeForm,"burnFee",t)},expression:"memeForm.burnFee"}})],1),e._v(" "),r("b-field",{attrs:{label:"持币分红比例",message:"每笔转账分红(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeForm.txFee,callback:function(t){e.$set(e.memeForm,"txFee",t)},expression:"memeForm.txFee"}})],1),e._v(" "),r("b-field",{attrs:{label:"营销费比例",message:"每笔转账收取营销费(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeForm.charityFee,callback:function(t){e.$set(e.memeForm,"charityFee",t)},expression:"memeForm.charityFee"}})],1)],1),e._v(" "),r("b-field",{attrs:{label:"营销费接收地址",message:e.addressMessage,type:e.addressErrorType}},[r("b-input",{attrs:{placeholder:"e.g. 0x",required:""},on:{blur:e.validateAddress},model:{value:e.memeForm.feeAddress,callback:function(t){e.$set(e.memeForm,"feeAddress",t)},expression:"memeForm.feeAddress"}})],1),e._v(" "),r("hr"),e._v(" "),r("b-field",{attrs:{grouped:""}},[r("div",{staticClass:"control"},[r("b-button",{attrs:{"native-type":"submit",type:"is-primary",loading:e.onCreating}},[e._v("\n                  创建\n                ")])],1)]),e._v(" "),""!=e.createdTx?r("p"):e._e(),r("hr"),e._v(" "),r("a",{attrs:{href:"https://bscscan.com/tx/"+e.createdTx,target:"_blank"}},[e._v(e._s(e.createdTx))]),e._v(" "),r("p")],1)]):e._e(),e._v(" "),2==e.type?r("card-component",{attrs:{title:"创建",icon:"ballot"}},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("b-field",{attrs:{label:"代币名称",message:"例如：Bitcoin"}},[r("b-input",{attrs:{placeholder:"e.g. Bitcoin",required:""},model:{value:e.memeLPForm.name,callback:function(t){e.$set(e.memeLPForm,"name",t)},expression:"memeLPForm.name"}})],1),e._v(" "),r("b-field",{attrs:{label:"代币符号",message:"例如：BTC"}},[r("b-input",{attrs:{placeholder:"e.g. BTC",required:""},model:{value:e.memeLPForm.symbol,callback:function(t){e.$set(e.memeLPForm,"symbol",t)},expression:"memeLPForm.symbol"}})],1),e._v(" "),r("b-field",{attrs:{label:"发行量",message:"例如：想发行1万个，就写10000"}},[r("b-input",{attrs:{type:"number",placeholder:"e.g. 10000",required:""},model:{value:e.memeLPForm.supply,callback:function(t){e.$set(e.memeLPForm,"supply",t)},expression:"memeLPForm.supply"}})],1),e._v(" "),r("b-field",{attrs:{label:"精度",message:"0-18，如果不清楚意思，使用默认值即可"}},[r("b-input",{attrs:{type:"number",placeholder:"e.g. 18",required:""},model:{value:e.memeLPForm.decimals,callback:function(t){e.$set(e.memeLPForm,"decimals",t)},expression:"memeLPForm.decimals"}})],1),e._v(" "),r("b-field",{attrs:{grouped:""}},[r("b-field",{directives:[{name:"show",rawName:"v-show",value:!e.isMobile,expression:"!isMobile"}],attrs:{label:"交易所",message:"流动性DEX"}},[r("b-select",{attrs:{placeholder:""},model:{value:e.memeLPForm.routerAddress,callback:function(t){e.$set(e.memeLPForm,"routerAddress",t)},expression:"memeLPForm.routerAddress"}},[r("option",{attrs:{value:"0x10ed43c718714eb63d5aa57b78b54704e256024e"}},[e._v("PancakeSwap")])])],1),e._v(" "),r("b-field",{attrs:{label:"流动性比例",message:"每笔转账流动性(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeLPForm.lpFee,callback:function(t){e.$set(e.memeLPForm,"lpFee",t)},expression:"memeLPForm.lpFee"}})],1),e._v(" "),r("b-field",{attrs:{label:"持币分红比例",message:"每笔转账分红(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeLPForm.txFee,callback:function(t){e.$set(e.memeLPForm,"txFee",t)},expression:"memeLPForm.txFee"}})],1),e._v(" "),r("b-field",{attrs:{label:"营销费比例",message:"每笔转账收取营销费(百分比)",expanded:""}},[r("b-input",{attrs:{type:"number"},model:{value:e.memeLPForm.devFee,callback:function(t){e.$set(e.memeLPForm,"devFee",t)},expression:"memeLPForm.devFee"}})],1)],1),e._v(" "),e.isMobile?r("b-field",{attrs:{label:"交易所",message:"流动性DEX"}},[r("b-select",{attrs:{placeholder:""},model:{value:e.memeLPForm.routerAddress,callback:function(t){e.$set(e.memeLPForm,"routerAddress",t)},expression:"memeLPForm.routerAddress"}},[r("option",{attrs:{value:"0x10ed43c718714eb63d5aa57b78b54704e256024e"}},[e._v("PancakeSwap")])])],1):e._e(),e._v(" "),r("b-field",{attrs:{label:"营销费接收地址",message:e.addressMessage,type:e.addressErrorType}},[r("b-input",{attrs:{placeholder:"e.g. 0x",required:""},on:{blur:e.validateAddress},model:{value:e.memeLPForm.feeAddress,callback:function(t){e.$set(e.memeLPForm,"feeAddress",t)},expression:"memeLPForm.feeAddress"}})],1),e._v(" "),r("hr"),e._v(" "),r("b-field",{attrs:{grouped:""}},[r("div",{staticClass:"control"},[r("b-button",{attrs:{"native-type":"submit",type:"is-info",loading:e.onCreating}},[e._v("\n                  创建\n                ")])],1)]),e._v(" "),""!=e.createdTx?r("p"):e._e(),r("hr"),e._v(" "),r("a",{attrs:{href:"https://bscscan.com/tx/"+e.createdTx,target:"_blank"}},[e._v(e._s(e.createdTx))]),e._v(" "),r("p")],1)]):e._e(),e._v(" "),0==e.type?r("card-component",{attrs:{title:"创建",icon:"ballot"}},[e._v("\n        开发中, 请耐心等待\n      ")]):e._e(),e._v(" "),3==e.type?r("card-component",{attrs:{title:"创建",icon:"ballot"}},[e._v("\n        开发中, 请耐心等待\n      ")]):e._e()],2)])])}),[],!1,null,null,null);t.default=component.exports}}]);