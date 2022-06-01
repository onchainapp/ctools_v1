(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1143:function(e,t,r){"use strict";var n={name:"CardComponent",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null}},methods:{headerIconClick:function(){this.$emit("header-icon-click")}}},o=r(27),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e.title?r("header",{staticClass:"card-header"},[r("p",{staticClass:"card-header-title"},[e.icon?r("b-icon",{attrs:{icon:e.icon,"custom-size":"default"}}):e._e(),e._v("\n      "+e._s(e.title)+"\n    ")],1),e._v(" "),e.headerIcon?r("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"},on:{click:function(t){return t.preventDefault(),e.headerIconClick(t)}}},[r("b-icon",{attrs:{icon:e.headerIcon,"custom-size":"default"}})],1):e._e()]):e._e(),e._v(" "),r("div",{staticClass:"card-content"},[e._t("default")],2)])}),[],!1,null,null,null);t.a=component.exports},1144:function(e,t,r){"use strict";var n={name:"TitleBar",props:{titleStack:{type:Array,default:function(){return[]}}}},o=r(27),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"section is-title-bar"},[r("div",{staticClass:"level"},[r("div",{staticClass:"level-left"},[r("div",{staticClass:"level-item"},[r("ul",e._l(e.titleStack,(function(title,t){return r("li",{key:t},[e._v("\n            "+e._s(title)+"\n          ")])})),0)])]),e._v(" "),e._m(0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"level-right"},[t("div",{staticClass:"level-item"},[t("div",{staticClass:"buttons is-right"})])])}],!1,null,null,null);t.a=component.exports},1145:function(e,t,r){"use strict";var n={name:"HeroBar",props:{hasRightVisible:{type:Boolean,default:!0}}},o=r(27),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"hero is-hero-bar"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("h1",{staticClass:"title"},[this._t("default")],2)])]),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.hasRightVisible,expression:"hasRightVisible"}],staticClass:"level-right"},[t("div",{staticClass:"level-item"},[this._t("right")],2)])])])])}),[],!1,null,null,null);t.a=component.exports},1269:function(e,t,r){"use strict";r.r(t);r(59),r(43),r(32),r(24),r(41);var n=r(128),o=(r(34),r(0)),d=r(3),l=r(25),c=r(1144),_=r(1143),v=r(1145);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var h,m={computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.c)("checkBulksend",["step","originInputData","addressInfo","checkingAddressFrom","checkingAddressTo","contructTxIndex"]),{},Object(l.c)("bulksender",["bulksenderAddress","txUrl"]),{},Object(l.c)("token",["balance","tokenAddress","allowanceEnough","balanceEnough","priceLoaded"]),{},Object(l.c)("metamask",["balance","ethAccount","isFetching","tokens","netId","walletState","ethPriceLoaded"]),{},Object(l.b)("common",["translationWord"]),{},Object(l.b)("token",["isERC721","isNFTToken","isERC1155"]),{},Object(l.b)("metamask",["currency"]),{tokenBalance:function(){return this.$store.state.token.balance},erc20Title:function(){return this.translationWord.home.token},txsTimes:function(){var e=this.addressInfo.times;return null==e?0:e},tokenAddress:{get:function(){return this.$store.state.token.address},set:function(address){this.$store.dispatch("token/setTokenAddress",{address:address})}},decimals:{get:function(){return null==this.$store.state.token.tokenSelected?"":this.$store.state.token.tokenSelected.decimals}},tokenSelected:{get:function(){return this.$store.state.token.tokenSelected},set:function(e){this.$store.dispatch("token/setTokenSelected",{selected:e})}},manuallyInsertPlaceholder:{get:function(){return this.isERC721?this.translationWord.home.manuallyInsertPlaceholderERC721:this.isERC1155?this.translationWord.home.manuallyInsertPlaceholderERC1155:this.translationWord.home.manuallyInsertPlaceholder}},inputCode:function(){var data=this.$store.state.checkBulksend.addressInfo.finalData,e=[];return this.isERC721?data.forEach((function(t){e.push(t.address+","+t.tokenId)})):this.isERC1155?data.forEach((function(t){e.push(t.address+","+t.tokenId+","+t.amountStr)})):data.forEach((function(t){e.push(t.address)})),e.join("\n")},hasDuplicated:function(){return this.$store.state.checkBulksend.addressInfo.duplicatedAddressesIndexes.length>0},hasInvalid:function(){return this.$store.state.checkBulksend.addressInfo.invalidAddressesIndexes.length>0},duplicatedIndexes:function(){return this.$store.state.checkBulksend.addressInfo.duplicatedAddressesIndexes},invalidIndexes:function(){return this.$store.state.checkBulksend.addressInfo.invalidAddressesIndexes},invalidAddresses:function(){return this.$store.state.checkBulksend.addressInfo.invalidAddresses},finalAmount:function(){return this.$store.state.checkBulksend.addressInfo.finalAmount},tokenBalanceLoaded:function(){return this.$store.state.token.tokenBalanceLoaded},tokenAllowanceLoaded:function(){return this.$store.state.token.tokenAllowanceLoaded},tokenInfoLoaded:function(){return this.$store.state.token.tokenInfoLoaded},cmOption:function(){return{placeholder:this.manuallyInsertPlaceholder,tabSize:4,foldGutter:!0,lineNumbers:!0,line:!0,keyMap:"sublime",mode:"text/x-vue",theme:"base16-dark",autofocus:!1,extraKeys:{F11:function(e){e.setOption("fullScreen",!e.getOption("fullScreen"))},Esc:function(e){e.getOption("fullScreen")&&e.setOption("fullScreen",!1)}}}}}),created:function(){var e=this;this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.uploadComponentLoading=!1,e.codemirrorComponentLoading=!1,e.buttonLoading=!1,e.inputCode&&(e.code=e.inputCode);case 4:case"end":return t.stop()}}),t)}))))},watch:{code:function(e){""!=e&&1==this.errorType&&(this.errorType=-1),$nuxt.$bus.$emit("codeChanged",!0)},isMobile:function(e){e&&(this.inputType=1)},dropFiles:(h=Object(o.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.dropFiles.length>0)){e.next=8;break}return r=this.dropFiles[this.dropFiles.length-1],this.uploadComponentLoading=!0,this.uploadingAddress=!0,e.next=6,this.$store.dispatch("checkBulksend/parseFile",{fileData:r});case 6:1==e.sent&&(this.uploadingAddress=!1,this.uploadComponentLoading=!1,this.inputType=1,this.code=this.inputCode);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},mounted:function(){var e=this;$nuxt.$bus.$on("closeExamplesModal",(function(t){e.examplesModal.close()}))},fetch:function(e){e.store},data:function(){return{insertWay:0,inputType:0,showPrepareStep:!1,prepareStep:0,uploadComponentLoading:!0,codemirrorComponentLoading:!0,uploadingAddress:!1,addressProcessing:!1,buttonLoading:!0,errorType:-1,showCheckingApprove:!1,showContinueButton:!0,selectedTokenInfo:"",lastSelectedTokenInfo:"",approve_type:0,dropFiles:[],code:"",exampleCode:"0x3df332e44a0bbff025838c187873d77f92caf5e9\n0x76d31966abf3edeb29e599eac4adcb72fba85e6a\n0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF",exampleCodeERC721:"0x3df332e44a0bbff025838c187873d77f92caf5e9,1\n0x76d31966abf3edeb29e599eac4adcb72fba85e6a,2\n0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,3",exampleCodeERC1155:"0x3df332e44a0bbff025838c187873d77f92caf5e9,1,1\n0x76d31966abf3edeb29e599eac4adcb72fba85e6a,2,2\n0xC8c30Fa803833dD1Fd6DBCDd91Ed0b301EFf87cF,3,10",preCode:"",ingoreDuplicatedError:!1,blured:!1,tokenErrorMessage:"",examplesModal:void 0}},methods:{connectToWallet:function(){$nuxt.$bus.$emit("showWalletConnectList",!0)},downloadExcel:function(e){window.open("https://bulksender.app/"+e,"_blank")},showExamples:function(){this.isERC721?this.code=this.exampleCodeERC721:this.isERC1155?this.code=this.exampleCodeERC1155:this.code=this.exampleCode,this.parseInsertAddresses(void 0,!0)},switchInputType:function(){0==this.inputType?(this.inputType=1,this.insertWay=1):(this.insertWay=0,this.inputType=0)},onCmCursorActivity:function(e){},onCmReady:function(e){this.parseInsertAddresses(e,!0)},onCmFocus:function(e){document.querySelector(".CodeMirror").classList.add("CodeMirror-focused")},onCmBlur:function(e){document.querySelector(".CodeMirror").classList.remove("CodeMirror-focused"),this.parseInsertAddresses(e,!1)},deleteInvalid:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$refs.codemirror.codemirror,e.addressInfo.invalidAddressesIndexes.forEach((function(e){r.removeLineClass(e,"wrap","wrongLine")})),e.addressProcessing=!0,t.next=5,e.$store.dispatch("checkBulksend/deleteInvalidAddresses",{});case 5:t.sent&&(e.addressProcessing=!1,e.code=e.inputCode,e.parseInsertAddresses(r,!0));case 7:case"end":return t.stop()}}),t)})))()},keepDuplicated:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.ingoreDuplicatedError=!0,r=e.$refs.codemirror.codemirror,e.addressInfo.duplicatedAddressesIndexes.forEach((function(e){r.removeLineClass(e,"wrap","duplicatedLine")})),(n=e).addressProcessing=!0,t.next=7,e.$store.dispatch("checkBulksend/keepDuplicated",{});case 7:t.sent&&(n.addressProcessing=!1,n.code=n.inputCode);case 9:case"end":return t.stop()}}),t)})))()},keepFirstOne:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$refs.codemirror.codemirror,e.addressInfo.duplicatedAddressesIndexes.forEach((function(e){r.removeLineClass(e,"wrap","duplicatedLine")})),(n=e).addressProcessing=!0,t.next=6,e.$store.dispatch("checkBulksend/keepFirstOne",{});case 6:t.sent&&(n.addressProcessing=!1,n.code=n.inputCode);case 8:case"end":return t.stop()}}),t)})))()},combineBalances:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$refs.codemirror.codemirror,e.addressInfo.duplicatedAddressesIndexes.forEach((function(e){r.removeLineClass(e,"wrap","duplicatedLine")})),e.addressProcessing=!0,t.next=5,e.$store.dispatch("checkBulksend/combineBalances",{});case 5:t.sent&&(e.addressProcessing=!1,e.code=e.inputCode);case 7:case"end":return t.stop()}}),t)})))()},parseInsertAddresses:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==e&&(e=r.$refs.codemirror.codemirror),""==r.code||r.preCode==r.code&&!t){n.next=9;break}return r.preCode=r.code,o=r.code,n.next=6,r.$store.dispatch("checkBulksend/parseInsertAddresses",{insertedAddress:o});case 6:return 1==(d=n.sent)&&(r.$refs.codemirror.codemirror,r.hasInvalid?r.addressInfo.invalidAddressesIndexes.forEach((function(t){e.addLineClass(t,"wrap","wrongLine")})):r.addressInfo.duplicatedAddressesIndexes.forEach((function(t){e.addLineClass(t,"wrap","duplicatedLine")}))),n.abrupt("return",d);case 9:case"end":return n.stop()}}),n)})))()}}},C=r(27);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var k={components:{AddressesInput:Object(C.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"blue-container"},[r("b-field",[r("template",{slot:"label"},[r("div",{staticClass:"c-level"},[r("div",{staticClass:"c-level-left"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[e._v(e._s(e.translationWord.airdrop.address))])]),e._v(" "),r("div",{staticClass:"c-level-right"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[r("b-button",{attrs:{type:"is-text"}},[0==e.inputType?r("span",{on:{click:e.switchInputType}},[e._v(e._s(e.translationWord.home.manuallyInsert))]):e._e(),e._v(" "),1==e.inputType?r("span",{on:{click:e.switchInputType}},[e._v(e._s(e.translationWord.home.uploadInsert))]):e._e()])],1)])])]),e._v(" "),1==e.inputType?r("div",{staticClass:"custom-Codemirror-container"},[e.codemirrorComponentLoading?r("div",{staticClass:"no-ssr-placeHolder"},[r("div",{staticClass:"no-ssr-loading"})]):e._e(),e._v(" "),r("no-ssr",[e.codemirrorComponentLoading?e._e():r("codemirror",{ref:"codemirror",attrs:{options:e.cmOption},on:{cursorActivity:e.onCmCursorActivity,ready:e.onCmReady,focus:e.onCmFocus,blur:e.onCmBlur},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1):e._e(),e._v(" "),0==e.inputType?r("div",{staticClass:"custom-upload-container"},[e.uploadComponentLoading?r("div",{staticClass:"no-ssr-placeHolder"},[r("div",{staticClass:"no-ssr-loading"}),e._v(" "),e.uploadingAddress?r("div",{staticClass:"parseLoading"},[e._v(e._s(e.translationWord.home.parsingTitle))]):e._e()]):e._e(),e._v(" "),r("no-ssr",[e.uploadComponentLoading?e._e():r("b-field",[r("b-upload",{attrs:{accept:".txt, .csv, .xls, .xlsx, .xlsb, .xlsm, .ods, .xml, .fods, .uos, .sylk, .dif, .dbf, .prn, .qpw, .123, wb*, wq*",type:"is-info",multiple:"","drag-drop":"",expanded:""},model:{value:e.dropFiles,callback:function(t){e.dropFiles=t},expression:"dropFiles"}},[r("section",{staticClass:"section"},[r("div",{staticClass:"content has-text-centered"},[r("p",[r("b-icon",{attrs:{type:"is-info",icon:"upload",size:"is-medium"}})],1),e._v(" "),r("strong",{staticStyle:{color:"#00174B"}},[e._v(e._s(e.translationWord.home.addressesUploadDesc)),r("strong",[e._v(e._s(e.translationWord.home.addressesUploadDescClickUpload))])])])])])],1)],1)],1):e._e()],2),e._v(" "),r("b-field",[[0==e.inputType?r("div",{staticClass:"c-level"},[r("div",{staticClass:"c-level-left"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[e._v("\n            "+e._s(e.translationWord.home.addressesUploadFooterDesc)+"  CSV / Excel / Txt\n          ")])]),e._v(" "),r("div",{staticClass:"c-level-right"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[r("b-dropdown",{attrs:{"aria-role":"list",position:"is-bottom-left",hoverable:""}},[r("button",{staticClass:"button is-text",attrs:{slot:"trigger"},slot:"trigger"},[e._v("\n       "+e._s(e.translationWord.home.addressesFileExampleButtonText)+"\n     ")]),e._v(" "),r("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(t){return e.downloadExcel("example.xlsx")}}},[r("div",{staticClass:"media"},[r("div",{staticClass:"media-content"},[r("h3",{staticStyle:{"font-weight":"bold"}},[e._v(e._s(e.erc20Title))]),e._v(" "),r("a",{staticClass:"text-link fix",attrs:{target:"_blank",href:"/example.xlsx"}},[r("b-icon",{attrs:{icon:"file-excel",size:"is-small"}}),e._v(" Excel")],1),e._v(" "),r("span",[e._v("|")]),e._v(" "),r("a",{staticClass:"text-link fix",attrs:{target:"_blank",href:"/example.csv"}},[r("b-icon",{attrs:{icon:"file-delimited",size:"is-small"}}),e._v(" CSV")],1),e._v(" "),r("span",[e._v("|")]),e._v(" "),r("a",{staticClass:"text-link fix",attrs:{target:"_blank",href:"/example.txt"}},[r("b-icon",{attrs:{icon:"note-text",size:"is-small"}}),e._v(" Txt")],1)])])])],1)],1)])]):e._e(),e._v(" "),1==e.inputType?r("div",{staticClass:"c-level"},[r("div",{staticClass:"c-level-left"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[e._v(e._s(e.translationWord.home.addressesInsertFooterDesc))])]),e._v(" "),r("div",{staticClass:"c-level-right"},[r("div",{staticClass:"c-level-item",staticStyle:{height:"25px"}},[r("b-button",{attrs:{type:"is-text"},on:{click:e.showExamples}},[e._v("\n                "+e._s(e.translationWord.home.addressesInsertExampleButtonText)+"\n            ")])],1)])]):e._e()]],2),e._v(" "),e.hasInvalid&&1==e.inputType?r("div",[r("div",{staticClass:"label-container"},[e.isERC721?r("div",{staticClass:"label is-danger-alert"},[e._v(e._s(e.translationWord.error.invalidEthereumAddressesOrTokenIdsTitle))]):r("div",{staticClass:"label is-danger-alert"},[e._v(e._s(e.translationWord.error.badAddressCantBeProcessed))]),e._v(" "),r("div",{staticClass:"invalidAction has-text-danger"},[r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.deleteInvalid()}}},[e._v(e._s(e.translationWord.button.deleteAllInvalidAddresses))])])]),e._v(" "),e.hasInvalid&&1==e.inputType?r("article",{staticClass:"notification is-danger"},[r("ul",e._l(e.invalidAddresses,(function(t){return r("li",[0==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+" "+e._s(e.translationWord.error.invalidEthereumAddress))]):e._e(),e._v(" "),1==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAmount))]):e._e(),e._v(" "),2==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmount))]):e._e(),e._v(" "),3==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+" "+e._s(e.translationWord.error.cantSupportsContracts))]):e._e(),e._v(" "),4==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAmountDecimals))]):e._e(),e._v(" "),5==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.translationWord.error.invalidEthereumAmounOwnership)+' "'+e._s(t.tokenId)+'"')]):e._e(),e._v(" "),6==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.translationWord.error.duplicatedEthereumAmount)+' "'+e._s(t.tokenId)+'"')]):e._e(),e._v(" "),7==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+'："'+e._s(t.amount)+'" '+e._s(e.translationWord.error.invalidAmountShouldBeNumber))]):e._e(),e._v(" "),8==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+'："'+e._s(t.tokenId)+'" '+e._s(e.translationWord.error.invalidTokenIdShouldBeNumber))]):e._e(),e._v(" "),9==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.tokenId)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidTokenIdAndAmountShouldBeNumber))]):e._e(),e._v(" "),10==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmount))]):e._e(),e._v(" "),11==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.address)+", "+e._s(t.tokenId)+" "+e._s(e.translationWord.error.invalidEthereumAddressAndTokenId)+" ")]):e._e(),e._v(" "),12==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(t.tokenId)+", "+e._s(t.amount)+" "+e._s(e.translationWord.error.insufficientTokenIDBalance))]):e._e(),e._v(" "),13==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.addressesCannotBeProcessed))]):e._e(),e._v(" "),100==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.invalidEthereumAddressAndAmountAndTokenId))]):e._e(),e._v(" "),101==t.errorType?r("p",[e._v(e._s(e.translationWord.error.lineOrder)+e._s(t.index+1)+e._s(e.translationWord.error.line)+"："+e._s(e.addressInfo.originalAddressStr[t.index])+" "+e._s(e.translationWord.error.invalidAmountShouldNotBeEmpty))]):e._e()])})),0)]):e._e()]):e._e(),e._v(" "),!e.hasInvalid&&e.hasDuplicated&&1==e.inputType?r("div",[r("div",{staticClass:"label-container"},[r("div",{staticClass:"label is-danger-alert"},[e._v(e._s(e.translationWord.error.duplicatedEthereumAddressesTitle))]),e._v(" "),e.isERC721?r("div",{staticClass:"action has-text-danger"},[r("span",[r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.keepDuplicated()}}},[e._v(e._s(e.translationWord.button.keepDuplicated))])])]):r("div",{staticClass:"action has-text-danger"},[r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.keepFirstOne()}}},[e._v(e._s(e.translationWord.button.keepFirstOne))]),e._v("  |  "),r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.combineBalances()}}},[e._v(e._s(e.translationWord.button.combineBalances))]),e._v(" "),r("span",[e._v("  |  "),r("a",{staticClass:"has-text-danger",on:{click:function(t){return e.keepDuplicated()}}},[e._v(e._s(e.translationWord.button.ingoreDuplicated))])])])]),e._v(" "),r("article",{staticClass:"notification is-danger"},[r("ul",e._l(e.duplicatedIndexes,(function(t){return r("li",[e._v("\n              "+e._s(e.translationWord.error.lineOrder)+e._s(t+1)+e._s(e.translationWord.error.line)+"："+e._s(e.translationWord.error.duplicatedEthereumAddresses)+" "+e._s(e.addressInfo.originalData[t].address)+"\n            ")])})),0)])]):e._e(),e._v(" "),!e.hasInvalid&&!e.hasDuplicated&&e.errorType>=0?r("div",[r("article",{staticClass:"notification is-danger"},[0==e.errorType?r("p",[e._v(e._s(e.translationWord.error.tokenSelectedNull))]):e._e(),e._v(" "),1==e.errorType?r("p",[e._v(e._s(e.translationWord.error.addressNull))]):e._e(),e._v(" "),2==e.errorType?r("p",[e._v(e._s(e.translationWord.error.prepareDataError))]):e._e(),e._v(" "),3==e.errorType?r("p",[e._v(e._s(e.translationWord.error.checkOwnersDataError))]):e._e(),e._v(" "),4==e.errorType?r("p",[e._v(e._s(e.translationWord.error.checkSelfBalanceDataError))]):e._e(),e._v(" "),5==e.errorType?r("p",[e._v(e._s(e.translationWord.error.checkBadAddressDataError))]):e._e(),e._v(" "),6==e.errorType?r("p",[e._v(e._s(e.translationWord.error.prepareTransactionsError))]):e._e()])]):e._e(),e._v(" "),r("p",{staticClass:"padding-mini"}),e._v(" "),e.showPrepareStep?r("article",{staticClass:"notification is-info"},[0==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep0)),r("span",{staticClass:"tx-loading"})]):e._e(),e._v(" "),1==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep1)),r("span",{staticClass:"tx-loading"})]):e._e(),e._v(" "),2==e.prepareStep||4==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep2)),r("span",{staticClass:"tx-loading"})]):e._e(),e._v(" "),3==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep3)),r("span",{staticClass:"tx-loading"})]):e._e(),e._v(" "),5==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep5_1)+"\n                "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n                "+e._s(e.translationWord.info.addressConfirming)+" "+e._s(e.translationWord.info.from)+" "+e._s(e.checkingAddressFrom+1)+" "+e._s(e.translationWord.info.to)+" "+e._s(e.checkingAddressTo)+"\n                ")])]):e._e(),e._v(" "),6==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep5)+"\n                "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n                "+e._s(e.translationWord.info.addressSorting)+" "+e._s(e.translationWord.info.from)+" "+e._s(e.checkingAddressFrom+1)+" "+e._s(e.translationWord.info.to)+" "+e._s(e.checkingAddressTo)+"\n                ")])]):e._e(),e._v(" "),7==e.prepareStep?r("span",[e._v(e._s(e.translationWord.info.prepareStep5)+"\n                "),r("span",{staticClass:"tx-loading"}),e._v(" "),r("p",[e._v("\n                "+e._s(e.translationWord.info.addressContructing)+" "+e._s(e.contructTxIndex)+" / "+e._s(e.txsTimes)+"\n                ")])]):e._e()]):e._e()],1)}),[],!1,null,null,null).exports},name:"AirdropChecker",computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("common",["translationWord"]),{},Object(l.c)("common",["language","isMobile"])),props:{airdrop:{type:Object,default:function(){}}},data:function(){return{}},watch:{},methods:{}},y=Object(C.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"c-level"},[e._m(0),e._v(" "),r("div",{staticClass:"c-level-right"},[r("div",{staticClass:"c-level-item"},[r("a",{attrs:{href:e.airdrop.link}},[e._v("Learn More "),r("b-icon",{attrs:{icon:"arrow-top-right",size:"is-small"}})],1)])])]),e._v(" "),r("div",{staticClass:"c-level"},["OP"==e.airdrop.id?r("div",{staticClass:"c-level-left"},[e._m(1)]):e._e(),e._v(" "),"Evmos"==e.airdrop.id?r("div",{staticClass:"c-level-left"},[e._m(2)]):e._e(),e._v(" "),"HOP"==e.airdrop.id?r("div",{staticClass:"c-level-left"},[e._m(3)]):e._e()]),e._v(" "),r("br"),e._v(" "),r("AddressesInput"),e._v(" "),r("br"),e._v(" "),r("b-button",{attrs:{type:"is-info"}},[r("span",{staticClass:"is-size-6"},[e._v(" "+e._s(e.translationWord.button.query))])])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-level-left"},[t("div",{staticClass:"c-level-item title is-6"},[this._v("ELIGIBILITY CRITERIA")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticStyle:{"list-style-type":"disc","margin-left":"20px"}},[r("li",[e._v("Optimism User")]),e._v(" "),r("li",[e._v("Repeat Optimism user")]),e._v(" "),r("li",[e._v("DAO Voter")]),e._v(" "),r("li",[e._v("Multi-sig signers")]),e._v(" "),r("li",[e._v("Donated to Gitcoin Grants on L1")]),e._v(" "),r("li",[e._v("Priced out of Ethereum")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticStyle:{"list-style-type":"disc","margin-left":"20px"}},[t("li",[this._v("Evmos User")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticStyle:{"list-style-type":"disc","margin-left":"20px"}},[t("li",[this._v("Hop User")])])}],!1,null,null,null).exports;function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var W={name:"Airdrops",components:{HeroBar:v.a,CardComponent:_.a,TitleBar:c.a,AirdropChecker:y},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(l.b)("common",["translationWord"]),{},Object(l.b)("metamask",["currency"]),{},Object(l.b)("dashboard",["airdrops"]),{},Object(l.c)("bulksender",["txUrl"]),{},Object(l.c)("common",["isMobile"]),{},Object(l.c)("tokenCreator",["createdTx","createdTxStatus"]),{titleStack:function(){return["Admin","Dashboard"]},airdrop:function(){var e=this;console.info(this.airdrops);var t={};return this.airdrops.forEach((function(r,i){r.id.toLowerCase()==e.project.toLowerCase()&&(t=r)})),t},bgStyle:function(){return"op"==this.project?"bg-op":"evmos"==this.project?"bg-evmos":"hop"==this.project?"bg-hop":""},onCreating:function(){return 0==this.createdTxStatus}}),mounted:function(){this.$route.params.project&&(this.project=this.$route.params.project)},data:function(){return{isLoading:!1,type:1,addressErrorType:"",project:""}},methods:{submit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.validateAddress()||0==e.type){t.next=4;break}return e.addressMessage="请输入正确的钱包地址",t.abrupt("return");case 4:return data=e.simpleForm,1==e.type&&(data=e.memeForm),2==e.type&&(data=e.memeLPForm),t.prev=7,t.next=10,e.$store.dispatch("tokenCreator/createMemeToken",{tokenInfo:data,type:e.type});case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(7),console.info(t.t0);case 15:case"end":return t.stop()}}),t,null,[[7,12]])})))()},validateAddress:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var address,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return address="0x8c1b557e3c7a5b7b7632f874c7fc745f62c8d1e8",1==e.type&&(address=e.memeForm.feeAddress),2==e.type&&(address=e.memeLPForm.feeAddress),t.next=5,e.$store.dispatch("common/checkAddressIsValid",{address:address});case 5:return r=t.sent,console.info("isValid",r),r?(e.addressMessage="用于接收营销费用",e.addressErrorType=""):(e.addressMessage="请输入正确的钱包地址",e.addressErrorType="is-danger"),t.abrupt("return",r);case 9:case"end":return t.stop()}}),t)})))()},reset:function(){this.form=mapValues(this.form,(function(e){return e&&"object"===Object(n.a)(e)?[]:null})),this.$buefy.snackbar.open({message:"Reset successfully",queue:!1})}},watch:{createdTxStatus:function(e){1==e&&this.$buefy.snackbar.open({message:"创建成功",queue:!1,position:"is-top-right"})}},head:function(){return{title:"Chain Tools — Airdrop Eligibility Query"}}},I=Object(C.a)(W,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.bgStyle},[r("section",{staticClass:"section is-main-section is-not-full-width"},[r("div",{staticClass:"is-main-content"},[r("p",{staticClass:"title is-5 has-text-centered"},[e._v("\n        "+e._s(e.airdrop.id)+" "+e._s(e.translationWord.airdrop.title)+"\n      ")]),e._v(" "),r("CardComponent",[r("AirdropChecker",{attrs:{airdrop:e.airdrop}})],1)],1)])])}),[],!1,null,null,null);t.default=I.exports}}]);