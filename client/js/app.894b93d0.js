(function(e){function t(t){for(var a,i,l=t[0],u=t[1],s=t[2],c=0,m=[];c<l.length;c++)i=l[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function l(e){return u.p+"js/"+({PageUpdate:"PageUpdate",ScreenPage:"ScreenPage",login:"login",user:"user",userUpdate:"userUpdate"}[e]||e)+"."+{PageUpdate:"9fe05870",ScreenPage:"0e8be94d",login:"f2df9b7c",user:"767545cb",userUpdate:"18f1d55e"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={PageUpdate:1,ScreenPage:1,login:1,user:1,userUpdate:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({PageUpdate:"PageUpdate",ScreenPage:"ScreenPage",login:"login",user:"user",userUpdate:"userUpdate"}[e]||e)+"."+{PageUpdate:"0fe46c0b",ScreenPage:"31b9b7f0",login:"b7c3da3f",user:"e719a374",userUpdate:"f023ebef"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var s=o[l],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===a||c===r))return t()}var m=document.getElementsByTagName("style");for(l=0;l<m.length;l++){s=m[l],c=s.getAttribute("data-href");if(c===a||c===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],d.parentNode.removeChild(d),n(o)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var m=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",m.name="ChunkLoadError",m.type=a,m.request=i,n[1](m)}r[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0df2":function(e,t,n){"use strict";var a=n("c839"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],o=(n("d3b7"),n("bc3a")),l=n.n(o),u={name:"App",created:function(){l.a.interceptors.response.use(void 0,(function(e){return new Promise((function(){throw 401===e.status&&e.config&&!e.config.__isRetryRequest&&(this.$store.dispatch("auth/logOut"),this.$router.push({path:"/login"})),e}))}))},components:{}},s=u,c=(n("5c0b"),n("2877")),m=Object(c["a"])(s,i,r,!1,null,null,null),d=m.exports,p=n("2f62"),f=(n("4de4"),n("96cf"),n("1da1")),g=(n("99af"),n("07ac"),n("d4ec")),_=n("bee2"),b=n("53ca"),v="https://tviser-backend.herokuapp.com/api";function h(){var e=localStorage.getItem("user-token");return{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}}var k=function(e){return new Promise((function(t,n){e.then((function(e){return t(e)})).catch((function(e){return n(I(e))}))}))},I=function(e){if(!e.response)return{_e:"Unknown Error"};if(400!==e.response.status)return{_e:e.response.statusText};var t=e.response.data;return"object"!==Object(b["a"])(t)||Object.values(t).filter((function(e){return!Array.isArray(e)})).length>0?{_e:"Unknown server response"}:e.response.data},E=function(){function e(){Object(g["a"])(this,e)}return Object(_["a"])(e,null,[{key:"get",value:function(e){return k(l.a.get("".concat(v,"/").concat(e),h()))}},{key:"getPublic",value:function(e){return k(l.a.get("".concat(v,"/").concat(e)))}},{key:"post",value:function(e,t){return k(l.a.post("".concat(v,"/").concat(e),t,h()))}},{key:"patch",value:function(e,t){return k(l.a.patch("".concat(v,"/").concat(e),t,h()))}},{key:"delete",value:function(e){return k(l.a.delete("".concat(v,"/").concat(e),h()))}},{key:"put",value:function(e,t){return k(l.a.put("".concat(v,"/").concat(e),t))}},{key:"postFormData",value:function(e,t){return k(l.a.post("".concat(v,"/").concat(e),t))}},{key:"putJson",value:function(e,t){return k(l.a.put("".concat(v,"/").concat(e),t,h()))}}]),e}(),S={namespaced:!0,state:{users:[],pages:null,total:null,user:null},mutations:{SET_USERS:function(e,t){e.users=t.items,e.pages=t.meta.totalPages,e.total=t.meta.totalItems},DELETE_USER:function(e,t){return e.users=e.users.filter((function(e){return e._id!==t}))},SET_USER:function(e,t){e.user=t},UPDATED_USER:function(e){e.updated=!0}},actions:{getUsers:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("users?page=".concat(t,"&limit=10"));case 3:i=n.sent,a("SET_USERS",i.data);case 5:case"end":return n.stop()}}),n)})))()},deleteUser:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.delete("users/".concat(t));case 3:a("DELETE_USER",t);case 4:case"end":return n.stop()}}),n)})))()},getUser:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("users/".concat(t));case 3:i=n.sent,a("SET_USER",i.data);case 5:case"end":return n.stop()}}),n)})))()},updateUserDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.patch("users/update",JSON.stringify(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()}}},x={namespaced:!0,state:{token:localStorage.getItem("user-token")||"",status:"",user:null},getters:{isAuthenticated:function(e){return e.token.length>0},authStatus:function(e){return e.status}},mutations:{SET_LOADING:function(e){e.status="loading"},AUTH_SUCCESS:function(e,t){e.status="success",e.token=t},AUTH_ERROR:function(e){e.status="error"},SET_USER:function(e,t){e.user=t},AUTH_LOGOUT:function(e){e.user=null,e.token=""}},actions:{LogIn:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,i=e.dispatch,a("SET_LOADING"),n.next=4,E.post("auth/login",JSON.stringify(t)).then((function(e){var t=e.data.access_token;localStorage.setItem("user-token",t),a("AUTH_SUCCESS",t),i("getUser")}));case 4:case"end":return n.stop()}}),n)})))()},getUser:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,E.get("auth/profile");case 3:a=t.sent,n("SET_USER",a.data);case 5:case"end":return t.stop()}}),t)})))()},logOut:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,n("AUTH_LOGOUT"),localStorage.removeItem("user-token");case 3:case"end":return t.stop()}}),t)})))()}}},y={namespaced:!0,state:{pagesItem:[],pages:null,total:null,pageItem:null},mutations:{SET_PAGES:function(e,t){e.pagesItem=t},DELETE_USER:function(e,t){return e.users=e.users.filter((function(e){return e._id!==t}))},SET_PAGE:function(e,t){e.pageItem=t},UPDATED_USER:function(e){e.updated=!0}},actions:{getPages:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("pages?page=".concat(t,"&limit=10"));case 3:i=n.sent,a("SET_PAGES",i.data);case 5:case"end":return n.stop()}}),n)})))()},getPage:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("pages/".concat(t));case 3:i=n.sent,a("SET_PAGE",i.data);case 5:case"end":return n.stop()}}),n)})))()},updatePageDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.patch("pages/update",JSON.stringify(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()}}},P={namespaced:!0,state:{pagesItem:[],pages:null,total:null,pageItem:null},mutations:{SET_PAGES:function(e,t){e.pagesItem=t},DELETE_USER:function(e,t){return e.users=e.users.filter((function(e){return e._id!==t}))},SET_PAGE:function(e,t){e.pageItem=t},UPDATED_USER:function(e){e.updated=!0}},actions:{getPages:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("pages/".concat(t));case 3:i=n.sent,a("SET_PAGES",i.data);case 5:case"end":return n.stop()}}),n)})))()},getSlide:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("pages/".concat(t,"/slide"));case 3:i=n.sent,a("SET_PAGE",i.data);case 5:case"end":return n.stop()}}),n)})))()},updatePageDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.patch("slides/update",JSON.stringify(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()},savePageDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.post("pages/create/slide",JSON.stringify(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()},removePageDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.delete("slides/delete/".concat(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()}}},w={namespaced:!0,state:{information:{}},mutations:{SET_USERS:function(e,t){e.information=t},DELETE_USER:function(e,t){return e.users=e.users.filter((function(e){return e._id!==t}))},SET_USER:function(e,t){e.user=t},UPDATED_USER:function(e){e.updated=!0}},actions:{getInformation:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,E.get("information");case 3:a=t.sent,n("SET_USERS",a.data);case 5:case"end":return t.stop()}}),t)})))()},deleteUser:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.delete("users/".concat(t));case 3:a("DELETE_USER",t);case 4:case"end":return n.stop()}}),n)})))()},getUser:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.get("users/".concat(t));case 3:i=n.sent,a("SET_USER",i.data);case 5:case"end":return n.stop()}}),n)})))()},updatePageDto:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,E.patch("information/update",JSON.stringify(t));case 3:a("UPDATED_USER");case 4:case"end":return n.stop()}}),n)})))()}}};a["default"].use(p["a"]);var U=new p["a"].Store({modules:{user:S,auth:x,pages:y,slides:P,information:w}}),O=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default",[n("TableSlidesPage")],1)},$=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"table-title"},[e._v("Слайды страницы ( "+e._s(e.pagesItem.title)+" )")]),n("md-button",{staticClass:"md-primary",on:{click:function(t){return t.stopPropagation(),e.$router.push("/pages/"+e.pagesItem.id+"/update/0")}}},[e._v("Создать Слайд")]),n("md-table",[n("md-table-row",[n("md-table-head",[e._v("Title")]),n("md-table-head",[e._v("Subtitle")]),n("md-table-head",[e._v("Изменить")]),n("md-table-head",[e._v("Удалить")])],1),e._l(e.pagesItem.slides,(function(t){return n("md-table-row",{key:t.id},[n("md-table-cell",[e._v(e._s(t.title))]),n("md-table-cell",[e._v(e._s(t.subtitle))]),n("md-table-cell",[n("md-button",{staticClass:"md-icon-button",on:{click:function(n){return n.stopPropagation(),e.$router.push("/pages/:id/slides/"+t.id)}}},[n("md-icon",[e._v("edit")])],1)],1),n("md-table-cell",[n("md-button",{staticClass:"md-icon-button",on:{click:function(n){return n.stopPropagation(),e.removeSlide(t.id)}}},[n("md-icon",[e._v("delete")])],1)],1)],1)}))],2)],1)},j=[],D=n("5530"),A={name:"TableSlidesPage",created:function(){this.getPages(this.$route.params.id)},data:function(){return{currentPage:1}},methods:Object(D["a"])(Object(D["a"])({},Object(p["b"])("slides",["getPages","removePageDto"])),{},{delUser:function(e){this.deleteUser(e)},updatePage:function(e){this.$router.push("/pages/".concat(e.id))},removeSlide:function(e){var t=this;this.removePageDto(e).then(Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getPages(t.$route.params.id);case 1:case"end":return e.stop()}}),e)}))))}}),computed:Object(D["a"])({},Object(p["c"])("slides",["pagesItem"]))},C=A,L=(n("7421"),Object(c["a"])(C,R,j,!1,null,"c5f98e3e",null)),z=L.exports,N=n("7c64"),G={name:"SlidesPage",components:{LayoutDefault:N["a"],TableSlidesPage:z}},J=G,W=Object(c["a"])(J,T,$,!1,null,"30c04b47",null),F=W.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default",[e.pageItem?n("form",{staticClass:"updateForm",on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[n("div",{staticClass:"form-title"},[e._v("Редактирование Слайда")]),n("md-tabs",[n("md-tab",{attrs:{id:"tab-home","md-label":"RU"},on:{click:function(t){return t.stopPropagation(),e.changeLang(1)}}}),n("md-tab",{attrs:{id:"tab-pages","md-label":"EN"},on:{click:function(t){return t.stopPropagation(),e.changeLang(2)}}}),n("md-tab",{attrs:{id:"tab-posts","md-label":"DE"},on:{click:function(t){return t.stopPropagation(),e.changeLang(3)}}}),n("md-tab",{attrs:{id:"tab-favorites","md-label":"AZ"},on:{click:function(t){return t.stopPropagation(),e.changeLang(4)}}})],1),1===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title,callback:function(t){e.$set(e.pageItem,"title",t)},expression:"pageItem.title"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__en,callback:function(t){e.$set(e.pageItem,"title__en",t)},expression:"pageItem.title__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__de,callback:function(t){e.$set(e.pageItem,"title__de",t)},expression:"pageItem.title__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__az,callback:function(t){e.$set(e.pageItem,"title__az",t)},expression:"pageItem.title__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle,callback:function(t){e.$set(e.pageItem,"subtitle",t)},expression:"pageItem.subtitle"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle__en,callback:function(t){e.$set(e.pageItem,"subtitle__en",t)},expression:"pageItem.subtitle__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle__de,callback:function(t){e.$set(e.pageItem,"subtitle__de",t)},expression:"pageItem.subtitle__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Subtitle ")]),n("md-input",{model:{value:e.pageItem.subtitle__az,callback:function(t){e.$set(e.pageItem,"subtitle__az",t)},expression:"pageItem.subtitle__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type,callback:function(t){e.$set(e.pageItem,"type",t)},expression:"pageItem.type"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type__en,callback:function(t){e.$set(e.pageItem,"type__en",t)},expression:"pageItem.type__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type__de,callback:function(t){e.$set(e.pageItem,"type__de",t)},expression:"pageItem.type__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Type Work ")]),n("md-input",{model:{value:e.pageItem.type__az,callback:function(t){e.$set(e.pageItem,"type__az",t)},expression:"pageItem.type__az"}})],1):e._e(),n("md-field",[n("label",[e._v(" Сссылка на картинку ")]),n("md-input",{model:{value:e.pageItem.image_link,callback:function(t){e.$set(e.pageItem,"image_link",t)},expression:"pageItem.image_link"}})],1),n("md-field",[n("label",[e._v("Описание картинки ")]),n("md-input",{model:{value:e.pageItem.image_alt,callback:function(t){e.$set(e.pageItem,"image_alt",t)},expression:"pageItem.image_alt"}})],1),n("md-field",[n("label",[e._v("Ссылка")]),n("md-input",{model:{value:e.pageItem.url,callback:function(t){e.$set(e.pageItem,"url",t)},expression:"pageItem.url"}})],1),n("md-field",[n("label",[e._v("Большая картинка сайта")]),n("md-input",{model:{value:e.pageItem.fancy_image,callback:function(t){e.$set(e.pageItem,"fancy_image",t)},expression:"pageItem.fancy_image"}})],1),n("div",[n("md-button",{on:{click:function(t){return t.stopPropagation(),e.$router.go(-1)}}},[e._v("Назад")]),n("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Сохранить")])],1)],1):e._e()])},B=[],M={components:{LayoutDefault:N["a"]},created:function(){this.getSlide(this.$route.params.slide_id)},name:"SlideUpdatePage",data:function(){return{lang:1}},methods:Object(D["a"])(Object(D["a"])({},Object(p["b"])("slides",["getSlide","updatePageDto"])),{},{changeLang:function(e){this.lang=e},updateUser:function(){var e=this;this.updatePageDto(this.pageItem).then((function(){return e.$router.go(-1)}))}}),computed:Object(D["a"])({},Object(p["c"])("slides",["pageItem"]))},q=M,Z=(n("0df2"),Object(c["a"])(q,H,B,!1,null,"bfda65ce",null)),K=Z.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default",[e.pageItem?n("form",{staticClass:"updateForm",on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[n("div",{staticClass:"form-title"},[e._v("Создать Слайд")]),n("md-tabs",[n("md-tab",{attrs:{id:"tab-home","md-label":"RU"},on:{click:function(t){return t.stopPropagation(),e.changeLang(1)}}}),n("md-tab",{attrs:{id:"tab-pages","md-label":"EN"},on:{click:function(t){return t.stopPropagation(),e.changeLang(2)}}}),n("md-tab",{attrs:{id:"tab-posts","md-label":"DE"},on:{click:function(t){return t.stopPropagation(),e.changeLang(3)}}}),n("md-tab",{attrs:{id:"tab-favorites","md-label":"AZ"},on:{click:function(t){return t.stopPropagation(),e.changeLang(4)}}})],1),1===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title,callback:function(t){e.$set(e.pageItem,"title",t)},expression:"pageItem.title"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__en,callback:function(t){e.$set(e.pageItem,"title__en",t)},expression:"pageItem.title__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__de,callback:function(t){e.$set(e.pageItem,"title__de",t)},expression:"pageItem.title__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.pageItem.title__az,callback:function(t){e.$set(e.pageItem,"title__az",t)},expression:"pageItem.title__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle,callback:function(t){e.$set(e.pageItem,"subtitle",t)},expression:"pageItem.subtitle"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle__en,callback:function(t){e.$set(e.pageItem,"subtitle__en",t)},expression:"pageItem.subtitle__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.pageItem.subtitle__de,callback:function(t){e.$set(e.pageItem,"subtitle__de",t)},expression:"pageItem.subtitle__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Subtitle ")]),n("md-input",{model:{value:e.pageItem.subtitle__az,callback:function(t){e.$set(e.pageItem,"subtitle__az",t)},expression:"pageItem.subtitle__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type,callback:function(t){e.$set(e.pageItem,"type",t)},expression:"pageItem.type"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type__en,callback:function(t){e.$set(e.pageItem,"type__en",t)},expression:"pageItem.type__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Type Work")]),n("md-input",{model:{value:e.pageItem.type__de,callback:function(t){e.$set(e.pageItem,"type__de",t)},expression:"pageItem.type__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Type Work ")]),n("md-input",{model:{value:e.pageItem.type__az,callback:function(t){e.$set(e.pageItem,"type__az",t)},expression:"pageItem.type__az"}})],1):e._e(),n("md-field",[n("label",[e._v(" Сссылка на картинку ")]),n("md-input",{model:{value:e.pageItem.image_link,callback:function(t){e.$set(e.pageItem,"image_link",t)},expression:"pageItem.image_link"}})],1),n("md-field",[n("label",[e._v("Описание картинки ")]),n("md-input",{model:{value:e.pageItem.image_alt,callback:function(t){e.$set(e.pageItem,"image_alt",t)},expression:"pageItem.image_alt"}})],1),n("md-field",[n("label",[e._v("Ссылка")]),n("md-input",{model:{value:e.pageItem.url,callback:function(t){e.$set(e.pageItem,"url",t)},expression:"pageItem.url"}})],1),n("md-field",[n("label",[e._v("Большая картинка сайта")]),n("md-input",{model:{value:e.pageItem.fancy_image,callback:function(t){e.$set(e.pageItem,"fancy_image",t)},expression:"pageItem.fancy_image"}})],1),n("md-field",[n("label",[e._v("Айди")]),n("md-input",{attrs:{readonly:""},model:{value:e.pageItem.aboutId,callback:function(t){e.$set(e.pageItem,"aboutId",t)},expression:"pageItem.aboutId"}})],1),n("div",[n("md-button",{on:{click:function(t){return t.stopPropagation(),e.$router.go(-1)}}},[e._v("Назад")]),n("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Сохранить")])],1)],1):e._e()])},V=[],X={components:{LayoutDefault:N["a"]},name:"SlideAddPage",data:function(){return{pageItem:{title:null,title__en:null,title__de:null,title__az:null,subtitle:null,subtitle__en:null,subtitle__de:null,subtitle__az:null,image_link:null,image_alt:null,url:null,aboutId:this.$route.params.id},lang:1}},methods:Object(D["a"])(Object(D["a"])({},Object(p["b"])("slides",["savePageDto"])),{},{changeLang:function(e){this.lang=e},updateUser:function(){var e=this;this.savePageDto(this.pageItem).then((function(){return e.$router.go(-1)}))}})},Y=X,ee=(n("ba40"),Object(c["a"])(Y,Q,V,!1,null,"fe063786",null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default",[n("table-information-page")],1)},ae=[],ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"table-title"},[e._v("Информация сайта")]),n("md-table",[n("md-table-row",[n("md-table-head",[e._v("Title")]),n("md-table-head",[e._v("Subtitle")]),n("md-table-head",[e._v("Изменить")])],1),n("md-table-row",[n("md-table-cell",[e._v(e._s(e.information.menu_title))]),n("md-table-cell",[e._v(e._s(e.information.menu_subtitle))]),n("md-table-cell",[n("md-button",{staticClass:"md-icon-button",on:{click:function(t){return t.stopPropagation(),e.updatePage(1)}}},[n("md-icon",[e._v("edit")])],1)],1)],1)],1)],1)},re=[],oe={name:"TableInformationPage",created:function(){this.getInformation()},data:function(){return{currentPage:1}},methods:Object(D["a"])(Object(D["a"])({},Object(p["b"])("information",["getInformation"])),{},{updatePage:function(e){this.$router.push("/information/".concat(e))}}),computed:Object(D["a"])({},Object(p["c"])("information",["information"]))},le=oe,ue=(n("82bf"),Object(c["a"])(le,ie,re,!1,null,"9a068e5a",null)),se=ue.exports,ce={name:"InformationPage",components:{TableInformationPage:se,LayoutDefault:N["a"]}},me=ce,de=Object(c["a"])(me,ne,ae,!1,null,"c783fdc0",null),pe=de.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout-default",[e.information?n("form",{staticClass:"updateForm",on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[n("div",{staticClass:"form-title"},[e._v("Редактирование Слайда")]),n("md-tabs",[n("md-tab",{attrs:{id:"tab-home","md-label":"RU"},on:{click:function(t){return t.stopPropagation(),e.changeLang(1)}}}),n("md-tab",{attrs:{id:"tab-pages","md-label":"EN"},on:{click:function(t){return t.stopPropagation(),e.changeLang(2)}}}),n("md-tab",{attrs:{id:"tab-posts","md-label":"DE"},on:{click:function(t){return t.stopPropagation(),e.changeLang(3)}}}),n("md-tab",{attrs:{id:"tab-favorites","md-label":"AZ"},on:{click:function(t){return t.stopPropagation(),e.changeLang(4)}}})],1),n("md-field",[n("label",[e._v("ID")]),n("md-input",{attrs:{readonly:""},model:{value:e.information.id,callback:function(t){e.$set(e.information,"id",t)},expression:"information.id"}})],1),1===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.information.menu_title,callback:function(t){e.$set(e.information,"menu_title",t)},expression:"information.menu_title"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.information.menu_title__en,callback:function(t){e.$set(e.information,"menu_title__en",t)},expression:"information.menu_title__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.information.menu_title__de,callback:function(t){e.$set(e.information,"menu_title__de",t)},expression:"information.menu_title__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Title")]),n("md-input",{model:{value:e.information.menu_title__az,callback:function(t){e.$set(e.information,"menu_title__az",t)},expression:"information.menu_title__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.information.menu_subtitle,callback:function(t){e.$set(e.information,"menu_subtitle",t)},expression:"information.menu_subtitle"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.information.menu_subtitle__en,callback:function(t){e.$set(e.information,"menu_subtitle__en",t)},expression:"information.menu_subtitle__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Subtitle")]),n("md-input",{model:{value:e.information.menu_subtitle__de,callback:function(t){e.$set(e.information,"menu_subtitle__de",t)},expression:"information.menu_subtitle__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Subtitle ")]),n("md-input",{model:{value:e.information.menu_subtitle__az,callback:function(t){e.$set(e.information,"menu_subtitle__az",t)},expression:"information.menu_subtitle__az"}})],1):e._e(),1===e.lang?n("md-field",[n("label",[e._v("Address")]),n("md-input",{model:{value:e.information.address,callback:function(t){e.$set(e.information,"address",t)},expression:"information.address"}})],1):e._e(),2===e.lang?n("md-field",[n("label",[e._v("Address")]),n("md-input",{model:{value:e.information.address__en,callback:function(t){e.$set(e.information,"address__en",t)},expression:"information.address__en"}})],1):e._e(),3===e.lang?n("md-field",[n("label",[e._v("Address")]),n("md-input",{model:{value:e.information.address__de,callback:function(t){e.$set(e.information,"address__de",t)},expression:"information.address__de"}})],1):e._e(),4===e.lang?n("md-field",[n("label",[e._v("Address ")]),n("md-input",{model:{value:e.information.address__az,callback:function(t){e.$set(e.information,"address__az",t)},expression:"information.address__az"}})],1):e._e(),n("md-field",[n("label",[e._v("Facebook")]),n("md-input",{model:{value:e.information.facebook_link,callback:function(t){e.$set(e.information,"facebook_link",t)},expression:"information.facebook_link"}})],1),n("md-field",[n("label",[e._v("Intagram")]),n("md-input",{model:{value:e.information.instagram_link,callback:function(t){e.$set(e.information,"instagram_link",t)},expression:"information.instagram_link"}})],1),n("md-field",[n("label",[e._v("Behance")]),n("md-input",{model:{value:e.information.behance_link,callback:function(t){e.$set(e.information,"behance_link",t)},expression:"information.behance_link"}})],1),n("md-field",[n("label",[e._v("Telegram")]),n("md-input",{model:{value:e.information.telegram_link,callback:function(t){e.$set(e.information,"telegram_link",t)},expression:"information.telegram_link"}})],1),n("md-field",[n("label",[e._v("Phone Number")]),n("md-input",{model:{value:e.information.phone_number,callback:function(t){e.$set(e.information,"phone_number",t)},expression:"information.phone_number"}})],1),n("md-field",[n("label",[e._v("Email")]),n("md-input",{model:{value:e.information.email,callback:function(t){e.$set(e.information,"email",t)},expression:"information.email"}})],1),n("div",[n("md-button",{on:{click:function(t){return t.stopPropagation(),e.$router.go(-1)}}},[e._v("Назад")]),n("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Сохранить")])],1)],1):e._e()])},ge=[],_e={components:{LayoutDefault:N["a"]},created:function(){this.getInformation()},name:"UpdateInformation",data:function(){return{lang:1}},methods:Object(D["a"])(Object(D["a"])({},Object(p["b"])("information",["getInformation","updatePageDto"])),{},{changeLang:function(e){this.lang=e},updateUser:function(){var e=this;this.updatePageDto(this.information).then((function(){return e.$router.go(-1)}))}}),computed:Object(D["a"])({},Object(p["c"])("information",["information"]))},be=_e,ve=(n("bc78"),Object(c["a"])(be,fe,ge,!1,null,"f28b79d8",null)),he=ve.exports,ke=function(){return n.e("login").then(n.bind(null,"282a"))},Ie=function(){return n.e("user").then(n.bind(null,"3836"))},Ee=function(){return n.e("ScreenPage").then(n.bind(null,"664e"))},Se=function(){return n.e("PageUpdate").then(n.bind(null,"5f24"))},xe=function(){return n.e("userUpdate").then(n.bind(null,"ac5e"))};a["default"].use(O["a"]);var ye=function(e,t,n){U.getters["auth/isAuthenticated"]?n("/users"):n()},Pe=function(e,t,n){U.getters["auth/isAuthenticated"]?n():n("/login")},we=new O["a"]({mode:"history",routes:[{path:"/login",component:ke,beforeEnter:ye},{path:"/users",component:Ie,beforeEnter:Pe},{path:"/users/:id",component:xe,beforeEnter:Pe},{path:"/pages",component:Ee,beforeEnter:Pe},{path:"/pages/:id",component:Se,beforeEnter:Pe},{path:"/pages/:id/slides",component:F,beforeEnter:Pe},{path:"/pages/:id/slides/:slide_id",component:K,beforeEnter:Pe},{path:"/pages/:id/update/:slide_id",component:te,beforeEnter:Pe},{path:"/information",component:pe,beforeEnter:Pe},{path:"/information/:id",component:he,beforeEnter:Pe}]}),Ue=we,Oe=n("43f9"),Te=n.n(Oe);n("51de"),n("d69d");a["default"].config.productionTip=!1,a["default"].use(Te.a),new a["default"]({router:Ue,store:U,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),i=n.n(a);i.a},"6af9":function(e,t,n){"use strict";var a=n("cf82"),i=n.n(a);i.a},7421:function(e,t,n){"use strict";var a=n("c59d"),i=n.n(a);i.a},"7c64":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container md-layout-column"},[n("md-toolbar",{staticClass:"md-primary"},[n("md-button",{staticClass:"md-icon-button",on:{click:function(t){e.showNavigation=!0}}},[n("md-icon",[e._v("menu")])],1),n("span",{staticClass:"md-title"},[e._v("Панель управления сайтом Tviser")]),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{on:{click:function(t){return e.logout()}}},[e._v("Выйти")])],1)],1),n("md-drawer",{attrs:{"md-active":e.showNavigation,"md-swipeable":""},on:{"update:mdActive":function(t){e.showNavigation=t},"update:md-active":function(t){e.showNavigation=t}}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("span",{staticClass:"md-title"},[e._v("Меню")])]),n("md-list",[n("md-list-item",[n("router-link",{staticClass:"sidebar-link",attrs:{to:"/users"}},[n("md-icon",[e._v("supervisor_account")]),n("span",{staticClass:"md-list-item-text"},[e._v("Пользователи")])],1)],1),n("md-list-item",[n("router-link",{staticClass:"sidebar-link",attrs:{to:"/pages"}},[n("md-icon",[e._v("bookmark_border")]),n("span",{staticClass:"md-list-item-text"},[e._v("Страницы")])],1)],1),n("md-list-item",[n("router-link",{staticClass:"sidebar-link",attrs:{to:"/information"}},[n("md-icon",[e._v("bookmark_border")]),n("span",{staticClass:"md-list-item-text"},[e._v("Информация")])],1)],1)],1)],1),n("md-content",[e._t("default")],2)],1)},i=[],r={name:"LayoutDefault",data:function(){return{showNavigation:!1,showSidepanel:!1}},methods:{logout:function(){var e=this;this.$store.dispatch("auth/logOut").then((function(){e.$router.push("/login")}))}}},o=r,l=(n("6af9"),n("2877")),u=Object(l["a"])(o,a,i,!1,null,"e27418e2",null);t["a"]=u.exports},"82bf":function(e,t,n){"use strict";var a=n("a31b"),i=n.n(a);i.a},"9c0c":function(e,t,n){},a31b:function(e,t,n){},ba40:function(e,t,n){"use strict";var a=n("c283"),i=n.n(a);i.a},bc78:function(e,t,n){"use strict";var a=n("d1ac"),i=n.n(a);i.a},c283:function(e,t,n){},c59d:function(e,t,n){},c839:function(e,t,n){},cf82:function(e,t,n){},d1ac:function(e,t,n){}});
//# sourceMappingURL=app.894b93d0.js.map