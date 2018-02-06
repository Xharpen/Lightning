webpackJsonp([4],{60:function(t,e,a){a(61),t.exports=a(62)},61:function(t,e,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};+function(t){var e=function e(a,n){this.$element=t(a),this.options=t.extend({},e.DEFAULTS,n),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var a=this.$parent&&this.$parent.find("> .panel > .in");if(a&&a.length){var n=a.data("bs.collapse");if(n&&n.transitioning)return;a.collapse("hide"),n||a.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[i]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var o=t.camelCase(["scroll",i].join("-"));this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[i](this.$element[0][o])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var a=this.dimension();this.$element[a](this.$element[a]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var n=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!t.support.transition)return n.call(this);this.$element[a](0).one(t.support.transition.end,t.proxy(n,this)).emulateTransitionEnd(350)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var a=t.fn.collapse;t.fn.collapse=function(a){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),o=t.extend({},e.DEFAULTS,i.data(),"object"==(void 0===a?"undefined":n(a))&&a);s||i.data("bs.collapse",s=new e(this,o)),"string"==typeof a&&s[a]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=a,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var a,n=t(this),i=n.attr("data-target")||e.preventDefault()||(a=n.attr("href"))&&a.replace(/.*(?=#[^\s]+$)/,""),s=t(i),o=s.data("bs.collapse"),l=o?"toggle":n.data(),r=n.attr("data-parent"),d=r&&t(r);o&&o.transitioning||(d&&d.find('[data-toggle=collapse][data-parent="'+r+'"]').not(n).addClass("collapsed"),n[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(l)})}(window.jQuery)},62:function(t,e,a){"use strict";!function(t){function e(e,a,n,i,s,o){var l=this;return this.key=a,this.elem=e,this.callback=n,this.withForm=i,this.container=s,this.apiUrl=o,this.interval=null,this.draftId=null,this.component=null,this.$component=t(),this.componentName="",this.uid=null,t(this.elem).attr("name")&&""!=t(this.elem).attr("name")?(this.init(),this.bindEvents(),this.load({key:a},function(e){e.forEach(function(e,a){1===e.is_auto&&(t(l.elem).val(e.val),l.callback(e))})}),this):void console.error("Must set 'name' attribute ")}e.prototype={init:function(){this.uid=this._getUid(),this.appendComponent()},_getUid:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},bindEvents:function(){var e=this;t(this.elem).on("input.draft",function(){e.saveEventHandler()}),e.$component.on("click",".draft_title",function(a){a.preventDefault();var n=t(this),i=n.data("type"),s=t(this).data("item");switch(e.onApply(s),i){case"modal":e.$component.xeModal("hide");break;case"collapse":e.$component.collapse("hide").find(".panel-body").empty()}}),e.$component.on("click",".xe-draftBtnCloseModal",function(){e.$component.xeModal("hide")}),e.$component.on("click",".btn_draft_delete",function(a){a.preventDefault();var n=t(this),i=n.data("id");e.reqDelete(i,function(){n.closest("li").remove()})}),t(e.elem).closest("form").on("submit",function(t){e.deleteAuto(e.autoDraftId)})},toggle:function(e){var a=this;switch(this.componentName){case"modal":!e&&a.$component.hasClass("in")?a.$component.xeModal("hide"):a.load({key:a.key},function(t){var e='<div class="draft_save_list">';e+="<ul>",t.forEach(function(t,a){e+="<li>",e+="<a href='#' class='draft_title' data-item='"+JSON.stringify(t)+'\' data-type="modal">'+t.val+"</a>",e+='<div class="draft_info">',1==t.is_auto?e+='<span class="draft_state">'+XE.Lang.trans("xe::autoSave")+"</span>":e+='<span class="draft_state v2">'+XE.Lang.trans("xe::draftSave")+"</span>",e+='<span class="draft_date">'+t.created_at.substr(0,16).replace(/-/g," ")+"</span>",e+='<a href="#" class="btn_draft_delete" data-id="'+t.id+'"><i class="xi-close"></i></a>',e+="</div>",e+="</li>"}),e+="</ul>",e+="</div>",a.$component.find(".xe-modal-body").html(e),a.$component.xeModal("show")});break;case"collapse":!e&&a.$component.hasClass("in")?a.$component.collapse("hide"):a.load({key:a.key},function(e){var n='<div class="draft_save_list">';n+="<ul>",e.forEach(function(e,a){n+="<li>",n+="<a href='#' class='draft_title' data-item='"+JSON.stringify(e)+'\' data-type="collapse">'+t(t.parseHTML(e.val)).text()+"</a>",n+='<div class="draft_info">',1==e.is_auto?n+='<span class="draft_state">'+XE.Lang.trans("xe::autoSave")+"</span>":n+='<span class="draft_state v2">'+XE.Lang.trans("xe::draftSave")+"</span>",n+='<span class="draft_date">'+e.created_at.substr(0,16).replace(/-/g," ")+"</span>",n+='<a href="#" class="btn_draft_delete" data-id="'+e.id+'"><i class="xi-close"></i></a>',n+="</div>",n+="</li>"}),n+="</ul>",n+="</div>",a.$component.find(".panel-body").html(n),a.$component.collapse("show")})}},getModalTemplate:function(){return['<div class="xe-modal fade" id="xe-draftModal">','<div class="xe-modal-dialog">','<div class="xe-modal-content">','<div class="xe-modal-header">','<button type="button" class="btn-close xe-draftBtnClose" data-dismiss="xe-modal" aria-label="Close"><i class="xi-close"></i></button>','<strong class="xe-modal-title"></strong>',"</div>",'<div class="xe-modal-body"></div>','<div class="xe-modal-footer">','<button type="button" class="xe-btn xe-btn-default" data-dismiss="xe-modal">Close</button>',"</div>","</div>","</div>","</div>"].join("\n")},getCollapseTemplate:function(){return['<div class="panel panel-default">','<div class="panel-body"></div>',"</div>"].join("\n")},appendComponent:function(){var e=this,a=t("<div>");if(t(this.container).length<1)t(this.elem).closest("form").after(a.html(this.getModalTemplate())),this.componentName="modal",this.$component=t("#xe-draftModal");else{this.componentName="collapse",this.$component=t(this.container);var n=this._collapseClass();this.$component.addClass([n,"collapse"].join(" ")).html(a.html(e.getCollapseTemplate()))}},onApply:function(e){var n=this;this.setId(e.id);var i=e.etc;i[t(n.elem).attr("name")]=e.val,a.init(t(n.elem).closest("form")[0],i),this.callback(i)},_collapseClass:function(){return"__xe_draft_collapse_"+this.uid},saveEventHandler:function(){var t=this;this.intervalClear(),this.interval=setTimeout(function(){t.setAuto(),t.intervalClear()},3e3)},intervalClear:function(){this.interval&&clearTimeout(this.interval)},draftSet:function(){""!=t.trim(t(this.elem).val())&&(null==this.draftId?this.reqPost():this.reqPut())},reqPost:function(){t.ajax({url:this.apiUrl.draft.add,type:"post",dataType:"json",data:this.getReqSerialize()+"&key="+this.key,success:function(t){null===t.draftId?this.unsetId():this.setId(t.draftId)}.bind(this)})},reqPut:function(){t.ajax({url:this.apiUrl.draft.update+"/"+this.draftId,type:"post",dataType:"json",data:this.getReqSerialize(),success:function(e){var a=this;null===e.draftId&&(this.$component.find("li > a").each(function(){var e=t(this),n=e.data("item");if(n.id===a.draftId){var i=t(a.elem).val();n.val=i,n.etc.content=i,e.data("item",n).text(t(t.parseHTML(i)).text())}}),this.unsetId())}.bind(this)})},setAuto:function(){t.ajax({url:this.apiUrl.auto.set,type:"post",data:this.getReqSerialize()+"&key="+this.key})},deleteAuto:function(e){var e=e||this.key;e&&t.ajax({url:this.apiUrl.auto.unset,type:"post",data:"key="+e})},load:function(e,a){var n=this;t.ajax({url:n.apiUrl.draft.list,type:"get",dataType:"json",data:e,success:function(t){t.forEach(function(t,e){1===t.is_auto&&(n.autoDraftId=t.id)}),a&&a(t)}})},getReqSerialize:function(){return(!0===this.withForm?t(this.elem).closest("form").serialize():[t(this.elem).attr("name"),t(this.elem).val()].join("="))+"&rep="+t(this.elem).attr("name")},reqDelete:function(e,a){var n=this;(e=e||this.draftId)&&(e==this.draftId&&(this.draftId=null),t.ajax({url:n.apiUrl.draft.delete+"/"+e,type:"post",dataType:"json",success:function(){a&&a()}}))},setId:function(t){this.draftId=t},unsetId:function(){this.draftId=null}};var a={init:function(t,e){for(var a in e){var n=a;e[a]instanceof Array?(n+="[]",this.multiple(t[n],e[a])):this.single(t[n],e[a])}},multiple:function(e,a){t(e).is(":checkbox")?t.each(a,function(t,a){this.toCheckbox(e,a)}.bind(this)):t.each(a,function(a,n){this.toInput(t(e).eq(a)[0],n)}.bind(this))},single:function(e,a){t(e).is(":checkbox")?this.toCheckbox(e,a):t(e).is(":radio")?this.toRadio(e,a):t(e).is("select")?this.toSelect(e,a):this.toInput(e,a)},toCheckbox:function(e,a){t(e).each(function(){if(t(this).attr("value")==a)return t(this).prop("checked",!0),!1})},toRadio:function(e,a){t(e).each(function(){if(t(this).attr("value")==a)return t(this).prop("checked",!0),!1})},toSelect:function(e,a){t(e).children().each(function(){if(t(this).attr("value")==a)return t(this).prop("selected",!0),!1})},toInput:function(e,a){t(e).is("input[type=hidden]")||t(e).val(a)}};t.fn.draft=function(a){var n={container:null,withForm:!1,callback:null};if(a=t.extend({},n,a),!a.key||!a.btnLoad||!a.btnSave)return console.error("must need key, btnLoad and btnSave"),!1;var i=new e(this,a.key,a.callback,a.withForm,a.container,a.apiUrl);return t(a.btnLoad).unbind("click.draft").bind("click.draft",function(t){t.preventDefault(),i.toggle(!0)}),t(a.btnSave).unbind("click.draft").bind("click.draft",function(t){t.preventDefault(),i.draftSet()}),i}}(jQuery)}},[60]);