import { createApp, watch, ref } from 'vue'
import ToastComponent from './Toast.vue'
import { types } from './types'
import { useTimeout } from '../../hooks/useTimeout'

import type { App } from 'vue'
import type { Options, Ins } from './types'


const instances = ref<Ins[]>([])

export const Toast = (ops: Options | string) => {
  /** 渲染 Toast */
  const renderToast = (ops: Options) => {
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
    /** 请勿在 setOffset 之前 watch */
    watch(instances.value, () => setOffset(ins))
    if (ops.duration !== 0) {
      removeToast(app, ins, ops.duration)
    }
    return ins
  }

  /** 手动关闭 Toast */
  const close = (id: string) => {
    const result = instances.value.findIndex(ins => ins._id === id)
    useTimeout(() => instances.value.splice(result, 1), 300)
  }

  /** 移除 Toast */
  const removeToast = (app: App<Element>, ins: Ins, duration = 3300) => {
    useTimeout(() => {
      app.unmount()
      instances.value.splice(instances.value.indexOf(ins), 1)
    }, duration)
  }

  /** 设置偏移量 */
  const setOffset = (ins: Ins) => {
    const index = instances.value.indexOf(ins)
    useTimeout(() => {
      const { height, gap } = ins
      ins.setOffset(index * (height + gap) + gap)
    }, 0)
  }

  return renderToast(typeof ops === 'object' 
    ? ops 
    : { type: 'info', content: ops })
}

// 静态方法
Object.values(types).forEach(type => {
  Toast[type] = (str: string) => Toast({ 
    type: type as Options['type'], 
    content: str 
  })
})
