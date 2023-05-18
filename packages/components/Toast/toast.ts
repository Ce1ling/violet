import type { ComponentPublicInstance } from 'vue'


export interface ToastTypes {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
}

export const toastTypes: ToastTypes = { 
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}

export interface ToastOptions {
  type: keyof ToastTypes
  content: string
  duration?: number
  closable?: boolean
  isHtmlStr?: boolean
  prefix?: string
  zIndex?: number
}

export interface ToastIns {
  [k: string]: any
}

export type ToastMethods = {
  [K in keyof ToastTypes]: (str: string) => ComponentPublicInstance
}

export interface ToastFn extends ToastMethods {
  (options: ToastOptions | string): ComponentPublicInstance
}

export interface ToastProps {
  type: ToastOptions['type']
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