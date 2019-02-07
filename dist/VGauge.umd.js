(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('gaugeJS/dist/gauge.min')) :
  typeof define === 'function' && define.amd ? define(['exports', 'gaugeJS/dist/gauge.min'], factory) :
  (global = global || self, factory(global.VGauge = {}, global.gauge_min));
}(this, function (exports, gauge_min) { 'use strict';

  //
  var script = {
    name: 'VGauge',
    props: {
      decimalPlace: {
        type: Number,
        default: 0
      },
      gaugeValueClass: {
        type: String,
        default: ""
      },
      top: {
        type: Boolean,
        default: false
      },
      maxValue: {
        type: Number,
        default: 100
      },
      minValue: {
        type: Number,
        default: 0
      },
      options: {
        type: Object,
        default: function() {
          return {
            angle: 0.15,
            lineWidth: 0.44,
            radiusScale: 1,
            pointer: {
              length: 0.6,
              strokeWidth: 0.035,
              color: "#000000"
            },
            limitMax: false,
            limitMin: false,
            colorStart: "#6FADCF",
            colorStop: "#8FC0DA",
            strokeColor: "#E0E0E0",
            generateGradient: true,
            highDpiSupport: true
          };
        }
      },
      animationSpeed: {
        type: Number,
        default: 10
      },
      initialValue: {
        type: Number,
        default: 0
      },
      value: {
        type: Number,
        default: 50
      }
    },
    data: function data() {
      return {
        gauge: null
      };
    },
    mounted: function mounted() {
      this.initializeGauge();
    },
    watch: {
      value: function(newVal) {
        this.gauge.set(newVal);
      }
    },
    methods: {
      initializeGauge: function initializeGauge() {
        this.gauge = new gauge_min.Gauge(this.$refs.gauge);
        this.gauge.maxValue = this.maxValue;
        this.gauge.setMinValue(this.minValue);
        this.gauge.animationSpeed = this.animationSpeed;
        this.gauge.setOptions(this.options);
        this.gauge.setTextField(
          document.getElementById("gauge-value"),
          this.decimalPlace
        );
        this.gauge.set(this.value);
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.top)?_c('p',{class:_vm.gaugeValueClass,attrs:{"id":"gauge-value"}}):_vm._e(),_vm._v(" "),_c('canvas',{ref:"gauge",attrs:{"id":"gauge"}}),_vm._v(" "),(!_vm.top)?_c('p',{class:_vm.gaugeValueClass,attrs:{"id":"gauge-value"}}):_vm._e()])};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = undefined;
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var component = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
    if (install.installed) { return; }
    install.installed = true;
    Vue.component('VGauge', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
    install: install,
  };

  // To auto-install when vue is found
  /* global window global */
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }
  if (GlobalVue) {
    GlobalVue.use(plugin);
  }

  // Inject install function into component - allows component
  // to be registered via Vue.use() as well as Vue.component()
  component.install = install;

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
