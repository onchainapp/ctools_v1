(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1151:function(t,e,r){"use strict";var n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},tips:{type:String,default:null},back:{type:Function,default:void 0}},methods:{headerIconClick:function(){console.info("222222"),this.$emit("header-icon-click")},backToLast:function(){this.back()}}},l=r(26),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card"},[t.title?r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[t.tips?r("span",[r("b-tooltip",{staticClass:"c-tooltip",attrs:{label:t.tips,position:"is-top",size:"is-small",type:"is-dark",multilined:""}},[t.icon?r("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n          "+t._s(t.title)+"\n        ")],1)],1):r("span",[t.back?r("span",{staticClass:"is-clickable",on:{click:function(e){return e.preventDefault(),t.backToLast(e)}}},[r("b-icon",{attrs:{icon:"arrow-left","custom-size":"default"}}),t._v("\n            "+t._s(t.title)+"\n          ")],1):r("span",[t.icon?r("b-icon",{attrs:{icon:t.icon,"custom-size":"default"}}):t._e(),t._v("\n            "+t._s(t.title)+"\n          ")],1)])]),t._v(" "),t.headerIcon?r("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(e){return e.preventDefault(),t.headerIconClick(e)}}},[r("b-icon",{attrs:{icon:t.headerIcon,"custom-size":"default"}})],1):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"card-content"},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},1152:function(t,e,r){"use strict";var n={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},l=r(26),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"section is-title-bar"},[r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[r("ul",t._l(t.titleStack,(function(title,e){return r("li",{key:e},[t._v("\n            "+t._s(title)+"\n          ")])})),0)])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-right"},[e("div",{staticClass:"level-item"},[e("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);e.a=component.exports},1153:function(t,e,r){"use strict";var n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},l=r(26),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"hero is-hero-bar"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[e("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[e("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);e.a=component.exports},1154:function(t,e,r){"use strict";r(117);var n=r(367),l=r.n(n),filter=r(1155),o=r.n(filter),c={name:"Tiles",props:{maxPerRow:{type:Number,default:5}},methods:{renderAncestor:function(t,e){return t("div",{attrs:{class:"tile is-ancestor"}},e.map((function(element){return t("div",{attrs:{class:"tile is-parent"}},[element])})))}},render:function(t){var e=this,r=o()(this.$slots.default,(function(slot){return!!slot.tag}));return r.length<=this.maxPerRow?this.renderAncestor(t,r):t("div",{attrs:{class:"is-tiles-wrapper"}},l()(r,this.maxPerRow).map((function(r){return e.renderAncestor(t,r)})))}},f=r(26),component=Object(f.a)(c,void 0,void 0,!1,null,null,null);e.a=component.exports},1155:function(t,e,r){var n=r(1160),l=r(1156),o=r(1159),c=r(366);t.exports=function(t,e){return(c(t)?n:l)(t,o(e,3))}},1156:function(t,e,r){var n=r(1157);t.exports=function(t,e){var r=[];return n(t,(function(t,n,l){e(t,n,l)&&r.push(t)})),r}},1157:function(t,e,r){var n=r(1161),l=r(1158)(n);t.exports=l},1158:function(t,e,r){var n=r(190);t.exports=function(t,e){return function(r,l){if(null==r)return r;if(!n(r))return t(r,l);for(var o=r.length,c=e?o:-1,f=Object(r);(e?c--:++c<o)&&!1!==l(f[c],c,f););return r}}},1162:function(t,e,r){"use strict";var n={name:"Notification",data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0}}},l=r(26),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.isDismissed?this._e():e("div",{staticClass:"notification"},[e("div",{staticClass:"level"},[e("div",{staticClass:"level-left"},[e("div",{staticClass:"level-item"},[this._t("default")],2)]),this._v(" "),e("div",{staticClass:"level-right"},[e("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:this.dismiss}},[this._v("\n        关闭\n      ")])])])])}),[],!1,null,null,null);e.a=component.exports},1164:function(t,e,r){"use strict";var n={name:"FilePicker",props:{accept:{type:String,default:null}},data:function(){return{file:null,uploadPercent:0}},computed:{buttonLabel:function(){return this.file?"Pick another file":"Pick a file"}},methods:{upload:function(t){this.$emit("input",t)},progressEvent:function(t){this.uploadPercent=Math.round(100*t.loaded/t.total)}}},l=r(26),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-field",{staticClass:"file"},[r("b-upload",{attrs:{accept:t.accept,multiple:"","drag-drop":"",expanded:""},on:{input:t.upload},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),t._v(" "),r("p",[t._v("Drop your files here or click to upload")])])])])],1)}),[],!1,null,null,null);e.a=component.exports},1166:function(t,e,r){"use strict";r(64),r(45),r(34),r(24),r(42),r(70);var n=r(3),l=r(20);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"UserAvatar",props:{avatar:{type:String,default:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({newUserAvatar:function(){if(this.avatar)return this.avatar;if(this.userAvatar)return this.userAvatar;var t="somename";return this.userName&&(t=this.userName.replace(/[^a-z0-9]+/i,"")),"https://avatars.dicebear.com/v2/human/".concat(t,".svg?options[mood][]=happy")}},Object(l.c)(["userAvatar","userName"]))},f=r(26),component=Object(f.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-user-avatar"},[e("img",{attrs:{src:this.newUserAvatar,alt:this.userName}})])}),[],!1,null,null,null);e.a=component.exports},1175:function(t,e,r){var n=r(1176)(r(1177));t.exports=n},1176:function(t,e,r){var n=r(1159),l=r(190),o=r(569);t.exports=function(t){return function(e,r,c){var f=Object(e);if(!l(e)){var d=n(r,3);e=o(e),r=function(t){return d(f[t],t,f)}}var m=t(e,r,c);return m>-1?f[d?e[m]:m]:void 0}}},1177:function(t,e,r){var n=r(1178),l=r(1159),o=r(572),c=Math.max;t.exports=function(t,e,r){var f=null==t?0:t.length;if(!f)return-1;var d=null==r?0:o(r);return d<0&&(d=c(f+d,0)),n(t,l(e,3),d)}},1178:function(t,e){t.exports=function(t,e,r,n){for(var l=t.length,o=r+(n?1:-1);n?o--:++o<l;)if(e(t[o],o,t))return o;return-1}},1283:function(t,e,r){"use strict";r.r(e);r(52);var n=r(388),l=r.n(n),o=(r(1175),r(1152)),c=r(1153),f=r(1154),d=r(1151),m=r(1164),v=r(1166),h=r(1162),_={name:"ClientForm",components:{UserAvatar:v.a,FilePicker:m.a,CardComponent:d.a,Tiles:f.a,HeroBar:c.a,TitleBar:o.a,Notification:h.a},data:function(){return{id:null,isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1}},computed:{titleStack:function(){return["Admin","Clients",this.isProfileExists?this.form.name:"New client"]},heroTitle:function(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo:function(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel:function(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle:function(){return this.isProfileExists?"Edit Client":"New Client"}},created:function(){this.getData()},methods:{getClearFormObject:function(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData:function(){},input:function(t){this.createdReadable=l()(t).format("MMM D, YYYY")},submit:function(){var t=this;this.isLoading=!0,setTimeout((function(){t.isLoading=!1,t.$buefy.snackbar.open({message:"Demo only",queue:!1})}),500)}},head:function(){return{title:"Client — Admin Null Nuxt.js Bulma"}}},C=r(26),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("title-bar",{attrs:{"title-stack":t.titleStack}}),t._v(" "),r("hero-bar",[t._v("\n    "+t._s(t.heroTitle)+"\n    "),r("router-link",{staticClass:"button",attrs:{slot:"right",to:t.heroRouterLinkTo},slot:"right"},[t._v("\n      "+t._s(t.heroRouterLinkLabel)+"\n    ")])],1),t._v(" "),r("section",{staticClass:"section is-main-section"},[r("notification",{staticClass:"is-info"},[r("div",[r("span",[r("b",[t._v("Demo only.")]),t._v(" No data will be saved/updated")])])]),t._v(" "),r("tiles",[r("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"account-edit"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("b-field",{attrs:{label:"ID",horizontal:""}},[r("b-input",{attrs:{"custom-class":"is-static",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{label:"Avatar",horizontal:""}},[r("file-picker")],1),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{label:"Name",message:"Client name",horizontal:""}},[r("b-input",{attrs:{placeholder:"e.g. John Doe",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),r("b-field",{attrs:{label:"Company",message:"Client's company name",horizontal:""}},[r("b-input",{attrs:{placeholder:"e.g. Berton & Steinway",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),t._v(" "),r("b-field",{attrs:{label:"City",message:"Client's city",horizontal:""}},[r("b-input",{attrs:{placeholder:"e.g. Geoffreyton",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),t._v(" "),r("b-field",{attrs:{label:"Created",horizontal:""}},[r("b-datepicker",{attrs:{placeholder:"Click to select...",icon:"calendar-today"},on:{input:t.input},model:{value:t.form.created_date,callback:function(e){t.$set(t.form,"created_date",e)},expression:"form.created_date"}})],1),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{label:"Progress",horizontal:""}},[r("b-slider",{model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{horizontal:""}},[r("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("\n              Submit\n            ")])],1)],1)]),t._v(" "),t.isProfileExists?r("card-component",{staticClass:"tile is-child",attrs:{title:"Client Profile",icon:"account"}},[r("user-avatar",{staticClass:"image has-max-width is-aligned-center",attrs:{avatar:t.form.avatar}}),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{label:"Name"}},[r("b-input",{attrs:{value:t.form.name,"custom-class":"is-static",readonly:""}})],1),t._v(" "),r("b-field",{attrs:{label:"Company"}},[r("b-input",{attrs:{value:t.form.company,"custom-class":"is-static",readonly:""}})],1),t._v(" "),r("b-field",{attrs:{label:"City"}},[r("b-input",{attrs:{value:t.form.city,"custom-class":"is-static",readonly:""}})],1),t._v(" "),r("b-field",{attrs:{label:"Created"}},[r("b-input",{attrs:{value:t.createdReadable,"custom-class":"is-static",readonly:""}})],1),t._v(" "),r("hr"),t._v(" "),r("b-field",{attrs:{label:"Progress"}},[r("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.form.progress}},[t._v("\n            "+t._s(t.form.progress)+"\n          ")])])],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);