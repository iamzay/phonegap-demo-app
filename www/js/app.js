(function(n){function t(t){for(var o,r,c=t[0],l=t[1],u=t[2],d=0,f=[];d<c.length;d++)r=c[d],i[r]&&f.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var n,t=0;t<a.length;t++){for(var e=a[t],o=!0,c=1;c<e.length;c++){var l=e[c];0!==i[l]&&(o=!1)}o&&(a.splice(t--,1),n=r(r.s=e[0]))}return n}var o={},i={app:0},a=[];function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"010e":function(n,t,e){},"034f":function(n,t,e){"use strict";var o=e("c21b"),i=e.n(o);i.a},"0383":function(n,t,e){"use strict";var o=e("010e"),i=e.n(o);i.a},"070f":function(n,t,e){},"1e0d":function(n,t,e){},"3cab":function(n,t,e){"use strict";var o=e("cc63"),i=e.n(o);i.a},"42b7":function(n,t,e){"use strict";var o=e("070f"),i=e.n(o);i.a},"4d43":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("097d");var o=e("2b0e"),i=e("8c4f"),a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[n.isConnecting?e("loading"):n._e(),e("router-view")],1)},r=[],c=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},l=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loading-mask"},[e("div",{staticClass:"loading-container"})])}],u={name:"loading"},s=u,d=(e("42b7"),e("2877")),f=Object(d["a"])(s,c,l,!1,null,"4aeb6ee6",null);f.options.__file="loading.vue";var v=f.exports,p=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("router-link",{attrs:{to:"/camera"}},[e("h3",[n._v("相机与相册")])]),e("router-link",{attrs:{to:"/dial"}},[e("h3",[n._v("拨打电话")])]),e("router-link",{attrs:{to:"/calllog"}},[e("h3",[n._v("通话记录(android)")])]),e("router-link",{attrs:{to:"/device"}},[e("h3",[n._v("设备信息")])]),e("router-link",{attrs:{to:"/network"}},[e("h3",[n._v("网络信息")])]),e("router-link",{attrs:{to:"/notify"}},[e("h3",[n._v("通知推送")])])],1)},m=[],_={name:"mainPage"},h=_,b=(e("c148"),Object(d["a"])(h,p,m,!1,null,"40f8e9ba",null));b.options.__file="mainPage.vue";var g=b.exports,C={name:"app",components:{loading:v,mainPage:g},data:function(){return{isConnecting:!0}},methods:{onDeviceReady:function(){this.isConnecting=!1}},created:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)}},y=C,k=(e("034f"),Object(d["a"])(y,a,r,!1,null,null,null));k.options.__file="App.vue";var w=k.exports,L=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",[e("button",{staticClass:"photo-button",on:{click:n.onPhotoClick}},[n._v("拍照")]),e("button",{staticClass:"album-button",on:{click:n.onAlbumClick}},[n._v("相册")])]),e("ul",{staticClass:"image-list"},n._l(n.imageUrls,function(n){return e("li",{key:n,staticClass:"image-item"},[e("img",{attrs:{src:n}})])}))])},O=[],E={name:"camera",data:function(){return{imageUrls:[]}},methods:{getPicture:function(n){var t=this;navigator.camera.getPicture(function(n){t.imageUrls.push(n)},function(n){alert("Failed because: "+n)},{destinationType:Camera.DestinationType.FILE_URL,sourceType:n})},onPhotoClick:function(){this.getPicture(Camera.PictureSourceType.CAMERA)},onAlbumClick:function(){this.getPicture(Camera.PictureSourceType.PHOTOLIBRARY)}}},P=E,j=(e("abad"),Object(d["a"])(P,L,O,!1,null,"78a47d6d",null));j.options.__file="camera.vue";var x=j.exports,T=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h3",[n._v("拨打电话")]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.number,expression:"number",modifiers:{trim:!0}}],attrs:{type:"tel",id:"phone",name:"phone",placeholder:"输入电话号码"},domProps:{value:n.number},on:{input:function(t){t.target.composing||(n.number=t.target.value.trim())},blur:function(t){n.$forceUpdate()}}}),e("button",{staticClass:"dial-button",on:{click:function(t){n.dial()}}},[n._v("拨打")])])},N=[],$={data:function(){return{number:""}},methods:{dial:function(){this.number.length?window.plugins.CallNumber.callNumber(function(){alert("拨打成功!")},function(n){alert("Error:"+n)},this.number):alert("电话不能为空")}}},R=$,I=(e("3cab"),Object(d["a"])(R,T,N,!1,null,null,null));I.options.__file="dialNumber.vue";var S=I.exports,U=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h3",[n._v("通话记录")]),e("div",{staticClass:"device-info"},[e("ul",n._l(n.callLogs,function(t,o){return e("li",{key:o},[e("table",[e("tr",[e("td",[n._v("电话号码")]),e("td",{staticClass:"call-number"},[n._v(n._s(t.number))])]),e("tr",[e("td",[n._v("通话时间")]),e("td",{staticClass:"call-time"},[n._v(n._s(new Date(t.date).toLocaleString()))])]),e("tr",[e("td",[n._v("通话时长")]),e("td",{staticClass:"call-duration"},[n._v(n._s(t.duration+"s"))])]),e("tr",[e("td",[n._v("通话类型")]),e("td",{staticClass:"call-type"},[n._v(n._s(n.callTypes[t.type-1]))])]),e("tr",[e("td",[n._v("姓名")]),e("td",{staticClass:"call-name"},[n._v(n._s(t.name||"佚名"))])])])])}))])])},A=[],G={name:"callLog",data:function(){return{callLogs:[],callTypes:["呼入","呼出","未接通"]}},methods:{displayCalllog:function(){var n=function(){window.plugins.callLog.getCallLog([],function(n){this.callLogs=n},function(){alert("获取通话记录失败！")})};window.plugins.callLog.hasReadPermission(n,function(){window.plugins.callLog.requestReadPermission(n,function(){alert("无法获得访问通话记录的权限！")})})}},created:function(){this.displayCalllog()}},M=G,D=(e("8d26"),Object(d["a"])(M,U,A,!1,null,null,null));D.options.__file="callLog.vue";var F=D.exports,W=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h3",[n._v("设备信息")]),e("table",[e("tr",[e("td",[n._v("cordova版本")]),e("td",[n._v(n._s(n.device.cordova))])]),e("tr",[e("td",[n._v("model")]),e("td",[n._v(n._s(n.device.model))])]),e("tr",[e("td",[n._v("设备平台")]),e("td",[n._v(n._s(n.device.platform))])]),e("tr",[e("td",[n._v("uuid")]),e("td",[n._v(n._s(n.device.uuid))])]),e("tr",[e("td",[n._v("设备版本")]),e("td",[n._v(n._s(n.device.version))])]),e("tr",[e("td",[n._v("制造商")]),e("td",[n._v(n._s(n.device.manufacturer))])]),e("tr",[e("td",[n._v("模拟器")]),e("td",[n._v(n._s(n.device.isVirtual))])])])])},H=[],J={data:function(){return{}},created:function(){}},q=J,B=(e("0383"),Object(d["a"])(q,W,H,!1,null,null,null));B.options.__file="deviceInfo.vue";var K=B.exports,V=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h3",[n._v("网络信息")]),e("button",{on:{click:n.onClick}},[n._v("检查网络类型")]),e("p",[n._v(n._s(n.info))])])},Y=[],z={data:function(){return{info:""}},methods:{onOffline:function(){this.info="网络未连接"},onOnLine:function(){this.info="网络已连接"},onClick:function(){var n=navigator.connection.type,t={};t[Connection.UNKNOWN]="Unknown connection",t[Connection.ETHERNET]="Ethernet connection",t[Connection.WIFI]="WiFi connection",t[Connection.CELL_2G]="Cell 2G connection",t[Connection.CELL_3G]="Cell 3G connection",t[Connection.CELL_4G]="Cell 4G connection",t[Connection.CELL]="Cell generic connection",t[Connection.NONE]="No network connection",this.info="网络类型: "+t[n]}},created:function(){document.addEventListener("offline",this.onOffline,!1),document.addEventListener("online",this.onOnLine,!1)}},Q=z,X=(e("dd0d"),Object(d["a"])(Q,V,Y,!1,null,null,null));X.options.__file="networkInfo.vue";var Z=X.exports;o["a"].use(i["a"]),o["a"].config.productionTip=!1;var nn=[{path:"/",component:g,name:"mainPage"},{path:"/camera",component:x,name:"camera"},{path:"/dial",component:S,name:"dialNumber"},{path:"/calllog",component:F,name:"callLog"},{path:"/device",component:K,name:"deviceInfo"},{path:"/network",component:Z,name:"networkInfo"}],tn=new i["a"]({routes:nn});new o["a"]({router:tn,render:function(n){return n(w)}}).$mount("#app")},7332:function(n,t,e){},7964:function(n,t,e){},"8d26":function(n,t,e){"use strict";var o=e("1e0d"),i=e.n(o);i.a},abad:function(n,t,e){"use strict";var o=e("7964"),i=e.n(o);i.a},c148:function(n,t,e){"use strict";var o=e("7332"),i=e.n(o);i.a},c21b:function(n,t,e){},cc63:function(n,t,e){},dd0d:function(n,t,e){"use strict";var o=e("4d43"),i=e.n(o);i.a}});
//# sourceMappingURL=app.js.map