webpackJsonp([1],{"/Hv2":function(t,a){},FZ0w:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},n,!1,function(t){e("fhWp")},null,null).exports,r=e("/ocq"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"})},staticRenderFns:[]};var o=e("VU/8")({data:function(){return{}}},c,!1,function(t){e("zMjz")},"data-v-629a7a79",null).exports,l=e("Xxa5"),d=e.n(l),u=e("exGp"),p=e.n(u),v=e("mtWM"),f=e.n(v),m={data:function(){return{account:"",password:""}},mounted:function(){var t=this;return p()(d.a.mark(function a(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},a,t)}))()},methods:{loginSubmit:function(){var t=this;return p()(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t.account,t.password),a.next=3,f.a.post("/adminLogin",{account:t.account,password:t.password});case 3:"success"===a.sent.data?(t.$message({message:"登录成功",type:"success"}),localStorage.setItem("adminId",t.account),t.$router.replace("/admin/links")):t.$message.error("登录失败，密码错误");case 5:case"end":return a.stop()}},a,t)}))()}}},h={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"loginContent"},[t._m(0),t._v(" "),e("div",{staticClass:"inputContent"},[e("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),t._v(" "),e("div",{staticClass:"inputContent"},[e("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"submitBtn",on:{click:t.loginSubmit}},[t._v("\n      提交\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"title"},[a("span",{staticClass:"myLogo"},[this._v("xp")]),this._v("管理后台")])}]};var _=e("VU/8")(m,h,!1,function(t){e("NJwQ")},"data-v-59483f41",null).exports,C={data:function(){return{linksTableData:[]}},mounted:function(){var t=this;return p()(d.a.mark(function a(){var e;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.getItem("adminId")||t.$router.replace("/admin/adminLogin"),a.next=3,f.a.get("/getTableDataRes");case 3:e=a.sent,t.linksTableData=e.data;case 5:case"end":return a.stop()}},a,t)}))()},methods:{addStaff:function(){this.$router.replace({path:"/admin/addStaff"})},handleDelete:function(t,a){var e=this;this.$confirm("此操作将永久删除该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(p()(d.a.mark(function t(){var s;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("/deleteStaff",a);case 2:s=t.sent,e.linksTableData=s.data,e.$message({type:"success",message:"删除成功!"});case 5:case"end":return t.stop()}},t,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})})},handleEdit:function(t,a){var e=a.id;this.$router.replace({path:"/admin/editStaff?id="+e})}}},g={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"navContent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"nav"},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"}},[e("el-menu-item",{attrs:{index:"1"}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("链接管理")])])],1)],1)]),t._v(" "),e("div",{staticClass:"tableContent"},[t._m(3),t._v(" "),e("div",{staticClass:"tableBox"},[e("el-button",{staticClass:"addStaffBtn",attrs:{type:"primary"},on:{click:t.addStaff}},[e("i",{staticClass:"el-icon-plus"}),e("span",[t._v("添加链接")])]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.linksTableData,stripe:"",id:"out-table"}},[e("el-table-column",{attrs:{prop:"id",label:"id",width:"50"}}),t._v(" "),e("el-table-column",{attrs:{prop:"staffId",label:"员工名",width:"150"}}),t._v(" "),e("el-table-column",{attrs:{prop:"fontUrl",label:"前台链接",width:"250"}}),t._v(" "),e("el-table-column",{attrs:{prop:"backUrl",label:"后台链接",width:"300"}}),t._v(" "),e("el-table-column",{attrs:{prop:"QRcodeUrl",label:"二维码链接",width:"480"}}),t._v(" "),e("el-table-column",{attrs:{prop:"count",label:"投放数",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"btnContent"},[e("div",{staticClass:"deleteBtn",on:{click:function(e){t.handleEdit(a.$index,a.row)}}},[e("i",{staticClass:"el-icon-delete"}),e("span",{staticClass:"text-margin"},[t._v("修改")])]),t._v(" "),e("div",{staticClass:"deleteBtn",on:{click:function(e){t.handleDelete(a.$index,a.row)}}},[e("i",{staticClass:"el-icon-delete"}),e("span",{staticClass:"text-margin"},[t._v("删除")])])])]}}])})],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header-logo"},[a("span",{staticClass:"myLogo"},[this._v("xp")]),this._v("\n      后台管理系统\n    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"user-panel"},[a("div",{staticClass:"user-panel-headImg"},[a("img",{staticClass:"headImg",attrs:{src:e("wKXj"),alt:"404"}})]),this._v(" "),a("div",[a("i",{staticClass:"el-icon-circle-check-outline"}),a("span",{staticClass:"user-panel-text"},[this._v("超级管理员")])]),this._v(" "),a("div",{staticClass:"user-panel-edit-admin"},[a("i",{staticClass:"el-icon-edit"}),a("span",{staticClass:"user-panel-text user-panel-text-color"},[this._v("管理员管理入口")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-nav-heading"},[a("span",{staticClass:"nav-heading-text"},[this._v("Controller ")]),this._v(" "),a("span",[this._v("管理控制中心")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"system-head"},[a("span",{staticClass:"system-head-text"},[this._v("欢迎你, 超级管理员")])])}]};var w=e("VU/8")(C,g,!1,function(t){e("QX0e")},"data-v-12951ec0",null).exports,x={data:function(){return{staffId:"",password:""}},methods:{backtoLinks:function(){var t=this;return p()(d.a.mark(function a(){var e,s;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=localStorage.getItem("adminId"),a.next=3,f.a.post("/addStaff",{staffId:t.staffId,password:t.password,adminId:e});case 3:s=a.sent,console.log(s),"success"===s.data?(t.$message({message:"添加成功",type:"success"}),t.$router.replace({path:"/admin/links"})):t.$message.error("添加失败，员工名已存在");case 6:case"end":return a.stop()}},a,t)}))()},gotoLinks:function(){this.$router.replace({path:"/admin/links"})}},mounted:function(){localStorage.getItem("adminId")||this.$router.replace("/admin/adminLogin")}},b={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"navContent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"nav"},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"}},[e("el-menu-item",{attrs:{index:"1"},on:{click:t.gotoLinks}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("链接管理")])])],1)],1)]),t._v(" "),e("div",{staticClass:"tableContent"},[t._m(3),t._v(" "),e("div",{staticClass:"tableBox"},[e("div",{staticClass:"addStaffContent"},[e("div",{staticClass:"inputContent"},[e("span",{staticClass:"staffNameText"},[t._v("用户名：")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:t.staffId,callback:function(a){t.staffId=a},expression:"staffId"}})],1),t._v(" "),e("div",{staticClass:"inputContent"},[e("span",{staticClass:"staffNameText"},[t._v("密码：")]),t._v(" "),e("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"submitBtn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.backtoLinks}},[t._v("创建")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header-logo"},[a("span",{staticClass:"myLogo"},[this._v("xp")]),this._v("后台管理系统\n    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"user-panel"},[a("div",{staticClass:"user-panel-headImg"},[a("img",{staticClass:"headImg",attrs:{src:e("wKXj"),alt:"404"}})]),this._v(" "),a("div",[a("i",{staticClass:"el-icon-circle-check-outline"}),a("span",{staticClass:"user-panel-text"},[this._v("超级管理员")])]),this._v(" "),a("div",{staticClass:"user-panel-edit-admin"},[a("i",{staticClass:"el-icon-edit"}),a("span",{staticClass:"user-panel-text user-panel-text-color"},[this._v("管理员管理入口")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-nav-heading"},[a("span",{staticClass:"nav-heading-text"},[this._v("Controller ")]),this._v(" "),a("span",[this._v("管理控制中心")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"system-head"},[a("span",{staticClass:"system-head-text"},[this._v("欢迎你, 超级管理员")])])}]};var k=e("VU/8")(x,b,!1,function(t){e("YYbR")},"data-v-40db5239",null).exports,$={data:function(){return{password:"",id:""}},methods:{updateStaff:function(){var t=this;return p()(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.post("/updateStaff",{password:t.password,id:t.id});case 2:"success"===a.sent.data?(t.$message({type:"success",message:"修改成功!"}),t.$router.replace({path:"/admin/links"})):t.$message.error("修改失败");case 4:case"end":return a.stop()}},a,t)}))()},gotoLinks:function(){this.$router.replace({path:"/admin/links"})}},mounted:function(){var t=this;return p()(d.a.mark(function a(){var e;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.getItem("adminId")||t.$router.replace("/admin/adminLogin"),t.id=t.$route.query.id,a.next=4,f.a.post("/getEditStaff",{id:t.id});case 4:e=a.sent,t.password=e.data.password;case 6:case"end":return a.stop()}},a,t)}))()}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"navContent"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"nav"},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1"}},[e("el-menu-item",{attrs:{index:"1"},on:{click:t.gotoLinks}},[e("i",{staticClass:"el-icon-edit-outline"}),t._v(" "),e("span",{attrs:{slot:"title"},slot:"title"},[t._v("链接管理")])])],1)],1)]),t._v(" "),e("div",{staticClass:"tableContent"},[t._m(3),t._v(" "),e("div",{staticClass:"tableBox"},[e("div",{staticClass:"addStaffContent"},[e("div",{staticClass:"inputContent"},[e("span",{staticClass:"staffNameText"},[t._v("密码：")]),t._v(" "),e("el-input",{attrs:{placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"submitBtn"},[e("el-button",{attrs:{type:"primary"},on:{click:t.updateStaff}},[t._v("修改")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"header-logo"},[a("span",{staticClass:"myLogo"},[this._v("xp")]),this._v("后台管理系统\n    ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"user-panel"},[a("div",{staticClass:"user-panel-headImg"},[a("img",{staticClass:"headImg",attrs:{src:e("wKXj"),alt:"404"}})]),this._v(" "),a("div",[a("i",{staticClass:"el-icon-circle-check-outline"}),a("span",{staticClass:"user-panel-text"},[this._v("超级管理员")])]),this._v(" "),a("div",{staticClass:"user-panel-edit-admin"},[a("i",{staticClass:"el-icon-edit"}),a("span",{staticClass:"user-panel-text user-panel-text-color"},[this._v("管理员管理入口")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sidebar-nav-heading"},[a("span",{staticClass:"nav-heading-text"},[this._v("Controller ")]),this._v(" "),a("span",[this._v("管理控制中心")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"system-head"},[a("span",{staticClass:"system-head-text"},[this._v("欢迎你, 超级管理员")])])}]};var S=e("VU/8")($,y,!1,function(t){e("w/qZ")},"data-v-b2100310",null).exports,I={data:function(){return{account:"",password:"",id:""}},mounted:function(){var t=this;return p()(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:t.id=t.$route.query.id;case 1:case"end":return a.stop()}},a,t)}))()},methods:{loginSubmit:function(){var t=this;return p()(d.a.mark(function a(){return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t.account,t.password),a.next=3,f.a.post("/staffLogin",{account:t.account,password:t.password,id:t.id});case 3:"success"===a.sent.data?(t.$message({message:"登录成功",type:"success"}),localStorage.setItem("staffId",t.account),t.$router.replace("/back?id="+t.id)):t.$message.error("登录失败，密码错误");case 5:case"end":return a.stop()}},a,t)}))()}}},E={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"loginContent"},[e("div",{staticClass:"title"},[t._v("员工登陆")]),t._v(" "),e("div",{staticClass:"inputContent"},[e("el-input",{attrs:{placeholder:"请输入账号"},model:{value:t.account,callback:function(a){t.account=a},expression:"account"}})],1),t._v(" "),e("div",{staticClass:"inputContent"},[e("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"submitBtn",on:{click:t.loginSubmit}},[t._v("\n      提交\n    ")])])])},staticRenderFns:[]};var U=e("VU/8")(I,E,!1,function(t){e("tDvj")},"data-v-0c5e9fe6",null).exports,L={data:function(){return{id:"",imageUrl:""}},mounted:function(){var t=this;return p()(d.a.mark(function a(){var e;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.id=t.$route.query.id,a.next=3,f.a.post("/getImageUrl",{id:t.id});case 3:return e=a.sent,t.imageUrl=e.data,a.next=7,f.a.post("/updateCount",{id:t.id});case 7:a.sent;case 8:case"end":return a.stop()}},a,t)}))()}},R={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[this._v("长按或扫描二维码")]),this._v(" "),a("div",{staticClass:"text"},[this._v("参加客服微信进入免费领取通道")]),this._v(" "),a("img",{staticClass:"imgContent",attrs:{src:this.imageUrl,alt:"404"}})])},staticRenderFns:[]};var j=e("VU/8")(L,R,!1,function(t){e("FZ0w")},"data-v-ef2bffaa",null).exports,B={data:function(){return{imageUrl:"",postData:{token:"DhsDWIMUrCTF_R-ff01w9ESN7vvKyLle4hzwYLJf:LtSw3jRB0X_N6WSxyarjuRC8JHM=:eyJzY29wZSI6InFyY29kZXMiLCJkZWFkbGluZSI6MTUzNDQyNzg0MH0="},bucketHost:"",id:""}},mounted:function(){var t=this;return p()(d.a.mark(function a(){var e;return d.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.id=t.$route.query.id,a.next=3,f.a.get("/getUpToken");case 3:e=a.sent,t.postData.token=e.data;case 5:case"end":return a.stop()}},a,t)}))()},methods:{handleAvatarSuccess:function(t,a){var e=this;return p()(d.a.mark(function s(){var n;return d.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e.bucketHost="http://pdjslih4r.bkt.clouddn.com/"+t.key,e.imageUrl=URL.createObjectURL(a.raw),s.next=4,f.a.post("/changeImageUrl",{id:e.id,bucketHost:e.bucketHost});case 4:n=s.sent,console.log(n.data),"ok"===n.data?e.$message({message:"恭喜你，上传成功",type:"success"}):e.$message.error("上传失败");case 7:case"end":return s.stop()}},s,e)}))()},beforeAvatarUpload:function(t){var a="image/jpeg"===t.type||"image/jpg"===t.type||"image/png"===t.type,e=t.size/1024/1024<5;return a||this.$message.error("上传头像图片只能是 JPG/PEG/PNG 格式!"),e||this.$message.error("上传头像图片大小不能超过 5MB!"),a&&e}}},D={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[this._v("点击上传二维码")]),this._v(" "),a("div",{staticClass:"uploadContent"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://upload-z1.qiniup.com","show-file-list":!1,"on-success":this.handleAvatarSuccess,"before-upload":this.beforeAvatarUpload,data:this.postData}},[this.imageUrl?a("img",{staticClass:"avatar",attrs:{src:this.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)])},staticRenderFns:[]};var F=e("VU/8")(B,D,!1,function(t){e("iSGo")},"data-v-68c2770c",null).exports;s.default.use(r.a);var T=new r.a({routes:[{path:"/",name:"HelloWorld",component:o},{path:"/admin/adminLogin",name:"AdminLogin",component:_},{path:"/admin/links",name:"Links",component:w},{path:"/admin/addStaff",name:"AddStaff",component:k},{path:"/admin/editStaff",name:"EditStaff",component:S},{path:"/staffLogin",name:"StaffLogin",component:U},{path:"/font",name:"Font",component:j},{path:"/back",name:"Back",component:F}]}),N=e("t+b9"),H=e.n(N);e("/Hv2");s.default.config.productionTip=!1,s.default.use(H.a),new s.default({el:"#app",router:T,components:{App:i},template:"<App/>"})},NJwQ:function(t,a){},QX0e:function(t,a){},YYbR:function(t,a){},fhWp:function(t,a){},iSGo:function(t,a){},tDvj:function(t,a){},"w/qZ":function(t,a){},wKXj:function(t,a,e){t.exports=e.p+"static/img/headImg.d9c8af9.jpg"},zMjz:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.c8d6ea60f179a4b92772.js.map