import { createApp, watch, ref, nextTick } from 'vue'
import { nanoid } from 'nanoid'
import MessageComponent from './Message.vue'
import { useTimeout } from '../../hooks'
import { MessageTypes } from './message'

import type { App } from 'vue'
import type { 
  MessageOptions, 
  MessageIns, 
  MessageFn, 
  MessageTypesValue,
} from './message'

const instances = ref<MessageIns[]>([])
const DURATION = 3000

// @ts-ignore
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
    useTimeout(() => instances.value.splice(idx, 1), instances.value[idx]?._ad)
  }

  const removeMessage = (app: App<Element>, ins: MessageIns, duration = DURATION) => {
    useTimeout(() => {
      app.unmount()
      instances.value.splice(instances.value.indexOf(ins), 1)
    }, duration + ins._ad)
  }

  const setOffset = (ins: MessageIns) => {
    const index = instances.value.indexOf(ins)
    nextTick(() => {
      const { _height, _gap } = ins
      ins._setOffset(index * (_height + _gap) + _gap)
    })
  }

  return renderMessage(typeof ops === 'object' ? ops : { type: 'info', content: ops })
}

/*** 静态方法 */
Object.values(MessageTypes).forEach(t => {
  const type = t as MessageTypesValue
  Message[type] = (content) => Message({ type , content, duration: DURATION })
})

Message.closeAll = () => { 
  instances.value.forEach(ins => ins.close())
  instances.value = []
}