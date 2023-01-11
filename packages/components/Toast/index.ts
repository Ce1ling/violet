import { h, render, onUnmounted } from 'vue'
import ToastComponent from './Toast.vue'
import { types } from './types'
import type { Options } from './types'



export const Toast = (ops: Options | string) => {
  const renderToast = (ops: Options) => {
    const vNode = h(ToastComponent, ops)
    render(vNode, document.body)

    const timer = setTimeout(() => {
      render(null, document.body)
    }, ops.duration ? (ops.duration + 300) : 3300)

    onUnmounted(() => {
      clearTimeout(timer)
    })
  }

  // 传递了配置对象
  if (typeof ops === 'object') {
    renderToast(ops)
  } else {
    // 仅传递一个字符串
    renderToast({ type: 'info', content: ops })
  }
}

// 静态方法
Object.values(types).forEach(type => {
  Toast[type] = (str: string) => Toast({ type: type as Options['type'], content: str })
})