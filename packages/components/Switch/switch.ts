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
  size?: 'small' | 'normal' | 'large'
}

export interface SwitchEmits {
  (e: 'update:modelValue', checked: boolean): void
}

export type SwitchState = 0 | 1

export type SwitchIcons = ['onIcon', 'offIcon']

export type SwitchTexts = ['onText', 'offText']