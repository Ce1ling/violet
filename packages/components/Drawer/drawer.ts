export interface DrawerProps {
  modelValue: boolean
  title?: string
  width?: string
  height?: string
  direction?: 'l-r' | 'r-l' | 't-b' | 'b-t'
  zIndex?: number
  showClose?: boolean
  appendToBody?: boolean
  mask?: boolean
  lockScroll?: boolean
  clickMaskClose?: boolean
  beforeClose?: (fn: () => void) => void
}

export interface DrawerEmits {
  (e: 'update:modelValue', val: boolean): void
  (e: 'open' | 'close', val: boolean): void
}

export interface DrawerSlots {
  default?: (props: {}) => any
  header?: (props: {}) => any
  footer?: (props: {}) => any
}