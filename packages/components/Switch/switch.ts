import { ViBaseSizes } from '../types'

export interface SwitchProps {
  modelValue: boolean
  disabled?: boolean
  loading?: boolean
  isInside?: boolean
  onColor?: string
  offColor?: string
  onText?: string
  offText?: string
  onIcon?: string
  offIcon?: string
  width?: string
  size?: ViBaseSizes
  beforeChange?: () => boolean
}

export interface SwitchEmits {
  (e: 'update:modelValue', checked: boolean): void
}

export type SwitchState = 0 | 1

export type SwitchIcons = ['onIcon', 'offIcon']

export type SwitchTexts = ['onText', 'offText']

export interface SwitchSlots {
  on?: (props: {}) => any
  off?: (props: {}) => any
}
