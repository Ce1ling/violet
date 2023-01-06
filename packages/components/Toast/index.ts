import { h, render } from 'vue'
import ToastComponent from './Toast.vue'

export type Options = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  content: string
  duration: number
}
let n = 0
const toastList = []
export const Toast = (ops: Options | string) => {
  // 传递了配置对象
  if (typeof ops === 'object') {
    const { content, duration } = ops
    const vNode = h(ToastComponent, {
      innerText: content,
    })
    render(vNode, document.body)
    setTimeout(() => {
      render(null, document.body)
    }, duration ? 1500 : duration)
  } else {
    // 仅传递一个字符串
    const vNode = h(ToastComponent, {
      // innerText: ops,
      yPosition: (n += 20) + 'px'
    })
    toastList.push(vNode)
    console.log('list', toastList);
    render(vNode, document.body)
    setTimeout(() => {
      // render(null, document.body)
      n = 0
      console.log('timeout list', toastList);
    }, 1500)
  }
}