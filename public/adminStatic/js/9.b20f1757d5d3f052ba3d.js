webpackJsonp([9],{Quw4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"login-box",attrs:{"label-width":"80px"}},[e("div",{staticClass:"title"},[t._v("黄淮学院学生课堂考勤台管理系统")]),t._v(" "),e("el-form",[e("el-form-item",[e("el-input",{attrs:{placeholder:"请输入工号"},model:{value:t.formData.numId,callback:function(a){t.$set(t.formData,"numId",a)},expression:"formData.numId"}})],1),t._v(" "),e("el-form-item",[e("el-input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(a){return"button"in a||!t._k(a.keyCode,"enter",13,a.key,"Enter")?t.handleLogin(a):null}},model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}})],1),t._v(" "),e("el-form-item",[e("el-button",{staticClass:"button-ys",attrs:{type:"primary"},on:{click:t.handleLogin}},[t._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var n=e("VU/8")({data:function(){return{formData:{numId:"",password:""}}},methods:{handleLogin:function(){var t=this;this.formData.numId&&this.formData.password?this.$axios.post("/user/login",this.formData).then(function(a){0==a.code?a.data.faculty?(t.$message.success("登录成功"),t.$router.push("/layout")):t.$message.warning("学生用户不能登录后台管理系统"):t.$message.warning(a.msg)}):this.$message.error("请输入工号或者密码")}}},s,!1,function(t){e("X1fV")},"data-v-ab43d7a0",null);a.default=n.exports},X1fV:function(t,a){}});
//# sourceMappingURL=9.b20f1757d5d3f052ba3d.js.map