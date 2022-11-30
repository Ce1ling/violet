import { h, render } from 'vue'
import SearchModal from './searchModal.vue'

const container = document.createElement('div')
let hasExist = false

export const show = () => {
  if (hasExist) { return }
  hasExist = true
  const vNode = h(SearchModal)
  render(vNode, container)
  document.body.appendChild(container)
  document.body.classList.add('hidden')
}

export const hidden = () => {
  hasExist = false
  render(null, container)
  document.body.removeChild(container)
  document.body.classList.remove('hidden')
}