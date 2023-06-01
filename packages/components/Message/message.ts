import type { ComponentPublicInstance, Ref } from 'vue'


export interface MessageTypes {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
}

export const messageTypes: MessageTypes = { 
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}

export interface MessageOptions {
  type: keyof MessageTypes
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
}

export interface MessageExpose {
  _id: string
  _ad: number
  _height?: Ref<number | undefined>
  _gap?: Ref<number | undefined>
  _setOffset: (value: number) => void 
  close: () => void
}

export interface MessageIns {
  [k: string]: any
}

export type MessageMethods = {
  [K in keyof MessageTypes]: (str: string) => ComponentPublicInstance
}

export interface MessageFn extends MessageMethods {
  (options: MessageOptions | string): ComponentPublicInstance
}

export interface MessageProps {
  type: MessageOptions['type']
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
  /** private props */
  _id: string
  close: (id: string) => void
}