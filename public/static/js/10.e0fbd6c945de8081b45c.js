webpackJsonp([10],{JHGI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("dV/5");var s={data:function(){return{classInfo:{},nullTable:!1}},methods:{getClassDetail:function(t){var e=this;this.$axios.get("/user/student/grade/"+t,{pn:1,size:99}).then(function(t){console.log("res: ",t),t.data[0]?e.classInfo=t.data:e.nullTable=!0})}},mounted:function(){var t=this.$route.params.id;this.getClassDetail(t)}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"classDetail"},[a("table",{staticClass:"tableStyle"},[t._m(0),t._v(" "),a("tbody",t._l(t.classInfo,function(e){return a("tr",{key:e._id},[a("td",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}]})]),t._v(" "),a("td",[t._v(t._s(e.numId))]),t._v(" "),a("td",[t._v(t._s(e.username))]),t._v(" "),a("td",[t._v(t._s(e.grade.gradeName))])])}),0)]),t._v(" "),t.nullTable?a("div",{staticClass:"null-table"},[t._v("该班级下还没有添加学生")]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("头像")]),this._v(" "),e("th",[this._v("学号")]),this._v(" "),e("th",[this._v("姓名")]),this._v(" "),e("th",[this._v("班级")])])])}]};var i=a("VU/8")(s,n,!1,function(t){a("f+KL")},"data-v-0c63d0f9",null);e.default=i.exports},"f+KL":function(t,e){}});
//# sourceMappingURL=10.e0fbd6c945de8081b45c.js.map