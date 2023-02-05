import { createApp, watch, ref } from 'vue'
import type { App } from 'vue'
import ToastComponent from './Toast.vue'
import { types } from './types'
import type { Options, Ins } from './types'

const instances = ref<Ins[]>([])

export const Toast = (ops: Options | string) => {
  /** 渲染 Toast */
  const renderToast = (ops: Options) => {
    const app = createApp(ToastComponent, ops)
    const fragment = document.createDocumentFragment()
    const ins = app.mount(fragment)
    instances.value.push(ins)
    document.body.appendChild(fragment)
    
    setOffset(ins)
    /** 请勿在 setOffset 之前 watch */
    watch(instances.value, () => setOffset(ins))
    removeToast(app, ins, ops.duration)
  }

  /** 移除 Toast */
  const removeToast = (app: App<Element>, ins: Ins, duration: number = 3300) => {
    let timer: number | null = window.setTimeout(() => {
      app.unmount()
      instances.value.splice(instances.value.indexOf(ins), 1)
      clearTimeout(timer as number)
      timer = null
    }, duration);
  }

  /** 设置偏移量 */
  const setOffset = (ins: Ins) => {
    const index = instances.value.indexOf(ins)
    let timer: number | null = window.setTimeout(() => {
      const { height, gap } = ins
      ins.setOffset(index * (height + gap) + gap)
      clearTimeout(timer as number)
      timer = null
    }, 0)
  }

  renderToast(typeof ops === 'object' 
    ? ops 
    : { type: 'info', content: ops })
}

// 静态方法
Object.values(types).forEach(type => {
  Toast[type] = (str: string) => Toast({ type: type as Options['type'], content: str })
})