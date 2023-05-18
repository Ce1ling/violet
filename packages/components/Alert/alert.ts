export type AlertType = 'primary' | 'success' | 'info' | 'warning' | 'danger'

export interface AlertProps {
  type?: AlertType
  dark?: boolean
  closable?: boolean
  preIcon?: boolean | string
  center?: 'none' | 'text' | 'all'
  title?: string
  content?: string
}

export interface AlertEmits {
  (e: 'close', event: MouseEvent): void
}

export type AlertDefaultPreIcon = {
  [k in AlertType]?: string
}