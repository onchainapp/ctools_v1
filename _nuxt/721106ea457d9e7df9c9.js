(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1133:function(t,e,n){"use strict";var o={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1135:function(t,e,n){"use strict";var o={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},l=n(30),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1136:function(t,e,n){"use strict";var o={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},l=n(30),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},1154:function(t,e,n){"use strict";var o={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0}}},l=n(30),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return this.isDismissed?this._e():e("div",{staticClass:"notification"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[this._t("default")],2)]),this._v(" "),e("div",{staticClass:"level-right"},[e("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:this.dismiss}},[this._v("\n        关闭\n      ")])])])])}),[],!1,null,null,null);e.a=component.exports},1167:function(t,e,n){"use strict";n(79),n(53),n(34),n(29),n(46),n(40);var o=n(0),l=(n(60),n(4)),c=(n(207),{name:"ModalBox",props:{isActive:{type:Boolean,default:!1},trashObjectName:{type:String,default:null}},data:function(){return{isModalActive:!1}},watch:{isActive:function(t){this.isModalActive=t},isModalActive:function(t){t||this.cancel()}},methods:{cancel:function(){this.$emit("cancel")},confirm:function(){this.$emit("confirm")}}}),r=n(30),d=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{active:t.isModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isModalActive=e}}},[n("div",{staticClass:"modal-card"},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("\n        Confirm action\n      ")])]),t._v(" "),n("section",{staticClass:"modal-card-body"},[n("p",[t._v("This will permanently delete "),n("b",[t._v(t._s(t.trashObjectName))])]),t._v(" "),n("p",[t._v("Action can not be undone.")])]),t._v(" "),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.cancel}},[t._v("\n        Cancel\n      ")]),t._v(" "),n("button",{staticClass:"button is-danger",on:{click:t.confirm}},[t._v("\n        Delete\n      ")])])])])}),[],!1,null,null,null).exports,h=n(37);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"ClientsTableSample",components:{ModalBox:d},props:{balances:{type:Array,default:[]}},data:function(){return{isModalActive:!1,trashObject:null,clients:[],isLoading:!1,paginated:!1,perPage:10,checkedRows:[],checkable:!0,totalAmount:0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(h.b)("common",["translationWord"]),{trashObjectName:function(){return this.trashObject?this.trashObject.name:null},totalAddresses:function(){return this.balances.length},exportBtnText:function(){return this.checkedRows.length?this.translationWord.button.export+"("+this.checkedRows.length+")":this.translationWord.button.export}}),mounted:function(){this.balances},watch:{balances:function(t){this.isLoading=!1,this.balances=t,this.rewriteTotalAmounts()}},methods:{trashModal:function(t){for(var i=0;i<this.balances.length;i++){if(this.balances[i].index==t.index){this.balances.splice(i,1);break}}},rewriteTotalAmounts:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.balances.forEach((function(t,i){n.push(t.balanceStr)})),e.next=4,t.$store.dispatch("common/combineTotalAmount",{amounts:n});case 4:t.totalAmount=e.sent,console.info("this.totalAmount",t.totalAmount);case 6:case"end":return e.stop()}}),e)})))()},trashConfirm:function(){this.isModalActive=!1,this.$buefy.snackbar.open({message:"Confirmed",queue:!1})},trashCancel:function(){this.isModalActive=!1},exportToCsv:function(t,e){e&&"string"==typeof e||(e="export_result.csv");var n="";t.forEach((function(t,i){var e=t.join(",");n+=e+"\r\n"}));var o=new Blob([n],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,e);else{var link=document.createElement("a");if(void 0!==link.download){var l=URL.createObjectURL(o);link.setAttribute("href",l),link.setAttribute("download",e),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}}},exportAll:function(){var t=[];this.balances.forEach((function(e,i){t.push([e.address,e.balanceStr])})),this.exportToCsv(t)},exportSelected:function(){var t=[];this.checkedRows.forEach((function(e,i){t.push([e.address,e.balanceStr])})),this.exportToCsv(t)}}},m=Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("modal-box",{attrs:{"is-active":t.isModalActive,"trash-object-name":t.trashObjectName},on:{confirm:t.trashConfirm,cancel:t.trashCancel}}),t._v(" "),n("b-field",{attrs:{grouped:"","group-multiline":""}},[n("b-button",{staticClass:"field",attrs:{label:t.translationWord.button.exportAll,type:"is-info","icon-left":"export",disabled:0==t.balances.length},on:{click:t.exportAll}}),t._v(" "),n("div",{staticClass:"control"}),t._v(" "),n("b-button",{staticClass:"field",attrs:{label:t.exportBtnText,type:"is-info","icon-left":"export",disabled:0==t.checkedRows.length},on:{click:t.exportSelected}})],1),t._v(" "),n("hr"),t._v(" "),n("b-table",{attrs:{"checked-rows":t.checkedRows,checkable:t.checkable,loading:t.isLoading,paginated:"","per-page":"15",striped:!0,hoverable:!0,"default-sort":"balance",data:t.balances,"pagination-position":"bottom","custom-row-key":"ID"},on:{"update:checkedRows":function(e){t.checkedRows=e},"update:checked-rows":function(e){t.checkedRows=e}},scopedSlots:t._u([{key:"default",fn:function(e){return[n("b-table-column",{attrs:{label:t.translationWord.balanceQuery.index,field:"ID",width:"200px"}},[t._v("\n        "+t._s(e.row.index)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.balanceQuery.address,field:"address"}},[t._v("\n        "+t._s(e.row.address)+"\n      ")]),t._v(" "),n("b-table-column",{attrs:{label:t.translationWord.balanceQuery.balance,field:"amount",width:"100px",sortable:""}},[t._v("\n        "+t._s(e.row.balanceStr)+"\n      ")]),t._v(" "),n("b-table-column",{staticClass:"is-actions-cell",attrs:{"custom-key":"actions"}},[n("div",{staticClass:"buttons is-right"},[n("button",{staticClass:"button is-small is-danger",attrs:{type:"button"},on:{click:function(n){return n.preventDefault(),t.trashModal(e.row)}}},[n("b-icon",{attrs:{icon:"trash-can",size:"is-small"}})],1)])])]}},{key:"subheading",fn:function(e){e.column;var o=e.index;return[0==o?n("span",[t._v(t._s(t.translationWord.balanceQuery.total))]):t._e(),t._v(" "),1==o?n("span",[t._v(t._s(t.totalAddresses))]):t._e(),t._v(" "),2==o?n("span",[t._v(t._s(t.totalAmount))]):t._e()]}}])},[t._v(" "),t._v(" "),n("section",{staticClass:"section",attrs:{slot:"empty"},slot:"empty"},[n("div",{staticClass:"content has-text-grey has-text-centered"},[t.isLoading?[n("p",[n("b-icon",{attrs:{icon:"dots-horizontal",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.loading))])]:[n("p",[n("b-icon",{attrs:{icon:"emoticon-sad",size:"is-large"}})],1),t._v(" "),n("p",[t._v(t._s(t.translationWord.info.noData))])]],2)])])],1)}),[],!1,null,null,null);e.a=m.exports},1259:function(t,e,n){"use strict";n.r(e);var o=n(1154),l=n(1167),c=n(1133),r=n(1135),d={name:"Tables",components:{HeroBar:n(1136).a,TitleBar:r.a,CardComponent:c.a,SampleTable:l.a,Notification:o.a},computed:{titleStack:function(){return["Admin","Tables"]}},head:function(){return{title:"Tables — Admin Null Nuxt.js Bulma"}}},h=n(30),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section is-main-section is-not-full-width"},[n("div",{staticClass:"content"},[n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),n("b",[t._v("Sorted and paginated table.")]),t._v(" Based on Buefy's table.\n      ")],1)]),t._v(" "),n("card-component",{staticClass:"has-table has-mobile-sort-spaced",attrs:{title:"Clients",icon:"account-multiple"}},[n("SampleTable",{attrs:{"data-url":t.$router.options.base+"data-sources/clients.json",checkable:!0}})],1),t._v(" "),n("hr"),t._v(" "),n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),n("b",[t._v("Tightly wrapped")]),t._v(" — table header becomes card header\n      ")],1)]),t._v(" "),n("card-component",{staticClass:"has-table has-mobile-sort-spaced"},[n("SampleTable",{attrs:{"data-url":t.$router.options.base+"data-sources/clients.json",checkable:!0}})],1),t._v(" "),n("hr"),t._v(" "),n("notification",{staticClass:"is-info"},[n("div",[n("b-icon",{attrs:{icon:"buffer","custom-size":"default"}}),t._v(" "),n("b",[t._v("Empty table.")]),t._v(" When there's nothing to show\n      ")],1)]),t._v(" "),n("card-component",{staticClass:"has-table"},[n("SampleTable")],1)],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);