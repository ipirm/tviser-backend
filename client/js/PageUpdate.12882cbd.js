(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageUpdate"],{"5e28":function(e,t,a){"use strict";var l=a("92c3"),i=a.n(l);i.a},"5f24":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("layout-default",[e.pageItem?a("form",{staticClass:"updateForm",on:{submit:function(t){return t.preventDefault(),e.updateUser(t)}}},[a("div",{staticClass:"form-title"},[e._v("Редактирование Страницы")]),a("md-tabs",[a("md-tab",{attrs:{id:"tab-home","md-label":"RU"},on:{click:function(t){return t.stopPropagation(),e.changeLang(1)}}}),a("md-tab",{attrs:{id:"tab-pages","md-label":"EN"},on:{click:function(t){return t.stopPropagation(),e.changeLang(2)}}}),a("md-tab",{attrs:{id:"tab-posts","md-label":"DE"},on:{click:function(t){return t.stopPropagation(),e.changeLang(3)}}}),a("md-tab",{attrs:{id:"tab-favorites","md-label":"AZ"},on:{click:function(t){return t.stopPropagation(),e.changeLang(4)}}})],1),1===e.lang?a("md-field",[a("label",[e._v("Meta Title")]),a("md-input",{model:{value:e.pageItem.meta_title,callback:function(t){e.$set(e.pageItem,"meta_title",t)},expression:"pageItem.meta_title"}})],1):e._e(),2===e.lang?a("md-field",[a("label",[e._v("Meta Title")]),a("md-input",{model:{value:e.pageItem.meta_title__en,callback:function(t){e.$set(e.pageItem,"meta_title__en",t)},expression:"pageItem.meta_title__en"}})],1):e._e(),3===e.lang?a("md-field",[a("label",[e._v("Meta Title")]),a("md-input",{model:{value:e.pageItem.meta_title__de,callback:function(t){e.$set(e.pageItem,"meta_title__de",t)},expression:"pageItem.meta_title__de"}})],1):e._e(),4===e.lang?a("md-field",[a("label",[e._v("Meta Title")]),a("md-input",{model:{value:e.pageItem.meta_title__az,callback:function(t){e.$set(e.pageItem,"meta_title__az",t)},expression:"pageItem.meta_title__az"}})],1):e._e(),1===e.lang?a("md-field",[a("label",[e._v("Meta Description")]),a("md-input",{model:{value:e.pageItem.meta_subtitle,callback:function(t){e.$set(e.pageItem,"meta_subtitle",t)},expression:"pageItem.meta_subtitle"}})],1):e._e(),2===e.lang?a("md-field",[a("label",[e._v("Meta Description")]),a("md-input",{model:{value:e.pageItem.meta_subtitle__en,callback:function(t){e.$set(e.pageItem,"meta_subtitle__en",t)},expression:"pageItem.meta_subtitle__en"}})],1):e._e(),3===e.lang?a("md-field",[a("label",[e._v("Meta Description")]),a("md-input",{model:{value:e.pageItem.meta_subtitle__de,callback:function(t){e.$set(e.pageItem,"meta_subtitle__de",t)},expression:"pageItem.meta_subtitle__de"}})],1):e._e(),4===e.lang?a("md-field",[a("label",[e._v("Meta Description")]),a("md-input",{model:{value:e.pageItem.meta_subtitle__az,callback:function(t){e.$set(e.pageItem,"meta_subtitle__az",t)},expression:"pageItem.meta_subtitle__az"}})],1):e._e(),1===e.lang?a("md-field",[a("label",[e._v("Meta Keywords")]),a("md-input",{model:{value:e.pageItem.meta_keywords,callback:function(t){e.$set(e.pageItem,"meta_keywords",t)},expression:"pageItem.meta_keywords"}})],1):e._e(),2===e.lang?a("md-field",[a("label",[e._v("Meta Keywords")]),a("md-input",{model:{value:e.pageItem.meta_subtitle__en,callback:function(t){e.$set(e.pageItem,"meta_subtitle__en",t)},expression:"pageItem.meta_subtitle__en"}})],1):e._e(),3===e.lang?a("md-field",[a("label",[e._v("Meta Keywords")]),a("md-input",{model:{value:e.pageItem.meta_keywords__de,callback:function(t){e.$set(e.pageItem,"meta_keywords__de",t)},expression:"pageItem.meta_keywords__de"}})],1):e._e(),4===e.lang?a("md-field",[a("label",[e._v("Meta Keywords")]),a("md-input",{model:{value:e.pageItem.meta_keywords__az,callback:function(t){e.$set(e.pageItem,"meta_keywords__az",t)},expression:"pageItem.meta_keywords__az"}})],1):e._e(),1===e.lang?a("md-field",[a("label",[e._v("Title")]),a("md-input",{model:{value:e.pageItem.title,callback:function(t){e.$set(e.pageItem,"title",t)},expression:"pageItem.title"}})],1):e._e(),2===e.lang?a("md-field",[a("label",[e._v("Title")]),a("md-input",{model:{value:e.pageItem.title__en,callback:function(t){e.$set(e.pageItem,"title__en",t)},expression:"pageItem.title__en"}})],1):e._e(),3===e.lang?a("md-field",[a("label",[e._v("Title")]),a("md-input",{model:{value:e.pageItem.title__de,callback:function(t){e.$set(e.pageItem,"title__de",t)},expression:"pageItem.title__de"}})],1):e._e(),4===e.lang?a("md-field",[a("label",[e._v("Title")]),a("md-input",{model:{value:e.pageItem.title__az,callback:function(t){e.$set(e.pageItem,"title__az",t)},expression:"pageItem.title__az"}})],1):e._e(),1===e.lang?a("md-field",[a("label",[e._v("Subtitle")]),a("md-input",{model:{value:e.pageItem.subtitle,callback:function(t){e.$set(e.pageItem,"subtitle",t)},expression:"pageItem.subtitle"}})],1):e._e(),2===e.lang?a("md-field",[a("label",[e._v("Subtitle")]),a("md-input",{model:{value:e.pageItem.subtitle__en,callback:function(t){e.$set(e.pageItem,"subtitle__en",t)},expression:"pageItem.subtitle__en"}})],1):e._e(),3===e.lang?a("md-field",[a("label",[e._v("Subtitle")]),a("md-input",{model:{value:e.pageItem.subtitle__de,callback:function(t){e.$set(e.pageItem,"subtitle__de",t)},expression:"pageItem.subtitle__de"}})],1):e._e(),4===e.lang?a("md-field",[a("label",[e._v("Subtitle ")]),a("md-input",{model:{value:e.pageItem.subtitle__az,callback:function(t){e.$set(e.pageItem,"subtitle__az",t)},expression:"pageItem.subtitle__az"}})],1):e._e(),a("div",[a("md-button",{on:{click:function(t){return t.stopPropagation(),e.$router.go(-1)}}},[e._v("Назад")]),a("md-button",{staticClass:"md-primary",attrs:{type:"submit"}},[e._v("Сохранить")])],1)],1):e._e()])},i=[],n=a("5530"),m=a("7c64"),_=a("2f62"),s={components:{LayoutDefault:m["a"]},created:function(){this.getPage(this.$route.params.id)},name:"PageUpdate",data:function(){return{lang:1}},methods:Object(n["a"])(Object(n["a"])({},Object(_["b"])("pages",["getPage","updatePageDto"])),{},{changeLang:function(e){this.lang=e},updateUser:function(){var e=this;this.updatePageDto(this.pageItem).then((function(){return e.$router.push({path:"/pages"})}))}}),computed:Object(n["a"])({},Object(_["c"])("pages",["pageItem"]))},d=s,p=(a("5e28"),a("2877")),u=Object(p["a"])(d,l,i,!1,null,"0a02df22",null);t["default"]=u.exports},"92c3":function(e,t,a){}}]);
//# sourceMappingURL=PageUpdate.12882cbd.js.map