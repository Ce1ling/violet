export interface LinkProps {
  type?: 'primary' | 'success' | 'warning' | 'danger'
  disabled?: boolean
  underline?: boolean
}

export interface LinkEmits {
  (e: 'click', event: MouseEvent): void
}

export interface LinkSlots {
  default?: (props: {}) => any
  prefix?: (props: {}) => any
  suffix?: (props: {}) => any
}