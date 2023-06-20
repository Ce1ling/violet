import type { ComponentPublicInstance, Ref } from 'vue'


export enum MessageTypes {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  DANGER = 'danger'
}

export type MessageTypesValue = `${MessageTypes}`

export interface MessageOptions {
  type: MessageTypesValue
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
  position?: 't-l' | 't-m' | 't-r' | 'b-l' | 'b-m' | 'b-r' 
}

export interface MessageExpose extends Pick<MessageProps, '_id' | 'close'> {
  _ad: number
  _height: Ref<number | undefined>
  _gap: Ref<number | undefined>
  _setOffset: (value: number) => void 
}

export interface MessageIns {
  [k: string]: any
}

export type MessageMethods = {
  [K in MessageTypes]: (content: string) => ComponentPublicInstance<MessageExpose>
} & { 
  closeAll: () => void 
}

export interface MessageFn extends MessageMethods {
  (options: MessageOptions | string): ComponentPublicInstance<MessageExpose>
}

export interface MessageProps extends MessageOptions {
  /** `_id` is private props */
  _id: string
  close: (id?: string) => void
}