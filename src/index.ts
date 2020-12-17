import { DirectiveBinding, Directive } from 'vue';

const onMounted = (el: HTMLInputElement, binding: DirectiveBinding) => {
  if (binding.value) {
    el.focus();
  } else {
    el.blur();
  }
}
console.log(33)
const onUpdated = (el: HTMLInputElement, binding: DirectiveBinding) => {
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

export const vue3Focus: Directive = {
  mounted: onMounted,
  updated: onUpdated,
};
