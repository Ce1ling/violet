import { h, render } from 'vue'
import ToastVNode from './Toast.vue'

export type Options = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  content: string
  time: number
}

export const Toast = (ops: Options | string) => {
  if (typeof ops === 'object') {
    const { type, content, time } = ops
    const vNode = h(ToastVNode, {
      innerText: content
    })
    render(vNode, document.body)
    setTimeout(() => {
      render(null, document.body)
    }, time ? 1500 : time);
  } else {
    const vNode = h(ToastVNode, {
      innerText: ops
    })
    render(vNode, document.body)
    setTimeout(() => {
      render(null, document.body)
    }, 1500);
  }
}