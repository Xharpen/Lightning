/** @name jQuery widgetGenerator plugin */
;(function (exports, XE, $) {
  'use strict'

  var widgetForm = '#widgetForm'
  var skinForm = '#skinForm'
  var selectWidget = '.__xe_select_widget'
  var selectWidgetSkin = '.__xe_select_widgetskin'
  var widgetCodeSel = '.__xe_widget_code'
  var widgetInputs = '.widget-inputs'
  var setupCode = '.__xe_setup_code'
  var generateCode = '.__xe_generate_code'
  var _this


  $.fn.serializeFiles = function() {
      var form = $(this),
          formData = new FormData(),
          formParams = form.serializeArray();




      $.each(form.find('input[type="file"]'), function(i, tag) {
        $.each($(tag)[0].files, function(i, file) {
          // get File Object
          // var fileObject = file;
          // var newObject  = {
          //   'lastModified'     : fileObject.lastModified,
          //   'lastModifiedDate' : fileObject.lastModifiedDate,
          //   'name'             : fileObject.name,
          //   'size'             : fileObject.size,
          //   'type'             : fileObject.type
          // };
          formData.append(tag.name, file);
        });
      });

      $.each(formParams, function(i, val) {
        formData.append(val.name, val.value);
      });




      // if(val.name.indexOf('@') == -1) {
      //   console.log(val.name);
      //   console.log($('.form-col-logo_image .' + val.name));
      // }

      //
      // '<li class="xeuio-ml__preview-item">',
      //   '<input type="hidden" class="xeuio-ml__field" name="logo_image" value="e77b338a-9569-4875-8288-6dbba86b8a35">',
      //   '<img class="xeuio-ml__preview-image" src="https://sparkweb.co.kr/storage/app/public/media/public/media_library/e7/7b/20210212210613554d614c00fa404847bd5e4c197af9754734aacc.png">',
      //   '<button type="button" class="xeuio-ml__button xeuio-ml__remove">삭제</button>',
      // '</li>'
      // form.find('.xeuio-medialibrary')

      return formData;
    };


  // @deprecated ???
  $.fn.serializeObject = function () {
    var o = {}
    var a = this.serializeArray()

    console.log(a);

    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]]
        }
        o[this.name].push(this.value || '')


      } else {
        o[this.name] = this.value || ''
      }
    })

    return o;
  }

  var _applyPlugins = function () {
    var isBinding = false
    $.fn.widgetGenerator = function (opt, cb) {
      var _this = this

      var _bindEvents = function () {
        _this.on('change', selectWidget, function () {
          var widget = this.value
          var url = $('.widget-skins').data('url')
          var code = $('.widget-skins').data('code')

          url += '?widget=' + widget
          if (typeof code !== 'undefined') {
            url += '&code=' + code
          }

          $('.widget-form').empty()

          if (widget) {
            XE.page(url, '.widget-skins')
          } else {
            $('.widget-skins').empty()
            $('.__xe_widget_code').val('')
          }
        })

        _this.on('change', selectWidgetSkin, function () {
          var widget = this.value

          if (widget !== 'select-skin') {
            var url = $(this).find('option:selected').data('url')
            XE.page(url, '.widget-form')
          }
        })

        _this.on('click', setupCode, function () {
          var code = $(widgetCodeSel).val()
          var url = $(widgetInputs).data('url')

          WidgetCode.reset({
            url: url,
            target: '.widget-inputs',
            code: code
          })
        })

        _this.on('click', generateCode, function () {
          WidgetCode.generate({
            widgetForm: '#widgetForm',
            skinForm: '#skinForm'
          }, cb)
        })

        isBinding = true
      }

      if (!isBinding) {
        _bindEvents()
      }

      switch (typeof opt) {
        case 'string':

          // switch
          switch (opt) {
            case 'code':
              return _this.find(widgetCodeSel).val()
              break

            case 'generate':
              WidgetCode.generate({
                widgetForm: widgetForm,
                skinForm: skinForm
              }, cb)
              break

            case 'data':
              return $(widgetForm).serializeObject()
              break
          }

          break
      }

      this.generate = function (cb) {
        WidgetCode.generate({
          widgetForm: widgetForm,
          skinForm: skinForm
        }, cb)
      }

      this.reset = function (code, callback) {
        WidgetCode.reset({
          url: $(widgetInputs).data('url'),
          code: code,
          target: widgetInputs,
          callback: callback
        })
      }

      return this
    }
  }

  var WidgetCode = (function () {
    return {
      /**
       * @private
       * @param {object} options
       * <pre>
       *     - {string} widgetForm selector
       *     - {string} skinForm selector
       * </pre>
       * @param {function} cb callback
       * */
      generate: function (options, cb) {
        var $form = $(options.widgetForm)
        var data = $form.serialize()

        XE.ajax({
          url: $form.attr('action'),
          type: $form.attr('method'),
          cache: false,
          data: data,
          dataType: 'json',
          success: function (data) {
            $('.__xe_widget_code').val(data.code)

            if (cb) {
              cb(data)
            }

            $('.widget-form').empty()
            $(selectWidget).find('option:eq(0)').prop('selected', 'selected').trigger('change')
          },

          error: function (data) {
            XE.toast(data.type, data.message)
          }
        })
      },
      /**
       * @private
       * @param {object} options
       * <pre>
       *     - {string} url
       *     - {string} target selector
       *     - {string} code
       * </pre>
       * */
      reset: function (options) {
        var url = options.url
        var code = options.code
        var target = options.target

        XE.page(url, target, {
          type: 'post',
          data: {
            code: code
          }
        }, function () {
          // console.log(url, code, target);
          var _code = JSON.parse(code);

          for(var key in _code) {
            if(key.indexOf('@') === -1) {
              if($('.form-col-'+key).has('.xeuio-medialibrary').length > 0) {
                  var _key = key;
                  var _html =['<li class="xeuio-ml__preview-item">',
                    '<input type="hidden" class="xeuio-ml__field" name="',key,'" value="',_code[key],'">',
                    '<img class="xeuio-ml__preview-image" src="/file/',_code[key],'">',
                    '<button type="button" class="xeuio-ml__button xeuio-ml__remove">삭제</button>',
                    '</li>'].join('');
                  setTimeout(function () {
                    $('.form-col-'+_key+' .xeuio-ml__preview').prepend(_html);
                  });
              }
            }
          }
          options.callback();
        })
      },

      init: function () {
        _this = this

        _applyPlugins()

        return this
      }
    }
  })().init()
})(window, window.XE, window.jQuery)
