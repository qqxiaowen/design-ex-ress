webpackJsonp([10],{duqH:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("Au9i"),i={data:function(){return{formData:{},isUpdata:!1,user:"teacher",excelData:[]}},methods:{getData:function(t){var a=this;this.$axios.get("/clock/"+this.$route.params.id).then(function(e){0==e.code&&(a.formData=e.data,a.getExcelData()),t&&(a.isUpdata=!a.isUpdata)})},handleDel:function(){var t=this;Object(s.MessageBox)({showCancelButton:!0,cancelButtonClass:"ensure",confirmButtonClass:"cancel",title:"警告",message:"确定删除该考勤？"}).then(function(a){"confirm"==a&&t.$axios.delete("/clock/"+t.formData._id).then(function(a){0==a.code&&(Object(s.Toast)("删除成功"),setTimeout(function(){t.$router.push("/layout/lookClock")},500))})})},handleUpdata:function(){var t=this;console.log("确认修改"),this.$axios.put("/clock/"+this.formData._id,{content:this.formData.content}).then(function(a){0==a.code&&(Object(s.Toast)("修改成功"),t.getData(!0))})},getExcelData:function(){var t=this,a=[];this.formData.content.forEach(function(e){0==e.status?e.stausText="旷课":1==e.status?e.stausText="请假":e.stausText="出勤",a.push({"学生学号":e.student.numId,"学生姓名":e.student.username,"考勤状态":e.stausText,"考勤时间":t.formData.clockName,"班级":t.formData.grade.gradeName,"课程":t.formData.course.course_name.subjectName})}),this.excelData=a}},mounted:function(){var t=this;this.$store.state.userinfo.faculty?this.getData():this.$store.state.userinfo.grade?(this.user="student",this.getData()):(Object(s.Toast)("请先登录"),setTimeout(function(){t.$router.push("/login")}))}},n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"classDetail"},[t.formData._id?e("div",{staticClass:"title"},[e("div",[t._v(t._s(this.formData.clockName))]),t._v(" "),e("div",[t._v(t._s(this.formData.grade.gradeName))]),t._v(" "),e("div",[t._v(t._s(this.formData.course.course_name.subjectName))])]):t._e(),t._v(" "),e("table",{staticClass:"tableStyle"},[t._m(0),t._v(" "),e("tbody",t._l(t.formData.content,function(a,s){return e("tr",{key:a._id},[e("td",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:a.student.avatar,expression:"item.student.avatar"}]})]),t._v(" "),e("td",[t._v(t._s(a.student.numId))]),t._v(" "),e("td",[t._v(t._s(a.student.username))]),t._v(" "),t.isUpdata?e("td",{staticClass:"td-status"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"item.status"}],attrs:{type:"radio",name:"status"+s},domProps:{value:2,checked:t._q(a.status,2)},on:{change:function(e){t.$set(a,"status",2)}}}),t._v("出勤")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"item.status"}],attrs:{type:"radio",name:"status"+s},domProps:{value:1,checked:t._q(a.status,1)},on:{change:function(e){t.$set(a,"status",1)}}}),t._v("请假")]),t._v(" "),e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:a.status,expression:"item.status"}],attrs:{type:"radio",name:"status"+s},domProps:{value:0,checked:t._q(a.status,0)},on:{change:function(e){t.$set(a,"status",0)}}}),t._v("旷课")])]):e("td",[2==a.status?e("span",{staticStyle:{color:"green","font-size":"0.28rem"}},[t._v("出勤")]):1==a.status?e("span",{staticStyle:{color:"#b4b406","font-size":"0.28rem"}},[t._v("请假")]):e("span",{staticStyle:{color:"red","font-size":"0.28rem"}},[t._v("旷课")])])])}),0)]),t._v(" "),"teacher"==t.user?e("div",{staticClass:"operation"},[e("div",[e("div",{staticClass:"button",on:{click:function(a){t.isUpdata=!0}}},[t._v("修改该表")])]),t._v(" "),t.isUpdata?e("div",[e("div",{staticClass:"button",on:{click:t.handleUpdata}},[t._v("确认修改")]),t._v(" "),e("div",{staticClass:"button",staticStyle:{background:"#fff",color:"#333",border:"1px solid #dcdfe6"},on:{click:function(a){t.getData(!0)}}},[t._v("取消")])]):t._e(),t._v(" "),e("div",[e("div",{staticClass:"button",staticStyle:{background:"#f56c6c"},on:{click:t.handleDel}},[t._v("删除该表")])]),t._v(" "),e("div",[e("download-excel",{staticClass:"button",attrs:{data:t.excelData}},[t._v("\n                导出excel\n            ")])],1)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("头像")]),this._v(" "),a("th",[this._v("学号")]),this._v(" "),a("th",[this._v("姓名")]),this._v(" "),a("th",[this._v("状态")])])])}]};var o=e("VU/8")(i,n,!1,function(t){e("iXUE")},"data-v-2904636b",null);a.default=o.exports},iXUE:function(t,a){}});
//# sourceMappingURL=10.ba2a746139e093826878.js.map