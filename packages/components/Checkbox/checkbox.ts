export type CheckboxModelValue = boolean | string[]

export interface CheckboxProps {
  modelValue: CheckboxModelValue
  label?: string
  disabled?: boolean
  border?: boolean
  isBtn?: boolean
}

export interface CheckboxEmits {
  (e: 'update:modelValue', label: CheckboxModelValue): void
  (e: 'change', value: boolean, oldValue: boolean): void
}

export interface CheckboxSlots {
  default?: (props: {}) => any
}