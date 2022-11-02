(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{1161:function(t,e,n){"use strict";var l={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},headerRightView:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){this.$emit("header-icon-click")},backToLast:function(){this.back()}}},o=n(26),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.title?n("header",{staticClass:"card-header"},[n("p",{staticClass:"card-header-title"},[t.tips?n("span",[n("b-tooltip",{staticClass:"c-tooltip",attrs:{position:"is-top",size:"is-small",type:"is-dark",multilined:""},scopedSlots:t._u([{key:"content",fn:function(){return[n("span",{domProps:{innerHTML:t._s(t.tips)}})]},proxy:!0}],null,!1,1676059129)},[t._v(" "),t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):n("span",[t.back?n("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[t.icon?n("b-icon",{attrs:{icon:t.icon}}):n("b-icon",{attrs:{icon:"arrow-left"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):n("span",[t.icon?n("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?n("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[n("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1162:function(t,e,n){"use strict";var l={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=n(26),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section is-title-bar"},[n("div",{staticClass:"level"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("ul",t._l(t.titleStack,(function(title,e){return n("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1163:function(t,e,n){"use strict";var l={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=n(26),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])}),[],!1,null,null,null);e.a=component.exports},1176:function(t,e,n){"use strict";var l={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},o=n(26),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{staticClass:"file"},[n("b-upload",{attrs:{accept:t.accept,multiple:"","drag-drop":"",expanded:""},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[n("section",{staticClass:"section"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),t._v(" "),n("p",[t._v("Drop your files here or click to upload")])])])])],1)}),[],!1,null,null,null);e.a=component.exports},1281:function(t,e,n){var l=n(1282),o=n(1171),r=n(1169);t.exports=function(object,t){var e={};return t=r(t,3),o(object,(function(n,o,object){l(e,o,t(n,o,object))})),e}},1282:function(t,e,n){var l=n(1283);t.exports=function(object,t,e){"__proto__"==t&&l?l(object,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):object[t]=e}},1283:function(t,e,n){var l=n(1175),o=function(){try{var t=l(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},1291:function(t,e,n){"use strict";n.r(e);var l=n(73),o=n(1281),r=n.n(o),c=n(1162),m=n(1161),d={name:"CheckboxPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:Array,default:function(){return[]}}},data:function(){return{newValue:[]}},watch:{value:function(t){this.newValue=t}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}}},f=n(26),h=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{attrs:{grouped:"","group-multiline":""}},t._l(t.options,(function(e,l){return n("div",{key:l,staticClass:"control"},[n("b-checkbox",{attrs:{"native-value":l,type:t.type},on:{input:t.input},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),0)}),[],!1,null,null,null).exports,v=(n(121),{name:"RadioPicker",props:{options:{type:Object,default:null},type:{type:String,default:null},value:{type:[String,Number],default:null}},data:function(){return{newValue:null}},watch:{value:function(t){this.newValue=t}},created:function(){this.newValue=this.value},methods:{input:function(){this.$emit("input",this.newValue)}}}),_=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-field",{attrs:{grouped:"","group-multiline":""}},t._l(t.options,(function(e,l){return n("div",{key:l,staticClass:"control"},[n("b-radio",{attrs:{"native-value":l,type:t.type},on:{input:t.input},model:{value:t.newValue,callback:function(e){t.newValue=e},expression:"newValue"}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),0)}),[],!1,null,null,null).exports,k=n(1176),y={name:"Forms",components:{HeroBar:n(1163).a,FilePicker:k.a,RadioPicker:_,CheckboxPicker:h,CardComponent:m.a,TitleBar:c.a},data:function(){return{isLoading:!1,form:{name:null,email:null,phone:null,department:null,subject:null,question:null},customElementsForm:{checkbox:[],radio:null,switch:!0,file:null},departments:["Business Development","Marketing","Sales"]}},computed:{titleStack:function(){return["Admin","Forms"]}},methods:{submit:function(){},reset:function(){this.form=r()(this.form,(function(t){return t&&"object"===Object(l.a)(t)?[]:null})),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}},head:function(){return{title:"Forms — Admin Null Nuxt.js Bulma"}}},C=Object(f.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section is-main-section"},[n("card-component",{attrs:{title:"Forms",icon:"ballot"}},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("b-field",{attrs:{label:"From",horizontal:""}},[n("b-field",[n("b-input",{attrs:{icon:"account",placeholder:"Name",name:"name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("b-field",[n("b-input",{attrs:{icon:"email",type:"email",placeholder:"E-mail",name:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1)],1),t._v(" "),n("b-field",{attrs:{message:"Do not enter the leading zero",horizontal:""}},[n("b-field",[n("p",{staticClass:"control"},[n("a",{staticClass:"button is-static"},[t._v("\n                +44\n              ")])]),t._v(" "),n("b-input",{attrs:{type:"tel",name:"phone",expanded:""},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1)],1),t._v(" "),n("b-field",{attrs:{label:"Department",horizontal:""}},[n("b-select",{attrs:{placeholder:"Select a department",required:""},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}},t._l(t.departments,(function(e,l){return n("option",{key:l,domProps:{value:e}},[t._v("\n              "+t._s(e)+"\n            ")])})),0)],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Subject",message:"Message subject",horizontal:""}},[n("b-input",{attrs:{placeholder:"e.g. Partnership proposal",required:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1),t._v(" "),n("b-field",{attrs:{label:"Question",message:"Your question. Max 255 characters",horizontal:""}},[n("b-input",{attrs:{type:"textarea",placeholder:"Explain how we can help you",maxlength:"255",required:""},model:{value:t.form.question,callback:function(e){t.$set(t.form,"question",e)},expression:"form.question"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{horizontal:""}},[n("b-field",{attrs:{grouped:""}},[n("div",{staticClass:"control"},[n("b-button",{attrs:{"native-type":"submit",type:"is-primary"}},[t._v("\n                Submit\n              ")])],1),t._v(" "),n("div",{staticClass:"control"},[n("b-button",{attrs:{type:"is-primary is-outlined"},on:{click:t.reset}},[t._v("\n                Reset\n              ")])],1)])],1)],1)]),t._v(" "),n("card-component",{attrs:{title:"Custom elements",icon:"ballot-outline"}},[n("b-field",{staticClass:"has-check",attrs:{label:"Checkbox",horizontal:""}},[n("checkbox-picker",{attrs:{options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"},type:"is-primary"},model:{value:t.customElementsForm.checkbox,callback:function(e){t.$set(t.customElementsForm,"checkbox",e)},expression:"customElementsForm.checkbox"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{staticClass:"has-check",attrs:{label:"Radio",horizontal:""}},[n("radio-picker",{attrs:{options:{one:"One",two:"Two"}},model:{value:t.customElementsForm.radio,callback:function(e){t.$set(t.customElementsForm,"radio",e)},expression:"customElementsForm.radio"}})],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"Switch",horizontal:""}},[n("b-switch",{model:{value:t.customElementsForm.switch,callback:function(e){t.$set(t.customElementsForm,"switch",e)},expression:"customElementsForm.switch"}},[t._v("\n          Default\n        ")])],1),t._v(" "),n("hr"),t._v(" "),n("b-field",{attrs:{label:"File",horizontal:""}},[n("file-picker",{model:{value:t.customElementsForm.file,callback:function(e){t.$set(t.customElementsForm,"file",e)},expression:"customElementsForm.file"}})],1)],1)],1)])}),[],!1,null,null,null);e.default=C.exports}}]);