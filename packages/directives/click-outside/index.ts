import type { ObjectDirective, DirectiveBinding } from 'vue'


let downEl: HTMLElement | null = null

function handleMouseDown(el: HTMLElement, binding: DirectiveBinding) {
  return ({ target }: MouseEvent) => {
    downEl = target as HTMLElement
    document.addEventListener('mouseup', handleMouseUp(el, binding))
  }
}
function handleMouseUp(el: HTMLElement, binding: DirectiveBinding) {
  return ({ target }: MouseEvent) => {
    if (!el.contains(target as Node)) {
      binding.value(downEl, target)
    }
  }
}

export const clickOutside: ObjectDirective = {
  mounted(el, binding) {
    document.addEventListener('mousedown', handleMouseDown(el, binding))
  },
  beforeUnmount(el, binding) {
    document.removeEventListener('mousedown', handleMouseDown(el, binding))
    document.removeEventListener('mouseup', handleMouseUp(el, binding))
  }
}