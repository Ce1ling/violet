import { createApp } from 'vue'
import type { App } from 'vue'
import ToastComponent from './Toast.vue'
import { types } from './types'
import type { Options } from './types'


export const Toast = (ops: Options | string) => {
  /** 渲染 Toast */
  const renderToast = (ops: Options) => {
    const app = createApp(ToastComponent, ops)
    const fragment = document.createDocumentFragment()
    app.mount(fragment)
    document.body.appendChild(fragment)

    removeToast(app, ops.duration)
  }

  /** 移除 Toast */
  const removeToast = (app: App<Element>, duration: number = 3300) => {
    let timer: number | null = window.setTimeout(() => {
      app.unmount()
      clearTimeout(timer as number)
      timer = null
    }, duration);
  }

  if (typeof ops === 'object') {
    renderToast(ops)
  } else {
    renderToast({ type: 'info', content: ops })
  }
}

// 静态方法
Object.values(types).forEach(type => {
  Toast[type] = (str: string) => Toast({ type: type as Options['type'], content: str })
})