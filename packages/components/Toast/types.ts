import type { ComponentPublicInstance } from 'vue'

export interface Types {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
}
export const toastTypes: Types = { 
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}

export interface Options {
  type: keyof Types
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
}

export interface Ins {
  [k: string]: any
}

export type ToastMethods = {
  [K in keyof Types]: (str: string) => ComponentPublicInstance
}

export interface ToastFn extends ToastMethods {
  (options: Options | string): ComponentPublicInstance
}