import { ViBaseTypes } from '../types'

export interface TagProps {
  type?: ViBaseTypes
  border?: boolean
  closable?: boolean
  disabled?: boolean
  round?: boolean
  prefix?: string
}

export interface TagEmits {
  (e: 'close', event: MouseEvent): void
}

export interface TagSlots {
  default?: (props: {}) => any
}
