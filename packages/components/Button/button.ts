export interface ButtonProps {
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  loading?: boolean
  isPrefix?: boolean
  bgColor?: string
  color?: string
  plain?: boolean
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}