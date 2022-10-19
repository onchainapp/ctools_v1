(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1156:function(t,e,n){"use strict";var r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},headerRightView:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){this.$emit("header-icon-click")},backToLast:function(){this.back()}}},c=n(26),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[t.icon?n("b-icon",{attrs:{icon:t.icon}}):n("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1157:function(t,e,n){"use strict";var r={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},c=n(26),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1158:function(t,e,n){"use strict";var r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},c=n(26),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},1298:function(t,e,n){"use strict";n.r(e);n(65),n(46),n(34),n(19),n(45),n(28);var r=n(0),c=n(3),o=n(21),l=n(1157),d=n(1156);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"BatchCollection",components:{HeroBar:n(1158).a,CardComponent:d.a,TitleBar:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("common",["translationWord"]),{},Object(o.b)("metamask",["currency"]),{},Object(o.b)("dashboard",["airdrops"]),{},Object(o.c)("bulksender",["txUrl"]),{},Object(o.c)("common",["isMobile"]),{},Object(o.c)("tokenCreator",["createdTx","createdTxStatus"]),{titleStack:function(){return["Admin","Dashboard"]}}),mounted:function(){this.$route.params.chain&&(this.chain=this.$route.params.chain)},data:function(){return{chain:"eth"}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.validateAddress();case 1:case"end":return e.stop()}}),e)})))()},validateAddress:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var address,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return address="0x8c1b557e3c7a5b7b7632f874c7fc745f62c8d1e8",1==t.type&&(address=t.memeForm.feeAddress),2==t.type&&(address=t.memeLPForm.feeAddress),e.next=5,t.$store.dispatch("common/checkAddressIsValid",{address:address});case 5:return n=e.sent,console.info("isValid",n),n?(t.addressMessage="用于接收营销费用",t.addressErrorType=""):(t.addressMessage="请输入正确的钱包地址",t.addressErrorType="is-danger"),e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})))()}},watch:{},head:function(){return{title:"Chain Tools — Token Batch Collection"}}},v=n(26),component=Object(v.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.bgStyle},[e("section",{staticClass:"section is-main-section is-not-full-width"},[e("div",{staticClass:"is-main-content"},[e("p",{staticClass:"title is-5 has-text-centered"},[this._v("\n        "+this._s(this.chain)+"\n      ")]),this._v(" "),e("CardComponent",[this._v("\n        Comming soon.....\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);