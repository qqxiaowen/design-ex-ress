webpackJsonp([0],{"1oXs":function(t,a){},YAzi:function(t,a,i){"use strict";var e=i("mtWM"),s=i.n(e),n={props:{value:String},data:function(){return{imageUrl:this.value,imgtoken:{token:""}}},methods:{handleSuccess:function(t){this.imageUrl=t.url,this.$emit("input",this.imageUrl)},getToken:function(){var t=this;s.a.get("http://upload.mawenli.xyz").then(function(a){t.imgtoken.token=a.data.data})}},created:function(){this.getToken()},watch:{value:function(t){this.imageUrl=t}}},o={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"uploadimg"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,data:this.imgtoken,"on-success":this.handleSuccess}},[this.imageUrl?a("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)},staticRenderFns:[]};var c=i("VU/8")(n,o,!1,function(t){i("1oXs")},"data-v-22a6ef99",null);a.a=c.exports}});
//# sourceMappingURL=0.ed3a40062981d17e629e.js.map