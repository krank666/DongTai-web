(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f0001c58"],{"13d5":function(e,t,a){"use strict";var n=a("23e7"),r=a("d58f").left,c=a("a640"),i=a("ae40"),o=a("2d00"),s=a("605d"),l=c("reduce"),u=i("reduce",{1:0}),p=!s&&o>79&&o<83;n({target:"Array",proto:!0,forced:!l||!u||p},{reduce:function(e){return r(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"1f54":function(e,t,a){"use strict";a("d50b")},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},b64b:function(e,t,a){var n=a("23e7"),r=a("7b0b"),c=a("df75"),i=a("d039"),o=i((function(){c(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(e){return c(r(e))}})},d50b:function(e,t,a){},d58f:function(e,t,a){var n=a("1c0b"),r=a("7b0b"),c=a("44ad"),i=a("50c4"),o=function(e){return function(t,a,o,s){n(a);var l=r(t),u=c(l),p=i(l.length),f=e?p-1:0,b=e?-1:1;if(o<2)while(1){if(f in u){s=u[f],f+=b;break}if(f+=b,e?f<0:p<=f)throw TypeError("Reduce of empty array with no initial value")}for(;e?f>=0:p>f;f+=b)f in u&&(s=a(s,u[f],f,l));return s}};e.exports={left:o(!1),right:o(!0)}},d9e8:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"container"},[a("div",{staticClass:"select-warp flex-row-space-between"},[a("div",{staticClass:"flex-column-center"},[a("el-button",{staticClass:"projectAdd",attrs:{type:"text"},on:{click:function(t){return e.$router.push("/project/projectEdit")}}},[a("i",{staticClass:"iconfont iconxinzengxiangmu-3"}),e._v(" 新建项目 ")])],1),a("div",{staticClass:"flex-column-center"},[a("el-input",{staticStyle:{width:"462px"},attrs:{placeholder:"请输入项目名称",size:"mini"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newSelectData(t)}},model:{value:e.searchObj.name,callback:function(t){e.$set(e.searchObj,"name",t)},expression:"searchObj.name"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.newSelectData},slot:"suffix"})])],1)]),a("div",{staticClass:"list-warp"},[a("div",{staticClass:"top-line flex-row-space-between",staticStyle:{"margin-left":"8px"}},[e._v(" "+e._s(e.$t("views.projectManage.title"))+" ")]),a("el-table",{staticClass:"projectList-table",staticStyle:{border:"1px"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{width:"200px",prop:"name","show-overflow-tooltip":!0,label:e.$t("views.projectManage.name")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("div",{staticClass:"projectName",on:{click:function(t){return e.$router.push("/project/projectDetail/"+n.id)}}},[e._v(" "+e._s(n.name)+" ")])]}}])}),a("el-table-column",{staticStyle:{"padding-left":"20px"},attrs:{width:"300px",label:e.$t("views.projectManage.vul")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return e._l(n.vul_count,(function(t){return a("span",{key:t.level,staticStyle:{"margin-right":"10px"}},[a("i",{staticClass:"iconfont iconyuandianzhong",staticStyle:{"font-size":"12px"},style:1===t.level?{color:"#DF6060"}:2===t.level?{color:"#F49E0B"}:3===t.level||4===t.level?{color:"#2F90EA"}:""}),e._v(e._s(t.name)+" "+e._s(t.total)+" ")])}))}}])}),a("el-table-column",{attrs:{prop:"agent_count",width:"100px",label:e.$t("views.projectManage.agent")}}),a("el-table-column",{attrs:{prop:"owner",label:e.$t("views.projectManage.owner")}}),a("el-table-column",{attrs:{prop:"latest_time",label:e.$t("views.projectManage.time")}}),a("el-table-column",{attrs:{label:e.$t("views.projectManage.manage"),width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("i",{staticClass:"iconfont iconshezhi-2 pIcon",on:{click:function(t){return e.$router.push("/project/projectEdit/"+n.id)}}}),a("i",{staticClass:"iconfont iconshanchu-6 pIcon",on:{click:function(t){return e.projectDelete(n.id)}}})]}}])})],1),a("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"total, prev, pager, next, jumper",total:e.total,"page-size":e.pageSize,"current-page":e.page},on:{"current-change":e.currentChange}})],1)])},r=[],c=(a("13d5"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("d4ec"),s=a("bee2"),l=a("262e"),u=a("2caf"),p=a("9ab4"),f=a("8c73"),b=a("60a3"),d=a("73ec"),h=function(e){Object(l["a"])(a,e);var t=Object(u["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.page=1,e.pageSize=20,e.total=0,e.tableData=[],e.searchObj={name:""},e}return Object(s["a"])(a,[{key:"created",value:function(){this.getTableData()}},{key:"newSelectData",value:function(){this.page=1,this.getTableData()}},{key:"currentChange",value:function(e){this.page=e,this.getTableData()}},{key:"getTableData",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,n,r,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={page:this.page,pageSize:this.pageSize,name:this.searchObj.name},this.loadingStart(),e.next=4,this.services.project.projectList(t);case 4:if(a=e.sent,n=a.status,r=a.msg,i=a.data,o=a.page,this.loadingDone(),201===n){e.next=13;break}return this.$message.error(r),e.abrupt("return");case 13:this.tableData=i.reduce((function(e,t){return e.push(Object(c["a"])(Object(c["a"])({},t),{},{latest_time:Object(d["b"])(t.latest_time)})),e}),[]),this.total=o.alltotal;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"projectDelete",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.services.project.projectDelete({id:t});case 2:if(a=e.sent,n=a.status,r=a.msg,201===n){e.next=8;break}return this.$message.error(r),e.abrupt("return");case 8:return e.next=10,this.getTableData();case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),a}(f["a"]);h=Object(p["b"])([Object(b["a"])({name:"ProjectManage"})],h);var g=h,v=g,j=(a("1f54"),a("2877")),w=Object(j["a"])(v,n,r,!1,null,"1a120296",null);t["default"]=w.exports},dbb4:function(e,t,a){var n=a("23e7"),r=a("83ab"),c=a("56ef"),i=a("fc6a"),o=a("06cf"),s=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,a,n=i(e),r=o.f,l=c(n),u={},p=0;while(l.length>p)a=r(n,t=l[p++]),void 0!==a&&s(u,t,a);return u}})},e439:function(e,t,a){var n=a("23e7"),r=a("d039"),c=a("fc6a"),i=a("06cf").f,o=a("83ab"),s=r((function(){i(1)})),l=!o||s;n({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(e,t){return i(c(e),t)}})}}]);
//# sourceMappingURL=chunk-f0001c58.34329f46.js.map