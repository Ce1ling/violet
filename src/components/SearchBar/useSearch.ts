import { h, render } from 'vue'
import SearchModal from './searchModal.vue'

const container = document.createElement('div')
let hasExist = false

const handleSearchClose = (e: KeyboardEvent) => {
  if (e.key === 'Escape') { close() }
}

export const show = () => {
  if (hasExist) { return }
  hasExist = true
  const vNode = h(SearchModal)
  render(vNode, container)
  document.body.appendChild(container)
  document.body.classList.add('hidden')
  window.addEventListener('keydown', handleSearchClose)
}

export const close = () => {
  hasExist = false
  render(null, container)
  document.body.removeChild(container)
  document.body.classList.remove('hidden')
  window.removeEventListener('keydown', handleSearchClose)
}