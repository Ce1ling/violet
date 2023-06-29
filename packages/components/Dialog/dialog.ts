export interface DialogProps {
  modelValue: boolean
  title?: string
  content?: string
  width?: string
  showCloseBtn?: boolean
  appendToBody?: boolean
  zIndex?: number
  center?: boolean
  boxCenter?: boolean
  mask?: boolean
  movable?: boolean
  lockScroll?: boolean
  clickMaskClose?: boolean
  destroy?: boolean
  beforeClose?: (fn: () => void) => void
}

export interface DialogEmits {
  (e: 'update:modelValue', val: boolean): void
  (e: 'open' | 'close', val: boolean): void
}

export interface DialogSlots {
  default?: (props: {}) => any
  header?: (props: {}) => any
  footer?: (props: {}) => any
}