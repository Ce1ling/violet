import { h, render } from 'vue'
import ToastVNode from './Toast.vue'

export type Options = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  content: string
  duration: number
}
let n = 0
export const Toast = (ops: Options | string) => {
  // 传递了配置对象
  if (typeof ops === 'object') {
    const { content, duration } = ops
    const vNode = h(ToastVNode, {
      innerText: content,
    })
    render(vNode, document.body)
    setTimeout(() => {
      render(null, document.body)
    }, duration ? 1500 : duration)
  } else {
    // 仅传递一个字符串
    const vNode = h(ToastVNode, {
      innerText: ops,
      yPosition: (n += 20) + 'px'
    })
    render(vNode, document.body)
    setTimeout(() => {
      render(null, document.body)
      n = 0
    }, 1500)
  }
}