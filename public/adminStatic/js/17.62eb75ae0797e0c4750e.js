webpackJsonp([17],{"RV/O":function(t,e){},pCOu:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={components:{Uploadimg:a("YAzi").a},data:function(){return{formData:{username:"",password:"",numId:"",avatar:"",desc:"",faculty:"",superAdmin:"",superAdminBoole:!1,sex:null},facultyCatalog:[]}},methods:{handleSubmit:function(){var t=this;this.formData.numId&&this.formData.username&&this.formData.password&&this.formData.faculty?(this.formData.superAdminBoole?this.formData.superAdmin=1:this.formData.superAdmin=0,this.$axios.post("/user/teacher",this.formData).then(function(e){0==e.code?(t.$message.success(e.msg),setTimeout(function(){t.$router.push("/layout/teacherList")},500)):t.$message.info(e.msg)})):this.$message("请输入必填字段")},getdata:function(){var t=this,e=this.$route.params.id;this.$axios.get("/user/teacher/"+e).then(function(e){var a=e.data;a.faculty=e.data.faculty._id,a.superAdminBoole=0!=a.superAdmin,t.formData=a})},handlerevise:function(){var t=this,e=this.$route.params.id;this.$axios.put("/user/teacher/"+e,this.formData).then(function(e){0==e.code&&setTimeout(function(){t.$message.success(e.msg),t.$router.push("/layout/teacherList")},500)})},handleFaculty:function(){var t=this;this.$axios.get("/faculty").then(function(e){0==e.code&&(t.facultyCatalog=e.data)})}},created:function(){this.handleFaculty()},computed:{isrevise:function(){return"修改教师"==this.$route.meta.title?(this.getdata(),!0):(this.formData={},!1)}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-breadcrumb",{staticClass:"mb30",attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/layout/home"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",{attrs:{to:{path:"/layout/teacherList"}}},[t._v("教师用户列表页")]),t._v(" "),t.isrevise?a("el-breadcrumb-item",[t._v("修改教师用户")]):a("el-breadcrumb-item",[t._v("添加教师用户")])],1),t._v(" "),a("el-card",[a("el-form",{ref:"form",staticClass:"table-ys",attrs:{model:t.formData,"label-width":"100px","label-position":"left"}},[a("el-form-item",{attrs:{label:"工号",required:""}},[a("el-input",{attrs:{disabled:t.isrevise},model:{value:t.formData.numId,callback:function(e){t.$set(t.formData,"numId",e)},expression:"formData.numId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户名",required:""}},[a("el-input",{attrs:{disabled:t.isrevise},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),t._v(" "),t.isrevise?t._e():a("el-form-item",{attrs:{label:"密码",required:""}},[a("el-input",{attrs:{type:"password"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"院系",required:""}},[a("el-select",{model:{value:t.formData.faculty,callback:function(e){t.$set(t.formData,"faculty",e)},expression:"formData.faculty"}},t._l(t.facultyCatalog,function(t){return a("el-option",{key:t._id,attrs:{label:t.facultyName,value:t._id}})}))],1),t._v(" "),a("el-form-item",{staticClass:"admin-desc",attrs:{label:"管理员权限"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.formData.superAdminBoole,callback:function(e){t.$set(t.formData,"superAdminBoole",e)},expression:"formData.superAdminBoole"}}),t._v(" "),a("span",[t._v(t._s(this.formData.superAdminBoole?"开":"关"))])],1),t._v(" "),a("el-form-item",{attrs:{label:"性别"}},[a("el-select",{model:{value:t.formData.sex,callback:function(e){t.$set(t.formData,"sex",e)},expression:"formData.sex"}},[a("el-option",{attrs:{label:"男",value:1}}),t._v(" "),a("el-option",{attrs:{label:"女",value:0}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"头像"}},[a("Uploadimg",{model:{value:t.formData.avatar,callback:function(e){t.$set(t.formData,"avatar",e)},expression:"formData.avatar"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"简介"}},[a("el-input",{model:{value:t.formData.desc,callback:function(e){t.$set(t.formData,"desc",e)},expression:"formData.desc"}})],1),t._v(" "),a("el-form-item",[t.isrevise?a("el-button",{attrs:{type:"primary"},on:{click:t.handlerevise}},[t._v("立即修改")]):a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("立即创建")]),t._v(" "),a("el-button",{on:{click:function(e){t.$router.push("/layout/teacherList")}}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(s,r,!1,function(t){a("RV/O")},null,null);e.default=o.exports}});
//# sourceMappingURL=17.62eb75ae0797e0c4750e.js.map