(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1155:function(t,e,n){"use strict";var r={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){console.info("222222"),this.$emit("header-icon-click")},backToLast:function(){this.back()}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[t.icon?n("b-icon",{attrs:{icon:t.icon}}):n("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1156:function(t,e,n){"use strict";var r={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=n(26),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1157:function(t,e,n){"use strict";var r={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n(26),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},1158:function(t,e,n){"use strict";n(104);var r=n(369),o=n.n(r),filter=n(1159),c=n.n(filter),l={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))}},render:function(t){var e=this,n=c()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.maxPerRow?this.renderAncestor(t,n):t("div",{attrs:{class:"is-tiles-wrapper"}},o()(n,this.maxPerRow).map((function(n){return e.renderAncestor(t,n)})))}},d=n(26),component=Object(d.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},1169:function(t,e,n){"use strict";n(104);var r=n(1197),o=n.n(r),c={name:"GrowingNumber",props:{prefix:{type:String,default:null},suffix:{type:String,default:null},value:{type:Number,default:0},duration:{type:Number,default:500}},data:function(){return{newValue:0,step:0}},computed:{newValueFormatted:function(){return this.newValue<1e3?this.newValue:o()(this.newValue).format("0,0.00")}},watch:{value:function(){this.growInit()}},mounted:function(){this.growInit()},methods:{growInit:function(){var t=this.value/(this.duration/25);this.grow(t)},grow:function(t){var e=this,n=Math.ceil(this.newValue+t);if(n>this.value)return this.newValue=this.value,!1;this.newValue=n,setTimeout((function(){e.grow(t)}),25)}}},l=n(26),component=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  "+this._s(this.prefix)+this._s(this.newValueFormatted)+this._s(this.suffix)+"\n")])}),[],!1,null,null,null);e.a=component.exports},1184:function(t,e,n){"use strict";n(59),n(46),n(32),n(44),n(39),n(40),n(19);var r=n(3),o=n(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{GrowingNumber:n(1169).a},name:"GasInfo",props:{gasInfo:{type:Object,default:function(){return{}}},chains:{type:Array,default:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("common",["translationWord"])),watch:{chain:function(t){"bnb"==t&&(t="bsc"),$nuxt.$bus.$emit("updateGasInfo",t),this.showLoading=!0},gasInfo:function(){this.showLoading=!1}},data:function(){return{chain:"eth",showLoading:!1}},methods:{formatGas:function(t){return parseFloat((t/1e9).toFixed(2))},formatValue:function(t){return t?(t=t.toString()).toLowerCase():""}}},d=n(26),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"gasHeader"},[t.chains?n("b-tabs",{attrs:{type:"is-toggle",size:"is-small",multiline:"",expanded:""},model:{value:t.chain,callback:function(e){t.chain=e},expression:"chain"}},t._l(t.chains,(function(e,r){return n("b-tab-item",{key:r,attrs:{label:e,value:t.formatValue(e)}})})),1):n("b-tabs",{attrs:{type:"is-toggle",size:"is-small",multiline:"",expanded:""},model:{value:t.chain,callback:function(e){t.chain=e},expression:"chain"}},[n("b-tab-item",{attrs:{label:"ETH",value:"eth"}}),t._v(" "),n("b-tab-item",{attrs:{label:"BNB",value:"bsc"}}),t._v(" "),n("b-tab-item",{attrs:{label:"AVAX",value:"avax"}}),t._v(" "),n("b-tab-item",{attrs:{label:"MATIC",value:"matic"}}),t._v(" "),n("b-tab-item",{attrs:{label:"FTM",value:"ftm"}})],1)],1),t._v(" "),n("div",{staticClass:"padding-medium"}),t._v(" "),t.showLoading?n("div",[n("b-skeleton",{attrs:{animated:!0,count:1,height:"43px"}})],1):n("div",{staticClass:"c-columns"},[n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.gasInfo.standard))]),t._v(" "),n("p",{staticClass:"title is-6 has-text-success"},[n("growing-number",{attrs:{value:t.formatGas(t.gasInfo.slow.price),suffix:" Gwei"}})],1)]),t._v(" "),n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.gasInfo.fast))]),t._v(" "),n("p",{staticClass:"title is-6 has-text-primary"},[n("growing-number",{attrs:{value:t.formatGas(t.gasInfo.normal.price),suffix:" Gwei"}})],1)]),t._v(" "),n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.gasInfo.rapid))]),t._v(" "),n("p",{staticClass:"title is-6 has-text-danger"},[n("growing-number",{attrs:{value:t.formatGas(t.gasInfo.fast.price),suffix:" Gwei"}})],1)])])])}),[],!1,null,null,null);e.a=component.exports},1275:function(t,e,n){"use strict";n.r(e);n(59),n(46),n(32),n(44),n(1272),n(65),n(577),n(39),n(40),n(19),n(30);var r,o=n(0),c=n(3);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={default:(r={primary:"#00D1B2",info:"#2172e5"},Object(c.a)(r,"info","#0429AD"),Object(c.a)(r,"danger","#FF3860"),r)},f={maintainAspectRatio:!1,legend:{display:!0,labels:{fontColor:"#9a9a9a",padding:25},position:"right"},responsive:!0,cutoutPercentage:70,tooltips:{backgroundColor:"#2c2f36",titleFontColor:"#fff",bodyFontColor:"#fff",callbacks:{label:function(t,e){e.datasets[t.datasetIndex].data[t.index];var label=e.labels[t.index];return label}}}},h=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{maintainAspectRatio:!1,legend:{display:!1,labels:{fontColor:"#dbdbdb"}},responsive:!0},{tooltips:{backgroundColor:"#2c2f36",titleFontColor:"#fff",bodyFontColor:"#fff",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest",callbacks:{label:function(t,e){e.datasets[t.datasetIndex].label;return t.yLabel>=1e3?"$"+t.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"$"+t.yLabel}}},scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a",callback:function(t,e,n){return parseInt(t)>=1e3?t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):t}}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(225,78,202,0)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9a9a9a"}}]}}),v=n(1156),m=n(1157),O=n(1158),y=(n(104),n(1155)),_=n(1169),C={name:"CardWidget",components:{GrowingNumber:_.a,CardComponent:y.a},props:{icon:{type:String,default:null},number:{type:Number,default:0},change:{type:Number,default:0},prefix:{type:String,default:null},suffix:{type:String,default:null},label:{type:String,default:null},type:{type:String,default:null}}},x=n(26),j=Object(x.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("card-component",[t.number?n("div",[n("div",{staticClass:"layout-content"},[n("div",{},[n("h3",{staticClass:"subtitle is-6 is-spaced"},[t._v("\n          "+t._s(t.label)+"\n        ")])]),t._v(" "),n("div",{staticClass:"right"},[t.icon?n("div",{staticClass:"has-widget-icon"},[n("div",{staticClass:"is-widget-icon"},[n("img",{attrs:{src:t.icon}})])]):t._e()])]),t._v(" "),n("div",{staticClass:"layout-content last"},[n("h1",{staticClass:"price-title content-center"},[n("growing-number",{attrs:{value:t.number,prefix:t.prefix,suffix:t.suffix}})],1),t._v(" "),n("div",{staticClass:"right content-center"},[t.change>0?n("div",{staticClass:"has-text-success change up"},[t._v("+"+t._s(t._f("formatNumber")(t.change,2))+"%")]):t._e(),t._v(" "),t.change<0?n("div",{staticClass:"has-text-danger change down"},[t._v(t._s(t._f("formatNumber")(t.change,2))+"%")]):t._e()])])]):n("div",[n("b-skeleton",{attrs:{animated:!0,count:2,height:"35px"}})],1)])}),[],!1,null,null,null).exports,w=n(1201),I={name:"line-chart",extends:w.b,mixins:[w.c.reactiveProp],props:{extraOptions:Object},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,n){n||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},k={name:"pie-chart",extends:w.a,mixins:[w.c.reactiveProp],props:{extraOptions:Object},data:function(){return{ctx:null}},mounted:function(){var t=this;this.$watch("chartData",(function(e,n){n||t.renderChart(t.chartData,t.extraOptions)}),{immediate:!0})}},P=n(21);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var D={name:"HeroBar",props:{fngInfo:{type:Object,default:function(){return{}}}},mounted:function(){console.info("rotate("+this.rotateValue+"deg)"),document.getElementById("fear-needle").animate([{transform:"rotate(-90deg)"},{transform:"rotate("+this.rotateValue+"deg)"}],{duration:1500})},watch:{},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.b)("common",["translationWord"]),{},Object(P.c)("common",["language"]),{isSafari:function(){var t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return t},rotateStyle:function(){return"transform:rotate(".concat(this.rotateValue,"deg);")+this.classifiStyle.replace("color","background")},rotateValue:function(){return this.fngInfo.value/parseFloat(100)*180-90},classifiStyle:function(){var t="";return"Extreme Fear"==this.fngInfo.value_classification&&(t="color:#D97459;"),"Fear"==this.fngInfo.value_classification&&(t="color:#E7B868"),"Greed"==this.fngInfo.value_classification&&(t="color:#2DE6A"),"Extreme Greed"==this.fngInfo.value_classification&&(t="color:#84DC61"),t},classification:function(){if("CN"==this.language){if("Extreme Fear"==this.fngInfo.value_classification)return"极度恐慌";if("Fear"==this.fngInfo.value_classification)return"恐慌";if("Neutral"==this.fngInfo.value_classification)return"中性";if("Greed"==this.fngInfo.value_classification)return"贪婪";if("Extreme Greed"==this.fngInfo.value_classification)return"极度贪婪"}return this.fngInfo.value_classification}})},$=Object(x.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"fearInfo"},[t._v(t._s(t.translationWord.index.todayValue)),n("strong",{style:t.classifiStyle},[t._v(t._s(t.fngInfo.value))]),t._v(" "),n("strong",{staticClass:"fearClassfi",style:t.classifiStyle},[t._v(t._s(t.classification))])]),t._v(" "),n("div",{staticClass:"fear-circle"},[n("div",{staticClass:"circle-values"},[n("div",{staticClass:"circle-pane"},[t.isSafari?t._e():n("div",{staticClass:"num num75",staticStyle:{"--i":"1"}},[t._v("75")]),t._v(" "),t.isSafari?t._e():n("div",{staticClass:"num num100",staticStyle:{"--i":"2"}},[t._v("100")]),t._v(" "),t.isSafari?t._e():n("div",{staticClass:"num num0",staticStyle:{"--i":"6"}},[t._v("0")]),t._v(" "),t.isSafari?t._e():n("div",{staticClass:"num num25",staticStyle:{"--i":"7"}},[t._v("25")]),t._v(" "),t.isSafari?t._e():n("div",{staticClass:"num num50",staticStyle:{"--i":"8"}},[t._v("50")])])]),t._v(" "),n("div",{staticClass:"fear-needle",style:t.rotateStyle,attrs:{id:"fear-needle"}},[n("div",{staticClass:"end",style:t.rotateStyle})])])])}),[],!1,null,null,null).exports;function F(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var B={components:{GrowingNumber:_.a},name:"FeeBurn",props:{feeInfo:{type:Object,default:function(){return{}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.b)("common",["translationWord"]),{},Object(P.c)("common",["isMobile"])),data:function(){return{chain:"ETH",timeRange:"24h",showLoading:!1}},watch:{chain:function(t){$nuxt.$bus.$emit("updateBurnInfo",t),this.showLoading=!0},feeInfo:function(){this.showLoading=!1}},methods:{getDecimalNumber:function(){var t=1e18;return"TRX"==this.chain&&(t=1e6),t},formatBurnRates:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.feeInfo.burnRates;if(t){var n=e["burnRate"+this.timeRange+"Usd"];return parseFloat(n.toFixed(2))}var r=e["burnRate"+this.timeRange];return parseFloat((r/this.getDecimalNumber()).toFixed(2))},formatTotalBurn:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.feeInfo.feeBurns;if(t){var n=e["feesBurned"+this.timeRange+"Usd"];return parseFloat(n.toFixed(2))}var r=e["feesBurned"+this.timeRange];return parseFloat((r/this.getDecimalNumber()).toFixed(2))}}},E=Object(x.a)(B,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"c-level"},[n("div",{staticClass:"c-level-left"},[n("b-tabs",{attrs:{type:"is-toggle",size:"is-small",multiline:""},model:{value:t.chain,callback:function(e){t.chain=e},expression:"chain"}},[n("b-tab-item",{attrs:{label:"ETH",value:"ETH"}}),t._v(" "),n("b-tab-item",{attrs:{label:"BNB",value:"BNB"}})],1)],1),t._v(" "),n("div",{staticClass:"c-level-right"},[n("b-tabs",{attrs:{type:"is-toggle",size:"is-small",multiline:""},model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}},[t.isMobile?t._e():n("b-tab-item",{attrs:{label:"1h",value:"1h"}}),t._v(" "),n("b-tab-item",{attrs:{label:"1d",value:"24h"}}),t._v(" "),n("b-tab-item",{attrs:{label:"7d",value:"7d"}}),t._v(" "),n("b-tab-item",{attrs:{label:"30d",value:"30d"}}),t._v(" "),n("b-tab-item",{attrs:{label:t.translationWord.feeBurn.all,value:"All"}})],1)],1)]),t._v(" "),n("div",{staticClass:"padding-medium"}),t._v(" "),t.showLoading?n("div",[n("b-skeleton",{attrs:{animated:!0,count:1,height:"43px"}})],1):n("div",{staticClass:"c-level"},[n("div",{staticClass:"c-level-left"},[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.feeBurn.total))]),t._v(" "),n("p",{staticClass:"title is-6"},[n("growing-number",{attrs:{value:t.formatTotalBurn(),suffix:" "+t.chain}})],1)]),t._v(" "),n("div",{staticClass:"c-level-right"},[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.feeBurn.rate))]),t._v(" "),n("p",{staticClass:"title is-6"},[n("growing-number",{attrs:{value:t.formatBurnRates(),suffix:" "+t.chain+" / min"}})],1)])])])}),[],!1,null,null,null).exports,W=n(1184);function T(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var L={name:"CryptoFees",props:{cryptoFees:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.b)("common",["translationWord"]),{},Object(P.c)("common",["language"])),watch:{},data:function(){return{chain:"eth",showLoading:!1}},methods:{formatFees:function(t){var e=0;return t.fees.forEach((function(t,i){e+=t.fee})),e.toFixed(2)}}},R=Object(x.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"gasHeader"},t._l(t.cryptoFees,(function(e,r){return n("div",[n("p",{staticClass:"subtitle is-6",staticStyle:{display:"flex","align-items":"center",height:"35px"}},[n("img",{staticStyle:{width:"20px",height:"20px","margin-right":"10px"},attrs:{src:e.icon}}),t._v(t._s(e.name)+" - "),n("strong",[t._v("$"+t._s(t.formatFees(e))+"\n          ")])])])})),0)])}),[],!1,null,null,null).exports;function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var G={components:{},name:"AirdropProject",props:{airdrops:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.b)("common",["translationWord"]),{},Object(P.c)("common",["language","isMobile"])),data:function(){return{chain:"ETH",showLoading:!1}},watch:{chain:function(t){$nuxt.$bus.$emit("updateAirdropInfo",t),this.showLoading=!0},feeInfo:function(){this.showLoading=!1}},methods:{formatBurnRates:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},formatTotalBurn:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},N=Object(x.a)(G,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",t._l(t.airdrops,(function(e,r){return n("div",{staticClass:"c-level"},[n("div",{staticClass:"c-level-left"},[n("div",{staticClass:"c-level-item"},[n("img",{staticClass:"icon",attrs:{src:e.icon}}),n("strong",[t._v(t._s(e.name))])])]),t._v(" "),n("div",{staticClass:"c-level-right"},[n("div",{staticClass:"c-level-item"},[n("nuxt-link",{attrs:{to:e.to}},[n("b-button",{attrs:{size:"is-small",type:"is-light"}},[t._v("\n            Check →\n          ")])],1)],1)])])})),0)}),[],!1,null,null,null).exports;function H(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var V={components:{GrowingNumber:_.a},name:"StakingInfo",props:{stakingInfo:{type:Object,default:function(){return{}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?H(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):H(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.b)("common",["translationWord"]),{},Object(P.c)("common",["language"])),watch:{chain:function(t){$nuxt.$bus.$emit("updateStakingInfo",t),this.showLoading=!0},stakingInfo:function(){this.showLoading=!1}},data:function(){return{chain:"eth2",showLoading:!1}},methods:{formatGas:function(t){return parseFloat((t/1e9).toFixed(2))}}},z=Object(x.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"gasHeader"},[n("b-tabs",{attrs:{type:"is-toggle",size:"is-small",multiline:"",expanded:""},model:{value:t.chain,callback:function(e){t.chain=e},expression:"chain"}},[n("b-tab-item",{attrs:{label:"ETH2",value:"eth2"}}),t._v(" "),n("b-tab-item",{attrs:{label:"BNB",value:"bnb"}}),t._v(" "),n("b-tab-item",{attrs:{label:"TRX",value:"trx"}}),t._v(" "),n("b-tab-item",{attrs:{label:"SOL",value:"sol"}}),t._v(" "),n("b-tab-item",{attrs:{label:"MATIC",value:"matic"}})],1)],1),t._v(" "),n("div",{staticClass:"padding-medium"}),t._v(" "),t.showLoading?n("div",[n("b-skeleton",{attrs:{animated:!0,count:1,height:"43px"}})],1):n("div",{staticClass:"c-columns"},[n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.stakingInfo.rewards))]),t._v(" "),n("p",{staticClass:"title is-6"},[n("growing-number",{attrs:{value:t.stakingInfo.reward,suffix:"%"}})],1)]),t._v(" "),"eth2"==t.chain?n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.stakingInfo.staked))]),t._v(" "),n("p",{staticClass:"title is-6"},[n("growing-number",{attrs:{value:t.stakingInfo.staked}})],1)]):n("div",[n("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.translationWord.stakingInfo.ratio))]),t._v(" "),n("p",{staticClass:"title is-6"},[n("growing-number",{attrs:{value:t.stakingInfo.rate,suffix:"%"}})],1)])])])}),[],!1,null,null,null).exports;function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var U={name:"Home",components:{LineChart:I,PieChart:k,CardComponent:y.a,CardPrice:j,Tiles:O.a,HeroBar:m.a,TitleBar:v.a,FearGreedIndex:$,FeeBurn:E,GasInfo:W.a,CryptoFees:R,AirdropProject:N,StakingInfo:z},data:function(){return{defaultChart:{chartData:null,extraOptions:h},defaultPieChart:{chartData:null,extraOptions:f}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(P.c)("dashboard",["coinsInfo","marketsInfo","dominanceInfo","fngInfo","burnInfo","gasInfo","cryptoFees","stakingInfo","daoInfo"]),{},Object(P.b)("common",["translationWord"]),{},Object(P.b)("dashboard",["airdrops"]),{titleStack:function(){return["Admin","Dashboard"]}}),mounted:function(){var t=this;this.$buefy.snackbar.open({message:"Welcome back",queue:!1}),this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("dashboard/initialize");case 2:t.$store.dispatch("dashboard/fetchCoinsInfo"),t.$store.dispatch("dashboard/fetchMarketsInfo"),t.$store.dispatch("dashboard/startWatchPrices"),t.$store.dispatch("dashboard/fetchDominanceInfo"),t.$store.dispatch("dashboard/fetchFngInfo"),t.$store.dispatch("dashboard/fetchBurnInfo",{}),t.$store.dispatch("dashboard/fetchGasInfo",{}),t.$store.dispatch("dashboard/fetchCryptoFees"),t.$store.dispatch("dashboard/fetchStakingInfo",{}),$nuxt.$bus.$on("updateBurnInfo",(function(e){t.$store.dispatch("dashboard/fetchBurnInfo",{chain:e})})),$nuxt.$bus.$on("updateGasInfo",(function(e){t.$store.dispatch("dashboard/fetchGasInfo",{chain:e})})),$nuxt.$bus.$on("updateStakingInfo",(function(e){t.$store.dispatch("dashboard/fetchStakingInfo",{chain:e})}));case 14:case"end":return e.stop()}}),e)}))))},watch:{marketsInfo:function(t){this.fillChartData()},dominanceInfo:function(t){this.fillPieData()}},methods:{updateBurnInfo:function(t){},dateFormat:function(t,e){var n,r=new Date(e),o={"Y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString(),"H+":r.getHours().toString(),"M+":r.getMinutes().toString(),"S+":r.getSeconds().toString()};for(var c in o)(n=new RegExp("("+c+")").exec(t))&&(t=t.replace(n[1],1==n[1].length?o[c]:o[c].padStart(n[1].length,"0")));return t},fillChartData:function(){var t=this,e=this.marketsInfo.prices,n=(this.marketsInfo.total_volumes,[]),r=[],data=[];e.forEach((function(e,i){data.push(parseFloat(e[1]).toFixed(2)),r.push(t.dateFormat("mm-dd",e[0]))})),n.push({fill:!0,borderColor:d.default.info,borderWidth:1.5,borderDash:[],borderDashOffset:0,backgroundColor:"rgba(50,115,220,0.05)",pointBackgroundColor:d.default.info,pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:d.default.info,pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:.5,data:data}),this.defaultChart.chartData={datasets:n,labels:r}},fillPieData:function(){var data=[],t=this.dominanceInfo.market_cap_percentage,e=t.btc.toFixed(2),n=t.eth.toFixed(2),r=t.bnb.toFixed(2);data.push(e),data.push(n);var o=(100-e-n-r).toFixed(2);data.push(o),this.defaultPieChart.chartData={labels:["BTC "+e+"%","ETH "+n+"%","Others "+o+"%"],datasets:[{backgroundColor:["#f7931a","#16C784","#0429AD"],data:data}]}}},head:function(){return{title:"Dashboard — Chain Tools"}}},X=Object(x.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section is-main-section"},[n("tiles",t._l(t.coinsInfo,(function(t,e){return n("card-price",{key:e,staticClass:"tile is-child",attrs:{type:"is-info",icon:t.icon,number:t.usd,prefix:"$",change:t.usd_24h_change,label:t.name}})})),1),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-8"},[n("card-component",{attrs:{title:"BTC / USD",icon:"chart-areaspline",tips:t.translationWord.index.marketTips},on:{"header-icon-click":t.fillChartData}},[t.defaultChart.chartData?n("div",{staticClass:"chart-area"},[n("line-chart",{ref:"bigChart",staticStyle:{height:"100%"},attrs:{"chart-id":"big-line-chart","chart-data":t.defaultChart.chartData,"extra-options":t.defaultChart.extraOptions}})],1):n("div",{staticClass:"chart-area"},[n("b-skeleton",{attrs:{animated:!0,count:7,height:"50px"}})],1)])],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("card-component",{staticClass:"has-bottom",attrs:{title:t.translationWord.index.cryptoFear,icon:"emoticon-outline",tips:t.translationWord.index.fearTips},on:{"header-icon-click":t.fillChartData}},[t.fngInfo?n("div",[n("FearGreedIndex",{attrs:{fngInfo:t.fngInfo}})],1):n("div",{staticClass:"chart-area"},[n("b-skeleton",{attrs:{animated:!0,count:3,height:"43px"}})],1)]),t._v(" "),n("card-component",{attrs:{title:t.translationWord.index.dominance,icon:"chart-donut"},on:{"header-icon-click":t.fillChartData}},[t.defaultPieChart.chartData?n("div",{staticClass:"chart-area"},[n("pie-chart",{ref:"pieChart",staticStyle:{"max-height":"150px"},attrs:{"chart-id":"big-pie-chart","chart-data":t.defaultPieChart.chartData,"extra-options":t.defaultPieChart.extraOptions}})],1):n("div",[n("b-skeleton",{attrs:{animated:!0,count:3,height:"43px"}})],1)])],1)]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[n("card-component",{staticClass:"has-min-height",attrs:{title:t.translationWord.index.feeBurn,tips:t.translationWord.index.feeBurnTips},on:{"header-icon-click":t.fillChartData}},[t.burnInfo?n("div",[n("FeeBurn",{attrs:{feeInfo:t.burnInfo}})],1):n("div",[n("b-skeleton",{attrs:{animated:!0,count:2,height:"50px"}})],1)])],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("card-component",{staticClass:"has-min-height",attrs:{title:t.translationWord.index.gasInfo,icon:"gas-station",tips:t.translationWord.index.gasInfoTips},on:{"header-icon-click":t.fillChartData}},[t.gasInfo?n("div",[n("GasInfo",{attrs:{gasInfo:t.gasInfo}})],1):n("div",[n("b-skeleton",{attrs:{animated:!0,count:2,height:"50px"}})],1)])],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("card-component",{staticClass:"has-min-height",attrs:{title:t.translationWord.index.stakingInfo,icon:"hammer"}},[t.stakingInfo?n("div",[n("StakingInfo",{attrs:{stakingInfo:t.stakingInfo}})],1):n("div",[n("b-skeleton",{attrs:{animated:!0,count:2,height:"50px"}})],1)])],1)]),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-4"},[n("card-component",{attrs:{title:t.translationWord.index.airdrop,icon:"gift-outline"}},[t.airdrops?n("div",[n("AirdropProject",{attrs:{airdrops:t.airdrops}})],1):n("div",[n("b-skeleton",{attrs:{animated:!0,count:3,height:"43px"}})],1)])],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("card-component",{attrs:{title:"Batch Collection"},on:{"header-icon-click":t.fillChartData}},[t.burnInfo?n("div",[n("b-skeleton",{attrs:{animated:!0,count:3,height:"43px"}})],1):n("div")])],1),t._v(" "),n("div",{staticClass:"column is-4"},[n("card-component",{attrs:{title:"Awesome Tools",icon:"tools"},on:{"header-icon-click":t.fillChartData}},[t.gasInfo?n("div",[n("b-skeleton",{attrs:{animated:!0,count:3,height:"43px"}})],1):n("div")])],1)])],1)])}),[],!1,null,null,null);e.default=X.exports}}]);