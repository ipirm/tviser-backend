(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userUpdate"],{5483:function(e,t,s){},ac5e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("layout-default",[e.user?s("form",{staticClass:"updateForm",on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[s("div",{staticClass:"form-title"},[e._v("Редактирование Пользователя")]),s("md-field",[s("label",[e._v("Имя")]),s("md-input",{model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),s("md-field",[s("label",[e._v("Мейл")]),s("md-input",{model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("md-field",[s("label",[e._v("Пароль")]),s("md-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),s("div",[s("md-button",{on:{click:function(t){return t.stopPropagation(),e.$router.go(-1)}}},[e._v("Назад")]),s("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Сохранить")])],1)],1):e._e()])},r=[],u=s("5530"),n=s("7c64"),o=s("2f62"),i={components:{LayoutDefault:n["a"]},created:function(){this.getUser(this.$route.params.id)},name:"UserUpdate",methods:Object(u["a"])(Object(u["a"])({},Object(o["b"])("user",["getUser","updateUserDto"])),{},{updateUser:function(){var e=this;this.updateUserDto(this.user).then((function(){return e.$router.push({path:"/users"})}))}}),computed:Object(u["a"])({},Object(o["c"])("user",["user"]))},c=i,l=(s("f885"),s("2877")),d=Object(l["a"])(c,a,r,!1,null,"0eae4fa2",null);t["default"]=d.exports},f885:function(e,t,s){"use strict";var a=s("5483"),r=s.n(a);r.a}}]);
//# sourceMappingURL=userUpdate.95d2689f.js.map