export const types = { 
  primary: 'primary',
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'danger'
}

export type Options = {
  type: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  content: string
  duration?: number
  prefix?: string
}

export type Ins = {
  [k: string]: any
}