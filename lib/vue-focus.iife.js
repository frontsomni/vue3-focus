var vue3Focus = function (exports) {
  'use strict';

  var onMounted = function (el, binding) {
    if (binding.value) {
      el.focus();
    } else {
      el.blur();
    }
  };

  var onUpdated = function (el, binding) {
    if (binding.modifiers.lazy) {
      if (Boolean(binding.value) === Boolean(binding.oldValue)) {
        return;
      }
    }

    if (binding.value) {
      el.focus();
    } else {
      el.blur();
    }
  };

  var vue3Focus = {
    mounted: onMounted,
    updated: onUpdated
  };
  exports.vue3Focus = vue3Focus;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({});
