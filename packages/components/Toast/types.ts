export const types = { 
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}

export interface Options {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
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