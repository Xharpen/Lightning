webpackJsonp([8],{37:function(t,e,a){"use strict";var o=a(5),r=function(t){return t&&t.__esModule?t:{default:t}}(o);$("#btnCreateCategory").on("click",function(t){var e=t.target,a=$(e).closest("form").find('[name="id"]').val(),o={};if(!a)return void r.default.form($(e),"You must first create a category ID.");r.default.form.fn.clear($(e).closest("form")),o.categoryName=a,XE.ajax({type:"post",dataType:"json",data:o,url:storeCategoryInfo.url,success:function(t){var a=$(e).closest(".__xe_df_category");a.find('[name="category_id"]').val(t.id),a.find("button").hide(),a.append($("<a>").text(storeCategoryInfo.text).prop("target","_blank").prop("href","/settings/category/"+t.id))}})})}},[37]);