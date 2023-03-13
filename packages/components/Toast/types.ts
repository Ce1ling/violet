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
  prefix?: string
}

export interface Ins {
  [k: string]: any
}