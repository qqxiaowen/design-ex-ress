webpackJsonp([3],{"1kLg":function(t,a,o){t.exports=o.p+"static/img/hhlogo.65e746f.png"},GOyn:function(t,a){},Quw4:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o("Au9i"),s={data:function(){return{formData:{numId:"",password:""}}},methods:{handleLogin:function(){var t=this;console.log("这是表单里的数据:",this.formData),this.formData.numId&&this.formData.password?this.$axios.post("/user/login",this.formData).then(function(a){if(0==a.code){Object(e.Toast)("登录成功");var o=a.data;t.$store.commit("CHANGEINFO",o),setTimeout(function(){t.$router.push("layout/home")},500)}else Object(e.Toast)(a.msg)}):Object(e.Toast)("请输入用户名或密码")}}},n={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("div",{staticClass:"login"},[t._m(0),t._v(" "),o("h1",[t._v("黄淮学院考勤系统")]),t._v(" "),o("div",{staticClass:"from"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.numId,expression:"formData.numId"}],staticClass:"buttonInputStyle",attrs:{placeholder:"请输入用户名"},domProps:{value:t.formData.numId},on:{input:function(a){a.target.composing||t.$set(t.formData,"numId",a.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.password,expression:"formData.password"}],staticClass:"buttonInputStyle",attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:t.formData.password},on:{input:function(a){a.target.composing||t.$set(t.formData,"password",a.target.value)}}})]),t._v(" "),o("div",{staticClass:"operation"},[o("mt-button",{staticClass:"buttonInputStyle",attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("登录")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"logoBox"},[a("img",{attrs:{src:o("1kLg"),alt:"logo"}})])}]};var r=o("VU/8")(s,n,!1,function(t){o("GOyn")},"data-v-64651dd0",null);a.default=r.exports}});
//# sourceMappingURL=3.ca45d5e673f4b37d8668.js.map