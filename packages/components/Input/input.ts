import { Icon } from '../index'

import type { IconProps } from '../Icon/icon'


export type InputIcon = typeof Icon | IconProps | string

export interface InputProps {
  modelValue: string
  type?: string
  disabled?: boolean
  clearable?: boolean
  showPwd?: boolean
  rows?: string
  limit?: string
  showLimit?: boolean
  limitSeparator?: string
  prefixIcon?: InputIcon
  suffixIcon?: InputIcon
}