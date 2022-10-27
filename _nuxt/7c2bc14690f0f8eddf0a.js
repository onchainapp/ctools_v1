(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1160:function(t,e,n){"use strict";var o={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},headerRightView:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){this.$emit("header-icon-click")},backToLast:function(){this.back()}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[t.icon?n("b-icon",{attrs:{icon:t.icon}}):n("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1161:function(t,e,n){"use strict";var o={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},r=n(26),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1163:function(t,e,n){"use strict";n(121);var o=n(369),r=n.n(o),filter=n(1164),c=n.n(filter),l={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))}},render:function(t){var e=this,n=c()(this.$slots.default,(function(slot){return!!slot.tag}));return n.length<=this.maxPerRow?this.renderAncestor(t,n):t("div",{attrs:{class:"is-tiles-wrapper"}},r()(n,this.maxPerRow).map((function(n){return e.renderAncestor(t,n)})))}},d=n(26),component=Object(d.a)(l,void 0,void 0,!1,null,null,null);e.a=component.exports},1164:function(t,e,n){var o=n(1169),r=n(1165),c=n(1168),l=n(368);t.exports=function(t,e){return(l(t)?o:r)(t,c(e,3))}},1165:function(t,e,n){var o=n(1166);t.exports=function(t,e){var n=[];return o(t,(function(t,o,r){e(t,o,r)&&n.push(t)})),n}},1166:function(t,e,n){var o=n(1170),r=n(1167)(o);t.exports=r},1167:function(t,e,n){var o=n(190);t.exports=function(t,e){return function(n,r){if(null==n)return n;if(!o(n))return t(n,r);for(var c=n.length,l=e?c:-1,d=Object(n);(e?l--:++l<c)&&!1!==r(d[l],l,d););return n}}},1175:function(t,e,n){"use strict";n(66),n(47),n(35),n(19),n(45),n(51),n(28);var o=n(0),r=n(3),c=n(21);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{label:{type:String,default:""},networkChanged:{type:Function}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("common",["translationWord"]),{},Object(c.b)("batchquery",["networks"])),created:function(){this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},watch:{},mounted:function(){},data:function(){return{chain:"1",network:"Ethereum",icon:"eth.png"}},methods:{formatImgURL:function(symbol){return"/networks/"+symbol.toLowerCase()+".png"},initBase:function(t,e,n){this.chain=t,this.network=e,this.icon=n},select:function(t){this.network=t.name,this.icon=t.icon,this.networkChanged&&this.networkChanged(t)}}},f=n(26),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contentContainer"}},[n("b-field",{attrs:{label:t.label}},[n("b-dropdown",{attrs:{scrollable:"","max-height":"400px",expanded:""},scopedSlots:t._u([{key:"trigger",fn:function(){return[n("div",{staticStyle:{display:"flex"}},[n("div",{staticClass:"network-icon-on-selector"},[n("img",{staticClass:"network-icon-small",staticStyle:{"margin-left":"15px"},attrs:{src:"/networks/"+t.icon}})]),t._v(" "),n("b-button",{staticClass:"network-selector-button",attrs:{size:"is-medium","icon-right":"chevron-down"}},[n("span",{staticClass:"is-size-6 network"},[t._v(t._s(t.network))])])],1)]},proxy:!0}]),model:{value:t.chain,callback:function(e){t.chain=e},expression:"chain"}},[t._v(" "),t._l(t.networks,(function(e,o){return n("b-dropdown-item",{key:o,attrs:{value:e.netId},on:{click:function(n){return t.select(e)}}},[n("div",{staticClass:"c-level"},[n("div",{staticClass:"c-level-item small"},[n("img",{staticClass:"network-icon-small",staticStyle:{"margin-right":"16px"},attrs:{src:"/networks/"+e.icon}}),t._v(" "),n("span",[t._v(t._s(e.name))])])])])}))],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports},1208:function(t,e,n){"use strict";n(66),n(47),n(35),n(19),n(45),n(51),n(59),n(28);var o=n(0),r=n(3),c=n(21),l=n(1175);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={props:{type:{type:String,default:"token"}},components:{NetworkSelector:l.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("batchquery",["tokenAddress","tokenSelected","tokenType"]),{},Object(c.b)("common",["translationWord"]),{},Object(c.b)("batchquery",["networks"]),{tokenAddress:{get:function(){return this.$store.state.batchquery.address},set:function(address){this.$store.dispatch("batchquery/setTokenAddress",{address:address})}},network:{get:function(){return this.$store.state.batchquery.network},set:function(t){this.$store.dispatch("batchquery/saveNetwork",{network:t})}},tokenTitle:function(){return"nft"==this.type?this.translationWord.tokenHolder.nftTitle:this.translationWord.home.tokenSelectedTitle},decimals:{get:function(){return null==this.$store.state.batchquery.tokenSelected?"":this.$store.state.batchquery.tokenSelected.decimals}},tokenSelected:{get:function(){return this.$store.state.batchquery.tokenSelected},set:function(t){this.$store.dispatch("batchquery/setTokenSelected",{selected:t})}},filteredTokens:{get:function(){return[]}}}),created:function(){this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},watch:{tokenAddress:function(t){null!=t&&""!=t&&0==this.errorType&&(this.errorType=-1)},network:function(t){this.initNetworkSelect()},selectedTokenInfo:function(t){t=t.replace(/\s+/g,"")},tokenSelected:function(t){this.updateSelectTokenInfo(t)}},mounted:function(){window.onload=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),this.$refs.autocomplete_holder.$el.querySelector(".control .input").type="search",this.initNetworkSelect()},fetch:function(t){t.store},data:function(){return{insertWay:0,buttonLoading:!0,errorType:-1,showCheckingApprove:!1,showContinueButton:!0,selectedTokenInfo:"",lastSelectedTokenInfo:"",approve_type:0,ingoreDuplicatedError:!1,blured:!1,tokenErrorMessage:"",networkSymbol:"",tokenID:null,isNFT:!1}},methods:{networkChanged:function(t){this.selectNetwork(t)},selectNetwork:function(t){this.network=t,this.$store.dispatch("batchquery/saveNetId",{netId:t.netId})},initNetworkSelect:function(){this.networkSymbol=this.network.symbol},selectToken:function(option){this.updateSelectTokenInfo(option)},updateSelectTokenInfo:function(option){null!=option&&null!=option&&(this.selectedTokenInfo="",option.isETH?this.selectedTokenInfo=option.symbol+" - "+option.name:this.selectedTokenInfo=option.symbol+" - "+option.contractAddress,this.tokenSelected=option,this.tokenAddress=option.contractAddress)},prepareToSelectToken:function(){},inputTokenAddresses:function(){0==!this.step&&(this.step=0)},updateLastSelectedInfo:function(){var t=JSON.parse(JSON.stringify({selectedTokenInfo:this.selectedTokenInfo}));this.lastSelectedTokenInfo=t.selectedTokenInfo},clickTokenField:function(){""==this.selectedTokenInfo||this.isMobile||(this.blured?this.blured=!1:this.selectedTokenInfo="")},endSelectToken:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==(n=t.selectedTokenInfo.replace("Loading - ",""))){e.next=11;break}return t.selectedTokenInfo="Loading - "+n,"TRX"!=t.network.symbol&&"SOL"!=t.network.symbol||(t.selectedTokenInfo=n),e.next=6,t.$store.dispatch("batchquery/parseInsertTokenAddress",{tokenAddress:n});case 6:return null!=(o=e.sent)&&(t.tokenSelected,t.updateSelectTokenInfo(t.$store.state.batchquery.tokenSelected)),e.abrupt("return",o);case 11:t.blured=!0,(""==t.selectedTokenInfo||t.filteredTokens.length>0)&&!t.isMobile&&setTimeout((function(){t.updateSelectTokenInfo(t.tokenSelected)}),300);case 14:case"end":return e.stop()}}),e)})))()}}},h=n(26),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contentContainer"}},[n("b-field",{staticStyle:{"margin-bottom":"30px"},attrs:{grouped:"",expanded:""}},[n("b-field",[n("NetworkSelector",{attrs:{label:t.translationWord.home.chainsTitle,networkChanged:t.networkChanged}})],1),t._v(" "),n("b-field",{attrs:{label:t.translationWord.home.tokenSelectedTitle,expanded:""}},[n("b-autocomplete",{ref:"autocomplete_holder",attrs:{field:"tokenAddress",data:t.filteredTokens,placeholder:t.translationWord.home.manuallyInsertTokenAddressPlaceHoder,"dropdown-position":"bottom","clear-on-select":!0,"open-on-focus":!0,icon:"chevron-down",loading:!1,"icon-clickable":!0},on:{input:function(e){return t.prepareToSelectToken()},focus:function(e){return t.clickTokenField()},select:function(option){return t.selectToken(option)},blur:function(e){return t.endSelectToken()}},nativeOn:{click:function(e){return t.clickTokenField()}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"media"},[n("div",{staticClass:"media-content"},[e.option.isETH?n("label",[t._v("\n                        "+t._s(e.option.symbol)+" - "+t._s(e.option.name)+"\n                      ")]):n("label",[t._v("\n                        "+t._s(e.option.symbol)+" - "+t._s(e.option.contractAddress)+"\n                      ")])])])]}}]),model:{value:t.selectedTokenInfo,callback:function(e){t.selectedTokenInfo=e},expression:"selectedTokenInfo"}},[t._v(" "),n("template",{slot:"footer"},[n("span",{staticClass:"autocomplete-footer"},[t._v(t._s(t.translationWord.home.manuallyInsertTokenAddress1)+" ")])])],2)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},1209:function(t,e,n){"use strict";n(66),n(47),n(35),n(19),n(45),n(51);var o=n(3),r=n(21);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"ClientsTableSample",props:{balances:{type:Array,default:[]}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[],checkable:!0,totalAmount:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("common",["translationWord"]),{trashObjectName:function(){return this.trashObject?this.trashObject.name:null},totalAddresses:function(){return this.balances.length},exportBtnText:function(){return this.checkedRows.length?this.translationWord.button.export+"("+this.checkedRows.length+")":this.translationWord.button.export}}),mounted:function(){console.info(this.balances),this.balances},watch:{balances:function(t){this.isLoading=!1,this.balances=t}},methods:{trashModal:function(t){for(var i=0;i<this.balances.length;i++){if(this.balances[i].index==t.index){this.balances.splice(i,1);break}}},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1},exportToCsv:function(t,e){e&&"string"==typeof e||(e="export_result.csv");var n="";t.forEach((function(t,i){var e=t.join(",");n+=e+"\r\n"}));var o=new Blob([n],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,e);else{var link=document.createElement("a");if(void 0!==link.download){var r=URL.createObjectURL(o);link.setAttribute("href",r),link.setAttribute("download",e),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}}},exportAll:function(){var t=[];this.balances.forEach((function(e,i){null!=e.tokenId?t.push([e.address,e.tokenId]):t.push([e.address])})),this.exportToCsv(t)},exportSelected:function(){var t=[];this.checkedRows.forEach((function(e,i){null!=e.tokenId?t.push([e.address,e.tokenId]):t.push([e.address])})),this.exportToCsv(t)}}},d=n(26),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("b-button",{staticClass:"field",attrs:{label:t.translationWord.button.exportAll,type:"is-info","icon-left":"export",disabled:0==t.balances.length},on:{click:t.exportAll}}),t._v(" "),n("div",{staticClass:"control"}),t._v(" "),n("b-button",{staticClass:"field",attrs:{label:t.exportBtnText,type:"is-info","icon-left":"export",disabled:0==t.checkedRows.length},on:{click:t.exportSelected}})],1),t._v(" "),n("hr"),t._v(" "),n("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:"","per-page":"15",striped:!0,hoverable:!0,"default-sort":"balance",data:t.balances,"pagination-position":"bottom","custom-row-key":"ID"},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}}},[t.balances.length?[n("b-table-column",{attrs:{label:t.translationWord.balanceQuery.index,field:"ID",width:"80px"},scopedSlots:t._u([{key:"subheading",fn:function(e){e.column,e.index;return[t._v("\n              "+t._s(t.translationWord.balanceQuery.total)+"\n        ")]}},{key:"default",fn:function(e){return[n("p",{staticStyle:{"max-width":"80px","word-wrap":"break-word","word-break":"break-all"}},[t._v(t._s(e.row.index))])]}}],null,!1,334048940)}),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.balanceQuery.address,field:"address"},scopedSlots:t._u([{key:"subheading",fn:function(e){e.column,e.index;return[t._v("\n              "+t._s(t.totalAddresses)+"\n        ")]}},{key:"default",fn:function(e){return[n("p",[t._v(t._s(e.row.address))])]}}],null,!1,3416161845)}),t._v(" "),n("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"buttons is-right"},[n("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.trashModal(e.row)}}},[n("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)])]}}],null,!1,2044720855)})]:t._e(),t._v(" "),n("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[n("p",[n("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.loading))])]:[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.noData))])]],2)])],2)],1)}),[],!1,null,null,null);e.a=component.exports}}]);