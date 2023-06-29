export interface TagProps {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  border?: boolean
  closable?: boolean
  disabled?: boolean
  round?: boolean
}

export interface TagEmits {
  (e: 'close', event: MouseEvent): void
}

export interface TagSlots {
  default?: (props: {}) => any
}