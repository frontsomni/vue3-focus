// import Vue from 'vue'
interface IBinding {
  [key: string]: any
}

const onMounted = (el: HTMLInputElement, binding: IBinding) => {
  if (binding.value) {
    el.focus()
  } else {
    el.blur()
  }
}

const onUpdated = (el: HTMLInputElement, binding: IBinding) => {
  if (binding.modifiers.lazy) {
    if (Boolean(binding.value) === Boolean(binding.oldValue)) {
      return
    }
  }

  if (binding.value) {
    el.focus()
  } else {
    el.blur()
  }
}

export const vue3Focus = {
  mounted: onMounted,
  updated: onUpdated
}