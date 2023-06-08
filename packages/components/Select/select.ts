export interface SelectOption {
  label: string
  value: string
  [k: string]: any
}

export interface SelectProps<T> {
  modelValue: SelectOption['value']
  options: T
  disabled?: boolean
  clearable?: boolean
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string): void
}

export type SelectPropsDefaults<T> = Omit<SelectProps<T>, 'modelValue' | 'options'>