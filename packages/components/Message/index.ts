import { createApp, watch, ref } from 'vue'
import MessageComponent from './Message.vue'
import { useTimeout } from '../../hooks'
import { nanoid } from 'nanoid'

import type { App } from 'vue'
import type { MessageOptions, MessageIns, MessageFn } from './message'

const instances = ref<MessageIns[]>([])
const DURATION = 3000

export const Message: MessageFn = (ops) => {
  const renderMessage = (ops: MessageOptions) => {
    const app = createApp(MessageComponent, { 
      ...ops, 
      _id: nanoid(), 
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
      removeMessage(app, ins, ops.duration)
    }

    return ins
  }

  /** 手动关闭方法 */
  const close = (id: string) => {
    const idx = instances.value.findIndex(ins => ins._id === id)
    useTimeout(() => instances.value.splice(idx, 1), instances.value[idx]._ad)
  }

  const removeMessage = (app: App<Element>, ins: MessageIns, duration = DURATION) => {
    useTimeout(() => {
      app.unmount()
      instances.value.splice(instances.value.indexOf(ins), 1)
    }, duration + ins._ad)
  }

  const setOffset = (ins: MessageIns) => {
    const index = instances.value.indexOf(ins)
    useTimeout(() => {
      const { _height, _gap } = ins
      ins._setOffset(index * (_height + _gap) + _gap)
    }, 0)
  }

  return renderMessage(typeof ops === 'object' ? ops : { type: 'info', content: ops })
}

/**
 * 静态方法
 * TODO: 通过循环添加静态方法会导致 MessageFn 无法找到具体实现导致 TS 报错
 */
Message.primary = (str: string) => Message({ type: 'primary', content: str, duration: DURATION })
Message.success = (str: string) => Message({ type: 'success', content: str, duration: DURATION })
Message.info = (str: string) => Message({ type: 'info', content: str, duration: DURATION })
Message.warning = (str: string) => Message({ type: 'warning', content: str, duration: DURATION })
Message.danger = (str: string) => Message({ type: 'danger', content: str, duration: DURATION })
