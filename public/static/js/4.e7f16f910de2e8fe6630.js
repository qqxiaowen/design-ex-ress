webpackJsonp([4],{MWcq:function(t,n){},"Z+3w":function(t,n){},zicF:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=s("Au9i"),o={data:function(){return{}},methods:{handleLoginOut:function(){var t=this;Object(i.MessageBox)({showCancelButton:!0,cancelButtonClass:"ensure",confirmButtonClass:"cancel",title:"警告",message:"确定退出登录？"}).then(function(n){"confirm"==n&&t.$axios.get("/user/logout").then(function(n){t.$store.commit("CHANGEINFO",""),setTimeout(function(){t.$router.push("/login")},500)})})}}},e={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"myCenter"},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"item firstItem",attrs:{to:"/layout/info"}},[n("i",{staticClass:"iconfont icon-jiantou"}),this._v("\n            个人信息\n        ")]),this._v(" "),n("router-link",{staticClass:"item",attrs:{to:"/layout/password"}},[n("i",{staticClass:"iconfont icon-jiantou"}),this._v("\n            修改密码\n        ")])],1),this._v(" "),n("div",{staticClass:"loginOutBox"},[n("mt-button",{staticClass:"buttonInputStyle",attrs:{type:"primary"},on:{click:this.handleLoginOut}},[this._v("退出登录")])],1)])},staticRenderFns:[]};var a=s("VU/8")(o,e,!1,function(t){s("Z+3w"),s("MWcq")},"data-v-3954427f",null);n.default=a.exports}});
//# sourceMappingURL=4.e7f16f910de2e8fe6630.js.map