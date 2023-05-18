import { createApp, watch, ref } from 'vue'
import ToastComponent from './Toast.vue'
import { useTimeout } from '../../hooks'

import type { App } from 'vue'
import type { ToastOptions, ToastIns, ToastFn } from './toast'

const instances = ref<ToastIns[]>([])

export const Toast: ToastFn = (ops) => {
  const renderToast = (ops: ToastOptions) => {
    const app = createApp(ToastComponent, { 
      ...ops, 
      _id: Math.random().toString().slice(2), 
      close 
    })
    const fragment = document.createDocumentFragment()
    // @ts-ignore
    const ins = app.mount(fragment)
    instances.value.push(ins)
    document.body.appendChild(fragment)
    
    setOffset(ins)
    // 请勿在 setOffset 之前 watch
    watch(instances.value, () => setOffset(ins))

    if (ops.duration !== 0) {
      removeToast(app, ins, ops.duration)
    }

    return ins
  }

  /** 手动关闭方法 */
  const close = (id: string) => {
    const result = instances.value.findIndex(ins => ins._id === id)
    useTimeout(() => instances.value.splice(result, 1), 300)
  }

  const removeToast = (app: App<Element>, ins: ToastIns, duration = 3300) => {
    useTimeout(() => {
      app.unmount()
      instances.value.splice(instances.value.indexOf(ins), 1)
    }, duration)
  }

  const setOffset = (ins: ToastIns) => {
    const index = instances.value.indexOf(ins)
    useTimeout(() => {
      const { height, gap } = ins
      ins.setOffset(index * (height + gap) + gap)
    }, 0)
  }

  return renderToast(typeof ops === 'object' ? ops : { type: 'info', content: ops })
}

/**
 * 静态方法
 * TODO: 通过循环添加静态方法会导致 ToastFn 无法找到具体实现导致 TS 报错
 */
Toast.primary = (str: string) => Toast({ type: 'primary', content: str })
Toast.success = (str: string) => Toast({ type: 'success', content: str })
Toast.info = (str: string) => Toast({ type: 'info', content: str })
Toast.warning = (str: string) => Toast({ type: 'warning', content: str })
Toast.danger = (str: string) => Toast({ type: 'danger', content: str })
