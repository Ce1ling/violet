import { ObjectDirective, DirectiveBinding, unref } from 'vue'

import type { OptionsExpose } from '../../components/Select/Options/options'


type El = HTMLElement | null

let downEl: El = null
let excludeEl: El = null

function handleMouseDown(el: HTMLElement, binding: DirectiveBinding) {
  return ({ target }: MouseEvent) => {
    downEl = target as HTMLElement
    document.addEventListener('mouseup', handleMouseUp(el, binding))
  }
}
function handleMouseUp(el: HTMLElement, binding: DirectiveBinding) {
  return (e: MouseEvent) => {
    const t = e.target as Node
    if (excludeEl?.contains(t)) {
      binding.value(true, downEl, t)
      return
    }
    if (!el.contains(t)) {
      binding.value(false, downEl, t)
    }
  }
}

export const clickOutside: ObjectDirective = {
  mounted(el, binding) {
    document.addEventListener('mousedown', handleMouseDown(el, binding))
  },
  updated(_, binding) {
    excludeEl = unref((binding.arg as unknown as OptionsExpose).optionsEl)
  },
  beforeUnmount(el, binding) {
    document.removeEventListener('mousedown', handleMouseDown(el, binding))
    document.removeEventListener('mouseup', handleMouseUp(el, binding))
  }
}