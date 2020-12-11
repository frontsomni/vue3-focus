const onMounted = (el: HTMLInputElement, binding) => {
  if (binding.value) {
    el.focus()
  } else {
    el.blur()
  }
}

const onUpdated = (el, binding) => {
  if (binding.modifiers.lazy) {
    if (Boolean(binding.value) === Boolean(binding.oldValue)) {
      return
    }
  }

  if (binding.value) el.focus();
  else el.blur();
}

const direcctive = {
  mounted: onMounted,
  updated: onUpdated
}

export default direcctive

export {
  direcctive as VueFocusDirective
}