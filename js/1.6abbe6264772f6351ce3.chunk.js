webpackJsonp([1],{341:function(t,e,a){"use strict";function s(t){i||a(347)}Object.defineProperty(e,"__esModule",{value:!0});var r=a(344),n=a(348),i=!1,c=a(139),o=s,l=c(r.a,n.a,!1,o,"data-v-a83bd3b0",null);l.options.__file="src/views/index.vue",e.default=l.exports},344:function(t,e,a){"use strict";e.a={data:function(){return{petCardId:null}},methods:{handleSearchClick:function(){var t=this.petCardId;this.$router.push("/search?id="+t)}}}},347:function(t,e){},348:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{attrs:{span:"24"}},[a("h1",[a("img",{attrs:{src:"https://raw.githubusercontent.com/iview/iview/master/assets/logo.png"}})]),t._v(" "),a("h2",[a("p",[t._v("\n                    为你的爱宠创建专属「身份证」\n                    "),a("router-link",{attrs:{to:"/create"}},[a("Button",{attrs:{type:"primary",size:"large",icon:"social-octocat"}},[a("span",[t._v("创建宠物卡")])])],1)],1)])]),t._v(" "),a("Col",{attrs:{span:"12"}},[a("Input",{staticClass:"pet-card-search",attrs:{placeholder:"输入宠物卡 ID 查找宠物身份信息..."},model:{value:t.petCardId,callback:function(e){t.petCardId=e},expression:"petCardId"}},[a("Button",{attrs:{slot:"append",icon:"ios-search"},on:{click:t.handleSearchClick},slot:"append"})],1)],1),t._v(" "),a("Col",{staticClass:"pet-card-help",attrs:{span:"24"}},[a("p",[t._v("「宠物卡」是基于星云3.0公链的宠物身份存证系统，所有的宠物信息都会被存储于星云链上，数据全部真实有效且无法篡改和撤销。")]),t._v(" "),a("p",[t._v("除了可以使用宠物卡为你的爱宠创建独一无二的专属「身份证」外，还可以对其他宠物进行「留言」以及「赞赏」，这些数据同样会被记录在星云链中。")]),t._v(" "),a("p",[t._v("你创建的宠物卡被赞赏后所得到的 NAS 全都可以提取到你的个人钱包（需扣除一定的提取费用，这个比例很小，只有1%）")])])],1)],1)},r=[];s._withStripped=!0;var n={render:s,staticRenderFns:r};e.a=n}});