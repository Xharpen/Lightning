!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=59)}({0:function(e,t,n){e.exports=n(1)(0)},1:function(e,t){e.exports=_xe_dll_common},10:function(e,t,n){e.exports=n(1)(398)},12:function(e,t,n){e.exports=n(1)(95)},13:function(e,t,n){e.exports=n(1)(70)},16:function(e,t,n){e.exports=n(1)(136)},2:function(e,t,n){e.exports=n(1)(4)},20:function(e,t,n){e.exports=n(1)(54)},3:function(e,t,n){e.exports=n(1)(140)},4:function(e,t,n){e.exports=n(1)(3)},59:function(e,t,n){"use strict";n.r(t);n(16),n(13);var a=n(10),i=n.n(a),o=n(3),l=n.n(o),r=n(6),s=n.n(r),c=n(2),u=n.n(c),d=n(12),p=n.n(d),f=n(4),g=n.n(f),h=n(7),m=n.n(h),v=n(0),y=n.n(v),x=n(20),b=function(){function e(t){var n=t.$wrapper,a=t.seq,i=t.name,o=t.langKey,l=t.multiline,r=t.lines,s=t.autocomplete;g()(this,e),this.$wrapper=n,this.seq=a,this.name=i,this.langKey=o,this.multiline=l,this.lines=r||[],this.autocomplete=s;var c=this;window.XE.app("Lang").then((function(e){y()((function(){c.init()}))}))}return m()(e,[{key:"init",value:function(){var e;this.langKey&&0===this.lines.length?window.XE.ajax({type:"get",dataType:"json",url:x.default.getters["router/origin"]+"/lang/lines/"+this.langKey,success:p()(e=function(e){this.setLines(e),this.render(),this.bindEvents()}).call(e,this)}):(this.render(),this.bindEvents())}},{key:"bindEvents",value:function(){var e;this.autocomplete&&u()(e=this.$wrapper).call(e,"input[type=text]:first,textarea:first").autocomplete({source:"/lang/search/"+x.default.getters["lang/current"].code,minLength:1,focus:function(e,t){e.preventDefault()},select:function(e,t){this.setLines(t.item.lines)}})}},{key:"render",value:function(){var e,t,n,a,i=this,o=x.default.getters["lang/default"],r=x.default.getters["lang/fallback"],c="xe_lang_preprocessor://lang/seq/"+this.seq,u=this.getValueFromLinesWithLocale(o.code)||"",d=this.multiline?"textarea":"text",p=this.multiline?'<input type="hidden" name="'.concat(c+"/multiline",'" value="true" />'):"",f=this.getEditor(c,o.code,u),g="";s()(r).call(r,(function(e,t){var n,a=i.getValueFromLinesWithLocale(e.code)||"",o=i.getEditor(c,e.code,a);g+=['<div key="'.concat(e.code,'" class="input-group">'),"".concat(o),'<span class="input-group-addon">',l()(n='<span class="flag-code"><i class="'.concat(e.code+" xe-flag",'"></i>')).call(n,e.nativeName,"</span>"),"</span>","</div>"].join("\n")}));var h=['<div class="'.concat(d,'">'),'<input type="hidden" name="xe_use_request_preprocessor" value="Y"/>',l()(e='<input type="hidden" name="'.concat(c+"/name",'" value="')).call(e,this.name,'" />'),l()(t='<input type="hidden" name="'.concat(c+"/key",'" value="')).call(t,this.langKey||"",'" />'),"".concat(p),l()(n='<input type="hidden" name="'.concat(this.name,'" value="')).call(n,this.langKey||"",'" />'),'<div key="'.concat(o.code,'" class="input-group">'),"".concat(f),'<span class="input-group-addon">',l()(a='<span class="flag-code"><i class="'.concat(o.code+" xe-flag",'"></i>')).call(a,o.nativeName,"</span>"),"</span>","</div>",'<div class="sub">'.concat(g,"</div>"),"</div>"].join("\n");this.$wrapper.html(h)}},{key:"setLines",value:function(e){var t,n=this;this.lines=e,i()(t=window.XE.Lang.locales).call(t,(function(e){var t="#input-"+n.seq+"-"+e.code,a=n.getValueFromLinesWithLocale(e.code);y()(t).val(a)}))}},{key:"getValueFromLinesWithLocale",value:function(e){for(var t=this.lines,n=t.length,a={};n--;)if((a=t[n]).locale==e)return a.value}},{key:"getEditor",value:function(e,t,n){var a,i,o=null,r="input-"+this.seq+"-"+t,s=e+"/locale/"+t;this.multiline?o=y()(l()(a='<textarea class="form-control" id="'.concat(r,'" name="')).call(a,s,'"></textarea>')).text(n).attr("data-origin-value",n):o=y()(l()(i='<input type="text" class="form-control" id="'.concat(r,'" name="')).call(i,s,'" />')).attr("value",n).attr("data-origin-value",n);return o.prop("outerHTML")}}]),e}(),w=0;window.langEditorBoxRender=function(e,t){if("obj"===t){var n=e.name,a=e.langKey,i=e.multiline,o=e.lines,l=e.autocomplete;e.target;new b({$wrapper:y()(e.target),seq:w,name:n,langKey:a,multiline:i,lines:o,autocomplete:l})}else{var r=e.data("name"),s=e.data("lang-key"),c=e.data("multiline"),u=e.data("lines"),d=e.data("autocomplete");new b({$wrapper:e,seq:w,name:r,langKey:s,multiline:c,lines:u,autocomplete:d})}w++},y()((function(){!function(){var e=[],t=[];y()(".lang-editor-box").length>0&&(y()(".lang-editor-box").each((function(n,a){var i=y()(this),o=i.data("name"),l=i.data("lang-key"),r=i.data("multiline"),s=i.data("lines"),c=i.data("autocomplete");l&&e.push(l),t.push({name:o,langKey:l,multiline:r,lines:s,autocomplete:c,target:i[0]})})),e.length>0?window.XE.ajax({type:"get",dataType:"json",url:x.default.getters["router/origin"]+"/lang/lines/many",data:{keys:e},success:function(e){y.a.each(e,(function(e,n){y.a.each(t,(function(){e===this.langKey&&(this.lines=n)}))})),y.a.each(t,(function(){window.langEditorBoxRender(this,"obj")}))}}):y.a.each(t,(function(){window.langEditorBoxRender(this,"obj")})));window.XE.Validator.put("langrequired",(function(e,t){var n,a=u()(n=e.closest(".lang-editor-box")).call(n,"input[name^='xe_lang_preprocessor']:not(:hidden):first"),i=a.val(),o=e.closest(".lang-editor-box").data("valid-name")||e.closest(".lang-editor-box").data("name");return""!==i||(window.XE.Validator.error(a,window.XE.Lang.trans("validation.required",{attribute:o})),!1)}))}()})),y()(document).on("focus",".lang-editor-box input, textarea",(function(){var e=y()(this).closest(".lang-editor-box"),t=u()(e).call(e,".sub");y()(t).is(":hidden")&&y()(t).slideDown("fast")}))},6:function(e,t,n){e.exports=n(1)(17)},7:function(e,t,n){e.exports=n(1)(8)}});